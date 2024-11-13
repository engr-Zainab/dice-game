import styled from "styled-components";

const Rules = () => {
  return (
    <RulesContainer>
      <h2>How to play dice game</h2>
      <div className="list">
        <p>1. Select any number.</p>
        <p>2. Click on dice.</p>
        <p>
          3. After clicking the dice, if selected number comes equal to the dice
          number you will get the same score as dice number.
        </p>
        <p>
          4. If you get wrong guess then 1 point will be dedcuted from the total
          score.
        </p>
      </div>
    </RulesContainer>
  );
};

export default Rules;

const RulesContainer = styled.div`
  max-width: 800px;
  margin: 40px auto;
  background-color: #fbf1f1;
  padding: 20px;
  color: black;
  border-radius: 10px;

  h2 {
    font-size: 24px;
    margin-bottom: 24px;
  }

  .list {
    display: flex;
    flex-direction: column;
    gap: 4px;
  }
`;
