export interface CodeWarsUserModel {
  id: string
  username: string
}
//kata
export type Language = 'typescript' | 'javascript' | (string & {});

export interface KataEntry {
  id: string;
  name: string;
  slug: string;
  completedLanguages: Language[];
  completedAt: string;
}
export interface KataListResponse {
  totalPages: number;
  totalItems: number;
  data: KataEntry[];
}
//user
export interface CodewarsUser {
  id: string;
  username: string;
  name: string;
  honor: number;
  clan: string;
  leaderboardPosition: number;
  skills: string[];
  ranks: {
    overall: ILanguageUser
    languages: {
      [language: string]: ILanguageUser
    };
  };
  codeChallenges: {
    totalAuthored: number;
    totalCompleted: number;
  };
}

export interface ICodeWarsUserNotfound {
  success: false,
  reason: string
}

export interface ILanguageUser {
  rank: number;
  name: string;
  color: string;
  score: number;
}
