interface QuestNodeProps {
  posX: number;
  posY: number;
  quest:
    | { name: string; wiki: string; type: string; objectives: string[] }
    | undefined;
}

const QuestNode: React.FC<QuestNodeProps> = ({ posX, posY, quest }) => {
  // Tailwind builds classes before the client calculates dynamic values so use inline styles or CSS-in-JS library like Emotion to fix
  return (
    <div className="absolute" style={{ top: `${posY}px`, left: `${posX}px` }}>
      <div className="relative h-min rounded-md border-2 border-neutral-500 bg-neutral-200 px-2 py-3">
        <div
          id="in"
          className="absolute -top-[6px] -left-[6px] h-3 w-3 rounded-full bg-green-600"
        ></div>
        <div
          id="out"
          className="absolute -right-[6px] -top-[6px] h-3 w-3 rounded-full bg-red-600"
        ></div>
        <div className="text-sm">
          <h1 className="font-bold">{quest?.name}</h1>
          <p>Wiki: {quest?.wiki}</p>
          <p>Type: {quest?.type}</p>
          <div>
            <p>Objectives:</p>
            <ul className="text-xs">
              {quest?.objectives.map((q, i) => (
                <li key={`${i}-${quest?.name}`}>{q}</li>
              ))}
            </ul>
          </div>
        </div>
      </div>
    </div>
  );
};

export default QuestNode;
