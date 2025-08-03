# Password Protection System

This portfolio uses a client-side password protection system to secure case study content while keeping the homepage public.

## Current Setup

- **Default Password**: `portfolio2025`
- **Protection Level**: Case studies only (homepage remains public)
- **Session Duration**: Until browser tab is closed

## How It Works

1. **Homepage**: Fully accessible without password
2. **Case Study Access**: Clicking any case study card triggers password prompt
3. **Authentication**: Single password unlocks all case studies for the session
4. **Session Management**: Authentication persists until tab/browser closes

## Changing the Password

1. Generate a new password hash:
   ```bash
   node scripts/generateHash.js "your-new-password"
   ```

2. Copy the generated hash and update `src/config/auth.js`:
   ```javascript
   passwordHash: "your-new-hash-here"
   ```

3. Commit and deploy:
   ```bash
   git add src/config/auth.js
   git commit -m "Update case study password"
   git push origin master
   ```

## Security Features

- **Client-side hashing**: Password is hashed with salt before comparison
- **No password storage**: Only hash is stored, not the actual password
- **Session-based**: No persistent storage of authentication state
- **Themed integration**: Password modal matches all portfolio themes

## Architecture

- `src/config/auth.js` - Password hash storage and verification
- `src/contexts/AuthContext.jsx` - Authentication state management
- `src/components/PasswordModal.jsx` - Password input interface
- `src/hooks/useAuth.js` - Authentication hook
- `scripts/generateHash.js` - Password hash generation utility

## Usage for Sharing

Include this information when sharing your portfolio:

> **Case Study Access**: Some case studies are password-protected. Please use the password: `portfolio2025` to view the full project details.

You can change this password anytime using the steps above.