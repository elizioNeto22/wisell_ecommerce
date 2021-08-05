export type ProductCategory = 'Clothing' | 'Shoes' | 'Watches' | 'Accessories'
export type Product = {
    id: string
    title: string
    description: string
    imageUrl : string
    imageRef : string
    imageFileName : string
    price: number
    category : string //ProductCategory
    inventory : number
}

/*creator: string
createdAt: string //firebase.firestore.Timestamp
UpdatedAt?: string //firebase.firestore.Timestamp
*/