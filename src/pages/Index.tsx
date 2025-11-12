import Header from "@/components/Header";
import FeaturedCourse from "@/components/FeaturedCourse";
import CourseRow from "@/components/CourseRow";
import heroProgramming from "@/assets/hero-programming.jpg";
import courseDesign from "@/assets/course-design.jpg";
import courseAI from "@/assets/course-ai.jpg";
import courseMobile from "@/assets/course-mobile.jpg";
import courseMarketing from "@/assets/course-marketing.jpg";
import coursePhoto from "@/assets/course-photo.jpg";
import courseMusic from "@/assets/course-music.jpg";
import courseBusiness from "@/assets/course-business.jpg";
const Index = () => {
  const myCourses = [{
    id: "1",
    title: "Desenvolvimento Web Completo",
    image: courseDesign,
    category: "Tecnologia",
    rating: "4.8★",
    progress: 65
  }, {
    id: "2",
    title: "Inteligência Artificial e Machine Learning",
    image: courseAI,
    category: "IA",
    rating: "4.9★",
    progress: 30
  }, {
    id: "3",
    title: "Desenvolvimento Mobile com React Native",
    image: courseMobile,
    category: "Mobile",
    rating: "4.7★",
    progress: 45
  }, {
    id: "4",
    title: "Marketing Digital Avançado",
    image: courseMarketing,
    category: "Marketing",
    rating: "4.6★",
    progress: 80
  }, {
    id: "5",
    title: "Fotografia Profissional",
    image: coursePhoto,
    category: "Arte",
    rating: "4.8★",
    progress: 20
  }];
  const popularCourses = [{
    id: "6",
    title: "Python para Data Science",
    image: courseAI,
    category: "Tecnologia",
    rating: "4.9★"
  }, {
    id: "7",
    title: "UI/UX Design Essencial",
    image: courseDesign,
    category: "Design",
    rating: "4.8★"
  }, {
    id: "8",
    title: "Produção Musical Digital",
    image: courseMusic,
    category: "Música",
    rating: "4.7★"
  }, {
    id: "9",
    title: "Gestão de Projetos Ágeis",
    image: courseBusiness,
    category: "Negócios",
    rating: "4.6★"
  }, {
    id: "10",
    title: "Desenvolvimento iOS com Swift",
    image: courseMobile,
    category: "Mobile",
    rating: "4.8★"
  }];
  const newCourses = [{
    id: "11",
    title: "Blockchain e Criptomoedas",
    image: courseAI,
    category: "Tecnologia",
    rating: "4.7★"
  }, {
    id: "12",
    title: "Fotografia de Produto",
    image: coursePhoto,
    category: "Fotografia",
    rating: "4.8★"
  }, {
    id: "13",
    title: "Marketing de Conteúdo",
    image: courseMarketing,
    category: "Marketing",
    rating: "4.6★"
  }, {
    id: "14",
    title: "Empreendedorismo Digital",
    image: courseBusiness,
    category: "Negócios",
    rating: "4.9★"
  }, {
    id: "15",
    title: "Edição de Vídeo Profissional",
    image: courseDesign,
    category: "Vídeo",
    rating: "4.7★"
  }];
  return <div className="min-h-screen bg-background">
      <Header />
      
      <main className="pt-16">
        <FeaturedCourse title="Programação Full Stack 2024" description="Aprenda a criar aplicações web completas do zero. Domine React, Node.js, TypeScript e as melhores práticas do mercado." category="CURSO EM DESTAQUE" rating="4.9★" image={heroProgramming} />

        <div className="px-4 md:px-12 py-12 space-y-12">
          <CourseRow title="Continuar Assistindo" courses={myCourses} variant="vertical" />
          <CourseRow title="Populares" courses={popularCourses} variant="vertical" />
          <CourseRow title="Novos Cursos" courses={newCourses} variant="vertical" />
        </div>
      </main>
    </div>;
};
export default Index;