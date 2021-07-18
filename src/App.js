import { useState, Fragment } from "react";

import DragAndDropList from "./Components/DragAndDropList";
import Header from "./Components/Layout/Header";
import Menu from './Components/Layout/Menu';

function App() {
  const [ menuShown, setMenuShown ] = useState(false);

  const showMenuHandler = () => {
    setMenuShown(true);
  };

  const hideMenuHandler = () => {
    setMenuShown(false);
  };

  return (
    <Fragment>
      <Header onShowMenu={showMenuHandler}/>
      {menuShown && <Menu onHideMenu={hideMenuHandler} />}
      <h1>Simple Drag and Drop List </h1>

      <DragAndDropList />
    </Fragment>
  );
}

export default App;
