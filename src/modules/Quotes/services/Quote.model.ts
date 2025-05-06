import { Http } from '@/packages/libs/BaseHttp';

export interface IQuote {
  quote: string;
}

async function random() {
  const response = await Http.request('GET', 'https://quotes-api-self.vercel.app/quote');
  return Http.getResponseJson<IQuote>(response);
}

const QuoteModel = {
  random
};

export default QuoteModel;
