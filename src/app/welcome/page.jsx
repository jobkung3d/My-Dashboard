"use client"

import React from 'react'
import Navbar from '../components/Navbar'
import Footer from '../components/Footer'
import Link from 'next/link'
import Image from 'next/image'
import Container from '../components/Container'
import { useSession } from 'next-auth/react'
import { redirect } from 'next/navigation'

function WelcomePage() {
    const { data: session } = useSession();
    if (!session) {
        redirect("/login")
    }

    console.log(session);

    return (
        <Container>
            <Navbar session={session} />
            <div className="flex-grow">
                <div className="container mx-auto shadow-xl my-10 p-10 rounded-xl">
                    <div className="flex justify-between">
                        <div>
                            <h3 className="text-3xl">Profile</h3>
                            <p>Welcome {session?.user?.name}</p>
                            <p>Email {session?.user?.email}</p>
                        </div>
                        <div>
                            <Link href="/create" className='bg-green-500 text-white border py-2 px-3 rounded-md text-lg my-2'>Create Post</Link>
                        </div>
                    </div>

                    {/* User Post Date */}
                    <div>
                        <div className="shadow-xl my-10 p-10 rounded-xl">
                            <h4 className="text-2xl">Post Title</h4>
                            <Image src="https://images.unsplash.com/photo-1461749280684-dccba630e2f6?w=700&auto=format&fit=crop&q=60&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxzZWFyY2h8Mnx8Y29kaW5nfGVufDB8fDB8fHww" width={300} height={0} alt='code image' className='my-3 rounded-md' />
                            <p>
                                Lorem ipsum dolor sit amet consectetur adipisicing elit. Id eaque cum molestiae quidem omnis eveniet quia accusantium quam expedita ex officia ratione incidunt, libero facilis soluta, consequatur dicta a? Fugiat.
                            </p>
                            <div className="mt-5">
                                <Link className="bg-gray-500 text-white border py-2 px-3 rounded-md text-lg my-2" href="/edit">Edit</Link>
                                <Link className="bg-red-500 text-white border py-2 px-3 rounded-md text-lg my-2" href="/delete">Delete</Link>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
            <Footer />
        </Container>
    )
}

export default WelcomePage