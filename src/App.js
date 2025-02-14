
import Input from './components/Input';
import Button from './components/Button';

import { Container, Content, Row } from './styles';
import { useState } from 'react';

const App = () => {
  const [currentNumber, setCurrentNumber] = useState('0');
  const [firstNumber, setFirstNumber] = useState('0');
  const [operation, setOperation] = useState('');

  const handleOnClear = () => {
    setCurrentNumber('0');
    setFirstNumber('0');
  }
  const handeAddNumber = (number) => {
    setCurrentNumber(prev => `${prev === '0' ? '' : prev}${number}`)
  }

  const handleSumNumbers = () => {
    if(firstNumber === '0') {
      setFirstNumber(currentNumber);
      setCurrentNumber('0');
      setOperation('+');
    } else {
      const sum = Number(firstNumber) + Number(currentNumber);
      setCurrentNumber(String(sum));
      setOperation('');
    }
  }
  
  const handleSubNumbers = () => {
    if(firstNumber === '0') {
      setFirstNumber(currentNumber);
      setCurrentNumber('0');
      setOperation('-');
    } else {
      const Sub = Number(firstNumber) - Number(currentNumber);
      setCurrentNumber(String(Sub));
      setOperation('');
    }
  }

  const handleMultNumbers = () => {
    if(firstNumber === '0') {
      setFirstNumber(currentNumber);
      setCurrentNumber('0');
      setOperation('*');
    } else {
      const Mult = Number(firstNumber) * Number(currentNumber);
      setCurrentNumber(String(Mult));
      setOperation('');
    }
  }
  
  const handleDivNumbers = () => {
    if(firstNumber === '0') {
      setFirstNumber(currentNumber);
      setCurrentNumber('0');
      setOperation('/');
    } else {
      const Div = Number(firstNumber) / Number(currentNumber);
      setCurrentNumber(String(Div));
      setOperation('');
    }
  }

  const handleEquals = () => {
    if (firstNumber !== '0' && operation !== '' && currentNumber !== '0') {
      switch (operation) {
        case '+':
          handleSumNumbers();
          break;
        case '-':
          handleSubNumbers();
          break;
        case '*':
          handleMultNumbers();
          break;
        case '/':
          handleDivNumbers();
          break;
            
      
        default:
          break;
      }
    }
  }

  return (
    <Container>
      <Content>
        <Input value={currentNumber}/>
          <Row>
            <Button label="(" onClick={() => handeAddNumber('(')}/>
            <Button label=")" onClick={() => handeAddNumber(')')}/>
            <Button label="%" onClick={() => handeAddNumber('%')}/>
            <Button label="C" onClick={handleOnClear}/>
          </Row>
          <Row>
            <Button label="7" onClick={() => handeAddNumber('7')}/>
            <Button label="8" onClick={() => handeAddNumber('8')}/>
            <Button label="9" onClick={() => handeAddNumber('9')}/>
            <Button label="÷" onClick={handleDivNumbers}/>
          </Row>
          <Row>
            <Button label="4" onClick={() => handeAddNumber('4')}/>
            <Button label="5" onClick={() => handeAddNumber('5')}/>
            <Button label="6" onClick={() => handeAddNumber('6')}/>
            <Button label="×" onClick={handleMultNumbers}/>
          </Row>
          <Row>
            <Button label="1" onClick={() => handeAddNumber('1')}/>
            <Button label="2" onClick={() => handeAddNumber('2')}/>
            <Button label="3" onClick={() => handeAddNumber('3')}/>
            <Button label="-" onClick={handleSubNumbers}/>
          </Row>
          <Row>
            <Button label="0" onClick={() => handeAddNumber('0')}/>
            <Button label="." onClick={() => handeAddNumber('.')}/>
            <Button label="=" onClick={handleEquals}/>
            <Button label="+" onClick={handleSumNumbers}/>
          </Row>
      </Content>
    </Container>
  );
}

export default App;
