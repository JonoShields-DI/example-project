import './App.css';

function App() {
  const get_example = async() => {
    const response = await fetch('http://localhost:5001/',
      {
        headers: {
          'Accept': 'application/json',
          'Content-Type': 'application/json'
        },
        method: "GET"
      }
    )
    console.log(await response.json());
  }

  return (
    <button onClick={get_example}>GET</button>
  );
}

export default App;
