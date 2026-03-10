import Input from "./components/Input";
import Button from "./components/Button";

import { Container, Content, Row } from "./styles";
import { useState } from "react";

const App = () => {
  const [currentNumber, setCurrentNumber] = useState("0");
  const [firstNumber, setFirstNumber] = useState("0");
  const [operation, setOperation] = useState("");

  const handleAddNumber = (number) => {
    setCurrentNumber((prev) =>
      prev === "0" ? `${number}` : `${prev}${number}`,
    );
  };


  // guarda o primeiro número e a operação
const handleOperation = (op) => {
  setFirstNumber(currentNumber);
  setCurrentNumber("0");
  setOperation(op);
};

// calcula o resultado
const handleEquals = () => {
  let result = 0;

  switch (operation) {
    case "+":
      result = Number(firstNumber) + Number(currentNumber);
      break;
    case "-":
      result = Number(firstNumber) - Number(currentNumber);
      break;
    case "x":
      result = Number(firstNumber) * Number(currentNumber);
      break;
    case "/":
      result = Number(firstNumber) / Number(currentNumber);
      break;
    default:
      return;
  }

  setCurrentNumber(String(result));
  setFirstNumber("0");
  setOperation("");
};

  return (
    <Container>
      <Content>
        <Input value={currentNumber} onChange={setCurrentNumber} />
        <Row>
          <Button label="%" onClick={() => handleAddNumber("%")} />
          <Button label="/" onClick={() => handleOperation("/")} />
          <Button label="x" onClick={() => handleOperation("x")} />
          <Button label="C" onClick={() => setCurrentNumber("0")} />
        </Row>
        <Row>
          <Button label="7" onClick={() => handleAddNumber("7")} />
          <Button label="8" onClick={() => handleAddNumber("8")} />
          <Button label="9" onClick={() => handleAddNumber("9")} />
          <Button label="+" onClick={() => handleOperation("+")} />
        </Row>
        <Row>
          <Button label="4" onClick={() => handleAddNumber("4")} />
          <Button label="5" onClick={() => handleAddNumber("5")} />
          <Button label="6" onClick={() => handleAddNumber("6")} />
          <Button label="-" onClick={() => handleOperation("-")} />
        </Row>
        <Row>
          <Button label="1" onClick={() => handleAddNumber("1")} />
          <Button label="2" onClick={() => handleAddNumber("2")} />
          <Button label="3" onClick={() => handleAddNumber("3")} />
          <Button label="=" onClick={handleEquals} />
        </Row>
        <Row>
          <Button label="0" onClick={() => handleAddNumber("0")} />
          <Button label="." onClick={() => handleAddNumber(".")} />
        </Row>
      </Content>
    </Container>
  );
};

export default App;
