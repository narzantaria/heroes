const mongoose = require('mongoose');
mongoose.set('useFindAndModify', false);

const Schema = mongoose.Schema;

const heroSchema = new Schema({
  name: String,
  skills: [{
    type: mongoose.Schema.Types.ObjectId,
    ref: 'Skill'
  }],
  date: Date
});

var heroModel = mongoose.model("Hero", heroSchema);

module.exports = {
  getHeroes: () => {
    return heroModel.find({}).limit(100).sort({ _id: -1 })
      .then(heroes => {
        return heroes.map(hero => {
          return {
            ...hero._doc,
            id: hero.id,
            date: new Date(hero.date).toLocaleDateString()
          };
        });
      })
      .catch(err => {
        throw err;
      });
  },
  getHero: id => {
    return heroModel.findOne({ _id: id })
      .then(hero => {
        return {
          ...hero._doc,
          id: hero.id,
          date: new Date(hero.date).toLocaleDateString()
        }
      })
      .catch(err => {
        throw err;
      });
  },
  createHero: hero => {
    return heroModel(hero).save();
  },
  removeHero: id => {
    return heroModel.findByIdAndRemove(id);
  },
  updateHero: (id, args, operation) => {
    return heroModel.findOne({ _id: id }, (err, hero) => {
      if(operation == 'update') {
        hero.name = args.name;
        hero.date = args.date;
      }
      if(operation == 'addskill') {
        hero.skills.push(args);
      }
      if(operation == 'removeskill') {
        hero.skills = hero.skills.filter(val => val != String(args));
      }
      hero.save(err => {
        if(err) {
          console.log("Error");
        }
      });
    });
  }
};