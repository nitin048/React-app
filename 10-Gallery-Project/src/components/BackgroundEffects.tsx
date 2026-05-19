// Generate stable random values outside component (only once when module loads)
const STAR_POSITIONS = [...Array(100)].map(() => ({
  size: ['star-small', 'star-medium', 'star-large'][
    Math.floor(Math.random() * 3)
  ],
  top: Math.random() * 100,
  left: Math.random() * 100,
  delay: Math.random() * 3,
}))

export const BackgroundEffects = () => {
  return (
    <>
      {/* Milky Way Background */}
      <div className="milky-way"></div>

      {/* Nebula Clouds */}
      <div className="nebula nebula-1"></div>
      <div className="nebula nebula-2"></div>
      <div className="nebula nebula-3"></div>

      {/* Stars Layer */}
      <div className="stars">
        {STAR_POSITIONS.map((star, i) => (
          <div
            key={`star-${i}`}
            className={`star ${star.size}`}
            style={{
              top: `${star.top}%`,
              left: `${star.left}%`,
              animationDelay: `${star.delay}s`,
            }}
          ></div>
        ))}
      </div>

      {/* Bokeh Effect Circles */}
      <div className="bokeh bokeh-1"></div>
      <div className="bokeh bokeh-2"></div>
      <div className="bokeh bokeh-3"></div>
      <div className="bokeh bokeh-4"></div>
      <div className="bokeh bokeh-5"></div>
      <div className="bokeh bokeh-6"></div>
      <div className="bokeh bokeh-7"></div>
      <div className="bokeh bokeh-8"></div>
      <div className="bokeh bokeh-9"></div>
      <div className="bokeh bokeh-10"></div>
      <div className="bokeh bokeh-11"></div>
      <div className="bokeh bokeh-12"></div>
    </>
  )
}
