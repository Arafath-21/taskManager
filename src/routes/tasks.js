import {Router} from 'express'
import taskController from '../controller/tasks.js'
const router = Router()

router.get('/tasks',taskController.getAllTasks)
router.get('/tasks/:id',taskController.getTask)
router.post('/tasks',taskController.createTask)
router.patch('/tasks/:id',taskController.updateTask)
router.delete('/tasks/:id',taskController.deleteTask)

export default router;