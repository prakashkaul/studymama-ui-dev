import { parse } from 'querystring';
//import  Map  from '@types/google.maps';
/* eslint no-useless-escape:0 import/prefer-default-export:0 */
const reg = /(((^https?:(?:\/\/)?)(?:[-;:&=\+\$,\w]+@)?[A-Za-z0-9.-]+(?::\d+)?|(?:www.|[-;:&=\+\$,\w]+@)[A-Za-z0-9.-]+)((?:\/[\+~%\/.\w-_]*)?\??(?:[-\+=&;%@.\w_]*)#?(?:[\w]*))?)$/;

export const isUrl = (path: string): boolean => reg.test(path);

export const isAntDesignPro = (): boolean => {
  if (ANT_DESIGN_PRO_ONLY_DO_NOT_USE_IN_YOUR_PRODUCTION === 'site') {
    return true;
  }
  return window.location.hostname === 'preview.pro.ant.design';
};

export const isAntDesignProOrDev = (): boolean => {
  const { NODE_ENV } = process.env;
  if (NODE_ENV === 'development') {
    return true;
  }
  return isAntDesignPro();
};

export const getPageQuery = () => parse(window.location.href.split('?')[1]);

export const getStudyMamaUi = (): string => {
  const {STUDYMAMA_UI} = process.env
  return STUDYMAMA_UI || "*";
};

export const getApiBaseUrl = (): string => {
  const {API_URL} = process.env
  return API_URL || 'http://localhost:8080';
};

export const getContentAppUrl = (): string | undefined => {
  const {CONTENT_APP_URL} = process.env
  return CONTENT_APP_URL || undefined;
};

export const random = (min: number, max: number) => Math.floor(Math.random() * (max - min)) + min;

export const initMap = (_lat: number, _lng: number) => {
  // new Map(document.getElementById("map") as HTMLElement, {
  //   center: { lat: _lat, lng: _lng },
  //   zoom: 8,
  // });
}
