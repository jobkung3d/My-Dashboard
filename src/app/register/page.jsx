"use client"

import React, { useState } from 'react'
import Navbar from '../components/Navbar'
import Footer from '../components/Footer'
import Container from '../components/Container'
import Link from 'next/link'

function RegisterPage() {
    const [name, setName] = useState("");
    const [email, setEmail] = useState("");
    const [password, setPassword] = useState("");
    const [confirmPassword, setConfirmPassword] = useState("");
    const [error, setError] = useState("");
    const [success, setSuccess] = useState("");

    const handleSubmit = async (e) => {
        e.preventDefault();

        if (password != confirmPassword) {
            setError("Password do not math");
            return;
        }

        if (!name || !email || !password || !confirmPassword) {
            setError("Please Complete All Input ");
            return;
        }

        try {
            const res = await fetch("http://localhost:3000/api/register", {
                method: "POST",
                header: {
                    "content-type": "application/json"
                },
                body: JSON.stringify({
                    name, email, password
                })
            })

            if (res.ok) {
                const form = e.target;
                setError("");
                setSuccess("User register successfully.");
                form.reset();
            } else {
                console.log("User registration failed.");
            }

        } catch (error) {
            console.log("Error during registeratoin: ", error)
        }
    }


    return (
        <Container>
            <Navbar />
            <div className="flex-grow">
                <div className="flex justify-center items-center">
                    <div className='w-[400px] shadow-xl p-10 mt-5 rounded-xl'>
                        <h3 className="text-3xl">Register</h3>
                        <hr className="my-3" />
                        <form onSubmit={handleSubmit}>

                            {error && (
                                <div className="bg-red-500 w-fit text-sm text-white py-1 px-3 rounded-md mt-2">
                                    {error}
                                </div>
                            )}

                            {success && (
                                <div className="bg-green-500 w-fit text-sm text-white py-1 px-3 rounded-md mt-2">
                                    {success}
                                </div>
                            )}

                            <input type="text" onChange={(e) => setName(e.target.value)} className="w-full bg-gray-200 border py-2 px-3 rounded text-lg my-2" placeholder='Enter your name' />
                            <input type="email" onChange={(e) => setEmail(e.target.value)} className="w-full bg-gray-200 border py-2 px-3 rounded text-lg my-2" placeholder='Enter your email' />
                            <input type="password" onChange={(e) => setPassword(e.target.value)} className="w-full bg-gray-200 border py-2 px-3 rounded text-lg my-2" placeholder='Enter your password' />
                            <input type="password" onChange={(e) => setConfirmPassword(e.target.value)} className="w-full bg-gray-200 border py-2 px-3 rounded text-lg my-2" placeholder='comfirm your password' />
                            <button className="bg-green-500 text-white border py-2 px-3 rounded text-lg my-2" type="submit">Sign Up</button>
                            <hr className="my-3" />
                            <p>
                                already have an account? Go to <Link href="/login" className='text-blue-500 hover:underline'>Login</Link>
                            </p>
                        </form>
                    </div>
                </div>
            </div>
            <Footer />
        </Container>
    )
}

export default RegisterPage