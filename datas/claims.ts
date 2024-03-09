import { DisclosureFrame } from "@sd-jwt/types";

export const claims = {
  firstname: "John",
  lastname: "Doe",
  ssn: "123-45-6789",
  id: "1234",
  data: {
    firstname: "John",
    lastname: "Doe",
    ssn: "123-45-6789",
    list: [{ r: "1" }, "b", "c"],
  },
  data2: {
    hi: "bye",
  },
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

export const disclosureFrame: DisclosureFrame<typeof claims> = {
  _sd: ["firstname", "id", "data2"],
  data: {
    _sd: ["list"],
    _sd_decoy: 2,
    list: {
      _sd: [0, 2],
      _sd_decoy: 1,
      0: {
        _sd: ["r"],
      },
    },
  },
  data2: {
    _sd: ["hi"],
  },
};

export const sdDatas = `{
    "lastname": "Doe",
    "ssn": "123-45-6789",
    "data": {
      "firstname": "John",
      "lastname": "Doe",
      "ssn": "123-45-6789",
      "_sd": [
        "EnVCodzZsCU7GBgYjR4TDRB3VugjTovxFI__C3daAwg",
        "ljP9LsHuNX96LxS05OV8y__eGMTm98rOAlg_zCabVcM",
        "xzC_2r-fFDW9nsKfOMVUtnI-I7Qig8BhWIPTzbkf7YA"
      ]
    },
    "_sd": [
      "3FhtlWFmKqLgtdgo4U0c9Ev7hSr3PKul_1Snk8DEjmI",
      "II-IL4FnKfwjQZG232eykhT1gk9HioqPyyYMeRXdNsg",
      "PL4oOm7VtkvQf0CY8TGpCZMSysUkBV8Ii4AB--wQXQc"
    ],
    "_sd_alg": "SHA-256"
  }`;
