function Button({children,type,className}) {
    let cssClasses = "text-lg bg-primary hover:bg-secondary text-white font-semibold"
    cssClasses += className
    return ( 
        <button type={type} className={cssClasses}>{children}</button>
     );
}

export default Button;