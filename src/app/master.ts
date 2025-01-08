export interface apiResponse {
message: string,
result: boolean,
data:any
}
export interface Category {
    categoryId: number
    categoryName: string
    parentCategoryId: number
    userId: any
}
