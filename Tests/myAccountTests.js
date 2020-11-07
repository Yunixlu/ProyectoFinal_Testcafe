import myAccountPage from '../PageObjectModel/pom_MyAccount.js';
import homePage from '../PageObjectModel/pom_Home';
import { ClientFunction } from 'testcafe';
import { dataAccount } from '../Data/data';

const getEmail = dataAccount.email;
fixture('Proyecto final')
.page('http://automationpractice.com/index.php');

test('CP_MyAccount1 - Ingresar un correo no válido para crear una cuenta', async t =>{
    await t
        .click(homePage.signInLink)

    await t
        .typeText(myAccountPage.emailInput, dataAccount.fakeEmail)
        .click(myAccountPage.createAccountBtn)
        .expect(myAccountPage.messageError.innerText).contains(dataAccount.messageError)
});

test('CP_MyAccount2 - Ingresar un correo válido para crear una cuenta', async t =>{
    await t 
        .click(homePage.signInLink)
    
    await t
        .typeText(myAccountPage.emailInput, dataAccount.email)
        .click(myAccountPage.createAccountBtn)
        .expect(myAccountPage.pageTitle.innerText).contains(dataAccount.pageTitle)
});

test('CP_MyAccount3 - Validar campos obligatorios del formulario Create an account', async t =>{
    await t 
        .click(homePage.signInLink)
    
    await t
        .typeText(myAccountPage.emailInput, dataAccount.email)
        .click(myAccountPage.createAccountBtn)
        .expect(myAccountPage.pageTitle.innerText).contains(dataAccount.pageTitle)
        .click(myAccountPage.registerBtn)
        .expect(myAccountPage.requiredFields.innerText).contains(dataAccount.requiredTotalFields) 
        .expect(myAccountPage.baseRequiredFields.nth(0).innerText).eql(dataAccount.requiredField1)
        .expect(myAccountPage.baseRequiredFields.nth(1).innerText).eql(dataAccount.requiredField2)
        .expect(myAccountPage.baseRequiredFields.nth(2).innerText).eql(dataAccount.requiredField3)
        .expect(myAccountPage.baseRequiredFields.nth(3).innerText).eql(dataAccount.requiredField4)
        .expect(myAccountPage.baseRequiredFields.nth(4).innerText).eql(dataAccount.requiredField5)
        .expect(myAccountPage.baseRequiredFields.nth(5).innerText).eql(dataAccount.requiredField6)
        .expect(myAccountPage.baseRequiredFields.nth(6).innerText).eql(dataAccount.requiredField7)
        .expect(myAccountPage.baseRequiredFields.nth(7).innerText).eql(dataAccount.requiredField8)
});

test('CP_MyAccount4 - Ingresar campos obligatorios para crear una cuenta', async t =>{
    await t
        .click(homePage.signInLink)

    await t
        .typeText(myAccountPage.emailInput, getEmail)
        .click(myAccountPage.createAccountBtn)

    await t 
        .typeText(myAccountPage.firstNameInput, dataAccount.firstName)
        .typeText(myAccountPage.lastNameInput, dataAccount.lastName)

        .expect(myAccountPage.emailForm.value).contains(dataAccount.email)
        .expect(myAccountPage.emailForm.hasAttribute('readonly')).notOk()

        .expect(myAccountPage.firstNameAddress.value).contains(dataAccount.firstName)
        .expect(myAccountPage.lastNameAddress.value).contains(dataAccount.lastName)

        .typeText(myAccountPage.passwordInput, dataAccount.password)

        .typeText(myAccountPage.address, dataAccount.address)
        .expect(myAccountPage.address.value).contains(dataAccount.address)

        .typeText(myAccountPage.city, dataAccount.city)
        .expect(myAccountPage.city.value).contains(dataAccount.city)

        .click(myAccountPage.state)
        .click(myAccountPage.stateOption.withText(dataAccount.stateOption))
        .expect(myAccountPage.state.innerText).contains(dataAccount.stateOption)

        .typeText(myAccountPage.zipCodeInput, dataAccount.zipCode)
        .expect(myAccountPage.zipCodeInput.value).contains(dataAccount.zipCode)

        .expect(myAccountPage.country.innerText).contains(dataAccount.country)

        .typeText(myAccountPage.mobilePhone, dataAccount.mobilePhone)
        .expect(myAccountPage.mobilePhone.value).contains(dataAccount.mobilePhone)

        .typeText(myAccountPage.addressAlias, dataAccount.addressAlias)
        .expect(myAccountPage.addressAlias.value).contains(dataAccount.addressAlias)

        .click(myAccountPage.registerBtn)
        .expect(myAccountPage.myAccountTitle.innerText).contains(dataAccount.myAccountTitle)
    await t
        .expect(myAccountPage.baseListOptions.nth(0).innerText).eql(dataAccount.myAccountOption1)
    await t
        .expect(myAccountPage.baseListOptions.nth(1).innerText).eql(dataAccount.myAccountOption2)
    await t
        .expect(myAccountPage.baseListOptions.nth(2).innerText).eql(dataAccount.myAccountOption3)
    await t
        .expect(myAccountPage.baseListOptions.nth(3).innerText).eql(dataAccount.myAccountOption4)
    await t
        .expect(myAccountPage.wishListOption.innerText).eql(dataAccount.myAccountOption5)
});

test('CP_MyAccount5 - Crear una wishlist', async t =>{
    await t
        .click(myAccountPage.signInLink)
        .typeText(myAccountPage.emailAddress, getEmail)
        .expect(myAccountPage.emailAddress.value).contains(getEmail)
        .typeText(myAccountPage.passwordLogin, dataAccount.password)
        .expect(myAccountPage.passwordLogin.value).contains(dataAccount.password)
        .click(myAccountPage.signInButton)
    await t
        .expect(myAccountPage.wishListOption.innerText).eql(dataAccount.myAccountOption5)
        .click(myAccountPage.wishListOption)
        .expect(myAccountPage.wishListTitle.innerText).contains(dataAccount.wishListTitle)
        .typeText(myAccountPage.wishListInput, dataAccount.wishListName)
        .expect(myAccountPage.wishListInput.value).contains(dataAccount.wishListName)
        .click(myAccountPage.saveWishListBtn)
        .expect(myAccountPage.wishListName.innerText).contains(dataAccount.wishListName)
});