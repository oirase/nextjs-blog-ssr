
type PostType = {
  id?: string
  title?: string
  category?: string
  content?: string
  date?: string
  image?: string
  url?: string
}

export type PostMetaType = Omit<PostType, 'content'>

export default PostType
