import axios from 'axios';

const API_URL = '/Uw5CrX';

export const fetchQuizData = async () => {
  try {
    const response = await axios.get(API_URL, {
      headers: {
        'Content-Type': 'application/json',
      },
    });
    console.log(response.data);  //
    return response.data;
  } catch (error) {
    console.error('Error fetching quiz data:', error);
    return [];
  }
};
