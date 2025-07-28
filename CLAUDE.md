# CLAUDE.md

This file provides guidance to Claude Code (claude.ai/code) when working with code in this repository.

## Project Overview

This is a React + Vite portfolio project configured for deployment to GitHub Pages. The project uses modern React (v19.1.0) with Vite as the build tool and includes ESLint for code quality.

## Development Commands

- `npm run dev` - Start development server with hot module replacement
- `npm run build` - Build for production (outputs to `dist/`)
- `npm run lint` - Run ESLint to check code quality
- `npm run preview` - Preview production build locally
- ~~`npm run deploy` - Deploy to GitHub Pages using gh-pages~~ (deprecated - use GitHub Actions)

## Project Structure

- `src/` - React application source code
  - `App.jsx` - Main application component
  - `main.jsx` - Application entry point with React root mounting
  - `assets/` - Static assets (images, icons)
  - `App.css` and `index.css` - Styling files
- `public/` - Static files served directly
- `dist/` - Build output directory (generated)

## Configuration

- **Vite**: Configured with React plugin and GitHub Pages base path (`/portfolio25/`)
- **ESLint**: Uses modern flat config with React hooks and React refresh plugins
- **Deployment**: Automated GitHub Actions workflow deploys to GitHub Pages

## Deployment

The project uses GitHub Actions for automated deployment to GitHub Pages. The workflow is configured in `.github/workflows/deploy.yml`.

### Deployment Process:
1. **Automatic**: Any push to `master` branch triggers deployment
2. **Manual**: Can be triggered via GitHub Actions "workflow_dispatch"
3. **Build**: GitHub Actions runs `npm install` and `npm run build`
4. **Deploy**: Built files from `dist/` are pushed to `gh-pages` branch
5. **Serve**: GitHub Pages serves the site from `gh-pages` branch

### GitHub Pages Settings Required:
- **Source**: "Deploy from a branch"
- **Branch**: "gh-pages" 
- **Folder**: "/ (root)"

### Live Site:
- URL: https://aktaplin.github.io/portfolio25/

### Troubleshooting Deployment:
- If `gh-pages` npm package fails (Windows file locking issues), use GitHub Actions workflow
- If GitHub Actions times out, ensure Node.js version is 18 and use fast install flags
- For blank pages or 404 errors, check GitHub Pages source settings point to `gh-pages` branch
- Deployment typically takes 2-5 minutes to complete and propagate

## Key Technical Details

- Uses ES modules and modern JavaScript features
- React strict mode enabled in development
- Base path set for GitHub Pages deployment at `/portfolio25/`
- ESLint configured to ignore unused variables with uppercase pattern (`^[A-Z_]`)