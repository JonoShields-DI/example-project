import './App.css';
const API_URL = process.env.REACT_APP_API_URL

function App() {
  const get_example = async() => {
    const response = await fetch(`${API_URL}/product`,
      {
        headers: {
          'Accept': 'application/json',
          'Content-Type': 'application/json'
        },
        method: 'GET',
      }
    )
    console.log(await response.json());
  }

  const post_example = async() => {
    const response = await fetch(`${API_URL}/product`,
      {
        headers: {
          'Accept': 'application/json',
          'Content-Type': 'application/json'
        },
        method: 'POST',
        body: JSON.stringify({ 'name' : 'product1', 'description': 'This is a description'})
      }
    )
    console.log(await response.json());
  }

  return (
    <>
      <h1>Test Application</h1>
      <button onClick={get_example}>GET</button>
      <button onClick={post_example}>POST</button>
    </>
  );
}

export default App;
