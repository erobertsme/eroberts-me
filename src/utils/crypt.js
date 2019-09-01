// Andr3wRiv3rs/crypt.js
// zero dependency symmetric encryption (node.js)
// https://gist.github.com/Andr3wRiv3rs/8149a1f973fde838458e02e382dc0861

const crypto = require('crypto')

export const encrypt = (string, key) => {
    const salt = crypto.randomBytes(16)
    const iv = crypto.randomBytes(16)

    const cipher = crypto.createCipheriv(
        'aes-256-cbc', 
        crypto.pbkdf2Sync(key, salt, 12, 32, 'sha512'),
        iv
    )
    
    const encrypted = Buffer.concat([
        cipher.update(string), 
        cipher.final()
    ])

    return `${iv.toString('hex')}:${encrypted.toString('hex')}|${salt.toString('hex')}`
}

export const decrypt = (string, key) => {
    let [ciphertext, salt] = string.split('|')
    ciphertext = ciphertext.split(':')

    const decipher = crypto.createDecipheriv(
        'aes-256-cbc', 
        crypto.pbkdf2Sync(key, Buffer.from(salt, 'hex'), 12, 32, 'sha512'), 
        new Buffer.from(
            ciphertext.shift(), 
            'hex'
        )
    )

    return Buffer.concat([
        decipher.update(new Buffer.from(
            ciphertext.join(':'), 
            'hex'
        )), 
        decipher.final()
    ]).toString()
}