import AuthInputs from './components/AuthInputs.jsx';
import Header from './components/Header.jsx';
import logo from './assets/logo.png'

export default function App() {
  return (
    <>
      {/* <Header /> */}
      <header className="flex flex-col items-center justify-center mt-[2rem] mb-[2rem]">
        <img
          className='mb-[2rem] w-[11rem] h-[11rem] h-sm object-contain' 
          src={logo} 
          alt="A canvas"
        />
        <h1
          className='text-[1.5rem] font-[600] tracking-[0.4em] text-center uppercase text-[#9a3412] font-[Pacifico, cursive] m-0'
        >
          ReactArt
        </h1>
        <p className='text-[#a39191] text-center m-0'>A community of artists and art-lovers.</p>
      </header>
      <main>
        <AuthInputs />
      </main>
    </>
  );
}
