'use client'

export default function InteractiveCard({children,dentName}:{children:React.ReactNode,dentName:string}){
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
        <div className="w-full h-auto flex flex-row align-items-center rounded-2xl shadow-amber-600 shadow-lg bg-white justify-items-center" 
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