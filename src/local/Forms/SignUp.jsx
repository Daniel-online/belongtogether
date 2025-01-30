
const SignUp = () => {
    return (
        <div className="justify-between h-96 shadow-lg w-80 bg-white border-s border-slate-300 rounded-lg items-center mt-[30px] mb-[30px]">

            <form action="" className="items-center space-y-4 flex flex-col py-4 px-4">
                <h1>
                    CADASTRO
                </h1>
                <div className="inputBox  py-px  text-lg max-w-max border-1 border-transparent">
                    <input type="text" placeholder="Nome Completo" className="px-2 py-2 h-12  w-max ring-1 ring-slate-300 rounded-lg  border-1 border-slate-100" ></input>
                </div>
                <div className="inputBox  py-px  text-lg max-w-max border-1 border-transparent">
                    <input type="email" placeholder="E-mail" className="px-2 py-2 h-12  w-max ring-1 ring-slate-300 rounded-lg  border-1 border-slate-100" ></input>
                </div>
                <div className="inputBox  py-px text-lg max-w-max border-1 border-transparent">
                    <input type="password" placeholder="**********" className="px-2 py-2 h-12  w-max ring-1 ring-slate-300 rounded-lg  border-1 border-slate-100" ></input>
                </div>
                <div className="inputBox  py-px  text-lg max-w-max border-1 border-transparent">
                    <input type="number"  pattern="[0-9]{2}-[0-9]{5}-[0-9]{4}" placeholder="Celular" className="px-2 py-2 h-12  w-max ring-1 ring-slate-300 rounded-lg  border-1 border-slate-100" ></input>
                </div>
                <div className="submit">
                    <input type="submit" value="Entrar" className="text-white flex items-center justify-center py-px h-8 w-16 rounded-lg bg-cyan-600 hover:text-yellow-400 hover:cursor-pointer">

                    </input>
                </div>
            </form>
        </div>
    )
}

export default SignUp
