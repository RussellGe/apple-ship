import React from 'react';
// import Button, {ButtonType, ButtonSize} from './components/Button/button' 
import Menu from './components/Menu/menu';
import MenuItem from './components/Menu/menuItem';
function App() {
  return (
    <div className="App">
      {/* <header className="App-header">
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
      </header> */}
      <Menu defaultIndex={1} onSelect={(index) => console.log(index)}>
        <MenuItem index={0}>
          123
        </MenuItem>
        <MenuItem disabled index={1}>
          12312312
        </MenuItem> 
        <MenuItem index={2}>
          12312312
        </MenuItem> 
      </Menu>
    </div>
  );
}

export default App;
