import { FC } from "react";
import { useEvent } from "../hooks/useEvent";
import { Statistics } from "./Statistics";

type GameCardProps = {
  name: "rock" | "paper" | "scissor";
};

export const GameCard: FC<GameCardProps> = ({ name }) => {
  const { lastValue, totalClicked, totalValue } = useEvent(name);

  return (
    <>
      <Statistics
        name={name}
        lastValue={lastValue}
        totalValue={totalValue}
        totalClicked={totalClicked}
      />
    </>
  );
};

GameCard.displayName = "GameCard";
