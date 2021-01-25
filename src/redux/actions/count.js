export const adjustCount = type => ({type, data: 1})
export const adjustAsync = (type, time) => ((dispatch)=>{
    setTimeout(() => {
        dispatch(adjustCount(type))
    }, time)
})