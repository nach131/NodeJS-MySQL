const bcrypt = require('bcryptjs')
const helpers = {}

helpers.encryptPassword = async (passwod) => {
  const salt = await bcrypt.genSalt(10)
  const hash = await bcrypt.hash(passwod, salt)
  return hash
}
helpers.matchPassword = async (password, savePasword) => {
  try {
    await bcrypt.compare(password, savePasword)

  } catch (e) {
    console.logr(e)
  }
}
module.exports = helpers