import Filme1 from '../Imagens/Velozes1.jpg'
import Filme2 from '../Imagens/Velozes2.jpg'
import Filme3 from '../Imagens/Velozes3.jpg'
import Filme4 from '../Imagens/Velozes4.jpg'
import './videos.css';
import styled from 'styled-components';

const Fotos =()=>{
    return(
        <>  
        <div >
        <div class="gallery">
            <Imagens src = {Filme1} />
        <div class="desc">Dominic Toretto (Vin Diesel) é o líder de uma gangue de corridas de ruas em Los Angeles que está sendo investigado pela polícia por roubo de equipamentos eletrônicos. Para investigá-lo é enviado Brian O'Conner (Paul Walker), que se infiltra na gangue na intenção de descobrir se Toretto é realmente o autor dos crimes ou se há alguém mais por trás deles.
</div>
        </div>

        <div class="gallery">
       
        <Imagens src={Filme2}/>
      
        <div class="desc">Após deixar a polícia, Brian O'Conner (Paul Walker) é forçado a participar de uma nova missão: se infiltrar no crime organizado de Miami de forma a investigar sobre o transporte de dinheiro sujo para Carter Verone (Cole Hauser), o chefe do tráfico local. Para tanto ele recebe a ajuda de seu ex-colega Roman Pearce (Tyrese) e da agente secreta Monica Clemente (Eva Mendes).
</div>
        </div>

        <div class="gallery">
        
        <Imagens src={Filme3}/>
       
        <div class="desc">Sean Boswell é um adolescente superficial e infeliz, que usa as corridas de rua como válvula de escape. Seu envolvimento irresponsável nas corridas fez com que Sean tivesse problemas com a polícia anteriormente. Após bater com o carro, e como forma de evitar a prisão, Sean é enviado para Tóquio, onde passa a morar com seu pai . Em sua nova cidade Sean fica inteiramente deslocado até conhecer Twinkie, que lhe apresenta as corridas de drift. 
</div>
        </div>

        <div class="gallery">
       
        <Imagens src={Filme4}/>
      
        <div class="desc">Depois de ser visto rumo ao México no filme que deu origem a série, Toretto reaparece na República Dominicana praticando seus golpes ao lado de sua namorada e sua gangue. Com o FBI na sua cola, Dom decide fugir para não comprometer seus comparsas. Contudo, um assassinato cometido por um traficante de drogas acende nele uma sede de vingança que o faz cruzar novamente com o agente Brian O'Conner numa perigosa missão.</div>
        </div>

        

        </div>
        
       
        

        </>
    );
}

export default Fotos;

const Imagens = styled.img`
    width: 100px;
    height: 80px;
`;