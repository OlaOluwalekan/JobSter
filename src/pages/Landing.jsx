import { Link } from 'react-router-dom'
import main from '../assets/images/main.svg'
import Wrapper from '../assets/wrappers/Testing'
import Logo from '../components/Logo'

const Landing = () => {
  return (
    <Wrapper>
      <nav>
        <Logo />
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
          <Link to='/register' className='btn hero-btn'>
            register/login
          </Link>
        </div>
        <img src={main} alt='jobster main' className='img main-img' />
      </div>
    </Wrapper>
  )
}

export default Landing
