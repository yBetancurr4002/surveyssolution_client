// src/pages/surveys/SurveyForm.tsx
import { useState, useEffect } from 'react';
import { useNavigate, useParams } from 'react-router-dom';
import surveyService from '../../services/surveyService';
import { useAuth } from '../../contexts/AuthContext';
import axios from 'axios';

const SurveyForm = () => {
  const [title, setTitle] = useState('');
  const [surveyTypeId, setSurveyTypeId] = useState('');
  const [statusId, setStatusId] = useState('1');
  const [startedAt, setStartedAt] = useState('');
  const navigate = useNavigate();
  const { id } = useParams();
  const { user } = useAuth();

  useEffect(() => {
    if (id) {
      surveyService.getOne(parseInt(id)).then((data) => {
        setTitle(data.title);
        setSurveyTypeId(data.survey_type_id.toString());
        setStatusId(data.survey_status_id.toString());
        setStartedAt(data.started_at || '');
      });
    }
  }, [id]);

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();

    const payload = {
      title,
      survey_type_id: parseInt(surveyTypeId),
      survey_status_id: parseInt(statusId),
      user_id: user?.id || 1,
      started_at: startedAt || new Date().toISOString().slice(0, 19).replace('T', ' '),
    };

    try {
      if (id) {
        await surveyService.updateSurvey(parseInt(id), payload);
      } else {
        await surveyService.createSurvey(payload);
      }

      navigate('/dashboard');
    } catch (error) {
      if (axios.isAxiosError(error) && error.response?.status === 422) {
        console.error('Errores de validación:', error.response.data.errors);
        alert('Error de validación. Revisa los campos.');
      } else {
        console.error('Error al guardar encuesta:', error);
        alert('Error inesperado al guardar la encuesta.');
      }
    }
  };

  return (
    <div className="container mt-4">
      <h2>{id ? 'Editar Encuesta' : 'Crear Encuesta'}</h2>
      <form onSubmit={handleSubmit}>
        <div className="mb-3">
          <label>Título</label>
          <input
            className="form-control"
            value={title}
            onChange={(e) => setTitle(e.target.value)}
            required
          />
        </div>

        <div className="mb-3">
          <label>Tipo de Encuesta (ID)</label>
          <input
            className="form-control"
            value={surveyTypeId}
            onChange={(e) => setSurveyTypeId(e.target.value)}
            required
          />
        </div>

        <div className="mb-3">
          <label>Estado (ID)</label>
          <input
            className="form-control"
            value={statusId}
            onChange={(e) => setStatusId(e.target.value)}
            required
          />
        </div>

        <div className="mb-3">
          <label>Fecha de inicio</label>
          <input
            type="date"
            className="form-control"
            value={startedAt}
            onChange={(e) => setStartedAt(e.target.value)}
          />
        </div>


        <button className="btn btn-primary">{id ? 'Actualizar' : 'Crear'}</button>
      </form>
    </div>
  );
};

export default SurveyForm;
