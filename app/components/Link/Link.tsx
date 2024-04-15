interface LinkType{
    title: string,
    text: string,
    date?: string | null,
}

export default function Link({title,text, date = null}: LinkType){
    return(
        <div>
            <h4>{title}</h4>
            <span>{text}</span>
            {date !== null ? <span>{date}</span> : <></>}
        </div>
    )
}