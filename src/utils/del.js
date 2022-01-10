const axios =require("axios")

async function delRes(index){
    let res =  await axios.delete("https://cwslbot.herokuapp.com/res/delRes", {
        headers: {
            Authorization: "***" 
        },
        data: {
            "id":index
        }
    })
    return res
}

module.exports = {
    delRes
}