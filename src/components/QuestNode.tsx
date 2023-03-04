interface QuestNodeProps {
  posX: number;
  posY: number;
}

const QuestNode: React.FC<QuestNodeProps> = ({ posX, posY }) => {
  const positionX = `top-[${posX}px]`;

  // Tailwind builds classes before the client calculates dynamic values so use inline styles or CSS-in-JS library like Emotion to fix
  return (
    <div className={`absolute ${positionX}`}>
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
          <h1 className="font-bold">Debut</h1>
          <p>Wiki: https://escapefromtarkov.fandom.com/wiki/Debut</p>
          <p>Type: Elimination</p>
          <div>
            <p>Objectives:</p>
            <ul className="text-xs">
              <li> - Eliminate 5 Scavs all over the Tarkov territory</li>
              <li> - Obtain and hand over 2 MP-133 12ga shotguns</li>
            </ul>
          </div>
        </div>
      </div>
    </div>
  );
};

export default QuestNode;
