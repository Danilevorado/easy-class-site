import { Play, Plus, ChevronDown } from "lucide-react";
import { Button } from "@/components/ui/button";
import { useState } from "react";
interface CourseCardProps {
  title: string;
  image: string;
  category?: string;
  rating?: string;
  progress?: number;
}
const CourseCard = ({
  title,
  image,
  category,
  rating,
  progress
}: CourseCardProps) => {
  const [isHovered, setIsHovered] = useState(false);
  return <div className="group relative cursor-pointer transition-all duration-300" onMouseEnter={() => setIsHovered(true)} onMouseLeave={() => setIsHovered(false)}>
      {/* Card Image */}
      <div className="relative overflow-hidden rounded-lg">
        <img src={image} alt={title} className="w-full aspect-video object-cover transition-transform duration-300 group-hover:scale-110" />
        
        {/* Progress Bar */}
        {progress !== undefined && <div className="absolute bottom-0 left-0 right-0 h-1 bg-muted">
            <div className="h-full bg-primary transition-all" style={{
          width: `${progress}%`
        }} />
          </div>}

        {/* Hover Overlay */}
        {isHovered && <div className="absolute inset-0 bg-gradient-to-t from-background via-background/80 to-transparent flex flex-col justify-end p-4 animate-in fade-in duration-200">
            
            
            <div className="flex items-center gap-2 text-sm text-muted-foreground mb-3">
              {rating && <span className="text-primary font-bold">{rating}</span>}
              {category && <span>{category}</span>}
            </div>

            <div className="flex items-center gap-2">
              <Button size="sm" className="bg-primary hover:bg-primary/90">
                <Play className="w-4 h-4 mr-1" />
                Assistir
              </Button>
              <Button size="sm" variant="ghost" className="border border-border">
                <Plus className="w-4 h-4" />
              </Button>
              <Button size="sm" variant="ghost" className="border border-border">
                <ChevronDown className="w-4 h-4" />
              </Button>
            </div>
          </div>}
      </div>

      {/* Category badge on top */}
      {category && !isHovered && <div className="absolute top-2 left-2 bg-primary text-primary-foreground text-xs font-bold px-2 py-1 rounded-md">
          {category}
        </div>}
    </div>;
};
export default CourseCard;