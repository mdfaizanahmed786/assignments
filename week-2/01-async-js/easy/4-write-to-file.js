const fs=require('fs')

console.log("This is first..")
fs.readFile("./data.txt", "utf-8", function(err, data){
     console.log("This will log third")
    fs.writeFile("./data.txt", data+"This is getting added again", function(err){
        console.log("This will be 5th")
        if(err) console.log(err)
    })
console.log("This will be fourth..")
})
console.log("Hey ddue second...")