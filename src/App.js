import { useState, Fragment } from "react";

import DragAndDropList from "./Components/DragAndDropList";
import Header from "./Components/Layout/Header";
import Menu from './Components/Layout/Menu';
import Card from './Components/UI/Card/Card';

// The list:
const TODOS = [
  {
    id: "1",
    name: "Feed the Boots",
    thumb: "/images/check.png",
  },
  {
    id: "2",
    name: "Feed the Boots more treats",
    thumb: "/images/star.png",
  },
  {
    id: "3",
    name: "Buy the Boots more toys",
    thumb: "/images/star.png",
  },
  {
    id: "4",
    name: "Stretch",
    thumb: "/images/check.png",
  },
  {
    id: "5",
    name: "Stretch some more",
    thumb: "/images/star.png",
  },
];

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
      <main>
        <Card>
          <DragAndDropList toDoList={TODOS}/>
        </Card>
      </main>      
    </Fragment>
  );
}

export default App;
