import Link from "../common/Link"

function Sidebar(){

  // TO-DO
  const links = [
    { label: 'Employees', path: '/' },
    { label: 'Tasks', path: '/tasks' },
    { label: 'Products', path: '/products' },
    { label: 'Orders', path: '/orders' }
  ];

  const renderedLinks = links.map((link) => {
    return <Link className="mb-3" key={link.label} to={link.path} activeClassName="font-bold border-l-4 border-blue-500 pl-2">{link.label}</Link>
  });

  return(
    <>
      <div className="sticky overflow-y-scroll top-0 flex flex-col items-start mt-8 ml-5">
        {renderedLinks}
      </div>
    </>
  );
}

export default Sidebar;