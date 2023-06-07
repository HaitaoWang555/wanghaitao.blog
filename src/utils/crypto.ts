const CryptoJS = require('crypto-js')

const key = CryptoJS.enc.Utf8.parse(process.env.NEXT_PUBLIC_CRYPTO_KEY)
const iv = CryptoJS.enc.Utf8.parse(process.env.NEXT_PUBLIC_CRYPTO_IV)

//解密方法
function decrypt(val: string) {
  if (!val) return ''
  try {
    let encryptedHexStr = CryptoJS.enc.Hex.parse(val)
    let srcs = CryptoJS.enc.Base64.stringify(encryptedHexStr)
    let decrypt = CryptoJS.AES.decrypt(srcs, key, { iv: iv, mode: CryptoJS.mode.CBC, padding: CryptoJS.pad.Pkcs7 })
    let decryptedStr = decrypt.toString(CryptoJS.enc.Utf8)
    return decryptedStr.toString()
  } catch (error) {
    console.error(error)
    return '**'
  }
}

//加密方法
function encrypt(val: string) {
  if (!val) return ''
  try {
    let srcs = CryptoJS.enc.Utf8.parse(val)
    let encrypted = CryptoJS.AES.encrypt(srcs, key, { iv: iv, mode: CryptoJS.mode.CBC, padding: CryptoJS.pad.Pkcs7 })
    return encrypted.ciphertext.toString()
  } catch (error) {
    console.error(error)
    return '**'
  }
}

export { decrypt, encrypt }
