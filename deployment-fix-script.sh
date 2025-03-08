#!/bin/bash
# Wax Eloquent Deployment Fix Script

echo "=== Wax Eloquent Deployment Fix Script ==="
echo "This script will fix common deployment issues and redeploy your site to GitHub Pages."

# Check if Git is installed
if ! command -v git &> /dev/null; then
    echo "Git is not installed. Please install Git and try again."
    exit 1
fi

# Check if npm is installed
if ! command -v npm &> /dev/null; then
    echo "npm is not installed. Please install Node.js and npm and try again."
    exit 1
fi

# Create .env file with correct PUBLIC_URL
echo "Creating/updating .env file..."
echo "PUBLIC_URL=https://waxeloquent.github.io/waxeloquent" > .env
echo ".env file created/updated successfully."

# Create .nojekyll file to prevent GitHub Pages from processing with Jekyll
echo "Creating .nojekyll file in public directory..."
touch public/.nojekyll
echo ".nojekyll file created successfully."

# Create 404.html to handle client-side routing
echo "Creating 404.html for client-side routing..."
cat > public/404.html << 'EOL'
<!DOCTYPE html>
<html>
<head>
    <meta charset="utf-8">
    <title>Wax Eloquent</title>
    <script type="text/javascript">
        // Single Page Apps for GitHub Pages
        // MIT License
        // https://github.com/rafgraph/spa-github-pages
        var pathSegmentsToKeep = 1;

        var l = window.location;
        l.replace(
            l.protocol + '//' + l.hostname + (l.port ? ':' + l.port : '') +
            l.pathname.split('/').slice(0, 1 + pathSegmentsToKeep).join('/') + '/?/' +
            l.pathname.split('/').slice(1 + pathSegmentsToKeep).join('/').replace(/&/g, '~and~') +
            (l.search ? '&' + l.search.slice(1).replace(/&/g, '~and~') : '') +
            l.hash
        );
    </script>
</head>
<body>
    Redirecting...
</body>
</html>
EOL

# Add redirect script to index.html
echo "Updating index.html to handle redirects..."
sed -i.bak '/<head>/a \
    <!-- Start Single Page Apps for GitHub Pages -->\
    <script type="text/javascript">\
      // Single Page Apps for GitHub Pages\
      // MIT License\
      // https://github.com/rafgraph/spa-github-pages\
      (function(l) {\
        if (l.search[1] === \"/\" ) {\
          var decoded = l.search.slice(1).split(\"&\").map(function(s) { \
            return s.replace(/~and~/g, \"&\")\
          }).join(\"?\");\
          window.history.replaceState(null, null,\
              l.pathname.slice(0, -1) + decoded + l.hash\
          );\
        }\
      }(window.location))\
    </script>\
    <!-- End Single Page Apps for GitHub Pages -->' public/index.html

echo "index.html updated successfully."

# Clean project and reinstall dependencies
echo "Cleaning project and reinstalling dependencies..."
rm -rf node_modules
rm -rf build
npm install
echo "Dependencies reinstalled successfully."

# Ensure ScrollToTop component exists
if [ ! -f src/components/ScrollToTop.tsx ]; then
    echo "Creating ScrollToTop component..."
    mkdir -p src/components
    cat > src/components/ScrollToTop.tsx << 'EOL'
import { useEffect } from 'react';
import { useLocation } from 'react-router-dom';

export default function ScrollToTop() {
  const { pathname } = useLocation();

  useEffect(() => {
    window.scrollTo(0, 0);
  }, [pathname]);

  return null;
}
EOL
    echo "ScrollToTop component created successfully."
fi

# Update App.tsx
echo "Verifying App.tsx..."
if [ -f src/App.tsx ]; then
    if ! grep -q "ScrollToTop" src/App.tsx; then
        echo "Adding ScrollToTop to App.tsx..."
        # This is a simplistic approach - in reality you'd need a more sophisticated parser
        sed -i.bak 's/import { Routes, Route } from/import { Routes, Route } from/g' src/App.tsx
        sed -i.bak 's/import { HelmetProvider } from/import { HelmetProvider } from/g' src/App.tsx
        sed -i.bak 's/return (/return (\n      <ScrollToTop \/>/g' src/App.tsx
    fi
fi

# Build the project
echo "Building project..."
npm run build
echo "Build completed successfully."

# Verify the build
echo "Verifying build directory..."
if [ ! -d "build" ]; then
    echo "Build directory not found. Build process may have failed."
    exit 1
fi

# Deploying to GitHub Pages
echo "Deploying to GitHub Pages..."
npm run deploy

echo "====================================="
echo "Deployment process completed!"
echo "Your site should be available at: https://waxeloquent.github.io/waxeloquent/"
echo "Please allow a few minutes for GitHub Pages to update."
echo "====================================="
