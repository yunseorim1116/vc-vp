import { DisclosureFrame } from "@sd-jwt/types";

export const claims = {
  //원본 클레임
  firstname: "John",
  id: "1234",
  lastname: "Doe",
  ssn: "123-45-6789",
};

export const presentedClaims = {
  firstname: "John",
  id: "1234",
  lastname: "Doe",
  ssn: "123-45-6789",
  data: {
    firstname: "John",
    lastname: "Doe",
    ssn: "123-45-6789",
  },
};

export const disclosureFrame: DisclosureFrame<typeof claims> = {
  _sd: ["firstname", "id", "ssn"],
};

export const encodedClaims = `{
  "lastname": "Doe",
  "ssn": "123-45-6789",
  "data": {
    "firstname": "John",
    "lastname": "Doe",
    "ssn": "123-45-6789",
    "list": [
      {
        "r": "1"
      },
      "b",
      "c"
    ]
  },
  "data2": {
    "hi": "bye"
  },
  "id": "1234",
  "firstname": "John"
}`;

export const sdDatas = `{
  "lastname": "Doe",
  "_sd": [
    "-vMBLfnS56ykhazsvM2SRBFsJbAC3IehUJhCjGzmEFg",
    "4IeDimKZ_UDOJQih1ggSFvhQeStBXSXABsewHEqMHZw",
    "8bWqcjSohZU3Qtnx9g43nmZ7SDtceG1Iq5gB51Tvzqo"
  ],
  "_sd_alg": "SHA-256"
}`;
