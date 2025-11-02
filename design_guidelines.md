# Design Guidelines: User-Uploaded Application

## Design Approach
**Selected Approach:** No Design Guidelines Required  
**Justification:** The user has uploaded their own complete application with existing design, layout, and functionality. This is a technical implementation task focused on making the uploaded application functional, not a design project. The application already has its established visual design, component structure, and user interface.

## Current Situation
The user has:
- Deleted the minimal placeholder application
- Uploaded their own complete web application
- Requested technical assistance to make it run properly

## Implementation Focus Areas

### Technical Analysis Required
The engineer should conduct a systematic review of the uploaded application:

**1. File Structure Analysis**
- Identify the application's framework/technology stack
- Locate entry points (index.html, app.js, main.ts, etc.)
- Determine frontend and backend architecture
- Check for build configuration files (vite.config, webpack.config, etc.)

**2. Dependency Management**
- Review package.json for required dependencies
- Check for lock files (package-lock.json, yarn.lock, pnpm-lock.yaml)
- Identify any missing or outdated packages
- Install all required dependencies

**3. Configuration Review**
- Examine server configuration and port settings
- Check environment variables and .env files
- Review API endpoints and proxy configurations
- Verify database connections if applicable

**4. Build Process**
- Determine if application requires build step
- Check for build scripts in package.json
- Identify static asset compilation requirements
- Review output directories

**5. Runtime Environment**
- Ensure correct Node.js version if applicable
- Check for framework-specific requirements
- Verify any system-level dependencies
- Review browser compatibility needs

## Design Preservation
The application's existing design should be maintained exactly as uploaded. The engineer should:
- Not modify any visual styling or layout
- Preserve existing component structure
- Maintain current navigation patterns
- Keep all UI interactions as implemented
- Respect the original design decisions

## Success Criteria
The implementation is complete when:
- Application starts without errors
- All routes/pages load correctly
- Assets (images, fonts, icons) render properly
- Interactive features function as intended
- No console errors or warnings
- Application matches expected behavior

## Token Optimization Note
This is purely a technical debugging and configuration task. No design consultation, visual specifications, or UI component guidelines are required. The engineer should focus exclusively on making the uploaded code functional while respecting the existing design implementation.