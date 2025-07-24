import { createContext, useContext, useState, useEffect } from 'react';
import survey from '../services/surveyApi';

interface AuthContextType {
  user: any;
  token: string | null;
  login: (data: { email: string; password: string }) => Promise<void>;
  logout: () => void;
}

const AuthContext = createContext<AuthContextType>({} as AuthContextType);

export const AuthProvider = ({ children }: { children: React.ReactNode }) => {
  const [user, setUser] = useState(null);
  const [token, setToken] = useState<string | null>(localStorage.getItem('token'));

  useEffect(() => {
    if (token) {
      // ✅ Inyectar token a Axios por defecto
      survey.defaults.headers.common['Authorization'] = `Bearer ${token}`;

      // 🔎 Cargar el usuario autenticado desde el endpoint
      survey.get('/auth/me')
        .then(res => {
          console.log('Usuario autenticado cargado:', res.data);
          setUser(res.data);
        })
        .catch(err => {
          console.warn('Error al obtener usuario autenticado:', err);
          logout();
        });
    }
  }, [token]);

  const login = async (data: { email: string; password: string }) => {
    const res = await survey.post('/login', data);
    const authToken = res.data.token;

    setToken(authToken);
    localStorage.setItem('token', authToken);

    // ✅ Establecer el token para futuras peticiones
    survey.defaults.headers.common['Authorization'] = `Bearer ${authToken}`;

    // 🔁 Obtener el usuario actual tras login
    const userRes = await survey.get('/auth/me');
    setUser(userRes.data);

    console.log('Login exitoso, usuario cargado:', userRes.data);
  };

  const logout = () => {
    setUser(null);
    setToken(null);
    localStorage.removeItem('token');
    delete survey.defaults.headers.common['Authorization'];
  };

  return (
    <AuthContext.Provider value={{ user, token, login, logout }}>
      {children}
    </AuthContext.Provider>
  );
};

export const useAuth = () => useContext(AuthContext);
