// const initialState = ["hi"]
const initialState = []


export const myreducers = (state = initialState, action) => {
    switch (action.type) {
        case "addItem":
            return state = [...state, action.payload]

        case "deleteItem":
            const id = action.payload;
            return state.filter((item) => item.id !== id);
        case "emparr":
            return state = initialState;



        // case "cart":
        //     const ide = action.payload2;
        //     const tot = action.payload;
        //     const updatedState = state.map((p) => {
        //         if (p.id === ide) {
        //             return {
        //                 ...p,
        //                 total: tot,
        //             }
        //         }
        //         return p;
        //     })
        //     return updatedState



        // case "tot":

        // const selectedId = parseInt(action.id);
        // const total = action.payload
     
        // return state.map((i)=>i.id === selectedId ? {...i,total:total}: i);
   
            // case "tot":
            //     const selectedId = action.id; // Assuming action.id is already a string
            //     const total = action.payload;
              
            //     return state.map((item) =>
            //       item.id === selectedId ? { ...item, price: total } : item
            //     );





                case "tot":
                    const selectedId = action.id; // Assuming action.id is already a string
                    const newPrice = action.payload;
                  
                    return state.map((item) =>
                      item.id === selectedId ? { ...item, total: newPrice } : item
                    );
                  

                // return state=state.map((i)=> 
        // {
        //     if(i.id === selectedId){
        //         i.map((i)=> i.price =total)
        //     }
        // })
        
        // // i.id === selectedId).map((i)=> i.price = total)



        default:
            return state;

    }

}

const total = 0

export const reducer2 = (state = total, action) => {
    switch (action.type) {

        case "cart":

            const selectedId = parseInt(action.id);
            const filprice= state.filter((i)=> i.id === selectedId).map((i)=> i.price = total)








            return state + action.payload;
        default:
            return state;
    }
}