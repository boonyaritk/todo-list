const router = require('express').Router()
const controllers = require('../../controllers/list.controller')

router.get('/', controllers.onGetAll)
router.post('/', controllers.onInsert)
router.put('/:id', controllers.onUpdate)
router.delete('/:id', controllers.onDelete)

module.exports = router