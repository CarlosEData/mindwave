import { useState } from 'react';
import { Card, CardContent } from '@/components/ui/card';
import { Button } from '@/components/ui/button';
import { Badge } from '@/components/ui/badge';
import { ExternalLink, TrendingUp, Users, Globe } from 'lucide-react';

const Portfolio = () => {
  const [activeFilter, setActiveFilter] = useState('todos');

  const filters = [
    { id: 'todos', label: 'Todos os Projetos' },
    { id: 'ecommerce', label: 'E-commerce' },
    { id: 'institucional', label: 'Sites Institucionais' },
    { id: 'branding', label: 'Branding' },
    { id: 'campanha', label: 'Campanhas' }
  ];

  const projects = [
    {
      id: 1,
      title: 'Esdras Oil',
      category: 'institucional',
      description: 'Site institucional completo para empresa de serviços industriais com foco em performance e conversão.',
      url: 'https://www.esdrasoil.com',
      image: 'https://images.unsplash.com/photo-1586953208448-b95a79798f07?w=600&h=400&fit=crop',
      tags: ['Site Institucional', 'Industrial', 'B2B'],
      metrics: {
        performance: '95%',
        leads: '+280%',
        seo: 'Top 3'
      }
    },
    {
      id: 2,
      title: 'NextPure',
      category: 'ecommerce',
      description: 'E-commerce completo de suplementos com estratégia de conversão otimizada e experiência premium.',
      url: 'https://www.nextpure.com.br',
      image: 'https://images.unsplash.com/photo-1571019613454-1cb2f99b2d8b?w=600&h=400&fit=crop',
      tags: ['E-commerce', 'Suplementos', 'Conversão'],
      metrics: {
        conversion: '+420%',
        revenue: 'R$ 3.2M+',
        roas: '9.2x'
      }
    },
    {
      id: 3,
      title: 'ArennaHub',
      category: 'branding',
      description: 'Universo de marca completo com página de vendas de alto impacto e identidade visual premium.',
      url: 'https://www.arennahub.com.br/page-vendas/',
      image: 'https://images.unsplash.com/photo-1542744173-8e7e53415bb0?w=600&h=400&fit=crop',
      tags: ['Branding', 'Landing Page', 'Universo de Marca'],
      metrics: {
        conversion: '+380%',
        engagement: '+260%',
        brand_recall: '97%'
      }
    },
    {
      id: 4,
      title: 'KW Advocacia',
      category: 'institucional',
      description: 'Site institucional premium para escritório de advocacia com design sofisticado e alta credibilidade.',
      url: 'https://www.kwadvocacia.com.br',
      image: 'https://images.unsplash.com/photo-1589829545856-d10d557cf95f?w=600&h=400&fit=crop',
      tags: ['Advocacia', 'Premium', 'Institucional'],
      metrics: {
        leads: '+340%',
        credibility: '98%',
        conversion: '+195%'
      }
    },
    {
      id: 5,
      title: 'RefexPiscina',
      category: 'institucional',
      description: 'Plataforma digital completa para empresa de piscinas com showcase de projetos e sistema de orçamentos.',
      url: 'https://refexpiscina.com.br/',
      image: 'https://images.unsplash.com/photo-1571902943202-507ec2618e8f?w=600&h=400&fit=crop',
      tags: ['Piscinas', 'Showcase', 'Orçamentos'],
      metrics: {
        projects: '+450%',
        leads: '+320%',
        conversion: '+275%'
      }
    }
  ];

  const filteredProjects = activeFilter === 'todos' 
    ? projects 
    : projects.filter(project => project.category === activeFilter);

  return (
    <section id="portfolio" className="py-20 bg-gradient-dark relative overflow-hidden">
      {/* Background Pattern */}
      <div className="absolute inset-0 opacity-5">
        <div className="absolute inset-0" style={{
          backgroundImage: `
            radial-gradient(circle at 75% 25%, hsl(210 100% 60% / 0.1) 0%, transparent 50%),
            radial-gradient(circle at 25% 75%, hsl(210 100% 60% / 0.1) 0%, transparent 50%)
          `
        }}></div>
      </div>

      <div className="container mx-auto px-6 relative z-10">
        {/* Premium Section Header */}
        <div className="text-center mb-20">
          <h2 className="display-text text-4xl md:text-6xl lg:text-7xl font-bold mb-8">
            <span className="text-foreground">Nosso</span>
            <br />
            <span className="text-gradient-primary">
              Portfolio
            </span>
          </h2>
          <p className="text-xl md:text-2xl text-muted-foreground max-w-4xl mx-auto leading-relaxed">
            Projetos reais que <span className="text-mindwave-blue-accent font-semibold">transformaram negócios</span> e 
            geraram resultados extraordinários para nossos clientes.
          </p>
        </div>

        {/* Premium Filters */}
        <div className="flex flex-wrap justify-center gap-4 mb-16">
          {filters.map((filter) => (
            <Button
              key={filter.id}
              variant={activeFilter === filter.id ? "default" : "outline"}
              onClick={() => setActiveFilter(filter.id)}
              className={`transition-all duration-500 font-semibold px-8 py-4 text-lg hover-lift magnetic ${
                activeFilter === filter.id
                  ? 'bg-gradient-primary shadow-glow-lg scale-105'
                  : 'glass-card border-mindwave-blue text-mindwave-blue-accent hover:bg-gradient-primary hover:text-primary-foreground'
              }`}
            >
              {filter.label}
            </Button>
          ))}
        </div>

        {/* Projects Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          {filteredProjects.map((project, index) => (
            <Card 
              key={project.id} 
              className="glass-card hover:border-mindwave-blue/50 transition-all duration-700 group hover:shadow-floating overflow-hidden animate-scale-in hover-lift"
              style={{ animationDelay: `${index * 200}ms` }}
            >
              {/* Premium Project Image */}
              <div className="relative overflow-hidden">
                <img 
                  src={project.image} 
                  alt={project.title}
                  className="w-full h-56 object-cover group-hover:scale-110 transition-transform duration-700"
                />
                <div className="absolute inset-0 bg-gradient-to-t from-mindwave-dark/90 via-mindwave-dark/20 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-700"></div>
                <a
                  href={project.url}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="absolute top-4 right-4 opacity-0 group-hover:opacity-100 transition-all duration-700 glass-card p-3 hover:bg-gradient-primary hover:text-primary-foreground"
                >
                  <ExternalLink className="h-5 w-5" />
                </a>
                {/* Project URL Display */}
                <div className="absolute bottom-4 left-4 opacity-0 group-hover:opacity-100 transition-all duration-700">
                  <span className="glass-card px-3 py-1 text-xs text-mindwave-blue-accent font-medium">
                    {project.url?.replace('https://www.', '').replace('https://', '')}
                  </span>
                </div>
              </div>

              <CardContent className="p-6">
                {/* Tags */}
                <div className="flex flex-wrap gap-2 mb-3">
                  {project.tags.map((tag, tagIndex) => (
                    <Badge 
                      key={tagIndex} 
                      variant="outline" 
                      className="text-xs border-primary/30 text-primary"
                    >
                      {tag}
                    </Badge>
                  ))}
                </div>

                {/* Title and Description */}
                <h3 className="text-xl font-bold text-foreground mb-2 group-hover:text-primary transition-colors duration-300">
                  {project.title}
                </h3>
                <p className="text-muted-foreground text-sm leading-relaxed mb-4">
                  {project.description}
                </p>

                {/* Metrics */}
                <div className="grid grid-cols-3 gap-3 pt-4 border-t border-border">
                  {Object.entries(project.metrics).map(([key, value], metricIndex) => (
                    <div key={metricIndex} className="text-center">
                      <div className="text-primary font-bold text-sm">{value}</div>
                      <div className="text-xs text-muted-foreground capitalize">{key}</div>
                    </div>
                  ))}
                </div>
              </CardContent>
            </Card>
          ))}
        </div>

        {/* CTA Section */}
        <div className="text-center mt-16">
          <div className="bg-secondary/30 backdrop-blur-sm border border-border rounded-2xl p-8 max-w-2xl mx-auto">
            <div className="flex items-center justify-center space-x-2 mb-4">
              <TrendingUp className="h-6 w-6 text-primary" />
              <h3 className="text-2xl font-bold text-foreground">
                Resultados Comprovados
              </h3>
            </div>
            <p className="text-muted-foreground mb-6">
              Mais de 100 projetos entregues com resultados mensuráveis e 
              clientes satisfeitos. Que tal ser o próximo case de sucesso?
            </p>
            <Button 
              size="lg" 
              className="bg-gradient-primary hover:shadow-glow transition-all duration-500 px-8"
            >
              Criar Meu Projeto
            </Button>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Portfolio;