const ParallaxQuote: React.FC = () => {
  return (
    <div
      className="parallax-quote-bg flex flex-col lg:flex-row h-screen overflow-hidden"
      style={{
        backgroundColor: "var(--color-softWhite)",
      }}
    >
      {/* Text side */}
      <div className="w-full lg:w-1/2 flex items-center justify-center bg-transparent p-8">
        <blockquote className="text-center">
          <p className="text-2xl lg:text-4xl font-light leading-relaxed">
            “I always get to where I’m going by walking away from where I have
            been.”
          </p>
          <footer className="mt-4 text-gray-500 text-sm">
            — Winnie the Pooh, A.A. Milne
          </footer>
        </blockquote>
      </div>

      {/* Parallax image side */}
      <div
        className="
          w-full lg:w-1/2 relative 
          bg-fixed bg-center bg-cover
        "
        style={{
          backgroundImage: `url('/parallax.jpg')`,
          minHeight: "100vh",
        }}
      />
    </div>
  );
};

export default ParallaxQuote;
