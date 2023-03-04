import { type NextPage } from "next";
import Head from "next/head";
import Link from "next/link";
import { signIn, signOut, useSession } from "next-auth/react";

import { api } from "~/utils/api";

import QuestNode from "~/components/QuestNode";

const Home: NextPage = () => {
  return (
    <>
      <Head>
        <title>Tarkov Quester</title>
        <meta
          name="description"
          content="A website for Escape from Tarkov players to track current and future quests much easier."
        />
        <link rel="icon" href="/favicon.ico" />
      </Head>
      <main className="relative flex h-screen">
        <QuestNode posX={200} posY={300} />
        <QuestNode posX={700} posY={90} />
      </main>
    </>
  );
};

export default Home;
