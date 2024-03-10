import { claims, disclosureFrame } from "@/datas/claims";
import { initializeJwtInstance } from "@/app/jwtModule";
import { requiredClaims } from "@/datas/claims";

export const GET = async () => {
  const sdjwt = await initializeJwtInstance();
  const credential = await sdjwt.issue(claims, disclosureFrame);
  const verified = await sdjwt.verify(credential, requiredClaims);

  return Response.json({ verified });
};
