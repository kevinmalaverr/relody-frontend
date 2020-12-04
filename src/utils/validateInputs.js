// validation of inputs
export const validateEmail = (input) => {
  return /^[\w\.\+\-"!%]{1,64}@[\w-]{1,64}\..+/.test(input)
}
