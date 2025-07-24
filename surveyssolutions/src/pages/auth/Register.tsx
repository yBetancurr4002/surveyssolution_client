import { useState } from 'react';
import { register } from '../../services/authService';
import { useNavigate } from 'react-router-dom';

const Register = () => {
  const [formData, setFormData] = useState({
    first_name: '',
    last_name: '',
    email: '',
    password: '',
    password_confirmation: '',
    document_number: '',
    gender: '',
    birth_date: '',
    phone: '',
  });

  const navigate = useNavigate();

  const handleChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    setFormData({ ...formData, [e.target.name]: e.target.value });
  };

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    await register(formData);
    alert('Usuario registrado exitosamente');
    navigate('/login');
  };

  return (
    <div className="container mt-4">
      <h2>Registro de Usuario</h2>
      <form onSubmit={handleSubmit}>
        <div className="row">
          <div className="col-md-6 mb-3">
            <input type="text" name="first_name" className="form-control" placeholder="Nombre" onChange={handleChange} required />
          </div>
          <div className="col-md-6 mb-3">
            <input type="text" name="last_name" className="form-control" placeholder="Apellido" onChange={handleChange} required />
          </div>
          <div className="col-md-6 mb-3">
            <input type="email" name="email" className="form-control" placeholder="Correo electrónico" onChange={handleChange} required />
          </div>
          <div className="col-md-6 mb-3">
            <input type="text" name="document_number" className="form-control" placeholder="Documento" onChange={handleChange} required />
          </div>
          <div className="col-md-6 mb-3">
            <input type="text" name="gender" className="form-control" placeholder="Género" onChange={handleChange} required />
          </div>
          <div className="col-md-6 mb-3">
            <input type="date" name="birth_date" className="form-control" onChange={handleChange} />
          </div>
          <div className="col-md-6 mb-3">
            <input type="text" name="phone" className="form-control" placeholder="Teléfono" onChange={handleChange} />
          </div>
          <div className="col-md-6 mb-3">
            <input type="password" name="password" className="form-control" placeholder="Contraseña" onChange={handleChange} required />
          </div>
          <div className="col-md-6 mb-3">
            <input type="password" name="password_confirmation" className="form-control" placeholder="Confirmar contraseña" onChange={handleChange} required />
          </div>
        </div>
        <button className="btn btn-primary">Registrarse</button>
      </form>
    </div>
  );
};

export default Register;
