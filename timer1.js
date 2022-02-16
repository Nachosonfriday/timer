
const args = process.argv.slice(2).filter(number => {
  return number > 0})


console.log(args)
time = 1000


const timer = (delay) => {
  for (let arg of args) {
    setTimeout(() => {process.stdout.write("beep\n")}, time * arg)
  }
 }

timer (args)

