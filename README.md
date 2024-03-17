# VC-VP

This project is to help you understand issuer, holder, and verifier.

In this project, You are the person who wants to obtain a certificate of University enrollment and submit it to the platform.

## How it Works?

1. You will be the issuer and you will issue a certificate of University enrollment.
2. You will be the holder and you will submit the certificate to the platform. When submitting, you will provide only portions of the certificate to the verifier. It's called Selective Disclosure.
3. You will be the verifier and you will validate the certificate.

## How to Start?

This is a [Next.js](https://nextjs.org/) project bootstrapped with [`create-next-app`](https://github.com/vercel/next.js/tree/canary/packages/create-next-app).

```bash
npm run dev
# or
yarn dev
# or
pnpm dev
# or
bun dev
```

## About Selective Disclosure

We are using SD-JWT in this project to provide Selective Disclosure features.
