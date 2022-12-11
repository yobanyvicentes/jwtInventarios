//importar Router desde express
const {Router} = require('express');

//importar el modelo
const {register, login} = require('../controllers/auth');

const router = Router();

//registrar usuarios
router.post('/register', register);

//login usuarios
router.post('/login', login);

module.exports = router;

/*
router.post('/', async function(req,res){
    try {

    } catch (error) {
        res.status(500).send('hubo un error');
    }
});
*/
