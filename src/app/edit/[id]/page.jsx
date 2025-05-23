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

    const [postData, setPostData] = useState({});

    const [newTitle, setNewTitle] = useState("");
    const [newImg, setNewImg] = useState("");
    const [newContent, setNewContent] = useState("");

    const router = useRouter();

    const getPostById = async () => {
        try {
            const res = await fetch(`${process.env.NEXT_PUBLIC_URL}/api/posts/${id}`, {
                method: "GET",
                cache: "no-store",
            })

            if (!res.ok) {
                throw new Error("Failed to fetch posts")
            }

            const data = await res.json();
            setPostData(data);

        } catch (error) {
            console.log(error);
        }
    }

    useEffect(() => {
        getPostById()
    }, [])

    console.log('postData: ', postData);

    const handleSubmit = async (e) => {
        e.preventDefault();

        try {

            const res = await fetch(`${process.env.NEXT_PUBLIC_URL}/api/posts/${id}`, {
                method: "PUT",
                header: {
                    "Content-Type": "application/json"
                },
                body: JSON.stringify({
                    newTitle,
                    newImg,
                    newContent
                })
            });

            if (!res.ok) {
                throw new Error("Failed to update post")
            }
            console.log(res)
            router.refresh();
            router.push("/welcome")

        } catch (error) {
            console.log(error);
        }
    }

    return (
        <Container>
            <Navbar />
            <div className="flex-grow">
                <div className="container mx-auto shadow0xl my-10 p-10 rounded-xl">
                    <Link href="/welcome" className="bg-gray-500 inline-block text-white border py-2 px-3 rounded my-2">Go back</Link>
                    <hr className="my-3" />
                    <h3 className="text-xl">Edit Post</h3>
                    <form action="" onSubmit={handleSubmit}>
                        <input type="text" className="w-[300px] block bg-gray-200 border py-2 px-3 rounded text-lg my-2"
                            placeholder={postData?.post?.title} onChange={(e) => setNewTitle(e.target.value)} />
                        <input type="text" className="w-[300px] block bg-gray-200 border py-2 px-3 rounded text-lg my-2"
                            placeholder={postData?.post?.img} onChange={(e) => setNewImg(e.target.value)} />
                        <textarea name="" id="" cols="30" rows="10" className="w-[300px] block bg-gray-200 border py-2 px-3 rounded text-lg my-2"
                            placeholder={postData?.post?.content} onChange={(e) => setNewContent(e.target.value)}></textarea>
                        <button type='submit' name='update' className="bg-green-500 text-white border py-2 px-3 rounded text-lg my-2">Update Post</button>
                    </form>
                </div>
            </div>
            <Footer />
        </Container>
    )
}

export default EditPage