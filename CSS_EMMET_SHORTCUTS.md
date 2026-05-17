# CSS Emmet Shortcuts Guide for VS Code

## ✅ Configuration Applied

Your VS Code is now configured with:

- ✅ Emmet trigger expansion on Tab
- ✅ Tab completion enabled
- ✅ CSS property completion with semicolon
- ✅ Quick suggestions in CSS files

## 🎯 How to Use CSS Shortcuts

### Basic Syntax

Type the abbreviation and press **Tab** to expand.

### Common CSS Shortcuts

#### Display & Layout

```css
d:f + Tab       → display: flex;
d:b + Tab       → display: block;
d:i + Tab       → display: inline;
d:ib + Tab      → display: inline-block;
d:g + Tab       → display: grid;
d:n + Tab       → display: none;
```

#### Flexbox

```css
jc:c + Tab      → justify-content: center;
jc:sb + Tab     → justify-content: space-between;
jc:sa + Tab     → justify-content: space-around;
ai:c + Tab      → align-items: center;
fd:c + Tab      → flex-direction: column;
fd:r + Tab      → flex-direction: row;
```

#### Position

```css
pos:r + Tab     → position: relative;
pos:a + Tab     → position: absolute;
pos:f + Tab     → position: fixed;
pos:s + Tab     → position: sticky;
```

#### Width & Height

```css
w:100 + Tab     → width: 100px;
w:100p + Tab    → width: 100%;
h:100 + Tab     → height: 100px;
h:100p + Tab    → height: 100%;
maw:100 + Tab   → max-width: 100px;
mah:100 + Tab   → max-height: 100px;
```

#### Margin & Padding

```css
m:10 + Tab      → margin: 10px;
m:10-20 + Tab   → margin: 10px 20px;
mt:10 + Tab     → margin-top: 10px;
mb:10 + Tab     → margin-bottom: 10px;
ml:10 + Tab     → margin-left: 10px;
mr:10 + Tab     → margin-right: 10px;
m:a + Tab       → margin: auto;

p:10 + Tab      → padding: 10px;
pt:10 + Tab     → padding-top: 10px;
pb:10 + Tab     → padding-bottom: 10px;
pl:10 + Tab     → padding-left: 10px;
pr:10 + Tab     → padding-right: 10px;
```

#### Colors

```css
c:#fff + Tab    → color: #fff;
bg:red + Tab    → background: red;
bgc:#000 + Tab  → background-color: #000;
op:0.5 + Tab    → opacity: 0.5;
```

#### Border

```css
bd:1 + Tab      → border: 1px solid #000;
bd:n + Tab      → border: none;
bdr:5 + Tab     → border-radius: 5px;
```

#### Font & Text

```css
fz:16 + Tab     → font-size: 16px;
fw:b + Tab      → font-weight: bold;
ta:c + Tab      → text-align: center;
ta:l + Tab      → text-align: left;
ta:r + Tab      → text-align: right;
td:n + Tab      → text-decoration: none;
tt:u + Tab      → text-transform: uppercase;
```

#### Transform & Transition

```css
trf:r + Tab     → transform: rotate();
trf:s + Tab     → transform: scale();
trf:t + Tab     → transform: translate();
trs:all + Tab   → transition: all;
```

#### Overflow

```css
ov:h + Tab      → overflow: hidden;
ov:a + Tab      → overflow: auto;
ov:s + Tab      → overflow: scroll;
```

#### Z-index

```css
z:1 + Tab       → z-index: 1;
z:999 + Tab     → z-index: 999;
```

## 🚀 CSS Boilerplate (Similar to HTML's ! + Tab)

Unfortunately, CSS doesn't have a `!` + Tab equivalent like HTML. However, you can:

### Option 1: Create Custom Snippets

Create a file: `.vscode/css.code-snippets`

```json
{
  "CSS Reset Boilerplate": {
    "prefix": "cssreset",
    "body": [
      "* {",
      "  margin: 0;",
      "  padding: 0;",
      "  box-sizing: border-box;",
      "}",
      "",
      "body {",
      "  font-family: -apple-system, BlinkMacSystemFont, 'Segoe UI', Roboto, Oxygen, Ubuntu, Cantarell, sans-serif;",
      "  line-height: 1.6;",
      "  color: #333;",
      "}",
      "",
      "$0"
    ],
    "description": "CSS Reset Boilerplate"
  },
  "Flexbox Container": {
    "prefix": "flexcenter",
    "body": [
      "display: flex;",
      "justify-content: center;",
      "align-items: center;",
      "$0"
    ],
    "description": "Flex container centered"
  },
  "Grid Container": {
    "prefix": "gridcenter",
    "body": ["display: grid;", "place-items: center;", "$0"],
    "description": "Grid container centered"
  }
}
```

### Option 2: Use Emmet Multi-line

Type this and press Tab:

```
m0+p0+bxz:bb
```

Expands to:

```css
margin: 0;
padding: 0;
box-sizing: border-box;
```

## 📝 Pro Tips

1. **Chain Multiple Properties**: Type `m0+p0+d:f` and press Tab

   ```css
   margin: 0;
   padding: 0;
   display: flex;
   ```

2. **Use Numbers**: `w100+h100` → `width: 100px; height: 100px;`

3. **Use Units**:
   - `w100p` → `width: 100%;`
   - `w100e` → `width: 100em;`
   - `w100r` → `width: 100rem;`

4. **Vendor Prefixes**: `-wm-trf` → `-webkit-transform: ;`

5. **Important**: Add `!` at the end: `d:f!` → `display: flex !important;`

## 🔧 Troubleshooting

If shortcuts still don't work:

1. **Reload VS Code**: Press `Cmd + Shift + P` → Type "Reload Window"
2. **Check File Type**: Make sure file is recognized as CSS (bottom right corner)
3. **Disable Conflicting Extensions**: Some extensions might override Tab behavior
4. **Try Ctrl + Space**: If Tab doesn't work, try `Ctrl + Space` to trigger suggestions manually

## 🎨 ES7+ React Snippets (for .tsx/.jsx files)

These work in React component files:

```javascript
rafce + Tab     → React Arrow Function Component Export
rfc + Tab       → React Function Component
rfce + Tab      → React Function Component Export
useS + Tab      → useState hook
useE + Tab      → useEffect hook
```

## 📚 Additional Resources

- [Emmet CSS Cheat Sheet](https://docs.emmet.io/cheat-sheet/)
- [VS Code Emmet Documentation](https://code.visualstudio.com/docs/editor/emmet)

---

**Note**: After updating settings, you may need to reload VS Code for all changes to take effect.
Press `Cmd + Shift + P` → Type "Reload Window" → Press Enter
