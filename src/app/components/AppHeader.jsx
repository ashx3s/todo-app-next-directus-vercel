import Link from "next/link";

export default function AppHeader() {
  return (
    <header className='px-4 lg:px-12 py-8 flex justify-between items-center'>
      <nav className='flex justify-between gap-4 grow-2'>
        <div>
          <Link href='/' className='block'>
            LOGO
          </Link>
        </div>
        <ul className='flex gap-4  mx-8'>
          <li>
            {/* Make this a protected route */}
            <Link href='/todo-app'>TODO App</Link>
          </li>
          <li>
            <Link href='/login'>Sign In</Link>
          </li>
        </ul>
      </nav>
      <div className='flex gap-4 '>
        {/* hrefDO: Logout buthrefn only visible when user is logged in */}
        <button>Logout</button>
        <div>AVATAR</div>
      </div>
    </header>
  );
}
