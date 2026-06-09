const URL_BASE = 'https://futuramaapi.com/api/characters'

export async function getCharacters() {
    const url = URL_BASE 
    // melhorou, mas agora tem "erro" em mais um unico lugar aqui dentro. mais precisamente UMA PALAVRA , lamento mas nao vai acha nos slides a palavra
    // esta abaixo desta linha, boa sorte
    const response = await fetch(url)
    if (!response.ok) {
        throw new Error ('Deu ruim')
    }
    const data = await response.json()
    return data.items
}