import clientPromise from "@/lib/mongodb";

export async function POST(request) {
  try {
    const body = await request.json();
    const { url, shorturl } = body;

    if (!url || !shorturl) {
      return Response.json(
        { success: false, error: true, message: "Missing required fields" },
        { status: 400 }
      );
    }

    const client = await clientPromise;
    const db = client.db("bitlinks");
    const collection = db.collection("url");

    // Check if shorturl already exists
    const existing = await collection.findOne({ shorturl });

    if (existing) {
      return Response.json(
        { success: false, error: true, message: "Short URL already exists" },
        { status: 409 } // conflict
      );
    }

    // Insert new entry
    await collection.insertOne({ url, shorturl });

    return Response.json(
      { success: true, error: false, message: "URL generated successfully" },
      { status: 201 }
    );

  } catch (err) {
    console.error("API Error:", err);

    return Response.json(
      { success: false, error: true, message: "Internal Server Error" },
      { status: 500 }
    );
  }
}
