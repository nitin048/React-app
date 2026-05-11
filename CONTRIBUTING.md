# Contributing Guidelines

Thank you for considering contributing to this React Learning Projects repository! 🎉

## 🤝 How to Contribute

### 1. Fork the Repository

Click the "Fork" button at the top right of this page.

### 2. Clone Your Fork

```bash
git clone https://github.com/YOUR-USERNAME/React-app.git
cd React-app
```

### 3. Create a Branch

```bash
git checkout -b feature/your-feature-name
```

### 4. Make Your Changes

- Write clean, readable code
- Follow the existing code style
- Add comments where necessary
- Test your changes

### 5. Commit Your Changes

```bash
git add .
git commit -m "Add: brief description of your changes"
```

**Commit Message Format:**

- `Add:` for new features
- `Fix:` for bug fixes
- `Update:` for updates to existing features
- `Remove:` for removing code/files
- `Docs:` for documentation changes

### 6. Push to Your Fork

```bash
git push origin feature/your-feature-name
```

### 7. Create a Pull Request

Go to the original repository and click "New Pull Request"

## 📝 Code Style Guidelines

### TypeScript/React

- Use functional components with hooks
- Use TypeScript for type safety
- Follow React best practices
- Use meaningful variable names

### Example:

```typescript
// ✅ Good
const [userName, setUserName] = useState<string>('')

// ❌ Bad
const [x, setX] = useState('')
```

### CSS/Tailwind

- Use Tailwind utility classes
- Keep classes organized and readable
- Use responsive design principles

```tsx
// ✅ Good
<div className="flex items-center justify-between p-4 bg-white rounded-lg shadow-md">

// ❌ Bad
<div className="flex items-center justify-between p-4 bg-white rounded-lg shadow-md hover:shadow-lg transition-all duration-300 ease-in-out transform hover:scale-105">
```

## 🧪 Testing Your Changes

Before submitting:

1. **Run the development server**

   ```bash
   npm run dev
   ```

2. **Check for linting errors**

   ```bash
   npm run lint
   ```

3. **Format your code**

   ```bash
   npm run format
   ```

4. **Build the project**
   ```bash
   npm run build
   ```

## 🚫 What NOT to Commit

- `node_modules/` folder
- `.env` files or any secrets
- Build outputs (`dist/`, `build/`)
- Personal IDE settings
- Large binary files
- Commented-out code (remove it instead)

## 🎯 Areas for Contribution

- **New Learning Projects**: Add new React concepts
- **Bug Fixes**: Fix issues in existing projects
- **Documentation**: Improve README or add tutorials
- **Code Quality**: Refactor and optimize code
- **Accessibility**: Improve a11y features
- **Performance**: Optimize rendering and bundle size

## ❓ Questions?

Feel free to open an issue for:

- Questions about the code
- Suggestions for improvements
- Bug reports
- Feature requests

## 📜 Code of Conduct

- Be respectful and inclusive
- Provide constructive feedback
- Help others learn
- Keep discussions professional

## ✅ Pull Request Checklist

Before submitting your PR, ensure:

- [ ] Code follows the project's style guidelines
- [ ] No console.log statements (unless necessary)
- [ ] No commented-out code
- [ ] All files are properly formatted
- [ ] Linting passes without errors
- [ ] Project builds successfully
- [ ] Changes are tested locally
- [ ] Commit messages are clear and descriptive
- [ ] No merge conflicts

## 🎓 Learning Resources

If you're new to contributing:

- [First Contributions Guide](https://github.com/firstcontributions/first-contributions)
- [How to Contribute to Open Source](https://opensource.guide/how-to-contribute/)
- [GitHub Flow](https://guides.github.com/introduction/flow/)

---

**Thank you for contributing! 🙏**
