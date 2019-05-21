import express from 'express';
import { createCause, getAllCause,getSingleCause, updateCause, deleteCause} from '../controllers/cause';
const router = express.Router();
router.post('/causes', createCause);
router.get('/getAllCauses', getAllCause);
router.get('/getSingleCause/:causeId', getSingleCause);
router.get('/updateCause/:causeId', updateCause);
router.get('/deleteCause/:causeId', deleteCause);


export default router;