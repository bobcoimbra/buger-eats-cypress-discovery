var faker = require('Faker-br');
var cpf = require('gerador-validador-cpf');

export default {

    deliver: function () {

        var firstName = faker.name.firstName()
        var lastName = faker.name.lastName()

        var data = {
            name: `${firstName} ${lastName}`,
            cpf: '00000014141',
            email: faker.internet.email(firstName),
            whatsapp: cpf.generate(),
            address: {
                postalcode: '21911120',
                street: 'Rua Miritiba',
                number: '171',
                details: 'apto 101fds',
                district: 'Freguesia (Ilha do Governador)',
                city_state: 'Rio de Janeiro/RJ'
            },
            delivery_method: 'Bike Elétrica',
            cnh: 'cnh-digital.jpg'
        }
        return data
    }
}
