import { WebHookCodeWarsDto } from "@/dto/web-hook-code-wars.dto";
import { getUserbyCodeWarsIdOrName, getUserKata } from "./code-wars-api.service";

export const webHookCodeWars = async (data: WebHookCodeWarsDto) => {
  if (data.action != "honor_changed") return

  const user = await getUserKata(data.user.id)


}
