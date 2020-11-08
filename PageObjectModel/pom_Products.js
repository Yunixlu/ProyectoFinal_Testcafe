import { Selector } from 'testcafe';

class ProductsPage{
    constructor(){
        //Dresses Category
        this.resultsBySearch = Selector('#center_column > h1');
        this.dressesTitle = Selector('#center_column > div.content_scene_cat > div > div > span');
        this.dressesDescription = Selector('#center_column > div.content_scene_cat > div > div > div > p');
        this.subcategory = Selector('#subcategories > ul > li');

        //Summer subcategory
        this.summerTitle = Selector('#center_column > div.content_scene_cat > div > div > span');
        this.summerDescription = Selector('#center_column > div.content_scene_cat > div > div > div');
        this.productList = Selector('#center_column > ul > li > div > div > h5 > a');

        //Elements of a product
        this.productTitle = Selector('#center_column > div > div > div.pb-center-column.col-xs-12.col-sm-4 > h1');
        this.productDescription = Selector('#short_description_content > p');
        this.price = Selector('#our_price_display');
        this.addToCartButton = Selector('#add_to_cart > button > span');
        this.addToWishList = Selector('#wishlist_button');
        this.addedProduct = Selector('#product > div.fancybox-overlay.fancybox-overlay-fixed > div > div > div > div > p')
        this.alertCloseBtn = Selector('#product > div.fancybox-overlay.fancybox-overlay-fixed > div > div > a')
    
        
    }
}
export default new ProductsPage();