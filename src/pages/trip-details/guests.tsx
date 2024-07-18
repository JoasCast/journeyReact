import { CheckCircle2, CircleDashed, UserCog } from "lucide-react";
import { Button } from "../../components/button";
import { useEffect, useState } from "react";
import { api } from "../../lib/axios";
import { useParams } from "react-router-dom";

interface Participant {
    id: string
    name: string | null
    email: string
    isconfirmed: boolean
}

export function Guests() {
    
    const { tripId } = useParams()
    const [participants, setParticipants] = useState<Participant[]>([])

    useEffect(() => {
        api.get(`/trips/${tripId}/participants`).then(response => setParticipants(response.data.participants))
    }, [ tripId ])

    return(
        <div className="space-y-6" >
            <h2 className="font-semibold text-xl">Convidados</h2>

            <div className="space-y-5">
                { participants.map(participant => {
                    return(
                        <div key={participant.id} className="flex items-center justify-between gap-4">

                    <div className="space-y-1.5">
                        <span className="block text-zinc-100 font-medium">{participant.name}</span>
                        <span className="block text-sm text-zinc-400 truncate">{participant.email}</span>
                    </div>
                    { participant.isconfirmed ? (
                        <CheckCircle2 className="size-5 text-lime-300 shrink-0" />
                    ) : (
                        <CircleDashed className="size-5 text-zinc-400 shrink-0"/>
                    ) }

                </div>
                    )
                }) }
            </div>

            <Button  variant="secondary" size="full" >
                <UserCog className='size-6 '/>
                Gerenciar convidados
            </Button>
            </div>
    )
}