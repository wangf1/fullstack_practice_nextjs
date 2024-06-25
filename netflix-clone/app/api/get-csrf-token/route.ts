import { NextApiRequest } from "next";
import { getCsrfToken } from "next-auth/react";
import { NextResponse } from "next/server";
/**
 * An example REST endpoint that Handles GET request to retrieve CSRF token.
 *
 * @param req Next.js API request object
 * @returns JSON response with CSRF token
 */
export async function GET(req: NextApiRequest) {
  const csrfToken = await getCsrfToken({ req });
  return NextResponse.json({ csrfToken });
}
