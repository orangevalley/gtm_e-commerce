Google Tag Manager E-Commerce code
============
Implementation guide for proper Google Tag Manager E-Commerce code. In advance of implementing the Google Tag Manager E-Commerce code you should check if 1. the [Google Tag Manager container code](https://github.com/orangevalley/GTM_standard) is working properly 2. you have received an instruction document from you Orangevalley point of contact regarding the preferred parameter values. When referred to Google Tag Manager E-Commerce code you should use the script within [GTM_eCommerceScript.js](https://github.com/orangevalley/GTM_e-commerce/blob/master/GTM_eCommerceScript.js).

## Background
Google Tag Manager is a free tool that eliminates tedious code-editing tasks for your website. For tracking E-Commerce transactions the Google Tag Manager needs to be able to use the proper transactional data. This is done by using the Data Layer. 

### Data Layer
To ensure maximum flexibility, portability, and ease of implementation, Google Tag Manager functions best when deployed alongside a data layer. A data layer is an object that contains all of the information that you want to pass to Google Tag Manager. Information such as events or variables can be passed to Google Tag Manager via the data layer, and rules can be set up in Google Tag Manager based on the values of variables (e.g. fire a remarketing tag when purchase_total > $100) or based on the specific events. Variable values can also be passed through to other tags (e.g. pass purchase_total into the value field of a tag).

The basic Google Tag E-Commerce code (using the Data Layer) looks like:

```javascript
<!-- Google Tag Manager E-commerce -->
<!-- Version: 1.1 -->
<script>
        //Check if dataLayer exists or build dataLayer
                        dataLayer = (typeof dataLayer !== 'undefined') ? dataLayer : [];
                // Build product array
                    gtm_products = [];
            
                    gtm_products.push({
                        'name': 'Test Product',                        // Productname / title **Required**
                        'sku': 'SKU0001',                        // Unique product SKU (Article ID) **Required**
                        'category': 'Test categorie',                // Product category - for instance Men | Jackets
                        'price': 9.99,                                // Prijs per product incl. BTW - Let op bij bedragen . (punt) gebruiken - Vereist
                        'quantity': 1                                // Aantal - Vereist
                    });
                // Optional repeat for each additional product to fill gtm_products array

                gtm_products.push({
                    'name': 'Test Product2',
                    'sku': 'SKU0002',
                    'category': 'Test categorie',
                    'price': 5.99,
                    'quantity': 2
                    });
            // Optional repeat for each additional product to fill gtm_products array

            
            // Build an event send to the Datalayer, which needs to trigger the E-commerce transaction in the GTM backend
            // Additional datalayer items are send to the datalayer and processed by the GTM as an transaction
            dataLayer.push({
                        'event': 'trackTrans',
                        'transactionId': '000111',                        // Transaction ID **Required**
                        'transactionAffiliation': '',                        // Optional: Affiliaton / Shop name
                        'transactionTotal': '110.00',                        // Total order value including VAT  - currency values should always use a dot "." **Required**
                        'transactionTax': '10.00',                        // VAT  - currency values should always use a dot "."
                        'transactionShipping': '3.95',                        // Shipping cost - currency values should always use a dot "."
                        'transactionPaymentType': 'iDEAL',                // Payment type - iDEAL, Creditcard
                        'transactionCurrency': 'EUR',                        // Currency
                        'transactionPromoCode': '',                        // optional: Promotion code
                        'transactionProducts': gtm_products                                        
                        });        
  </script>
<!-- End Google Tag Manager E-commerce -->

<!-- Google Tag Manager -->
<noscript><iframe src="//www.googletagmanager.com/ns.html?id=GTM-XXXX"
height="0" width="0" style="display:none;visibility:hidden"></iframe></noscript>
<script>(function(w,d,s,l,i){w[l]=w[l]||[];w[l].push({'gtm.start':
new Date().getTime(),event:'gtm.js'});var f=d.getElementsByTagName(s)[0],
j=d.createElement(s),dl=l!='dataLayer'?'&l='+l:'';j.async=true;j.src=
'//www.googletagmanager.com/gtm.js?id='+i+dl;f.parentNode.insertBefore(j,f);
})(window,document,'script','dataLayer','GTM-XXXX');</script>
<!-- End Google Tag Manager -->
```
## Benefits of Google Tag Manager and the Data Layer for E-Commerce
- The E-Commerce code uses only standardised Data Layer which ensures full supported by Google Tag Manager.
- Quick	and	easy – one script which supports all types of implementations (single product, multi-product and so on).
- Google Tag Manager will configured to pickup on the E-Commerce code everywhere it's fired (independent from URI or even if necessary domain).
- Google Tag Manager ensures flexible use of all product / transaction related Data Layer values, values from this transaction code van be used by many different marketing tags.

## Implementation
he Google Tag Manager E-Commerce code is a combination of JavaScript and non-JavaScript code that you paste into your Thank You-page right after a successful transaction. It enables Tag Manager to uses transactional data provided to Google Tag Manager through the Data Layer.

To implement Google Tag Manager E-Commerce code, copy the code snippet provided within [GTM_eCommerceScript.js](https://github.com/orangevalley/GTM_e-commerce/blob/master/GTM_eCommerceScript.js). If you already have the Google Tag Manager Container code on the Thank You-page you could leave the:

```javascript
<!-- Google Tag Manager -->
<noscript><iframe src="//www.googletagmanager.com/ns.html?id=GTM-XXXX"
height="0" width="0" style="display:none;visibility:hidden"></iframe></noscript>
<script>(function(w,d,s,l,i){w[l]=w[l]||[];w[l].push({'gtm.start':
new Date().getTime(),event:'gtm.js'});var f=d.getElementsByTagName(s)[0],
j=d.createElement(s),dl=l!='dataLayer'?'&l='+l:'';j.async=true;j.src=
'//www.googletagmanager.com/gtm.js?id='+i+dl;f.parentNode.insertBefore(j,f);
})(window,document,'script','dataLayer','GTM-XXXX');</script>
<!-- End Google Tag Manager -->
```
otherwise **replace both instances of GTM-XXXX within this part of the code** with your container ID (supplied separately by OrangeValley). Paste the code into your website Thank You-page. The script is designed to work everywhere between the opening < body > and closing </ body > tags. Feel free to place it above or below the Google Tag Manager Container, both will work.

### Implementing the proper values
Within the Google Tag Manager E-Commerce code you will find different Data Layer values which need to be populated with relevant transactional data. Although not all fields are required, it's important to get in touch with your OrangeValley point of contact if you can not populate some part with proper data. All values should be populated based on the [transaction data values](link) or the client specific list if so provided by OrangeValley.

_**Note:** The Google Tag Manager E-Commerce code must be placed directly in the page that you intend on tracking values. Placing it in a hidden iframe or deploying it within another tag management system will prevent certain tags from accurately tracking the parent page._

## Verify you implementation
You can verify the (basic) implementation by using a specific Google Chrome plugin. This plugin, called Tag Assistant, will report if the implementation of the Google Tag Manager code is correct or any warnings/errors could interfere with the correct function of the Google Tag Manager.

[Tag Assistant - Google Chrome](https://chrome.google.com/webstore/detail/tag-assistant-by-google/kejbdjndbnbjgmefkgdddjlbokphdefk?hl=en)

### Troubleshooting
If you run in to any problems; for instance the Tag Assistant is reporting issues or errors. Please:

- Refer to the [Google Tag Manager Data Layer developer resource](https://developers.google.com/tag-manager/devguide#datalayer)
- [Google Tag Manager Troubleshooting information](https://developers.google.com/tag-manager/troubleshooting)
- Get in touch with your OrangeValley Point of contact or send a message to support _at_ orangevalley _dot_ nl.

## Additional information
[Google Tag Manager support website](https://developers.google.com/tag-manager/quickstart)

