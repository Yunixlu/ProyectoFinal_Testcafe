import myAccountPage from '../PageObjectModel/pom_MyAccount.js';
import homePage from '../PageObjectModel/pom_Home';
import { dataAccount, dataShopping } from '../Data/data';
import productsPage from '../PageObjectModel/pom_Products'
import { dataProduct } from '../Data/data';
import shoppingCartPage from '../PageObjectModel/pom_ShoppingCart'

const getEmail = dataAccount.email;

fixture('Proyecto final')
.page('http://automationpractice.com/index.php');

test('CP_EndToEnd1 - Agregar un producto al carrito', async t =>{
    await t
        .click(homePage.dressCategory)
    await t
        .expect(productsPage.dressesTitle.innerText).contains(dataProduct.dressTitle)
        .click(productsPage.subcategory.nth(2))
        .click(productsPage.productList.nth(2))
        .expect(productsPage.productTitle.innerText).contains(dataProduct.productTitle)
        .expect(productsPage.addToCartButton.visible).ok()
        .click(productsPage.addToCartButton)
        .expect(shoppingCartPage.productAdded.innerText).contains(dataShopping.addedMessage)
        .expect(shoppingCartPage.productName.innerText).contains(dataProduct.productTitle)
        .expect(shoppingCartPage.total.visible).ok()
        .expect(shoppingCartPage.checkoutBtn.visible).ok()
        .click(shoppingCartPage.checkoutBtn)
        .expect(shoppingCartPage.cartTitle)
        .expect(shoppingCartPage.totalPrice.innerText).contains(dataProduct.price)
        .click(shoppingCartPage.proceedToCheckout)
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
    await t   
        .expect(shoppingCartPage.deliveryAddress.innerText).contains(dataShopping.deliveryAddress)
        .typeText(shoppingCartPage.addComment, dataShopping.addComment)
        .expect(shoppingCartPage.addComment.value).contains(dataShopping.addComment)
        .click(shoppingCartPage.proceedToCheckout)
    await t
        .expect(shoppingCartPage.shippingTitle.innerText).contains(dataShopping.shippingTitle)
        .click(shoppingCartPage.checkboxTerms)
        .expect(shoppingCartPage.checkboxTerms.checked).ok()
        .click(shoppingCartPage.proceedToCheckout)
        
    await t
     
        


        
        
    });
