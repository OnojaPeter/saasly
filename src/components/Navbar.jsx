const Navbar = () => {
  return (
    <nav className=' text-white h-[72px] lg:h-[86px]'>
        <div className="flex justify-between items-center h-full">
            <div className="font-bold text-[32px]">Saasly</div>

            <div className="hidden lg:block">
                <ul className="capitalize flex gap-x-10">
                    <li className="active font-bold">home</li>
                    <li>about</li>
                    <li>pricing</li>
                    <li>blog</li>
                    <li>jobs</li>
                    <li>pages</li>
                </ul>
            </div>

            <div className="hidden lg:flex items-center gap-x-4">
                <div><button>Sign in</button></div>
                <div><button className="px-6 py-3 rounded-[10px] border">Sign up</button></div>
            </div>

            <div className="lg:hidden flex">
                <img src="/images/menu.png" alt="" />
            </div>
        </div>
    </nav>
  )
}

export default Navbar