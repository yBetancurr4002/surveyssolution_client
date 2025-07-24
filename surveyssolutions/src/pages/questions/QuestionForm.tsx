import { useState } from 'react';
import { createQuestion } from '../../services/questionService';

const QuestionForm = () => {
  const [surveyTypeId, setSurveyTypeId] = useState('');
  const [questionText, setQuestionText] = useState('');
  const [questionTypeId, setQuestionTypeId] = useState('');
  const [options, setOptions] = useState('');
  const [isRequired, setIsRequired] = useState(true);

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();

    const payload = {
      survey_type_id: parseInt(surveyTypeId),
      question_text: questionText,
      question_type_id: parseInt(questionTypeId),
      options: options.split(',').map(opt => opt.trim()),
      is_required: isRequired,
    };

    await createQuestion(payload);
    alert('Pregunta creada');
  };

  return (
    <div className="container mt-4">
      <h2>Crear Pregunta</h2>
      <form onSubmit={handleSubmit}>
        <div className="mb-3">
          <label>ID Tipo de Encuesta</label>
          <input className="form-control" value={surveyTypeId} onChange={(e) => setSurveyTypeId(e.target.value)} required />
        </div>
        <div className="mb-3">
          <label>Texto de la Pregunta</label>
          <input className="form-control" value={questionText} onChange={(e) => setQuestionText(e.target.value)} required />
        </div>
        <div className="mb-3">
          <label>ID Tipo de Pregunta</label>
          <input className="form-control" value={questionTypeId} onChange={(e) => setQuestionTypeId(e.target.value)} required />
        </div>
        <div className="mb-3">
          <label>Opciones (separadas por coma)</label>
          <input className="form-control" value={options} onChange={(e) => setOptions(e.target.value)} />
        </div>
        <div className="form-check mb-3">
          <input className="form-check-input" type="checkbox" checked={isRequired} onChange={(e) => setIsRequired(e.target.checked)} />
          <label className="form-check-label">¿Es obligatoria?</label>
        </div>
        <button className="btn btn-primary">Guardar</button>
      </form>
    </div>
  );
};

export default QuestionForm;
