// BookContext.tsx
import React, { ReactNode, createContext, useState } from "react";

type Props = {
  children: ReactNode;
};

type FacultyData = {
  id: number;
  Name: string;
  UniueId: string;
  Code: string;
  Status: boolean;
};

export const FacultyContext = createContext<any>([]);

export const FacultyProvider = ({ children }: Props) => {

  const [faculty, setFaculty] = useState<FacultyData[]>([
    {
      id: 1,
      Name: "Full Sail University",
      UniueId: "66854-018",
      Code: "14783-320",
      Status: false,
    },
    {
      id: 2,
      Name: "Escuela Agricola Panamericana Zamorano",
      UniueId: "42406-006",
      Code: "68233-901",
      Status: false,
    },
    {
      id: 3,
      Name: "University of Tampa",
      UniueId: "59316-301",
      Code: "36987-2784",
      Status: false,
    },
    {
      id: 4,
      Name: "Universidad de Magallanes",
      UniueId: "35356-895",
      Code: "52410-4150",
      Status: true,
    },
    {
      id: 5,
      Name: "University of Texas Health Science Center at San Antonio",
      UniueId: "41520-306",
      Code: "55714-4500",
      Status: false,
    },
    {
      id: 6,
      Name: "Kaliningrad State Technical University",
      UniueId: "52125-534",
      Code: "64725-8031",
      Status: true,
    },
    {
      id: 7,
      Name: "Qiongzhou University",
      UniueId: "63629-1255",
      Code: "35356-892",
      Status: false,
    },
    {
      id: 8,
      Name: "Universidade Estadual de Ponta Grossa",
      UniueId: "60760-279",
      Code: "63824-760",
      Status: false,
    },
    {
      id: 9,
      Name: "Pepperdine University",
      UniueId: "65162-209",
      Code: "65517-2002",
      Status: false,
    },
    {
      id: 10,
      Name: "Southampton Solent University",
      UniueId: "54473-080",
      Code: "68327-039",
      Status: false,
    },
    {
      id: 11,
      Name: "Agricultural University of Lublin",
      UniueId: "51367-020",
      Code: "68151-4484",
      Status: true,
    },
    {
      id: 12,
      Name: "Saurashtra University",
      UniueId: "0603-3583",
      Code: "61715-033",
      Status: false,
    },
    {
      id: 13,
      Name: "Wilbur Wright College",
      UniueId: "0597-0115",
      Code: "49349-190",
      Status: true,
    },
    {
      id: 14,
      Name: "Kuban State University",
      UniueId: "52125-040",
      Code: "14783-329",
      Status: true,
    },
    {
      id: 15,
      Name: "Slovak University of Technology in Bratislava",
      UniueId: "41250-604",
      Code: "43353-089",
      Status: false,
    },
    {
      id: 16,
      Name: "Bentley College",
      UniueId: "53746-188",
      Code: "65044-1878",
      Status: true,
    },
    {
      id: 17,
      Name: "Institute of Business Administration (IBA)",
      UniueId: "46122-212",
      Code: "0904-2533",
      Status: false,
    },
    {
      id: 18,
      Name: "University of International Business",
      UniueId: "0031-8716",
      Code: "44911-0071",
      Status: true,
    },
    {
      id: 19,
      Name: "Universitas Negeri Surabaya",
      UniueId: "68788-9944",
      Code: "76485-1039",
      Status: false,
    },
    {
      id: 20,
      Name: "Dubai Medical College for Girls",
      UniueId: "43538-531",
      Code: "24488-023",
      Status: true,
    },
    {
      id: 21,
      Name: "Nayanova University",
      UniueId: "60505-2878",
      Code: "62670-4808",
      Status: false,
    },
    {
      id: 22,
      Name: "Universitas Yarsi",
      UniueId: "68330-001",
      Code: "10544-218",
      Status: false,
    },
    {
      id: 23,
      Name: "Universidade Autónoma de Lisboa Luís de Camoes",
      UniueId: "10736-011",
      Code: "24385-011",
      Status: true,
    },
    {
      id: 24,
      Name: "Kumoh National University of Technology",
      UniueId: "43353-659",
      Code: "0904-5709",
      Status: false,
    },
    {
      id: 25,
      Name: "International School of Management ISM Dortmund",
      UniueId: "55714-4481",
      Code: "42199-005",
      Status: false,
    },
    {
      id: 26,
      Name: "Loyola University of Chicago",
      UniueId: "0832-1217",
      Code: "68428-156",
      Status: true,
    },
    {
      id: 27,
      Name: "Evangelische Fachhochschule Ludwigshafen Hochschule für Sozial- und Gesundheitswesen",
      UniueId: "65862-460",
      Code: "59779-114",
      Status: true,
    },
    {
      id: 28,
      Name: "Academy of Sports and Physical Training",
      UniueId: "68788-9433",
      Code: "59886-322",
      Status: true,
    },
    {
      id: 29,
      Name: "University of King's College",
      UniueId: "64064-105",
      Code: "65862-625",
      Status: true,
    },
    {
      id: 30,
      Name: "Glion Institute of Higher Education",
      UniueId: "63323-411",
      Code: "58668-6190",
      Status: false,
    },
  ]);

  const [filteredFaculty, setFilteredFaculty] = useState<FacultyData[] | null>(null)
  
  const handleResetFaculty = () => {
    setFilteredFaculty(null);
    setFaculty(faculty)
  };

  const handleAddFaculty = (fac: FacultyData) => {
    setFaculty([...faculty, fac])
  };
 
  const handleDeleteFaculty = (fac: FacultyData) => {
    setFaculty(faculty.filter(f => f.id !== fac.id));
  };
 
  const handleFilterFaculty = (fac: FacultyData) => {
    setFilteredFaculty(faculty.filter(f => f.id === fac.id))
  };
 
  const handleFilterFacultyName = (facName:string) => {
    setFilteredFaculty(faculty.filter(f => f.Name.toLowerCase().includes(facName.toLowerCase())));
  };


  return (
    <FacultyContext.Provider value={{ faculty, filteredFaculty, handleAddFaculty, handleDeleteFaculty, handleResetFaculty, handleFilterFaculty, handleFilterFacultyName }}>
      {children}
    </FacultyContext.Provider>
  );
};
