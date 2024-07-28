import { Plus } from "lucide-react";
import { FormEvent, useState } from "react";
import { CreatActiveModal } from "./create-active-modal";
import { ImportanteLinks } from "./importante-links";
import { Guests } from "./guests";
import { Actives } from "./actives";
import { DestinationAndDateHeaader } from "./destination-and-date-header";

import { useLocation } from "react-router-dom";

export function TripDetailspage() {

    const [isCreateModalOpen, setCreateModalOpen] = useState(false)

    const location = useLocation();
    const { Destino, Data, Email} = location.state || {};


    function openCreateModal(){
        if(isCreateModalOpen == false){
            setCreateModalOpen(true)
        }else(
            setCreateModalOpen(false)
        )
    }

    const [activities, setActivities] = useState<{ title: string, occurs_at: string }[]>([]);

  function createActivity(event: FormEvent<HTMLFormElement>) {
    event.preventDefault()

    const data = new FormData(event.currentTarget)

    const title = data.get('title')?.toString() || '';
    const occurs_at = data.get('occurs_at')?.toString() || '';

    const newActivity = { title, occurs_at };

    setActivities(prevActivities => {
      const updatedActivities = [...prevActivities, newActivity];
      return updatedActivities;
    });

    openCreateModal()

  }

    return(
        
        <div className="max-w-6xl px-6 py-10 mx-auto space-y-8">
            <DestinationAndDateHeaader
                Destino={Destino}
                Data={Data}
            />

            <main className="flex gap-16 px-4">
                <div className="flex-1 space-y-6">
                    <div className="flex items-center justify-between">
                        <h2 className="text-3xl font-semibold" >Atividades</h2>
                        <button onClick={openCreateModal} className='bg-lime-300 text-lime-950 rounded-lg px-5 py-2 font-medium flex items-center gap-2 hover:bg-lime-400' >
                            <Plus className='size-5' />
                            Cadastrar atividade
                        </button>
                    </div>

                    <Actives
                     activities={activities}
                    />

                </div>

                <div className="w-80 space-y-6">

                    
                    <ImportanteLinks/>

                    <div className='w-full bg-zinc-800 h-px' />

                    <Guests
                        Email={Email }
                    />

                </div>
            </main>

            {isCreateModalOpen && (
                <CreatActiveModal
                    openCreateModal={openCreateModal}
                    onSubmit={createActivity}
                />
            )}
        </div>
    )
}