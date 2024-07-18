import { Plus } from "lucide-react";
import { useState } from "react";
import { CreatActiveModal } from "./create-active-modal";
import { ImportanteLinks } from "./importante-links";
import { Guests } from "./guests";
import { Actives } from "./actives";
import { DestinationAndDateHeaader } from "./destination-and-date-header";

export function TripDetailspage() {

    const [isCreateModalOpen, setCreateModalOpen] = useState(false)


    function openCreateModal(){
        if(isCreateModalOpen == false){
            setCreateModalOpen(true)
        }else(
            setCreateModalOpen(false)
        )
    }


    return(
        <div className="max-w-6xl px-6 py-10 mx-auto space-y-8">

            <DestinationAndDateHeaader/>

            <main className="flex gap-16 px-4">
                <div className="flex-1 space-y-6">
                    <div className="flex items-center justify-between">
                        <h2 className="text-3xl font-semibold" >Atividades</h2>
                        <button onClick={openCreateModal} className='bg-lime-300 text-lime-950 rounded-lg px-5 py-2 font-medium flex items-center gap-2 hover:bg-lime-400' >
                            <Plus className='size-5' />
                            Cadastrar atividade
                        </button>
                    </div>

                    <Actives/>

                </div>

                <div className="w-80 space-y-6">

                    
                    <ImportanteLinks/>

                    <div className='w-full bg-zinc-800 h-px' />

                    <Guests/>

                </div>
            </main>

            {isCreateModalOpen && (
                <CreatActiveModal
                    openCreateModal={openCreateModal}
                />
            )}
        </div>
    )
}