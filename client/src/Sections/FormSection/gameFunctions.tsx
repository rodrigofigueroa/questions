export const questions = [
  'How old are you?',
  'How many Books have you been reading?',
  'Do you like classical Music'
]

export const randomNumber = ( max: number ): number => {
  return Math.round( ( max - 0 ) * ( Math.random() + 0 ))
}
