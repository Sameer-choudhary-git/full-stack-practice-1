import dbConn from "@/utils/dbConn";
import User from "@/model/User";
import { NextResponse } from "next/server";

export async function POST(req,res){
    try {
        const body = await req.json();
        await dbConn();
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