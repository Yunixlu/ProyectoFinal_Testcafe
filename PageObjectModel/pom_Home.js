import { Selector} from 'testcafe';
import { dataHome } from '../Data/data';

class HomePage{
    constructor(){
        this.signInLink = Selector('a').withText('Sign in');
        this.searchBar = Selector('#search_query_top');
        this.menu = Selector('#block_top_menu');   
        this.popularTab = Selector('#home-page-tabs > li.active > a');
        this.bestSellerTab = Selector('#home-page-tabs > li:nth-child(2) > a');
        this.newsletterInput = Selector('#newsletter-input');
        this.sendEmailButton = Selector('#newsletter_block_left > div > form > div > button');
        this.cartLink = Selector('#header > div:nth-child(3) > div > div > div:nth-child(3) > div > a'); 
        this.slider = Selector('#homeslider > li:nth-child(3) > a > img');
        this.alertSuccess = Selector('#columns > p');
        this.submitBtn = Selector('#searchbox > button');
        this.dressCategory = Selector('#block_top_menu > ul > li:nth-child(2) > a').withText(dataHome.dressesCategory)
    }
}
export default new HomePage();