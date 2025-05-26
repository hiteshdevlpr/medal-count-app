import { NextResponse } from "next/server";
import MedalsData from "@/public/medals.json";

export async function GET() {
    try {
        return NextResponse.json(MedalsData);
    } catch(err) {
        console.log(err);
    }
}