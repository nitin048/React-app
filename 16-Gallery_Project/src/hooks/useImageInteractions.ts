import { useState, useEffect } from 'react'
import type { ImageInteraction, Comment } from '../types'

export const useImageInteractions = () => {
  // Load interactions from sessionStorage on mount using lazy initializer
  const [interactions, setInteractions] = useState<
    Record<string, ImageInteraction>
  >(() => {
    const stored = sessionStorage.getItem('imageInteractions')
    return stored ? JSON.parse(stored) : {}
  })

  // Save interactions to sessionStorage whenever they change
  useEffect(() => {
    if (Object.keys(interactions).length > 0) {
      sessionStorage.setItem('imageInteractions', JSON.stringify(interactions))
    }
  }, [interactions])

  const toggleLike = (imageId: string) => {
    setInteractions((prev) => ({
      ...prev,
      [imageId]: {
        imageId,
        liked: !prev[imageId]?.liked,
        comments: prev[imageId]?.comments || [],
      },
    }))
  }

  const addComment = (imageId: string, text: string) => {
    if (!text.trim()) return

    const newComment: Comment = {
      id: Date.now().toString(),
      imageId,
      text: text.trim(),
      timestamp: Date.now(),
    }

    setInteractions((prev) => ({
      ...prev,
      [imageId]: {
        imageId,
        liked: prev[imageId]?.liked || false,
        comments: [...(prev[imageId]?.comments || []), newComment],
      },
    }))
  }

  const deleteComment = (imageId: string, commentId: string) => {
    setInteractions((prev) => ({
      ...prev,
      [imageId]: {
        ...prev[imageId],
        comments: prev[imageId].comments.filter((c) => c.id !== commentId),
      },
    }))
  }

  const getImageInteraction = (imageId: string): ImageInteraction => {
    return (
      interactions[imageId] || {
        imageId,
        liked: false,
        comments: [],
      }
    )
  }

  return {
    interactions,
    toggleLike,
    addComment,
    deleteComment,
    getImageInteraction,
  }
}
