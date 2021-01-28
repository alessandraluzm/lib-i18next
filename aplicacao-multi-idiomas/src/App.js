import { i18n } from './translate/i18n'

// esse valor da const é o que se encontra no browser 
// e precisa ser alterado
const I18N_STORAGE_KEY = 'i18nextLng'

const App = () => {
  const handleSelectChange = event =>{
    //seta o idioma no localStorage do browser e recarrega a página
    window.localStorage.setItem(
      I18N_STORAGE_KEY, 
      event.target.value
    )
    window.location = window.location
  }

  return (
    <>
      <h1>{i18n.t('titles.app')}</h1>
      <p>{i18n.t('messages.status')}</p>
      <button>{i18n.t('buttons.check')}</button>
      <br/><br/>
      <select onChange={handleSelectChange}>
        <option>Selecione um idioma</option>
        <option value="pt-BR">PT</option>
        <option value="en-US">EN</option>
        </select>
    </>
  )
}

export default App;
