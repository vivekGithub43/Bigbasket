export interface APIRESPONSE{
    data:any;
    result:boolean;
    message:string;

}
export class Products {
    productId:          number;
    productSku:         string;
    productName:        string;
    productPrice:       number;
    productShortName:   string;
    productDescription: string;
    createdDate:        Date;
    deliveryTimeSpan:   string;
    categoryId:         number;
    productImageUrl:    string;
    categoryName:       string;

constructor(){
    this.productId=1
    this.productSku='',
    this.productName='',
    this.productPrice=0,
    this.productShortName='',
    this.productDescription=''
    this.createdDate=new Date(),
    this.deliveryTimeSpan='',
    this.categoryId=0,
    this.productImageUrl='',
    this.categoryName='' 
}   

}
export interface Category {
    categoryId:       number;
    categoryName:     string;
    parentCategoryId: number;
    userId:           null;
}