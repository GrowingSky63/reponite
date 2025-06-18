export default function Home() {
  return (
    <div className="container mt-5">
      <div className="row justify-content-center">
        <div className="col-lg-8">
          <div className="text-center mb-5">
            <h1 className="display-4 fw-bold text-primary">Welcome to the Home Page</h1>
            <p className="lead text-muted">This is the main section of our application.</p>
          </div>
          
          <div className="row g-4">
            <div className="col-md-4">
              <div className="card h-100 shadow-sm">
                <div className="card-body text-center">
                  <i className="bi bi-star-fill text-warning mb-3" style={{fontSize: '2rem'}}></i>
                  <h5 className="card-title">Feature 1</h5>
                  <p className="card-text">Description of your first feature.</p>
                </div>
              </div>
            </div>
            
            <div className="col-md-4">
              <div className="card h-100 shadow-sm">
                <div className="card-body text-center">
                  <i className="bi bi-lightning-fill text-primary mb-3" style={{fontSize: '2rem'}}></i>
                  <h5 className="card-title">Feature 2</h5>
                  <p className="card-text">Description of your second feature.</p>
                </div>
              </div>
            </div>
            
            <div className="col-md-4">
              <div className="card h-100 shadow-sm">
                <div className="card-body text-center">
                  <i className="bi bi-heart-fill text-danger mb-3" style={{fontSize: '2rem'}}></i>
                  <h5 className="card-title">Feature 3</h5>
                  <p className="card-text">Description of your third feature.</p>
                </div>
              </div>
            </div>
          </div>
          
          <div className="text-center mt-5">
            <button className="btn btn-primary btn-lg me-3">Get Started</button>
            <button className="btn btn-outline-secondary btn-lg">Learn More</button>
          </div>
        </div>
      </div>
    </div>
  );
}