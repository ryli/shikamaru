


const baseNavigator = true;
const useLocalStorage = true;

import { LocaleProvider } from 'antd';
import moment from 'moment';
import 'moment/locale/zh-cn';
const defaultAntd = require('antd/lib/locale-provider/zh_CN');

const localeInfo = {
};

let appLocale = {
  locale: 'zh-CN',
  messages: {},
  data: require('react-intl/locale-data/zh'),
  momentLocale: 'zh-cn',
};
if (useLocalStorage && localStorage.getItem('umi_locale') && localeInfo[localStorage.getItem('umi_locale')]) {
  appLocale = localeInfo[localStorage.getItem('umi_locale')];
} else if (localeInfo[navigator.language] && baseNavigator){
  appLocale = localeInfo[navigator.language];
} else {
  appLocale = localeInfo['zh-CN'] || appLocale;
}
window.g_lang = appLocale.locale;

export default (props) => {
  let ret = props.children;
  ret = (<LocaleProvider locale={appLocale.antd || defaultAntd}>
    {ret}
  </LocaleProvider>);
  return ret;
}
