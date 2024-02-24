import express from 'express'
import ChampionsRoutes from './Routes/ChampionsRoutes.js'

const router = express.Router()

router.use('/champions', ChampionsRoutes)

export default router