import { Router } from "express";
import taskRouter from './tasks.js'
const router = Router()

router.use('/api/v1',taskRouter)

export default router