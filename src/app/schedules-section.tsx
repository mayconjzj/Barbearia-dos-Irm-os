import { Sanctuarium } from '@/config/sanctuarium';

import { Card } from '@/components/ui/Card';
import { CardContent } from '@/components/ui/Card/card-content';

export const SchedulesSection = () => {
  return (
    <section
      id="schedules"
      className="space-y-3 py-4 min-h-[100vh] flex flex-col justify-center border-b-[0.5px] border-border"
    >
      <h2 className="text-3xl font-black">{Sanctuarium.schedules.name}</h2>

      <div className="space-y-12">
        <div className="flex gap-3 justify-evenly flex-wrap">
          {Sanctuarium.schedules.schedules.map((schedule) => (
            <Card.Root
              key={schedule.day}
              className="w-36 h-52 flex flex-col justify-center gap-y-6
              text-center"
            >
              <Card.Title>{schedule.day}</Card.Title>
              {schedule.open && (
                <Card.Content>
                  <p>{schedule.morning}</p>
                  <span className="font-light text-muted">E</span>
                  <p>{schedule.afternoon}</p>
                </Card.Content>
              )}
              {!schedule.open && <p className="text-muted">Fechado</p>}
            </Card.Root>
          ))}
        </div>

        <Card.Root className="px-4 h-36 flex gap-x-3 flex-wrap justify-center items-center">
          <Card.Title className="text-md">AGENDE SEU HORÁRIO</Card.Title>
          <CardContent className="flex gap-x-2">
            {Sanctuarium.contact.whatsapp.icon(24)}
            <p>{Sanctuarium.contact.phone.href}</p>
          </CardContent>
        </Card.Root>
      </div>
    </section>
  );
};
