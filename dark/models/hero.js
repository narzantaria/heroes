const mongoose = require('mongoose');
mongoose.set('useFindAndModify', false);

const Schema = mongoose.Schema;

const heroSchema = new Schema({
  name: {
    type: String,
    required: true
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
  }
};