import { customerKeys } from "./customerKeys";
import { postKeys } from "./postKeys";
import { productKeys } from "./productKeys";
import { userKeys } from "./userKeys";

const queryKeys = {
    posts: {
        ...postKeys
    },
    users: {
        ...userKeys
    },
    products: {
        ...productKeys
    },
    customers: {
        ...customerKeys
    }

}
export default queryKeys;