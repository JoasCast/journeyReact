import { MapPin, Calendar, ArrowRight, Settings2, X } from 'lucide-react'
import { Button } from '../../../components/button'
import { useState } from 'react'

import { DateRange, DayPicker } from 'react-day-picker'
import "react-day-picker/dist/style.css";
import { format } from 'date-fns';

interface DestinationAndDateStepProps{
    isInputOpen: boolean
    openInput: () => void
    setDestination: (destination : string) => void
    isDateStarts: DateRange | undefined
    setIsDateStarts: (dates : DateRange | undefined) => void
}

export function DestinationAndDateStep({
isInputOpen,
openInput,
setDestination,
isDateStarts,
setIsDateStarts
} : DestinationAndDateStepProps) {
    
  const [isDatePickerOpen, setIsDatePickerOpen] = useState(false)  
  
  const displayeDate = isDateStarts && isDateStarts.from && isDateStarts.to 
  ? format(isDateStarts.from, "d ' de ' LLL").concat(' até ').concat(format(isDateStarts.to, "d ' de ' LLL")) : null; 

function OpenDatePicker() {
  if (isDatePickerOpen == false) {
    setIsDatePickerOpen(true)
  }else{
    setIsDatePickerOpen(false)
  }
}

    return(
        <div className="h-16 bg-zinc-900 px-4 rounded-xl flex items-center shadow-shape gap-3">

            <div className='flex items-center gap-2 flex-1'>
              <MapPin className='size-5 text-zinc-400'/>
              <input 
              disabled={isInputOpen} 
              type="text" 
              placeholder="Para onde você vai?" 
              className="bg-transparent text-lg placeholder-zinc-400 outline-none"
              onChange={event => setDestination(event.target.value)}
              />
            </div>

            <button onClick={OpenDatePicker} disabled={isInputOpen} className='flex items-center gap-2 text-left w-[240px]' >
              <Calendar className='size-5 text-zinc-400'/>
              <span className="text-lg text-zinc-400 w-40 flex-1">
                { displayeDate || 'Quando?' }
              </span>
          </button>

        {isDatePickerOpen && (
          <div className='fixed inset-0 bg-black/60 flex items-center justify-center'>

            <div className=' rounded-xl py-5 px-6 shadow-shape bg-zinc-900 space-y-5'>
            
              <div className='space-y-2'>
                <div className='flex items-center justify-between'>
                  <h2 className='text-lg font-semibold'>Selecione a data</h2>
                  <button onClick={OpenDatePicker}>
                    <X className='size-5 text-zinc-400' />
                  </button>
                </div>
              </div>
              <DayPicker mode="range" selected={isDateStarts} onSelect={setIsDateStarts} />
            </div>

          </div>
        )}

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