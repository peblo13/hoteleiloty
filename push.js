#!/usr/bin/env node

const { execSync } = require('child_process');
const fs = require('fs');
const path = require('path');

const projectDir = '/vercel/share/v0-project';

console.log('[v0] Starting GitHub push...');
console.log(`[v0] Project directory: ${projectDir}`);

try {
  // Change to project directory
  process.chdir(projectDir);
  console.log(`[v0] Changed to directory: ${process.cwd()}`);

  // Check git status
  console.log('\n[v0] Checking git status...');
  const status = execSync('git status --short', { encoding: 'utf-8' });
  console.log('[v0] Git status:\n', status);

  // Add all changes
  console.log('\n[v0] Adding all changes...');
  execSync('git add .', { stdio: 'inherit' });
  console.log('[v0] Changes added');

  // Commit
  const commitMessage = 'Improved website design for Google AdSense - Added premium UI, content, and AdSense slots (7410885727, 9901317699)';
  console.log(`\n[v0] Committing with message: "${commitMessage}"`);
  execSync(`git commit -m "${commitMessage}"`, { stdio: 'inherit' });
  console.log('[v0] Committed successfully');

  // Push to origin
  console.log('\n[v0] Pushing to GitHub...');
  execSync('git push origin website-improvement-for-adsense', { stdio: 'inherit' });
  console.log('[v0] Pushed successfully!');

  console.log('\n✅ All changes pushed to GitHub!');
  console.log('[v0] Branch: website-improvement-for-adsense');
  console.log('[v0] Repo: peblo13/hoteleiloty');

} catch (error) {
  console.error('\n❌ Error during push:');
  console.error(`[v0] ${error.message}`);
  process.exit(1);
}
