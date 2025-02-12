import { Footer } from "@/components/footer"
import { Header } from "@/components/header"
import { Hero } from "@/components/hero"
import {
  Accordion,
  AccordionContent,
  AccordionItem,
  AccordionTrigger,
} from "@/components/ui/accordion"
import { Separator } from "@/components/ui/separator"

export default function PrivacyPolicy() {
  return (
    <div className="bg-slate-100">
      <Header />
      <Hero />
      <div className="flex flex-col flex-1 px-8 my-8 max-w-[840px] mx-auto">
        <h1 className="font-semibold text-xl">Termos de uso</h1>
        <Accordion type="single" collapsible className="w-full mt-4">
          <AccordionItem value="item-1">
            <AccordionTrigger>
              1. Sobre o que se tratam estes Termos de Uso
            </AccordionTrigger>
            <AccordionContent>
              1.1. A IPSEC Tecnologia em Segurança Ltda., inscrita no CNPJ sob o
              nº 08.359.769/0001-02 (“Orbizy”), é responsável pelo aplicativo
              móvel, disponível neste link da Google Play Store e Apple Store
              (“App”), que consiste em uma ferramenta de gestão para
              profissionais autônomos e pequenos negócios (“Empreendedores”,
              “Empreendedor” ou simplesmente “você”).
              <br /> 1.2. Estes Termos de Uso (“Termos”) devem ser observados
              pelos Empreendedores que usam em seus negócios as soluções
              oferecidas pela Orbizy, tais como o App, dentre outras que vierem
              a ser desenvolvidas pela Orbizy (“nossas Soluções”, “Soluções” ou,
              individualmente, “Solução”).
            </AccordionContent>
          </AccordionItem>
          <AccordionItem value="item-2">
            <AccordionTrigger>
              2. Condições para acessar e usar as soluções da Orbizy
            </AccordionTrigger>
            <AccordionContent>
              2.1. Você poderá acessar e visualizar estes Termos a qualquer
              momento através de link disponível no rodapé do site da Orbizy e
              no App.
              <br />
              2.2. Estes Termos poderão ser atualizados, a qualquer tempo, pela
              Orbizy, mediante aviso no App ou no Site e/ou por e-mail, se você
              tiver optado por receber comunicações da Orbizy por esse meio.
              <br />
              2.3. Para acessar e usar nossas Soluções, você deve ter pelo menos
              18 (dezoito) anos de idade, plena capacidade legal e
              imputabilidade penal.
              <br />
              2.4. Para usar nossas Soluções, você deverá:
              <br />
              (i) fornecer, no mínimo, um e-mail válido (“Cadastro”);
              <br />
              (ii) fornecer apenas informações verdadeiras, responsabilizando-se
              com exclusividade e mesmo perante terceiros, por todo e qualquer
              dano ou prejuízo decorrente das informações fornecidas, inclusive
              se estas forem consideradas incorretas, inverídicas ou
              incompletas, sujeitando-se a todas as sanções aplicáveis nos
              termos da legislação brasileira, inclusive em âmbito criminal;
              <br />
              (iii) utilizar nossas Soluções apenas para finalidades lícitas,
              reconhecendo que você é o único responsável pelo uso das nossas
              Soluções, isentando a Orbizy de toda e qualquer responsabilidade
              por danos ou prejuízos decorrentes de seu uso.
              <br />
              (iv) se abster de disponibilizar ou inserir em nossas Soluções
              qualquer conteúdo ilícito, contrário à moral e aos bons costumes,
              ou que possa violar direitos de terceiros, bem como material que
              incorpore vírus ou elementos nocivos nas nossas Soluções, ou que
              prejudique o sistema da Orbizy;
              <br />
              (v) se abster de nos enviar mensagens agressivas ou ofensivas, bem
              como se abster de praticar assédio sexual ou moral contra os
              colaboradores da Orbizy através das nossas plataformas de
              atendimento.
              <br />
              2.5. A Orbizy não solicita a senha ou informações financeiras de
              você por e-mail nem por aplicativos de mensagem como WhatsApp e
              Messenger, em hipótese alguma e em qualquer circunstância.
              <br />
              2.6. O acesso e a utilização das nossas Soluções por você têm,
              como regra, caráter gratuito, mas o uso de determinadas
              funcionalidades pode ser cobrado.
            </AccordionContent>
          </AccordionItem>
          <AccordionItem value="item-3">
            <AccordionTrigger>3. Aceitação dos Termos de Uso</AccordionTrigger>
            <AccordionContent>
              3.1. Ao realizar seu Cadastro, você adere aos Termos de forma
              livre, expressa, consciente e informada, declarando ainda que teve
              acesso a estes Termos e que leu e concorda com todas as suas
              condições. Você não pode e não deve usar as nossas Soluções se não
              concordar com estes Termos, e caso discorde de qualquer termo aqui
              mencionado, deve cancelar o procedimento de Cadastro e abster-se
              de utilizar nossas Soluções.
              <br />
              3.2. Você compreende que o consentimento dado acima pode ser
              revogado a qualquer momento, dentro do próprio App ou mediante
              requerimento encaminhado à Orbizy por meio do e-mail
              contato@orbizy.app, o que acarretará a exclusão dos dados e
              informações eventualmente coletados pelo uso das nossas Soluções,
              com exceção daqueles cuja coleta e tratamento são feitos com outra
              base legal que não o consentimento e daqueles que somos legalmente
              obrigados a manter.
            </AccordionContent>
          </AccordionItem>
          <AccordionItem value="item-4">
            <AccordionTrigger>
              4. Regras específicas sobre o app Orbizy
            </AccordionTrigger>
            <AccordionContent>
              4.1. O App tem diversas funcionalidades disponíveis gratuitamente
              e por tempo indeterminado, bem como funcionalidades exclusivas
              disponíveis apenas mediante pagamento recorrente (“Assinaturas”).
              <br />
              4.2. A Orbizy está em permanente evolução. Estamos sempre nos
              esforçando para melhorar o aplicativo. Por isso, a Orbizy pode
              alterar, unilateralmente e sem aviso prévio, quais funcionalidades
              ficam disponíveis gratuitamente ou apenas mediante pagamento.
              <br />
              4.3. Se você tiver contratado uma Assinatura, e as funções
              disponíveis gratuitamente ou mediante pagamento forem alteradas,
              você não terá direito ao reembolso de nenhum valor que tiver pago
              para contratar a referida Assinatura.
              <br />
              4.4. A Orbizy pode alterar, unilateralmente e sem aviso prévio, os
              preços e a periodicidade das Assinaturas.
              <br />
              4.5. A Orbizy, por mera liberalidade, pode decidir não cobrar de
              você preços atuais, se você estiver em dia com a assinatura da
              Versão Paga contratada. No entanto, mesmo diante dessa
              liberalidade, a Orbizy pode aplicar os preços atuais no próximo
              vencimento da sua assinatura, para manter o equilíbrio contratual.
              <br />
              4.6. A Orbizy pode cobrar preços diferentes dos Empreendedores,
              seja por causa dos preços aplicados à época da contratação, seja
              por causa de experimentos de precificação.
              <br />
              4.7. Após o prazo legal de arrependimento, a contratação das
              Assinaturas é irretratável. Ou seja, se você contratar uma
              Assinatura, mas desistir, mudar de ideia ou não se interessar mais
              pela Assinatura durante o período contratado, você não receberá
              nenhum reembolso, seja total ou parcial.
            </AccordionContent>
          </AccordionItem>
          <AccordionItem value="item-5">
            <AccordionTrigger>
              5. Duração e finalização do uso das soluções da Orbizy
            </AccordionTrigger>
            <AccordionContent>
              5.1. O acesso às nossas Soluções é concedido por prazo
              indeterminado, exceto quando se tratar de alguma funcionalidade
              exclusiva das Assinaturas, cujo acesso é disponibilizado por prazo
              determinado.
              <br />
              5.2. A Orbizy, no entanto, pode encerrar, suspender ou interromper
              unilateralmente, a qualquer momento e sem necessidade de prévio
              aviso, o acesso às Soluções, sem que qualquer indenização seja
              devida a você.
              <br />
              5.3. A Orbizy pode recusar, suspender ou retirar seu acesso às
              Soluções, a qualquer momento e sem necessidade de prévio aviso,
              por iniciativa própria ou por exigência de um terceiro, se você
              descumprir qualquer disposição destes Termos.
            </AccordionContent>
          </AccordionItem>
          <AccordionItem value="item-6">
            <AccordionTrigger>
              6. Isenção de responsabilidade da Orbizy
            </AccordionTrigger>
            <AccordionContent>
              6.1. A Orbizy poderá excluir de suas Soluções, a seu exclusivo
              critério e sem necessidade de aviso prévio, qualquer conteúdo ou
              informação que viole a legislação brasileira, a moral e os bons
              costumes geralmente aceitos, quaisquer direitos de terceiros, que
              seja ofensivo, difamatório ou abusivo ou desrespeite, de qualquer
              forma, qualquer disposição destes Termos.
              <br />
              6.2. A Orbizy reserva-se o direito de, sem necessidade de qualquer
              aviso prévio, recusar ou descontinuar as Soluções por
              Empreendedores que estejam em desacordo com estes Termos ou com
              alto risco de fraude.
              <br />
              6.3. Em decorrência de questões técnicas e operacionais, a Orbizy
              não pode garantir a total disponibilidade, infalibilidade e
              continuidade do funcionamento de suas Soluções, nem garante a
              utilidade de suas Soluções, para a realização de qualquer
              atividade em concreto. Desse modo, a Orbizy não será, em hipótese
              alguma, responsável por quaisquer danos decorrentes da interrupção
              do acesso às Soluções, ou por falhas de funcionamento deste, nem
              se responsabiliza pela defraudação da utilidade que você possa ter
              atribuído às Soluções, pela sua falibilidade, nem por qualquer
              dificuldade de acesso.
              <br />
              6.4. A Orbizy utiliza as melhores práticas recomendadas de mercado
              para manter seguros todos os dados inseridos por você nas
              Soluções, no entanto não garante que terceiros não autorizados não
              farão uso de meios ilícitos para obter indevidamente tais
              informações. Assim, a Orbizy se exime de responsabilidade pelos
              danos e prejuízos de toda natureza que possam decorrer do
              conhecimento que terceiros não autorizados possam ter de quaisquer
              das informações repassadas, em decorrência de falha exclusivamente
              atribuível a você ou a terceiros que fujam a qualquer controle
              razoável da Orbizy.
              <br />
              6.5. Caso a Orbizy seja implicada de qualquer maneira em cobranças
              extrajudiciais ou qualquer outra medida judicial em decorrência de
              danos causados por você ou pessoas pelas quais você é responsável,
              você se obriga a intervir nos procedimentos em trâmite, de modo a
              isentar a Orbizy de qualquer possível resultado negativo. Ainda
              que tais esforços não sejam suficientes, a Orbizy terá direito
              integral de regresso contra você quando o dano a ser indenizado
              decorrer direta ou indiretamente de sua culpa.
              <br />
              6.6. A Orbizy não garante a ausência de vírus nas suas Soluções,
              bem como de outros elementos nocivos que possam produzir
              alterações nos seus sistemas informáticos (software e hardware,
              como computadores e celulares) ou nos documentos eletrônicos
              armazenados nos sistemas informáticos, eximindo-se de qualquer
              responsabilidade pelos danos e prejuízos que possam decorrer de
              quaisquer elementos nocivos.
              <br />
              6.7. A Orbizy não verifica ou controla o uso que você faz das
              Soluções, exceto conforme estabelecido na Política de Privacidade
              e nestes Termos. Dessa forma, a Orbizy se exime de qualquer
              responsabilidade pelos danos e prejuízos de toda natureza que
              possam decorrer da utilização das Soluções ou que possam ser
              devidos à falta de veracidade, vigência, exaustividade e/ou
              autenticidade do conteúdo lá disponibilizado, bem como da
              informação que você proporciona a outros Empreendedores e clientes
              sobre si mesmo e, em particular, ainda que não de forma exclusiva,
              pelos danos e prejuízos de toda a natureza que possam ser devidas
              à suplantação da personalidade efetuada por você em qualquer
              classe de comunicação realizada por meio das Soluções.
              <br />
              6.8. A Orbizy não tem a obrigação de fornecer e não fornecerá
              eventuais logs ou registros de conexão e de acesso à aplicação que
              não digam respeito ao próprio usuário solicitante, exceto se assim
              determinado por decisão judicial.
              <br />
              6.9. A Orbizy não possui qualquer responsabilidade em relação aos
              serviços e produtos oferecidos por você aos seus clientes.
            </AccordionContent>
          </AccordionItem>
          <AccordionItem value="item-7">
            <AccordionTrigger>7. Propriedade intelectual</AccordionTrigger>
            <AccordionContent>
              7.1. Você é titular de todo o conteúdo que inserir nas Soluções,
              sob qualquer forma. Você declara, ainda, que o conteúdo inserido
              nas Soluções é de sua autoria. A Orbizy não é responsável caso
              você, sem o conhecimento e consentimento da Orbizy, venha a se
              utilizar, inserir, manipular ou apresentar conteúdo de autoria de
              terceiro como sendo de sua autoria ou ainda que o faça falsamente
              alegando que tem autorização do titular do conteúdo para tal.
              <br />
              7.2. Você é responsável pelo conteúdo inserido nas Soluções e
              declara que tem o direito ou as necessárias licenças para
              utilizar-se de tal conteúdo. Na eventualidade de tal presunção
              provar-se falsa, mediante descoberta fortuita ou notificação do
              interessado, o conteúdo em questão será imediatamente removido das
              Soluções, sendo notificado o usuário responsável sobre a remoção,
              exceto no caso de determinação judicial em contrário.
              <br />
              7.3. A Orbizy não se responsabiliza pela violação, por você, de
              direitos de propriedade intelectual de terceiro, sendo você
              responsável pela violação obrigado a intervir nos procedimentos em
              trâmite de modo a isentar a Orbizy de qualquer possível resultado
              negativo. Ainda que tais esforços não sejam suficientes, a Orbizy
              terá direito integral de regresso contra vocês quando o dano a ser
              indenizado decorra direta ou indiretamente de sua culpa.
              <br />
              7.4. A Orbizy declara que não realiza e não está obrigada a
              realizar controle prévio do conteúdo submetido nas Soluções.
              <br />
              7.5. A Orbizy é titular exclusiva de todos os direitos, morais e
              patrimoniais, incidentes ou eventualmente incidentes sobre
              aspectos visuais e/ou artísticos do serviço, das interfaces das
              Soluções, bem como o código-fonte, os elementos técnicos, de
              design, de processos, relatórios, e outros que nos ajudam a
              caracterizar as Soluções, todos os sinais distintivos, marcas,
              logos e qualquer material passível de proteção por direitos
              autorais ou propriedade industrial, bem como detém as autorizações
              e licenças necessárias para utilizar todo e qualquer conteúdo de
              pessoas jurídicas apresentadas como apoiadoras ou parceiras nas
              Soluções.
              <br />
              7.6. Para permitir sua utilização das Soluções, a Orbizy concede,
              pela duração da manutenção do cadastro do usuário, uma licença de
              uso pessoal, limitada, revogável, intransferível, não exclusiva e
              não passível de sublicenciamento, dos direitos de propriedade
              intelectual necessários à utilização das Soluções, o que não
              inclui direitos de reprodução, alteração, comunicação ao público
              ou qualquer forma de distribuição. É estritamente proibido
              qualquer tipo de cópia, alteração ou redistribuição das Soluções,
              do código-fonte ou de qualquer elemento incluído sob a sigla
              “Propriedade Intelectual”, em parte ou no todo. Você também
              concorda que não vai realizar, tentar realizar, ou ajudar terceiro
              a realizar qualquer tipo de engenharia reversa ou tentativa de
              acesso ao código-fonte e estrutura do banco de dados, em relação
              às Soluções.
            </AccordionContent>
          </AccordionItem>
          <AccordionItem value="item-8">
            <AccordionTrigger>
              8. Procedimento em caso de atividades de caráter ilícito
            </AccordionTrigger>
            <AccordionContent>
              8.1. Na hipótese de você ou outra pessoa considerar que existem
              informações, fatos ou circunstâncias que constituem atividade
              ilícita, especialmente em caso de violação de direitos de
              propriedade intelectual ou outros direitos, deverá comunicar à
              Orbizy através dos canais disponíveis, informando:
              <br /> a{")"} Nome, endereço, número de telefone e e-mail do
              solicitante;
              <br />b{")"} Especificação da suposta atividade ilícita ocorrida
              na Solução e, em particular, quando se tratar de suposta violação
              de direitos autorais, indicação precisa e completa dos conteúdos
              protegidos e supostamente infringidos;
              <br />c{")"} Fatos ou circunstâncias que revelam o caráter ilícito
              de tal atividade; e
              <br />d{")"} Se o caso, declaração expressa e clara de que a
              utilização dos conteúdos foi realizada sem o consentimento do
              titular dos direitos de propriedade intelectual supostamente
              infringidos.
              <br /> 8.2. Sempre de acordo com a legislação em vigor, a partir
              da ciência, a Orbizy poderá excluir conteúdo acusado como ilícito,
              assim como fornecer informações às autoridades competentes,
              mediante o competente requerimento, com a finalidade de viabilizar
              a apuração de condutas ilegais.
            </AccordionContent>
          </AccordionItem>
          <AccordionItem value="item-9">
            <AccordionTrigger>9. Contato</AccordionTrigger>
            <AccordionContent>
              9.1. Visando esclarecer as suas dúvidas, a Orbizy disponibiliza em
              suas Soluções respostas para dúvidas frequentes, bem como um canal
              direto de chat.
              <br />
              9.2. Dúvidas ou solicitações sobre estes Termos, sobre nossas
              práticas, ou sobre nossos serviços, poderão ser sanadas em contato
              por meio do e-mail contato@orbizy.app.
            </AccordionContent>
          </AccordionItem>
          <AccordionItem value="item-10">
            <AccordionTrigger>10. Disposições gerais</AccordionTrigger>
            <AccordionContent>
              10.1. Estes Termos de Uso, em regra, aplicam-se a partir do
              momento em que você se cadastra nas Soluções até seu desligamento,
              seja ele realizado por você, pela Orbizy, por comum acordo ou por
              descontinuidade do serviço.
              <br />
              10.2. A presente relação jurídica é exclusivamente regida pela
              legislação brasileira vigente, sendo esta integralmente aplicável
              a quaisquer disputas que possam surgir sobre a interpretação ou
              execução destes Termos, assim como qualquer outra disputa que
              envolva direta ou indiretamente a prestação dos serviços aqui
              descritos.
              <br />
              10.3. Nos termos da legislação brasileira, você tem direito ao
              arrependimento em relação aos serviços cobrados pela Orbizy.
              Assim, você poderá exercer seu direito no prazo de até 07 (sete)
              dias corridos a contar do pagamento, através dos canais
              disponíveis nas Soluções. Qualquer dificuldade em relação à
              efetivação do direito ao arrependimento poderá ser reportada por
              meio do e-mail contato@orbizy.app.
              <br />
              10.4. Eventuais omissões ou meras tolerâncias das partes no exigir
              o estrito e pleno cumprimento dos termos e condições destes Termos
              ou de prerrogativas decorrentes dele ou da legislação brasileira
              vigente, não constituirão novação ou renúncia, nem afetarão o
              exercício de quaisquer direitos, que poderão ser plena e
              integralmente exercidos, a qualquer tempo.
              <br />
              10.5. Se qualquer parte destes Termos for considerada nula,
              inválida ou inexequível, tal trecho deve ser interpretado de forma
              consistente com a Lei aplicável, para refletir, na medida do
              possível, a intenção original das partes, e as demais disposições
              permanecerão em pleno vigor e efeito.
              <br />
              10.6. A falha da Orbizy em exigir quaisquer direitos ou
              disposições dos presentes Termos não constituirá renúncia, podendo
              exercer regularmente o seu direito, dentro dos prazos legais.
              <br />
              10.7. Estes Termos são regidos, interpretados e executados de
              acordo com as leis da República Federativa do Brasil, sendo
              competente o foro da Comarca da Capital do Estado de São Paulo,
              sendo renunciado expressamente qualquer outro, por mais
              privilegiado que seja.
            </AccordionContent>
          </AccordionItem>
        </Accordion>
      </div>
      <Separator className="my-4 mx-auto max-w-[840px]" />
      <div className="flex flex-col flex-1 px-8 my-8 max-w-[840px] mx-auto">
        <h1 className="font-semibold text-xl">Política de privacidade</h1>
        <Accordion type="single" collapsible className="w-full mt-4">
          <AccordionItem value="item-1">
            <AccordionTrigger>
              1. Sobre o que se trata esta Política de Privacidade
            </AccordionTrigger>
            <AccordionContent>
              1.1. A IPSEC Tecnologia em Segurança Ltda., inscrita no CNPJ sob o
              nº 08.359.769/0001-02 (“Orbizy” ou simplesmente “nós”), é
              responsável pelo aplicativo móvel, disponível neste link da Google
              Play Store e Apple Store (“App”), que consiste em uma ferramenta
              de gestão para profissionais autônomos, microempreendedores e
              pequenos negócios (“Empreendedores”, “Empreendedor” ou
              simplesmente “você”).
              <br />
              1.2. Esta Política de Privacidade explica como a Orbizy armazena,
              protege e usa os dados que coletamos quando você usa as soluções
              oferecidas pela Orbizy, tais como o App e outras soluções que
              vierem a ser desenvolvidas pela Orbizy (“nossas Soluções”,
              “Soluções” ou, individualmente, “Solução”).
              <br />
              1.3. A Orbizy respeita as suas preocupações e tem o compromisso de
              proteger a sua privacidade. Assim, toda coleta e tratamento de
              dados pessoais realizada pela Orbizy tem o intuito de permitir a
              você a utilização do App e das nossas demais Soluções.
              <br />
              1.4. A Orbizy trata os seus dados pessoais e do seu negócio em
              estrita concordância com a legislação aplicável sobre proteção de
              dados (LGPD e GDPR). Assim, definimos abaixo os principais
              aspectos da coleta e tratamento dessas informações.
            </AccordionContent>
          </AccordionItem>
          <AccordionItem value="item-2">
            <AccordionTrigger>
              2. Quais dados pessoais são obrigatórios para se cadastrar e usar
              a Orbizy?
            </AccordionTrigger>
            <AccordionContent>
              2.1. O único dado pessoal que deve ser obrigatoriamente fornecido
              é um e-mail válido, necessário para o seu cadastro na Orbizy. O
              fornecimento de todas as outras informações e dados pessoais é
              totalmente opcional.
            </AccordionContent>
          </AccordionItem>
          <AccordionItem value="item-3">
            <AccordionTrigger>
              3. Quais outros dados pessoais podem ser coletados pela Orbizy?
            </AccordionTrigger>
            <AccordionContent>
              3.1. Estes são os outros dados pessoais que você pode escolher
              fornecer à Orbizy e que serão coletados e tratados conforme
              disposto nestes Termos:
              <br />
              - Informações de identificação pessoal (nome, endereço, telefone,
              documentos de identificação, redes sociais, dados bancários,
              segmento de atuação, assinatura etc.);
              <br />- Informações financeiras, tais como faturamento, valores
              recebidos, valores a receber, valores em atraso e custos.
            </AccordionContent>
          </AccordionItem>
          <AccordionItem value="item-4">
            <AccordionTrigger>
              4. Quais dados pessoais de terceiros podem ser coletados pela
              Orbizy?
            </AccordionTrigger>
            <AccordionContent>
              4.1. Você pode também armazenar dados pessoais de terceiros na
              Orbizy, tais como nome, telefone, endereço, data de nascimento e
              documentos de identificação dos seus clientes, para usufruir da
              melhor forma dos nossos serviços.
              <br />
              4.2. Você pode, inclusive, importar essas informações diretamente
              do seu aparelho celular para o App. Caso deseje importar o contato
              e telefone desses terceiros (ex.: seus clientes), por exemplo,
              você deverá conceder permissão à Orbizy para acessar sua lista de
              contatos no telefone, conforme aviso mostrado oportunamente pelo
              App e pelo sistema operacional do seu aparelho de telefone
              celular.
              <br />
              4.3. A Orbizy não vai compartilhar, ceder, repassar ou vender os
              referidos dados pessoais de terceiros para ninguém.
              <br />
              4.4. Ao concordar com estes Termos, você declara que tem base
              legal (ex.: consentimento e/ou execução de contrato) para tratar e
              compartilhar os dados pessoais desses terceiros (ex.: seus
              clientes) com a Orbizy e adota postura de transparência sobre os
              tratamentos e compartilhamentos efetuados por você na qualidade de
              controlador, conforme definição da Lei Geral de Proteção de Dados,
              eximindo a Orbizy de qualquer responsabilização que possa ocorrer
              se você desrespeitar as normas vigentes sobre proteção de dados
              perante esses terceiros.
            </AccordionContent>
          </AccordionItem>
          <AccordionItem value="item-5">
            <AccordionTrigger>
              5. Como a Orbizy coleta os dados?
            </AccordionTrigger>
            <AccordionContent>
              5.1. A Orbizy coletará e armazenará os dados pessoais que você
              mesmo(a) inserir diretamente no App ou em eventuais outras
              Soluções.
              <br />
              5.2. A Orbizy também coleta automaticamente informações sobre como
              você usa o App e as demais Soluções, para analisarmos de maneira
              anônima e agregada como os Empreendedores usam as funcionalidades,
              com a finalidade de identificar possibilidades de melhorias e
              novas funcionalidades que podem aprimorar sua experiência com as
              nossas Soluções.
              <br />
              5.3. Além disso, quando você visitar ou utilizar as nossas
              Soluções ou visitar sites de parceiros, poderão ser utilizados
              cookies e outras tecnologias de rastreamento para: (i) reconhecer
              vocês e personalizar experiências online; (ii) avaliar a
              eficiência de promoções e realizar análises; e (iii) reduzir o
              risco, bem como evitar fraudes potenciais e promover confiança e
              segurança nas Soluções. Certos aspectos e recursos das Soluções só
              estão disponíveis através do uso de cookies. Por isso, se você
              optar por desativar ou recusar cookies, seu uso das Soluções e o
              desempenho das Soluções poderão ser limitados.
            </AccordionContent>
          </AccordionItem>
          <AccordionItem value="item-6">
            <AccordionTrigger>
              6. Como a Orbizy usa os seus dados?
            </AccordionTrigger>
            <AccordionContent>
              6.1. As informações coletadas sobre você e seu negócio serão
              armazenadas e tratadas pela Orbizy para:
              <br /> - criar e gerenciar seu cadastro no App e em nossas
              Soluções;
              <br /> - executar as funcionalidades do App e de nossas Soluções;
              <br />
              Nesse sentido, por exemplo, se você salva dados pessoais no App
              (ex.: nome, telefone, endereço, documentos de identidade etc.) e
              depois utiliza a funcionalidade de gerar documento em pdf (ex.:
              orçamentos, ordens de serviços etc.), o sistema da Orbizy faz o
              tratamento daqueles dados pessoais para inseri-los no referido
              documento em pdf.
              <br /> - melhorar sua experiência nas nossas plataformas de
              atendimento;
              <br /> - enviar para você comunicações por meios físicos ou
              digitais, tais como avisos, comunicados, formulários de pesquisas,
              materiais promocionais, alertas sobre ofertas disponíveis, dentre
              outros;
              <br /> - realizar pesquisas qualitativas e quantitativas,
              inclusive mediante entrevistas por telefone e/ou videoconferência,
              análise de redes sociais e formulários de pesquisa, para
              entendermos melhor os desafios que você enfrenta e, a partir
              disso, tentarmos criar soluções cada vez melhores;
              <br /> - analisar dados agregados e anônimos referentes à
              utilização do App e das Soluções, como, por exemplo, o número de
              vezes que determinada funcionalidade foi usada por um grupo de
              Empreendedores, com a finalidade de aprimorar as funcionalidades e
              a usabilidade do App e das Soluções;
              <br /> - responder consultas dos Empreendedores e/ou de terceiros,
              incluindo questionamentos de órgãos públicos, para atender
              obrigações legais a que nossas Soluções estejam sujeitas, para
              executar um contrato do qual você faça parte, a fim de proteger
              seus interesses vitais, ou quando sua divulgação é necessária de
              acordo com os interesses legítimos da Orbizy e/ou de terceiros
              parceiros comerciais;
              <br /> - fornecer a eventuais parceiros da Orbizy relatórios de
              dados agregados mostrando informações anônimas dos Empreendedores
              e outros dados não pessoais;
              <br /> - complementar informações pessoais suas com informações
              adicionais de fontes disponíveis publicamente e comercialmente
              e/ou informações de empresas pertencentes ao grupo econômico da
              Orbizy e de parceiros comerciais;
              <br /> - associar navegador e/ou dispositivo seu a outros
              navegadores ou dispositivos utilizados por você com o objetivo de
              fornecer acesso relevante e fácil ao conteúdo, publicidade em
              navegadores e dispositivos e outros fins operacionais/comerciais
              legítimos;
              <br /> - operar, avaliar e melhorar negócios da Orbizy, incluindo
              desenvolver, aprimorar, analisar e melhorar serviços oferecidos;
              gerenciar comunicações da Orbizy; bem como executar análises de
              dados; executar contabilidade, auditoria e outras funções
              internas;
              <br /> - proteger, identificar e prevenir fraudes e outras
              atividades ilegais, reclamações e outras responsabilidades; e
              <br /> - cumprir e aplicar os requisitos legais aplicáveis, os
              padrões relevantes do setor, as obrigações contratuais e políticas
              da Orbizy.
              <br /> - associar navegador e/ou dispositivo seu a outros
              navegadores ou dispositivos utilizados por você com o objetivo de
              fornecer acesso relevante e fácil ao conteúdo, publicidade em
              navegadores e dispositivos e permitir que a Orbizy compreenda o
              nível de sucesso das campanhas de marketing online direcionadas a
              você em outros sites e redes sociais por meio de soluções tais
              como o Facebook Ads, a partir de um "identificador de publicidade"
              atrelado ao seu aparelho. Por favor, note que a Orbizy somente
              visualizará tais informações de forma estatística. Observe que
              suas interações com as redes sociais tais como Facebook/ Meta
              estarão reguladas pela Política de Privacidade destas redes
              sociais. Se você desejar modificar as configurações de privacidade
              para impedir a utilização de tais dados, deve deverá fazer isso
              por meio das configurações de privacidade do seu aparelho e
              navegador.
              <br />
              6.2. A Orbizy também poderá usar as suas informações pessoais de
              outras maneiras para as quais serão fornecidos avisos específicos
              no momento da coleta dos dados.
            </AccordionContent>
          </AccordionItem>
          <AccordionItem value="item-7">
            <AccordionTrigger>
              7. Como a Orbizy armazena e protege os seus dados?
            </AccordionTrigger>
            <AccordionContent>
              7.1. A Orbizy mantém, na medida de sua capacidade, através da
              utilização de soluções oferecidas por empresas robustas como
              Amazon (Amazon Web Services), Google (Firebase, Google Drive e
              Google Analytics) e Notion, salvaguardas administrativas, técnicas
              e físicas projetadas para proteger as suas informações pessoais
              contra destruição, perda, mau uso, alteração, divulgação ou acesso
              não autorizado.
              <br />
              7.2. Recomenda-se que você crie uma senha forte para sua conta no
              App e nas Soluções. Para proteger sua conta e os seus dados
              pessoais, você deve manter essa senha segura, jamais deixando que
              outras pessoas consigam a sua senha.
            </AccordionContent>
          </AccordionItem>
          <AccordionItem value="item-8">
            <AccordionTrigger>
              8. Com quem a Orbizy compartilha os seus dados e com qual
              finalidade?
            </AccordionTrigger>
            <AccordionContent>
              8. Com quem a Orbizy compartilha os seus dados e com qual
              finalidade?
              <br /> - 8.1. Com exceção das situações aqui previstas, a Orbizy
              não compartilhará com ninguém os dados pessoais que você inserir
              nos nossos sistemas, exceto com sua prévia autorização.
              <br />
              Soluções da Orbizy: a Orbizy poderá compartilhar os seus dados
              pessoais entre as próprias Soluções da Orbizy.
              <br /> - Iugu Serviços na Internet S.A.: quando você ativa a
              funcionalidade de emissão de faturas através do App, a Orbizy
              compartilha as informações por você inseridas com a Iugu Servicos
              na Internet S.A., parceiro responsável pela emissão das faturas
              (ex.: boletos), em obediência a regulação do Banco Central do
              Brasil, conforme aviso expresso no momento em que você ativa a
              referida funcionalidade.
              <br /> - Intercom: a Orbizy poderá compartilhar alguns dos seus
              dados pessoais, tais como nome, e-mail, telefone, redes sociais e
              segmento profissional, com a empresa Intercom R&D Unlimited
              Company, que fornece à Orbizy uma ferramenta de comunicação (chat)
              integrada no App e nas Soluções, com a única finalidade de
              oferecer atendimento de qualidade para você e todos os
              Empreendedores que utilizam o App e as Soluções, bem como para
              facilitar a realização das pesquisas qualitativas e quantitativas
              mencionadas acima.
            </AccordionContent>
          </AccordionItem>
          <AccordionItem value="item-9">
            <AccordionTrigger>
              9. Quem pode armazenar dados na Orbizy?
            </AccordionTrigger>
            <AccordionContent>
              9.1. As Soluções da Orbizy são direcionadas somente a pessoas
              maiores de 18 (dezoito) anos e com plena capacidade civil. Assim,
              informações pessoais de crianças e adolescentes não são
              intencionalmente coletadas. Mediante confirmação de eventual
              coleta dessas informações, a Orbizy promoverá prontamente sua
              exclusão. Na hipótese de suspeita sobre a coleta de informações
              dessa natureza, qualquer pessoa poderá solicitar a exclusão destas
              informações por meio do e-mail contato@orbizy.app.
            </AccordionContent>
          </AccordionItem>
          <AccordionItem value="item-10">
            <AccordionTrigger>
              10. Como alterar ou apagar os dados pessoais?
            </AccordionTrigger>
            <AccordionContent>
              10.1. Você tem o direito de acessar, revisar, atualizar, modificar
              e corrigir imprecisões nos dados pessoais que você armazena sob
              controle da Orbizy, sujeito a certas exceções previstas em lei.
              Nesses casos, basta você entrar no App e alterar lá mesmo os
              referidos dados pessoais. Você poderá também enviar uma
              solicitação por meio do e-mail contato@orbizy.app.
              <br />
              10.2. Você também pode, a qualquer momento, solicitar a exclusão
              de todas as suas informações pessoais e/ou de todos os dados
              pessoais de terceiros (ex.: clientes) que você tenha armazenado na
              Orbizy. Você pode solicitar essa exclusão diretamente no App. Você
              também pode fazer essa solicitação através dos canais disponíveis
              nas Soluções, e a Orbizy terá 30 (trinta) dias a contar do pedido
              para promover as referidas exclusões. Após esse prazo, todas as
              informações referentes ao seu Cadastro serão apagadas
              definitivamente, exceto quando tais dados forem coletados ou
              tratados sobre outras bases legais ou quando a Orbizy for
              obrigada, pela legislação brasileira vigente, a armazenar
              determinados dados.
              <br />
              10.3. Ao acessar as Soluções, você estará automaticamente
              concordando com nossa Política de Privacidade. Qualquer dúvida
              adicional sobre as práticas de privacidade da Orbizy poderá ser
              enviada por meio do e-mail contato@orbizy.app.
            </AccordionContent>
          </AccordionItem>
          <AccordionItem value="item-11">
            <AccordionTrigger>11. Disposições gerais</AccordionTrigger>
            <AccordionContent>
              11.1. Esta Política de Privacidade, em regra, aplica-se a partir
              do momento em que você se cadastra nas Soluções até seu
              desligamento, seja ele realizado por você, pela Orbizy, por comum
              acordo ou por descontinuidade do serviço.
              <br />
              11.2. A Orbizy está constantemente revisando e atualizando sua
              Política de Privacidade, sempre disponibilizando em seu website a
              política em vigor.
              <br />
              11.3. Se qualquer parte desta Política de Privacidade for
              considerada nula, inválida ou inexequível, tal trecho deve ser
              interpretado de forma consistente com a Lei aplicável, para
              refletir, na medida do possível, a intenção original das partes, e
              as demais disposições permanecerão em pleno vigor e efeito.
              <br />
              11.4. A falha da Orbizy em exigir quaisquer direitos ou
              disposições desta Política de Privacidade não constituirá
              renúncia, podendo exercer regularmente o seu direito, dentro dos
              prazos legais.
              <br />
              12.7. Esta Política de Privacidade é redigida, interpretada e
              executada de acordo com as leis pertinentes de proteção de dados,
              notadamente a Lei Geral de Proteção de Dados (LGPD) e a General
              Data Protection Regulation (GDPR, em vigor na Europa).
            </AccordionContent>
          </AccordionItem>
        </Accordion>
      </div>
      <Footer />
    </div>
  )
}
