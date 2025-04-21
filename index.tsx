import React from "react";
import { Card, CardContent } from "../components/ui/card";
import { Button } from "../components/ui/button";
import { Mail, Phone, MapPin } from "lucide-react";
import Image from "next/image";

export default function Home() {
  return (
    <div className="min-h-screen bg-[#f7f2ee] text-[#4e342e] p-6">
      <header className="text-center mb-12">
        <div className="flex flex-col items-center space-y-4">
          <Image src="/logo-chocogestion.png" alt="Logo Chocogestion" width={160} height={160} />
          <h1 className="text-4xl font-bold">Chocogestion</h1>
          <p className="text-lg">Secrétariat indépendant pour chocolatiers</p>
        </div>
      </header>
      <section className="text-center">
        <h2 className="text-2xl font-semibold mb-4">Contact</h2>
        <div className="flex flex-col items-center space-y-2">
          <div className="flex items-center space-x-2">
            <MapPin /> <span>Avenue de la Renaissance 1, 1000 BRUXELLES</span>
          </div>
          <div className="flex items-center space-x-2">
            <Phone /> <span>02 733 58 39</span>
          </div>
          <div className="flex items-center space-x-2">
            <Mail /> <span>chocogestion@gmail.be</span>
          </div>
          <Button className="mt-4">Envoyer un message</Button>
        </div>
      </section>
    </div>
  );
}
