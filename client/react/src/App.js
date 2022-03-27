import './App.css';
import Title from './component/Title'
import Chat from './component/chat/Chat'

function App() {


  return getComponent()
}

function getComponent() {
  if(window.location.pathname == "/app") {
    return (
      <Chat />
    );
  }else {
    return (
      <Title />
    );
  }
}

export default App;
