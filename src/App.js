import Counter from "./Component/Counter";
import ToDoList from "./Component/ToDoList";
import Toggle from "./Component/Toggle";
import "./styles.css";

export default function App() {
  return (
    <div className="App">
      <ToDoList />
      <Counter />
      <Toggle />
    </div>
  );
}
