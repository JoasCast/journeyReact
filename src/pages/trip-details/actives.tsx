import { CircleCheck } from "lucide-react";
import { format, parseISO } from "date-fns";
import { ptBR } from "date-fns/locale";

interface ActivesProps{
    activities: { title: string, occurs_at: string }[];
}

export function Actives({
        activities
} : ActivesProps) {

    const groupedActivities = activities.reduce((acc, activity) => {
        const date = format(parseISO(activity.occurs_at), 'yyyy-MM-dd');
        if (!acc[date]) {
          acc[date] = [];
        }
        acc[date].push(activity);
        return acc;
      }, {} as Record<string, { title: string, occurs_at: string }[]>);
    
      return (
        <div className="space-y-8">
          {Object.keys(groupedActivities).map(date => (
            <div key={date} className="space-y-2.5">
              <div className="flex gap-2 items-baseline">
                <span className="text-xl text-zinc-300 font-semibold">
                  {format(parseISO(date), 'd')}
                </span>
                <span className="text-xs text-zinc-500">
                  {format(parseISO(date), 'EEEE', { locale: ptBR })}
                </span>
              </div>
              <div className="space-y-2.5">
                {groupedActivities[date].map(activity => (
                  <div key={activity.occurs_at} className="px-4 py-2.5 bg-zinc-900 rounded-xl shadow-shape flex items-center gap-3">
                    <CircleCheck className="size-5 text-lime-300" />
                    <span className="text-zinc-100">{activity.title}</span>
                    <span className="text-zinc-400 text-sm ml-auto">
                      {format(parseISO(activity.occurs_at), 'HH:mm')}
                    </span>h
                  </div>
                ))}
              </div>
            </div>
          ))}
          {activities.length === 0 && (
            <p className="text-zinc-500 text-sm">Nenhuma atividade cadastrada</p>
          )}
        </div>
      );
    }