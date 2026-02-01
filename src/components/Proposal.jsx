export default function Proposal({ onYes }) {
    return (
      <div className="page">
        <h1>Will you be my forever? 💍❤️</h1>
        <div className="buttons">
          <button onClick={onYes}>YES 💖</button>
          <button onClick={onYes}>Of course YES 🥹</button>
        </div>
      </div>
    );
  }
  