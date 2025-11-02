# Render Deployment Guide

## Quick Deploy

1. Push your code to GitHub
2. Go to [Render Dashboard](https://dashboard.render.com/)
3. Click "New +" → "Blueprint"
4. Connect your GitHub repository
5. Render will automatically detect `render.yaml` and configure everything

## Manual Deploy (Alternative)

1. Go to [Render Dashboard](https://dashboard.render.com/)
2. Click "New +" → "Web Service"
3. Connect your GitHub repository
4. Configure:
   - **Name**: consulting-website (or your preferred name)
   - **Environment**: Node
   - **Build Command**: `npm install && npm run build`
   - **Start Command**: `npm start`
   - **Environment Variables**:
     - `NODE_ENV` = `production`
     - `SESSION_SECRET` = (generate a random value)
     - `PORT` = `5000`

## Environment Variables

The app requires the following environment variable:
- `SESSION_SECRET`: A random string for session encryption (Render can auto-generate this)

## What's Included

- ✅ `render.yaml` - Blueprint configuration for one-click deploy
- ✅ `.node-version` - Specifies Node.js 20
- ✅ Production build script in `package.json`
- ✅ Proper port configuration for Render

## After Deployment

Your site will be available at: `https://your-app-name.onrender.com`

You can add a custom domain in the Render dashboard under Settings → Custom Domain.
