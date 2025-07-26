export const getCharacters = async () => {
    const response = await fetch('https://dattebayo-api.onrender.com/characters')

    const data = await response.json();

    return data.characters

    }


export const getCharactersById = async (id) => {
    const response = await fetch(`https://dattebayo-api.onrender.com/characters/${id}`);

    const data = await response.json();

    return data
    
}

export const getAkatsukiList = async () => {
    const response = await fetch('https://dattebayo-api.onrender.com/akatsuki');

    const data = await response.json();

    return data.akatsuki
    
}