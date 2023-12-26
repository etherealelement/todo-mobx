import './App.css';
import { TodoList } from './components/TodoList/TodoList';
import styled from 'styled-components';

const AppWrapper = styled.div`
  width: 100%;
  min-height: 100vh;
  display: flex;
  justify-content: center;
  align-items: center;
`;

function App() {
  return (
    <AppWrapper>
      <TodoList></TodoList>
    </AppWrapper>
  );
}

export default App;
