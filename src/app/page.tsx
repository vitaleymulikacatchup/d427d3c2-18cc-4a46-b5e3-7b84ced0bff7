"use client"

import { ThemeProvider } from "@/providers/themeProvider/ThemeProvider";
import NavbarLayoutFloatingInline from '@/components/navbar/NavbarLayoutFloatingInline';
import HeroSplit from '@/components/sections/hero/HeroSplit';
import SplitAbout from '@/components/sections/about/SplitAbout';
import ProductCardOne from '@/components/sections/product/ProductCardOne';
import PricingCardThree from '@/components/sections/pricing/PricingCardThree';
import MetricCardTwo from '@/components/sections/metrics/MetricCardTwo';
import TeamCardOne from '@/components/sections/team/TeamCardOne';
import TestimonialCardOne from '@/components/sections/testimonial/TestimonialCardOne';
import SocialProofOne from '@/components/sections/socialProof/SocialProofOne';
import FaqBase from '@/components/sections/faq/FaqBase';
import ContactCenter from '@/components/sections/contact/ContactCenter';
import FooterLogoEmphasis from '@/components/sections/footer/FooterLogoEmphasis';
import { ChefHat, Clock, Crown, Gift, Handshake, HelpCircle, History, Mail, MessageCircle, Sparkles, Star, TrendingUp, Users, Wheat } from 'lucide-react';

