import React from 'react'
import AdminNav from '../../components/AdminNav'
import Footer from '../../components/Footer'
import Container from '../../components/Container'
import Link from 'next/link'

function AdminEditPostsPage() {
    return (
        <Container>
            <AdminNav />
            <div className="flex-grow">
                <div className="container mx-auto shadow0xl my-10 p-10 rounded-xl">
                    <Link href="/admin/posts" className="bg-gray-500 inline-block text-white border py-2 px-3 rounded my-2">Go back</Link>
                    <hr className="my-3" />
                    <h3 className="text-xl">Admin Edit User Post Page</h3>
                    <form action="">
                        <input type="text" className="w-[300px] block bg-gray-200 border py-2 px-3 rounded text-lg my-2" placeholder='Post title' value="Title before update" />
                        <input type="text" className="w-[300px] block bg-gray-200 border py-2 px-3 rounded text-lg my-2" placeholder='Img url' value="http://www.imgurl.com" />
                        <textarea name="" id="" cols="30" rows="10" className="w-[300px] block bg-gray-200 border py-2 px-3 rounded text-lg my-2" placeholder='Enter your post content' defaultValue='Content before update'></textarea>
                        <button type='submit' name='update' className="bg-green-500 text-white border py-2 px-3 rounded text-lg my-2">Update Post</button>
                    </form>
                </div>
            </div>
            <Footer />
        </Container>
    )
}

export default AdminEditPostsPage