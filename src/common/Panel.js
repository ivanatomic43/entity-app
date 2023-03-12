import classNames from 'classnames';
function Panel({children, className, ...rest}){

    const finalClassName = classNames(
        'border-2 p-5 rounded border-gray-300 bg-gray-200',
        className
    );

    return <div {...rest} className={finalClassName}>{children}</div>

}

export default Panel;