// Password configuration for case study protection
// To change the password, run: node scripts/generateHash.js "your-new-password"

const AUTH_CONFIG = {
  // Default password: "portfolio2025" 
  // Change this hash when you want a new password
  passwordHash: "265e55af28eb7f4028daca5cd7f10f89f1efe911f802f82294a094fa8c0eb03b"
}

// Simple hash function for client-side password checking
async function hashPassword(password) {
  const encoder = new TextEncoder()
  const data = encoder.encode(password + "portfolio_salt_2025")
  const hashBuffer = await crypto.subtle.digest('SHA-256', data)
  const hashArray = Array.from(new Uint8Array(hashBuffer))
  return hashArray.map(b => b.toString(16).padStart(2, '0')).join('')
}

// Verify password against stored hash
export async function verifyPassword(inputPassword) {
  try {
    const inputHash = await hashPassword(inputPassword)
    return inputHash === AUTH_CONFIG.passwordHash
  } catch (error) {
    console.error('Password verification error:', error)
    return false
  }
}

// Session management
export const AuthSession = {
  isAuthenticated() {
    return sessionStorage.getItem('portfolioAuth') === 'authenticated'
  },
  
  setAuthenticated() {
    sessionStorage.setItem('portfolioAuth', 'authenticated')
  },
  
  clearAuthentication() {
    sessionStorage.removeItem('portfolioAuth')
  }
}

export default AUTH_CONFIG