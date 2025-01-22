 export interface Product {
    _id : string ;
    productName : string;
    _type : "product";
    image? : {
        asset : {
            _ref : string;
            _type : "image" ;
        }
    };
    price : number;
    descriptrion? : string;
    slug : {
        _type : "slug"
        current : string;
    }
 }