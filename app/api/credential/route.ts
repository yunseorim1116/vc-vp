import { claims, disclosureFrame } from "@/datas/claims";
import { initializeJwtInstance } from "@/app/jwtModule";

export const GET = async () => {
  const sdjwt = await initializeJwtInstance();
  const credential = await sdjwt.issue(claims, disclosureFrame);

  return Response.json({ credential });
};
