import { ChevronLeft, ChevronRight } from "lucide-react";
import { Button } from "@/components/ui/button";
import CourseCard from "./CourseCard";
import { useRef, useState } from "react";

interface Course {
  id: string;
  title: string;
  image: string;
  category?: string;
  rating?: string;
  progress?: number;
}

interface CourseRowProps {
  title: string;
  courses: Course[];
  variant?: "horizontal" | "vertical";
}

const CourseRow = ({ title, courses, variant = "horizontal" }: CourseRowProps) => {
  const scrollRef = useRef<HTMLDivElement>(null);
  const [showLeftArrow, setShowLeftArrow] = useState(false);
  const [showRightArrow, setShowRightArrow] = useState(true);

  const scroll = (direction: "left" | "right") => {
    if (scrollRef.current) {
      const scrollAmount = direction === "left" ? -800 : 800;
      scrollRef.current.scrollBy({ left: scrollAmount, behavior: "smooth" });
      
      setTimeout(() => {
        if (scrollRef.current) {
          setShowLeftArrow(scrollRef.current.scrollLeft > 0);
          setShowRightArrow(
            scrollRef.current.scrollLeft < 
            scrollRef.current.scrollWidth - scrollRef.current.clientWidth - 10
          );
        }
      }, 300);
    }
  };

  return (
    <div className="relative group/row mb-8">
      <h2 className="text-2xl font-bold mb-4 px-4 md:px-12">{title}</h2>
      
      {/* Left Arrow */}
      {showLeftArrow && (
        <Button
          variant="ghost"
          size="icon"
          className="absolute left-0 top-1/2 -translate-y-1/2 z-10 h-full w-12 rounded-none bg-background/80 hover:bg-background/95 opacity-0 group-hover/row:opacity-100 transition-opacity"
          onClick={() => scroll("left")}
        >
          <ChevronLeft className="w-8 h-8" />
        </Button>
      )}

      {/* Courses Container */}
      <div
        ref={scrollRef}
        className="flex gap-2 overflow-x-auto scrollbar-hide px-4 md:px-12 pb-4"
      >
        {courses.map((course) => (
          <div key={course.id} className={`flex-none ${variant === "vertical" ? "w-[200px] md:w-[240px]" : "w-[280px] md:w-[320px]"}`}>
            <CourseCard {...course} variant={variant} />
          </div>
        ))}
      </div>

      {/* Right Arrow */}
      {showRightArrow && (
        <Button
          variant="ghost"
          size="icon"
          className="absolute right-0 top-1/2 -translate-y-1/2 z-10 h-full w-12 rounded-none bg-background/80 hover:bg-background/95 opacity-0 group-hover/row:opacity-100 transition-opacity"
          onClick={() => scroll("right")}
        >
          <ChevronRight className="w-8 h-8" />
        </Button>
      )}
    </div>
  );
};

export default CourseRow;
