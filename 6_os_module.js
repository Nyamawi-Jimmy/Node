name: os.type()
const os = require('os')

//User INfo
const user = os.userInfo()
console.log(user)


//Screen Info

console.log(`Screen has been alive for ${os.uptime()}seconds`)


const systemInfo = {
    name: os.type(),
    release: os.release(),
    totalmem: os.totalmem(),
    frameElement: os.freemem()

}
console.log(systemInfo)