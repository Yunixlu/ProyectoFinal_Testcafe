import { Selector} from 'testcafe';
import { dataAccount } from '../Data/data';

class MyAccountPage{
    constructor(){
        //Create
        this.emailInput = Selector('#email_create');
        this.createAccountBtn = Selector('#SubmitCreate');
        this.pageTitle = Selector('#noSlide > h1');
        this.firstNameInput = Selector('#customer_firstname');
        this.lastNameInput = Selector('#customer_lastname');
        this.emailForm = Selector ('#email');
        this.passwordInput = Selector('#passwd');
        this.firstNameAddress = Selector('#firstname');
        this.lastNameAddress = Selector('#lastname');
        this.address = Selector('#address1');
        this.city = Selector('#city');
        this.state = Selector('#id_state');
        this.stateOption = Selector('#id_state > option')
        this.zipCodeInput = Selector('#postcode');
        this.country = Selector('#id_country');
        this.mobilePhone = Selector('#phone_mobile');
        this.addressAlias = Selector('#alias');
        this.registerBtn = Selector('#submitAccount > span');
        this.messageError = Selector('#create_account_error > ol > li');
        this.requiredFields = Selector('#center_column > div');
        this.baseRequiredFields = Selector('#center_column > div > ol > li')  

        //My Account
        this.myAccountTitle = Selector('#center_column > h1');
        this.baseListOptions = Selector('#center_column > div > div:nth-child(1) > ul > li')
        this.wishListOption = Selector('#center_column > div > div:nth-child(2) > ul > li > a > span')
        this.viewInfo = Selector('#header > div.nav > div > div > nav > div:nth-child(1) > a > span')



        //Login
        this.signInLink = Selector('#header > div.nav > div > div > nav > div.header_user_info > a');
        this.emailAddress = Selector('#email');
        this.passwordLogin = Selector('#passwd');
        this.signInButton = Selector('#SubmitLogin > span');

        //WishList
        this.wishListTitle = Selector('#mywishlist > h1');
        this.wishListInput = Selector('#name');
        this.saveWishListBtn = Selector('#submitWishlist > span');
        this.wishListName = Selector('#block-history > table > tbody > tr > td:nth-child(1) > a').withText(dataAccount.wishListName);
        this.wishListProduct = Selector('#wlp_7_34 > div > div:nth-child(1) > div > a > img');
        this.wishListRemove = Selector('#block-history > table > tbody > tr > td:nth-child(6) > a');
        this.messageRemove = Selector('#wishlist_25781 > td.wishlist_delete > a')

    }
}
export default new MyAccountPage();