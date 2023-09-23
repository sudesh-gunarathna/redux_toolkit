import { addDrink, buyDrink } from "./redux/features/drink/drinkSlice";
import { addFruit, buyFruit } from "./redux/features/fruit/fruitSlice";
import { addPharmacyItem, buyPharmacyItem } from "./redux/features/pharmacy/pharmacySlice";
import { fetchTodos } from "./redux/features/todo/todoSlice";
import store from "./redux/store";

console.log(store.getState())
const unSub = store.subscribe(()=>{
  console.log(store.getState())

})
store.dispatch(buyFruit(10));
store.dispatch(addFruit());

store.dispatch(buyDrink());
store.dispatch(addDrink(20));
store.dispatch(fetchTodos());

//store.dispatch(buyPharmacyItem(30));
//store.dispatch(addPharmacyItem(99));

unSub();