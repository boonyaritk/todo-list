const List = require('../models/List')

module.exports = { 
  async find() {
    try {
      const finded = await List.find({});
      return finded;
    } catch (error) {
      throw new Error(error);
    }
  },

  async insert(data) {
    try {
      const collection = new List(data)
      const inserted = await collection.save()
      return inserted;
    } catch (error) {
      throw new Error(error);
    }
  },
  async update(id, data) {
    try {
      const oldCollection = await List.findById(id)
      if (!oldCollection) {
        throw new Error('id: not found');
      }
      const updated = await List.updateOne({ _id: id }, data)
      return updated;
    } catch (error) {
      throw new Error(error);
    }
  },

  async delete(id) {
    try {
      const oldCollection = await List.findById(id)
      if(!oldCollection) {
        throw new Error('id: not found');
      }
      const deleted = await List.deleteOne({ _id: id })
      return deleted
    } catch (error) {
      throw new Error(error);
    }
  },
 }

