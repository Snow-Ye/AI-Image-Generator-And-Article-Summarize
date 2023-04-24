import { logo } from '../assets';
import '../utils/article.css';



const Hero = () => {
  return (
    <header className="w-full flex justify-center items-center flex-col" >

      <nav className="flex justify-between items-center w-full mb-10 pt-3 " >
        <button
          type="button"
          onClick = {() => {window.open("https://github.com/Snow-Ye/Article-Summarize-AI")}}
          style={{
    borderRadius: '9999px',
    borderWidth: '2px',
    marginLeft: 'auto',
    borderStyle: 'solid',
    borderColor: '#F97316',
    backgroundImage: 'linear-gradient(to bottom right, #FB7BA2,#E5BEEC)',
    paddingTop: '0.375rem',
    paddingBottom: '0.375rem',
    paddingLeft: '1.25rem',
    paddingRight: '1.25rem',
    fontSize: '0.875rem',
    color: '#1F2937',
    transition: 'all 0.3s ease',
    backgroundColor: '#F97316',
    // marginBottom: '1rem',
   position: 'relative',
    top: '-2rem' 
  }}
        >
          GitHub
        </button>
        

      </nav>
      <h1 className = "mt-0 text-5xl font-extrabold leading-[1.15] text-black sm:text-6xl text-center" >
        <span className = "blue_gradient">Summarize Articles</span> <br className = "max-md:hidden"/>
        <span className = "pink_gradient">with</span> <br className = "max-md:hidden"/>
        <span className = "orange_gradient">GPT-4</span>

      </h1>
      <h2 className = "purple_gradient">
          Simplify your reading by transforming lengthy articles into clear and concise summaries
      </h2>





    </header>
  )
}

export default Hero
