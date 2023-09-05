export const App = () => {
  return (
    <div>
      <h1>Please leave feedback</h1>
      <div>
        <button>Good</button>
        <button>Neutral</button>
        <button>Bad</button>
      </div>
      <h2>Statistics</h2>
      <ul>
        <li>
          <p>Good:</p>
          <span>0</span>
        </li>
        <li>
          <p>Neutral:</p>
          <span>0</span>
        </li>
        <li>
          <p>Bad:</p>
          <span>0</span>
        </li>
        <li>
          <p>Total:</p>
          <span>0</span>
        </li>
        <li>
          <p>Positive feedback:</p>
          <span>%</span>
        </li>
      </ul>
    </div>
  );
};
