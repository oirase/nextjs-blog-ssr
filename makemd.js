var fs = require('fs');
var faker = require('faker')
const dir = './src/posts/'
const date = new Date()
const baseTime = 1600000000000
const imgLength = 68
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

const zeroPadding = (num, len) => {
  if ((num + '').length <= len) {
    return (Array(len).join('0') + num).slice( - len )
  } else {
    return num
  }
}

let a = 1
for (let i = 0; i < 200; ++i) {
  article = {
    fileName: faker.lorem.slug(),
    title: faker.lorem.sentence(),
    date: getRandomTime(60),
    category: category[Math.floor(Math.random() * category.length)],
    image: `image${zeroPadding(a, 2)}.jpg`,
    content: faker.lorem.paragraphs()
  }

  ++a
  if (a > 68) a = 1

  result =
`---
title: '${article.title}'
date: '${article.date}'
category: '${article.category}'
image: '${article.image}'
---

${article.content}
`

  fs.writeFileSync(`${dir}${article.fileName}.md`, result)
  console.log(`make ${article.fileName}.md`)
}

console.log('success')
