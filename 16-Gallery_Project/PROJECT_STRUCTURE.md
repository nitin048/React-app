# Gallery Project - Component Structure

## 📁 Project Organization

This project has been refactored into a clean, modular component-based architecture.

### Directory Structure

```
src/
├── components/           # Reusable UI components
│   ├── BackgroundEffects.tsx    # Animated background (stars, nebula, bokeh)
│   ├── GalleryCard.tsx          # Individual image card with like/comment indicators
│   ├── ImageModal.tsx           # Full image modal with details
│   ├── CommentSection.tsx       # Comments list and input
│   ├── Pagination.tsx           # Page navigation controls
│   └── index.ts                 # Component exports
│
├── hooks/                # Custom React hooks
│   └── useImageInteractions.ts  # Manages likes, comments, and sessionStorage
│
├── types/                # TypeScript type definitions
│   └── index.ts                 # Shared interfaces (PicsumImage, Comment, etc.)
│
├── App.tsx               # Main application component
├── main.tsx              # Application entry point
└── index.css             # Global styles and animations
```

## 🧩 Component Breakdown

### 1. **App.tsx** (Main Container)

- Manages application state (images, pagination, selected image)
- Fetches data from Picsum API
- Orchestrates all child components
- Handles modal open/close logic

### 2. **BackgroundEffects.tsx**

- Renders animated background elements
- Stars with twinkling animation
- Nebula clouds with drift effect
- Bokeh circles with floating animation
- Milky Way gradient overlay

### 3. **GalleryCard.tsx**

Props: `image`, `index`, `interaction`, `onClick`

- Displays individual image thumbnail
- Shows like indicator (red heart) if liked
- Shows comment count badge if comments exist
- Hover effects and animations
- Click handler to open modal

### 4. **ImageModal.tsx**

Props: `image`, `interaction`, `onClose`, `onToggleLike`, `onAddComment`, `onDeleteComment`

- Full-screen modal with image and details
- Split layout: 65% image, 35% info panel
- Header with photographer info
- Like button and stats
- Image dimensions and ID
- Integrated CommentSection
- Action buttons (View Original, Download)

### 5. **CommentSection.tsx**

Props: `comments`, `onAddComment`, `onDeleteComment`

- Displays list of comments (newest first)
- Comment input field with send button
- Delete button (hover to reveal)
- Timestamps for each comment
- Empty state message
- Scrollable comment list

### 6. **Pagination.tsx**

Props: `currentPage`, `onPrevious`, `onNext`

- Fixed bottom navigation bar
- Previous/Next buttons
- Current page indicator
- Gradient background with blur

## 🪝 Custom Hooks

### **useImageInteractions**

Returns: `{ interactions, toggleLike, addComment, deleteComment, getImageInteraction }`

Manages all user interactions with images:

- **toggleLike(imageId)**: Toggle like status for an image
- **addComment(imageId, text)**: Add a new comment
- **deleteComment(imageId, commentId)**: Remove a comment
- **getImageInteraction(imageId)**: Get interaction data for an image
- Automatically syncs with sessionStorage

## 📦 Types

### **PicsumImage**

```typescript
{
  id?: string
  author?: string
  width?: number
  height?: number
  url?: string
  download_url?: string
}
```

### **Comment**

```typescript
{
  id: string
  imageId: string
  text: string
  timestamp: number
}
```

### **ImageInteraction**

```typescript
{
  imageId: string
  liked: boolean
  comments: Comment[]
}
```

## 🎨 Features

- ✅ Component-based architecture
- ✅ TypeScript type safety
- ✅ Custom hooks for state management
- ✅ SessionStorage persistence
- ✅ Responsive design
- ✅ Animated backgrounds
- ✅ Like/unlike functionality
- ✅ Comment system with timestamps
- ✅ Modal with blur background effect
- ✅ Pagination
- ✅ Loading states

## 🚀 Benefits of This Structure

1. **Maintainability**: Each component has a single responsibility
2. **Reusability**: Components can be easily reused or modified
3. **Testability**: Isolated components are easier to test
4. **Scalability**: Easy to add new features or components
5. **Type Safety**: TypeScript ensures data consistency
6. **Clean Code**: Separation of concerns and clear organization
7. **Performance**: Optimized re-renders with proper component boundaries

## 🔄 Data Flow

```
App (Main State)
  ↓
  ├─→ BackgroundEffects (Presentational)
  ├─→ GalleryCard (Receives: image, interaction)
  │     └─→ Opens Modal on click
  ├─→ Pagination (Receives: page, handlers)
  └─→ ImageModal (Receives: image, interaction, handlers)
        └─→ CommentSection (Receives: comments, handlers)

useImageInteractions Hook
  ↔ SessionStorage (Persistence)
```

## 📝 Usage Example

```typescript
// Import components
import { GalleryCard, ImageModal } from './components'

// Use in your component
<GalleryCard
  image={imageData}
  index={0}
  interaction={getImageInteraction(imageData.id)}
  onClick={() => openModal(imageData)}
/>
```

## 🛠️ Future Enhancements

- Add unit tests for components
- Implement lazy loading for images
- Add image search/filter functionality
- Create a favorites collection
- Add user authentication
- Implement infinite scroll
- Add image upload capability
