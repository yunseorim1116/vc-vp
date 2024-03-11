import { claims, disclosureFrame, presentationFrame } from '@/datas/claims';
import { initializeJwtInstance } from '@/app/jwtModule';

export const GET = async () => {
  const sdjwt = await initializeJwtInstance();
  const credential = await sdjwt.issue(claims, disclosureFrame);
  const presentation = await sdjwt.present(credential, presentationFrame);

  return Response.json({ presentation });
};
