import CategoryType from '~/types/category'
import PostType from '~/types/post'

//type ItemType = Partial<PostType & CategoryType>
type ItemType = PostType | CategoryType


export default ItemType
