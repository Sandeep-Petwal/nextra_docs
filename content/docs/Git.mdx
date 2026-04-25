---
sidebar_label: 'Git'
title: 'Git - Version Control Guide'
description: 'Complete guide to Git version control system including basic commands, workflows, and best practices for collaborative development.'
---

# Git - Version Control Guide

A comprehensive guide to Git version control system for managing code repositories and collaborative development.

## Git Configuration

### Basic Setup

```bash
# Config
git config --global user.name "Your Name"
git config --global user.email "you@example.com"
git config --global core.editor "code"  # for VS Code
git config --global init.defaultBranch main
```

## Multiple GitHub Accounts Setup

### 1. Set Local Git User for the Repo

```bash
cd path/to/your/project
git config user.name "Other User's Name"
git config user.email "otheruser@example.com"
```

### 2. SSH Key Setup

#### a. Generate SSH Key for Other Account

```bash
# You need to associate a different SSH key with the other GitHub account.
# Choose a name like id_ed25519_otherUser so you don't overwrite your main one
# Ed25519 and RSA are both cryptographic algorithms used for generating key pairs for secure communication 
# we can use rsa instead of ed25519
ssh-keygen -t ed25519 -C "otheruser@example.com" -f ~/.ssh/id_ed25519_otherUser
```

#### b. Add SSH Key to GitHub

```bash
# Copy key (.pub file)
cat ~/.ssh/id_ed25519_otherUser.pub
```

Go to Other GitHub Account → Settings → SSH and GPG keys → New SSH key
Paste it and give it a name like "Other Laptop Key"

#### c. Modify SSH Config

Edit or create your SSH config file:

```bash
nano ~/.ssh/config
```

Add this configuration:

```bash
# Main GitHub account (default)
Host github.com
  HostName github.com
  User git
  IdentityFile ~/.ssh/id_ed25519

# Other GitHub account
Host github-other
  HostName github.com
  User git
  IdentityFile ~/.ssh/id_ed25519_otherUser
```

### 3. Clone or Update Remote URL to Use Custom Host

```bash
# If you're cloning:
git clone git@github-other:username/repo.git

# Or if the repo is already cloned, update the remote:
git remote set-url origin git@github-other:username/repo.git
```

## Contributing to Open Source Projects

### How to Contribute to an Open Source Project

#### A. Fork & Clone

```bash
git clone https://github.com/your-username/repo-name.git
```

#### B. Create a new branch

```bash
git checkout -b fix-issue-123
```

#### C. Make your changes and commit

```bash
git add .
git commit -m "Fix: issue #123 - corrected form validation"
```

#### D. Push to your fork

```bash
git push origin fix-issue-123
```

#### E. Create a Pull Request

1. Go to your fork on GitHub
2. Click "Compare & pull request"
3. Write a clear title & description (link to the issue if possible)

✅ Done! Maintainers will review it.

## Git Pull Strategies

### --rebase vs --no-rebase when doing a Git pull

```bash
# git pull under the hood:
git pull = git fetch + git merge (by default)
```

- **--rebase**: It fetches the latest changes from the remote, then replays your local commits on top of them — this creates a linear commit history (cleaner!)
- **--no-rebase (default)**: Just merges the remote changes into your current branch. This can create merge commits and a more complex history.

**TL;DR:**
- Use `--rebase` if you want a clean linear history.
- Use `--no-rebase` if you prefer to keep explicit merge commits.
- We can set rebase by default with: `git config --global pull.rebase true`

## Git Commands Reference

### Basic Commands

```bash
# View commit log
git log

# View single-line log
git log --oneline
```

### Branching Commands

```bash
# Create branch
git branch <branch-name>

# Switch branch
git checkout <branch-name>

# Create + switch
git checkout -b <branch-name>

# Delete branch
git branch -d <branch-name>

# Rename branch
git branch -m <new-name>
```

### Push and Pull Commands

```bash
# Add remote
git remote add origin <url>

# Push branch
git push origin <branch-name>

# Push all
git push --all

# Pull latest changes
git pull

# Pull specific branch
git pull origin <branch-name>
```

### Merge & Rebase Commands

```bash
# Merge branch into current
git merge <branch-name>

# Rebase onto branch
git rebase <branch-name>

# Abort rebase
git rebase --abort

# Continue rebase
git rebase --continue
```

### Undo/Fixes Commands

```bash
# Unstage file
git reset <file>

# Unstage everything
git reset

# Undo last commit (keep changes)
git reset --soft HEAD~1

# Undo last commit (discard changes)
git reset --hard HEAD~1

# Remove file from repo
git rm <file>

# Amend last commit
git commit --amend
```

### Stash Commands

```bash
# Stash changes
git stash

# List stashes
git stash list

# Apply stash
git stash apply

# Apply and delete
git stash pop
```

### Diff Commands

```bash
# Show changes
git diff

# Show staged changes
git diff --cached

# Show specific commit
git show <commit>

# Compare branches
git diff branch1..branch2
```

### Remote Commands

```bash
# List remotes
git remote -v

# Rename remote
git remote rename origin upstream

# Remove remote
git remote remove <name>

# Fetch all branches
git fetch --all
```