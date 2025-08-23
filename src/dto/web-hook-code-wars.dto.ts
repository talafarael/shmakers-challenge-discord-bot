export interface WebHookCodeWarsDto {
  action: 'honor_changed';
  user: {
    id: string;
    honor: number;
    honor_delta: number;
  };
}
