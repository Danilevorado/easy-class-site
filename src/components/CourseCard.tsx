import { Play, Plus, ChevronDown } from "lucide-react";
import { Button } from "@/components/ui/button";
import { useState } from "react";
interface CourseCardProps {
  title: string;
  image: string;
  category?: string;
  rating?: string;
  progress?: number;
  variant?: "horizontal" | "vertical";
}
const CourseCard = ({
  title,
  image,
  category,
  rating,
  progress,
  variant = "horizontal"
}: CourseCardProps) => {
  return <div className="group relative cursor-pointer transition-transform duration-300 hover:scale-105">
      {/* Card Image */}
      <div className="relative overflow-hidden rounded-sm">
        <img src={image} alt={title} className={`w-full ${variant === "vertical" ? "aspect-[3/4]" : "aspect-video"} object-cover`} />
        
        {/* Progress Bar */}
        {progress !== undefined && <div className="absolute bottom-0 left-0 right-0 h-1 bg-muted/50">
            <div className="h-full bg-primary transition-all" style={{
          width: `${progress}%`
        }} />
          </div>}
      </div>
    </div>;
};
export default CourseCard;