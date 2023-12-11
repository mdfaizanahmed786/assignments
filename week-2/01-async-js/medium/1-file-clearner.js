const fs=require("fs")

fs.readFile("./data.txt", "utf-8", function(err, data){
    // This below file will replace all extra spaces 
    const cleanedContent = data.replace(/\s+/g, ' ');
    fs.writeFile("./data.txt", cleanedContent.trim(), function(err){
        console.log(err)
    })
})