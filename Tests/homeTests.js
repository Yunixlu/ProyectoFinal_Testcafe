import homePage from '../PageObjectModel/pom_Home.js';
import shoppingCartPage from '../PageObjectModel/pom_ShoppingCart.js';
import { ClientFunction } from 'testcafe';
import { dataHome } from '../Data/data';
import  productsPage  from '../PageObjectModel/pom_Products';

const getLocation = ClientFunction(() => document.location.href);

fixture('Proyecto final')
    .page('http://automationpractice.com/index.php');

test('CP_Home1 - Abrir la página de automation practice y se muestre el Home', async t =>{
    await t
    .expect(getLocation()).contains('http://automationpractice.com/index.php');
});

test('CP_Home2 - Revisar elementos de Home', async t =>{
    await t
        .expect(homePage.searchBar.visible).ok()
        .expect(homePage.menu.visible).ok()
        .expect(homePage.cartLink.visible).ok()
        .expect(homePage.popularTab.visible).ok()
        .expect(homePage.newsletterInput.visible).ok()

});

test('CP_Home3 - Realizar la búsqueda de un producto', async t =>{
    await t
        .typeText(homePage.searchBar,dataHome.productSearch)
        .expect(homePage.searchBar.value).contains(dataHome.productSearch)
        .click(homePage.submitBtn)
        .expect(productsPage.resultsBySearch.innerText).contains(dataHome.productSearch)
});

test('CP_Home4 - Seleccionar tab Best Sellers', async t =>{
    await t
        .click(homePage.bestSellerTab)
        .expect(homePage.bestSellerTab.innerText).contains("BEST SELLERS")

});

test('CP_Home5 - Inscribirse al Newsletter', async t =>{
    await t
        .typeText(homePage.newsletterInput,dataHome.email)
        .expect(homePage.newsletterInput.value).contains(dataHome.email)
        .click(homePage.sendEmailButton)
        .expect(homePage.alertSuccess.innerText).contains("Newsletter : You have successfully subscribed to this newsletter.")
});

test('CP_Home6 - Seleccionar el carrito de compras', async t =>{
    await t
        .click(homePage.cartLink)
        .expect(shoppingCartPage.cartTitle.innerText).contains("SHOPPING-CART SUMMARY")
});