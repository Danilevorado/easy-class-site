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
  return <div className="relative h-[60vh] sm:h-[70vh] md:h-[80vh] flex items-end">
      {/* Background Image */}
      <div className="absolute inset-0 bg-cover bg-center" style={{
      backgroundImage: `url(${image})`
    }}>
        <div className="absolute inset-0 bg-gradient-to-t from-background via-background/50 to-transparent" />
        <div className="absolute inset-0 bg-gradient-to-r from-background via-transparent to-transparent" />
      </div>

      {/* Content */}
      <div className="relative z-10 container mx-auto px-3 sm:px-4 md:px-12 pb-8 sm:pb-12 md:pb-16">
        <div className="max-w-xl">
          <h1 className="text-2xl sm:text-3xl md:text-5xl font-bold mb-3 sm:mb-4 leading-tight">
            {title}
          </h1>
          
          <p className="text-sm sm:text-base md:text-lg text-foreground/80 mb-4 sm:mb-6 leading-relaxed max-w-lg line-clamp-3 sm:line-clamp-none">
            {description}
          </p>

          <div className="flex items-center gap-2 sm:gap-3">
            <Button size="sm" className="bg-foreground hover:bg-foreground/90 text-background font-bold sm:text-base h-9 sm:h-11 px-4 sm:px-6">
              <Play className="w-4 h-4 sm:w-5 sm:h-5 mr-1 sm:mr-2 fill-current" />
              Assistir
            </Button>
            <Button size="sm" variant="secondary" className="bg-muted/80 hover:bg-muted text-foreground font-bold sm:text-base h-9 sm:h-11 px-4 sm:px-6">
              <Info className="w-4 h-4 sm:w-5 sm:h-5 mr-1 sm:mr-2" />
              <span className="hidden sm:inline">Mais Informações</span>
              <span className="sm:hidden">Info</span>
            </Button>
          </div>
        </div>
      </div>
    </div>;
};
export default FeaturedCourse;