# Rajvardhan Singh Portfolio

A modern, responsive portfolio website built with React, TypeScript, Tailwind CSS, and Framer Motion.

## Tech Stack

- **React 19** - UI library
- **TypeScript** - Type safety
- **Vite** - Build tool
- **Tailwind CSS 4** - Styling
- **Framer Motion** - Animations
- **Lucide React** - Icons

## Features

- Single-file architecture for simplicity
- Responsive design (mobile-first)
- Smooth scroll navigation
- Animated sections with Framer Motion
- Contact form with Web3Forms integration
- SEO optimized with meta tags and JSON-LD
- Stats counter animation
- Portfolio filtering (Web/Cloud)
- Testimonials carousel
- Built as single HTML file for easy deployment

## How to Run Locally

### Prerequisites

- Node.js 18+ installed
- npm or pnpm package manager

### Steps

1. **Clone the repository**
   ```bash
   git clone <repository-url>
   cd react-ts-framer-spec
   ```

2. **Install dependencies**
   ```bash
   npm install
   ```

3. **Set up environment variables**
   ```bash
   cp .env.example .env
   ```
   Edit `.env` and add your Web3Forms API key:
   ```
   VITE_WEB3FORMS_KEY=your_key_here
   ```

4. **Start development server**
   ```bash
   npm run dev
   ```

5. **Open in browser**
   ```
   http://localhost:5173
   ```

### Build for Production

```bash
npm run build
```

The build output is a single `index.html` file in the `dist` folder, making it easy to deploy anywhere.

### Preview Production Build

```bash
npm run preview
```

## Deployment

This project builds to a single HTML file, making deployment simple:

1. Build the project: `npm run build`
2. Upload `dist/index.html` to any static host
3. Done!

## License

MIT License

## Author

**Rajvardhan Singh**
- GitHub: [@singhrajvardhan](https://github.com/singhrajvardhan)
- LinkedIn: [rajvardhan-singh](https://www.linkedin.com/in/rajvardhan-singh-5b76a93a7/)
- Email: rajvardhancoder@gmail.com
