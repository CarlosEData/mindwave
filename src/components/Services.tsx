import { Card, CardContent, CardDescription, CardHeader, CardTitle } from '@/components/ui/card';
import { Button } from '@/components/ui/button';
import { 
  Globe, 
  ShoppingCart, 
  Palette, 
  TrendingUp, 
  Bot, 
  Share2, 
  Target, 
  Lightbulb 
} from 'lucide-react';

const Services = () => {
  const services = [
    {
      icon: Globe,
      title: 'Desenvolvimento Web',
      description: 'Sites institucionais e landing pages otimizadas para conversão e performance.',
      features: ['Design Responsivo', 'SEO Otimizado', 'Carregamento Rápido', 'Analytics Integrado']
    },
    {
      icon: ShoppingCart,
      title: 'E-commerce',
      description: 'Lojas virtuais completas com integração de pagamentos e gestão avançada.',
      features: ['Múltiplos Pagamentos', 'Gestão de Estoque', 'Relatórios Avançados', 'Mobile First']
    },
    {
      icon: Palette,
      title: 'Branding & Design',
      description: 'Identidade visual completa que comunica a essência da sua marca.',
      features: ['Logo Profissional', 'Manual da Marca', 'Materiais Gráficos', 'Papelaria Completa']
    },
    {
      icon: TrendingUp,
      title: 'Tráfego Pago',
      description: 'Campanhas publicitárias estratégicas para maximizar ROI e conversões.',
      features: ['Google Ads', 'Facebook Ads', 'Instagram Ads', 'LinkedIn Ads']
    },
    {
      icon: Bot,
      title: 'Automação com IA',
      description: 'Chatbots inteligentes e automações que melhoram o atendimento ao cliente.',
      features: ['ChatBot 24/7', 'IA Conversacional', 'Integração CRM', 'Análise Preditiva']
    },
    {
      icon: Share2,
      title: 'Social Media',
      description: 'Gestão completa das redes sociais com conteúdo estratégico e engajamento.',
      features: ['Planejamento Editorial', 'Design de Posts', 'Gestão de Comunidade', 'Relatórios de Métricas']
    },
    {
      icon: Target,
      title: 'Landing Pages',
      description: 'Páginas de alta conversão focadas em resultados e experiência do usuário.',
      features: ['A/B Testing', 'Otimização CRO', 'Formulários Inteligentes', 'Heatmaps']
    },
    {
      icon: Lightbulb,
      title: 'Consultoria Digital',
      description: 'Estratégias personalizadas para acelerar a transformação digital do seu negócio.',
      features: ['Auditoria Digital', 'Plano Estratégico', 'Mentoria Executiva', 'Roadmap de Crescimento']
    }
  ];

  return (
    <section id="services" className="py-20 bg-gradient-dark relative overflow-hidden">
      {/* Background Pattern */}
      <div className="absolute inset-0 opacity-5">
        <div className="absolute inset-0" style={{
          backgroundImage: `
            radial-gradient(circle at 25% 25%, hsl(210 100% 60% / 0.1) 0%, transparent 50%),
            radial-gradient(circle at 75% 75%, hsl(210 100% 60% / 0.1) 0%, transparent 50%)
          `
        }}></div>
      </div>

      <div className="container mx-auto px-6 relative z-10">
        {/* Section Header */}
        <div className="text-center mb-16">
          <h2 className="text-3xl md:text-4xl lg:text-5xl font-bold mb-6">
            <span className="bg-gradient-to-r from-primary to-mindwave-blue-light bg-clip-text text-transparent">
              Soluções 360°
            </span>
            <br />
            <span className="text-foreground">para seu Negócio</span>
          </h2>
          <p className="text-lg text-muted-foreground max-w-2xl mx-auto leading-relaxed">
            Oferecemos um ecossistema completo de serviços digitais para acelerar 
            o crescimento da sua empresa no ambiente digital.
          </p>
        </div>

        {/* Services Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6 mb-16">
          {services.map((service, index) => {
            const IconComponent = service.icon;
            return (
              <Card 
                key={index} 
                className="bg-card/50 backdrop-blur-sm border-border hover:border-primary/50 transition-all duration-500 group hover:shadow-elegant animate-scale-in"
                style={{ animationDelay: `${index * 100}ms` }}
              >
                <CardHeader className="text-center pb-4">
                  <div className="w-16 h-16 mx-auto mb-4 bg-gradient-primary rounded-2xl flex items-center justify-center group-hover:shadow-glow transition-all duration-500 group-hover:scale-110">
                    <IconComponent className="h-8 w-8 text-primary-foreground" />
                  </div>
                  <CardTitle className="text-xl font-bold text-foreground group-hover:text-primary transition-colors duration-300">
                    {service.title}
                  </CardTitle>
                </CardHeader>
                <CardContent className="text-center">
                  <CardDescription className="text-muted-foreground mb-4 leading-relaxed">
                    {service.description}
                  </CardDescription>
                  <ul className="space-y-2 text-sm">
                    {service.features.map((feature, featureIndex) => (
                      <li key={featureIndex} className="flex items-center justify-center space-x-2">
                        <div className="w-1.5 h-1.5 bg-primary rounded-full"></div>
                        <span className="text-muted-foreground">{feature}</span>
                      </li>
                    ))}
                  </ul>
                </CardContent>
              </Card>
            );
          })}
        </div>

        {/* CTA Section */}
        <div className="text-center">
          <div className="bg-secondary/30 backdrop-blur-sm border border-border rounded-2xl p-8 max-w-2xl mx-auto">
            <h3 className="text-2xl font-bold text-foreground mb-4">
              Pronto para Transformar seu Negócio?
            </h3>
            <p className="text-muted-foreground mb-6">
              Fale com nossos especialistas e descubra como podemos acelerar 
              o crescimento digital da sua empresa.
            </p>
            <Button 
              size="lg" 
              className="bg-gradient-primary hover:shadow-glow transition-all duration-500 px-8"
            >
              Solicitar Proposta
            </Button>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Services;