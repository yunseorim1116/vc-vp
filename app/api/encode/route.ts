import { initializeJwtInstance } from "@/app/jwtModule";

export const POST = async (req: Request) => {
  const sdjwt = await initializeJwtInstance();
  const { credential } = await req.json();
  const claims = await sdjwt.getClaims(credential);

  return Response.json({ claims });
};
