import fs from 'fs'
import path from 'path'
import matter from 'gray-matter'
import remark from 'remark'
import html from 'remark-html'
import PostType from '~/types/post'

const postsDirectory = path.join(process.cwd(), 'src/posts')

const getFileData = (fileName: string): PostType => {
  const id = fileName.replace(/\.md$/, '')
  const fullPath = path.join(postsDirectory, fileName)
  const fileContents = fs.readFileSync(fullPath, 'utf8')
  const matterResult = matter(fileContents)

  const result = {
    id,
    ...(matterResult.data as PostType),
    content: matterResult.content,
  }

  return result
}

export const getAllPostIds = (): { params: { id: string } }[] => {
  const fileNames = fs.readdirSync(postsDirectory)

  return fileNames.map((fileName) => {
    return {
      params: {
        id: fileName.replace(/\.md$/, ''),
      },
    }
  })
}

export const getPostData = async (id: string): Promise<PostType> => {
  const fullPath = path.join(postsDirectory, `${id}.md`)
  const fileContents = fs.readFileSync(fullPath, 'utf8')

  const matterResult = matter(fileContents)

  const processedContent = await remark()
    .use(html)
    .process(matterResult.content)
  const content = processedContent.toString()

  return {
    id,
    content,
    ...matterResult.data,
  }
}

export const getPostsData = (
  getProp: (post: PostType) => PostType
): PostType[] => {
  const fileNames = fs.readdirSync(postsDirectory)

  const allPostsData = fileNames.map((fileName) => {
    const result = getFileData(fileName)
    return getProp(result)
  })

  return allPostsData.sort((a, b) => {
    if (a.date < b.date) {
      return 1
    } else {
      return -1
    }
  })
}

export const getPostsSingleData = (
  getProp: (post: PostType) => string
): string[] => {
  const fileNames = fs.readdirSync(postsDirectory)

  const allPostsData = fileNames.map((fileName) => {
    const result = getFileData(fileName)
    return getProp(result)
  })

  return allPostsData
}
