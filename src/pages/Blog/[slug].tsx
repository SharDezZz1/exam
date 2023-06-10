import React from 'react'
import { useRouter } from 'next/router'
//redux
import { useSelector } from 'react-redux';
import { selectBlog } from '@/store/features/Blog';


const BlogSingle = () => {
  const router = useRouter();
  const slug:Number = Number(router.query); 
  const blog = useSelector(selectBlog)
  console.log(blog)
  return (
<>
    <div>{blog[slug]}</div>
</>  
)
}

export default BlogSingle