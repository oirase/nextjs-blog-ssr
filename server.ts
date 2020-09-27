'use strict'
const redis = require('redis')
//const posts = require('./src/lib/posts.ts')
//import { getPostData } from './src/lib/posts'
/*
import { consoleTest } from './src/lib/posts'
consoleTest()
const a = 'hello'
//const client = require('redis').createClient('redis://h:pcc2666e7a4e5acc8e29f2c17804d4b4edaf3')
*/
const getAllPostsData = () => {
  const fileNames = fs.readdirSync(postsDirectory)

  const allPostsData = fileNames.map(fileName => {
    const id = fileName.replace(/\.md$/, '')
    const fullPath = path.join(postsDirectory, fileName)
    const fileContents = fs.readFileSync(fullPath, 'utf8')
    const matterResult = matter(fileContents)

    return {
      id,
      ...(matterResult.data as { date: string; title: string; category: string;}),
      content: matterResult.content
    }
  })

  return allPostsData
}



const client = require('redis').createClient(process.env.REDIS_URL)
client.on('error', function (err) {
  throw err
})

client.exists('frameworks', function (err, reply) {
  if (reply !== 1) {
    client.hmset('frameworks', {
      'javascript': 'AngularJS',
      'css': 'Bootstrap',
      'node': 'Express'
    }, function(err, res) {
      console.log('exists');
      console.log('redis set succcess');
      client.quit()
    })
  } else {
     console.log('redis key exists');
     client.quit()
     //throw new Error("exists")
  }
})

*
