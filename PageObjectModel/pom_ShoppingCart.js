import { Selector} from 'testcafe';

class ShoppingCartPage{
    constructor(){
        this.cartTitle = Selector('#cart_title');
        this.productAdded = Selector('#layer_cart > div.clearfix > div.layer_cart_product.col-xs-12.col-md-6 > h2');
        this.productName = Selector('#layer_cart_product_title');
        this.total = Selector('#layer_cart > div.clearfix > div.layer_cart_cart.col-xs-12.col-md-6 > div:nth-child(4) > span');
        this.continueShopBtn = Selector('#layer_cart > div.clearfix > div.layer_cart_cart.col-xs-12.col-md-6 > div.button-container > span > span');
        this.checkoutBtn = Selector('#layer_cart > div.clearfix > div.layer_cart_cart.col-xs-12.col-md-6 > div.button-container > a');
        this.wishlistMessage = Selector('#product > div.fancybox-overlay.fancybox-overlay-fixed > div > div > div > div > p')
        //Sumary
        this.totalPrice = Selector('#total_price');
        this.proceedToCheckout = Selector('#center_column > p.cart_navigation.clearfix > a.button.btn.btn-default.standard-checkout.button-medium > span')
        //Address
        this.deliveryAddress = Selector('#center_column > h1');
        this.addComment = Selector('#ordermsg > textarea');
        //Shipping
        this.shippingTitle = Selector('#carrier_area > h1');
        this.checkboxTerms = Selector('#cgv')
        //Payment
        this.choosePaymentMethod = Selector('#center_column > h1');
        this.bankWire = Selector('#HOOK_PAYMENT > div:nth-child(1) > div > p > a');
        //Order Summary
        this.orderSummary = Selector('#center_column > h1');
        this.bankWirePayment = Selector('#center_column > form > div > h3');
        this.confirmOrderBtn = Selector('#cart_navigation > button > span')
        //Order confirmation
        this.orderComplete = Selector('#center_column > div > p > strong')



        
    }
}
export default new ShoppingCartPage();

