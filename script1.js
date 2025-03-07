document.addEventListener('DOMContentLoaded', (event) => {
    const form = document.getElementById('searchForm');
    const searchResult = document.querySelector('.search-result');
    const suggestedProductContainer = document.querySelector('.suggested-product-container');
    const products = [
        
{
    name: "Boldfit Stainless Steel Bottle",
    url: "https://www.amazon.in/Boldfit-Bottles-Stainless-Bottle-Leakproof/dp/B0C4YRBB8Z/ref=sr_1_5?crid=2QF7QZ8MGMQ6X",
    price: "₹399",
    site: "Amazon",
    imageUrl: "https://m.media-amazon.com/images/I/71zFvtVuP1L.SL1500.jpg"
},
{
    name: "Boldfit Steel Water Bottle",
    url: "https://www.flipkart.com/boldfit-steel-water-bottle-sipper-bottles-adults-metal-1000-ml/p/itm9a94ea59a3e9b?pid=BOTGY7FEC7TECGZN",
    price: "₹349",
    site: "Flipkart",
    imageUrl: "https://m.media-amazon.com/images/I/71zFvtVuP1L.SL1500.jpg"
},
{
    name: "Boldfit Stainless Steel Water Bottle",
    url: "https://boldfit.in/products/stainless-steel-water-bottle-black-1000ml",
    price: "₹379",
    site: "Boldfit",
    imageUrl: "https://boldfit.in/cdn/shop/files/71zFvtVuP1L._SL1500.jpg?v=1687948015&width=1000"
},
{
    name: "Cetaphil",
    url: "https://www.flipkart.com/cetaphil-gentle-skin-cleanser-mild-non-irritating-formula-all-types-face-wash/p/itm11e8b0ae2cfa8?pid=CNRENGGBDYD6GYY5&lid=LSTCNRENGGBDYD6GYY55UPVY3&marketplace=FLIPKART&sattr[]=quantity&st=quantity",
    price: "₹594",
    site: "Flipkart",
    imageUrl: "https://th.bing.com/th?id=OPAC.PYqIeY5sZU5L1Q474C474&w=592&h=550&o=5&dpr=1.3&pid=21.1"
},
{
    name: "Cetaphil",
    url: "https://www.amazon.in/Cetaphil-Gentle-Skin-Cleanser-250ml/dp/B01CCGW4LC?source=ps-sl-shoppingads-lpcontext&ref_=fplfs&psc=1&smid=A3Q8O9W1W04EEZ",
    price: "₹530",
    site: "Amazon",
    imageUrl: "https://th.bing.com/th?id=OPAC.PYqIeY5sZU5L1Q474C474&w=592&h=550&o=5&dpr=1.3&pid=21.1"
},
{
    name: "Cetaphil",
    url: "https://www.nykaaman.com/cetaphil-cleansing-lotion/p/22032?ptype=product&skuId=22030&utm_content=ads&utm_source=GooglePaid&utm_medium=PLA&utm_campaign=SSC_Grooming_L1_Oct23&gad_source=4&gclid=Cj0KCQjwpNuyBhCuARIsANJqL9P_vJeZVGvT01NwrIfrBHCerGjX2FNMOq00wvDqoH7MrTSC5DezS6QaAmwbEALw_wcB",
    price: "₹628",
    site: "Nykaa",
    imageUrl: "https://th.bing.com/th?id=OPAC.PYqIeY5sZU5L1Q474C474&w=592&h=550&o=5&dpr=1.3&pid=21.1"
},
{
    name:"Prestige Stove Magic plus Toughened Glass(3 burners)",
    url: "https://www.flipkart.com/prestige-magic-plus-gtmp-03-glass-manual-gas-stove/p/itm035928700b78a?pid=GSTGNYVGQ4Z8KZSG&lid=LSTGSTGNYVGQ4Z8KZSGSISJGJ&marketplace=FLIPKART&q=prestige+magic+plus&store=search.flipkart.com&srno=s_1_1&otracker=AS_Query_OrganicAutoSuggest_3_14_na_na_na&otracker1=AS_Query_OrganicAutoSuggest_3_14_na_na_na&fm=search-autosuggest&iid=51f2954c-5f2c-4807-ad8d-e7b2b11effb0.GSTGNYVGQ4Z8KZSG.SEARCH&ppt=sp&ppn=sp&ssid=32xboj63zk0000001716967843000&qH=a985ed7d9bee6c4c",
    price: "₹3995",
    site: "Flipkart",
    imageUrl: "https://www.addmecart.com/wp-content/uploads/2023/05/1956.jpg"
},
{
    name:"Prestige Stove Magic plus Toughened Glass(3 burners)",
    url: "https://www.amazon.in/Prestige-Magic-Plus-Stove-GTMP-03/dp/B0BW8TRW4H/ref=sr_1_1?crid=2O2BF4COT5WCR&dib=eyJ2IjoiMSJ9._CMAP1HAD4w2tAST3vAY0GKzALxkMp_P9c8tS6374BtyipIm4GobIpOraiCuz-_09KvB6-xI6VFRHvsRF0TmEDHiMhGwbhdx9xRFPJIWpPdcMrlzYXc4LrAdNut1FWFQIy8-8RdcJqVBJuP9Z54QbT6CbKMzEZwO1q82CpZRtGc9-fsFGodySHzqGQ0sGYlgR9ax9NEJTRtKAlXg8KyVDxG3TMxB_X68qL7hOTH-34M6-dHpCunCPSkuekuxvhHkLnHO-waRZbULIcmnzR_oRIgSq5DrHXDluAzttpNDy3E.tUEr0nYNCzmwU_YCoqsKGDT_NUWWYupBlyF7jL8x6Js&dib_tag=se&keywords=prestige%2Bmagic%2Bplus&qid=1716967774&sprefix=prestige%2Bmagic%2Bplus%2Blp%2Caps%2C650&sr=8-1&th=1",
    price: "₹3995",
    site: "Amazon",
    imageUrl: "https://www.addmecart.com/wp-content/uploads/2023/05/1956.jpg"
},
{
    name:"Prestige Stove Magic plus Toughened Glass(3 burners)",
    url: "https://shop.ttkprestige.com/prestige-magic-plus-lp-gas-stove-gtmp.html",
    price: "₹3995",
    site: "Prestige",
    imageUrl: "https://www.addmecart.com/wp-content/uploads/2023/05/1956.jpg"
},
{
    name:"Sugar Pop Matte Lipstick",
    url: "https://www.amazon.in/dp/B09VTDJLRB?ref=cm_sw_r_cp_ud_dp_KE76CKZWBC4S7H7BRRZX&ref_=cm_sw_r_cp_ud_dp_KE76CKZWBC4S7H7BRRZX&social_share=cm_sw_r_cp_ud_dp_KE76CKZWBC4S7H7BRRZX",
    price: "₹199",
    site: "Amazon",
    imageUrl: "https://m.media-amazon.com/images/I/6114cAOlKML._SL1500_.jpg"
},
{
    name:"Sugar Pop Matte Lipstick",
    url: "https://www.nykaa.com/sugar-pop-liquid-lipstick/p/5389409?skuId=5389367l",
    price: "₹275",
    site: "Nykaa",
    imageUrl: "https://m.media-amazon.com/images/I/6114cAOlKML._SL1500_.jpg"
},
{
    name:"Sugar Pop Matte Lipstick",
    url: "https://www.flipkart.com/sugar-pop-matte-lipstick-non-drying-lightweight-satin-finish/p/itm60512079a5a29?pid=LSKGCZXK8BCMSNXW&lid=LSTLSKGCZXK8BCMSNXWAXQ0RV&marketplace=FLIPKART&q=sUGAR+POP+Matte+Lipstick+-+01+Taupe&store=g9b%2Fffi%2Ftv5%2Funa&srno=s_1_1&otracker=search&otracker1=search&fm=Search&iid=e309fa41-01cb-4a9c-a383-710f177cb074.LSKGCZXK8BCMSNXW.SEARCH&ppt=sp&ppn=sp&ssid=cagd31co5c0000001716968533038&qH=39e673a561051fb8",
    price: "₹246",
    site: "Flipkart",
    imageUrl: "https://m.media-amazon.com/images/I/6114cAOlKML._SL1500_.jpg"
},
{
    name:"Sugar Pop Matte Lipstick",
    url: "https://www.google.com/url?q=https://www.purplle.com/track%3Fdpl%3D1%26redirect%3Dhttps%253A%252F%252Fwww.purplle.com%252Fproduct%252Fsugar-pop-matte-lipstick-04-caramel%26srsltid%3DAfmBOoqXBHZPAbv4j-TDM1TV7v1KuXAp8_-I13pzgefsV6xBS2YEIPnXi0A&opi=95576897&sa=U&ved=0ahUKEwje8sif4u6GAxVKsVYBHZrnDaUQrzwInQE&usg=AOvVaw0njYvygJXqrrG3vFWdnjqs",
    price: "₹209",
    site: "Purple",
    imageUrl: "https://m.media-amazon.com/images/I/6114cAOlKML._SL1500_.jpg"
},
{
    name:"Red Tape Sneaker Casual Shoes",
    url: "https://www.flipkart.com/red-tape-sneaker-casual-shoes-women-comfortable-look-sneakers/p/itm83fcd81c48a3c?pid=SHOGNQAUSZPRZKGK&cmpid=product.share.pp&_refId=PP.63e72b9d-88cd-4bdd-b0d0-a2d5ef47f098.SHOGNQAUSZPRZKGK&_appId=WA",
    price: "₹1,499",
    site: "Flipkart",
    imageUrl: "https://assets.ajio.com/medias/sys_master/root/20230629/8JuY/649cbf41eebac147fc2f8c2a/-1117Wx1400H-465971150-purple-MODEL2.jpg"
},
{
    name:"Red Tape Sneaker Casual Shoes",
    url: "https://www.amazon.in/dp/B0BYDWJRPP?s=shoes&ref=cm_sw_r_cso_wa_apan_dp_JHBJ9FHEQ3S5YAPQ48QF&ref_=cm_sw_r_cso_wa_apan_dp_JHBJ9FHEQ3S5YAPQ48QF&social_share=cm_sw_r_cso_wa_apan_dp_JHBJ9FHEQ3S5YAPQ48QF&starsLeft=1&skipTwisterOG=1",
    price: "₹999 (NA)",
    site: "Amazon",
    imageUrl: "https://assets.ajio.com/medias/sys_master/root/20230629/8JuY/649cbf41eebac147fc2f8c2a/-1117Wx1400H-465971150-purple-MODEL2.jpg"
},
{
    name:"Red Tape Sneaker Casual Shoes",
    url: "https://www.ajio.com/red-tape-round-toe-lace-up-sneakers/p/465971150_purple",
    price: "₹1000",
    site: "Ajio",
    imageUrl: "https://assets.ajio.com/medias/sys_master/root/20230629/8JuY/649cbf41eebac147fc2f8c2a/-1117Wx1400H-465971150-purple-MODEL2.jpg"
},
{
    name:"Block Heeled Chunky Boots",
    url: "https://www.flipkart.com/shoetopia-lace-up-block-heeled-western-black-boots-girls-women/p/itm5f004cc471d82?pid=SHOGHDSSF2Y7YKXK&lid=LSTSHOGHDSSF2Y7YKXKQCN0AC&marketplace=FLIPKART&q=shoetopia+boots+&store=osp%2Fiko%2Fsx7%2Fxgp&pageUID=1717050643384",
    price: "₹958",
    site: "Flipkart",
    imageUrl: "https://m.media-amazon.com/images/I/61AdRxgWufL._AC_UY1000_.jpg"
},
{
    name:"Block Heeled Chunky Boots",
    url: "https://www.myntra.com/shoes/shoetopia/shoetopia-women-block-heeled-chunky-boots/21332730/buy",
    price: "₹639",
    site: "Myntra",
    imageUrl: "https://m.media-amazon.com/images/I/61AdRxgWufL._AC_UY1000_.jpg"
},
{
    name:"Block Heeled Chunky Boots",
    url: "https://www.nykaafashion.com/shoetopia-women-black-boots/p/9310804?adsource=shopping_india&skuId=9310760&gad_source=1",
    price: "₹1000",
    site: "Nykaa",
    imageUrl: "https://m.media-amazon.com/images/I/61AdRxgWufL._AC_UY1000_.jpg"
},
{
    name:"Six Of Crows Book",
    url: "https://www.amazon.in/dp/1510106286?ref=cm_sw_r_mwn_dp_10BS7DYK3K5JM4Y11TDV&ref_=cm_sw_r_mwn_dp_10BS7DYK3K5JM4Y11TDV&social_share=cm_sw_r_mwn_dp_10BS7DYK3K5JM4Y11TDV&language=en-IN",
    price: "₹682",
    site: "Amazon",
    imageUrl: "https://www.crossword.in/cdn/shop/products/getimage_1e0e82b3-0e0a-4a3c-b370-86a5fdfa6ec7.jpg?v=1678848422"
},
{
    name:"Six Of Crows Book",
    url: "https://www.flipkart.com/six-crows-collector-s/p/itm961ec58225320?pid=9781510106284&cmpid=product.share.pp&_refId=PP.9432de5b-18d0-4d84-b01e-c517b0ab9eda.9781510106284&_appId=WA",
    price: "₹1103",
    site: "Flipkart",
    imageUrl: "https://www.crossword.in/cdn/shop/products/getimage_1e0e82b3-0e0a-4a3c-b370-86a5fdfa6ec7.jpg?v=1678848422"
},
{
    name:"Six Of Crows Book",
    url: "https://www.crossword.in/products/six-of-crows-collectors-edition-2",
    price: "₹699",
    site: "Crossword",
    imageUrl: "https://www.crossword.in/cdn/shop/products/getimage_1e0e82b3-0e0a-4a3c-b370-86a5fdfa6ec7.jpg?v=1678848422"
},
{
    name:"The Ultimate Play Dough & Clay",
    url: "https://www.amazon.in/Creativity-Imagination-Characters-Multicolour-Sculpting/dp/B07C51WPQ1?source=ps-sl-shoppingads-lpcontext&ref_=fplfs&psc=1&smid=A2GTG1HPYW8M2P",
    price: "₹1,119",
    site: "Amazon",
    imageUrl: "https://cdn.fcglcdn.com/brainbees/images/products/zoom/2090698a.jpg"
},
{
    name:"The Ultimate Play Dough & Clay",
    url: "https://www.myntra.com/art-and-craft/fun+dough/fun-dough-tool-kit-for-age-3-years/23045378/buy",
    price: "₹1249",
    site: "Myntra",
    imageUrl: "https://cdn.fcglcdn.com/brainbees/images/products/zoom/2090698a.jpg"
},
{
    name:"The Ultimate Play Dough & Clay",
    url: "https://www.firstcry.com/fun-dough/fun-dough-ultimate-dough-and-tool-kit-60-plus-pieces/2090698/product-detail?ref=GoogleShopping_5_50&srsltid=AfmBOoofmKHPYx__7gDMaELf3585Bo7PkdutiJeDlp29U5aakOuzEWVZ90M",
    price: "₹999",
    site: "Firstcry",
    imageUrl: "https://cdn.fcglcdn.com/brainbees/images/products/zoom/2090698a.jpg"
},
{
    name:"Bausch & Lomb Renu Contact Lens Solution ",
    url: "https://www.amazon.in/dp/B00I1AOY58?ref=cm_sw_r_mwn_dp_FV9W5YSJ8RVTPGCGYZJX&ref_=cm_sw_r_mwn_dp_FV9W5YSJ8RVTPGCGYZJX&social_share=cm_sw_r_mwn_dp_FV9W5YSJ8RVTPGCGYZJX&language=en-IN",
    price: "₹241",
    site: "Amazon",
    imageUrl: "https://m.media-amazon.com/images/I/61Q27ESaV-L._SL1100_.jpg"
},
{
    name:"Bausch & Lomb Renu Contact Lens Solution ",
    url: "https://www.apollopharmacy.in/otc/renu-fresh-solution-120ml?section=PDP+multivariant+banner+Mweb",
    price: "₹260",
    site: "Apollopharmacy",
    imageUrl: "https://m.media-amazon.com/images/I/61Q27ESaV-L._SL1100_.jpg"
},
{
    name:"Bausch & Lomb Renu Contact Lens Solution ",
    url: "https://www.flipkart.com/renu-cleaning-solution/p/itm10e3fa347cecc?pid=SEEGTF4SDPCTRHGT&lid=LSTSEEGTF4SDPCTRHGTS1LUTI&marketplace=FLIPKART&q=renu+lens+solution&store=u73&pageUID=1717051270822",
    price: "₹259",
    site: "Flipkart",
    imageUrl: "https://m.media-amazon.com/images/I/61Q27ESaV-L._SL1100_.jpg"
},
{
    name:"Small Backpack Miami Rose Casual",
    url: "https://www.flipkart.com/genie-miami-13-litres-rose-casual-14-inch-water-resistant-14-l-backpack/p/itm26bb90ddbc031?pid=BKPGHZSZ5SGQUJWF&cmpid=product.share.pp&_refId=PP.2cce2e82-726f-46ce-b404-dd373262d7cb.BKPGHZSZ5SGQUJWF&_appId=WA",
    price: "₹649",
    site: "Flipkart",
    imageUrl: "https://assets.ajio.com/medias/sys_master/root/20230621/fT4Q/6492b93642f9e729d76e36ef/-473Wx593H-464048950-pink-MODEL.jpg"
},
{
    name:"Small Backpack Miami Rose Casual",
    url: "https://www.amazon.in/dp/B07SRGQ2R4?ref=cm_sw_r_cso_wa_apan_dp_0DGJWSNCBKGD6VSPQCFB&ref_=cm_sw_r_cso_wa_apan_dp_0DGJWSNCBKGD6VSPQCFB&social_share=cm_sw_r_cso_wa_apan_dp_0DGJWSNCBKGD6VSPQCFB&starsLeft=1&skipTwisterOG=1",
    price: "₹305",
    site: "Amazon",
    imageUrl: "https://assets.ajio.com/medias/sys_master/root/20230621/fT4Q/6492b93642f9e729d76e36ef/-473Wx593H-464048950-pink-MODEL.jpg"
},
{
    name:"Small Backpack Miami Rose Casual",
    url: "https://www.ajio.com/genie-printed-backpack-with-adjustable-straps/p/464048950_pink",
    price: "₹955",
    site: "Ajio",
    imageUrl: "https://assets.ajio.com/medias/sys_master/root/20230621/fT4Q/6492b93642f9e729d76e36ef/-473Wx593H-464048950-pink-MODEL.jpg"
},
{
    name:"Lavie Senufo Navy Medium Women's Tote Bag",
    url: "https://www.nykaafashion.com/lavie-navy-blue-senufo-handbag/p/5385363",
    price: "₹1050",
    site: "Nykaa",
    imageUrl: "https://www.lavieworld.com/cdn/shop/products/HTER900040M3_1_26ded543-16d0-4621-b2e3-668577dfb59a.jpg?v=1711707362"
},
{
    name:"Lavie Senufo Navy Medium Women's Tote Bag",
    url: "https://www.lavieworld.com/products/senufo-md-tote",
    price: "₹1549",
    site: "Lavieworld",
    imageUrl: "https://www.lavieworld.com/cdn/shop/products/HTER900040M3_1_26ded543-16d0-4621-b2e3-668577dfb59a.jpg?v=1711707362"
},
{
    name:"Lavie Senufo Navy Medium Women's Tote Bag",
    url: "https://amzn.in/d/gTQ7cUs",
    price: "₹2119",
    site: "Amazon",
    imageUrl: "https://www.lavieworld.com/cdn/shop/products/HTER900040M3_1_26ded543-16d0-4621-b2e3-668577dfb59a.jpg?v=1711707362"
},
{
    name:"Space Pencil Case Pouch",
    url: "https://www.amazon.in/dp/B0B883BNQX?ref=cm_sw_r_cso_wa_apan_dp_62W5ESVHB9YQG22HE3QJ&ref_=cm_sw_r_cso_wa_apan_dp_62W5ESVHB9YQG22HE3QJ&social_share=cm_sw_r_cso_wa_apan_dp_62W5ESVHB9YQG22HE3QJ&starsLeft=1&skipTwisterOG=1",
    price: "₹309",
    site: "Amazon",
    imageUrl: "https://m.media-amazon.com/images/I/51IF6qzTv9L.jpg"
},
{
    name:"Space Pencil Case Pouch",
    url: "https://www.meesho.com/s-b-m-galaxia-branded-3d-space-design-embossed-cover-pencil-case-with-compartments-pencil-pouch-for-kids-school-supply-organizer-for-students-stationery-box-cosmetic-zip-pouch-bag-1-unit/p/5dj58v?srsltid=AfmBOoo2gd4ts9afwkxlOAi8MfrIYYs5j4BosqX8cU5nHnn0-U1lLIYTcfM",
    price: "₹315",
    site: "Meesho",
    imageUrl: "https://m.media-amazon.com/images/I/51IF6qzTv9L.jpg"
},
{
    name:"Space Pencil Case Pouch",
    url: "https://www.flipkart.com/ar-jouiet-mansion-astronaut-3d-art-eva-pencil-box/p/itm44e62a6100008?pid=PBXGYFYWZA8YJZKU&cmpid=product.share.pp&_refId=PP.3d8b03d9-7828-47d8-83e5-3c75241c2848.PBXGYFYWZA8YJZKU&_appId=WA",
    price: "₹262",
    site: "Flipkart",
    imageUrl: "https://m.media-amazon.com/images/I/51IF6qzTv9L.jpg"
},
{
    name:"Women Bodycon Blue Dress",
    url: "https://www.flipkart.com/sassafras-women-bodycon-blue-dress/p/itm05d4fd99165ae?pid=DREGUFFJWEABXA7Y&cmpid=product.share.pp&_refId=PP.085e5e6c-de33-4e7a-8d4c-c4f4ee0d07cc.DREGUFFJWEABXA7Y&_appId=WA",
    price: "₹630",
    site: "Flipkart",
    imageUrl: "https://www.sassafras.in/cdn/shop/products/SFDRSS11577-1_b00fd832-09a5-4fea-9e98-fccc00fe8bdb_900x.jpg?v=1697008496"
},
{
    name:"Women Bodycon Blue Dress",
    url: "https://www.myntra.com/dress/sassafras/sassafras-rib-bodycon-midi-dress/24956658/buy",
    price: "₹539",
    site: "Myntra",
    imageUrl: "https://www.sassafras.in/cdn/shop/products/SFDRSS11577-1_b00fd832-09a5-4fea-9e98-fccc00fe8bdb_900x.jpg?v=1697008496"
},
{
    name:"Women Bodycon Blue Dress",
    url: "https://www.sassafras.in/products/women-royal-blue-rib-bodycon-midi-dress-sfdrss11577?_pos=10&_sid=4d8a73754&_ss=r&variant=47290542752045",
    price: "₹629",
    site: "Sassafras",
    imageUrl: "https://www.sassafras.in/cdn/shop/products/SFDRSS11577-1_b00fd832-09a5-4fea-9e98-fccc00fe8bdb_900x.jpg?v=1697008496"
},
{
    name:"Boldfit Yoga Mat",
    url: "https://www.flipkart.com/boldfit-yoga-mat-men-women-kids-eva-exercise-gym-cover-strap-mattress-blue-4-mm/p/itm5c640d743aeb7?pid=SMTGB9PECG2TF6JV&lid=LSTSMTGB9PECG2TF6JVFIJIAW&marketplace=FLIPKART&store=qoc%2Fs1h%2Ffco&srno=b_1_1&otracker=browse&fm=organic&iid=en_igG6mjno-Rk3qfvIucvs_Ic6Gssc4VTzqXO2kbl_mjUbH-opCE4yOrlycAoShiOU0mXQo8pVx8WytRmiz8NfQA%3D%3D&ppt=hp&ppn=homepage&ssid=ps1krmp48g0000001717052575929",
    price: "₹347",
    site: "Flipkart",
    imageUrl: "https://rukminim2.flixcart.com/image/832/832/xif0q/sport-mat/7/7/n/yoga-mat-for-women-and-men-with-carry-strap-anti-tear-anti-slip-original-imagg6kq75d4a9nv.jpeg?q=70&crop=false"
},
{
    name:"Boldfit Yoga Mat",
    url: "https://amzn.in/d/dhykdQi",
    price: "₹347",
    site: "Amazon",
    imageUrl: "https://rukminim2.flixcart.com/image/832/832/xif0q/sport-mat/7/7/n/yoga-mat-for-women-and-men-with-carry-strap-anti-tear-anti-slip-original-imagg6kq75d4a9nv.jpeg?q=70&crop=false"
},
{
    name:"Boldfit Yoga Mat",
    url: "https://boldfit.in/products/eva-mat",
    price: "₹399",
    site: "Boldfit",
    imageUrl: "https://rukminim2.flixcart.com/image/832/832/xif0q/sport-mat/7/7/n/yoga-mat-for-women-and-men-with-carry-strap-anti-tear-anti-slip-original-imagg6kq75d4a9nv.jpeg?q=70&crop=false"
},
{
    name:"Fevicryl Multi Surface Pastel Acrylic Colours Kit 6 Shades X 15Ml)",
    url: "https://www.amazon.in/dp/B0C94NN9DP?ref=cm_sw_r_mwn_dp_D7DSDY80BDRFTVH1PBB4&ref_=cm_sw_r_mwn_dp_D7DSDY80BDRFTVH1PBB4&social_share=cm_sw_r_mwn_dp_D7DSDY80BDRFTVH1PBB4&language=en_US",
    price: "₹143",
    site: "Amazon",
    imageUrl: "https://m.media-amazon.com/images/I/61Rp3tAsxHL._SL1000_.jpg"
},
{
    name:"Fevicryl Multi Surface Pastel Acrylic Colours Kit 6 Shades X 15Ml",
    url: "https://www.firstcry.com/fevicryl/fevicryl-acrylic-pastel-color-6-shades-15-ml-each/15302562/product-detail?ref=GoogleShopping_10_111!Standard-Cat_SS",
    price: "₹120",
    site: "Firstcry",
    imageUrl: "https://cdn.fcglcdn.com/brainbees/images/products/zoom/15302562a.jpg"
},
{
    name:"Fevicryl Multi Surface Pastel Acrylic Colours Kit 6 Shades X 15Ml",
    url: "https://www.flipkart.com/fevicryl-multi-surface-pastel-acrylic-colours-kit-6-x-15ml-ideal-artists/p/itm2e4e1601546e2?pid=PTSGQUSYXVNJVSTQ&lid=LSTPTSGQUSYXVNJVSTQJSAUVX&marketplace=FLIPKART&cmpid=content_paint_8965229628_gmc",
    price: "₹150",
    site: "Flipkart",
    imageUrl: "https://cdn.fcglcdn.com/brainbees/images/products/zoom/15302562a.jpg"
},
{
    name:"Allen Solly White Cotton Slim Fit Shirt",
    url: "https://www.amazon.in/Allen-Solly-Geometric-Regular-ASSFWMOFO48848_White_42/dp/B07DMQRD6F/ref=sr_1_5?crid=Z6COLQ1QRYY9&dib=eyJ2IjoiMSJ9.EJKCVZpikKsfaXXY-Z0Wq0a2gMkkNgd3fZIKvWPSRi90ubxfguRqOnvIHiB1b9IaE1zn1Z-MaGBAkF-jWGRMjEFsesOMdFZu0AGFFVf2pPkC8VQoBZI5ibRS8P-48hHI_ruayVTXe-eav2U-DFR3S9QiVzk8GYRaZYRUn1ALH1ZzaO-FwP5tm6nLgsv7yS93yMFNxLdXzcb5pLcHBPvY2mOq3IoBBIAh0bpvy13d7MeGnGUooAcLchH-J-K3HXw1eKG5xuLBIhbcbeRhSZbaEEFZhWg728uA8yNjRaS9C14.oh5tnRNa_IUOSE98rD9qiDyUlE8SAKrh3M21z5fbN5o&dib_tag=se&keywords=rare+rabbit+white+shirts+for+men&qid=1719054717&sprefix=rare+rabbit+white+shirts+for+men%2Caps%2C234&sr=8-5",
    price: "₹869",
    site: "Amazon",
    imageUrl: "https://m.media-amazon.com/images/I/71hfutLZZ7L._SY879_.jpg"
},
{
    name:"Allen Solly White Cotton Slim Fit Shirt",
    url: "https://www.tatacliq.com/allen-solly-white-slim-fit-shirt/p-mp000000018808916?cid=ps:Mall_Google_Perf_Shopping_Sok_21127196596_Apparel__Men&gad_source=4&gclid=CjwKCAjw7NmzBhBLEiwAxrHQ-eeQOwxaDx6dwF1OhCc8To-1NIrA60k3sQKA1ZXDgnEVmRfDZDPndhoCkQ0QAvD_BwE",
    price: "₹1499",
    site: "TataCLIQ",
    imageUrl: "https://m.media-amazon.com/images/I/71hfutLZZ7L._SY879_.jpg"
},
{
    name:"Allen Solly White Cotton Slim Fit Shirt",
    url: "https://www.lifestylestores.com/in/en/SHOP-Allen-Solly-White-ALLEN-SOLLY-Men-Solid-Slim-Fit-Shirt/p/1000013843032?gad_source=4&gclid=CjwKCAjw7NmzBhBLEiwAxrHQ-RglZTTQKMe_HHIq1k3luT-wviZcv-MQOcD6whn58fRiP60ll0DCURoCPJsQAvD_BwE",
    price: "₹2849",
    site: "LifeStyle",
    imageUrl: "https://m.media-amazon.com/images/I/71hfutLZZ7L._SY879_.jpg"
},
    ];
    form.addEventListener('submit', (e) => {
        e.preventDefault();
        const input = document.getElementById('searchInput').value.trim().toLowerCase();
        
        if (input === "") {
            alert("Please enter a product name.");
        } else {
            const filteredProducts = products.filter(product => product.name.toLowerCase().includes(input));
            if (filteredProducts.length > 0) {
                searchResult.innerHTML = '<h2>Search Results:</h2>';
                filteredProducts.forEach(product => {
                    searchResult.innerHTML += `
                        <div class="product">
                            <a href="${product.url}" target="_blank">
                                <img src="${product.imageUrl}" alt="${product.name}">
                            </a>
                            <p>${product.site}: ${product.price}</p>
                        </div>
                    `;
                });
                displaySuggestedProduct(filteredProducts);
            } else {
                searchResult.innerHTML = '<h2>No products found.</h2>';
                suggestedProductContainer.innerHTML = ''; 
            }
        }
    });
    
    const displaySuggestedProduct = (filteredProducts) => {
        const parsePrice = (price) => parseFloat(price.replace(/[^\d.-]/g, ''));
        const suggestedProduct = filteredProducts.reduce((min, product) => parsePrice(product.price) < parsePrice(min.price) ? product : min, filteredProducts[0]);
    
        if (suggestedProduct) {
            suggestedProductContainer.innerHTML = `
                <div class="suggested-product">
                    <h2>We found a suggestion for you:</h2>
                    <a href="${suggestedProduct.url}" target="_blank">
                        <img src="${suggestedProduct.imageUrl}" alt="${suggestedProduct.name}">
                        <p>${suggestedProduct.name}</p>
                        <p>${suggestedProduct.site}: ${suggestedProduct.price}</p>
                    </a>
                </div>
            `;
        } else {
            suggestedProductContainer.innerHTML = '<h2>No suggested products found.</h2>';
        }
    };
    
});
    