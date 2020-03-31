export const SCAN   = 'osschat/wechaty/event/scan'
export const LOGIN  = 'osschat/wechaty/event/login'
export const LOGOUT = 'osschat/wechaty/event/logout'

export interface LogonoffState {
  [k: string]: {
    qrcode?   : string,
    userName? : string,
  }
}
