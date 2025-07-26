import { Card, CardContent } from '@/components/ui/card';
import { Button } from '@/components/ui/button';
import { Badge } from '@/components/ui/badge';
import { 
  Users, 
  Award, 
  Zap, 
  Target, 
  Brain, 
  Rocket,
  CheckCircle,
  ArrowRight
} from 'lucide-react';

const About = () => {
  const values = [
    {
      icon: Brain,
      title: 'Inovação Constante',
      description: 'Sempre na vanguarda das tecnologias e tendências digitais.'
    },
    {
      icon: Target,
      title: 'Foco em Resultados',
      description: 'Cada estratégia é pensada para gerar ROI mensurável.'
    },
    {
      icon: Zap,
      title: 'Agilidade',
      description: 'Processos otimizados para entregas rápidas e eficientes.'
    },
    {
      icon: Users,
      title: 'Parceria',
      description: 'Construímos relacionamentos duradouros com nossos clientes.'
    }
  ];

  const achievements = [
    '100+ Projetos Entregues',
    '98% Taxa de Satisfação',
    '3x Aumento Médio de Vendas',
    'Suporte 24/7',
    'Equipe Certificada',
    'Metodologia Ágil'
  ];

  return (
    <section id="about" className="py-20 bg-background relative overflow-hidden">
      {/* Background Elements */}
      <div className="absolute top-20 left-10 w-32 h-32 bg-primary/10 rounded-full blur-3xl"></div>
      <div className="absolute bottom-20 right-10 w-40 h-40 bg-mindwave-blue/10 rounded-full blur-3xl"></div>

      <div className="container mx-auto px-6 relative z-10">
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-16 items-center">
          {/* Left Content */}
          <div className="animate-fade-in">
            <Badge variant="outline" className="mb-6 text-primary border-primary">
              <Rocket className="h-4 w-4 mr-2" />
              Sobre a Mindwave
            </Badge>
            
            <h2 className="text-3xl md:text-4xl lg:text-5xl font-bold mb-6">
              <span className="text-foreground">Somos a</span>
              <br />
              <span className="bg-gradient-to-r from-primary to-mindwave-blue-light bg-clip-text text-transparent">
                Onda do Futuro
              </span>
            </h2>

            <p className="text-lg text-muted-foreground mb-8 leading-relaxed">
              A <strong className="text-primary">Mindwave</strong> nasceu da visão de democratizar 
              o acesso à transformação digital. Somos uma agência que combina criatividade, 
              tecnologia e estratégia para gerar resultados excepcionais.
            </p>

            <p className="text-muted-foreground mb-8 leading-relaxed">
              Nossa missão é ser o parceiro estratégico que empresas precisam para navegar 
              no oceano digital com segurança e eficiência, transformando desafios em 
              oportunidades de crescimento.
            </p>

            {/* Achievements */}
            <div className="grid grid-cols-2 gap-4 mb-8">
              {achievements.map((achievement, index) => (
                <div key={index} className="flex items-center space-x-2">
                  <CheckCircle className="h-5 w-5 text-primary flex-shrink-0" />
                  <span className="text-sm text-muted-foreground">{achievement}</span>
                </div>
              ))}
            </div>

            <Button 
              size="lg" 
              className="bg-gradient-primary hover:shadow-glow transition-all duration-500 group"
            >
              Conhecer Nossa História
              <ArrowRight className="ml-2 h-5 w-5 group-hover:translate-x-1 transition-transform duration-300" />
            </Button>
          </div>

          {/* Right Content - Values */}
          <div className="animate-slide-in-right">
            <div className="grid grid-cols-1 gap-6">
              {values.map((value, index) => {
                const IconComponent = value.icon;
                return (
                  <Card 
                    key={index} 
                    className="bg-card/50 backdrop-blur-sm border-border hover:border-primary/50 transition-all duration-500 group hover:shadow-elegant"
                  >
                    <CardContent className="p-6">
                      <div className="flex items-start space-x-4">
                        <div className="w-12 h-12 bg-gradient-primary rounded-xl flex items-center justify-center group-hover:shadow-glow transition-all duration-500 flex-shrink-0">
                          <IconComponent className="h-6 w-6 text-primary-foreground" />
                        </div>
                        <div>
                          <h3 className="text-lg font-semibold text-foreground mb-2 group-hover:text-primary transition-colors duration-300">
                            {value.title}
                          </h3>
                          <p className="text-muted-foreground text-sm leading-relaxed">
                            {value.description}
                          </p>
                        </div>
                      </div>
                    </CardContent>
                  </Card>
                );
              })}
            </div>

            {/* Stats */}
            <Card className="mt-8 bg-gradient-primary text-primary-foreground">
              <CardContent className="p-6 text-center">
                <div className="grid grid-cols-3 gap-4">
                  <div>
                    <div className="text-2xl font-bold mb-1">5+</div>
                    <div className="text-sm opacity-90">Anos de Experiência</div>
                  </div>
                  <div>
                    <div className="text-2xl font-bold mb-1">50+</div>
                    <div className="text-sm opacity-90">Clientes Satisfeitos</div>
                  </div>
                  <div>
                    <div className="text-2xl font-bold mb-1">15+</div>
                    <div className="text-sm opacity-90">Especialistas</div>
                  </div>
                </div>
              </CardContent>
            </Card>
          </div>
        </div>
      </div>
    </section>
  );
};

export default About;