import jwd from "jsonwebtoken"
import fs from "fs"

/** 
 * @param {*} data
 * @returns
*/


const generateAcessToken = (data) => {
    if(!data) return null
    
    delete data.pas
    return jwt.sign(data,process.env.TOKEN,{ expiresIn:'1800s'})
 }


 /** 
 * @param {*} user
 * @param {*} password
*/

const auth = (name,password) => {
    const file = fs.readFileSync('./controllers/auth/users.json','utf8')
    const users = JSON.parse(file)
    const user = users.find((e) => e.name === name && e.password === password)

    return generateAcessToken(user)
}

export {auth}