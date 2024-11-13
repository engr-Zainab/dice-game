import styled from "styled-components";

const NumberSelector = ({
  selectedNumber,
  setSelectedNumber,
  error,
  setError,
}) => {
  const arrNumber = [1, 2, 3, 4, 5, 6];

  const selectNumberHandler = (value) => {
    setSelectedNumber(value);
    setError("");
  };

  return (
    <NumberSelectorContainer>
      <p className="error">{error}</p>
      <div className="numbers">
        {arrNumber.map((value, index) => (
          <Box
            isselected={value == selectedNumber}
            key={index}
            onClick={() => selectNumberHandler(value)}
          >
            {value}
          </Box>
        ))}
      </div>
      <p className="text">Select Number</p>
    </NumberSelectorContainer>
  );
};

export default NumberSelector;

const NumberSelectorContainer = styled.div`
  display: flex;
  flex-direction: column;
  align-items: end;

  .numbers {
    display: flex;
    gap: 24px;
    padding-bottom: 20px;
  }

  .text {
    font-size: 20px;
    font-weight: 700;
  }

  .error {
    color: red;
  }
`;

const Box = styled.div`
  height: 72px;
  width: 72px;
  border: 1px solid black;
  display: grid;
  place-items: center;
  font-size: 24px;
  font-weight: 700;
  border-radius: 10px;
  cursor: pointer;
  background-color: ${(props) => (props.isselected ? "black" : "white")};
  color: ${(props) => (props.isselected ? "white" : "black")};
`;
