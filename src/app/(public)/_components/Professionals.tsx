import { Card, CardContent, CardFooter } from "@/components/ui/card";
import Image from "next/image";
import { FunctionComponent } from "react";

import fotoImg from "../../../../public/foto1.png";
import Link from "next/link";
import { ArrowRight } from "lucide-react";

const Professionals: FunctionComponent = () => {
  return (
    <section className="bg-gray-50 py-16">
      <div className="container mx-auto px-4 sm:px-6 lg:px-8">
        <h2 className="text-2xl text-center mb-12 font-bold">
          Clínicas disponíveis
        </h2>
      </div>

      <section className="grid grid-cols-1 gap-6 sm:grid-cols-2 lg:grid-cols-4 px-4">
        {Array.from({ length: 4 }).map((__, index) => (
          <Card key={`${index}`} className="p-0 overflow-hidden">
            <CardContent className="p-0 m-0">
              <div>
                <div className="relative h-48">
                  <Image
                    src={fotoImg}
                    alt="Foto da Clínica"
                    fill
                    className="object-cover"
                  />
                </div>
              </div>
              <div className="p-4 space-y-4">
                <div className="flex items-center justify-between">
                  <div>
                    <h3 className="font-semibold">Clinica Centro</h3>
                    <p className="text-sm text-gray-500">
                      Rua X, centro, Campo Grande - MS
                    </p>
                  </div>
                  <div className="w-2.5 h-2.5 rounded-full bg-emerald-500" />
                </div>
                <Link
                  className="w-full bg-emerald-500 hover:bg-emerald-400 text-white flex items-center justify-center gap-4 py-2 rounded text-sm font-medium md:text-base"
                  href="/clinica/123"
                >
                  Agendar horário
                  <ArrowRight />
                </Link>
              </div>
            </CardContent>
          </Card>
        ))}
      </section>
    </section>
  );
};

export default Professionals;
