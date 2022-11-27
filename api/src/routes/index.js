const { Router } = require('express');
const { countryRoute } = require('./country');
const activityRoute = require('./activity');
// Importar todos los routers;
// Ejemplo: const authRouter = require('./auth.js');


const router = Router();
router.use('/countries', countryRoute)
router.use('/activities', activityRoute)

// Configurar los routers
// Ejemplo: router.use('/auth', authRouter);

module.exports = router;
