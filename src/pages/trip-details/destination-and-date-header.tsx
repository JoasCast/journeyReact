import { Calendar, MapPin, Settings2 } from "lucide-react";
import { Button } from "../../components/button";
import { useNavigate } from "react-router-dom";

interface DestinationAndDateHeaaderProps{
    Destino: string
    Data: string
}

export function DestinationAndDateHeaader({
    Destino,
    Data
}: DestinationAndDateHeaaderProps) {

    const navigate = useNavigate()
    function AlterarLocalData() {
        navigate('/')
    }

    return(
        <div className="px-4 h-16 rounded-xl bg-zinc-900 shadow-shape flex items-center justify-between">
                <div className="flex items-center gap-2" >
                    <MapPin className="size-5 text-zinc-400" />
                    <span className=" text-zinc-100" >{Destino}</span>
                </div>

                <div className="flex items-center gap-5">
                    <div className="flex items-center gap-2" >
                        <Calendar className="size-5 text-zinc-400" />
                        <span className=" text-zinc-100" >{ Data }</span>
                    </div>

                    <div className='w-px h-6 bg-zinc-800'/>
                    
                    <Button onClick={AlterarLocalData} variant="secondary">
                        Alternar data/local
                        <Settings2 className='size-6'/>
                    </Button>
                </div>
            </div>
    )
}