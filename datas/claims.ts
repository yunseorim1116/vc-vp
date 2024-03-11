import { DisclosureFrame, PresentationFrame } from "@sd-jwt/types";

// This is the original claims that issuer issue.
export const claims = {
  name: "John Deo",
  studentId: "22109538",
  university: "S University",
  department: "Computer Science",
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
  _sd: ["name", "studentId", "department"],
};
export const presentationFrame: PresentationFrame<typeof claims> = {
  name: true,
};
export const requiredClaims = ["name"];

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
  "university": "S University",
  "_sd": [
    "0uDMKIRkX8-VU6GDPRVWoHxyeC_OgvXwXRaE9k6sq1o",
    "It91bTa5vtwVixQOYIhAHZ_OIpklmhXwtgLZdc4Chzk",
    "pdZa5eD4PAFzGN01r9lNHD8VKbQX0DeA8l2AXdYEmPM"
  ],
  "_sd_alg": "SHA-256"
}`;
