# Branch Protection Rules

## 🔒 Main Branch Protection

The `main` branch is protected to ensure code quality and security.

### Protection Rules Applied:

1. **Direct Push Blocked** - No one can push directly to `main` (including owner)
2. **Pull Request Required** - All changes must go through pull requests
3. **Review Required** - Owner must review and approve PRs
4. **Status Checks** - All CI/CD checks must pass
5. **Force Push Disabled** - Cannot force push to `main`
6. **Branch Deletion Disabled** - Cannot delete `main` branch

---

## 🔧 How to Set Up Branch Protection (Owner Only)

### Step 1: Go to Repository Settings

1. Navigate to your repository: `https://github.com/nitin048/React-app`
2. Click **Settings** tab
3. Click **Branches** in the left sidebar

### Step 2: Add Branch Protection Rule

1. Click **Add branch protection rule**
2. In "Branch name pattern" enter: `main`

### Step 3: Configure Protection Rules

Enable these settings:

#### ✅ Require a pull request before merging

- [x] Require a pull request before merging
- [x] Require approvals: **1**
- [x] Dismiss stale pull request approvals when new commits are pushed
- [x] Require review from Code Owners (optional)

#### ✅ Require status checks to pass before merging

- [x] Require status checks to pass before merging
- [x] Require branches to be up to date before merging
- Select these status checks:
  - `security-audit`
  - `lint`

#### ✅ Require conversation resolution before merging

- [x] Require conversation resolution before merging

#### ✅ Require signed commits (optional but recommended)

- [x] Require signed commits

#### ✅ Require linear history

- [x] Require linear history

#### ✅ Do not allow bypassing the above settings

- [x] Do not allow bypassing the above settings
- **Important**: Even owner cannot bypass

#### ✅ Restrict who can push to matching branches

- [x] Restrict who can push to matching branches
- Add: **nitin048** (owner only)
- Or leave empty to block everyone (recommended)

#### ✅ Rules applied to everyone including administrators

- [x] Include administrators

#### ✅ Restrict force pushes

- [x] Block force pushes

#### ✅ Restrict deletions

- [x] Restrict deletions

### Step 4: Save Changes

Click **Create** or **Save changes** at the bottom

---

## 🚀 Workflow After Protection

### For Contributors:

1. **Fork the repository**

   ```bash
   # Fork on GitHub, then clone your fork
   git clone https://github.com/YOUR-USERNAME/React-app.git
   ```

2. **Create a feature branch**

   ```bash
   git checkout -b feature/your-feature-name
   ```

3. **Make changes and commit**

   ```bash
   git add .
   git commit -m "Add: your feature description"
   ```

4. **Push to your fork**

   ```bash
   git push origin feature/your-feature-name
   ```

5. **Create Pull Request**
   - Go to the original repository
   - Click "New Pull Request"
   - Select your fork and branch
   - Submit for review

### For Owner (You):

1. **Create a feature branch** (cannot push to main directly)

   ```bash
   git checkout -b feature/my-feature
   ```

2. **Make changes and commit**

   ```bash
   git add .
   git commit -m "Add: my feature"
   ```

3. **Push to feature branch**

   ```bash
   git push origin feature/my-feature
   ```

4. **Create Pull Request**
   - Go to GitHub repository
   - Click "Compare & pull request"
   - Review your own changes
   - Merge the PR (you can approve your own PR as owner)

---

## ⚠️ What Happens If You Try to Push to Main

```bash
$ git push origin main

remote: error: GH006: Protected branch update failed for refs/heads/main.
remote: error: At least 1 approving review is required by reviewers with write access.
To https://github.com/nitin048/React-app.git
 ! [remote rejected] main -> main (protected branch hook declined)
error: failed to push some refs to 'https://github.com/nitin048/React-app.git'
```

**This is expected and correct!** It means protection is working.

---

## 🔓 Emergency: Temporarily Disable Protection

If you absolutely need to push directly (emergency only):

1. Go to **Settings** → **Branches**
2. Click **Edit** on the `main` branch rule
3. Temporarily uncheck "Include administrators"
4. Make your emergency push
5. **Immediately re-enable** the protection

**⚠️ Not recommended!** Always use pull requests.

---

## 📋 Quick Reference

| Action                 | Allowed? | Who?                        |
| ---------------------- | -------- | --------------------------- |
| Direct push to `main`  | ❌ No    | No one (including owner)    |
| Create feature branch  | ✅ Yes   | Everyone                    |
| Push to feature branch | ✅ Yes   | Everyone                    |
| Create Pull Request    | ✅ Yes   | Everyone                    |
| Approve Pull Request   | ✅ Yes   | Owner only                  |
| Merge Pull Request     | ✅ Yes   | Owner only (after approval) |
| Force push to `main`   | ❌ No    | No one                      |
| Delete `main` branch   | ❌ No    | No one                      |

---

## 🎯 Benefits

- ✅ **Code Review**: All changes reviewed before merging
- ✅ **Quality Control**: CI/CD checks must pass
- ✅ **History**: Clean, linear git history
- ✅ **Security**: No accidental pushes to production
- ✅ **Collaboration**: Proper workflow for contributors
- ✅ **Rollback**: Easy to revert changes via PR

---

## 📚 Additional Resources

- [GitHub Branch Protection Documentation](https://docs.github.com/en/repositories/configuring-branches-and-merges-in-your-repository/managing-protected-branches/about-protected-branches)
- [GitHub Flow Guide](https://guides.github.com/introduction/flow/)
- [Pull Request Best Practices](https://docs.github.com/en/pull-requests/collaborating-with-pull-requests)
