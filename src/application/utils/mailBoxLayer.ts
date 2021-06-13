import axios from 'axios';

const apiKeyMailBoxLayer = process.env.MAILBOYLAYER_API_KEY as string;

const axiosInstance = axios.create();

export const validateEmail = (email: string): Promise<boolean> =>
  axiosInstance
    .get('http://apilayer.net/api/check', {
      params: {
        access_key: apiKeyMailBoxLayer,
        email,
        smtp: 1,
        format: 1,
      },
    })
    .then((response) => response.data.format_valid && response.data.smtp_check)
    .catch(() => false);
