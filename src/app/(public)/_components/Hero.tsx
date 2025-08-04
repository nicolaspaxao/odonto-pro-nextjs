import { Button } from "@/components/ui/button";
import Image from "next/image";
import { FunctionComponent } from "react";

import doctorImage from "../../../../public/doctor-hero.png";

const Hero: FunctionComponent = () => {
  return (
    <section className="bg-white">
      <div className="container mx-auto px-4 pt-20 pb-4 sm:px-6 lg:px-8 lg:pb-0">
        <main className="flex items-center justify-center">
          <article className="flex=[2] space-y-8 max-w-xl flex flex-col justify-center">
            <h1 className="text-4xl font-bold lg:text:5xl max-w-2xl tracking-tigh">
              Encontre os melhores profissionais em um unico lugar
            </h1>
            <p className="text-base lg:text-lg text-gray-600">
              Nós somos uma plataforma para profissionais da saúde com foco em
              agilizar seu atendimento de forma simplificada e organizada.
            </p>
            <Button className="bg-emerald-500 hover:bg-emerald-400 cursor-poibnter w-fit px-6 font-semibold">
              Profissionais disponíveis
            </Button>
          </article>

          <div className="hidden lg:block">
            <Image
              src={doctorImage}
              alt="Foto ilustrativa de um profissional da saúde"
              width={340}
              height={400}
              className="object-contain"
              quality={100}
              priority
            />
          </div>
        </main>
      </div>
    </section>
  );
};

export default Hero;
