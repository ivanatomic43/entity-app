import { useState, useEffect, useRef } from "react";
import { GoChevronDown } from "react-icons/go";
import Panel from "./Panel";

function Dropdown({options, value, onChange}){

    const [isOpen, setIsOpen] = useState(false);
    const divEl = useRef();

    const handleClick = () => {
        setIsOpen(!isOpen);
    };

    const handleOptionClick = (option) => {
        setIsOpen(false);

        onChange(option);
    }

    useEffect(() => {
        const handler = (event) => {
            if(!divEl.current){ //if there is no reference
                return;
            }

            if (!divEl.current.contains(event.target)){
                setIsOpen(false);
            }
        }
        document.addEventListener('click', handler, true);

        return () => {
            document.removeEventListener('click', handler);
        };
    }, []);

    const renderedOptions = options.map((option) => {
        return(
            <div className="hover:bg-slate-300 rounded cursor-pointer p-2" onClick={() => handleOptionClick(option)} key={option.id}>
                {option.firstName} { option.lastName}
            </div>
        );
    });

    const displayName = value ? value.firstName + " " + value.lastName : false

    return(
        <div ref = {divEl} className="w-full relative">
            <Panel
                className="flex justify-between items-center cursor-pointer text-xs m-2 border-2"
                onClick={handleClick}>{displayName || 'Select Employee'} <GoChevronDown className="text-lg text-black"/>
            </Panel>
            {isOpen && <Panel className="absolute w-60 top-full left-2">{renderedOptions}</Panel>}
        </div>
    );
}

export default Dropdown;