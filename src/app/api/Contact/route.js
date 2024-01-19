
import User from "@/model/User";
import dbConnect from "@/utils/dbConn";
import { NextResponse } from "next/server";

export async function POST(req,res){
    try {
        const body = await req.json();
        await dbConnect();

        await User.create(body);
        return NextResponse.json({
            message:"message send successfully!"
        },{
            status:200
        })
    } catch (error) {
        return NextResponse.json({message:"server eRrOr"},{status:500})

    }

}