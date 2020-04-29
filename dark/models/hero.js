const mongoose = require('mongoose');
mongoose.set('useFindAndModify', false);

const Schema = mongoose.Schema;

const heroSchema = new Schema({
  name: {
    type: String,
    required: true
  },
  skills: {
    type: Array,
    default: []
  },
  date: {
    type: Date,
    default: Date.now
  }
});

var heroModel = mongoose.model("Hero", heroSchema);

module.exports = {
  getHeroes: () => {
    return heroModel.find({}).limit(10).sort({ _id: -1 })
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
  updateHero: (id, args) => {
    return heroModel.findByIdAndUpdate(
      id,
      {
        name: args.name,
        date: args.date
      },
      { new: true }
    );
  },
  updateSkills: (id, args) => {
    return heroModel.findOne({ _id: id }, (err, hero) => {
      if(args.operation == "0") {
        hero.skills.push(args.skill)
      } else {
        hero.skills = hero.skills.filter(val => val != args.skill);
      }
      hero.save(err => {
        if(err) {
          console.log("Error");
        }
      });
    });
  }
};