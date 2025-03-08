# Wax Eloquent Website Update Checklist

Use this checklist when making updates to your Wax Eloquent website to ensure a smooth deployment process.

## 🔍 Pre-Update Checklist

Before making changes to your website:

- [ ] **Pull Latest Changes:**
  ```bash
  git pull origin main
  ```

- [ ] **Create a New Branch:**
  ```bash
  git checkout -b update/description-of-changes
  ```

- [ ] **Install Dependencies:**
  ```bash
  npm install
  ```

- [ ] **Start Development Server:**
  ```bash
  npm start
  ```

## 🛠️ Making Updates

When making changes to your website:

### Adding New Content

- [ ] **Blog Posts:**
  - Create new Markdown file in `public/content/blog/`
  - Include frontmatter (title, date, author, categories, excerpt, image)
  - Update the `getAllPosts` function in `contentLoader.ts` if needed

- [ ] **Portfolio Items:**
  - Add new portfolio item details to the `projects` array in `Portfolio.tsx`
  - Add corresponding images to `public/images/portfolio/`

- [ ] **Services:**
  - Add new service details to the `services` array in `Services.tsx`

### Updating Components

- [ ] **Use Relative Paths:**
  - For internal links: `<Link to="/about">`
  - For assets: `${process.env.PUBLIC_URL}/images/example.jpg`

- [ ] **Component Updates:**
  - When modifying components, test across all screen sizes
  - Check for any console errors or warnings

### Adding Images

- [ ] **Image Optimization:**
  - Compress images using a tool like TinyPNG
  - Use appropriate dimensions (don't upload overly large images)
  - Save in correct location in `public/images/` directory
  - Use descriptive filenames with lowercase and hyphens (e.g., `api-docs.jpg`)

## ✅ Testing Updates

Before deploying your changes:

- [ ] **Cross-Browser Testing:**
  - Test in Chrome, Firefox, Safari, and Edge

- [ ] **Responsive Design:**
  - Test on mobile, tablet, and desktop viewports

- [ ] **Functionality Testing:**
  - Test all links and navigation
  - Test form submissions
  - Verify all images load correctly

- [ ] **Performance Check:**
  - Run Lighthouse in Chrome DevTools
  - Address any critical performance issues

## 🚀 Deploying Updates

When you're ready to deploy your changes:

- [ ] **Commit Changes:**
  ```bash
  git add .
  git commit -m "Description of changes"
  ```

- [ ] **Merge to Main:**
  ```bash
  git checkout main
  git merge update/description-of-changes
  ```

- [ ] **Push to GitHub:**
  ```bash
  git push origin main
  ```

- [ ] **Deploy to GitHub Pages:**
  ```bash
  npm run deploy
  ```

- [ ] **Verify Deployment:**
  - Wait a few minutes for GitHub Pages to update
  - Visit your site at `https://waxeloquent.github.io/waxeloquent/`
  - Test key functionality on the live site

## 🔄 Regular Maintenance

Schedule these maintenance tasks:

- [ ] **Monthly:**
  - Update dependencies: `npm update`
  - Check for broken links
  - Review and update content for accuracy

- [ ] **Quarterly:**
  - Add new portfolio items or testimonials
  - Update services or pricing if needed
  - Review SEO performance and make adjustments

- [ ] **Annually:**
  - Comprehensive content audit
  - Major design/UI refreshes if needed
  - Review and update all images

## 📱 Social Media Integration

When adding social media content:

- [ ] **Update Social Links:**
  - Ensure all social media links in the Footer component are current
  - Add any new social platforms as needed

- [ ] **Share New Content:**
  - When you add new blog posts, share them on your social platforms
  - Consider adding social sharing buttons to blog posts

By following this checklist for each