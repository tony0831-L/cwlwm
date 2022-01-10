const axios =require("axios")

async function trade(data){
    let res =  await axios.post('https://cwslbot.herokuapp.com/user/trade',data)
    return res
}

async function addRes(data){
    let res =  await axios.post('https://cwslbot.herokuapp.com/res/addRes',data)
    return res
}

async function editUser(data){
    let res =  await axios.put('https://cwslbot.herokuapp.com/user/edit',data)
    return res
}

async function editRes(data){
    let res =  await axios.put('https://cwslbot.herokuapp.com/res/editRes',data)
    return res
}

module.exports = {
    trade,editUser,addRes,editRes
}