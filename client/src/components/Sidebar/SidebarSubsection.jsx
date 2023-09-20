import { Link } from 'react-router-dom'

function SidebarSubsection({ subsections }) {
  return (
    <ul className="container-subitems">
      {subsections.map((subsection, index) => (
        <li className="fondo" key={index}>
          <Link
            className="subitem texto-semibold texto-violeta"
            to={subsection.url}
          >
            {subsection.label}
          </Link>
        </li>
      ))}
    </ul>
  )
}

export default SidebarSubsection
