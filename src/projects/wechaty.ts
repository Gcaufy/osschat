/**
 * Project: Wechaty
 * GitHub: https://github.com/wechaty/
 * Maintainer: Huan LI (李卓桓) https://github.com/huan
 *
 */
import {
  RepoConfig,
}                 from '../config'

const ROOM_ID_LIST_WECHATY_DEVELOPER = [
  '24113855649@chatroom',   // Wechaty Developers' Room Next
  '17275396976@chatroom',   // Wechaty Developers' Room 0
  '7582163093@chatroom',    // Wechaty Developers' Room 1
  '5729603967@chatroom',    // Wechaty Developers' Room 2
  '4335801863@chatroom',    // Wechaty Developers' Room 3
  '22396239792@chatroom',   // Wechaty Developers' Room 4
  '19112581505@chatroom',   // Wechaty Developers' Room 5
  /* ******************** */
  '17559195108@chatroom',   // Wechaty Ignite 1
  '18171595067@chatroom',   // Wechaty Ignite 2
  '19487389780@chatroom',   // Wechaty Ignite 3
]

const ROOM_ID_BOT5_CLUB              = '18095776930@chatroom'
const ROOM_ID_PYTHON_GO_JAVA_WECHATY = '19367909379@chatroom'

export const config: RepoConfig = {
  'chatie/(blog|*wechaty*)'          : ROOM_ID_LIST_WECHATY_DEVELOPER,
  'wechaty/(python|go|java)-wechaty' : ROOM_ID_PYTHON_GO_JAVA_WECHATY,
  'wechaty/*wechaty*'                : ROOM_ID_LIST_WECHATY_DEVELOPER,
  'wechaty/bot5.club'                : ROOM_ID_BOT5_CLUB,
  'wechaty/friday'                   : [
    ...ROOM_ID_LIST_WECHATY_DEVELOPER,
    ROOM_ID_BOT5_CLUB,
  ],
}

export default config
