import './Footer.css';

const  Footer = () => {
    return(
        <footer className='footer'>
            <div className='social-midia'>
                <img src={process.env.PUBLIC_URL + '/imagens/fb.png'} alt= 'facebook icon'/>
                <img src={process.env.PUBLIC_URL + '/imagens/ig.png'} alt= 'instagram icon'/>
                <img src={process.env.PUBLIC_URL + '/imagens/tw.png'} alt= 'twitter icon'/>
            </div>
            <img src={process.env.PUBLIC_URL + '/imagens/logo.png'} alt= 'logo icon'></img>
            <h3>Lino Firmano Neto</h3>
        </footer>

    )
};

export default Footer