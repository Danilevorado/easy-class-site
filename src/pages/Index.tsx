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
        <FeaturedCourse title="Programação Full Stack 2024" description="Aprenda a criar aplicações web completas do zero. Domine React, Node.js, TypeScript e as melhores práticas do mercado. Um curso completo para transformar sua carreira em tecnologia." category="CURSO EM DESTAQUE" rating="4.9★" image={heroProgramming} />

        <div className="py-8">
          <CourseRow title="Continuar Assistindo" courses={myCourses} variant="vertical" />
          
          
        </div>
      </main>

      <footer className="border-t border-border py-8 mt-16">
        <div className="container mx-auto px-4 md:px-12">
          <div className="grid grid-cols-1 md:grid-cols-4 gap-8 mb-8">
            <div>
              <h3 className="font-bold text-lg mb-4">EduStream</h3>
              <p className="text-sm text-muted-foreground">
                Sua plataforma de cursos online com qualidade premium.
              </p>
            </div>
            <div>
              <h4 className="font-semibold mb-4">Categorias</h4>
              <ul className="space-y-2 text-sm text-muted-foreground">
                <li><a href="#" className="hover:text-foreground transition-colors">Tecnologia</a></li>
                <li><a href="#" className="hover:text-foreground transition-colors">Design</a></li>
                <li><a href="#" className="hover:text-foreground transition-colors">Negócios</a></li>
                <li><a href="#" className="hover:text-foreground transition-colors">Marketing</a></li>
              </ul>
            </div>
            <div>
              <h4 className="font-semibold mb-4">Suporte</h4>
              <ul className="space-y-2 text-sm text-muted-foreground">
                <li><a href="#" className="hover:text-foreground transition-colors">Central de Ajuda</a></li>
                <li><a href="#" className="hover:text-foreground transition-colors">Contato</a></li>
                <li><a href="#" className="hover:text-foreground transition-colors">FAQ</a></li>
              </ul>
            </div>
            <div>
              <h4 className="font-semibold mb-4">Legal</h4>
              <ul className="space-y-2 text-sm text-muted-foreground">
                <li><a href="#" className="hover:text-foreground transition-colors">Termos de Uso</a></li>
                <li><a href="#" className="hover:text-foreground transition-colors">Privacidade</a></li>
              </ul>
            </div>
          </div>
          <div className="text-center text-sm text-muted-foreground">
            © 2024 EduStream. Todos os direitos reservados.
          </div>
        </div>
      </footer>
    </div>;
};
export default Index;