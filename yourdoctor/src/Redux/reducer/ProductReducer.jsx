import Product from '../../Data/Product.json';
import Doctor from '../../Data/Doctor.json';
import Testimonial from '../../Data/Testimonial.json'
const initialState = {
    SanPham : Product ,
    BacSi : Doctor,
    User : Testimonial
}

export default (state = initialState, action) => {
    switch (action.type) {

    default:
        return state
    }
}
