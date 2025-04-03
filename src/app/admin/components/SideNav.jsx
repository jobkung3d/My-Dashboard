import React from 'react'
import Link from 'next/link'

function SideNav() {
    return (
        <nav className='shadow-xl p-10 rounded-lg'>
            <ul>
                <li><Link className="block my-3 p-3 rounded-lg" href="/admin">Dashboard</Link></li>
                <li><Link className="block my-3 p-3 rounded-lg" href="/users">Users</Link></li>
                <li><Link className="block my-3 p-3 rounded-lg" href="/posts">Posts</Link></li>
            </ul>
        </nav>
    )
}

export default SideNav