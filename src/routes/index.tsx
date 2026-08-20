import { createFileRoute, Link } from '@tanstack/react-router';
import { ArrowRight, Search, MapPin, Compass, Award, Quote } from 'lucide-react';
import { LISTINGS } from '@/components/site-data';

export const Route = createFileRoute('/')({
  component: LandingPage,
});

function LandingPage() {
  // Real, current listings represented by Bobbi — sourced from LISTINGS (site-data.ts),
  // which mirrors newjerseyrealtyllc.com/agent/bobbi-lebbing/. No placeholder/stock listings.
  const featuredProperties = LISTINGS.slice(0, 3).map((p, idx) => ({
    id: idx + 1,
    title: p.address.split(",")[0],
    location: p.address.split(",").slice(1).join(",").trim(),
    price: p.price,
    specs: `${p.bd} BD  |  ${p.ba} BA  |  ${p.sqft} SQFT`,
    image: p.img,
  }));

  return (
    <div className="bg-background text-primary min-h-screen transition-colors duration-500">
      
      {/* 1. ASYMMETRIC EDITORIAL HERO SECTION */}
      <section className="relative min-h-[90vh] flex flex-col justify-between pt-32 pb-16 px-6 md:px-12 lg:px-24 content-max">
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-12 items-center w-full mt-auto mb-auto">
          
          {/* Left Text Column: Overlapping Elegant Typography */}
          <div className="lg:col-span-7 flex flex-col z-10 pr-0 lg:pr-8">
            <span className="text-accent uppercase tracking-editorial text-xs mb-6 font-medium animate-fade-in">
              Bespoke Real Estate Architectural Portfolio
            </span>
            <h1 className="font-serif text-5xl md:text-6xl lg:text-7xl font-light text-primary tracking-tight leading-[1.05] mb-8">
              Spaces curated for the <br />
              <span className="font-serif italic text-accent font-normal">intentional</span> life.
            </h1>
            
            {/* Low-Profile Integrated Horizontal Filter Bar */}
            <div className="w-full max-w-2xl mt-4 border-b border-border pb-4 flex items-center gap-4 group">
              <Search className="w-4 h-4 text-accent transition-transform duration-300 group-focus-within:scale-110" />
              <input 
                type="text" 
                placeholder="Search architectural styles, coastal estates, historical contexts..." 
                className="w-full bg-transparent border-none p-0 text-primary font-sans font-light placeholder:text-muted/60 focus:ring-0 focus:outline-none text-base"
              />
              <button className="text-xs uppercase tracking-widest text-accent hover:text-primary flex items-center gap-2 font-medium transition-colors duration-300">
                Explore <ArrowRight className="w-3 h-3" />
              </button>
            </div>
          </div>

          {/* Right Column: Tall High-Aspect-Ratio Image Container */}
          <div className="lg:col-span-5 w-full flex justify-end">
            <div className="image-container aspect-[3/4] w-full max-w-[420px] shadow-editorial-lg bg-secondary">
              <img 
                src="https://images.unsplash.com/photo-1600585154526-990dced4db0d?auto=format&fit=crop&w=1000&q=80" 
                alt="Luxury Estate Living Room Architecture" 
                className="w-full h-full object-cover grayscale-[15%] contrast-[105%]"
              />
              <div className="absolute inset-0 bg-gradient-to-t from-primary/20 via-transparent to-transparent pointer-events-none" />
            </div>
          </div>

        </div>

        {/* Minimal Hero Bottom Banner */}
        <div className="flex flex-wrap justify-between items-center border-t border-border/60 pt-8 mt-12 gap-6 text-xs uppercase tracking-widest text-muted">
          <div>Based in central New Jersey</div>
          <div className="flex gap-8">
            <span>Scroll to view</span>
            <span>↓</span>
          </div>
        </div>
      </section>

      {/* 2. CURATED COLLECTIONS / FEATURED STORY SPREAD */}
      <section className="bg-secondary/40 border-y border-border/40 py-24 md:py-32 px-6 md:px-12 lg:px-24">
        <div className="content-max grid grid-cols-1 lg:grid-cols-12 gap-16 items-center">
          <div className="lg:col-span-5 order-2 lg:order-1">
            <div className="image-container aspect-square w-full max-w-[460px]">
              <img 
                src="https://images.unsplash.com/photo-1512917774080-9991f1c4c750?auto=format&fit=crop&w=1000&q=80" 
                alt="Contemporary architecture details" 
                className="w-full h-full object-cover"
              />
            </div>
          </div>
          <div className="lg:col-span-7 order-1 lg:order-2 flex flex-col justify-center">
            <Quote className="w-8 h-8 text-accent mb-6 opacity-60" />
            <blockquote className="quote-editorial mb-8 text-2xl md:text-3xl lg:text-4xl text-primary font-light">
              Architecture should speak of its time and place, but yearn for timelessness. We don't list structures; we pass on generational landmarks.
            </blockquote>
            <p className="font-sans font-light text-muted max-w-lg mb-6 leading-relaxed">
              Our signature philosophy bridges traditional physical publishing layout structures with digital precision. Every house in Bobbi's network receives high-end architectural indexing and target exposure.
            </p>
            <div>
              <Link to="/" className="btn-outline inline-block text-xs uppercase tracking-widest">
                Read the Manifesto
              </Link>
            </div>
          </div>
        </div>
      </section>

      {/* 3. PROPERTY CARDS & BESPOKE FRAMING GRID */}
      <section className="py-24 md:py-32 px-6 md:px-12 lg:px-24 content-max">
        <div className="flex flex-col md:flex-row justify-between items-baseline mb-16 border-b border-border/60 pb-6">
          <div>
            <span className="text-accent uppercase tracking-editorial text-xs block mb-2">Exclusives</span>
            <h2 className="font-serif text-3xl md:text-4xl lg:text-5xl font-light text-primary">Current Editorial Listings</h2>
          </div>
          <Link to="/" className="text-xs uppercase tracking-widest text-accent hover:text-primary flex items-center gap-2 mt-4 md:mt-0 font-medium group transition-colors duration-300">
            View Complete Index <ArrowRight className="w-3 h-3 transform group-hover:translate-x-1 transition-transform" />
          </Link>
        </div>

        {/* Staggered, Masonry-Inspired Curated Card Layout Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-12 lg:gap-16 items-start">
          {featuredProperties.map((property, idx) => (
            <div 
              key={property.id} 
              className={`card-editorial group flex flex-col p-4 bg-secondary/20 shadow-editorial-sm ${
                idx === 1 ? 'lg:translate-y-8' : idx === 2 ? 'lg:translate-y-4' : ''
              }`}
            >
              {/* Image Frame Wrapper */}
              <div className="image-container aspect-[4/5] w-full mb-6">
                <img 
                  src={property.image} 
                  alt={property.title} 
                  className="w-full h-full object-cover transition-transform duration-700 ease-out group-hover:scale-105"
                />
                <div className="absolute bottom-4 left-4 bg-background/90 backdrop-blur-sm px-3 py-1 text-[10px] uppercase tracking-widest text-primary">
                  {property.location}
                </div>
              </div>

              {/* Typographic Metadata Frame */}
              <div className="px-2 pb-2">
                <div className="flex justify-between items-baseline mb-3">
                  <h3 className="font-serif text-xl font-light text-primary group-hover:text-accent transition-colors duration-300">
                    {property.title}
                  </h3>
                  <span className="font-sans font-light text-base text-primary/90">{property.price}</span>
                </div>
                
                {/* Thin, Clean Typographic All-Caps Mini Text Dividers */}
                <div className="text-[10px] uppercase tracking-widest text-muted/80 border-t border-border/60 pt-3 flex justify-between items-center">
                  <span>{property.specs}</span>
                  <span className="text-accent opacity-0 group-hover:opacity-100 transition-opacity duration-300">Details →</span>
                </div>
              </div>
            </div>
          ))}
        </div>
      </section>

      {/* 4. CALL TO ACTION spread */}
      <section className="py-24 md:py-32 bg-primary text-primary-foreground text-center relative overflow-hidden">
        <div className="absolute inset-0 opacity-10 bg-[radial-gradient(#8B7355_1px,transparent_1px)] [background-size:16px_16px] pointer-events-none" />
        <div className="content-max px-6 max-w-3xl relative z-10">
          <span className="text-accent uppercase tracking-editorial text-xs block mb-6">Inquiries</span>
          <h2 className="font-serif text-4xl md:text-5xl lg:text-6xl font-light mb-8 leading-tight text-white">
            Ready to transition into <br />
            your next architectural legacy?
          </h2>
          <p className="font-sans font-light text-primary-foreground/70 max-w-xl mx-auto mb-10 text-base leading-relaxed">
            Connect with our private office directly for tailored representation consults, architectural listings, or off-market asset procurement.
          </p>
          <div className="flex flex-col sm:flex-row gap-4 justify-center items-center">
            <button className="btn-primary w-full sm:w-auto bg-accent text-white border-accent hover:bg-white hover:text-primary">
              Schedule Representation Consultation
            </button>
            <button className="btn-outline w-full sm:w-auto border-white/40 text-white hover:bg-white hover:text-primary">
              Access Private Office Catalog
            </button>
          </div>
        </div>
      </section>
      
    </div>
  );
}
