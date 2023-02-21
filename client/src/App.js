import './App.css';

function App() {
  const get_example = async() => {
    const response = await fetch('http://localhost:5001/product',
      {
        headers: {
          'Accept': 'application/json',
          'Content-Type': 'application/json'
        },
        method: "POST",
        body: JSON.stringify({ 'name' : 'product1', 'description': 'This is a description'})
      }
    )
    console.log(await response.json());
  }

  return (
    <button onClick={get_example}>GET</button>
  );
}

export default App;
