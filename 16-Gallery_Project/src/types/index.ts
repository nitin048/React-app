export interface PicsumImage {
  id?: string
  author?: string
  width?: number
  height?: number
  url?: string
  download_url?: string
}

export interface Comment {
  id: string
  imageId: string
  text: string
  timestamp: number
}

export interface ImageInteraction {
  imageId: string
  liked: boolean
  comments: Comment[]
}
