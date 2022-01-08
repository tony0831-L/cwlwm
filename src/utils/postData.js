const axios =require("axios")

async function trade(data){
    let res =  await axios.post('https://cwslbot.herokuapp.com/user/sign',data)
    return res
}

module.exports = {
    trade
}