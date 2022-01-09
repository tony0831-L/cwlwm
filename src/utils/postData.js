const axios =require("axios")

async function trade(data){
    let res =  await axios.post('https://cwslbot.herokuapp.com/user/trade',data)
    return res
}
async function editUser(data){
    let res =  await axios.put('https://cwslbot.herokuapp.com/user/edit',data)
    return res
}

module.exports = {
    trade,editUser
}