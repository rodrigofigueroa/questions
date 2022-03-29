
export interface playersObjectI {
  playerName?: string,
  playerNumber: number
}

export interface playersReduxI {
  savePlayers: ( payload: any ) => ({})
}

export interface actionI {
  type: string,
  payload: any
}