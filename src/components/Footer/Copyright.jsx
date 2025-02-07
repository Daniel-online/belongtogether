import beKlubeLogo from "/BeKlube-Logo.png"

const Copyright = () => {
    return (
        <span className="py-2 px-2 w-auto place-content-center flex">
            <img src={beKlubeLogo} alt="Logo" className="w-1/5 h-1/5"></img>
            <div className="py-2 px-2 flex flex-col">
                <span>Be Klube Digital Merachefet Negocios LTDA 57.448.202/0001-18</span>
                <span>Sao Paulo - Brasil</span>
            </div>
        </span>
    )
}

export default Copyright
