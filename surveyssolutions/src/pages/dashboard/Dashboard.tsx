import { Link } from 'react-router-dom';

const Dashboard = () => {
  return (
    <div className="container mt-4">
      <h2>Bienvenido al Panel de Encuestas</h2>
      <div className="row mt-4">
        <div className="col-md-4">
          <div className="card p-3">
            <h5>Encuestas</h5>
            <Link to="/surveys" className="btn btn-outline-primary mt-2">Ver Encuestas</Link>
          </div>
        </div>
        <div className="col-md-4">
          <div className="card p-3">
            <h5>Preguntas</h5>
            <Link to="/questions" className="btn btn-outline-primary mt-2">Gestionar Preguntas</Link>
          </div>
        </div>
        <div className="col-md-4">
          <div className="card p-3">
            <h5>Respuestas</h5>
            <Link to="/responses" className="btn btn-outline-primary mt-2">Responder Encuestas</Link>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Dashboard;
