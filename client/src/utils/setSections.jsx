import {
  HomeIcon,
  PublicationIcon,
  InstitutionIcon,
  BookIcon,
  QuestionIcon,
  BriefcaseIcon,
} from '../components/Icons/Icons.jsx'

export const sections = [
  {
    icon: <HomeIcon />,
    label: 'Inicio',
    url: '/',
    hasSubsections: false,
    subsections: [],
  },
  {
    icon: <PublicationIcon />,
    label: 'Publicaciones',
    url: 'publicaciones',
    hasSubsections: false,
    subsections: [],
  },
  {
    icon: <InstitutionIcon />,
    label: 'Institución',
    hasSubsections: true,
    subsections: [
      { label: 'Nuestra historia', url: 'nuestra-historia' },
      { label: 'Autoridades', url: 'autoridades' },
      { label: 'Documentos', url: 'documentos' },
    ],
  },
  {
    icon: <BriefcaseIcon />,
    label: 'Prácticas Profesionalizantes',
    url: 'practicas-profesionalizantes',
    hasSubsections: false,
    subsections: [],
  },
  {
    icon: <BookIcon />,
    label: 'Plan de estudio',
    hasSubsections: true,
    subsections: [
      { label: 'Computación', url: 'computacion' },
      { label: 'GAO', url: 'gao' },
      { label: 'Ciclo básico', url: 'ciclo-basico' },
    ],
  },
  {
    icon: <QuestionIcon />,
    label: 'Asesoramiento de inscripciones',
    url: 'preguntas-frecuentes',
    hasSubsections: false,
    subsections: [],
  },
]
