import { Actions } from "./Actions";
import { GameCard } from "./GameCard";

const options = ["rock", "paper", "scissor"];

const Game = () => {
  return (
    <div className="flex flex-col items-center h-[37.5rem] mt-10 border border-dashed border-slate-500 rounded-sm">
      <div className="py-4">
        <h4 className="text-3xl font-bold">Game</h4>
      </div>
      <div className="flex items-center flex-col gap-4">
        <Actions />
        <div className="flex gap-4">
          {options.map((option, index) => {
            return (
              <GameCard
                key={index}
                name={option as "rock" | "paper" | "scissor"}
              />
            );
          })}
        </div>
      </div>
    </div>
  );
};

export default Game;
