import Link from "../common/Link"

//ovde izvuci sve entitije i dodati u links dinamicno;

function Sidebar(){

  //links su lista entiteta koji posroje u sistemu
    const links = [
        { label: 'Employee', path: '/' },
        { label: 'Task', path: '/tasks' }
    ];

    const renderedLinks = links.map((link) => {
        return <Link className="mb-3" key={link.label} to={link.path} activeClassName="font-bold border-l-4 border-blue-500 pl-2">{link.label}</Link>
    });


    return(
      <>
        <div>
          <div className="sticky top-0 m-5 text-center pb-3">
            <Link to="/new-entity" className="rounded bg-gray-200 hover:bg-gray-300 p-3">Add Entity</Link>
          </div>
          <div className="sticky top-0 overflow-y-scroll flex flex-col items-start">
            {renderedLinks}
          </div>
        </div>
      </>
    );

}

export default Sidebar;