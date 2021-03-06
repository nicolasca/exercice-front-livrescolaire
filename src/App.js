import "./App.css";
import Layout from "./components/layout/Layout";
import VirtualClass from "./components/room/VirtualClass";

function App() {
  return (
    <div className="App">
      <Layout>
        <VirtualClass />
      </Layout>
    </div>
  );
}

export default App;
