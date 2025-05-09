import Background from "./components/background";

function App() {
  return (
    <Background>
      <div className="relative flex flex-col items-center justify-center min-h-screen overflow-hidden">
        {/* Main content */}
        <div className="z-10 text-center px-4">
          <h1 className="text-5xl md:text-6xl font-semibold mb-6">
            Coming Soon...
          </h1>
          <p className="text-lg md:text-xl font-medium max-w-xl mb-12 leading-relaxed">
            No more WhatsApp groups or social media searches
            <br />
            Discover professional events in one place.
          </p>
        </div>

        {/* Meetup Card - Top Left */}
        <div
          className="absolute opacity-20"
          style={{
            top: "51px",
            left: "230px",
            transform: "rotate(15deg)",
            width: "145px",
            height: "170px",
            borderRadius: "12px",
            border: "0.74px solid black",
          }}
        >
          <div
            style={{
              position: "absolute",
              top: "10px",
              left: "10px",
              width: "125px",
              height: "125px",
              borderRadius: "9px",
              border: "0.74px solid black",
            }}
          ></div>
          <span
            style={{
              position: "absolute",
              bottom: "10px",
              left: "20px",
              fontWeight: 600,
              fontSize: "14.8px",
            }}
          >
            Meetup
          </span>
        </div>

        {/* Hackathons Card - Top Right */}
        <div
          className="absolute opacity-20"
          style={{
            top: "102px",
            right: "230px",
            transform: "rotate(-15deg)",
            width: "145px",
            height: "170px",
            borderRadius: "12px",
            border: "0.74px solid black",
          }}
        >
          <div
            style={{
              position: "absolute",
              top: "10px",
              left: "10px",
              width: "125px",
              height: "125px",
              borderRadius: "9px",
              border: "0.74px solid black",
            }}
          ></div>
          <span
            style={{
              position: "absolute",
              bottom: "10px",
              left: "20px",
              fontWeight: 600,
              fontSize: "14.8px",
            }}
          >
            Hackathons
          </span>
        </div>

        {/* Workshop Card - Bottom Right */}
        <div
          className="absolute opacity-20"
          style={{
            bottom: "114px",
            right: "30px",
            transform: "rotate(15deg)",
            width: "145px",
            height: "170px",
            borderRadius: "12px",
            border: "0.74px solid black",
          }}
        >
          <div
            style={{
              position: "absolute",
              top: "10px",
              left: "10px",
              width: "125px",
              height: "125px",
              borderRadius: "9px",
              border: "0.74px solid black",
            }}
          ></div>
          <span
            style={{
              position: "absolute",
              bottom: "10px",
              left: "20px",
              fontWeight: 600,
              fontSize: "14.8px",
            }}
          >
            Workshop
          </span>
        </div>

        {/* Conference Card - Bottom Left */}
        <div
          className="absolute opacity-20"
          style={{
            bottom: "16px",
            left: "63px",
            transform: "rotate(-15deg)",
            width: "145px",
            height: "170px",
            borderRadius: "12px",
            border: "0.74px solid black",
          }}
        >
          <div
            style={{
              position: "absolute",
              top: "10px",
              left: "10px",
              width: "125px",
              height: "125px",
              borderRadius: "9px",
              border: "0.74px solid black",
            }}
          ></div>
          <span
            style={{
              position: "absolute",
              bottom: "10px",
              left: "20px",
              fontWeight: 600,
              fontSize: "14.8px",
            }}
          >
            Conference
          </span>
        </div>
      </div>
    </Background>
  );
}

export default App;
