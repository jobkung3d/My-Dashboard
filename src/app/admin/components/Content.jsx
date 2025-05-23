import React from 'react'
import { FaUsers, FaRegNewspaper } from 'react-icons/fa6'
function Content({ totalUsersData, totalPostsData }) {
    console.log(totalUsersData);
    console.log(totalPostsData);
    return (
        <div className="px-10 rounded-lg">
            <div className="flex">
                <div className="shadow-lg w-[300px] m-3 p-10 rounded-lg">
                    <h3 className="flex items-center">
                        <FaUsers className="mr-2" /> Total Users
                    </h3>
                    <p className="text-5xl mt-10">{totalUsersData?.length}</p>
                </div>
                <div className="shadow-lg w-[300px] m-3 p-10 rounded-lg">
                    <h3 className="flex items-center">
                        <FaRegNewspaper className="mr-2" /> Total Posts
                    </h3>
                    <p className="text-5xl mt-10">{totalPostsData?.length}</p>
                </div>
            </div>
            <p>
                Lorem ipsum dolor sit amet consectetur adipisicing elit. Aperiam reprehenderit obcaecati quisquam temporibus excepturi, nisi quos quod reiciendis architecto id iusto repellat labore? Placeat praesentium, eos error velit laboriosam nihil!
            </p>
        </div>
    )
}

export default Content