export function Detail ({detail, setIds}){
    if(detail===undefined){
        return
    }
    if(detail==='loading'){
        return(
            <p>loading...</p>
        )
    }
    setIds(detail.id);
    return(
        <div className="detail">
            <img src={detail.avatar} alt="" />
            <p>{detail.name}</p>
            <p>city:{detail.details.city}</p>
            <p>company:{detail.details.company}</p>
            <p>position:{detail.details.position}</p>
        </div>
    )
}