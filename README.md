What is Vite ?

Vite is a modern frontend build tool and development server designed to provide a faster and more efficient development experience for modern web projects.is particularly popular for its performance benefits over traditional tools like Webpack.

**Vite vs. Traditional Bundlers (e.g., Webpack)**

**● Startup Time:**
○ Vite: Instantaneous startup because it serves files directly via native ES
modules without bundling.

○ Webpack: Longer startup time because it needs to bundle the entire
application before serving it.

**● HMR Performance(hot module replacement)**
○ Vite: HMR is faster because it updates only the affected modules without
rebundling the entire app.

○ Webpack: Slower HMR as it often involves more extensive rebundling.

**● Build Speed:**
○ Vite: Uses esbuild for pre-bundling, which is significantly faster than
traditional JavaScript bundlers.

○ Webpack: Uses JavaScript-based bundlers that are slower in comparison
to esbuild.

**● Configuration:**
○ Vite: Simplified configuration, often requiring less setup for common
tasks.

○ Webpack: More complex configuration with a steeper learning curve.

# React + Vite

This template provides a minimal setup to get React working in Vite with HMR and some ESLint rules.

Currently, two official plugins are available:

- [@vitejs/plugin-react](https://github.com/vitejs/vite-plugin-react/blob/main/packages/plugin-react/README.md) uses [Babel](https://babeljs.io/) for Fast Refresh
- [@vitejs/plugin-react-swc](https://github.com/vitejs/vite-plugin-react-swc) uses [SWC](https://swc.rs/) for Fast Refresh
