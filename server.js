'use strict'
//const redis = require('redis')
//const posts = require('./src/lib/posts.ts')
//const client = require('redis').createClient('redis://h:pcc2666e7a4e5acc8e29f2c17804d4b4edaf3')
/*
import { consoleTest } from './src/lib/posts'
consoleTest()
const a = 'hello'
*/
const fs = require('fs')
const path = require('path')
const matter = require('gray-matter')

const postsDirectory = path.join(process.cwd(), 'src/posts')

const getAllPostsData = () => {
  const fileNames = fs.readdirSync(postsDirectory)

  const allPostsData = fileNames.map(fileName => {
    const id = fileName.replace(/\.md$/, '')
    const fullPath = path.join(postsDirectory, fileName)
    const fileContents = fs.readFileSync(fullPath, 'utf8')
    const matterResult = matter(fileContents)

    return {
      id,
      ...matterResult.data,
      content: matterResult.content
    }
  })

  return allPostsData
}

const AllPostsData = getAllPostsData()

const client = require('redis').createClient(process.env.REDIS_URL)
client.on('error', function (err) {
  throw err
})

AllPostsData.forEach(data => {
  const {id, ...rest} = data
  client.exists(id, function (err, reply) {
    if (reply !== 1) {
      client.hmset(id, {
        ...rest
      }, function(err, res) {
        console.log('exists');
        console.log('redis set succcess');

      })
    } else {
       console.log('redis key exists');
       //throw new Error("exists")
    }
  })
})

client.quit()
