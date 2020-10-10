var fs = require('fs');
var faker = require('faker')
const dir = './src/posts/'
const date = new Date()
const baseTime = 1600000000000
let article, result
const category = [
  'javascript',
  'php',
  'ruby',
  'java',
  'c#',
  'python',
  'kotlin',
  'swift',
  'mysql',
  'postgresql',
  'mongodb',
  'redis'
]

const getRandomTime = (max) => {
  const randomDay = Math.floor(Math.random() * (max - 1))
  date.setTime(baseTime + 86400000 * randomDay)
  return `${date.getFullYear()}-${date.getMonth()}-${date.getDate()}`
}

for (let i = 0; i < 200; ++i) {
  article = {
    fileName: faker.lorem.slug(),
    title: faker.lorem.sentence(),
    date: getRandomTime(30),
    category: category[Math.floor(Math.random() * category.length)],
    image: `image${i + 1}.jpg`,
    content: faker.lorem.text()
  }

  result =
`---
title: '${article.title}'
date: '${article.date}'
category: '${article.category}'
image: '${article.image}'
---

${article.content}
`

  //console.log(result)

  fs.writeFileSync(`${dir}${article.fileName}.md`, result)
  console.log(`make ${article.fileName}.md`)
}

console.log('success')
