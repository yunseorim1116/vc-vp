import { SDJwtInstance } from "@sd-jwt/core";
import { ES256, digest, generateSalt } from "@sd-jwt/crypto-nodejs";

export const GET = async () => {
  const { publicKey, privateKey } = await ES256.generateKeyPair();

  const sdjwt = new SDJwtInstance({
    signer: await ES256.getSigner(privateKey), //function
    verifier: await ES256.getVerifier(publicKey), //function
    signAlg: "ES256",
    hasher: digest,
    hashAlg: "SHA-256", //function
    saltGenerator: generateSalt, //function
  });

  return Response.json({ sdjwt });
};
