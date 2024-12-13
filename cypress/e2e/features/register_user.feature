Feature: Register User
    Eu como cliente
    Quero fazer o cadastro na aplicação
    Para realizar um pedido de compra

    Background: Access register screen
        Given I am on register screen

    Scenario: Campo nome vazio
        When I click on Register
        Then I see the message 'O campo nome deve ser prenchido' on register

    Scenario: Campo e-mail vazio
        And I fill name
        When I click on Register
        Then I see the message 'O campo e-mail deve ser prenchido corretamente' on register

    Scenario: Campo e-mail inválido
        And I fill name
        And I fill e-mail "testeqa@"
        When I click on Register
        Then I see the message 'O campo e-mail deve ser prenchido corretamente' on register

    Scenario: Campo senha vazio
        And I fill name
        And I fill e-mail "pablitoqa@tst.qa"
        When I click on Register
        Then I see the message 'O campo senha deve ter pelo menos 6 dígitos' on register

    Scenario: Campo senha inválido 
        And I fill name
        And I fill e-mail "pablitoqa@tst.qa"
        And I fill password "1234"
        When I click on Register
        Then I see the message 'O campo senha deve ter pelo menos 6 dígitos' on register

    Scenario: Cadastro realizado com sucesso
        And I fill datas of register
        When I click on Register
        Then I see the success message on register
