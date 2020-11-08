import myAccountPage from '../PageObjectModel/pom_MyAccount.js';
import homePage from '../PageObjectModel/pom_Home';
import { dataAccount, dataShopping } from '../Data/data';
import productsPage from '../PageObjectModel/pom_Products'
import { dataProduct } from '../Data/data';
import shoppingCartPage from '../PageObjectModel/pom_ShoppingCart'

const getEmail = dataAccount.email;

fixture('Proyecto final')
.page('http://automationpractice.com/index.php');

test('CP_EndToEnd1 - Realizar una compra con el método de pago por banco con una nueva cuenta', async t =>{
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
        .expect(shoppingCartPage.cartTitle.innerText).contains(dataShopping.cartTitle)
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
        .click(shoppingCartPage.proceedToCheckoutAddBtn)
    await t
        .expect(shoppingCartPage.shippingTitle.innerText).contains(dataShopping.shippingTitle)
        .click(shoppingCartPage.checkboxTerms)
        .expect(shoppingCartPage.checkboxTerms.checked).ok()
        .click(shoppingCartPage.proceedToCheckoutShipBtn)
        
    await t
        .expect(shoppingCartPage.choosePaymentMethod.innerText).contains(dataShopping.paymentMethodTitle)
        .expect(shoppingCartPage.bankWireOpt.visible).ok()
        .click(shoppingCartPage.bankWireOpt)

    await t 
        .expect(shoppingCartPage.orderSummary.innerText).contains(dataShopping.orderSummaryTitle)
        .expect(shoppingCartPage.bankWirePayment.innerText).contains(dataShopping.bankWirePayment)
        .expect(shoppingCartPage.confirmOrderBtn.visible).ok()
        .click(shoppingCartPage.confirmOrderBtn)

    await t
        .expect(shoppingCartPage.orderConfirmationTitle.innerText).contains(dataShopping.orderConfirmation)
        .expect(shoppingCartPage.orderCompleteText.innerText).contains(dataShopping.orderCompleteText)
        .expect(shoppingCartPage.receivePaymentText.innerText).contains(dataShopping.receivePaymentText)

    });

 test('CP_EndToEnd2 - Realizar una compra con el método de pago por banco con correo ya registrado', async t =>{
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
        .expect(shoppingCartPage.cartTitle.innerText).contains(dataShopping.cartTitle)
        .expect(shoppingCartPage.totalPrice.innerText).contains(dataProduct.price)
        .click(shoppingCartPage.proceedToCheckout)
    await t
        .typeText(myAccountPage.emailAddress,dataAccount.emailLogin)
        .expect(myAccountPage.emailAddress.value).contains(dataAccount.emailLogin)
        .typeText(myAccountPage.passwordLogin, dataAccount.password)
        .expect(myAccountPage.passwordLogin.value).contains(dataAccount.password)
        .click(myAccountPage.signInButton)
    await t   
        .expect(shoppingCartPage.deliveryAddress.innerText).contains(dataShopping.deliveryAddress)
        .typeText(shoppingCartPage.addComment, dataShopping.addComment)
        .expect(shoppingCartPage.addComment.value).contains(dataShopping.addComment)
        .click(shoppingCartPage.proceedToCheckoutAddBtn)
    await t
        .expect(shoppingCartPage.shippingTitle.innerText).contains(dataShopping.shippingTitle)
        .click(shoppingCartPage.checkboxTerms)
        .expect(shoppingCartPage.checkboxTerms.checked).ok()
        .click(shoppingCartPage.proceedToCheckoutShipBtn)
        
    await t
        .expect(shoppingCartPage.choosePaymentMethod.innerText).contains(dataShopping.paymentMethodTitle)
        .expect(shoppingCartPage.bankWireOpt.visible).ok()
        .click(shoppingCartPage.bankWireOpt)

    await t 
        .expect(shoppingCartPage.orderSummary.innerText).contains(dataShopping.orderSummaryTitle)
        .expect(shoppingCartPage.bankWirePayment.innerText).contains(dataShopping.bankWirePayment)
        .expect(shoppingCartPage.confirmOrderBtn.visible).ok()
        .click(shoppingCartPage.confirmOrderBtn)

    await t
        .expect(shoppingCartPage.orderConfirmationTitle.innerText).contains(dataShopping.orderConfirmation)
        .expect(shoppingCartPage.orderCompleteText.innerText).contains(dataShopping.orderCompleteText)
        .expect(shoppingCartPage.receivePaymentText.innerText).contains(dataShopping.receivePaymentText)
    });

