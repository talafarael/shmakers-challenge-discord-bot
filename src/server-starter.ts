import express, { Request, Response } from 'express'
import { CreateDailyChallengeDto } from './dto'
import { createDailyChallenge, getAllTodaysDailyChallenge } from './services/daily-challenge'
export const serverStarter = async () => {
  const app = express()
  app.use(express.json());
  app.post('/create-dailly-challenge', async (req: Request<{}, {}, CreateDailyChallengeDto>, res: Response) => {
    try {
      console.log(req.body)
      const resCreate = await createDailyChallenge(req.body)
      res.status(200).json(resCreate)
    } catch (error) {
      res.status(500).json({ message: error instanceof Error ? error.message : "Internal Server Error" })
    }
  })
  getAllTodaysDailyChallenge()

  app.listen(3000)
}
