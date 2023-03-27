
export interface playersObjectI {
  namePlayer?: string,
  playerNumber: number
}

export interface sectionI { sec_1: boolean, sec_2: boolean, sec_3: boolean, sec_4: boolean }

export interface playersReduxI {
  savePlayers: ( payload: any ) => ({}),
  saveSections: ( payload: any ) => ({}),
  auth?: {
    players: playersObjectI[]
    sectionQ?: sectionI
  }
}

export interface logUserI {
  auth?: {
    log?: {
      token?: string,
      user?: {}
    }
  },
  logOutUser: ( payload: any ) => void
}

export interface actionI {
  type: string,
  payload: any
}

export interface dataCssI {
  dataCss?: string
}

export interface openNav {
  open: boolean
}

export type ButtonTypeEventT = React.MouseEvent<HTMLButtonElement>

export type FormTypeEventT = React.FormEvent<HTMLFormElement>

export type ATypeEventT = React.MouseEvent<HTMLElement | Element >

export interface logI {
  log_in: ( payload: any ) => void
}
export interface PrivateRouteI {
  children: any,
  auth: {
    log: {
      token?: string
    }
  }
}