import Curiosidade1 from '../Imagens/Curiosidade1.jpg'
import Curiosidade2 from '../Imagens/Curiosidade2.jpg'
import Curiosidade3 from '../Imagens/Curiosidade3.jpg'
import Curiosidade4 from '../Imagens/Curiosidade4.jpg'
import Curiosidade5 from '../Imagens/Curiosidade5.jpg'


import './index.css';
import styled from 'styled-components';

const Curiosidade =()=>{
    return(
        <>  
        <div >
        <div class="gallery">
            <Imagens src = {Curiosidade1} />
        <div class="desc">  Após o quinto filme a franquia tomou um rumo diferente, passando a abordar assaltos, após o diretor Justin Lin perceber que estavam ficando sem histórias sobre corridas de rua;
</div>
        </div>

        <div class="gallery">
            <Imagens src = {Curiosidade2} />
        <div class="desc">  O primeiro carro que vemos Brian dirigindo no segundo filme foi escolhido a dedo pelo próprio Paul Walker. O veículo inclusive fazia parte de sua coleção pessoas. Paul era fã de corridas e da cultura automobilística, e também participou pessoalmente da escolha de todos os outros carros do longa;
</div>
        </div>

        <div class="gallery">
            <Imagens src = {Curiosidade3} />
        <div class="desc">  O nome da franquia quase foi outra: o título originalmente era Redline, palavra utilizada nas corridas para determinar a velocidade máxima permitida, mas os cineastas decidiram trocar o nome antes do lançamento do primeiro filme;
</div>
        </div>

        <div class="gallery">
            <Imagens src = {Curiosidade4} />
        <div class="desc">  O roteiro de Velozes e Furiosos 6 (2013) originalmente daria origem para dois filmes, The Fast e The Furious, que seriam filmados simultaneamente, mas as coisas mudaram de ramo, a história foi cortada e o resultado nós já conhecemos;
</div>
        </div>

        <div class="gallery">
            <Imagens src = {Curiosidade5} />
        <div class="desc">  Vin Diesel recusou 25 milhões de dólares para aparecer no segundo filme. Aparentemente ele não tinha gostado do modo como os produtores queriam continuar a saga. O pano inicial era fazer uma sequência dos anos 80 ou 90 onde seria contada uma história sem ligação com a anterior porém com o mesmo nome.
</div>
        </div>
        


        </div>
        
        </>
    );
}

export default Curiosidade;

const Imagens = styled.img`
    width: 100px;
    height: 80px;
`;