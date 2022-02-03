const Service = require('../services/list.service')

const methods = {
  async onGetAll(req, res) {
    try {
      let result = await Service.find(req)
      res.status(200).json({ data: result });
    } catch (error) {
      res.status(404).json({ data: error });
    }
  },

  async onGetById(req, res) {
    try {
      let result = await Service.findById(req.params.id)
      res.status(200).json({ data: result });
    } catch (error) {
      res.status(404).json({ data: error });
    }
  },

  async onInsert(req, res) {
    try {
      let result = await Service.insert(req.body)
      res.status(200).json({ data: result });
    } catch (error) {
      res.status(404).json({ data: error });
    }
  },

  async onUpdate(req, res) {
    try {
      const result = await Service.update(req.params.id, req.body)
      res.status(200).json({ data: result });
    } catch (error) {
      es.status(404).json({ data: error });
    }
  },

  async onDelete(req, res) {
    try {
      await Service.delete(req.params.id)
      res.status(200).json({ data: result });
    } catch (error) {
      res.status(404).json({ data: error });
    }
  },

}

module.exports = { ...methods }