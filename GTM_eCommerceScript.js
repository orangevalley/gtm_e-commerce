<!-- Google Tag Manager E-commerce -->
<!-- Version: 1.2 -->
<script>
        //Check if dataLayer exists or build dataLayer
			dataLayer = (typeof dataLayer !== 'undefined') ? dataLayer : [];
		// Build product array
	    	gtm_products = [];
    	
    		gtm_products.push({
			'name': 'Test Product',			// Productnaam/titel (Short description) - Vereist - bijv. Short met riem
			'sku': 'SKU0001',			// Uniek product SKU (Artikelcode + Stylecode) - Vereist - bijv. AI1317001 | CC AJORDSTR
			'category': 'Test categorie',		// Targetgroup (Dames, Mannen, Meisjes, Jongens) + Productcategorie - bijv. Mannen | Shorts
			'price': 9.99,				// Prijs per product incl. BTW - Let op bij bedragen . (punt) gebruiken - Vereist
			'quantity': 1				// Aantal - Vereist
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
			'transactionId': '000111',			// Transactie ID - Vereist
			'transactionAffiliation': '',			// Affiliate / shopbenaming -> Leeg laten
			'transactionTotal': 110.00,			// Totaal orderwaarde incl. BTW - Let op bij bedragen . (punt) gebruiken - Vereist
			'transactionTax': 10.00,			// BTW - Let op bij bedragen . (punt) gebruiken
			'transactionShipping': 3.95,			// Verzendkosten - Let op bij bedragen . (punt) gebruiken
			'transactionPaymentType': 'iDEAL',		// Betaalwijze - iDEAL of Creditcard
			'transactionCurrency': 'EUR',			// Munteenheid
			'transactionPromoCode': '',			// Promotiecode
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
