
type PostType = {
  id: string
  title: string
  category: string
  content?: string
  date: string
}

export type PostMetaType = Omit<PostType, 'content'>

export default PostType
