
import { StackNavigator } from "react-navigation";

import Home from "./components/Home"; 


const App = StackNavigator(
  {
    Home: {
      screen: Home
    },
  /*  AddTodo: {
      screen: AddTodo
    }*/
  },
  { 
    initialRouteName: "Home",
    mode: "modal"
  }
);
export default App;
