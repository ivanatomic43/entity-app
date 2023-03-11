import { Fragment } from "react";
import Button  from '../common/Button'

function Table({data, config, keyFn, onDelete}){

  const handleDeleteClick = (event) => {
    console.log(event.target.id);
    onDelete(event.target.id);
  }
  const handleEditClick = (event) => {
    console.log("Editing..." + event.target.id);
  }

    const renderedRows = data.map((rowData) => {
      const renderedCells = config.map((object) =>{
        return(
          <td className="p-2 text-center border-2 border-slate-50 bg-slate-200" key={object.label}>{object.render(rowData)}</td>
        );
      });

      return(
        <tr className="border-b" key={keyFn(rowData)}>
          {renderedCells}
          <td className="p-2 text-center border-2 border-slate-50 bg-slate-200" >
            <Button id={keyFn(rowData)} onClick={handleEditClick} className=" p-2 rounded bg-orange-400 text-white font-bold">Edit</Button>
            <Button id={keyFn(rowData)} onClick={handleDeleteClick} className="p-2 ml-2 rounded bg-red-600 text-white font-bold">Delete</Button>
          </td>
        </tr>
      );
    });

    const renderedHeaders = config.map((object) => {
      if(object.header) {
        return <Fragment key={object.label}>{object.header()}</Fragment>
      }

      return(<th className="p-2 text-black border-2 border-slate-50 bg-blue-500" key={object.label}>{object.label}</th>)
    });

    return(
      <table className="table-auto border-spacing-2 w-full">
        <thead>
          <tr className="border-b-2">
            {renderedHeaders}
            <th className="p-2 text-black border-2 border-slate-50 bg-blue-500">Manage</th>
          </tr>
        </thead>
        <tbody>
          {renderedRows}
        </tbody>
      </table>
    );
}

export default Table;