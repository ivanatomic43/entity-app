import className from 'classnames';

const Button = ({
  children,
  primary,
  rounded,
  full,
  onClick,
  disabled,
  ...rest
}) => {

  const classes = className(rest.className, {
    'text-white bg-blue-500 rounded hover:bg-orange-300 font-bold': primary,
    'rounded bg-gray-100': rounded && disabled,
    'w-full': full,
  })

  return (
    <button {...rest} className={classes} onClick={onClick} disabled={disabled}>{children}</button>
  )
}

export default Button