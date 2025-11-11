import { Play, Info, Plus } from "lucide-react";
import { Button } from "@/components/ui/button";
interface FeaturedCourseProps {
  title: string;
  description: string;
  category: string;
  rating: string;
  image: string;
}
const FeaturedCourse = ({
  title,
  description,
  category,
  rating,
  image
}: FeaturedCourseProps) => {
  return <div className="relative h-[70vh] md:h-[80vh] flex items-end">
      {/* Background Image */}
      <div className="absolute inset-0 bg-cover bg-center" style={{
      backgroundImage: `url(${image})`
    }}>
        <div className="absolute inset-0 bg-gradient-to-t from-background via-background/60 to-transparent" />
        <div className="absolute inset-0 bg-gradient-to-r from-background via-background/40 to-transparent" />
      </div>

      {/* Content */}
      <div className="relative z-10 container mx-auto px-4 md:px-12 pb-20">
        <div className="max-w-2xl">
          <div className="inline-block bg-primary text-primary-foreground px-3 py-1 rounded-sm text-sm font-bold mb-4">
            {category}
          </div>
          
          <h1 className="text-4xl md:text-6xl font-bold mb-4 leading-tight">
            {title}
          </h1>
          
          <div className="flex items-center gap-3 text-sm mb-6">
            <span className="text-primary font-bold text-lg">{rating}</span>
            <span className="text-muted-foreground">2024</span>
            <span className="text-muted-foreground">40 aulas</span>
            <span className="text-muted-foreground">Nível Intermediário</span>
          </div>
          
          <p className="text-lg text-foreground/90 mb-8 leading-relaxed">
            {description}
          </p>

          <div className="flex flex-wrap gap-3">
            <Button size="lg" className="bg-primary hover:bg-primary/90 text-primary-foreground font-semibold">
              <Play className="w-5 h-5 mr-2" />
              Começar Curso
            </Button>
            <Button size="lg" variant="secondary" className="bg-secondary/80 hover:bg-secondary">
              <Info className="w-5 h-5 mr-2" />
              Mais Informações
            </Button>
            
          </div>
        </div>
      </div>
    </div>;
};
export default FeaturedCourse;