import { redirect } from "next/navigation"
import clientPromise from "@/lib/mongodb"

export default async function Page({ params }) {
   const shorturl = (await params).shorturl

  const client = await clientPromise;
  const db = client.db("bitlinks");
  const collection = db.collection("url");

  const doc = await collection.findOne({ shorturl });

  if (doc.url) {
   return redirect(doc.url);   
  }

  return redirect(process.env.NEXT_PUBLIC_HOST); // fallback
}
