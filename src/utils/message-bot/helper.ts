export const joinParticipantPartOneAboutWebhook = (url: string) => {
  return `🔹 Спершу потрібно перейти на сайт [Codewars](https://www.codewars.com) та **зареєструватися** (або увійти у вже готовий акаунт).

🔹 Далі відкрий вкладку [Редагування профілю](https://www.codewars.com/users/edit).

🔹 Знайди розділ **Webhooks** та додай адресу нашого сайту у форматі ${url}.
`;
};

export const joinParticipantPartOneAboutDiscord = () => {
  return `Після цього зайдіть у Discord та напишіть команду \`/join {codewars username}\` і **ласкаво просимо на галеру… ой, челендж!** 🎉`;
};
