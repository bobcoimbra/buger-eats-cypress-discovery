import SignupPage from '../pages/SignupPage'
import signup from '../pages/SignupPage'
import signupFactory from '../factories/signupFactory'

describe('Signup', () => {
    it('User should be deliver', function () {

        var deliver = signupFactory.deliver()

        signup.go()
        signup.fillForm(deliver)
        signup.submit()

        const expectMessege = 'Recebemos os seus dados. Fique de olho na sua caixa de email, pois e em breve retornamos o contato.'
        signup.modalContentShouldBe(expectMessege)
        cy.contains('.swal2-actions .swal2-confirm', 'Fechar').click()


    })
    it('Incorret document', function () {

        var deliver = signupFactory.deliver()

        deliver.cpf = '000000144aa'

        signup.go()
        signup.fillForm(deliver)
        signup.submit()
        signup.modalContentShouldBeError('Oops! CPF inválido')
    })
    it('Email Invalid', function () {

        var deliver = signupFactory.deliver()

        deliver.email = 'alex@br'

        signup.go()
        signup.fillForm(deliver)
        signup.submit()
        signup.modalContentShouldBeError('Oops! Email com formato inválido.')
    })

    context('Required fields', function () {

        const messages = [
            { field: 'name', output: 'É necessário informar o nome' },
            { field: 'cpf', output: 'É necessário informar o CPF' },
            { field: 'email', output: 'É necessário informar o email' },
            { field: 'postalcode', output: 'É necessário informar o CEP' },
            { field: 'number', output: 'É necessário informar o número do endereço' },
            { field: 'delivery_method', output: 'Selecione o método de entrega' },
            { field: 'cnh', output: 'Adicione uma foto da sua CNH' },

        ]

        before(function(){
            signup.go()
            signup.submit()
        })

        messages.forEach(function(msg){
            it(`${msg.field} is required`, function(){
                SignupPage.modalContentShouldBeError(msg.output)
            })
        })
    })

    // it('Required fields', function () { // resolvido com context
    //     signup.go()
    //     signup.submit()
    //     SignupPage.modalContentShouldBeError('É necessário informar o nome')
    //     SignupPage.modalContentShouldBeError('É necessário informar o CPF')
    //     SignupPage.modalContentShouldBeError('É necessário informar o email')
    //     SignupPage.modalContentShouldBeError('É necessário informar o CEP')
    //     SignupPage.modalContentShouldBeError('É necessário informar o número do endereço')
    //     SignupPage.modalContentShouldBeError('Selecione o método de entrega')
    //     SignupPage.modalContentShouldBeError('Adicione uma foto da sua CNH')

    // })
})