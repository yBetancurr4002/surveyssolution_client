import surveyApi from './surveyApi';

export interface SurveyPayload {
  title: string;
  description?: string;
  survey_type_id: number;
  survey_status_id: number;
  user_id: number;
  started_at?: string;
}

export interface Survey {
  id: number;
  title: string;
  description?: string;
  survey_type_id: number;
  survey_status_id: number;
  user_id: number;
  created_at: string;
  updated_at: string;
  started_at?: string;
}

const surveyService = {
  async getAll(): Promise<Survey[]> {
    const response = await surveyApi.get('/surveys');
    return response.data;
  },

  async getOne(id: number): Promise<Survey> {
    const response = await surveyApi.get(`/surveys/${id}`);
    return response.data;
  },

  async createSurvey(payload: SurveyPayload): Promise<Survey> {
    const response = await surveyApi.post('/surveys', payload);
    return response.data;
  },

  async updateSurvey(id: number, payload: Partial<SurveyPayload>): Promise<Survey> {
    const response = await surveyApi.put(`/surveys/${id}`, payload);
    return response.data;
  },

  async deleteSurvey(id: number): Promise<void> {
    await surveyApi.delete(`/surveys/${id}`);
  },

    async getResults(id: number): Promise<{
    title: string;
    results: {
      question_id: number;
      question_text: string;
      answers: string[];
    }[];
  }> {
    const response = await surveyApi.get(`/surveys/${id}/results`);
    return response.data;
  }
  
};

export default surveyService;
