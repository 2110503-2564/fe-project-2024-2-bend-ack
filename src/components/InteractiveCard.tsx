'use client'

export default function InteractiveCard({children,venueName}:{children:React.ReactNode,venueName:string}){
    function mouseHover(event:React.SyntheticEvent){
        if(event.type=='mouseover'){
            event.currentTarget.classList.remove("shadow-lg");
            event.currentTarget.classList.add("shadow-2xl");
            event.currentTarget.classList.remove("bg-white");
            event.currentTarget.classList.add("bg-neutral-200");

        }
        else{
            event.currentTarget.classList.add("shadow-lg");
            event.currentTarget.classList.remove("shadow-2xl");
            event.currentTarget.classList.remove("bg-neutral-200");
            event.currentTarget.classList.add("bg-white");
        }
    }
    return(
        <div className="w-full h-[300px] rounded-lg shadow-amber-600 shadow-lg bg-white" 
        // onClick={(e)=>{
        //     e.stopPropagation(); 
        //     compareFunction(venueName);
        // }}
        onMouseOver={(e)=>mouseHover(e)}
        onMouseOut={(e)=>mouseHover(e)}>
            {children}
        </div>
    )
}