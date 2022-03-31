
export interface playersObjectI {
  namePlayer?: string,
  playerNumber: number
}

export interface playersReduxI {
  savePlayers: ( payload: any ) => ({}),
  auth?: {
    players: playersObjectI[]
  }
}

export interface actionI {
  type: string,
  payload: any
}

export interface dataCssI {
  dataCss?: string
}

export type ButtonTypeEventT = React.MouseEvent<HTMLButtonElement>