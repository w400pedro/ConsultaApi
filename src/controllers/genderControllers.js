const { getGenderresult, getAgeresult } = require('../apis/axiosurl.js');

function verifica(str) {
    return /^[a-zA-Z]+$/.test(str);
}
class GenderController {
    async getGender(req, res) {

        const { nome } = req.body;

        if (verifica(nome)) {

            const genderresult = await getGenderresult(nome);
            const ageresult = await getAgeresult(nome);
            const pesquisa = [genderresult, ageresult];
            
            if (pesquisa[0].gender == null || pesquisa[1].age == null) {
                return res.send('Nome inválido <br> <a href="/">Voltar<a>');
            }
            
            if (pesquisa[0].gender == 'male') pesquisa[0].gender = 'masculino'
            else pesquisa[0].gender = 'feminino'

            pesquisa[0].probability = Math.floor(pesquisa[0].probability * 100);
            if (pesquisa[0] && pesquisa[1])
                return res.render('genderView', { pesquisa });
        } else {
            res.send('Nome inválido <br> <a href="/">Voltar<a>')
        }
    }
}

module.exports = { GenderController, getGenderresult, getAgeresult };