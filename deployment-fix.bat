@echo off
echo ===== Wax Eloquent Deployment Fix Script =====
echo.

echo Step 1: Creating .nojekyll file...
type nul > public\.nojekyll
echo Done.
echo.

echo Step 2: Cleaning build directory...
if exist build rmdir /s /q build
echo Done.
echo.

echo Step 3: Building project...
call npm run build
if %ERRORLEVEL% NEQ 0 (
  echo Build failed! Please fix any errors and try again.
  pause
  exit /b 1
)
echo Build successful.
echo.

echo Step 4: Deploying to GitHub Pages...
call npm run deploy
if %ERRORLEVEL% NEQ 0 (
  echo Deployment failed! Please check the error messages.
  pause
  exit /b 1
)
echo.
echo Deployment complete! Your site should be live at:
echo https://waxeloquent.github.io/waxeloquent/
echo.
echo Note: It may take a few minutes for changes to appear.
echo.

pause