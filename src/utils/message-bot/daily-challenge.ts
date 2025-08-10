import { ChallengeMessageDto } from "@/dto/challenge.dto";

//need chagne
export const sendTodayKataMessage = ({ url }: ChallengeMessageDto) => {
  return `today kata url:${url}`
}
