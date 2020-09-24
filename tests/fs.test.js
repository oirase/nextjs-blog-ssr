import fs from 'fs'
import path from 'path'
import matter from 'gray-matter'
import remark from 'remark'
import html from 'remark-html'
//import { getSortedPostsData } from '../src/lib/posts'


/*
const onPress = jest.fn();
getSortedPostsData(onPress);
test('getSortedPostsData test', () => {
  return expect(onPress).toBeCalledWith(
    expect.objectContaining({
      id: expect.any(String)
    })
  )
})
*/

const postsDirectory = path.join(process.cwd(), 'src/posts')

export const getSortedPostsData = () => {

  const fileNames = fs.readdirSync(postsDirectory)
  const allPostsData = fileNames.map(fileName => {
    const id = fileName.replace(/\.md$/, '')
    const fullPath = path.join(postsDirectory, fileName)
    const fileContents = fs.readFileSync(fullPath, 'utf8')
    const matterResult = matter(fileContents)
     return {
      id,
      ...matterResult.data
    }
  })
  return allPostsData.sort((a, b) => {
    if (a.date < b.date) {
      return 1
    } else {
      return -1
    }
  })
}

//console.log(getSortedPostsData())

const getAllPostIds = () => {
  const fileNames = fs.readdirSync(postsDirectory)

  return fileNames.map(fileName => {
    return {
      params: {
        id: fileName.replace(/\.md$/, '')
      }
    }
  })
}

//console.log(getAllPostIds())

const getPostData = async (id) => {
  const fullPath = path.join(postsDirectory, `${id}.md`)
  const fileContents = fs.readFileSync(fullPath, 'utf8')

  const matterResult = matter(fileContents)

  const processedContent = await remark()
    .use(html)
    .process(matterResult.content)

  const contentHtml = processedContent.toString()

  return {
    id,
    contentHtml,
    ...matterResult.data
  }
}
async function testGetPostData () {
console.log(await getPostData('pre-rendering').then())
}

testGetPostData ()
