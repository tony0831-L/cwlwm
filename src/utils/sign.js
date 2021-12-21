const axios =require("axios")

async function login(data){
    let res = await axios.post('https://cwslbot.herokuapp.com/user/sign',data)
    return res;
}

async function regi(data){
    let res = await axios.post('https://cwslbot.herokuapp.com/user/regi',data)
    return res;
}

module.exports = {
    login,regi
}