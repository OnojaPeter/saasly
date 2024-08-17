const Button = ({text, icon, style}) => {
  return (
    <button className={`flex px-10 py-5 gap-1 rounded-[10px] justify-center ${style}`}>
        {text}
        {icon && <img src={icon} alt="" />}
    </button>
  )
}

export default Button