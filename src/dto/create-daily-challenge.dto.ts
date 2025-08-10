export interface CreateDailyChallengeDto {
  date: Date
  urlKata: string
  description?: string
  hint: string[]
  botId: string
}
