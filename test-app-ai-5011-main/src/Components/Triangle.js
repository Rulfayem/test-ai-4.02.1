import { useState } from "react";

export default function Triangle() {
  const [base, setBase] = useState("");
  const [height, setHeight] = useState("");
  const [area, setArea] = useState(null);
  const [error, setError] = useState("");

  const calculateArea = () => {
    const b = parseFloat(base);
    const h = parseFloat(height);

    if (isNaN(b) || isNaN(h)) {
      setError("Please enter valid numbers for both Base and Height.");
      setArea(null);
      return;
    }
    if (b <= 0 || h <= 0) {
      setError("Base and Height must be greater than zero.");
      setArea(null);
      return;
    }

    setError("");
    setArea((0.5 * b * h).toFixed(2));
  };

  return (
    <div className="container mt-5" style={{ maxWidth: "480px" }}>
      <div className="card shadow-sm">
        <div className="card-body p-4">
          <h4 className="card-title text-center fw-bold mb-4">
            Triangle Area Solver
          </h4>

          <div className="mb-3">
            <label htmlFor="base" className="form-label fw-bold">
              Base:
            </label>
            <input
              id="base"
              type="number"
              className="form-control"
              placeholder="Enter base"
              value={base}
              onChange={(e) => setBase(e.target.value)}
            />
          </div>

          <div className="mb-3">
            <label htmlFor="height" className="form-label fw-bold">
              Height:
            </label>
            <input
              id="height"
              type="number"
              className="form-control"
              placeholder="Enter height"
              value={height}
              onChange={(e) => setHeight(e.target.value)}
            />
          </div>

          <div className="d-grid mb-3">
            <button
              className="btn btn-primary fw-bold"
              onClick={calculateArea}
            >
              Calculate Area
            </button>
          </div>

          {error && (
            <div className="alert alert-danger py-2" role="alert">
              {error}
            </div>
          )}

          <div>
            <span className="fw-bold">Results: </span>
            {area !== null && !error && (
              <span>
                Area = <strong>{area}</strong> square units
              </span>
            )}
          </div>
        </div>
      </div>
    </div>
  );
}