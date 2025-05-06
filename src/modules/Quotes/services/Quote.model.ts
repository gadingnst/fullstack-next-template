import { Http } from '@/packages/libs/BaseHttp';

export interface IQuote {
  _id: string;
  content: string;
  author: string;
  tags: string[];
  authorSlug: string;
  length: number;
  dateAdded: string;
  dateModified: string;
}

async function random() {
  const response = await Http.request('GET', 'https://quotes-api-self.vercel.app/quote');
  return Http.getResponseJson<IQuote>(response);
}

const QuoteModel = {
  random
};

export default QuoteModel;
