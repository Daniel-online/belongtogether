import Logo from "/website-guilherme/Logo-1.jpg"

const Copyright = () => {
    return (
        <span className="py-2 px-2 w-full place-content-center flex">
            <img src={Logo} alt="Logo" className="w-1/12 h-1/12 rounded-lg"></img>
            <div className="py-2 px-2 flex flex-col">
                <span>Belong Together LTDA</span>
                <span>Sao Paulo - Brasil</span>
            </div>
        </span>
    )
}

export default Copyright
