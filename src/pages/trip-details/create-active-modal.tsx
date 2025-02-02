import { Calendar, Tag, X } from "lucide-react";
import { Button } from "../../components/button";
import { FormEvent } from "react";

interface CreatActivemodalProps{
    openCreateModal: () => void;
    onSubmit: (event: FormEvent<HTMLFormElement>) => void;
}

export function CreatActiveModal({
    openCreateModal,
    onSubmit
} : CreatActivemodalProps) {

  
    
    return(
        <div className='fixed inset-0 bg-black/60 flex items-center justify-center'>

                <div className='w-[640px] rounded-xl py-5 px-6 shadow-shape bg-zinc-900 space-y-5'>
                
                  <div className='space-y-2'>
                    <div className='flex items-center justify-between'>
                      <h2 className='text-lg font-semibold'>Cadastrar atividade</h2>
                      <button type="button" onClick={openCreateModal}>
                        <X className='size-5 text-zinc-400' />
                      </button>
                    </div>
                    <p className='text-sm text-zinc-400'>Todos os convidados podem visualizar as Atividades.</p>
                  </div>
                
                    <form id="activityForm" onSubmit={onSubmit} className='space-y-3'>
                      <div className='h-14 px-4 bg-zinc-950 border border-zinc-800 rounded-lg flex items-center gap-2'>
                        <Tag className='text-zinc-400 size-5'/>
                        <input  name='title'
                        placeholder="Qual a atividade?"
                        className="bg-transparent text-lg placeholder-zinc-400 outline-none flex-1"/>
                      </div>
                
                      <div className="flex items-center gap-2">
                        <div className='flex-1 h-14 px-4 bg-zinc-950 border border-zinc-800 rounded-lg flex items-center gap-2'>
                            <Calendar className='text-zinc-400 size-5'/>
                            <input  type="datetime-local" 
                            name='occurs_at'
                            placeholder="Data e hora da atividade"
                            className="bg-transparent text-lg placeholder-zinc-400 outline-none flex-1"/>
                        </div>
                      </div>

                      <Button type="submit" variant="primary" size="full">
                        Salvar atividade
                      </Button>

                    </form>
                  </div>
                
                </div>
    )
}