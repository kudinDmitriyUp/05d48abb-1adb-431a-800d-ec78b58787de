"use client";

import { ThemeProvider } from "@/providers/themeProvider/ThemeProvider";
import ReactLenis from "lenis/react";
import ContactSplitForm from '@/components/sections/contact/ContactSplitForm';
import FooterBaseCard from '@/components/sections/footer/FooterBaseCard';
import HeroOverlay from '@/components/sections/hero/HeroOverlay';
import NavbarStyleCentered from '@/components/navbar/NavbarStyleCentered/NavbarStyleCentered';
import ProductCardOne from '@/components/sections/product/ProductCardOne';
import SplitAbout from '@/components/sections/about/SplitAbout';
import TestimonialCardOne from '@/components/sections/testimonial/TestimonialCardOne';

export default function LandingPage() {
  return (
    <ThemeProvider
        defaultButtonVariant="bounce-effect"
        defaultTextAnimation="entrance-slide"
        borderRadius="soft"
        contentWidth="compact"
        sizing="mediumLargeSizeLargeTitles"
        background="floatingGradient"
        cardStyle="gradient-radial"
        primaryButtonStyle="flat"
        secondaryButtonStyle="glass"
        headingFontWeight="light"
    >
      <ReactLenis root>
  <div id="nav" data-section="nav">
      <NavbarStyleCentered
      navItems={[
        {
          name: "About",
          id: "#about",
        },
        {
          name: "Menu",
          id: "#menu",
        },
        {
          name: "Testimonials",
          id: "#testimonials",
        },
        {
          name: "Contact",
          id: "#contact",
        },
      ]}
      brandName="vavA"
    />
  </div>

  <div id="hero" data-section="hero">
      <HeroOverlay
      title="Artisanal Coffee in the Heart of the City"
      description="Experience the perfect balance of roasted flavor and warm hospitality. vavA is your sanctuary for craft coffee."
      buttons={[
        {
          text: "View Our Menu",
          href: "#menu",
        },
      ]}
      imageSrc="https://pixabay.com/get/gc193327814b6e135943ebe16865620b2f501734746e016349dd17f19dfb9904bf91e8a126fd803e7ca3c56cb509491ddc5dcbc40edb552c2752ef9b069a6ceaa_1280.jpg"
      imageAlt="Artisanal coffee atmosphere"
      avatars={[
        {
          src: "https://pixabay.com/get/g6b3e62b052c6bd0060123efadb79d201fc78d2ed0bc53f64cb055cfe7457090c3f66cca517bca852077b9ff704e0258d6e2f05752c314122d52fe192f29165e2_1280.jpg",
          alt: "Customer 1",
        },
        {
          src: "https://pixabay.com/get/g06f4252e56b0bb061b843f1a8a075e3fb019ad4601a8b17264f3a2819abb69bcea516b7beaae29d5358975362046b866905620c81e148181c29081f88fed7b29_1280.jpg",
          alt: "Customer 2",
        },
        {
          src: "https://pixabay.com/get/g37112068f7a36d1c2ff618652b31dbfd12170a4448ded7f224915c02a3bc661a16a61cf77c0678863ae0be76938edade020fa87b51b6a768115fbdc5a8c1787b_1280.jpg",
          alt: "Customer 3",
        },
        {
          src: "https://pixabay.com/get/ge2bb6c662eb6d04c4f1fd367faabc1283b96b28dbb65c6ada634b2b197f54ff9b7cf919efe7f9e840efcddf7530f1c04c2d17559722cc033b4c7f56d4cb780be_1280.jpg",
          alt: "Customer 4",
        },
        {
          src: "https://pixabay.com/get/gc9599b0371f83539fce13f20278a94f75e11058e5ad5135c5289feb54845212debba3246bfbad0cff23c1d491a29648e43d7653108980a6494c1ffdadce6ab89_1280.jpg",
          alt: "Customer 5",
        },
      ]}
      avatarText="Loved by 500+ locals"
    />
  </div>

  <div id="about" data-section="about">
      <SplitAbout
      textboxLayout="split"
      useInvertedBackground={true}
      title="Crafted with Passion"
      description="At vavA, we believe coffee is more than just a morning ritual. It's a craft perfected over years of sourcing the finest beans and roasting them to perfection."
      bulletPoints={[
        {
          title: "Ethically Sourced",
          description: "We partner directly with farmers to ensure fair trade and sustainable practices.",
        },
        {
          title: "Expert Roasting",
          description: "Our master roasters bring out the unique profile of every single batch.",
        },
        {
          title: "Artisanal Brewing",
          description: "Precision and care in every pour to guarantee the highest quality cup.",
        },
      ]}
      imageSrc="https://pixabay.com/get/gb8c7c32ee444d62cde742e6e39d3acd5499b9a11c7ce923ee4f1a0d7033afad77a1fcbd2fb215e92b63da9947159378cc8f6a61665d562333c4ad657e75b8842_1280.jpg"
      imageAlt="Coffee production process"
      mediaAnimation="blur-reveal"
    />
  </div>

  <div id="menu" data-section="menu">
      <ProductCardOne
      animationType="slide-up"
      textboxLayout="default"
      gridVariant="two-columns-alternating-heights"
      useInvertedBackground={false}
      products={[
        {
          id: "1",
          name: "Vava Signature Espresso",
          price: "$4.50",
          imageSrc: "https://pixabay.com/get/g7b4fa20ffa2595013d7527d9436c81f8078b8e25a23a7f4cdcee6976e8d2efb46d820a5af8b04c63e9a3686e387035deea83ae729f7de6e7fa35c575fa467d3c_1280.jpg",
        },
        {
          id: "2",
          name: "Artisan Butter Croissant",
          price: "$3.75",
          imageSrc: "https://pixabay.com/get/g4ee0cd92a58ee1f1044e2bad85ed1c6a9e22f9b5fadfd266b74a5c8c8a14e24122353935758824d3ad7fca4941d1378911599acca7ac1dd0e23358b94a700c63_1280.jpg",
        },
        {
          id: "3",
          name: "Cold Brew Reserve",
          price: "$5.25",
          imageSrc: "https://pixabay.com/get/g81ba0e0d3a198b027b40f87fd6b98f77c06d379db045a6fd72fe6b1dcf9022fde0a02b69d0cfafb5b86ee1ba1938ba21ad6d3dd5b7db329e424c0130e4c2d599_1280.jpg",
        },
        {
          id: "4",
          name: "Oat Milk Flat White",
          price: "$5.50",
          imageSrc: "https://pixabay.com/get/gb4b8904d0acb3f5f2d4c2ac1a0af55a42da25cfec14049a759f57a40076f2d5f8b44c62c2a9f38f633ad5692fc6b78e144544545c63347ce4bcad1fd51761f3d_1280.jpg",
        },
        {
          id: "5",
          name: "Almond Pastry Twist",
          price: "$4.00",
          imageSrc: "https://pixabay.com/get/ge1628afd6aa227dc5e9ef3358ea60f873717e9b9699f9abaae2f1e4a85845d26cdd770dd8ff6859a1483347e41b742535fbea29a1ffcc75c78240560822ea5d3_1280.jpg",
        },
        {
          id: "6",
          name: "Filter Pour Over",
          price: "$6.00",
          imageSrc: "https://pixabay.com/get/gdc735149c1ce54595e6e87cb8c86c8f4f1fe488f8191889bb258a22c7e52e73392d9b3d0e150c8996025235f3b33e86debcfb4479b9f2986117ab8fde27ff83d_1280.jpg",
        },
      ]}
      title="Our Signature Selection"
      description="From single-origin pours to decadent pastries, discover the flavours we are most proud of."
    />
  </div>

  <div id="testimonials" data-section="testimonials">
      <TestimonialCardOne
      animationType="scale-rotate"
      textboxLayout="default"
      gridVariant="three-columns-all-equal-width"
      useInvertedBackground={true}
      testimonials={[
        {
          id: "1",
          name: "Elena M.",
          role: "Designer",
          company: "Local Agency",
          rating: 5,
          imageSrc: "https://pixabay.com/get/g6b3e62b052c6bd0060123efadb79d201fc78d2ed0bc53f64cb055cfe7457090c3f66cca517bca852077b9ff704e0258d6e2f05752c314122d52fe192f29165e2_1280.jpg",
        },
        {
          id: "2",
          name: "Jordan R.",
          role: "Architect",
          company: "Creative Studio",
          rating: 5,
          imageSrc: "https://pixabay.com/get/g06f4252e56b0bb061b843f1a8a075e3fb019ad4601a8b17264f3a2819abb69bcea516b7beaae29d5358975362046b866905620c81e148181c29081f88fed7b29_1280.jpg",
        },
        {
          id: "3",
          name: "Marcus S.",
          role: "Writer",
          company: "Independent Press",
          rating: 5,
          imageSrc: "https://pixabay.com/get/g37112068f7a36d1c2ff618652b31dbfd12170a4448ded7f224915c02a3bc661a16a61cf77c0678863ae0be76938edade020fa87b51b6a768115fbdc5a8c1787b_1280.jpg",
        },
        {
          id: "4",
          name: "Sofia T.",
          role: "Manager",
          company: "City Hub",
          rating: 5,
          imageSrc: "https://pixabay.com/get/ge2bb6c662eb6d04c4f1fd367faabc1283b96b28dbb65c6ada634b2b197f54ff9b7cf919efe7f9e840efcddf7530f1c04c2d17559722cc033b4c7f56d4cb780be_1280.jpg",
        },
        {
          id: "5",
          name: "Kevin L.",
          role: "Developer",
          company: "Tech Collective",
          rating: 5,
          imageSrc: "https://pixabay.com/get/gc9599b0371f83539fce13f20278a94f75e11058e5ad5135c5289feb54845212debba3246bfbad0cff23c1d491a29648e43d7653108980a6494c1ffdadce6ab89_1280.jpg",
        },
      ]}
      title="Voices of vavA"
      description="What our community has to say about their daily coffee experience."
    />
  </div>

  <div id="contact" data-section="contact">
      <ContactSplitForm
      useInvertedBackground={false}
      title="Visit Us"
      description="Come grab a cup and stay a while. Find us at the corner of 5th and Main."
      inputs={[
        {
          name: "name",
          type: "text",
          placeholder: "Your Name",
          required: true,
        },
        {
          name: "email",
          type: "email",
          placeholder: "Your Email",
          required: true,
        },
      ]}
      textarea={{
        name: "message",
        placeholder: "Any special requests or notes?",
        rows: 4,
        required: false,
      }}
      imageSrc="https://pixabay.com/get/g0cffab6e7e6cdc3fbcf15a9621ac2ffe24106b5f0517e1e6055dfb422d9596bc768864927a5fbfebf1d8da1bdd69b91cfdbbac6828413fa08ab63143db10de32_1280.jpg"
      imageAlt="Coffee shop exterior"
    />
  </div>

  <div id="footer" data-section="footer">
      <FooterBaseCard
      logoText="vavA"
      columns={[
        {
          title: "Explore",
          items: [
            {
              label: "About Us",
              href: "#about",
            },
            {
              label: "Menu",
              href: "#menu",
            },
          ],
        },
        {
          title: "Support",
          items: [
            {
              label: "Contact",
              href: "#contact",
            },
            {
              label: "Privacy Policy",
              href: "#",
            },
          ],
        },
      ]}
    />
  </div>
      </ReactLenis>
    </ThemeProvider>
  );
}
