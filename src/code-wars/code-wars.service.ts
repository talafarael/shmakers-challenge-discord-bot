import { WebHookCodeWarsDto } from "./dto/web-hook-code-wars.dto";
import { CodewarsUser, ICodeWarsUserNotfound, KataListResponse } from "./model/code-wars.model";

// userData -its name or id
export const getUserbyCodeWars = async (userData: string): Promise<ICodeWarsUserNotfound | CodewarsUser> => {
  const response = await fetch(`https://www.codewars.com/api/v1/users/${userData}`);
  return await response.json()
}

export const getUserKata = async (userData: string): Promise<KataListResponse> => {
  const response = await fetch(`http://www.codewars.com/api/v1/users/${userData}/code-challenges/completed`);
  return await response.json()
}

export const webHookCodeWars = async (data: WebHookCodeWarsDto) => {
  if (data.action != "honor_changed") return
  const user = await getUserKata(data.user.id)
}
