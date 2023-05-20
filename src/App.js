import { useTranslation } from 'react-i18next';
import './App.css';

function App() {
  const { t, i18n } = useTranslation();

  const handleChangeLanguage = (lang) => {
     i18n.changeLanguage(lang);
   };
  return (
    <div className="App">
      <div>{t("navbar.home")}</div>
      <div>{t("navbar.blog")}</div>
      <div>{t("navbar.about")}</div>
      <div>{t("navbar.projects")}</div>
      <button
              onClick={() => handleChangeLanguage('az')}
              className='light w-8 h-max text-slate-50'
            >
              Az
            </button>
            <button
              onClick={() => handleChangeLanguage('en')}
              className='light w-8 h-max text-slate-50'
            >
              En
            </button>
    </div>
  );
}

export default App;
