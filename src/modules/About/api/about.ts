import BaseHttp from '@/packages/libs/BaseHttp';
import { BaseHttpResponse } from '@/packages/libs/BaseHttp/interface';

const Http = new BaseHttp({
  baseURL: 'https://api.quran.gading.dev'
});

interface AboutQuran {
  maintaner: string;
  source: string;
}

export async function getAboutQuran(signal?: AbortSignal) {
  const response = await Http.request('GET', '/', { signal });
  const result: BaseHttpResponse<AboutQuran> = await response.json();
  return result;
}
