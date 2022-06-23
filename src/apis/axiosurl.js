const axios = require('axios');
const getGenderresult = async (nome) => {

    const URLgender = 'https://api.genderize.io/?name=' + nome;
    try {
        const resultgender = await axios.get(URLgender);
        return resultgender.data;
    } catch (error) {
        console.log({ error });
        return null;
    }
}

const getAgeresult = async (nome) => {
    const URLage = 'https://api.agify.io/?name=' + nome;
    try {
        const resultage = await axios.get(URLage);
        return resultage.data;
    } catch (error) {
        console.log({ error });
        return null;
    }
}

module.exports = { getGenderresult, getAgeresult };