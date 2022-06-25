import Timer from './components/Timer/Timer'
import Container from './components/Container/Container'
import Button from './components/Button/Button';


const App = () => {
  return (
    <Container>
      <Timer />
      <Button>Start</Button>
      <Button>Stop</Button>
      <Button>Reset</Button>
    </Container>
  );
};



export default App;