test('CP_EndToEnd3 - Iniciar sesión y luego realizar una compra con el método de pago por cheque', async t =>{
    await t
        .click(myAccountPage.signInLink)
        .typeText(myAccountPage.emailAddress,dataAccount.emailLogin)
        .expect(myAccountPage.emailAddress.value).contains(dataAccount.emailLogin)
        .typeText(myAccountPage.passwordLogin, dataAccount.password)
        .expect(myAccountPage.passwordLogin.value).contains(dataAccount.password)
        .click(myAccountPage.signInButton)
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
        .expect(shoppingCartPage.cartTitle.innerText).contains(dataShopping.cartTitle)
        .expect(shoppingCartPage.totalPrice.innerText).contains(dataProduct.price)
        .click(shoppingCartPage.proceedToCheckout)
    await t   
        .expect(shoppingCartPage.deliveryAddress.innerText).contains(dataShopping.deliveryAddress)
        .typeText(shoppingCartPage.addComment, dataShopping.addComment)
        .expect(shoppingCartPage.addComment.value).contains(dataShopping.addComment)
        .click(shoppingCartPage.proceedToCheckoutAddBtn)
    await t
        .expect(shoppingCartPage.shippingTitle.innerText).contains(dataShopping.shippingTitle)
        .click(shoppingCartPage.checkboxTerms)
        .expect(shoppingCartPage.checkboxTerms.checked).ok()
        .click(shoppingCartPage.proceedToCheckoutShipBtn)
        
    await t
        .expect(shoppingCartPage.choosePaymentMethod.innerText).contains(dataShopping.paymentMethodTitle)
        .expect(shoppingCartPage.payByCheckOpt.visible).ok()
        .click(shoppingCartPage.payByCheckOpt)

    await t 
        .expect(shoppingCartPage.orderSummary.innerText).contains(dataShopping.orderSummaryTitle)
        .expect(shoppingCartPage.checkPaymentText.innerText).contains(dataShopping.checkPaymentText)
        .expect(shoppingCartPage.confirmOrderBtn.visible).ok()
        .click(shoppingCartPage.confirmOrderBtn)

    await t
        .expect(shoppingCartPage.orderConfirmationTitle.innerText).contains(dataShopping.orderConfirmation)
        .expect(shoppingCartPage.alertOrderComplete.innerText).contains(dataShopping.alertOrderComplete)
});

