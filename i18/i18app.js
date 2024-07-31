import './App.css';
import { useTranslation } from 'react-i18next';

function App(){
  const { t, i18n } = useTranslation();

  return (
    <div className='App'>
      <div>
        <h1>{t("hello")}</h1>
        <h2>{t("link")}</h2>
      </div>
      <div>
        <button onClick={()=> i18n.changeLanguage('en') } type="button">
          英文
        </button>

        <button onClick={()=> i18n.changeLanguage('zh') } type="button">
          中文
        </button>

        <button onClick={()=> i18n.changeLanguage('fr') } type="button">
          法文
        </button>
      </div>
    </div>
  );
};
export default App;