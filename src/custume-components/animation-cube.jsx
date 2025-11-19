// components/HoverCubes.jsx
export default function HoverCubes() {
  const columns = [
    { x: -1, y: 0 },
    { x: 0, y: 0 },
    { x: 1, y: 0 },
  ];
  const layers = [3, 2, 1];
  const cubes = [1, 2, 3];

  return (
    <div className="nx-cube-wrapper">
      <div className="nx-cube-container">
        {cubes.map((cube, ci) => (
          <div key={ci} className={`nx-cube-item nx-cube-item-${ci + 1}`}>
            {columns.map((pos, pi) => (
              <div
                key={pi}
                className="nx-cube-column"
                style={{ "--x": pos.x, "--y": pos.y }}
              >
                {layers.map((i) => (
                  <span
                    key={i}
                    style={{ "--i": i }}
                    className="nx-cube-box"
                  ></span>
                ))}
              </div>
            ))}
          </div>
        ))}
      </div>
    </div>
  );
}
