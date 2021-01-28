// Esse arquivo juntar e importar todos os idiomas que tivermos
import { messages as portugueseMessages } from './pt'
import { messages as englishMessages } from './en'

const messages = {
    ...portugueseMessages,
    ...englishMessages
}

export { messages }