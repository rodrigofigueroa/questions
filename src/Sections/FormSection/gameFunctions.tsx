export const questions = [
  'How old are you?',
  'How many Books have you been reading?'
]

export const randomNumber = ( max: number ): number => {
  return Math.round( ( max - 0 ) * ( Math.random() + 0 ))
}

export type ButtonTypeEventT = React.MouseEvent<HTMLButtonElement>