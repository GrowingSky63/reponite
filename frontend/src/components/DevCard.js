import './DevCard.css';

export default function DevCard({ developer }) {
  const { name, email, github, photo } = developer;

  return (
    <div className="col-dev-5 mb-4">
      <div className="card h-100 shadow-sm dev-card">
        <div className="card-body text-center d-flex flex-column">
          <div className="dev-photo-container mb-3">
            <img
              src={photo}
              alt={`${name} profile`}
              className="dev-photo rounded-circle"
              onError={(e) => {
                e.target.src = 'https://via.placeholder.com/80x80/6c757d/ffffff?text=Dev';
              }}
            />
          </div>
          
          <h5 className="card-title text-primary mb-2">{name}</h5>
          
          <p className="card-text text-muted mb-3">
            <i className="fas fa-envelope me-1"></i>
            <a href={`mailto:${email}`} className="text-decoration-none text-muted">
              {email}
            </a>
          </p>
          
          <div className="mt-auto">
            <a
              href={`https://github.com/${github}`}
              target="_blank"
              rel="noopener noreferrer"
              className="btn btn-dark btn-sm w-100"
            >
              <i className="fab fa-github me-1"></i>
              GitHub
            </a>
          </div>
        </div>
      </div>
    </div>
  );
}