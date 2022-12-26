export const About: React.FC = () => {
  return (
    <section className="flex flex-col min-h-[calc(100vh_-_80px)] p-4">
      <div className="mb-4">
        <h2 className="text-white text-5xl">Acerca de mi</h2>
      </div>
      <div className="flex flex-col gap-2">
        <p className="text-white text-lg font-light tracking-[1px]">
          Desde pequeño, apasionado por el mundo de la tecnología, el hardware y
          más adelante, del software.
        </p>
        <p className="text-white text-lg font-light tracking-[1px]">
          Cuando niño, quise desarrollar mi propio videojuego, por lo que desde
          muy temprano en mi vida, me cruce con el mundo de la programación.
          Haciendo cosas básicas en C# junto al motor grafico (Unity). Desde
          esos momentos, fue que me atrajo el software y la programación, sin
          siquiera, conocer conceptos básicos como variables, funciones,
          objetos, etc.
        </p>
        <p className="text-white text-lg font-light tracking-[1px]">
          Al pasar los años, pase por C# que lo utilizaba en Unity, programando
          cositas básicas. Más adelante, pase por C++, haciendo ejercicios de
          lógica en aplicaciones de consola, hasta que conocí el mundo del
          desarrollo web, donde comencé a aprender JavaScript, y todo lo demás.
        </p>
        <p className="text-white text-lg font-light tracking-[1px]">
          Saludos, mi nombre es Tomás Cuevas, y lo anterior, fue una acotada
          ruta de mi vida, en la introducción al mundo del desarrollo de
          software.
        </p>
      </div>
    </section>
  );
};
