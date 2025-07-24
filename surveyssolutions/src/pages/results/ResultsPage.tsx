import { useEffect, useState } from 'react';
import { useParams } from 'react-router-dom';
import surveyService from '../../services/surveyService';

const ResultsPage = () => {
  const { id } = useParams();
  const [results, setResults] = useState<any[]>([]);
  const [title, setTitle] = useState('');

  useEffect(() => {
    if (id) {
      surveyService.getResults(Number(id))
        .then((data) => {
          setTitle(data.title);
          setResults(data.results);
        })
        .catch((err) => {
          console.error('Error al obtener resultados:', err);
        });
    }
  }, [id]);

  return (
    <div className="container mt-4">
      <h2>Resultados de la Encuesta: {title}</h2>
      {results.length === 0 ? (
        <p>No hay respuestas aún.</p>
      ) : (
        <table className="table table-bordered mt-3">
          <thead>
            <tr>
              <th>Pregunta</th>
              <th>Respuestas</th>
            </tr>
          </thead>
          <tbody>
            {results.map((item: any) => (
              <tr key={item.question_id}>
                <td>{item.question_text}</td>
                <td>
                  {item.answers.map((a: string, i: number) => (
                    <div key={i}>{a}</div>
                  ))}
                </td>
              </tr>
            ))}
          </tbody>
        </table>
      )}
    </div>
  );
};

export default ResultsPage;