test('CP_EndToEnd4 - Iniciar sesión y realizar una compra donde el producto se agregue a la wishList', async t =>{
    await t
        .click(myAccountPage.signInLink)
        .typeText(myAccountPage.emailAddress,dataAccount.emailLogin)
        .expect(myAccountPage.emailAddress.value).contains(dataAccount.emailLogin)
        .typeText(myAccountPage.passwordLogin, dataAccount.password)
        .expect(myAccountPage.passwordLogin.value).contains(dataAccount.password)
        .click(myAccountPage.signInButton)
    await t
        .click(homePage.dressCategory)
    await t
        .expect(productsPage.dressesTitle.innerText).contains(dataProduct.dressTitle)
        .click(productsPage.subcategory.nth(2))
        .click(productsPage.productList.nth(2))
        .expect(productsPage.productTitle.innerText).contains(dataProduct.productTitle)
        .expect(productsPage.addToCartButton.visible).ok()
        .click(productsPage.addToWishList)
    await t
        .expect(productsPage.addedProduct.innerText).contains(dataProduct.addedProduct)
        .click(productsPage.alertCloseBtn)
        .expect(productsPage.productTitle.innerText).contains(dataProduct.productTitle)
    await t
        .click(myAccountPage.viewInfo)
        .expect(myAccountPage.wishListOption.innerText).eql(dataAccount.myAccountOption5)
        .click(myAccountPage.wishListOption)
    await t
        .expect(myAccountPage.wishListTitle.innerText).contains(dataAccount.wishListTitle)
        .expect(myAccountPage.wishListName.innerText).contains(dataAccount.wishListName)
        .click(myAccountPage.wishListName)
        .expect(myAccountPage.wishListProduct.visible).ok()
        .click(myAccountPage.wishListProduct)
        .expect(productsPage.productTitle.innerText).contains(dataProduct.productTitle)
        .expect(productsPage.addToCartButton.visible).ok()
        .click(productsPage.addToCartButton)
        .expect(shoppingCartPage.productAdded.innerText).contains(dataShopping.addedMessage)
        .expect(shoppingCartPage.productName.innerText).contains(dataProduct.productTitle)
        .expect(shoppingCartPage.total.visible).ok()
        .expect(shoppingCartPage.checkoutBtn.visible).ok()
        .click(shoppingCartPage.checkoutBtn)
        .expect(shoppingCartPage.cartTitle.innerText).contains(dataShopping.cartTitle)
        .expect(shoppingCartPage.totalPrice.innerText).contains(dataProduct.price)
        .click(shoppingCartPage.proceedToCheckout)
    await t   
        .expect(shoppingCartPage.deliveryAddress.innerText).contains(dataShopping.deliveryAddress)
        .typeText(shoppingCartPage.addComment, dataShopping.addComment)
        .expect(shoppingCartPage.addComment.value).contains(dataShopping.addComment)
        .click(shoppingCartPage.proceedToCheckoutAddBtn)
    await t
        .expect(shoppingCartPage.shippingTitle.innerText).contains(dataShopping.shippingTitle)
        .click(shoppingCartPage.checkboxTerms)
        .expect(shoppingCartPage.checkboxTerms.checked).ok()
        .click(shoppingCartPage.proceedToCheckoutShipBtn)
        
    await t
        .expect(shoppingCartPage.choosePaymentMethod.innerText).contains(dataShopping.paymentMethodTitle)
        .expect(shoppingCartPage.payByCheckOpt.visible).ok()
        .click(shoppingCartPage.payByCheckOpt)

    await t 
        .expect(shoppingCartPage.orderSummary.innerText).contains(dataShopping.orderSummaryTitle)
        .expect(shoppingCartPage.checkPaymentText.innerText).contains(dataShopping.checkPaymentText)
        .expect(shoppingCartPage.confirmOrderBtn.visible).ok()
        .click(shoppingCartPage.confirmOrderBtn)

    await t
        .expect(shoppingCartPage.orderConfirmationTitle.innerText).contains(dataShopping.orderConfirmation)
        .expect(shoppingCartPage.alertOrderComplete.innerText).contains(dataShopping.alertOrderComplete)
    
    await t
        .click(myAccountPage.viewInfo)
        .expect(myAccountPage.wishListOption.innerText).eql(dataAccount.myAccountOption5)
        .click(myAccountPage.wishListOption)
        .setNativeDialogHandler(() => true)
        .click(myAccountPage.wishListRemove)
        const history = await t.getNativeDialogHistory();

    await t
        .wait(200)
        .expect(history[0].type).eql(dataAccount.alert)
        .expect(history[0].text).eql(dataAccount.messageAlert)
        .expect(history[0].url).eql(dataAccount.urlAlert)
});

    