export default function Home() {
  return (
    <ThemeProvider
      defaultButtonVariant="hover-bubble"
      defaultTextAnimation="reveal-blur"
      borderRadius="rounded"
      contentWidth="large"
      sizing="small"
      background="gradientBars"
      cardStyle="glass-depth"
      primaryButtonStyle="gradient"
      secondaryButtonStyle="glass"
      showBlurBottom={true}
    >
      <div id="nav" data-section="nav">
        <NavbarLayoutFloatingInline
          navItems={[
            { name: "Accueil", id: "hero" },
            { name: "Produits", id: "products" },
            { name: "À Propos", id: "about" },
            { name: "Contact", id: "contact" }
          ]}
          brandName="Boulangerie Belle Époque"
          button={{
            text: "Commander",
            href: "https://order.example.com"
          }}
        />
      </div>

      <div id="hero" data-section="hero">
        <HeroSplit
          title="Saveurs Authentiques de France"
          description="Découvrez nos viennoiseries artisanales préparées chaque matin avec passion selon les traditions françaises. Du croissant doré au pain de campagne, chaque produit raconte une histoire de savoir-faire."
          tag="Artisan Boulanger"
          tagIcon={Crown}
          buttons={[
            {
              text: "Nos Spécialités",
              href: "products"
            },
            {
              text: "Commander En Ligne",
              href: "https://order.example.com"
            }
          ]}
          imageSrc="https://pixabay.com/get/gab3a85036727d0c9a327a2bf76b549d65cc1e0ccd79af21ff8cf1c91d63cdf97c50c5d6215f839d63ba5b1952b874c971a7291712541cf7b3e7001f067bdc4b8_1280.jpg"
          imageAlt="Boulangerie française avec présentoir de viennoiseries"
          imagePosition="right"
        />
      </div>

      <div id="about" data-section="about">
        <SplitAbout
          title="Notre Histoire"
          description="Depuis 1952, notre famille perpétue l'art de la boulangerie française avec des recettes transmises de génération en génération."
          tag="Tradition"
          tagIcon={History}
          textboxLayout="split"
          bulletPoints={[
            {
              title: "Ingrédients Sélectionnés",
              description: "Farines biologiques, beurre fermier, et ingrédients de première qualité sourced localement.",
              icon: Wheat
            },
            {
              title: "Savoir-Faire Artisanal",
              description: "Techniques traditionnelles préservées et maîtrisées par nos boulangers expérimentés.",
              icon: ChefHat
            },
            {
              title: "Fraîcheur Quotidienne",
              description: "Production matinale pour garantir la fraîcheur et le goût authentique de nos produits.",
              icon: Clock
            }
          ]}
          imageSrc="https://pixabay.com/get/g66a50cfe460651c9867a60a7fed91d6669876deac132db1e491ea859298c46159772987ffd5654a49210aa79bd5b3c5e92b9842b5c8550aad1134ba66163194b_1280.jpg"
          imageAlt="Façade traditionnelle de la boulangerie"
          imagePosition="left"
          buttons={[
            {
              text: "Notre Équipe",
              href: "team"
            }
          ]}
        />
      </div>

      <div id="products" data-section="products">
        <ProductCardOne
          title="Nos Spécialités"
          description="Découvrez notre sélection de viennoiseries et pains artisanaux préparés avec amour chaque matin"
          tag="Fraîcheur Du Jour"
          tagIcon={Sparkles}
          textboxLayout="default"
          gridVariant="three-columns-all-equal-width"
          animationType="slide-up"
          products={[
            {
              id: "croissant-beurre",
              name: "Croissant au Beurre",
              price: "1,50€",
              imageSrc: "https://pixabay.com/get/g337bd298fc555b72dbaee8970bb246f52d8fc5ecef2024893ef119ec544687c1d1c79abf17ca570ca2508065f1214335b0e6f35d482cfdc7f9d50bf1cfc9dbc2_1280.jpg",
              imageAlt: "Croissant doré au beurre"
            },
            {
              id: "pain-chocolat",
              name: "Pain au Chocolat",
              price: "1,80€",
              imageSrc: "https://pixabay.com/get/g2d2cafbaa54011c08a4ae3f2be408cbdd5e116d0353dd217c9ef92dcc780cdb5728ca64dcddca4b482c2fa27bf3f1e8225b8d033af08add1f13752b38917cf4c_1280.jpg",
              imageAlt: "Pain au chocolat artisanal"
            },
            {
              id: "croissant-amande",
              name: "Croissant aux Amandes",
              price: "2,20€",
              imageSrc: "https://pixabay.com/get/gbac0b0eda877ebca1211d0bbf71dffa69cf4c37f03ba1247f01fdbd30816003770eef3845cd6fc5f7b6a31449b96ab0d0587edfbb4fe54734a53ff336e88cd4a_1280.jpg",
              imageAlt: "Croissant aux amandes"
            },
            {
              id: "baguette-tradition",
              name: "Baguette Tradition",
              price: "1,20€",
              imageSrc: "https://pixabay.com/get/gd36f46b2cec95215e8912476606bf4fd6d26b2ff28cda2f06111790da3a001e04cbedbb4eed782118c814bc7543fa8747ff414274ba2c253a0fa4235666c7c43_1280.jpg",
              imageAlt: "Baguette tradition française"
            },
            {
              id: "pain-campagne",
              name: "Pain de Campagne",
              price: "3,50€",
              imageSrc: "https://pixabay.com/get/g58aced1b707a6e505935187c9e131a0ffdc14363aedc5397558e19d32a277ac87e9688507cca62c7e421d52208f9156550cba12eb5286243b085942de2b3dae9_1280.jpg",
              imageAlt: "Pain de campagne au levain"
            },
            {
              id: "macarons",
              name: "Assortiment Macarons",
              price: "12,00€",
              imageSrc: "https://pixabay.com/get/gf8c8b0cc87c8ef45c427ee769e257b8f2a54db47dc89f2b587531111d9a6a3aa0e76f672f885310f2c236a4de7c65ba625e0243a59d1d34486da1a667001743b_1280.jpg",
              imageAlt: "Assortiment de macarons colorés"
            }
          ]}
          buttons={[
            {
              text: "Voir Toute La Carte",
              href: "https://menu.example.com"
            }
          ]}
        />
      </div>

      <div id="pricing" data-section="pricing">
        <PricingCardThree
          title="Formules & Plateaux"
          description="Choisissez la formule qui vous convient pour vos petits-déjeuners, pauses et événements"
          tag="Offres Spéciales"
          tagIcon={Gift}
          textboxLayout="default"
          animationType="slide-up"
          plans={[
            {
              id: "petit-dejeuner",
              name: "Petit Déjeuner",
              price: "8,50€",
              features: [
                "2 viennoiseries au choix",
                "Café ou thé",
                "Jus d'orange frais",
                "Confiture maison"
              ],
              buttons: [
                {
                  text: "Commander",
                  href: "https://order.example.com"
                },
                {
                  text: "Plus d'infos",
                  href: "contact"
                }
              ]
            },
            {
              id: "pause-gourmande",
              badge: "Plus populaire",
              badgeIcon: Star,
              name: "Pause Gourmande",
              price: "15,00€",
              features: [
                "4 viennoiseries variées",
                "2 boissons chaudes",
                "Sélection de macarons",
                "Pain artisanal",
                "Beurre & confitures"
              ],
              buttons: [
                {
                  text: "Commander",
                  href: "https://order.example.com"
                },
                {
                  text: "Personnaliser",
                  href: "contact"
                }
              ]
            },
            {
              id: "plateau-reception",
              name: "Plateau Réception",
              price: "45,00€",
              features: [
                "15 mini viennoiseries",
                "Assortiment de pains",
                "Macarons colorés",
                "Service jusqu'à 8 personnes",
                "Livraison incluse"
              ],
              buttons: [
                {
                  text: "Réserver",
                  href: "https://order.example.com"
                },
                {
                  text: "Devis sur mesure",
                  href: "contact"
                }
              ]
            }
          ]}
        />
      </div>

      <div id="metrics" data-section="metrics">
        <MetricCardTwo
          title="Notre Savoir-Faire en Chiffres"
          description="Plus de 70 ans d'excellence artisanale au service de votre plaisir gustatif"
          tag="Excellence"
          tagIcon={TrendingUp}
          textboxLayout="default"
          gridVariant="four-items-2x2-equal-grid"
          animationType="scale-rotate"
          metrics={[
            {
              id: "1",
              value: "70+",
              description: "Années d'expérience"
            },
            {
              id: "2",
              value: "500+",
              description: "Clients fidèles chaque jour"
            },
            {
              id: "3",
              value: "25",
              description: "Variétés de pains"
            },
            {
              id: "4",
              value: "4h30",
              description: "Début de la production"
            }
          ]}
        />
      </div>

      <div id="team" data-section="team">
        <TeamCardOne
          title="Notre Équipe Passionnée"
          description="Rencontrez les artisans qui donnent vie à vos plaisirs quotidiens"
          tag="Les Artisans"
          tagIcon={Users}
          textboxLayout="default"
          gridVariant="two-columns-alternating-heights"
          animationType="blur-reveal"
          members={[
            {
              id: "1",
              name: "Pierre Dubois",
              role: "Maître Boulanger",
              imageSrc: "https://pixabay.com/get/g5602718f5b36f2e660a484d6797763e620912d9d3feb52fba1e006fd1758efb2d06645bb61a1c6e895e0be7c6fd1aa7018efadfed1b171df32de446bb07b356d_1280.jpg",
              imageAlt: "Pierre Dubois, maître boulanger"
            },
            {
              id: "2",
              name: "Marie Laurent",
              role: "Chef Pâtissière",
              imageSrc: "https://pixabay.com/get/g116123f7109a8e5f92c8481dedb23449ac5a17eb2d4d144cc80dfc21a2e2362247a97f6fdb3a6659988dec5a604b6017b62fc0475b4ae1ee1b23d1b7a62abc48_1280.jpg",
              imageAlt: "Marie Laurent, chef pâtissière"
            }
          ]}
        />
      </div>

      <div id="testimonials" data-section="testimonials">
        <TestimonialCardOne
          title="Ce Que Disent Nos Clients"
          description="Leurs sourires et leurs témoignages sont notre plus belle récompense"
          tag="Témoignages"
          tagIcon={MessageCircle}
          textboxLayout="default"
          gridVariant="four-items-2x2-equal-grid"
          animationType="slide-up"
          testimonials={[
            {
              id: "1",
              name: "Sophie Martin",
              role: "Cliente fidèle",
              company: "Quartier Saint-Germain",
              rating: 5,
              imageSrc: "https://pixabay.com/get/gea9f4c2168fa8742f308ac28a589d18d7c94daf7db6263f1862955024fa9618eb942f0fb753198870356bce6fa46600c0ecbd368f7d48e889d94812c41b842d0_1280.jpg",
              imageAlt: "Sophie Martin"
            },
            {
              id: "2",
              name: "Jean-Luc Moreau",
              role: "Habitué du matin",
              company: "Bureau du coin",
              rating: 5,
              imageSrc: "https://pixabay.com/get/g65334a850a6bbdc4275752ebb74498f2dca2639f4633815052af9ebb271229a32fef4206699e1963b8da9ac3b4e986c3cbfe56476d69b7eaddab18203a4e9b5c_1280.jpg",
              imageAlt: "Jean-Luc Moreau"
            },
            {
              id: "3",
              name: "Famille Rousseau",
              role: "Clients du dimanche",
              company: "Voisins du quartier",
              rating: 5,
              imageSrc: "https://pixabay.com/get/gdd49f682ca574c8345655f93e03f5f58689d2fb991afc50f69cdf5c3de9f641f0d00a52d781a35a7c389e8c9f3b384fdbee68fa655258d8fda352b1ad3dc8f1b_1280.jpg",
              imageAlt: "Famille Rousseau"
            },
            {
              id: "4",
              name: "Emma Petit",
              role: "Étudiante gourmande",
              company: "Université proche",
              rating: 5,
              imageSrc: "https://pixabay.com/get/ga55398cc1902d8bb3b4f4286c201eb7bd55cff8028d4438d646ea7fda8fe6c90f87bd0d7307e4307ed37ab042a4168bd55aeb2476f0c08eb017382f88049a76a_1280.jpg",
              imageAlt: "Emma Petit"
            }
          ]}
        />
      </div>

      <div id="social-proof" data-section="social-proof">
        <SocialProofOne
          title="Ils Nous Font Confiance"
          description="Fournisseur officiel de nombreux établissements et événements parisiens"
          tag="Partenaires"
          tagIcon={Handshake}
          textboxLayout="default"
          speed={30}
          showCard={true}
          logos={[
            "/placeholders/placeholder1.webp",
            "/placeholders/placeholder1.webp",
            "/placeholders/placeholder1.webp",
            "/placeholders/placeholder1.webp",
            "/placeholders/placeholder1.webp",
            "/placeholders/placeholder1.webp",
            "/placeholders/placeholder1.webp"
          ]}
        />
      </div>

      <div id="faq" data-section="faq">
        <FaqBase
          title="Questions Fréquentes"
          description="Tout ce que vous devez savoir sur nos produits et services"
          tag="Aide"
          tagIcon={HelpCircle}
          textboxLayout="default"
          animationType="smooth"
          faqs={[
            {
              id: "1",
              title: "À quelle heure ouvrez-vous ?",
              content: "Nous ouvrons tous les jours à 6h30 pour vous servir des produits tout juste sortis du four. Fermeture à 19h30 du mardi au samedi, et 18h le dimanche."
            },
            {
              id: "2",
              title: "Proposez-vous des produits sans gluten ?",
              content: "Oui ! Nous avons une gamme complète de pains et pâtisseries sans gluten, préparés dans un espace dédié pour éviter toute contamination croisée."
            },
            {
              id: "3",
              title: "Peut-on commander à l'avance ?",
              content: "Absolument ! Vous pouvez commander vos plateaux, gâteaux d'anniversaire ou quantités importantes 48h à l'avance. Appelez-nous ou passez en boutique."
            },
            {
              id: "4",
              title: "Livrez-vous à domicile ?",
              content: "Nous proposons la livraison dans un rayon de 5km pour les commandes supérieures à 30€. Service disponible du mardi au samedi entre 14h et 17h."
            },
            {
              id: "5",
              title: "Vos produits sont-ils faits maison ?",
              content: "Tout est préparé sur place dans notre fournil selon des recettes artisanales transmises depuis trois générations. Aucun produit industriel n'entre dans nos préparations."
            }
          ]}
        />
      </div>

      <div id="contact" data-section="contact">
        <ContactCenter
          tag="Newsletter"
          tagIcon={Mail}
          title="Restez Informés de Nos Nouveautés"
          description="Recevez en avant-première nos nouvelles recettes, offres spéciales et événements gourmands. Une newsletter savoureuse livrée chaque semaine."
          inputPlaceholder="Votre adresse email"
          buttonText="S'abonner"
          termsText="En vous abonnant, vous acceptez de recevoir nos actualités gourmandes. Désabonnement possible à tout moment."
        />
      </div>

      <div id="footer" data-section="footer">
        <FooterLogoEmphasis
          logoText="Boulangerie Belle Époque"
          columns={[
            {
              items: [
                { label: "Nos Produits", href: "products" },
                { label: "Tarifs", href: "pricing" },
                { label: "Commander", href: "https://order.example.com" }
              ]
            },
            {
              items: [
                { label: "Notre Histoire", href: "about" },
                { label: "L'Équipe", href: "team" },
                { label: "Contact", href: "contact" }
              ]
            },
            {
              items: [
                { label: "FAQ", href: "faq" },
                { label: "Livraison", href: "delivery" },
                { label: "Mentions Légales", href: "legal" }
              ]
            }
          ]}
        />
      </div>
    </ThemeProvider>
  );
}