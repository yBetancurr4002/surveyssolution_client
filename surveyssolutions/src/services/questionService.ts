import surveyApi from './surveyApi';

export const getQuestions = async () => {
  const response = await surveyApi.get('/questions');
  return response.data;
};

// eslint-disable-next-line @typescript-eslint/no-explicit-any
export const createQuestion = async (data: any) => {
  const response = await surveyApi.post('/questions', data);
  return response.data;
};

// eslint-disable-next-line @typescript-eslint/no-explicit-any
export const updateQuestion = async (id: number, data: any) => {
  const response = await surveyApi.put(`/questions/${id}`, data);
  return response.data;
};

export const deleteQuestion = async (id: number) => {
  const response = await surveyApi.delete(`/questions/${id}`);
  return response.data;
};
