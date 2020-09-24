
type PostType = {
  id: string
  title: string
  category: string
  contentHtml: string
  date: string
}

export type PostMetaType = Omit<PostType, 'contentHtml'>

export default PostType
