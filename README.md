# Portfolio

This is a personal portfolio website project. It showcases your work, skills, and contact information using modern web technologies. The project is organized for easy development and deployment.

## Features
- Responsive design
- Project showcase section
- Resume section
- Custom SCSS styling
- Asset management (images, fonts)
- Modular scripts and build tools

## Project Structure
```
src/
  assets/         # Images, fonts, and other static assets
  js/             # JavaScript files
  pug/            # Pug templates
  scss/           # SCSS stylesheets
scripts/          # Build and render scripts
package.json      # Project metadata and dependencies
LICENSE           # License information
```

## Getting Started
1. **Install dependencies**
   ```bash
   npm install
   ```
2. **Build the project**
   ```bash
   npm run build
   ```
3. **Start the development server**
   ```bash
   npm start
   ```

## Scripts
- `build-assets.js`, `build-pug.js`, `build-scripts.js`, `build-scss.js`: Build steps for different asset types
- `render-assets.js`, `render-pug.js`, `render-scripts.js`, `render-scss.js`: Rendering scripts
- `start.js`, `start-debug.js`: Start the server in normal or debug mode
- `clean.js`: Clean build artifacts
- `sb-watch.js`: Watch for changes and rebuild

## Customization
- Edit SCSS files in `src/scss/` for styling
- Add or update projects in the Pug templates (`src/pug/`)
- Update images and fonts in `src/assets/`

## License
This project is licensed under the terms of the LICENSE file.
