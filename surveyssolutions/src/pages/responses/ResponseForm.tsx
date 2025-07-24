import { useState, useEffect } from 'react';
import { useParams } from 'react-router-dom';
import responseService from '../../services/surveyService';
import surveyService from '../../services/surveyService';

const ResponseForm = () => {
  const { id } = useParams();
  const [questions, setQuestions] = useState([]);
  const [answers, setAnswers] = useState<{ [key: number]: string }>({});

  useEffect(() => {
    if (id) {
      surveyService.getOne(Number(id)).then((survey) => {
        setQuestions(survey.questions || []);
      }).catch((err) => {
        console.error('Error al obtener encuesta:', err);
      });
    }
  }, [id]);

  const handleChange = (questionId: number, value: string) => {
    setAnswers((prev) => ({ ...prev, [questionId]: value }));
  };

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    const payload = {
      responses: Object.entries(answers).map(([questionId, value]) => ({
        question_id: Number(questionId),
        response_value: value,
      })),
    };

    try {
      await responseService.submitResponses(Number(id), payload);
      alert('Respuestas enviadas con éxito');
    } catch (err) {
      console.error('Error al enviar respuestas:', err);
      alert('Error al enviar las respuestas. Inténtalo de nuevo.');
    }
  };

  return (
    <div className="container mt-4">
      <h2>Responder Encuesta</h2>
      <form onSubmit={handleSubmit}>
        {questions.map((q: any) => (
          <div key={q.id} className="mb-3">
            <label>{q.question_text}</label>
            <input
              className="form-control"
              type="text"
              value={answers[q.id] || ''}
              onChange={(e) => handleChange(q.id, e.target.value)}
              required={q.is_required}
            />
          </div>
        ))}
        <button type="submit" className="btn btn-success">Enviar respuestas</button>
      </form>
    </div>
  );
};

export default ResponseForm;
