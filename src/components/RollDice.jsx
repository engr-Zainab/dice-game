import styled from "styled-components";

const RollDice = ({ currentDice, setCurrentDice, rollDice }) => {
  return (
    <RollRiceContainer>
      <div className="dice" onClick={rollDice}>
        <img src={`/images/dice/dice_${currentDice}.png`} alt="dice" />
      </div>
      <p>Click dice to roll</p>
    </RollRiceContainer>
  );
};

export default RollDice;

const RollRiceContainer = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;
  margin-top: 40px;

  .dice {
    cursor: pointer;
  }

  p {
    font-size: 24px;
  }
`;
