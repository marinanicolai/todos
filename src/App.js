import { useReducer, useRef } from "react";
import { formReducer, INITIAL_STATE } from "./formReducer";
import "./App.css";

function App() {
  const [state, dispatch] = useReducer(formReducer, INITIAL_STATE);
  const rankRef = useRef();

  const handleChange = (e) => {
    dispatch({
      type: "ADD_TASK",
      payload: { name: e.target.name, value: e.target.value },
    });
  };

  const handleRank = () => {
    const ranks = rankRef.current.value.split(",");
    ranks.forEach((rank) => {
      dispatch({ type: "ADD_RANK", payload: rank });
    });
  };

  console.log(state);

  return (
    <div className="App">
      <h3>To do app</h3>
      <form>
        <input name="task" placeholder="task" onChange={handleChange} />
        <p>Importance</p>
        <textarea
          ref={rankRef}
          placeholder="add the importnace of the task"
          name="ranks"
        ></textarea>
        <button onClick={handleRank} type="button">
          Add the priority
        </button>
        <div className="ranks">
          {state.ranks.map((rank) => (
            <small
              onClick={() => dispatch({ type: "REMOVE_RANK", payload: rank })}
              key={rank}
            >
              {rank}
            </small>
          ))}
        </div>

        <p>Complete:</p>
        <select name="complete">
          <option value="complete">Complete</option>
          <option value="partly">Partly</option>
          <option value="blocked">Blocked</option>
        </select>
      </form>
    </div>
  );
}

export default App;
