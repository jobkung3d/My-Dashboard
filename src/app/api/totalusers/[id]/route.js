import { connectMongoDB } from "../../../../../lib/mongodb";
import User from "../../../../../models/user";
import { NextResponse } from "next/server";
import bcrypt from 'bcryptjs';

export async function GET(req, { params }) {
    const { id } = await params;
    await connectMongoDB();
    const user = await User.findOne({ _id: id });
    return NextResponse.json({user}, { status: 200 });
}

export async function PUT(req, { params }) {
    const { id } = await params;
    const { newName :name, newEmail: email, newPassword: password } = await req.json();
    const hashedPassword = await bcrypt.hash(password, 10);
    await connectMongoDB();
    await User.findByIdAndUpdate(id, {
        name,
        email,
        password: hashedPassword
    });

    return NextResponse.json({ message: "User updated successfully" }, { status: 200 });
}
