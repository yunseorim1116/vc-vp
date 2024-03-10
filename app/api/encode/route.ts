import { initializeJwtInstance } from "@/app/jwtModule";

export const POST = async (req: Request) => {
  const sdjwt = await initializeJwtInstance();
  const { token } = await req.json();
  const claims = await sdjwt.getClaims(token);

  return Response.json({ claims });
};
