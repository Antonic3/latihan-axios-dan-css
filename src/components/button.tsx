const Button: React.FC<React.HTMLAttributes<HTMLButtonElement>> = ({
    children,
    className
}) => {
    return (
        <button className={className}>{children}</button>
    )
}
export default Button;