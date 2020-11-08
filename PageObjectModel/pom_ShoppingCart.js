import { Selector} from 'testcafe';

class ShoppingCartPage{
    constructor(){
        this.cartTitle = Selector('#cart_title');
        this.productAdded = Selector('#layer_cart > div.clearfix > div.layer_cart_product.col-xs-12.col-md-6 > h2');
        this.productName = Selector('#layer_cart_product_title');
        this.total = Selector('#layer_cart > div.clearfix > div.layer_cart_cart.col-xs-12.col-md-6 > div:nth-child(4) > span');
        this.continueShopBtn = Selector('#layer_cart > div.clearfix > div.layer_cart_cart.col-xs-12.col-md-6 > div.button-container > span > span');
        this.checkoutBtn = Selector('#layer_cart > div.clearfix > div.layer_cart_cart.col-xs-12.col-md-6 > div.button-container > a');
        this.wishlistMessage = Selector('#product > div.fancybox-overlay.fancybox-overlay-fixed > div > div > div > div > p');
        //Sumary
        this.totalPrice = Selector('#total_price');
        this.proceedToCheckout = Selector('#center_column > p.cart_navigation.clearfix > a.button.btn.btn-default.standard-checkout.button-medium > span');
        //Address
        this.deliveryAddress = Selector('#center_column > h1');
        this.addComment = Selector('#ordermsg > textarea');
        this.proceedToCheckoutAddBtn = Selector('#center_column > form > p > button > span');
        //Shipping
        this.shippingTitle = Selector('#carrier_area > h1');
        this.checkboxTerms = Selector('#cgv');
        this.proceedToCheckoutShipBtn = Selector('#form > p > button > span');
        //Payment
        this.choosePaymentMethod = Selector('#center_column > h1');
        this.bankWireOpt = Selector('#HOOK_PAYMENT > div:nth-child(1) > div > p > a');
        this.payByCheckOpt = Selector('#HOOK_PAYMENT > div:nth-child(2) > div > p > a');
        //Order Summary by bank
        this.orderSummary = Selector('#center_column > h1');
        this.bankWirePayment = Selector('#center_column > form > div > h3');
        this.confirmOrderBtn = Selector('#cart_navigation > button > span');
        //Order Summary by bank
        this.checkPaymentTitle = Selector('#center_column > form > div > h3');
        this.checkPaymentText = Selector('#center_column > form > div > p.cheque-indent > strong');
        //Order confirmation
        this.orderConfirmationTitle = Selector('#center_column > h1');
        this.orderCompleteText = Selector('#center_column > div > p > strong');
        this.receivePaymentText = Selector('#center_column > div > strong:nth-child(13)');
        this.alertOrderComplete = Selector('#center_column > p.alert.alert-success')



        
    }
}
export default new ShoppingCartPage();

