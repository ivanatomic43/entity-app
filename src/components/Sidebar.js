import Link from "../common/Link"

function Sidebar(){

  // TO-DO
  const links = [
    { label: 'Employees', path: '/' },
    { label: 'Managers', path: '/managers' },
    { label: 'Tasks', path: '/tasks' },
    { label: 'Orders', path: '/orders' }
  ];

  const renderedLinks = links.map((link) => {
    return <Link className="mb-3" key={link.label} to={link.path} activeClassName="font-bold border-l-4 border-blue-500 pl-2">{link.label}</Link>
  });

  return(
    <>
      <div className="ml-3">
        <div className="sticky top-0 m-5 text-center pb-3">
          <Link to="/new-entity" className="rounded font-bold text-white bg-blue-500 hover:bg-orange-300 p-3">Add Entity</Link>
        </div>
        <div className="sticky top-0 overflow-y-scroll flex flex-col items-start">
          {renderedLinks}
        </div>
      </div>
    </>
  );
}

export default Sidebar;