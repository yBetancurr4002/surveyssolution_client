import surveyApi from './surveyApi';

export const getSurveyResults = async (surveyId: number) => {
  const response = await surveyApi.get(`/surveys/${surveyId}/results`);
  return response.data;
};
