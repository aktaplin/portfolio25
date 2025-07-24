# CLAUDE.md

This file provides guidance to Claude Code (claude.ai/code) when working with code in this repository.

## Project Overview

This is a React + Vite portfolio project configured for deployment to GitHub Pages. The project uses modern React (v19.1.0) with Vite as the build tool and includes ESLint for code quality.

## Development Commands

- `npm run dev` - Start development server with hot module replacement
- `npm run build` - Build for production (outputs to `dist/`)
- `npm run lint` - Run ESLint to check code quality
- `npm run preview` - Preview production build locally
- `npm run deploy` - Deploy to GitHub Pages using gh-pages

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
- **Deployment**: Configured for GitHub Pages deployment from `dist/` folder

## Key Technical Details

- Uses ES modules and modern JavaScript features
- React strict mode enabled in development
- Base path set for GitHub Pages deployment at `/portfolio25/`
- ESLint configured to ignore unused variables with uppercase pattern (`^[A-Z_]`)