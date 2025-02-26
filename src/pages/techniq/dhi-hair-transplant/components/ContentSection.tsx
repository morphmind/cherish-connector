import React from 'react';
import { useTranslation } from '@/hooks/useTranslation';
import { cn } from '@/lib/utils';
import { 
  Microscope, 
  Shield, 
  Heart, 
  CheckCircle,
  Sparkles,
  Syringe,
  ArrowRight
} from 'lucide-react';

export function ContentSection() {
  const { t } = useTranslation();
  const [hoveredFeature, setHoveredFeature] = React.useState<string | null>(null);
  const [hoveredStep, setHoveredStep] = React.useState<number | null>(null);
  const [hoveredAdvantage, setHoveredAdvantage] = React.useState<number | null>(null);

  return (
    <div className="relative py-24 overflow-hidden">
      {/* Background Pattern */}
      <div className="absolute inset-0">
        <div className="absolute inset-0 bg-[radial-gradient(circle_at_100%_0%,rgba(120,119,198,0.1),transparent_50%),radial-gradient(circle_at_0%_100%,rgba(74,86,226,0.15),transparent_50%)] dark:bg-[radial-gradient(circle_at_100%_0%,rgba(120,119,198,0.2),transparent_50%),radial-gradient(circle_at_0%_100%,rgba(74,86,226,0.2),transparent_50%)]" />
        <div className="absolute inset-0 overflow-hidden">
          <div className="absolute top-[20%] right-[10%] w-[400px] h-[400px] rounded-full bg-gradient-to-br from-primary/20 to-secondary/20 blur-[96px] animate-pulse dark:from-primary/10 dark:to-secondary/10" />
          <div className="absolute bottom-[10%] left-[20%] w-[300px] h-[300px] rounded-full bg-gradient-to-br from-secondary/20 to-primary/20 blur-[64px] animate-pulse dark:from-secondary/10 dark:to-primary/10" />
        </div>
        <div className="absolute inset-0 bg-noise opacity-[0.02] dark:opacity-[0.03] mix-blend-overlay" />
      </div>

      <div className="container relative z-10">
        {/* Understanding Section */}
        <div className="max-w-3xl mb-24">
          <div className="inline-flex items-center gap-2 px-4 py-2 rounded-full bg-white/80 dark:bg-white/10 backdrop-blur-md border border-black/[0.08] dark:border-white/[0.08] shadow-[0_2px_8px_rgba(0,0,0,0.04)] dark:shadow-[0_2px_8px_rgba(255,255,255,0.04)] mb-8 transition-all duration-300 hover:scale-[1.02]">
            <Sparkles className="w-4 h-4 text-primary dark:text-white" />
            <span className="text-sm font-medium text-foreground/80 dark:text-white/80">{t.dhitechnique.overview.title}</span>
          </div>
          <h2 className="text-4xl sm:text-5xl !leading-[1.2] font-bold text-foreground dark:text-white mb-4">{t.dhitechnique.overview.title}</h2>
          <p className="text-lg text-foreground/60 dark:text-white/60 leading-relaxed">
            {t.dhitechnique.overview.description}
          </p>
        </div>

        {/* Features Grid */}
        <div className="grid gap-6 md:grid-cols-2 lg:grid-cols-4 mb-24">
          {Object.entries(t.dhitechnique.overview.features).map(([key, feature]) => (
            <div
              key={key}
              className="group relative"
              onMouseEnter={() => setHoveredFeature(key)}
              onMouseLeave={() => setHoveredFeature(null)}
            >
              <div className={cn(
                "relative overflow-hidden rounded-2xl h-full transition-all duration-300",
                "bg-white/80 dark:bg-white/5 backdrop-blur-md",
                "border border-black/[0.08] dark:border-white/[0.08]",
                "shadow-[0_1px_2px_rgba(0,0,0,0.05)] dark:shadow-[0_1px_2px_rgba(255,255,255,0.05)]",
                hoveredFeature === key ? "scale-[1.02] shadow-[0_8px_16px_rgba(0,0,0,0.1)] dark:shadow-[0_8px_16px_rgba(255,255,255,0.1)]" : "hover:scale-[1.01]"
              )}>
                <div className="p-6 space-y-4">
                  <div className={cn(
                    "w-12 h-12 rounded-2xl flex items-center justify-center",
                    "bg-gradient-to-br",
                    key === 'precision' ? "from-emerald-500/20 to-green-500/20" :
                    key === 'density' ? "from-blue-500/20 to-indigo-500/20" :
                    key === 'protection' ? "from-purple-500/20 to-pink-500/20" :
                    "from-amber-500/20 to-orange-500/20"
                  )}>
                    <Shield className="w-6 h-6 text-white" />
                  </div>
                  <div>
                    <h3 className="text-lg font-semibold text-foreground dark:text-white mb-2">
                      {feature.title}
                    </h3>
                    <p className="text-sm text-foreground/60 dark:text-white/60">
                      {feature.description}
                    </p>
                  </div>
                </div>
              </div>
            </div>
          ))}
        </div>

        {/* Process Section */}
        <div className="max-w-3xl mx-auto text-center mb-12">
          <h3 className="text-2xl sm:text-3xl font-bold text-foreground dark:text-white mb-4">
            {t.dhitechnique.overview.process.title}
          </h3>
          <p className="text-lg text-foreground/60 dark:text-white/60 leading-relaxed">
            {t.dhitechnique.overview.process.description}
          </p>
        </div>

        {/* Process Steps */}
        <div className="grid gap-4 sm:gap-6 md:grid-cols-2 lg:grid-cols-3 mb-24">
          {t.dhitechnique.overview.process.steps.map((step, index) => (
            <div
              key={index}
              className="group relative"
              onMouseEnter={() => setHoveredStep(index)}
              onMouseLeave={() => setHoveredStep(null)}
            >
              <div className={cn(
                "relative overflow-hidden rounded-2xl h-full transition-all duration-300",
                "bg-white/80 dark:bg-white/5 backdrop-blur-md",
                "border border-black/[0.08] dark:border-white/[0.08]",
                "shadow-[0_1px_2px_rgba(0,0,0,0.05)] dark:shadow-[0_1px_2px_rgba(255,255,255,0.05)]",
                hoveredStep === index ? "scale-[1.02] shadow-[0_8px_16px_rgba(0,0,0,0.1)] dark:shadow-[0_8px_16px_rgba(255,255,255,0.1)]" : "hover:scale-[1.01]"
              )}>
                <div className="relative p-6 pt-8 space-y-4">
                  <div className={cn(
                    "w-12 h-12 rounded-2xl flex items-center justify-center",
                    "bg-gradient-to-br",
                    index === 0 ? "from-emerald-500/20 to-green-500/20" :
                    index === 1 ? "from-blue-500/20 to-indigo-500/20" :
                    "from-purple-500/20 to-pink-500/20"
                  )}>
                    {index === 0 ? (
                      <Microscope className="w-6 h-6 text-white" />
                    ) : index === 1 ? (
                      <Shield className="w-6 h-6 text-white" />
                    ) : (
                      <Syringe className="w-6 h-6 text-white" />
                    )}
                  </div>

                  <div className="relative">
                    <h3 className="text-lg font-semibold text-foreground dark:text-white mb-2">
                      {step.title}
                    </h3>
                    <p className="text-sm text-foreground/60 dark:text-white/60">
                      {step.description}
                    </p>
                  </div>
                </div>
              </div>
            </div>
          ))}
        </div>

        {/* Advantages Section */}
        <div className="max-w-3xl mx-auto text-center mb-12">
          <div className="inline-flex items-center gap-2 px-4 py-2 rounded-full bg-white/80 dark:bg-white/10 backdrop-blur-md border border-black/[0.08] dark:border-white/[0.08] shadow-[0_2px_8px_rgba(0,0,0,0.04)] dark:shadow-[0_2px_8px_rgba(255,255,255,0.04)] mb-8 transition-all duration-300 hover:scale-[1.02]">
            <Heart className="w-4 h-4 text-primary dark:text-white" />
            <span className="text-sm font-medium text-foreground/80 dark:text-white/80">{t.dhitechnique.advantages.title}</span>
          </div>
          <h2 className="text-3xl sm:text-4xl md:text-5xl !leading-[1.2] font-bold text-foreground dark:text-white mb-4">{t.dhitechnique.advantages.title}</h2>
          <p className="text-lg text-foreground/60 dark:text-white/60 leading-relaxed">
            {t.dhitechnique.advantages.description}
          </p>
        </div>

        {/* Advantages Grid */}
        <div className="grid gap-6 md:grid-cols-2 lg:grid-cols-4">
          {t.dhitechnique.advantages.items.map((advantage, index) => (
            <div
              key={index}
              className="group relative"
              onMouseEnter={() => setHoveredAdvantage(index)}
              onMouseLeave={() => setHoveredAdvantage(null)}
            >
              <div className={cn(
                "relative overflow-hidden rounded-2xl h-full transition-all duration-300",
                "bg-white/80 dark:bg-white/5 backdrop-blur-md",
                "border border-black/[0.08] dark:border-white/[0.08]",
                "shadow-[0_1px_2px_rgba(0,0,0,0.05)] dark:shadow-[0_1px_2px_rgba(255,255,255,0.05)]",
                hoveredAdvantage === index ? "scale-[1.02] shadow-[0_8px_16px_rgba(0,0,0,0.1)] dark:shadow-[0_8px_16px_rgba(255,255,255,0.1)]" : "hover:scale-[1.01]"
              )}>
                <div className="p-6 space-y-4">
                  <div className={cn(
                    "w-12 h-12 rounded-2xl flex items-center justify-center",
                    "bg-gradient-to-br",
                    index === 0 ? "from-emerald-500/20 to-green-500/20" :
                    index === 1 ? "from-blue-500/20 to-indigo-500/20" :
                    index === 2 ? "from-purple-500/20 to-pink-500/20" :
                    "from-amber-500/20 to-orange-500/20"
                  )}>
                    <CheckCircle className="w-6 h-6 text-white" />
                  </div>
                  <div>
                    <h3 className="text-lg font-semibold text-foreground dark:text-white mb-2">
                      {advantage.title}
                    </h3>
                    <p className="text-sm text-foreground/60 dark:text-white/60">
                      {advantage.description}
                    </p>
                  </div>
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
}