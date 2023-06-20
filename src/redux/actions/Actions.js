export const addItem=(item)=>{
    return{
        type:"addItem",
        payload:item
    }
}

export const deleteItem=(id)=>{
    return{
        type:"deleteItem",
        payload:id
    }
}

export const emparr=()=>{
    return{
        type:"emparr",
    }
}

export const tot=(id,total)=>{
    return{
        type:"tot",
        id:id,
        payload:total,
        
    }
}



  