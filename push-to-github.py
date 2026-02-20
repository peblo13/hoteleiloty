#!/usr/bin/env python3
import subprocess
import os
import sys

# Get current directory first, then navigate
current_dir = os.getcwd()
print(f"Current working directory: {current_dir}")

# Change to project directory
try:
    os.chdir('/vercel/share/v0-project')
    print(f"Changed to: {os.getcwd()}")
except Exception as e:
    print(f"Could not change directory: {e}")
    # Try current directory instead
    pass

print("=" * 60)
print("🚀 PUSHING TO GITHUB - Google AdSense Integration")
print("=" * 60)

try:
    # Check git status
    print("\n📋 Checking git status...")
    result = subprocess.run(['git', 'status', '--short'], capture_output=True, text=True)
    print(result.stdout)
    
    # Add all changes
    print("\n📝 Adding all files...")
    subprocess.run(['git', 'add', '.'], check=True)
    print("✓ Files added")
    
    # Commit changes
    commit_message = "Improved website design for Google AdSense - Added premium UI, content, SEO optimization, and AdSense slots (7410885727, 9901317699)"
    print(f"\n💬 Committing with message:\n   '{commit_message}'")
    subprocess.run(['git', 'commit', '-m', commit_message], check=True)
    print("✓ Commit successful")
    
    # Get current branch
    print("\n🔍 Checking current branch...")
    result = subprocess.run(['git', 'rev-parse', '--abbrev-ref', 'HEAD'], capture_output=True, text=True, check=True)
    current_branch = result.stdout.strip()
    print(f"Current branch: {current_branch}")
    
    # Push to GitHub
    print(f"\n📤 Pushing to GitHub (branch: {current_branch})...")
    subprocess.run(['git', 'push', 'origin', current_branch], check=True)
    print("✓ Push successful!")
    
    print("\n" + "=" * 60)
    print("✅ ALL CHANGES PUSHED TO GITHUB!")
    print("=" * 60)
    print("\n📊 Summary:")
    print("   • Branch: website-improvement-for-adsense")
    print("   • Repository: peblo13/hoteleiloty")
    print("   • Changes: Premium design + AdSense integration")
    print("   • Status: Ready for merge to main!")
    print("\n💡 Next steps:")
    print("   1. Go to: https://github.com/peblo13/hoteleiloty")
    print("   2. Create a Pull Request from website-improvement-for-adsense → main")
    print("   3. Merge when ready")
    print("   4. Wait 1-3 days for Google AdSense approval")
    print("\n" + "=" * 60)
    
except subprocess.CalledProcessError as e:
    print(f"\n❌ ERROR: {e}")
    print("Make sure git is configured properly")
    sys.exit(1)
except Exception as e:
    print(f"\n❌ UNEXPECTED ERROR: {e}")
    sys.exit(1)
