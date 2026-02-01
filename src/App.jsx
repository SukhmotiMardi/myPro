// import { useState } from 'react'
// import reactLogo from './assets/react.svg'
// import viteLogo from '/vite.svg'
// import './App.css'

// function App() {
//   const [count, setCount] = useState(0)

//   return (
//     <>
//       <div>
//         <a href="https://vite.dev" target="_blank">
//           <img src={viteLogo} className="logo" alt="Vite logo" />
//         </a>
//         <a href="https://react.dev" target="_blank">
//           <img src={reactLogo} className="logo react" alt="React logo" />
//         </a>
//       </div>
//       <h1>Vite + React</h1>
//       <div className="card">
//         <button onClick={() => setCount((count) => count + 1)}>
//           count is {count}
//         </button>
//         <p>
//           Edit <code>src/App.jsx</code> and save to test HMR
//         </p>
//       </div>
//       <p className="read-the-docs">
//         Click on the Vite and React logos to learn more
//       </p>
//     </>
//   )
// }

// export default App


import { useState } from "react";
import Landing from "./components/Landing";
import Memories from "./components/Memories";
import Proposal from "./components/Proposal";
import Celebration from "./components/Celebration";

function App() {
  const [step, setStep] = useState(1);

  return (
    <>
      {step === 1 && <Landing onNext={() => setStep(2)} />}
      {step === 2 && <Memories onNext={() => setStep(3)} />}
      {step === 3 && <Proposal onYes={() => setStep(4)} />}
      {step === 4 && <Celebration />}
    </>
  );
}

export default App;
