const { Router } = require('express');
const { countryRoute } = require('./country');
// Importar todos los routers;
// Ejemplo: const authRouter = require('./auth.js');


const router = Router();
router.use('/countries', countryRoute)

// Configurar los routers
// Ejemplo: router.use('/auth', authRouter);


module.exports = router;
