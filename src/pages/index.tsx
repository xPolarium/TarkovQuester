import { type NextPage } from "next";
import Head from "next/head";
import Link from "next/link";
import { signIn, signOut, useSession } from "next-auth/react";

import { api } from "~/utils/api";

import ReactFlow, { useNodesState, useEdgesState } from "reactflow";

import QuestNode from "../components/QuestNode";

import "reactflow/dist/base.css";

const nodeTypes = {
  quest: QuestNode,
};

const initNodes = [
  {
    id: "1",
    type: "quest",
    data: {
      name: "Debut",
      wiki: "https://escapefromtarkov.fandom.com/wiki/Debut",
      type: "Elimination",
      objectives: [
        "Eliminate 5 Scavs all over the Tarkov territory",
        "Obtain and hand over 2 MP-133 12ga shotguns",
      ],
    },
    position: { x: 80, y: 450 },
  },
  {
    id: "2",
    type: "quest",
    data: {
      name: "Search Mission",
      wiki: "https://escapefromtarkov.fandom.com/wiki/Search_Mission",
      type: "Completion",
      objectives: [
        "Find Prapor's missing convoy on Woods",
        "Locate the temporary USEC camp",
        "Survive and extract from the location",
      ],
    },
    position: { x: 570, y: 250 },
  },
];

const initEdges = [
  {
    id: "e1-2",
    source: "1",
    target: "2",
    type: "smoothstep",
  },
];

const Home: NextPage = () => {
  const [nodes, setNodes, onNodesChange] = useNodesState(initNodes);
  const [edges, setEdges, onEdgesChange] = useEdgesState(initEdges);

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
        <ReactFlow
          nodes={nodes}
          edges={edges}
          nodeTypes={nodeTypes}
          nodesConnectable={false}
          edgesFocusable={false}
        ></ReactFlow>
      </main>
    </>
  );
};

export default Home;
