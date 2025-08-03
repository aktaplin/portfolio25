#!/usr/bin/env node

// Script to generate password hash for case study protection
// Usage: node scripts/generateHash.js "your-password-here"

import crypto from 'crypto'

function generatePasswordHash(password) {
  const saltedPassword = password + "portfolio_salt_2025"
  const hash = crypto.createHash('sha256').update(saltedPassword).digest('hex')
  return hash
}

const password = globalThis.process?.argv[2]

if (!password) {
  console.log('Usage: node scripts/generateHash.js "your-password-here"')
  console.log('Example: node scripts/generateHash.js "myNewPassword123"')
  globalThis.process?.exit(1)
}

const hash = generatePasswordHash(password)

console.log('\n=== Password Hash Generated ===')
console.log(`Password: "${password}"`)
console.log(`Hash: "${hash}"`)
console.log('\nTo update the password:')
console.log('1. Copy the hash above')
console.log('2. Replace the passwordHash value in src/config/auth.js')
console.log('3. Commit and deploy the changes')
console.log('\nCurrent auth.js snippet:')
console.log(`passwordHash: "${hash}",`)