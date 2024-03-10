import { initializeJwtInstance } from "@/app/jwtModule";

export const POST = async (req: Request) => {
  const sdjwt = await initializeJwtInstance();
  const { token } = await req.json();
  console.log(token);
  const claims = await sdjwt.getClaims(token);
  console.log(claims);

  return Response.json({ claims });
};
