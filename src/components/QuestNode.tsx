import { memo } from "react";

import { Handle, Position } from "reactflow";

interface QuestNodeProps {
  data: {
    name: string;
    wiki: string;
    type: string;
    objectives: string[];
  };
}

const QuestNode: React.FC<QuestNodeProps> = ({ data }) => {
  return (
    <div className="rounded-md border-2 border-neutral-700 bg-neutral-200 py-2 px-4">
      <div className="">
        <div>{data.name}</div>
      </div>

      <Handle type="target" position={Position.Left} className="opacity-0" />
      <Handle type="source" position={Position.Right} className="opacity-0" />
    </div>
  );
};

export default memo(QuestNode);
