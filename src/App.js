import './App.css';
import {useState} from 'react';
import {nanoid} from 'nanoid';

const App = () => {
  const [number, setNumber] = useState('');
  const [totPoints, setTotPoints] = useState(0);
  const [scorers, setScorers] = useState([
    {id: nanoid(4), number: 9, totPoints: 99},
    {id: nanoid(4), number: 1, totPoints: 11},
    {id: nanoid(4), number: 15, totPoints: 9},
  ]);

  const sortedScorers = [...scorers].sort((a, b) => a.number - b.number);
  const onePointScoredHandler = () => {
    const players = [...scorers];
    const existingScorer = players.find((player) => player.number === +number);

    if (existingScorer) {
      console.log('exist');
      existingScorer.totPoints = setTotPoints((prevState) => prevState + 1);
      setScorers(existingScorer);
    } else {
      console.log('new');
      const newScorer = {
        id: nanoid(4),
        number: +number,
        totPoints: totPoints + 1,
      };
      setScorers([...scorers, newScorer]);
      setTotPoints(totPoints);
    }
    setNumber('');
    console.log(scorers);
  };

  return (
    <div className="App">
      <h4>Individual points</h4>
      <br />
      <br />
      <br />
      <input
        type="number"
        value={number}
        onChange={(e) => setNumber(e.target.value)}
      />
      <br />
      <br />
      <button onClick={onePointScoredHandler}>Add 1p</button>
      <br />
      <br />
      <table className="table">
        <thead>
          <tr>
            <th>ID</th>
            <th>NUMBER</th>
            <th>Total Points</th>
          </tr>
        </thead>
        <tbody>
          {sortedScorers
            .sort((a, b) => a.number - b.number)
            .map((player) => (
              <tr key={player.id}>
                <td>{player.id}</td>
                <td>{player.number}</td>
                <td>{player.totPoints}</td>
              </tr>
            ))}
        </tbody>
      </table>
    </div>
  );
};

export default App;
