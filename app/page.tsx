import { Footer } from "@/components/layout/Footer";
import { Navbar } from "@/components/layout/Navbar";
import { Atelier } from "@/components/sections/Atelier";
import { Collection } from "@/components/sections/Collection";
import { Contact } from "@/components/sections/Contact";
import { Details } from "@/components/sections/Details";
import { Faq } from "@/components/sections/Faq";
import { Hero } from "@/components/sections/Hero";
import { SavoirFaire } from "@/components/sections/SavoirFaire";
import { collection, contact, details, faq } from "@/lib/catalog";
import { atelier, hero, navLinks, savoirFaire } from "@/lib/content";
import { site } from "@/lib/site";

export default function Home() {
  return (
    <>
      <Navbar brand={site.name} links={navLinks} whatsappHref={hero.secondary.href} />
      <main id="contenu" tabIndex={-1} className="outline-none">
        <div id="top" />
        <Hero {...hero} />
        <SavoirFaire {...savoirFaire} />
        <Atelier {...atelier} />
        <Details {...details} />
        <Collection {...collection} />
        <Faq {...faq} />
        <Contact {...contact} />
      </main>
      <Footer brand={site.name} links={navLinks} year={site.year} />
    </>
  );
}
