import { useState } from 'react';
import './App.css';
import Layout from './Components/Layout/Layout';
import {UserContext} from "./Context/UserContext";

function App() {
  const [user, setUser] = useState(false);
  return (
    <>
      <UserContext.Provider value={{ user, setUser }}>
        <Layout />
      </UserContext.Provider>
    </>
  );
}

export default App;