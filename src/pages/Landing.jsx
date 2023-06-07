import logo from '../assets/images/logo.svg'
import main from '../assets/images/main.svg'

const Landing = () => {
  return (
    <main>
      <nav>
        <img src={logo} alt='jobster logo' className='logo' />
      </nav>
      <div className='container page'>
        {/* info */}
        <div className='info'>
          <h1>
            job <span>tracking</span> app
          </h1>
          <p>
            Lorem ipsum dolor, sit amet consectetur adipisicing elit. Quod iusto
            laboriosam eius expedita accusamus eaque nobis tempore quas
            consequatur saepe dolore, autem atque est! Laboriosam corporis ab
            odio quibusdam hic.
          </p>
          <button className='btn hero-btn'>register/login</button>
        </div>
        <img src={main} alt='jobster main' className='img main-img' />
      </div>
    </main>
  )
}
export default Landing
