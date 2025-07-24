import surveyApi from './surveyApi';

export const submitResponses = async (
  surveyId: number,
  // eslint-disable-next-line @typescript-eslint/no-explicit-any
  payload: any
) => {
  const response = await surveyApi.post(`/surveys/${surveyId}/responses`, payload);
  return response.data;
};
