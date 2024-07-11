import { MapPin, Calendar, ArrowRight, Settings2 } from 'lucide-react'
import { Button } from '../../../components/button'

interface DestinationAndDateStepProps{
    isInputOpen: boolean
    openInput: () => void
}

export function DestinationAndDateStep({
isInputOpen,
openInput
} : DestinationAndDateStepProps) {
    


    return(
        <div className="h-16 bg-zinc-900 px-4 rounded-xl flex items-center shadow-shape gap-3">

            <div className='flex items-center gap-2 flex-1'>
              <MapPin className='size-5 text-zinc-400'/>
              <input disabled={isInputOpen} type="text" placeholder="Para onde você vai?" className="bg-transparent text-lg placeholder-zinc-400 outline-none"/>
            </div>

            <div className='flex items-center gap-2'>
              <Calendar className='size-5 text-zinc-400'/>
              <input disabled={isInputOpen} type="text" placeholder="Quando?" className="bg-transparent text-lg placeholder-zinc-400 outline-none w-40"/>
          </div>

          <div className='w-px h-6 bg-zinc-800'/>

          {isInputOpen ? (
            <Button onClick={openInput} variant='secondary' size='default' >
              Alternar data/local
              <Settings2 className='size-6'/>
          </Button>
          ) : (
            <Button onClick={openInput} variant='primary' >
             Continuar
            <ArrowRight className='size-5' />
          </Button>
          )}

        </div>
    )
}