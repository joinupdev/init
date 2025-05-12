import Background from './components/background';

// Card component for reuse
const Card = ({ position, rotation, title, className }) => {
  return (
    <div
      className={`absolute opacity-20 select-none flex flex-col p-2 gap-1.5 ${className}`}
      style={{
        ...position,
        transform: `rotate(${rotation}deg)`,
        width: '145px',
        height: '170px',
        borderRadius: '12px',
        border: '0.74px solid black'
      }}
    >
      <div
        style={{
          borderRadius: '9px',
          border: '0.74px solid black'
        }}
        className="w-full h-full"
      ></div>
      <span
        style={{
          fontWeight: 600,
          fontSize: '14.8px',
          marginLeft: '1px'
        }}
      >
        {title}
      </span>
    </div>
  );
};

function App() {
  // Card configuration data
  const cards = [
    {
      title: 'Meetup',
      position: { top: '81px', left: '159px' },
      rotation: 15,
      phone: true
    },
    {
      title: 'Hackathons',
      position: { top: '102px', right: '230px' },
      rotation: -15,
      phone: false
    },
    {
      title: 'Workshop',
      position: { bottom: '164px', right: '99px' },
      rotation: 15,
      phone: false
    },
    {
      title: 'Conference',
      position: { bottom: '51px', left: '123px' },
      rotation: -15,
      phone: true
    }
  ];

  return (
    <Background>
      <div className="relative flex flex-col items-center justify-center min-h-screen overflow-hidden">
        {/* Main content */}
        <div className="z-10 text-center px-4">
          <h1 className="text-[42px] md:text-[64px] font-semibold">Coming Soon...</h1>
          <p className="text-sm md:text-[20px] font-medium max-w-xl mt-3">
            No more WhatsApp groups or social media searches
            <br />
            Discover professional events in one place.
          </p>
        </div>

        {/* Render all cards using the Card component */}
        {cards.map((card, index) => (
          <Card
            key={index}
            title={card.title}
            position={card.position}
            rotation={card.rotation}
            className={card.phone ? 'flex' : 'hidden md:flex'}
          />
        ))}
      </div>
    </Background>
  );
}

export default App;
