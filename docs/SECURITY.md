# Security Policy

## 🔒 Reporting Security Issues

If you discover a security vulnerability in this repository, please report it responsibly:

1. **DO NOT** open a public issue
2. Email the maintainer directly (or use GitHub's private vulnerability reporting)
3. Provide detailed information about the vulnerability

## ✅ Security Best Practices

This repository follows these security practices:

### 1. **Never Commit Secrets**

- No API keys, passwords, or tokens in code
- Use environment variables (`.env` files)
- `.env` files are in `.gitignore`

### 2. **Dependencies**

- Regularly update dependencies
- Run `npm audit` to check for vulnerabilities
- Use `npm audit fix` to auto-fix issues

### 3. **Code Quality**

- ESLint configured for code quality
- TypeScript for type safety
- Prettier for consistent formatting

### 4. **Environment Variables**

Always use `.env` files for sensitive data:

```env
# .env (NEVER commit this file!)
VITE_API_KEY=your_api_key_here
VITE_API_URL=https://api.example.com
```

Access in code:

```typescript
const apiKey = import.meta.env.VITE_API_KEY
```

## 🛡️ Security Checklist

Before pushing code, ensure:

- [ ] No hardcoded secrets or API keys
- [ ] `.env` files are in `.gitignore`
- [ ] Dependencies are up to date
- [ ] No sensitive data in comments
- [ ] No console.log with sensitive information
- [ ] Run `npm audit` and fix vulnerabilities

## 🔍 Regular Security Checks

### Check for Vulnerabilities

```bash
npm audit
```

### Fix Vulnerabilities Automatically

```bash
npm audit fix
```

### Force Fix (use with caution)

```bash
npm audit fix --force
```

### Update Dependencies

```bash
npm update
```

### Check Outdated Packages

```bash
npm outdated
```

## 🚨 What to Do If You Accidentally Commit Secrets

1. **Immediately revoke/regenerate** the exposed secret
2. **Remove from Git history** using:
   ```bash
   git filter-branch --force --index-filter \
   "git rm --cached --ignore-unmatch PATH-TO-FILE" \
   --prune-empty --tag-name-filter cat -- --all
   ```
3. **Force push** (only if you're the sole contributor):
   ```bash
   git push origin --force --all
   ```
4. **Notify team members** to re-clone the repository

## 📋 Supported Versions

| Version | Supported          |
| ------- | ------------------ |
| Latest  | :white_check_mark: |
| Older   | :x:                |

## 🔐 Additional Resources

- [OWASP Top 10](https://owasp.org/www-project-top-ten/)
- [GitHub Security Best Practices](https://docs.github.com/en/code-security)
- [npm Security Best Practices](https://docs.npmjs.com/security-best-practices)
