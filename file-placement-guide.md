# Wax Eloquent Website - File Placement Guide

This guide will help you organize all the new files we've created for your website. Follow these steps to ensure everything is in the correct place before building and deploying to GitHub Pages.

## Project Structure

Here's the complete folder structure for your project with the new files indicated:

```
wax-eloquent/
├── content/                         # Content directory
│   ├── blog/                        # Blog posts in Markdown
│   │   ├── welcome-to-our-blog.md   # NEW: Welcome blog post
│   │   ├── technical-jargon-vs-clarity.md # NEW: Technical jargon blog post
│   │   └── ...
│   ├── services/                    # Service descriptions
│   │   ├── editing.md
│   │   ├── ghostwriting.md
│   │   └── ...
│   └── portfolio/                   # Portfolio projects
│       ├── api-docs-overhaul.md
│       └── ...
├── public/                          # Static assets
│   ├── images/
│   │   ├── profile/
│   │   │   └── rebecca-traeger.jpg  # NEW: Save the profile image here
│   │   ├── portfolio/
│   │   │   ├── api-docs.jpg         # NEW: Save portfolio image here
│   │   │   ├── saas-website.jpg     # NEW: Save portfolio image here
│   │   │   ├── thought-leadership.jpg # NEW: Save portfolio image here
│   │   │   └── ...
│   │   └── blog/
│   │       ├── welcome.jpg          # NEW: Save blog image here
│   │       ├── jargon-vs-clarity.jpg # NEW: Save blog image here
│   │       └── ...
├── src/
│   ├── components/                  # Reusable React components
│   │   ├── layout/
│   │   │   ├── Header.tsx           # Already exists
│   │   │   ├── Footer.tsx           # Already exists
│   │   │   └── Layout.tsx           # Already exists
│   │   ├── ScrollToTop.tsx          # NEW: Add this component
│   │   ├── ui/                      # UI components
│   │   │   ├── Button.tsx
│   │   │   ├── Card.tsx
│   │   │   └── ...
│   │   └── sections/                # Page sections
│   │       ├── Hero.tsx             # Already exists
│   │       ├── Services.tsx         # Already exists
│   │       └── ...
│   ├── pages/                       # Page components
│   │   ├── Home.tsx                 # Already exists
│   │   ├── About.tsx                # NEW: Add this page
│   │   ├── Services.tsx             # NEW: Add this page
│   │   ├── Portfolio.tsx            # NEW: Add this page
│   │   ├── Contact.tsx              # NEW: Add this page
│   │   └── Blog/
│   │       ├── BlogList.tsx         # Already exists
│   │       └── BlogPost.tsx         # NEW: Add this page
│   ├── utils/                       # Utility functions
│   │   ├── contentLoader.ts         # Already exists
│   │   └── ...
│   ├── styles/                      # Global styles
│   │   └── globals.css              # Already exists
│   ├── App.tsx                      # UPDATE: Replace with new version
│   ├── main.tsx                     # Already exists
│   └── routes.tsx                   # Already exists
└── package.json                     # UPDATE: Add new dependencies
```

## New Dependencies

Add these dependencies to your package.json file:

```json
"dependencies": {
  // ... existing dependencies
  "react-markdown": "^8.0.7",
  "react-helmet-async": "^1.3.0"
}
```

Run `npm install` or `yarn install` to install these new dependencies.

## Image File Conversion

The SVG images we created need to be converted to JPG or PNG files for use in your website. Here's how to handle the images:

1. Download each SVG artifact we created
2. Convert them to JPG or PNG format using an online converter or graphics software
3. Save them to the corresponding locations in your project:

   - `/public/images/blog/welcome.jpg` - Welcome blog post image
   - `/public/images/blog/jargon-vs-clarity.jpg` - Technical jargon blog post image
   - `/public/images/portfolio/api-docs.jpg` - API Documentation portfolio image
   - `/public/images/portfolio/saas-website.jpg` - SaaS Website portfolio image
   - `/public/images/portfolio/thought-leadership.jpg` - Thought Leadership portfolio image
   - `/public/images/profile/rebecca-traeger.jpg` - Rebecca's profile photo

## Testing Locally

Before deploying to GitHub Pages, test your website locally:

1. Run `npm start` or `yarn start` to start the development server
2. Navigate to each page to ensure