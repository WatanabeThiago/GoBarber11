import { Request, Response} from 'express'
import { getRepository } from 'typeorm'

import User from '../database/entity/User'

class UserController {
    async list(req: Request, res: Response) {
        return res.json(await getRepository(User).find())
    }

    async create(req: Request, res: Response) {
        try{
            const userRepository = getRepository(User)
            const { user_email } = req.body;

            const userExists = await userRepository.findOne({ where:{ user_email} })

            if(userExists) {
                throw new Error('Usuario já existe.')
            }

            const user = userRepository.create({
                ...req.body
            })

            await userRepository.save(user)


            return res.json(user);
        }
        catch(err) {
            return res.status(400).json({ error: err.message})
        }
    }
}

export default new UserController();