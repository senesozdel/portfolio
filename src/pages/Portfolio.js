import React from 'react';
import { Github, Linkedin, ExternalLink } from 'lucide-react';

const ProjectCard = ({ title, technologies, description, features, projectLink }) => (
    <div className="container mx-auto max-w-3xl px-4">
      <div className="bg-white p-6 rounded-lg shadow-md mb-6">
        <div className="text-center mb-3">
          <div className="flex justify-center items-center">
            <h2 className="text-2xl font-bold text-blue-700">{title}</h2>
            <a href={projectLink} 
               target="_blank" 
               rel="noopener noreferrer" 
               className="ml-2 text-gray-500 hover:text-blue-600 transition-colors">
              <ExternalLink className="w-5 h-5" />
            </a>
          </div>
        </div>
        <div className="bg-blue-50 p-3 rounded-md mb-4">
          <span className="font-semibold">Teknolojiler:</span> {technologies}
        </div>
        <p className="text-gray-700 mb-4">{description}</p>
        <h3 className="font-semibold text-lg mb-2 text-center">Özellikler:</h3>
        <div className="flex justify-center w-full">
          <ul className="list-disc text-gray-600 space-y-2">
            {features.map((feature, index) => (
              <li key={index} className="text-left">{feature}</li>
            ))}
          </ul>
        </div>
      </div>
    </div>
);


const Portfolio = () => {
  const projects = [
    {
        title: "Chart Analiz Projesi",
        technologies: "React JS, .NET Core Web API, SQL Server, Redux Toolkit, React-Chart.js, ADO.NET",
        description: "SQL Server veritabanından alınan verileri dinamik olarak görselleştiren, filtreleme ve analiz imkanı sunan modern web uygulaması.",
        features: [
          "Backend: .NET Core Web API ile REST servisleri",
          "Veritabanı: SQL Server (View, Stored Procedure ve Fonksiyonlar)",
          "Frontend: React JS ve Redux Toolkit ile state yönetimi",
          "React-Chart.js ile dinamik grafik görselleştirme",
          "Toastify ile kullanıcı bildirimleri",
          "React-Select ile gelişmiş filtreleme özellikleri",
        ],
        projectLink: "https://drive.google.com/file/d/1wHFFFLGGPpap46j3C8ZIP1HCLyowfgzo/view?usp=drive_link" // Projenin gerçek linkini buraya ekleyebilirsiniz
      }
      ,
    {
      title: "Web API Projesi",
      technologies: ".NET Core Web API, Entity Framework Core, SQL Server, JWT",
      description: "Kurumsal düzeyde, güvenli ve ölçeklenebilir RESTful API çözümü.",
      features: [
        "Tam kapsamlı CRUD operasyonları",
        "JWT tabanlı güvenlik sistemi",
        "Detaylı Swagger API dokümantasyonu",
        "Repository pattern ile sürdürülebilir kod yapısı"
      ],
      projectLink: "https://drive.google.com/file/d/1ZdevU_qAWE4l3AobhiG_KVO5c85F7gmN/view?usp=drive_link"
    },
    {
        title: "Otobüs Bilet Satış Projesi",
        technologies: "ASP.NET Core MVC, MSSQL, Entity Framework, ASP.NET Core Identity, Iyzico Payment System",
        description: "Online ödeme sistemi entegrasyonlu modern otobüs bileti satış platformu.",
        features: [
          "Backend: ASP.NET Core MVC ve Entity Framework",
          "Veritabanı: MSSQL entegrasyonu",
          "ASP.NET Core Identity ile kullanıcı yönetimi",
          "Iyzico ödeme sistemi entegrasyonu",
          "Çoklu Area yapısı (Admin, Customer, Welcome)",
          "Dinamik koltuk seçim sistemi",
          "SMS doğrulama sistemi",
          "Session tabanlı kullanıcı veri yönetimi",
          "Admin paneli ile tam CRUD operasyonları",
          "Responsive ve kullanıcı dostu arayüz"
        ],
        projectLink: "https://drive.google.com/file/d/16P2TIVAUNbf2gww3tOHvsdfqRTEB1y-p/view?usp=drive_link" // Projenin gerçek linkini buraya ekleyebilirsiniz
      }
      ,
    {
        title: "E-Ticaret Projesi",
        technologies: "ASP.NET Core API, React JS, MSSQL, Entity Framework, JWT Authentication",
        description: "MVC mimarisi ile geliştirilmiş, kullanıcı kimlik doğrulaması içeren modern e-ticaret web uygulaması.",
        features: [
          "Backend: ASP.NET Core API ve MVC mimarisi",
          "Veritabanı: MSSQL ve Entity Framework entegrasyonu",
          "JWT tabanlı kullanıcı kimlik doğrulama sistemi",
          "Alışveriş sepeti ve sipariş yönetimi",
          "Favori ürün listeleme özelliği",
          "Kullanıcı sipariş geçmişi takibi",
          "Responsive tasarım ile modern kullanıcı arayüzü",
          "Session yönetimi ve güvenli API entegrasyonu"
        ],
        projectLink: "https://drive.google.com/file/d/1gJSMaG5CiTXfsj8dKWBZJkrYzzcxnUMS/view?usp=drive_link" // Projenin gerçek linkini buraya ekleyebilirsiniz
      }
      ,
    {
      title: "Burger King Sipariş Sistemi",
      technologies: "Windows Form App .NET Framework, SQL Server, TCP/IP",
      description: "Profesyonel restoran sipariş ve yönetim otomasyonu.",
      features: [
        "Entegre kasa yönetim sistemi",
        "Real-time mutfak sipariş ekranı",
        "Müşteri bekleme ekranı",
        "TCP/IP tabanlı birimler arası iletişim"
      ],
      projectLink: "https://drive.google.com/file/d/1PVFnCDBHTjxuSECMrsZqv0FX_cqZfEEB/view?usp=drive_link"
    }
  ];

  return (
    <div className="min-h-screen bg-gray-50 py-12 px-4">
      <div className="max-w-4xl mx-auto">
      <header className="text-center mb-12">
  <div className="flex items-center justify-center gap-6 mb-4">
    <img 
      src="./images/enes.png" 
      alt="Salih Enes ÖZDEL" 
      className="w-24 h-24 rounded-full object-cover border-4 border-blue-800 shadow-lg"
    />
    <h1 className="text-4xl font-bold text-blue-800">Salih Enes ÖZDEL</h1>
  </div>
  <div className="flex justify-center space-x-4">
    <a href="https://github.com/senesozdel" 
      className="flex items-center text-gray-600 hover:text-blue-600 transition-colors">
      <Github className="w-5 h-5 mr-2" />
      GitHub
    </a>
    <a href="https://www.linkedin.com/in/salih-enes-%C3%B6zdel-41b802227/" 
      className="flex items-center text-gray-600 hover:text-blue-600 transition-colors">
      <Linkedin className="w-5 h-5 mr-2" />
      LinkedIn
    </a>
  </div>
</header>


        <div className="space-y-6">
          {projects.map((project, index) => (
            <ProjectCard key={index} {...project} />
          ))}
        </div>

        <footer className="mt-12 text-center text-gray-600">
          <p>© 2025 Senesozdel Tüm hakları saklıdır.</p>
        </footer>
      </div>
    </div>
  );
};

export default Portfolio;
