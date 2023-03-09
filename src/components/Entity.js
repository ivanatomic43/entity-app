import Link from '../common/Link'

function Entity({pageTitle}) {
  return (
    <div className="m-3">
      <div className="flex flex-row justify-end">
        <Link to={`/add-${pageTitle.toLowerCase()}`} className="bg-gray-200 rounded p-3">Add {pageTitle}</Link>
      </div>
      <div className="m-5">
        This is {pageTitle} page.
      </div>
    </div>
  )
}

export default Entity
