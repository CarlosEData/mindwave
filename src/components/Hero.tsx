import { Button } from '@/components/ui/button';
import { ArrowRight, Zap, Target, Rocket } from 'lucide-react';
import heroImage from '@/assets/mindwave-hero.jpg';

const Hero = () => {
  return (
    <section id="home" className="relative min-h-screen flex items-center justify-center overflow-hidden pt-24">
      {/* Advanced Background System */}
      <div className="absolute inset-0 bg-gradient-dark"></div>
      <div 
        className="absolute inset-0 opacity-15"
        style={{
          backgroundImage: `url(${heroImage})`,
          backgroundSize: 'cover',
          backgroundPosition: 'center',
          backgroundRepeat: 'no-repeat'
        }}
      ></div>
      
      {/* Aurora Background */}
      <div className="absolute inset-0 aurora opacity-40"></div>
      
      {/* Floating Geometric Elements */}
      <div className="absolute top-20 left-20 w-32 h-32 bg-mindwave-blue/20 rounded-full blur-3xl float"></div>
      <div className="absolute bottom-20 right-20 w-48 h-48 bg-mindwave-purple/20 rounded-full blur-3xl float-delay"></div>
      <div className="absolute top-1/2 left-10 w-24 h-24 bg-mindwave-cyan/30 animate-morphing blur-2xl"></div>
      
      {/* Hero Gradient Overlay */}
      <div className="absolute inset-0 bg-gradient-hero"></div>

      {/* Content */}
      <div className="relative z-10 container mx-auto px-6 text-center">
        <div className="max-w-4xl mx-auto">
          {/* Premium Badges - Moved below title */}

          {/* Revolutionary Main Heading */}
          <h1 className="hero-title text-5xl md:text-7xl lg:text-8xl xl:text-9xl mb-8 animate-fade-in text-reveal">
            <span className="block text-gradient-primary leading-none">
              Digitalize
            </span>
            <span className="block text-foreground leading-none mt-2">
              seu Negócio
            </span>
            <span className="block text-2xl md:text-4xl lg:text-5xl xl:text-6xl font-normal text-muted-foreground mt-4 opacity-90">
              360° Solutions
            </span>
          </h1>

          {/* Premium Badges - Positioned after title */}
          <div className="flex flex-wrap justify-center gap-4 mb-12 animate-fade-in">
            <div className="glass-card flex items-center space-x-2 px-6 py-3 hover-lift">
              <Zap className="h-5 w-5 text-mindwave-blue-accent" />
              <span className="text-sm font-medium text-foreground">Inovação</span>
            </div>
            <div className="glass-card flex items-center space-x-2 px-6 py-3 hover-lift">
              <Target className="h-5 w-5 text-mindwave-purple" />
              <span className="text-sm font-medium text-foreground">Performance</span>
            </div>
            <div className="glass-card flex items-center space-x-2 px-6 py-3 hover-lift">
              <Rocket className="h-5 w-5 text-mindwave-cyan" />
              <span className="text-sm font-medium text-foreground">Resultados</span>
            </div>
          </div>

          {/* Premium Subtitle */}
          <div className="max-w-4xl mx-auto mb-12 animate-fade-in">
            <p className="text-xl md:text-2xl text-muted-foreground leading-relaxed mb-4">
              Somos a <span className="text-gradient-secondary font-semibold">Mindwave</span>, 
              uma agência digital que oferece soluções 360° para transformar PMEs em 
              <span className="text-mindwave-blue-accent font-semibold"> referências digitais</span>.
            </p>
            <p className="text-lg text-muted-foreground/80 leading-relaxed">
              Combinamos criatividade, tecnologia de ponta e estratégias de performance 
              para gerar resultados extraordinários.
            </p>
          </div>

          {/* Premium CTA Buttons */}
          <div className="flex flex-col sm:flex-row justify-center items-center gap-6 mb-16 animate-fade-in">
            <Button 
              size="lg" 
              className="bg-gradient-primary hover:shadow-glow-lg transition-all duration-700 group px-10 py-8 text-xl font-semibold pulse-glow hover-lift magnetic"
            >
              Começar Projeto
              <ArrowRight className="ml-3 h-6 w-6 group-hover:translate-x-2 transition-transform duration-500" />
            </Button>
            <Button 
              variant="outline" 
              size="lg" 
              className="glass-card border-mindwave-blue text-mindwave-blue-accent hover:bg-gradient-primary hover:text-primary-foreground transition-all duration-500 px-10 py-8 text-xl font-semibold hover-lift magnetic"
            >
              Conhecer Serviços
            </Button>
          </div>

          {/* Premium Stats */}
          <div className="grid grid-cols-2 md:grid-cols-4 gap-8 animate-fade-in">
            {[
              { number: '100+', label: 'Projetos Entregues', color: 'text-mindwave-blue-accent' },
              { number: '98%', label: 'Satisfação dos Clientes', color: 'text-mindwave-purple' },
              { number: '3x', label: 'Aumento Médio de Vendas', color: 'text-mindwave-cyan' },
              { number: '24/7', label: 'Suporte Especializado', color: 'text-primary' }
            ].map((stat, index) => (
              <div key={index} className="text-center group hover-lift">
                <div className="glass-card p-6 mb-4">
                  <div className={`text-3xl md:text-4xl lg:text-5xl font-display font-bold ${stat.color} mb-2 group-hover:scale-110 transition-all duration-500`}>
                    {stat.number}
                  </div>
                  <div className="text-sm md:text-base text-muted-foreground font-medium">
                    {stat.label}
                  </div>
                </div>
              </div>
            ))}
          </div>
        </div>
      </div>

      {/* Premium Scroll Indicator */}
      <div className="absolute bottom-12 left-1/2 transform -translate-x-1/2 animate-bounce">
        <div className="glass-card w-8 h-12 border-2 border-mindwave-blue/50 rounded-full flex justify-center p-2 hover-lift">
          <div className="w-1.5 h-4 bg-gradient-primary rounded-full animate-shimmer"></div>
        </div>
      </div>
    </section>
  );
};

export default Hero;