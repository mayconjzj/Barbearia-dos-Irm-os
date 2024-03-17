import { Sanctuarium } from '@/config/sanctuarium';

export const SchedulesSection = () => {
  return (
    <section
      id="schedules"
      className="space-y-3 min-h-[100vh] flex flex-col justify-center border-b-[0.5px] border-border"
    >
      <h2 className="text-3xl font-black">Horários</h2>

      <div className="space-y-12">
        <div className="flex gap-3 justify-evenly flex-wrap">
          <div className="border-[0.5px] border-border w-36 h-52 flex flex-col justify-center gap-y-6 duration-300 hover:border-foreground text-center">
            <h3 className="text-2xl font-bold">SEG</h3>
            <div>
              <p>08:00 - 12:00</p>
              <span className="font-light text-muted">E</span>
              <p>14:00 - 18:00</p>
            </div>
          </div>

          <div className="border-[0.5px] border-border w-36 h-52 flex flex-col justify-center gap-y-6 duration-300 hover:border-foreground text-center">
            <h3 className="text-2xl font-bold">TER</h3>
            <div>
              <p>08:00 - 12:00</p>
              <span className="font-light text-muted">E</span>
              <p>14:00 - 18:00</p>
            </div>
          </div>

          <div className="border-[0.5px] border-border w-36 h-52 flex flex-col justify-center gap-y-6 duration-300 hover:border-foreground text-center">
            <h3 className="text-2xl font-bold">QUA</h3>
            <div>
              <p>08:00 - 12:00</p>
              <span className="font-light text-muted">E</span>
              <p>14:00 - 18:00</p>
            </div>
          </div>

          <div className="border-[0.5px] border-border w-36 h-52 flex flex-col justify-center gap-y-6 duration-300 hover:border-foreground text-center">
            <h3 className="text-2xl font-bold">QUI</h3>
            <div>
              <p>08:00 - 12:00</p>
              <span className="font-light text-muted">E</span>
              <p>14:00 - 18:00</p>
            </div>
          </div>

          <div className="border-[0.5px] border-border w-36 h-52 flex flex-col justify-center gap-y-6 duration-300 hover:border-foreground text-center">
            <h3 className="text-2xl font-bold">SEX</h3>
            <div>
              <p>08:00 - 12:00</p>
              <span className="font-light text-muted">E</span>
              <p>14:00 - 18:00</p>
            </div>
          </div>

          <div className="border-[0.5px] border-border w-36 h-52 flex flex-col justify-center gap-y-6 duration-300 hover:border-foreground text-center">
            <h3 className="text-2xl font-bold">SAB</h3>
            <div>
              <p>08:00 - 12:00</p>
              <span className="font-light text-muted">E</span>
              <p>14:00 - 18:00</p>
            </div>
          </div>

          <div className="border-[0.5px] border-border w-36 h-52 flex flex-col justify-center gap-y-6 duration-300 hover:border-foreground text-center">
            <h3 className="text-2xl font-bold">DOM</h3>
            <div>
              <p>FECHADO</p>
            </div>
          </div>
        </div>

        <div className="border-[0.5px] border-border duration-300 hover:border-foreground px-4 h-36 flex gap-x-3 flex-wrap justify-center items-center">
          <h3 className="font-bold">AGENDE SEU HORÁRIO</h3>
          <div className="flex gap-x-2">
            {Sanctuarium.contact.whatsapp.icon(24)}
            <p>{Sanctuarium.contact.phone.href}</p>
          </div>
        </div>
      </div>
    </section>
  );
};
