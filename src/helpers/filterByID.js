import { data } from "../data";
export const filterByID = (id) => {
    const item = data.filter( item => item.id === id)
     return item[0];
}