import Bar from './components/ui/Bar';
import Pill from './components/ui/Pill';

export default function App() {
  return (
    <>
      <div className='bg-softPink'>
        <section className='min-h-dvh w-full flex flex-col items-center justify-center text-center gap-5'>
          <Pill text='COMING SOON <3' />
          <h1 className='text-dark'>
            ¡Hola! <span className='text-primary'>♡</span>
          </h1>
          <h3 className='text-mutedPink w-1/2 text-pretty'>
            Estoy construyendo mi nueva home con mucho cariño y código
            limpio.
          </h3>

          <div className='bg-white w-1/2 max-w-lg py-6 px-7 rounded-lg flex flex-col justify-center mt-6 gap-4'>
            <div className='flex flex-row'>
              <h4 className='w-3/4 text-left'>Progreso del diseño</h4>
              <h4 className='w-1/4 text-right text-primary font-bold'>
                75%
              </h4>
            </div>
            <Bar percent={75} variant='pink' />
            <p className='italic'>
              Actualmente puliendo los detalles de la sección
              "Proyectos"...
            </p>
          </div>
        </section>

        <section className='grid grid-cols-2 gap-8'>
          <div className='bg-white border-softPink border rounded-xl px-8 py-6'>
            <div>
              <h3>⭐ Sobre mí</h3>
            </div>
            <p>
              4 años de experiencia en el ecosistema digital,
              trabajando para proyectos de desarrollo web y soluciones
              tecnológicas.
              <br />
              Me apasiona crear experiencias web claras, funcionales y
              con intención: mi día a día se divide entre la precisión
              del desarrollo en WordPress (especialista en Bricks) y
              la flexibilidad del código puro (JS, PHP, CSS). Además
              cuento con concimientos en analitica web y experiencia
              de usuario (UX/UI) 👋🏼.
            </p>
          </div>
          <div className='bg-primary/20 rounded-xl px-8 py-6 flex flex-col'>
            <h3>Avisame cuando esté listo</h3>
            <p>
              Deja tu correo para recibir una única notificación el
              día del lanzamiento oficial.
            </p>
            <input></input>
            <button>Notificarme</button>
          </div>
        </section>
      </div>
    </>
  );
}
