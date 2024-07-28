import { CircleDashed, UserCog } from "lucide-react";
import { Button } from "../../components/button";

interface GuestsProps{
    Email: string[]
}

export function Guests({
    Email
}:GuestsProps) {

    return(
        <div className="space-y-6" >
            <h2 className="font-semibold text-xl">Convidados</h2>

            <div className="space-y-5">
                {Email && Email.length > 0 && (
                    <div>
                        {Email.map((email, index) => (
                            <div key={index} className="flex items-center justify-between gap-4 space-y-4" >
                                <span className="block text-zinc-100 font-medium">{email}</span>
                                <CircleDashed className="size-5 text-zinc-400 shrink-0"/>
                            </div>
                        ))}
                    </div>
                )}
            </div>

            <Button  variant="secondary" size="full" >
                <UserCog className='size-6 '/>
                Gerenciar convidados
            </Button>
            </div>
    )
}