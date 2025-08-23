import * as ping from "./ping.listener";
import * as init from "./bot.listener";
import * as join from "./join-participant.listener"
import * as helper from "./helper.listener"

export const listeners = {
  ping,
  init,
  join,
  helper
};
