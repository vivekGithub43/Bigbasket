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
    quantity:number;

constructor(){
    this.productId=0
    this.productSku='',
    this.productName='',
    this.productPrice=0,
    this.productShortName='',
    this.productDescription=''
    this.createdDate=new Date(),
    this.deliveryTimeSpan='',
    this.categoryId=0,
    this.productImageUrl='',
    this.categoryName='' ,
    this.quantity=1
}   

}
export interface Category {
    categoryId:       number;
    categoryName:     string;
    parentCategoryId: number;
    userId:           null;
}
export interface CATEGORIES {
    categoryId:       number;
    categoryName:     string;
    parentCategoryId: number;
    userId:           null;
}
export class registerObject {
    CustId: number;
    Name: string;
    MobileNo: string;
    Password: string;
  
    constructor() {
      this.CustId = 0;
      this.Name = '';
      this.MobileNo = '';
      this.Password = '';
    }
  }
export class LoginFormObj {
    UserName:string;
    UserPassword:string;

    constructor(){
        this.UserName='';
        this.UserPassword='';
    }
}  
export interface loggedinCustomer{
custId?:0;
mobileNo?:'number';
name?:'string';
password?:'string';
}