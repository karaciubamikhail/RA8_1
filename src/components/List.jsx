export function List ({data , click}){
    if(data.length ===0){
        return
    }
    return(
        data.map((element)=>{return(<div onClick={click} key={element.id} id={element.id}>{element.name}</div>)})
    )
}