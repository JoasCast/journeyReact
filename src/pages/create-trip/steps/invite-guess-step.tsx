import { ArrowRight, UserRoundPlus } from 'lucide-react'
import { Button } from '../../../components/button'

interface InviteGuessModalProps{
    openModal: () => void
    emailInvite: string[]
    openConfirmTravel: () => void
}

export function InviteGuessStep({
    emailInvite,
    openModal,
    openConfirmTravel
} : InviteGuessModalProps) {
    

    return(
        <div className="h-16 bg-zinc-900 px-4 rounded-xl flex items-center shadow-shape gap-3">

          <button type='button' onClick={openModal} className='flex items-center gap-2 flex-1'>
            <UserRoundPlus className='size-5 text-zinc-400'/>
            {emailInvite.length > 0 ? (
              <span className="text-lg text-zinc-100 outline-none flex-1 text-left">{emailInvite.length} pessoa(s) convidada(s)</span>
            ) : (
              <span className="text-lg text-zinc-400 outline-none flex-1 text-left">Quem estará na viagem?</span>
            )}
          </button>

          <Button onClick={openConfirmTravel} variant='primary' >
            Confirmar viagem
            <ArrowRight className='size-5' />
          </Button>

          </div>
    )
}