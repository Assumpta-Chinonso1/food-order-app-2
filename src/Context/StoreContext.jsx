import { createContext } from "react";
import { food_lists } from "../assets/assests";

export const StoreContext = createContext(null)

const StoreContextProvider = (props) => {
    const contextValue ={
          food_lists
    }
    return(
        <StoreContext.Provider value={contextValue}>
              {props.children}
        </StoreContext.Provider>
    )
}
export default StoreContextProvider
