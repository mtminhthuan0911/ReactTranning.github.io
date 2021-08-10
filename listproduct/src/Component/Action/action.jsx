import { List_Product , Add_To_Cart ,Tang_Giam_So_Luong , Xoa_San_Pham } from "../Type/type"

export const ListProduct = () => ({
    type: List_Product,
    
})

export const AddToCart = (spGioHang) => ({
    type: Add_To_Cart,
    spGioHang
})

export const Plus = (index, tanggiam) => ({
    type: Tang_Giam_So_Luong,
    index ,
    tanggiam
})

export const Xoa = (Masp) => ({
    type: Xoa_San_Pham,
    Masp
})