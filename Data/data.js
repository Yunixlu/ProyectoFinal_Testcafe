let rndNumber = Math.random().toString(36).substr(1,4);

let dataAccount = {
    email: 'dummy' + rndNumber + '@mailinator.com',
    firstName: "Julie",
    lastName: "Pa",
    password: "88888",
    address : "PO BOX 7687 ",
    city: "Los Angeles",
    stateOption: "California",
    zipCode: "52345",
    country: "United States",
    mobilePhone: "3451234567",
    addressAlias: "My house",
    messageError: "Invalid email address.",
    pageTitle: "CREATE AN ACCOUNT",
    fakeEmail: "fakeEmail",
    requiredTotalFields: "There are 8 errors",
    requiredField1: "You must register at least one phone number.",
    requiredField2: "lastname is required.",
    requiredField3: "firstname is required.",
    requiredField4: "passwd is required.",
    requiredField5: "address1 is required.",
    requiredField6: "city is required.",
    requiredField7: "The Zip/Postal code you've entered is invalid. It must follow this format: 00000",
    requiredField8: "This country requires you to choose a State.",
    myAccountTitle: "MY ACCOUNT",
    myAccountOption1: "ORDER HISTORY AND DETAILS",
    myAccountOption2: "MY CREDIT SLIPS",
    myAccountOption3: "MY ADDRESSES",
    myAccountOption4: "MY PERSONAL INFORMATION",
    myAccountOption5: "MY WISHLISTS",
    wishListTitle: "MY WISHLISTS",
    wishListName: "My wishlist",
    emailLogin: "dummy.hv9@mailinator.com",
    alert: "confirm",
    messageAlert: "Do you really want to delete this wishlist ?",
    urlAlert: "http://automationpractice.com/index.php?fc=module&module=blockwishlist&controller=mywishlist"


}

let dataHome = {
    productSearch: "PRINTED CHIFFON DRESS",
    email: 'dummy1' + rndNumber + '@mailinator.com',
    dressesCategory: "DRESSES"
}

let dataProduct = {
    dressTitle: "Dresses",
    description1: "Find your favorites dresses from our wide choice of evening, casual or summer dresses!",
    description2: "We offer dresses for every day, every style and every occasion.",
    subcategoryCasual: "CASUAL DRESSES",
    subcategoryEvening: "EVENING DRESSES",
    subcategorySummer: "SUMMER DRESSES",
    summerTitle: "Summer Dresses",
    summerDescription: "Short dress, long dress, silk dress, printed dress, you will find the perfect dress for summer.",
    product1: "Printed Summer Dress",
    product2: "Printed Summer Dress",
    product3: "Printed Chiffon Dress",
    image: "Printed Chiffon Dress",
    productTitle:"Printed Chiffon Dress",
    productDescription: "Printed chiffon knee length dress with tank straps. Deep v-neckline.",
    price: "$18.40",
    addedProduct: "Added to your wishlist."
}

let dataShopping = {
    addedMessage:"Product successfully added to your shopping cart",
    cartTitle: "SHOPPING-CART SUMMARY",
    deliveryAddress:"ADDRESSES",
    addComment: "Thank you!",
    shippingTitle: "SHIPPING",
    paymentMethodTitle: "PLEASE CHOOSE YOUR PAYMENT METHOD",
    orderSummaryTitle: "ORDER SUMMARY",
    bankWirePayment: "BANK-WIRE PAYMENT.",
    orderConfirmation: "ORDER CONFIRMATION",
    orderCompleteText:"Your order on My Store is complete.",
    receivePaymentText:"Your order will be sent as soon as we receive payment.",
    checkPaymentTitle: "CHECK PAYMENT",
    checkPaymentText: "You have chosen to pay by check. Here is a short summary of your order:",
    alertOrderComplete: "Your order on My Store is complete."

}

export {dataAccount}
export {dataHome}
export {dataProduct}
export{dataShopping}