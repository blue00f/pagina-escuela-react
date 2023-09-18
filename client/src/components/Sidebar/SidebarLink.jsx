import SidebarSubsection from './SidebarSubsection.jsx'
import { Link } from 'react-router-dom'

function SidebarLink({ icon, label, url, hasSubsections, subsections }) {
  return (
    <>
      <Link to={url}>
        <li className="container-item-individual texto-semibold">
          {icon}
          <p className="texto-violeta">{label}</p>
        </li>
      </Link>
      {hasSubsections && <SidebarSubsection subsections={subsections} />}
    </>
  )
}

export default SidebarLink
