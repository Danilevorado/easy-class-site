import { motion, AnimatePresence } from "framer-motion";
import { X, Play, ChevronDown } from "lucide-react";
import { Button } from "@/components/ui/button";
import { useState } from "react";

interface Lesson {
  id: string;
  title: string;
  thumbnail: string;
  progress: number;
  completed: boolean;
}

interface Module {
  id: string;
  title: string;
  lessons: Lesson[];
}

interface CourseModalProps {
  isOpen: boolean;
  onClose: () => void;
  course: {
    title: string;
    description?: string;
    category: string;
    image: string;
    progress: number;
    modules: Module[];
  } | null;
}

const CourseModal = ({ isOpen, onClose, course }: CourseModalProps) => {
  const [expandedModule, setExpandedModule] = useState<string | null>(null);

  if (!course) return null;

  return (
    <AnimatePresence>
      {isOpen && (
        <>
          {/* Backdrop */}
          <motion.div
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            exit={{ opacity: 0 }}
            onClick={onClose}
            className="fixed inset-0 bg-black/80 z-50 backdrop-blur-sm"
          />

          {/* Modal */}
          <motion.div
            initial={{ opacity: 0, scale: 0.9, y: 20 }}
            animate={{ opacity: 1, scale: 1, y: 0 }}
            exit={{ opacity: 0, scale: 0.9, y: 20 }}
            transition={{ type: "spring", damping: 25, stiffness: 300 }}
            className="fixed inset-4 md:inset-auto md:left-1/2 md:top-1/2 md:-translate-x-1/2 md:-translate-y-1/2 md:w-[90%] md:max-w-4xl md:max-h-[90vh] z-50 overflow-hidden rounded-lg"
          >
            <div className="bg-background h-full overflow-y-auto">
              {/* Close Button */}
              <button
                onClick={onClose}
                className="absolute top-4 right-4 z-10 w-10 h-10 rounded-full bg-black/50 hover:bg-black/70 flex items-center justify-center transition-colors"
              >
                <X className="w-5 h-5 text-white" />
              </button>

              {/* Hero Section */}
              <div className="relative h-64 md:h-96">
                <img
                  src={course.image}
                  alt={course.title}
                  className="w-full h-full object-cover"
                />
                <div className="absolute inset-0 bg-gradient-to-t from-background via-background/50 to-transparent" />
                
                {/* Course Info Overlay */}
                <div className="absolute bottom-0 left-0 right-0 p-6 md:p-8">
                  <p className="text-xs md:text-sm text-muted-foreground mb-2">{course.category}</p>
                  <h2 className="text-2xl md:text-4xl font-bold mb-4 leading-tight max-w-3xl">{course.title}</h2>
                  
                  {/* Progress Bar */}
                  <div className="w-full max-w-md h-1 bg-muted/30 rounded-full mb-6">
                    <div
                      className="h-full bg-primary rounded-full transition-all"
                      style={{ width: `${course.progress}%` }}
                    />
                  </div>

                  {/* Resume Button */}
                  <Button className="bg-white text-black hover:bg-white/90 rounded-sm px-8 h-11 font-semibold">
                    <Play className="w-5 h-5 mr-2 fill-current" />
                    Retomar
                  </Button>
                </div>
              </div>

              {/* Content Section */}
              <div className="p-6 md:p-8 bg-background">
                <h3 className="text-xl font-bold mb-2">{course.title}</h3>
                <p className="text-sm text-muted-foreground mb-6">
                  {course.modules.length} módulos • {course.modules.reduce((acc, m) => acc + m.lessons.length, 0)} aulas
                </p>

                {/* Modules */}
                <div className="space-y-4">
                  {course.modules.map((module) => (
                    <div key={module.id} className="border border-border rounded-md overflow-hidden">
                      {/* Module Header */}
                      <button
                        onClick={() => setExpandedModule(expandedModule === module.id ? null : module.id)}
                        className="w-full p-4 flex items-center justify-between bg-muted/20 hover:bg-muted/30 transition-colors"
                      >
                        <span className="font-medium">{module.title}</span>
                        <ChevronDown
                          className={`w-5 h-5 transition-transform ${
                            expandedModule === module.id ? "rotate-180" : ""
                          }`}
                        />
                      </button>

                      {/* Lessons List */}
                      <AnimatePresence>
                        {expandedModule === module.id && (
                          <motion.div
                            initial={{ height: 0 }}
                            animate={{ height: "auto" }}
                            exit={{ height: 0 }}
                            transition={{ duration: 0.2 }}
                            className="overflow-hidden"
                          >
                            <div className="p-4 space-y-3 bg-muted/10">
                              {module.lessons.map((lesson) => (
                                <div
                                  key={lesson.id}
                                  className="flex items-center gap-3 p-2 hover:bg-muted/20 rounded transition-colors cursor-pointer"
                                >
                                  {/* Checkbox */}
                                  <div className="flex-shrink-0">
                                    <div className={`w-5 h-5 rounded border-2 flex items-center justify-center ${
                                      lesson.completed ? "bg-primary border-primary" : "border-muted-foreground"
                                    }`}>
                                      {lesson.completed && (
                                        <svg className="w-3 h-3 text-background" fill="currentColor" viewBox="0 0 12 12">
                                          <path d="M10 3L4.5 8.5L2 6" stroke="currentColor" strokeWidth="2" fill="none" />
                                        </svg>
                                      )}
                                    </div>
                                  </div>

                                  {/* Thumbnail */}
                                  <div className="flex-shrink-0 relative w-24 h-14 rounded overflow-hidden">
                                    <img
                                      src={lesson.thumbnail}
                                      alt={lesson.title}
                                      className="w-full h-full object-cover"
                                    />
                                    {/* Progress bar */}
                                    {lesson.progress > 0 && (
                                      <div className="absolute bottom-0 left-0 right-0 h-1 bg-muted/30">
                                        <div
                                          className="h-full bg-primary"
                                          style={{ width: `${lesson.progress}%` }}
                                        />
                                      </div>
                                    )}
                                  </div>

                                  {/* Title */}
                                  <span className="text-sm flex-1">{lesson.title}</span>
                                </div>
                              ))}
                            </div>
                          </motion.div>
                        )}
                      </AnimatePresence>
                    </div>
                  ))}
                </div>
              </div>
            </div>
          </motion.div>
        </>
      )}
    </AnimatePresence>
  );
};

export default CourseModal;
