import { FormEvent, useState } from 'react'
import { useNavigate } from 'react-router-dom';
import { InviteGuessModal } from './invite-guess-model';
import { ConfirmTripsModal } from './confirm-trips-modal';
import { DestinationAndDateStep } from './steps/Destination-and-date-step';
import { InviteGuessStep } from './steps/invite-guess-step';
import { DateRange } from 'react-day-picker';
import { api } from '../../lib/axios';

export function CreateTripPage() {

    const navigate = useNavigate();

  const [isInputOpen, setIsInputOpen] = useState(false);
  const [isModalOpen, setIsModalOpen] = useState(false);
  const [isConfirmTravellOpen, setIsConfirmTravelOpen] = useState(false);
  const [emailInvite, setEmailInvate] = useState([''
  ]);

  const [destination, setDestination] = useState('')
  const [ownerName, setOwnerName] = useState('')
  const [ownerEmail, setOwnerEmail] = useState('')
  const [isDateStarts, setIsDateStarts] = useState <DateRange | undefined> ()

  function openInput(){
    if (isInputOpen === false) {
      setIsInputOpen(true)
    }else{
      setIsInputOpen(false)
    }
  }

  function openModal() {
    if (isModalOpen === false) {
      setIsModalOpen(true)
    }else{
      setIsModalOpen(false)
    }
  }
  

  function addEmail(event : FormEvent<HTMLFormElement>) {
    event.preventDefault()
    const data = new FormData(event.currentTarget)
    const email = data.get('email')?.toString()

    if (!email) {
      return
    }

    if (emailInvite.includes(email)) {
      return
    }

    setEmailInvate([
      ...emailInvite,
      email
    ])

    event.currentTarget.reset()
  }

  function removeEmail(emailToRemove : string) {
    const newEmailList = emailInvite.filter(email => email !== emailToRemove)

    setEmailInvate(newEmailList)
  }

  function openConfirmTravel() {
    if (isConfirmTravellOpen === false) {
      setIsConfirmTravelOpen(true)
    }else{
      setIsConfirmTravelOpen(false)
    }
  }

  async function createTrip( event : FormEvent<HTMLFormElement> ) {

    event.preventDefault()

    console.log(destination)
    console.log(isDateStarts)
    console.log(emailInvite)
    console.log(ownerName)
    console.log(ownerEmail)

    if (!destination) {
      return 
    }

    if (!isDateStarts?.from || !isDateStarts?.to) {
      return 
    }

    if (emailInvite.length === 0) {
      return 
    }

    if (!ownerName || !ownerEmail) {
      return 
    }
    console.log(isDateStarts.from)
    const response = await api.post('/trips', {
      destination,
      starts_at: isDateStarts.from,
      ends_at: isDateStarts.to,
      emails_to_invite: emailInvite,
      owner_name: ownerName,  
      owner_email: ownerEmail
    })
    const { tripId } = response.data
    navigate( `/trips/${tripId}` )
  }
  
  return (
    <div className="h-screen flex items-center justify-center bg-pattern bg-no-repeat bg-center">

      <div className="max-w-3xl w-full px-6 text-center space-y-10">
        
        <div className='flex flex-col items-center gap-3'>
          <img src="/logo.svg" alt="Plann.er" />
          <p className="text-zinc-300 text-lg">Convide seus amigos e planeje sua próxima viagem!</p>
        </div>

        <div className='space-y-4'>
          
          <DestinationAndDateStep
            isInputOpen={isInputOpen}
            openInput={openInput}
            setDestination={setDestination}
            isDateStarts={isDateStarts}
            setIsDateStarts={setIsDateStarts}
          />

          { isInputOpen && (
            <InviteGuessStep
                emailInvite={emailInvite}
                openConfirmTravel={openConfirmTravel}
                openModal={openModal}
            />
          )}
        </div>
        

        <p className="text-sm text-zinc-500">Ao planejar sua viagem pela plann.er você automaticamente concorda <br />
        com nossos <a href="#" className="text-zinc-300 underline">termos de uso</a> e <a href="#" className="text-zinc-300 underline">políticas de privacidade</a>.
        </p>

      </div>

      {isModalOpen && (
        <InviteGuessModal 
            emailInvite={emailInvite}
            addEmail={addEmail}
            removeEmail={removeEmail}
            openModal={openModal}
      />)}

      {isConfirmTravellOpen && (
        <ConfirmTripsModal
            openConfirmTravel={openConfirmTravel}
            createTrip={createTrip}
            setOwnerName={setOwnerName}
            setOwnerEmail={setOwnerEmail}
        />
      )}

  </div>
  )
}

