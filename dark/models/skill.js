const mongoose = require('mongoose');
mongoose.set('useFindAndModify', false);

const Schema = mongoose.Schema;

const skillSchema = new Schema({
  name: {
    type: String,
    required: true
  },
  description: {
    type: String,
    required: true
  },
  date: {
    type: Date,
    default: Date.now
  }
});

var skillModel = mongoose.model("Skill", skillSchema);

module.exports = {
  getSkills: () => {
    return skillModel.find({}).limit(10).sort({ _id: -1 })
      .then(skills => {
        return skills.map(skill => {
          return {
            ...skill._doc,
            id: skill.id,
            date: new Date(skill.date).toLocaleDateString()
          };
        });
      })
      .catch(err => {
        throw err;
      });
  },
  getSkill: id => {
    return skillModel.findOne({ _id: id })
      .then(skill => {
        return {
          ...skill._doc,
          id: skill.id,
          date: new Date(skill.date).toLocaleDateString()
        }
      })
      .catch(err => {
        throw err;
      });
  },
  createSkill: skill => {
    return skillModel(skill).save();
  },
  removeSkill: id => {
    return skillModel.findByIdAndRemove(id);
  },
  removeSkills: args => {
    return skillModel.remove({ '_id': { $in: args } });
  },
  updateSkill: (id, args) => {
    return skillModel.findByIdAndUpdate(
      id,
      {
        name: args.name,
        description: args.description,
        date: args.date
      },
      { new: true }
    );
  },
  getHeroSkills: args => {
    return skillModel.find({ '_id': args })
      .then(skills => {
        return skills.map(skill => {
          return {
            ...skill._doc,
            id: skill.id,
            date: new Date(skill.date).toLocaleDateString()
          };
        });
      })
      .catch(err => {
        throw err;
      });
  }
};