import {NextResponse} from "next/server";
export async function POST() {
  try {
    return new NextResponse(JSON.stringify({
      message: "Success",
    })
);
  } catch (error) {
    
  }
}