import { claims, disclosureFrame } from "@/datas/claims";
import { initializeJwtInstance } from "@/app/jwtModule";

export const GET = async () => {
  const presentationFrame = ["firstname", "id"];
  const sdjwt = await initializeJwtInstance();
  const credential = await sdjwt.issue(claims, disclosureFrame);
  const presentation = await sdjwt.present(credential, presentationFrame);

  return Response.json({ presentation });
};
