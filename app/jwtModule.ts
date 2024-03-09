import { SDJwtInstance } from "@sd-jwt/core";
import { ES256, digest, generateSalt } from "@sd-jwt/crypto-nodejs";

export const initializeJwtInstance = async () => {
  const { publicKey, privateKey } = await ES256.generateKeyPair();

  const sharedJwtInstance = new SDJwtInstance({
    signer: await ES256.getSigner(privateKey),
    verifier: await ES256.getVerifier(publicKey),
    signAlg: "ES256",
    hasher: digest,
    hashAlg: "SHA-256",
    saltGenerator: generateSalt,
  });

  return sharedJwtInstance;
};
