import { useEffect, useState } from "react";
import { eventBus } from "../utils/event-bus";

export const useEvent = (type: 'rock' | 'paper' | 'scissor') => {
  const [state, setState] = useState({
    lastValue: 0,
    totalValue: 0,
    totalClicked: 0,
  });


  useEffect(() => {
    const handler = (payload: {count: number; value: number}) => {
      setState((prev) => ({
        ...prev,
        lastValue: payload.value,
        totalValue: state.totalValue + payload.value,
        totalClicked: payload.count,
      }));
    };

    eventBus.on(type, handler);
    
    return () => {
      eventBus.off(type, handler);
    };
    
  }, [state.totalValue, type]);

  return state;
}