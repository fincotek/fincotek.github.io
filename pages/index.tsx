import Head from "next/head";
import { Inter } from "next/font/google";
import styles from "@/styles/Home.module.css";
import { Container } from "@mui/material";

const inter = Inter({ subsets: ["latin"] });

export default function Home() {
  return (
    <>
      <Head>
        <title>Fincotek - White paper</title>
        <meta name="description" content="Fincotek white paper" />
        <meta name="viewport" content="width=device-width, initial-scale=1" />
        <link rel="icon" href="/favicon.ico" />
      </Head>
      <div className={styles.main}>
        <h1>Overview</h1>
        <p>
          Fincotek offer wallet analytics CEX & DEX. A token launch platform
          web3 ethereum. Based on blockchain technology, our platform offers
          maximum level of transparency. You have complete control over your
          assets and your money, without the need to trust a central financial
          institution.
        </p>
        <h2>Introduction</h2>
        <p>
          As the world becomes increasingly digital, the need for reliable and
          secure platforms for online transactions has become more important
          than ever. In recent years, blockchain technology has emerged as a
          promising solution for ensuring the transparency and security of
          online transactions. In this whitepaper, we present a project called
          Fincotek that combines blockchain technology with crowdfunding and
          product authenticity to create a secure and efficient platform for
          online transactions.
        </p>
        <h2>Problem Statement</h2>
        <p>
          The rise of e-commerce has led to an increase in fraudulent activities
          such as counterfeit products, fake reviews, and phishing attacks.
          Consumers are often unable to verify the authenticity of products they
          purchase online, and businesses struggle to protect their reputation
          from malicious actors. Additionally, traditional crowdfunding
          platforms often lack transparency and accountability, making it
          difficult for investors to make informed decisions.
        </p>
        <h2>Solution Overview</h2>
        <p>
          Fincotek project is a blockchain-based platform that combines three
          key features: crowdfunding, product authenticity verification, and
          analytics tracking. The platform will allow businesses to launch
          crowdfunding campaigns for their products while providing investors
          with a transparent and secure way to invest in these campaigns. The
          platform will also provide consumers with a way to verify the
          authenticity of the products they purchase.
        </p>
        <p>
          Fincotek will use blockchain technology to create a transparent and
          secure ledger of all transactions on the platform. Each transaction
          will be recorded on the blockchain, creating an immutable record of
          all crowdfunding campaigns and product purchases. This will provide
          investors with a way to track the performance of their investments and
          ensure that their funds are being used as intended.
        </p>
      </div>
    </>
  );
}
