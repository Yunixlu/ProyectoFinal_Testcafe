import myAccountPage from '../PageObjectModel/pom_MyAccount.js';
import homePage from '../PageObjectModel/pom_Home';
import { dataAccount, dataShopping } from '../Data/data';
import productsPage from '../PageObjectModel/pom_Products'
import { dataProduct } from '../Data/data';
import shoppingCartPage from '../PageObjectModel/pom_ShoppingCart'

const getEmail = dataAccount.email;

fixture('Proyecto final')
.page('http://automationpractice.com/index.php');

test('CP_Products1 - Ver los elementos de la categoría Dresses', async t =>{
    await t
        .click(homePage.dressCategory)
    await t
        .expect(productsPage.dressesTitle.innerText).contains(dataProduct.dressTitle)
        .expect(productsPage.dressesDescription .nth(0).innerText).contains(dataProduct.description1)
        .expect(productsPage.dressesDescription .nth(1).innerText).contains(dataProduct.description2)
        .expect(productsPage.subcategory.nth(0).innerText).eql(dataProduct.subcategoryCasual)
        .expect(productsPage.subcategory.nth(1).innerText).eql(dataProduct.subcategoryEvening)
        .expect(productsPage.subcategory.nth(2).innerText).eql(dataProduct.subcategorySummer)
});

test('CP_Products2 - Ver los productos de la categoría Summer Dresses', async t =>{
    await t
        .click(homePage.dressCategory)
    await t
        .expect(productsPage.dressesTitle.innerText).contains(dataProduct.dressTitle)
        .expect(productsPage.subcategory.nth(2).innerText).eql(dataProduct.subcategorySummer)
        .click(productsPage.subcategory.nth(2))
        .expect(productsPage.summerTitle.innerText).contains(dataProduct.summerTitle)
        .expect(productsPage.summerDescription.innerText).contains(dataProduct.summerDescription)
        .expect(productsPage.productList.innerText).contains(dataProduct.product1)
        .expect(productsPage.productList.nth(1).innerText).contains(dataProduct.product2)
        .expect(productsPage.productList.nth(2).innerText).contains(dataProduct.product3)

});

test('CP_Products3 - Seleccionar un vestido y revisar sus elementos', async t =>{
    await t
        .click(homePage.dressCategory)
await t
        .expect(productsPage.dressesTitle.innerText).contains(dataProduct.dressTitle)
        .click(productsPage.subcategory.nth(2))
        .click(productsPage.productList.nth(2))
        .expect(productsPage.productTitle.innerText).contains(dataProduct.productTitle)
        .expect(productsPage.productDescription.value).eql(dataProduct.descriptionProduct)
        .expect(productsPage.price.visible).ok()
        .expect(productsPage.addToCartButton.visible).ok()
        .expect(productsPage.addToWishList.visible).ok()
});

test('CP_Products4 - Agregar un producto al carrito', async t =>{
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
    .expect(shoppingCartPage.continueShopBtn.visible).ok()
    .expect(shoppingCartPage.checkoutBtn.visible).ok()
});

test('CP_Products5 - Agregar un producto al wishlist sin tener iniciada la sesión', async t =>{
    await t
    .click(homePage.dressCategory)
await t
    .expect(productsPage.dressesTitle.innerText).contains(dataProduct.dressTitle)
    .click(productsPage.subcategory.nth(2))
    .click(productsPage.productList.nth(2))
    .expect(productsPage.productTitle.innerText).contains(dataProduct.productTitle)
    .expect(productsPage.addToWishList.visible).ok()
    .click(productsPage.addToWishList)
    .expect(shoppingCartPage.wishlistMessage.visible).ok()
});