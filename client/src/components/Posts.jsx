import React from 'react'
import Card from './Card'


const tempData = [
  {
    id : 1,
    title: 'Post 1',
    body: 'Lorem ipsum dolor sit amet consectetur adipisicing elit. Quisquam, voluptatum.',
    image: "/photo1.jpg"
  },
  {
    id : 2,
    title: 'Post 2',
    body: 'Lorem ipsum dolor sit amet consectetur adipisicing elit. Quisquam, voluptatum.',
    image: "/photo1.jpg"

  },
  {
    id : 3,
    title: 'Post 3',
    body: 'Lorem ipsum dolor sit amet consectetur adipisicing elit. Quisquam, voluptatum.',
    image: "/photo1.jpg"
  },
  {
    id : 4,
    title: 'Post 4',
    body: 'Lorem ipsum dolor sit amet consectetur adipisicing elit. Quisquam, voluptatum.',
    image: "/photo1.jpg"
  },
  {
    id : 5,
    title: 'Post 5',
    body: 'Lorem ipsum dolor sit amet consectetur adipisicing elit. Quisquam, voluptatum.',
    image: "/photo1.jpg"
  },
  {
    id : 6,
    title: 'Post 6',
    body: 'Lorem ipsum dolor sit amet consectetur adipisicing elit. Quisquam, voluptatum.',
    image: "/photo1.jpg"
  },
]


const Posts = () => {
  return (
    <div>
      {tempData.map((post, index) => (
        <Card key={index} postData={post} />
      ))}
    </div>
  )
}

export default Posts