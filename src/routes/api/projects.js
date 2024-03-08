import express from 'express';
import projectsController from '#src/controllers/projectsController'
import authGard from '#src/middleware/authGard'
const router = express.Router();

router.get('/',projectsController.allProjects);
router.get('/:id',authGard.protect,projectsController.oneProject);
router.post('/',authGard.adminProtect,projectsController.createProject);
router.put('/:id',authGard.adminProtect,projectsController.updateProject);
router.delete('/:id',authGard.adminProtect,projectsController.deleteProject);

export default router;