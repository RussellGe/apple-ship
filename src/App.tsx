import React from 'react';
import Button, {ButtonType, ButtonSize} from './components/Button/button' 

function App() {
  return (
    <div className="App">
      <header className="App-header">
        <Button>Hello</Button>
        <Button disabled={true}>Hello</Button>
        <Button onClick={() => alert('success')} btnType={ButtonType.Primary} size={ButtonSize.Large}>Hello</Button>
        <Button btnType={ButtonType.Danger} size={ButtonSize.Small}>Hello</Button>
        <Button href='www.baidu.com' btnType={ButtonType.Link} disabled>Hello</Button>
        <Button href='www.baidu.com' btnType={ButtonType.Link}>Baidu Link</Button>
        <p>
          Edit <code>src/App.tsx</code> and save to reload.
        </p>
        <a
          className="App-link"
          href="https://reactjs.org"
          target="_blank"
          rel="noopener noreferrer"
        >
          Learn React
        </a>
      </header>
    </div>
  );
}

export default App;
