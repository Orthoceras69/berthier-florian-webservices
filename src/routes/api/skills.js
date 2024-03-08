import express from 'express';
import skillsController from '#src/controllers/skillsController'
import authGard from '#src/middleware/authGard'
const router = express.Router();

router.get('/',authGard.adminProtect,skillsController.allSkills);
router.get('/:id',authGard.adminProtect,skillsController.oneSkill);
router.post('/',authGard.adminProtect,skillsController.createSkill);
router.put('/:id',authGard.adminProtect,skillsController.updateSkill);

export default router;