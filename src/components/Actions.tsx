import { useRef } from "react";
import { Button } from "./Button";
import { eventBus } from "../utils/event-bus";

type state = {
  rock: number;
  paper: number;
  scissor: number;
};

export const Actions = () => {
  const gameRef = useRef<state>({
    rock: 0,
    paper: 0,
    scissor: 0,
  });

  const handleClick = (type: "rock" | "paper" | "scissor") => {
    const randomNumber = Math.round(Math.random() * 10 + 1);
    eventBus.emit(type, {
      count: ++gameRef.current[type],
      value: randomNumber,
    });
  };

  return (
    <div className="flex gap-4 items-center">
      <Button onClick={() => handleClick("rock")}>Rock</Button>
      <Button onClick={() => handleClick("paper")}>Paper</Button>
      <Button onClick={() => handleClick("scissor")}>Scissor</Button>
    </div>
  );
};

Actions.displayName = "Actions";
