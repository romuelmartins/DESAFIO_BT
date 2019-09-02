const router = require("express").Router()
const handles = require("../controllers/pessoaController")

router.get('/', handles.handleGetAll);

router.get('/:id', handles.handleGet);

router.post('/', handles.handlePost); 

module.exports = router 

