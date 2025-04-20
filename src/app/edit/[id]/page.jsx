'use client'

import React, { useState, useEffect } from 'react'
import Navbar from '../../components/Navbar'
import Footer from '../../components/Footer'
import Link from 'next/link'
import Container from '../../components/Container'
import { useSession } from 'next-auth/react'
import { redirect } from 'next/navigation'
import { useRouter } from 'next/navigation'

function EditPage({ params }) {

    const { data: session } = useSession();
    if (!session) redirect("/login")

    const { id } = params;
    console.log(id);

    const [postData, setPostData] = useState("");

    const getPostById = async () => {
        try {
            const res = await fetch(`http://localhost:3000/api/posts/${id}`, {
                method: "GET",
                cache: "no-store",
            })

            if (!res.ok) {
                throw new Error("Failed to fetch posts")
            }

            const data = await res.json();
            console.log('Edit post: ', data);
            setPostData(data);
            console.log('postData: ', postData);
        } catch (error) {
            console.log(error);
        }
    }

    useEffect(() => {
        getPostById()
    }, [])

    const handleSubmit = async (e) => {

    }

    return (
        <Container>
            <Navbar />
            <div className="flex-grow">
                <div className="container mx-auto shadow0xl my-10 p-10 rounded-xl">
                    <Link href="/welcome" className="bg-gray-500 inline-block text-white border py-2 px-3 rounded my-2">Go back</Link>
                    <hr className="my-3" />
                    <h3 className="text-xl">Edit Post</h3>
                    <form action="">
                        <input type="text" className="w-[300px] block bg-gray-200 border py-2 px-3 rounded text-lg my-2" placeholder={postData.post?.title} />
                        <input type="text" className="w-[300px] block bg-gray-200 border py-2 px-3 rounded text-lg my-2" placeholder={postData.post?.img} />
                        <textarea name="" id="" cols="30" rows="10" className="w-[300px] block bg-gray-200 border py-2 px-3 rounded text-lg my-2" placeholder={postData.post?.content}></textarea>
                        <button type='submit' name='update' className="bg-green-500 text-white border py-2 px-3 rounded text-lg my-2">Update Post</button>
                    </form>
                </div>
            </div>
            <Footer />
        </Container>
    )
}

export default EditPage