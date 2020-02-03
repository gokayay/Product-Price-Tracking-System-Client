// The file contents for the current environment will overwrite these during build.
// The build system defaults to the dev environment which uses `environment.ts`, but if you do
// `ng build --env=prod` then `environment.prod.ts` will be used instead.
// The list of which env maps to which file can be found in `.angular-cli.json`.

export const environment = {
  production: false,

  productUrl: 'http://localhost:8081/product',
  productSearchUrl: 'http://localhost:8081/product/product-search',
  priceUrl: 'http://localhost:8081/price',
  //priceSearchUrl: 'http://localhost:8081/price/price-search',
  productAddressUrl: 'http://localhost:8081/productaddress',
  productAddressSearchUrl:'http://localhost:8081/productaddress/product-address-search',
  siteUrl: 'http://localhost:8081/site',
  siteSearchUrl: 'http://localhost:8081/site/site-search'

};
