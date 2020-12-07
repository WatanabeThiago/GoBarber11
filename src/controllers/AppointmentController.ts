import { Request, Response} from 'express'
import { getRepository } from 'typeorm'

import Appointment from '../database/entity/Appointment'

class AppointmentController {
    async list(req: Request, res: Response) {
        return res.json(await getRepository(Appointment).find())
    }

    async create(req: Request, res: Response) {
        try{
            const appointmentRepository = getRepository(Appointment)
    


            const appointment = appointmentRepository.create({
                ...req.body
            })

            await appointmentRepository.save(appointment)


            return res.json(appointment);
        }
        catch(err) {
            return res.status(400).json({ error: err.message})
        }
    }
}

export default new AppointmentController();