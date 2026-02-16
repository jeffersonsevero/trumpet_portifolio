
import React, { useState, useEffect } from 'react';
import { 
  Music, 
  Mail, 
  Phone, 
  Play, 
  ChevronDown, 
  Instagram, 
  Youtube, 
  Search,
  ArrowRight
} from 'lucide-react';

// Header Component
const Header: React.FC = () => {
  const [scrolled, setScrolled] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      setScrolled(window.scrollY > 50);
    };
    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  return (
    <header className={`fixed top-0 w-full z-50 transition-all duration-300 border-b ${scrolled ? 'bg-background-dark/95 backdrop-blur-md border-white/10 py-4' : 'bg-transparent border-transparent py-6'}`}>
      <div className="max-w-7xl mx-auto px-6 flex items-center justify-between">
        <div className="flex items-center gap-2 group cursor-pointer">
          <Music className="text-primary w-8 h-8 group-hover:rotate-12 transition-transform" />
          <span className="text-2xl font-black tracking-tighter uppercase">Trumpeter<span className="text-primary">.</span></span>
        </div>
        
        <nav className="hidden md:flex items-center gap-10">
          {['Início', 'Trajetória', 'Vídeos', 'Contato'].map((item) => (
            <a 
              key={item} 
              href={`#${item.toLowerCase()}`} 
              className="text-xs font-bold hover:text-primary transition-colors uppercase tracking-[0.2em]"
            >
              {item}
            </a>
          ))}
        </nav>

        <button className="bg-primary hover:bg-primary/90 text-background-dark px-8 py-2.5 rounded-full font-black text-xs transition-all gold-glow uppercase tracking-widest active:scale-95">
          Booking
        </button>
      </div>
    </header>
  );
};

// Hero Component
const Hero: React.FC = () => {
  return (
    <section id="início" className="relative min-h-screen flex items-center justify-center overflow-hidden">
      <div className="absolute inset-0 z-0">
        <div className="absolute inset-0 bg-black/50 z-10" />
        <div className="absolute inset-0 jazz-gradient z-20" />
        <img 
          className="w-full h-full object-cover grayscale brightness-50" 
          src="https://images.unsplash.com/photo-1511192336575-5a79af67a629?q=80&w=2000&auto=format&fit=crop" 
          alt="Jazz Trumpeter on stage" 
        />
      </div>
      
      <div className="relative z-30 text-center px-6 max-w-5xl mx-auto">
        <div className="inline-block px-5 py-1.5 rounded-full border border-primary/30 text-primary text-[10px] font-black uppercase tracking-[0.4em] mb-8 bg-primary/10 backdrop-blur-sm animate-pulse">
          Estreia Internacional 2024
        </div>
        <h1 className="text-6xl md:text-8xl lg:text-[10rem] font-black text-white leading-[0.9] tracking-tighter mb-10 drop-shadow-2xl">
          A ALMA DO <br /> <span className="text-primary">SOPRO</span>
        </h1>
        <p className="text-lg md:text-2xl text-slate-300 font-light max-w-2xl mx-auto mb-12 leading-relaxed">
          A transcendência musical através do metal e do ar. Onde o jazz clássico encontra a experimentação contemporânea.
        </p>
        <div className="flex flex-col sm:flex-row items-center justify-center gap-6">
          <a 
            href="#trajetória" 
            className="group w-full sm:w-auto px-12 py-5 bg-primary text-background-dark rounded-full font-black text-lg hover:scale-105 transition-all gold-glow flex items-center justify-center gap-2"
          >
            Conheça a Trajetória
            <ArrowRight className="w-5 h-5 group-hover:translate-x-1 transition-transform" />
          </a>
          <a 
            href="#vídeos" 
            className="w-full sm:w-auto px-12 py-5 border border-white/20 text-white rounded-full font-black text-lg hover:bg-white/10 transition-colors"
          >
            Ver Performances
          </a>
        </div>
      </div>
      
      <div className="absolute bottom-10 left-1/2 -translate-x-1/2 z-30 animate-bounce">
        <ChevronDown className="text-white/30 w-10 h-10" />
      </div>
    </section>
  );
};

