import surveyApi from './surveyApi';

export const login = async (credentials: {
  email: string;
  password: string;
}) => {
  const response = await surveyApi.post('/login', credentials);
  return response.data;
};

// eslint-disable-next-line @typescript-eslint/no-explicit-any
export const register = async (data: any) => {
  const response = await surveyApi.post('/register', data);
  return response.data;
};

export const logout = async () => {
  const response = await surveyApi.post('/logout');
  return response.data;
};
