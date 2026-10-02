/**
 * Sanity webhook endpoint: when content is published in the Studio, Sanity
 * POSTs {_type} here and the pages that read that type are refreshed.
 * Requests must carry a valid signature made with SANITY_REVALIDATE_SECRET.
 */
import { revalidateTag } from "next/cache";
import { isValidSignature, SIGNATURE_HEADER_NAME } from "@sanity/webhook";
import { CONTENT_TYPES } from "@lib/sanity";

export async function POST(request) {
  const secret = process.env.SANITY_REVALIDATE_SECRET;
  if (!secret) {
    console.error("SANITY_REVALIDATE_SECRET is not set");
    return Response.json({ message: "Not configured" }, { status: 500 });
  }

  // Verify against the raw body; re-encoded JSON can fail the signature check.
  const body = await request.text();
  const signature = request.headers.get(SIGNATURE_HEADER_NAME);
  if (!signature || !(await isValidSignature(body, signature, secret))) {
    return Response.json({ message: "Invalid signature" }, { status: 401 });
  }

  let type;
  try {
    type = JSON.parse(body)._type;
  } catch {
    return Response.json({ message: "Invalid body" }, { status: 400 });
  }
  if (!CONTENT_TYPES.includes(type)) {
    return Response.json({ message: `Unknown type: ${type}` }, { status: 400 });
  }

  // Expire immediately so the next visitor gets fresh content rather than one
  // more stale copy.
  revalidateTag(type, { expire: 0 });
  return Response.json({ revalidated: type });
}
