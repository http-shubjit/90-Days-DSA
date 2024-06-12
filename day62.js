console.log("start")
setTimeout(() => {
    console.log("Settimeout")
}, 5000)

let starttime = new Date().getTime();
let endtime = starttime
while (endtime < starttime + 10000) {
    endtime = new Date().getTime()

}
console.log("End")

