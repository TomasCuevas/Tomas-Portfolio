export const Hero = () => {
  return (
    <section className="flex flex-col min-h-[calc(100vh_-_80px)] p-4">
      <div className="flex mb-5 justify-center">
        <img
          src="/4x4.jpg"
          alt=""
          className="w-[175px] h-[175px] rounded-full object-cover drop-shadow-md"
        />
      </div>
      <div>
        <h1 className="text-red text-2xl tracking-[1px]">Hola, mi nombre es</h1>
      </div>
      <div className="mb-2">
        <h2 className="text-white text-5xl tracking-[1px]">
          Anselmo Tomás Cuevas.
        </h2>
      </div>
      <div className="mb-8">
        <h3 className="text-red text-5xl tracking-[1px]">
          Navegando por el mundo del desarrollo web
        </h3>
      </div>
      <div>
        <p className="text-white text-lg font-light tracking-[1px]">
          Soy un desarrollador frontend especializado en el ecosistema de
          ReactJs. Evolucionando día con día para crear las mejores experiencias
          para el usuario más demandante.
        </p>
      </div>
    </section>
  );
};