// Biography Component
const Biography: React.FC = () => {
  return (
    <section id="trajetória" className="py-32 px-6 bg-background-dark">
      <div className="max-w-7xl mx-auto">
        <div className="grid lg:grid-cols-2 gap-20 items-center">
          <div className="relative order-2 lg:order-1">
            <div className="absolute -top-10 -left-10 w-48 h-48 border-l-[6px] border-t-[6px] border-primary/20" />
            <div className="absolute -bottom-10 -right-10 w-48 h-48 border-r-[6px] border-b-[6px] border-primary/20" />
            <div className="relative overflow-hidden rounded-2xl group">
              <img 
                className="w-full h-[700px] object-cover filter grayscale sepia-[0.1] group-hover:scale-105 transition-transform duration-1000" 
                src="https://images.unsplash.com/photo-1514525253344-f814d0c9e58f?q=80&w=1500&auto=format&fit=crop" 
                alt="Musician portrait" 
              />
              <div className="absolute inset-0 bg-primary/10 mix-blend-overlay opacity-0 group-hover:opacity-100 transition-opacity" />
            </div>
          </div>
          
          <div className="order-1 lg:order-2 space-y-10">
            <div>
              <h3 className="text-primary font-black uppercase tracking-[0.3em] text-xs mb-6">A Jornada Musical</h3>
              <h2 className="text-5xl md:text-7xl font-black text-white leading-tight">Mestre do <br />Improviso.</h2>
            </div>
            
            <div className="space-y-8 text-slate-400 text-xl leading-relaxed font-light">
              <p>
                Iniciou sua jornada no conservatório clássico, evoluindo para a improvisação do jazz contemporâneo. Cada nota soprada carrega o peso de anos de dedicação técnica e a leveza da alma artística.
              </p>
              <p>
                Após percorrer os principais palcos da Europa e das Américas, consolidou-se como uma das vozes mais autênticas do trompete moderno. Sua música não é apenas ouvida; é sentida como uma narrativa vibrante de superação e beleza.
              </p>
              
              <div className="grid grid-cols-2 gap-12 pt-8">
                <div className="space-y-2">
                  <h4 className="text-white font-black text-5xl tracking-tighter">15+</h4>
                  <p className="text-xs uppercase tracking-[0.2em] font-bold text-primary">Anos de Palco</p>
                </div>
                <div className="space-y-2">
                  <h4 className="text-white font-black text-5xl tracking-tighter">200+</h4>
                  <p className="text-xs uppercase tracking-[0.2em] font-bold text-primary">Shows Internacionais</p>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

// Gallery Component
const Gallery: React.FC = () => {
  const videos = [
    {
      title: "Noites de Blue Note",
      loc: "Nova York, 2023",
      tag: "Live Performance",
      img: "https://images.unsplash.com/photo-1514525253344-f814d0c9e58f?q=80&w=800&auto=format&fit=crop"
    },
    {
      title: "Sopro de Outono (Solo)",
      loc: "Lisboa, 2024",
      tag: "Studio Session",
      img: "https://images.unsplash.com/photo-1470225620780-dba8ba36b745?q=80&w=800&auto=format&fit=crop"
    },
    {
      title: "Improvisos de Verão",
      loc: "Montreux, 2022",
      tag: "Festival Highlight",
      img: "https://images.unsplash.com/photo-1459749411177-042180ce673c?q=80&w=800&auto=format&fit=crop"
    }
  ];

  return (
    <section id="vídeos" className="py-32 px-6 bg-neutral-dark">
      <div className="max-w-7xl mx-auto">
        <div className="flex flex-col md:flex-row md:items-end justify-between mb-20 gap-8">
          <div className="space-y-4">
            <h3 className="text-primary font-black uppercase tracking-[0.3em] text-xs">Galeria de Performances</h3>
            <h2 className="text-6xl font-black text-white leading-tight tracking-tighter">Vibrações ao Vivo</h2>
          </div>
          <p className="text-slate-500 max-w-md text-lg font-light leading-relaxed">
            Uma curadoria de momentos capturados em estúdio e nos palcos mais icônicos do mundo.
          </p>
        </div>

        <div className="grid md:grid-cols-3 gap-8">
          {videos.map((video, idx) => (
            <div key={idx} className="group cursor-pointer">
              <div className="relative overflow-hidden rounded-2xl aspect-video mb-6 bg-black">
                <img 
                  className="w-full h-full object-cover opacity-40 group-hover:opacity-60 group-hover:scale-110 transition-all duration-700" 
                  src={video.img} 
                  alt={video.title} 
                />
                <div className="absolute inset-0 flex items-center justify-center">
                  <div className="w-20 h-20 rounded-full bg-primary/90 flex items-center justify-center group-hover:scale-110 transition-transform shadow-2xl backdrop-blur-sm">
                    <Play className="text-background-dark fill-current w-8 h-8 ml-1" />
                  </div>
                </div>
              </div>
              <div className="space-y-2 pl-2">
                <span className="text-primary text-[10px] font-black uppercase tracking-[0.3em]">{video.tag}</span>
                <h4 className="text-2xl font-black text-white group-hover:text-primary transition-colors">{video.title}</h4>
                <p className="text-slate-500 text-sm font-medium">{video.loc}</p>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

// Contact Component
const Contact: React.FC = () => {
  return (
    <section id="contato" className="py-32 px-6 bg-background-dark">
      <div className="max-w-7xl mx-auto">
        <div className="bg-neutral-dark/40 rounded-[3rem] p-10 md:p-20 border border-white/5 relative overflow-hidden backdrop-blur-sm">
          {/* Decorative background element */}
          <div className="absolute top-0 right-0 w-96 h-96 bg-primary/5 rounded-full blur-[120px] -translate-y-1/2 translate-x-1/2" />
          
          <div className="grid lg:grid-cols-2 gap-20 relative z-10">
            <div className="space-y-12">
              <div className="space-y-6">
                <h2 className="text-5xl md:text-7xl font-black text-white leading-none">
                  Vamos criar algo <br />
                  <span className="text-primary italic">Inesquecível?</span>
                </h2>
                <p className="text-slate-400 font-light text-xl max-w-sm">
                  Para concertos, workshops, sessões de gravação ou parcerias artísticas.
                </p>
              </div>
              
              <div className="space-y-8">
                <div className="flex items-center gap-6 group">
                  <div className="w-14 h-14 rounded-2xl bg-white/5 flex items-center justify-center text-primary group-hover:bg-primary group-hover:text-background-dark transition-all duration-300">
                    <Mail className="w-6 h-6" />
                  </div>
                  <div>
                    <p className="text-[10px] text-slate-500 uppercase font-black tracking-[0.2em] mb-1">Email</p>
                    <p className="text-white text-lg font-bold">contato@trumpeter-art.com</p>
                  </div>
                </div>
                
                <div className="flex items-center gap-6 group">
                  <div className="w-14 h-14 rounded-2xl bg-white/5 flex items-center justify-center text-primary group-hover:bg-primary group-hover:text-background-dark transition-all duration-300">
                    <Phone className="w-6 h-6" />
                  </div>
                  <div>
                    <p className="text-[10px] text-slate-500 uppercase font-black tracking-[0.2em] mb-1">Telefone</p>
                    <p className="text-white text-lg font-bold">+55 (11) 98765-4321</p>
                  </div>
                </div>
              </div>

              <div className="flex gap-4">
                {[Instagram, Youtube, Search].map((Icon, i) => (
                  <a 
                    key={i}
                    href="#" 
                    className="w-12 h-12 rounded-full border border-white/10 flex items-center justify-center text-slate-400 hover:bg-primary hover:border-primary hover:text-background-dark transition-all duration-300"
                  >
                    <Icon className="w-5 h-5" />
                  </a>
                ))}
              </div>
            </div>
            
            <form className="space-y-6 bg-white/[0.02] p-8 md:p-12 rounded-3xl border border-white/5">
              <div className="grid md:grid-cols-2 gap-6">
                <input 
                  className="w-full bg-white/5 border-white/10 rounded-xl py-5 px-6 focus:border-primary focus:ring-1 focus:ring-primary/20 transition-all text-white placeholder:text-slate-600 font-medium outline-none" 
                  placeholder="Nome" 
                  type="text" 
                />
                <input 
                  className="w-full bg-white/5 border-white/10 rounded-xl py-5 px-6 focus:border-primary focus:ring-1 focus:ring-primary/20 transition-all text-white placeholder:text-slate-600 font-medium outline-none" 
                  placeholder="E-mail" 
                  type="email" 
                />
              </div>
              <input 
                className="w-full bg-white/5 border-white/10 rounded-xl py-5 px-6 focus:border-primary focus:ring-1 focus:ring-primary/20 transition-all text-white placeholder:text-slate-600 font-medium outline-none" 
                placeholder="Assunto" 
                type="text" 
              />
              <textarea 
                className="w-full bg-white/5 border-white/10 rounded-xl py-5 px-6 focus:border-primary focus:ring-1 focus:ring-primary/20 transition-all text-white placeholder:text-slate-600 font-medium outline-none min-h-[160px] resize-none" 
                placeholder="Sua Mensagem" 
              />
              <button 
                className="w-full py-5 bg-primary text-background-dark font-black rounded-xl hover:bg-primary/90 transition-all gold-glow uppercase tracking-[0.2em] text-sm active:scale-[0.98]" 
                type="submit"
              >
                Enviar Mensagem
              </button>
            </form>
          </div>
        </div>
      </div>
    </section>
  );
};

// Footer Component
const Footer: React.FC = () => {
  return (
    <footer className="py-20 border-t border-white/5 bg-background-dark px-6">
      <div className="max-w-7xl mx-auto">
        <div className="flex flex-col md:flex-row items-center justify-between gap-10">
          <div className="flex items-center gap-3">
            <Music className="text-primary w-6 h-6" />
            <span className="text-xl font-black tracking-tighter uppercase text-white">Trumpeter<span className="text-primary">.</span></span>
          </div>
          
          <p className="text-slate-500 text-sm font-medium text-center md:text-left">
            © 2024 Design Editorial por Art-Jazz Media. <br className="md:hidden" /> Todos os direitos reservados.
          </p>
          
          <div className="flex items-center gap-10">
            <a href="#" className="text-[10px] text-slate-500 hover:text-primary uppercase font-black tracking-[0.2em] transition-colors">Termos</a>
            <a href="#" className="text-[10px] text-slate-500 hover:text-primary uppercase font-black tracking-[0.2em] transition-colors">Privacidade</a>
          </div>
        </div>
      </div>
    </footer>
  );
};

const App: React.FC = () => {
  return (
    <div className="min-h-screen font-sans selection:bg-primary selection:text-background-dark">
      <Header />
      <main>
        <Hero />
        <Biography />
        <Gallery />
        <Contact />
      </main>
      <Footer />
    </div>
  );
};

export default App;
