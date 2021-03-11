import { useState, useEffect, Fragment } from "react";
import { gameConfig } from "./GameConfig";
import "./Game.css";

const Game = () => {
  const { slotDatas } = gameConfig;

  const [boardSlots, setBoardSlots] = useState([]);
  const [openSlots, setOpenSlots] = useState([]);
  const [completeSlots, setCompleteSlots] = useState([]);

  useEffect(() => {
    setBoardSlots(slotDatas);
  }, [slotDatas]);

  useEffect(() => {
    if (openSlots.length === 2) {
      const slot1 = openSlots[0];
      const slot2 = openSlots[1];
      if (slot1.image === slot2.image) {
        setCompleteSlots((completeSlots) => [...completeSlots, slot1, slot2]);
        setOpenSlots([]);
      } else {
        setTimeout(() => {
          setOpenSlots([]);
        }, 500);
      }
    }
  }, [openSlots]);

  const onOpenSlot = (slot) => {
    if (openSlots.length < 2) {
      setOpenSlots([...openSlots, slot]);
    }
  };

  const isSlotOpen = (slot) => {
    return openSlots.find((openSlots) => openSlots.id === slot.id);
  };

  const isSlotComplete = (slot) => {
    return completeSlots.find((completeSlot) => completeSlot.id === slot.id);
  };

  return (
    <div className="game-wrapper">
      <div className="game-title">เกมจับคู่ภาพ</div>
      <div className="game-board">
        {boardSlots.map((slot, i) => {
          return (
            <Fragment key={i}>
              <div className="board-slot" onClick={() => onOpenSlot(slot)}>
                {(isSlotOpen(slot) || isSlotComplete(slot)) && <img src={slot.image} alt="" />}
              </div>
              {(i + 1) % 3 === 0 && <div style={{ lineHeight: 0 }} />}
            </Fragment>
          );
        })}
      </div>
    </div>
  );
};

export default Game;
