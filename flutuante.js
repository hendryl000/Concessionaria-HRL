
    function exibirInformacoes(nomeCarro) {
      var informacoesCarro = document.getElementById('informacoesCarro');
      var conteudoFlutuante = '';

      if (nomeCarro === 'Supra') {
        conteudoFlutuante += '<img src="fotos/supra.png" alt="Supra">';
        conteudoFlutuante += '<h3>Supra</h3>';
        conteudoFlutuante += '<p>O Toyota Supra é um icônico carro esportivo fabricado pela montadora japonesa Toyota. Ele é conhecido por seu desempenho excepcional e estilo marcante. Aqui estão algumas especificações gerais sobre o Toyota Supra:</p>'
        conteudoFlutuante += '<p>Motor: O Supra atual (a partir do relato do conhecimento até 2021) é equipado com um motor 3.0 litros turboalimentado de seis cilindros em linha. Essa configuração de motor fornece um alto nível de potência e torque. A potência pode variar de cerca de 335 a 382 cavalos de potência (hp), dependendo da versão e da configuração do motor.</p>'
        conteudoFlutuante += '<p>Transmissão: O Supra normalmente vem com uma transmissão automática de oito velocidades. Essa transmissão permite mudanças rápidas de marcha e é ajustada para oferecer uma experiência de direção esportiva.</p>'
        conteudoFlutuante += '<p>Desempenho: Graças ao seu motor turboalimentado e configuração de tração traseira, o Toyota Supra oferece um desempenho impressionante. Ele pode acelerar de 0 a 100 km/h em cerca de 4 segundos, dependendo da versão e das condições de direção.</p>'
        conteudoFlutuante += '<p>Recursos e tecnologia: O Supra é equipado com uma variedade de recursos e tecnologias de alta qualidade. Isso pode incluir um sistema de infotainment com tela sensível ao toque, conectividade Bluetooth, navegação por satélite, sistema de som premium, controle de clima dual-zone, câmera de visão traseira, sensores de estacionamento, sistemas de segurança avançados, como frenagem automática de emergência, alerta de colisão e assistência de permanência na faixa, entre outros recursos esportivos.</p>'
        conteudoFlutuante += '<p>Design: O Toyota Supra possui um design elegante e aerodinâmico, com linhas agressivas e proporções esportivas. Ele apresenta um perfil de cupê de duas portas, com uma aparência moderna e distinta que reflete seu caráter esportivo.</p>'
        conteudoFlutuante += '<p>Capacidade: O Supra é um carro esportivo de dois lugares, projetado para fornecer um ambiente focado no motorista. O espaço interno é limitado, mas oferece conforto adequado para o motorista e o passageiro.</p>'

        conteudoFlutuante += '<h3>Preço: R$ 1.300.000,00</h3>';
        conteudoFlutuante += '<button style="display: block; margin: 0 auto;" onclick="abrirCheckout(\'Supra\', 1300000, 60, 1.5)">Comprar</button>';
      }

      if (nomeCarro === 'Civic') {
        conteudoFlutuante += '<img src="fotos/civic.png" alt="Civic">';
        conteudoFlutuante += '<h3>Civic</h3>';
        conteudoFlutuante += '<p>O Civic G10, também conhecido como Honda Civic 10ª geração, é um sedan compacto produzido pela montadora japonesa Honda. Aqui estão algumas especificações resumidas sobre o Honda Civic G10:</p>';
        conteudoFlutuante += '<p>Motor: O Civic G10 está disponível com diferentes opções de motor, dependendo do mercado. As opções de motor podem incluir motores a gasolina e motores a diesel, com potência variando de acordo com a versão. Além disso, algumas versões podem oferecer tecnologia de eficiência de combustível, como o sistema de economia de combustível Earth Dreams da Honda.</p>';        
        conteudoFlutuante += '<p>Transmissão: O Civic G10 normalmente vem com uma transmissão automática do tipo CVT (Continuously Variable Transmission) ou uma transmissão manual de seis velocidades.</p>';       
        conteudoFlutuante += '<p>Tração: O Civic G10 possui tração dianteira (FWD), que é a configuração padrão. Não é oferecida uma opção de tração nas quatro rodas.</p>';        
        conteudoFlutuante += '<p>Capacidade: O Honda Civic G10 é um sedan compacto que pode acomodar confortavelmente até cinco passageiros. Ele oferece espaço adequado para os passageiros na parte dianteira e traseira, bem como um porta-malas com capacidade para bagagens e outros itens.</p>';       
        conteudoFlutuante += '<p>Recursos e tecnologia: O Civic G10 é conhecido por oferecer uma variedade de recursos e tecnologias avançadas. Isso pode incluir recursos como sistema de entretenimento com tela sensível ao toque, conectividade Bluetooth, integração com smartphones, sistema de som premium, câmera de visão traseira, sensores de estacionamento, controle de clima dual-zone e sistemas de assistência ao motorista, como frenagem de emergência, assistência de permanência na faixa e controle de cruzeiro adaptativo, dependendo da versão e dos pacotes de opcionais disponíveis.</p>'; 
        conteudoFlutuante += '<p>Design: O design do Civic G10 apresenta linhas esportivas e aerodinâmicas, com uma aparência moderna e elegante. A décima geração do Civic adotou um estilo mais agressivo, com uma frente marcante e uma traseira distintiva.</p>';
        
        conteudoFlutuante +='<p>Essas são apenas algumas especificações resumidas do Honda Civic G10. Lembre-se de que as especificações exatas podem variar de acordo com o mercado e a versão do veículo. É sempre recomendável verificar as informações mais recentes no site oficial da Honda ou entrar em contato com uma concessionária para obter detalhes específicos sobre as especificações do Civic G10.</p>';
        conteudoFlutuante += '<h3>Preço: R$ 675.900</h3>';
        conteudoFlutuante += '<button style="display: block; margin: 0 auto;" onclick="abrirCheckout(\'Civic\', 675900, 48, 1.2)">Comprar</button>';
      }

      if (nomeCarro === 'BMW X6') {
        conteudoFlutuante += '<img src="fotos/bmwx6.png" alt="Civic">';
        conteudoFlutuante += '<h3>BMW</h3>';
        conteudoFlutuante += '<p>A BMW X6 é um veículo utilitário esportivo (SUV) de luxo fabricado pela montadora alemã BMW. Aqui estão algumas especificações gerais sobre a BMW X6:</p>';
        conteudoFlutuante +='<p>Motor: A BMW X6 está disponível em várias opções de motorização, dependendo do ano e da versão do veículo. As opções de motores podem variar de um modelo para outro, mas geralmente incluem motores a gasolina e motores a diesel. A potência pode variar de cerca de 300 cavalos de potência (hp) a mais de 600 hp nas versões de alto desempenho.</p>';      
        conteudoFlutuante +='<p>Transmissão: A transmissão pode ser automática de oito velocidades, que é comumente encontrada na maioria das versões da BMW X6. Além disso, algumas versões podem oferecer uma opção de transmissão manual.</p>';       
        conteudoFlutuante +='<p>Tração: A BMW X6 é oferecida com tração nas quatro rodas (AWD). Dependendo da versão, o sistema de tração nas quatro rodas pode ser ajustável para melhorar o desempenho em diferentes condições de direção.</p>';       
        conteudoFlutuante +='<p>Capacidade: A BMW X6 é um SUV de porte médio a grande, que pode acomodar confortavelmente até cinco passageiros. Além disso, possui um amplo espaço de carga na traseira para bagagens e outros itens.</p>';        
        conteudoFlutuante +='<p>Recursos e tecnologia: A BMW X6 é conhecida por oferecer uma ampla gama de recursos de luxo e tecnologia. Isso pode incluir assentos de couro premium, sistema de infotainment com tela sensível ao toque, navegação por satélite, conectividade Bluetooth, sistema de som premium, câmera de visão traseira, sensores de estacionamento, controle de clima dual-zone, entre outros recursos avançados.</p>'; 
        conteudoFlutuante +='<p>Design: A BMW X6 possui um design distintivo e esportivo, com linhas aerodinâmicas e uma aparência robusta. Ela apresenta um perfil de teto rebaixado, que confere um visual coupé, combinado com a versatilidade de um SUV.</p>';
        conteudoFlutuante +='<p>Essas são apenas algumas das especificações gerais da BMW X6. É importante observar que as especificações exatas podem variar de acordo com o ano de fabricação e a versão do veículo. Recomenda-se consultar o site oficial da BMW ou entrar em contato com uma concessionária para obter informações mais precisas sobre as especificações da BMW X6 atual.</p>';
        
        conteudoFlutuante += '<h3>Preço: R$ 744 950,00</h3>';
        conteudoFlutuante += '<button style="display: block; margin: 0 auto;" onclick="abrirCheckout(\'BMW X6\', 744950, 72, 1.8)">Comprar</button>';
      }

      if (nomeCarro === 'Kombi VW') {
        conteudoFlutuante += '<img src="fotos/Kombi.png" alt="Kombi">';
        conteudoFlutuante += '<h3>Kombi</h3>';
        conteudoFlutuante += '<p></p>';
        conteudoFlutuante += '<p>A Kombi é um icônico veículo utilitário fabricado pela montadora alemã Volkswagen. Embora a produção da Kombi tenha sido encerrada em 2013, ela é muito conhecida e ainda é amplamente utilizada em várias partes do mundo. Aqui estão algumas especificações resumidas da Kombi:</p>'
        conteudoFlutuante += '<p>Motor: A Kombi estava disponível com diferentes opções de motor, dependendo do ano e da versão do veículo. As opções de motor podem variar de um modelo para outro, mas geralmente incluem motores a gasolina refrigerados a ar. A potência pode variar de cerca de 50 a 80 cavalos de potência (hp), dependendo do modelo.</p>'
        conteudoFlutuante += '<p>Transmissão: A Kombi normalmente vinha com uma transmissão manual de quatro ou cinco velocidades.</p>'
        conteudoFlutuante += '<p>Tração: A Kombi possui tração traseira (RWD), onde a potência é transmitida para as rodas traseiras do veículo.</p>'
        conteudoFlutuante += '<p>Capacidade: A Kombi é conhecida por sua configuração espaçosa e versátil. Ela normalmente oferece assentos para até nove passageiros, dependendo da configuração interna. Além disso, possui um amplo espaço de carga na parte traseira, o que a torna popular para uso comercial.</p>'
        conteudoFlutuante += '<p>Recursos e tecnologia: A Kombi foi projetada como um veículo utilitário básico, com foco em funcionalidade e durabilidade. Ela pode não oferecer os mesmos recursos avançados de tecnologia encontrados em veículos mais modernos. No entanto, dependendo do ano de fabricação e da versão, algumas características podem incluir rádio AM/FM, aquecimento e ventilação básicos, janelas elétricas (em versões mais recentes) e outras opções de personalização.</p>'
        conteudoFlutuante += '<p>Design: O design da Kombi é caracterizado por suas linhas retas e estilo minimalista. Ela tem uma forma quadrada e distinta, com uma carroceria alta e amplas janelas, que fornecem uma boa visibilidade.</p>'

        conteudoFlutuante += '<h3>Preço: R$ 9.500,00</h3>';
        conteudoFlutuante += '<button style="display: block; margin: 0 auto;" onclick="abrirCheckout(\'Kombi VW\', 9500, 12, 1.1)">Comprar</button>';
      }
      
      if (nomeCarro === 'Up Tsi') {
        conteudoFlutuante += '<img src="fotos/uptsi.png" alt="Up Tsi">';
        conteudoFlutuante += '<h3>Up Tsi</h3>';
        conteudoFlutuante += '<p>O Volkswagen Up! TSI é um carro compacto fabricado pela montadora alemã Volkswagen. Ele se destaca por seu tamanho compacto, eficiência de combustível e desempenho. Aqui estão algumas especificações sobre o Volkswagen Up! TSI:</p>';
        conteudoFlutuante += '<p>Motor: O Up! TSI é equipado com um motor 1.0 litro turboalimentado de três cilindros. Esse motor oferece boa potência em relação ao tamanho, com potência variando geralmente entre 95 a 115 cavalos de potência (hp), dependendo da versão e do ajuste do motor.</p>'
        conteudoFlutuante += '<p>Transmissão: O Up! TSI geralmente vem com uma transmissão manual de cinco velocidades. Além disso, algumas versões podem oferecer uma opção de transmissão automatizada de embreagem única (ASG) ou uma transmissão automática de seis velocidades.</p>'
        conteudoFlutuante += '<p>Eficiência de combustível: O motor TSI do Up! é conhecido por sua eficiência de combustível. Ele é projetado para oferecer um bom equilíbrio entre desempenho e economia. Combinado com seu tamanho compacto, o Up! TSI é um carro econômico em termos de consumo de combustível.</p>'
        conteudoFlutuante += '<p>Recursos e tecnologia: Apesar de ser um carro compacto, o Up! TSI pode oferecer uma variedade de recursos e tecnologias. Isso pode incluir sistema de infotainment com tela sensível ao toque, conectividade Bluetooth, integração com smartphones, sistemas de assistência ao motorista, como frenagem automática de emergência, controle de estabilidade, assistência de partida em rampa e sensores de estacionamento, dependendo da versão e dos pacotes opcionais disponíveis.</p>'
        conteudoFlutuante += '<p>Design: O Up! TSI possui um design moderno e atraente, com linhas simples e proporcionais. Seu tamanho compacto facilita a manobrabilidade em áreas urbanas congestionadas, enquanto seu estilo elegante e urbano o torna um carro atraente.</p>'
        conteudoFlutuante += '<p>Capacidade: O Up! TSI é um carro compacto que oferece espaço adequado para os ocupantes dianteiros e traseiros, com capacidade para até quatro passageiros. Embora o espaço no porta-malas seja mais limitado em comparação com carros maiores, o Up! TSI possui recursos de dobragem e ajuste dos bancos traseiros para aumentar a capacidade de carga quando necessário.</p>'
        
        conteudoFlutuante += '<h3>Preço: R$ 675.900</h3>';
        conteudoFlutuante += '<button style="display: block; margin: 0 auto;" onclick="abrirCheckout(\'Up Tsi\', 39999, 24, 1.3)">Comprar</button>';
      }
      
      if (nomeCarro === 'Punto T Jet') {
        conteudoFlutuante += '<img src="fotos/punto t jet.png" alt="Punto T Jet">';
        conteudoFlutuante += '<h3>Punto T Jet</h3>';
        conteudoFlutuante += '<p>Motor: O Punto T-Jet é equipado com um motor 1.4 litro turboalimentado de quatro cilindros. Esse motor oferece um desempenho mais esportivo em comparação com as versões convencionais do Punto, com potência geralmente variando entre 120 a 155 cavalos de potência (hp), dependendo da versão e do ajuste do motor.</p>'
        conteudoFlutuante += '<p>Transmissão: O Punto T-Jet geralmente vem com uma transmissão manual de seis velocidades. Além disso, algumas versões podem oferecer uma opção de transmissão automatizada de embreagem única (Dualogic) ou uma transmissão automática.</p>'
        conteudoFlutuante += '<p>Desempenho: Com seu motor turboalimentado, o Punto T-Jet oferece um desempenho mais esportivo. Ele pode acelerar de 0 a 100 km/h em tempos mais curtos em comparação com as versões convencionais do Punto.</p>'
        conteudoFlutuante += '<p>Recursos e tecnologia: O Punto T-Jet pode oferecer uma variedade de recursos e tecnologias, dependendo da versão e do pacote opcional. Isso pode incluir sistema de infotainment com tela sensível ao toque, conectividade Bluetooth, sistema de som premium, controle de clima automático, sensores de estacionamento, faróis de LED, entre outros recursos esportivos.</p>'
        conteudoFlutuante += '<p>Design: O Punto T-Jet possui um design mais esportivo em comparação com as versões convencionais do Punto. Ele pode incluir detalhes aerodinâmicos, spoilers dianteiros e traseiros, rodas de liga leve exclusivas e um estilo mais agressivo, que destaca sua natureza esportiva.</p>'
        conteudoFlutuante += '<p>Capacidade: O Punto T-Jet é um hatchback compacto que oferece espaço adequado para os ocupantes dianteiros e traseiros, com capacidade para até cinco passageiros. O espaço do porta-malas é relativamente amplo para um carro de seu tamanho, permitindo o transporte de bagagens e outros itens.</p>'

        conteudoFlutuante += '<h3>Preço: R$ 675.900</h3>';
        conteudoFlutuante += '<button style="display: block; margin: 0 auto;" onclick="abrirCheckout(\'Punto T Jet\', 44990, 36, 1.4)">Comprar</button>';
      }

      informacoesCarro.innerHTML = conteudoFlutuante;
      exibirModal();
    }

    function exibirModal() {
      var modal = document.querySelector('.modal');
      modal.style.display = 'block';
    }

    function fecharInformacoes() {
      var modal = document.querySelector('.modal');
      modal.style.display = 'none';
    }
