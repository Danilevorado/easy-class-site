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
        <div className="absolute inset-0 bg-gradient-to-t from-background via-background/50 to-transparent" />
        <div className="absolute inset-0 bg-gradient-to-r from-background via-transparent to-transparent" />
      </div>

      {/* Content */}
      <div className="relative z-10 container mx-auto px-4 md:px-12 pb-16">
        <div className="max-w-xl">
          <h1 className="text-4xl md:text-5xl font-bold mb-4 leading-tight">
            {title}
          </h1>
          
          <p className="text-base md:text-lg text-foreground/80 mb-6 leading-relaxed max-w-lg">
            {description}
          </p>

          <div className="flex items-center gap-3">
            <Button size="lg" className="bg-foreground hover:bg-foreground/90 text-background font-bold">
              <Play className="w-5 h-5 mr-2 fill-current" />
              Assistir
            </Button>
            <Button size="lg" variant="secondary" className="bg-muted/80 hover:bg-muted text-foreground font-bold">
              <Info className="w-5 h-5 mr-2" />
              Mais Informações
            </Button>
          </div>
        </div>
      </div>
    </div>;
};
export default FeaturedCourse;