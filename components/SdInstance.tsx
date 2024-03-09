import React from "react";

export const SdInstance = () => {
  const sdjwtCode = `
    const sdjwt = new SDJwtInstance({ 
      signer: await ES256.getSigner(privateKey), // function
      verifier: await ES256.getVerifier(publicKey), // function
      signAlg: "ES256",
      hasher: digest,
      hashAlg: "SHA-256", // function
      saltGenerator: generateSalt, // function
    });
  `;

  return <div>{sdjwtCode}</div>;
};
