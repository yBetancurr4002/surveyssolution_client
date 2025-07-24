import { Routes, Route, Navigate } from 'react-router-dom';
import Login from './pages/auth/Login';
import Register from './pages/auth/Register';
import Dashboard from './pages/dashboard/Dashboard';
import SurveysPage from './pages/surveys/SurveyForm';
import QuestionForm from './pages/questions/QuestionForm';
import ResponsesPage from './pages/responses/ResponseForm';
import ResultsPage from './pages/results/ResultsPage';
import ProtectedRoute from './routes/ProtectedRoute';

const AppRoutes = () => {
  return (
    <Routes>
      {/* Rutas públicas */}
      <Route path="/login" element={<Login />} />
      <Route path="/register" element={<Register />} />

      {/* Rutas protegidas */}
      <Route
        path="/"
        element={
          <ProtectedRoute>
            <Dashboard />
          </ProtectedRoute>
        }
      />
      <Route
        path="/dashboard"
        element={
          <ProtectedRoute>
            <Dashboard />
          </ProtectedRoute>
        }
      />
      <Route
        path="/surveys"
        element={
          <ProtectedRoute>
            <SurveysPage />
          </ProtectedRoute>
        }
      />
      <Route
        path="/questions"
        element={
          <ProtectedRoute>
            <QuestionForm />
          </ProtectedRoute>
        }
      />
      <Route
        path="/responses"
        element={
          <ProtectedRoute>
            <ResponsesPage />
          </ProtectedRoute>
        }
      />
      <Route
        path="/results/:id"
        element={
          <ProtectedRoute>
            <ResultsPage />
          </ProtectedRoute>
        }
      />

      {/* Redirección en caso de ruta no encontrada */}
      <Route path="*" element={<Navigate to="/login" replace />} />
    </Routes>
  );
};

export default AppRoutes;
