import Head from 'next/head'
import Image from 'next/image'
// import styles from '../styles/Home.module.css'

export default function Home() {
  return (
    <div className='screen'>
      <header>
        <section className='media-nav'>
          <a href='#' className='active'>
            Games
          </a>
          <a href='#'>Media</a>
        </section>
        <section className='settings'>
          <span className='icon'>
            <i className='fa fa-search'></i>
          </span>
          <span className='icon'>
            <i className='fa fa-cog'></i>
          </span>
          <span className='icon'>
            <img 
              className='user' 
              src='https://i1.whakoom.com/small/32/1a/72d38f3581c5479198472747607abe77.jpg'/>
          </span>
          <span className='time'>12:15 PM</span>
        </section>
      </header>
      <div className='container'>
        <section className='game-nav'>
          <div className='game active'>
            <i className='fa fa-location-arrow'></i>
          </div>
          <div className='game'>
          <div 
            className='img' 
            style={{
              background: 'url("https://i.redd.it/8pvdi0pne8a51.png")',
              backgroundSize: 'contain',
              backgroundPosition: 'center',
              transform: 'scale(1.5)'
            }} />
          </div>
          <div className='game'>
          <div 
            className='img' 
            style={{
              background: 'url("https://nerdreactor.com/wp-content/uploads/2019/08/Cyberpunk-2077.jpg")',
              backgroundSize: 'cover',
              backgroundPosition: 'center',
              transform: 'scale(1.5)'
            }} />
          </div>
          <div className='game'>
          <div 
            className='img' 
            style={{
              background: 'url("https://images.complex.com/complex/image/upload/c_fill,g_center,w_1200/fl_lossy,pg_1,q_auto/acpktrsrmleom95pj81s.jpg")',
              backgroundSize: 'cover',
              backgroundPosition: 'center',
              transform: 'scale(1.5)'
            }} />
          </div>
          <div className='game'>
          <div 
            className='img' 
            style={{
              background: 'url("https://gamehall.com.br/wp-content/uploads/2016/11/sf3.jpg")',
              backgroundSize: 'cover',
              backgroundPosition: 'center',
              transform: 'scale(1.5)'
            }} />
          </div>
          <div className='game'>
          <div 
            className='img' 
            style={{
              background: 'url("https://cdn.wallpapersafari.com/42/41/TiIG90.jpg")',
              backgroundSize: 'cover',
              backgroundPosition: 'center',
              transform: 'scale(1.5)'
            }} />
          </div>
          <div className='game'>
          <div 
            className='img' 
            style={{
              background: 'url("https://wallpapercave.com/wp/wp4162685.jpg")',
              backgroundSize: 'cover',
              backgroundPosition: 'center',
              transform: 'scale(1.5)'
            }} />
          </div>
          <div className='game'>
          <div 
            className='img' 
            style={{
              background: 'url("https://cryptopotato.com/wp-content/uploads/2022/10/shiba-eternity-nedir.jpeg")',
              backgroundSize: 'cover',
              backgroundPosition: 'center',
              transform: 'scale(1.5)'
            }} />
          </div>
        </section>
        <section className='info'>
          <span className='sub-title'>
            Official new from Playstation | 11/2/2022
          </span>
          <h1>Ready for a PS5 Adventure?</h1>
          <p>
            ASTRO'S PLAYROOM is pre-loaded and waiting for you!
            Explore the new capabilities of PS5 and feel the world...
          </p>
        </section>
      </div>
      <section id='video-trailers'>
          <div className='trailer'>
            <img 
              className='image'
              src='https://gamingbolt.com/wp-content/uploads/2021/01/The-King-of-Fighters-XV.jpg'/>
              <div className='video-info'>
                <div className='circle-player'>
                  <i className='fa fa-play'></i>
                  <span className='title'>King of Fighters 15</span>
                </div>
              </div>
          </div>
          <div className='trailer'>
            <img 
              className='image'
              src='https://segmentnext.com/wp-content/uploads/2019/11/Street-Fighter-5-Akuma-Rage.jpg'/>
              <div className='video-info'>
                <div className='circle-player'>
                  <i className='fa fa-play'></i>
                  <span className='title'>Street Fighter 6</span>
                </div>
              </div>
          </div>
          <div className='trailer'>
            <img 
              className='image'
              src='https://cdn.wccftech.com/wp-content/uploads/2019/01/MORTAL_KOMBAT_11_2.jpg'/>
              <div className='video-info'>
                <div className='circle-player'>
                  <i className='fa fa-play'></i>
                  <span className='title'>Mortal Kombat 11: Aftermath</span>
                </div>
              </div>
          </div>
          <div className='trailer'>
            <img 
              className='image'
              src='https://gameranx.com/wp-content/uploads/2022/09/Cyberpunk-2077-Phantom-Liberty-b-1024x575.png'/>
              <div className='video-info'>
                <div className='circle-player'>
                  <i className='fa fa-play'></i>
                  <span className='title'>Cyberpunk 2077: Phantom Liberty</span>
                </div>
              </div>
          </div>
        </section>
    </div>
  ) // <- return
} // <- export default function Home()
