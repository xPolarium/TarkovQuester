import { type NextPage } from "next";
import Head from "next/head";
import Link from "next/link";
import { signIn, signOut, useSession } from "next-auth/react";

import { api } from "~/utils/api";

import QuestNode from "~/components/QuestNode";

const Home: NextPage = () => {
  const quests = [
    {
      name: "Debut",
      wiki: "https://escapefromtarkov.fandom.com/wiki/Debut",
      type: "Elimination",
      objectives: [
        "Eliminate 5 Scavs all over the Tarkov territory",
        "Obtain and hand over 2 MP-133 12ga shotguns",
      ],
    },
    {
      name: "Search Mission",
      wiki: "https://escapefromtarkov.fandom.com/wiki/Search_Mission",
      type: "Completion",
      objectives: [
        "Find Prapor's missing convoy on Woods",
        "Locate the temporary USEC camp",
        "Survive and extract from the location",
      ],
    },
  ];

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
        <QuestNode posX={200} posY={240} quest={quests[0]} />
        <QuestNode posX={700} posY={90} quest={quests[1]} />
      </main>
    </>
  );
};

export default Home;
