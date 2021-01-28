import i18n from 'i18next'
// languageDetector Detecta a linguagem do usuário pelo browser
import languageDetector from 'i18next-browser-languagedetector' 
import { messages } from './languages'

i18n
    .use(languageDetector)
    .init({
        debug: false,
        // namespace deafult
        defaultNS: ['translations'],
        // idioma padrão
        fallbackLng: 'pt',
        // podemos configurar diversos namespaces
        ns: ['translations'],
        resources: messages
    })

export { i18n }
