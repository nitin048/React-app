# Component Architecture Diagram

## 🏗️ Visual Component Hierarchy

```
┌─────────────────────────────────────────────────────────────────┐
│                           App.tsx                                │
│  • Main state management (images, page, selectedImage)          │
│  • API data fetching                                             │
│  • useImageInteractions hook                                     │
└─────────────────────────────────────────────────────────────────┘
                              │
                              │
        ┌─────────────────────┼─────────────────────┐
        │                     │                     │
        ▼                     ▼                     ▼
┌──────────────┐    ┌──────────────────┐    ┌──────────────┐
│ Background   │    │   Gallery Grid   │    │  Pagination  │
│   Effects    │    │                  │    │              │
└──────────────┘    └──────────────────┘    └──────────────┘
                            │
                            │
                    ┌───────┴───────┐
                    │               │
                    ▼               ▼
            ┌──────────────┐  ┌──────────────┐
            │ GalleryCard  │  │ GalleryCard  │  (x10)
            │              │  │              │
            │ • Image      │  │ • Image      │
            │ • Like badge │  │ • Like badge │
            │ • Comment #  │  │ • Comment #  │
            └──────────────┘  └──────────────┘
                    │
                    │ (onClick)
                    ▼
            ┌──────────────────────────────────┐
            │        ImageModal                │
            │  ┌────────────┬────────────────┐ │
            │  │   Image    │  Info Panel    │ │
            │  │   (65%)    │    (35%)       │ │
            │  │            │                │ │
            │  │            │ • Header       │ │
            │  │            │ • Like Button  │ │
            │  │            │ • Details      │ │
            │  │            │ • Comments ──┐ │ │
            │  │            │ • Actions    │ │ │
            │  └────────────┴──────────────┼─┘ │
            └───────────────────────────────┼───┘
                                            │
                                            ▼
                                ┌─────────────────────┐
                                │  CommentSection     │
                                │                     │
                                │ • Comments List     │
                                │ • Input Field       │
                                │ • Send Button       │
                                └─────────────────────┘
```

## 🔄 Data Flow Diagram

```
┌──────────────────────────────────────────────────────────────┐
│                    useImageInteractions                       │
│                         (Hook)                                │
│                                                               │
│  State: { imageId: { liked, comments[] } }                   │
│                                                               │
│  Methods:                                                     │
│  • toggleLike(imageId)                                       │
│  • addComment(imageId, text)                                 │
│  • deleteComment(imageId, commentId)                         │
│  • getImageInteraction(imageId)                              │
│                                                               │
│  ↕ SessionStorage Sync                                       │
└──────────────────────────────────────────────────────────────┘
                              ↕
┌──────────────────────────────────────────────────────────────┐
│                         App.tsx                               │
│                                                               │
│  Local State:                                                 │
│  • userData: PicsumImage[]                                   │
│  • index: number (current page)                              │
│  • selectedImage: PicsumImage | null                         │
│                                                               │
│  Effects:                                                     │
│  • Fetch images on page change                               │
└──────────────────────────────────────────────────────────────┘
         │                    │                    │
         │ Props              │ Props              │ Props
         ▼                    ▼                    ▼
┌──────────────┐    ┌──────────────────┐    ┌──────────────┐
│ Background   │    │   GalleryCard    │    │  Pagination  │
│   Effects    │    │                  │    │              │
│              │    │ Props:           │    │ Props:       │
│ (No props)   │    │ • image          │    │ • currentPage│
│              │    │ • index          │    │ • onPrevious │
│              │    │ • interaction    │    │ • onNext     │
│              │    │ • onClick        │    │              │
└──────────────┘    └──────────────────┘    └──────────────┘
                             │
                             │ onClick
                             ▼
                    ┌──────────────────┐
                    │   ImageModal     │
                    │                  │
                    │ Props:           │
                    │ • image          │
                    │ • interaction    │
                    │ • onClose        │
                    │ • onToggleLike   │
                    │ • onAddComment   │
                    │ • onDeleteComment│
                    └──────────────────┘
                             │
                             │ Props
                             ▼
                    ┌──────────────────┐
                    │ CommentSection   │
                    │                  │
                    │ Props:           │
                    │ • comments       │
                    │ • onAddComment   │
                    │ • onDeleteComment│
                    └──────────────────┘
```

## 📦 File Dependencies

```
App.tsx
├── imports types from → types/index.ts
├── imports components from → components/
│   ├── BackgroundEffects.tsx
│   ├── GalleryCard.tsx
│   │   └── imports types from → types/index.ts
│   ├── ImageModal.tsx
│   │   ├── imports types from → types/index.ts
│   │   └── imports → CommentSection.tsx
│   │       └── imports types from → types/index.ts
│   └── Pagination.tsx
└── imports hook from → hooks/useImageInteractions.ts
    └── imports types from → types/index.ts
```

## 🎯 Component Responsibilities

### **App.tsx** (Smart Component)

- ✅ State management
- ✅ API calls
- ✅ Business logic
- ✅ Event handlers
- ❌ No direct UI rendering (delegates to children)

### **GalleryCard** (Presentational)

- ✅ Display image thumbnail
- ✅ Show interaction badges
- ✅ Handle click events
- ❌ No state management
- ❌ No API calls

### **ImageModal** (Container)

- ✅ Layout structure
- ✅ Coordinate child components
- ✅ Pass props to children
- ❌ Minimal state (delegated to parent)

### **CommentSection** (Smart Component)

- ✅ Local state (input text)
- ✅ Comment list rendering
- ✅ Input handling
- ❌ No persistence logic (delegated to hook)

### **Pagination** (Presentational)

- ✅ Display navigation UI
- ✅ Handle button clicks
- ❌ No state management
- ❌ No business logic

### **BackgroundEffects** (Presentational)

- ✅ Pure visual component
- ❌ No props
- ❌ No state
- ❌ No logic

## 🔐 Type Safety Flow

```
types/index.ts
    │
    ├─→ PicsumImage
    │   └─→ Used in: App, GalleryCard, ImageModal
    │
    ├─→ Comment
    │   └─→ Used in: CommentSection, useImageInteractions
    │
    └─→ ImageInteraction
        └─→ Used in: App, GalleryCard, ImageModal, useImageInteractions
```

## 🎨 Styling Architecture

```
index.css (Global)
    │
    ├─→ Animations (@keyframes)
    │   ├─→ fadeIn
    │   ├─→ scaleIn
    │   ├─→ modalSlideIn
    │   ├─→ twinkle
    │   └─→ bokehFloat
    │
    ├─→ Background Effects
    │   ├─→ .animated-gradient-bg
    │   ├─→ .blur-background
    │   ├─→ .stars, .star-*
    │   ├─→ .bokeh, .bokeh-*
    │   └─→ .nebula, .nebula-*
    │
    └─→ Utility Classes
        ├─→ .loading-shimmer
        └─→ .animate-*

Components (Inline Tailwind)
    └─→ All component-specific styling
```

This architecture provides:

- ✅ Clear separation of concerns
- ✅ Reusable components
- ✅ Type-safe props
- ✅ Predictable data flow
- ✅ Easy testing
- ✅ Maintainable codebase
