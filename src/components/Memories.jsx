export default function Memories({ onNext }) {
    return (
      <div className="page">
        <h2>Our Favorite Moments 💕</h2>
        <p>From laughs to late-night talks… every moment with you is home.</p>
  
        {/* You can add images here */}
        {/* <img src="/us1.jpg" /> */}
  
        <button onClick={onNext}>One last thing 💫</button>
      </div>
    );
  }
  