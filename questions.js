const questions = {
    fundamentos: [
        {
            question: "O que é a Pirâmide de Testes?",
            answers: [
                "Uma estrutura que sugere ter mais testes unitários, menos de integração e ainda menos E2E",
                "Uma ferramenta de automação que executa testes em diferentes camadas do sistema",
                "Um tipo de teste de performance que mede a carga do sistema em níveis crescentes",
                "Uma metodologia ágil para organizar sprints e releases de software"
            ],
            correct: 0,
            explanation: "A Pirâmide de Testes é um conceito que sugere uma proporção ideal: muitos testes unitários na base (rápidos e baratos), menos testes de integração no meio, e poucos testes E2E no topo (lentos e caros)."
        },
        {
            question: "Qual a diferença entre Verificação e Validação em QA?",
            answers: [
                "Não há diferença entre os termos, ambos significam confirmar que o software funciona",
                "Verificação checa se o produto foi construído corretamente; Validação checa se é o produto certo",
                "Verificação é realizada pelo cliente final; Validação é executada pelo desenvolvedor",
                "Verificação utiliza apenas testes automatizados; Validação utiliza apenas testes manuais"
            ],
            correct: 1,
            explanation: "Verificação responde 'Estamos construindo o produto corretamente?' (conformidade com especificações). Validação responde 'Estamos construindo o produto certo?' (atende às necessidades do usuário)."
        },
        {
            question: "O que é TDD (Test-Driven Development)?",
            answers: [
                "Uma prática onde os testes são escritos após o código de produção estar completo",
                "Escrever testes antes do código de produção seguindo o ciclo Red-Green-Refactor",
                "Uma abordagem que foca em testar apenas no ambiente de desenvolvimento local",
                "Uma metodologia de desenvolvimento que dispensa a escrita de testes automatizados"
            ],
            correct: 1,
            explanation: "TDD é uma prática onde os testes são escritos ANTES do código de produção. O ciclo é: Red (escrever teste que falha) → Green (escrever código mínimo para passar) → Refactor (melhorar o código)."
        },
        {
            question: "O que é BDD (Behavior-Driven Development)?",
            answers: [
                "Uma linguagem de programação específica para escrever testes automatizados",
                "Uma extensão do TDD focada em comportamentos e linguagem natural (Given-When-Then)",
                "Um tipo de teste de performance que mede o comportamento do sistema sob carga",
                "Uma ferramenta de automação de testes para aplicações web e mobile"
            ],
            correct: 1,
            explanation: "BDD é uma evolução do TDD que usa linguagem natural para descrever comportamentos esperados. Usa o formato Given (contexto) - When (ação) - Then (resultado esperado), facilitando a comunicação entre técnicos e não-técnicos."
        },
        {
            question: "Qual é o ciclo de vida de um bug?",
            answers: [
                "Encontrado pelo QA → Corrigido pelo desenvolvedor → Fechado automaticamente",
                "Novo → Atribuído → Aberto → Corrigido → Verificado → Fechado",
                "Aberto pelo usuário → Fechado após análise do suporte técnico",
                "Criado no sistema → Deletado após 30 dias sem resolução"
            ],
            correct: 1,
            explanation: "O ciclo completo inclui: Novo (reportado) → Atribuído (designado a um dev) → Aberto (em análise) → Corrigido (fix aplicado) → Verificado (QA retesta) → Fechado. Pode incluir estados como Rejeitado, Reaberto ou Adiado."
        },
        {
            question: "O que é Teste de Regressão?",
            answers: [
                "Testar exclusivamente as novas funcionalidades implementadas na sprint atual",
                "Verificar se alterações no código não quebraram funcionalidades existentes",
                "Testar o sistema em condições de estresse e alta carga de usuários",
                "Testar apenas a interface do usuário para validar elementos visuais"
            ],
            correct: 1,
            explanation: "Teste de Regressão verifica se mudanças recentes (novas features, correções, refatorações) não introduziram bugs em funcionalidades que já funcionavam. É essencial em CI/CD."
        },
        {
            question: "O que é um Caso de Teste (Test Case)?",
            answers: [
                "Um bug crítico encontrado durante a execução dos testes de regressão",
                "Um documento com condições, passos e resultados esperados para validar uma funcionalidade",
                "Uma ferramenta de automação utilizada para executar scripts de teste",
                "Um relatório gerado após a execução completa dos testes automatizados"
            ],
            correct: 1,
            explanation: "Um Caso de Teste é um documento que especifica: pré-condições, dados de entrada, passos a executar, e resultados esperados. Serve para validar se uma funcionalidade específica funciona corretamente."
        },
        {
            question: "O que é Teste de Fumaça (Smoke Test)?",
            answers: [
                "Um teste completo e detalhado de todas as funcionalidades do sistema",
                "Um teste rápido e superficial para verificar se as funcionalidades críticas funcionam",
                "Um teste de segurança focado em vulnerabilidades de injeção de código",
                "Um teste de usabilidade que avalia a experiência do usuário final"
            ],
            correct: 1,
            explanation: "Smoke Test é um teste rápido e superficial que verifica se as funcionalidades mais críticas do sistema estão funcionando. É feito antes de testes mais detalhados para garantir que vale a pena continuar testando."
        },
        {
            question: "Qual a diferença entre Severidade e Prioridade de um bug?",
            answers: [
                "São a mesma coisa e podem ser usados como sinônimos no reporte de bugs",
                "Severidade é o impacto técnico no sistema; Prioridade é a urgência de correção",
                "Severidade é sempre definida pelo cliente; Prioridade é definida exclusivamente pelo QA",
                "Severidade se aplica apenas a bugs críticos; Prioridade se aplica a bugs menores"
            ],
            correct: 1,
            explanation: "Severidade mede o impacto técnico do bug no sistema (ex: crash = alta severidade). Prioridade indica a urgência da correção baseada em fatores de negócio. Um bug pode ter alta severidade mas baixa prioridade se afetar uma área pouco usada."
        },
        {
            question: "O que é Teste Exploratório?",
            answers: [
                "Teste executado seguindo scripts e casos de teste pré-definidos rigorosamente",
                "Teste simultâneo de aprendizado, design e execução sem scripts predeterminados",
                "Teste automatizado que roda sem intervenção humana no pipeline de CI/CD",
                "Teste de performance que explora os limites de capacidade do sistema"
            ],
            correct: 1,
            explanation: "Teste Exploratório é uma abordagem onde o testador aprende sobre o sistema, projeta e executa testes simultaneamente. Não segue scripts predefinidos e depende da criatividade e experiência do testador para encontrar bugs."
        },
        {
            question: "O que significa o termo 'Shift Left' em testes?",
            answers: [
                "Mover as atividades de teste para o final do ciclo de desenvolvimento",
                "Antecipar as atividades de teste para o início do ciclo de desenvolvimento",
                "Testar apenas o lado esquerdo da interface em layouts responsivos",
                "Usar apenas ferramentas open source para automação de testes"
            ],
            correct: 1,
            explanation: "Shift Left significa mover as atividades de teste para mais cedo no ciclo de desenvolvimento. Quanto antes bugs são encontrados, mais barato é corrigi-los. Inclui práticas como TDD, revisão de requisitos e testes unitários."
        },
        {
            question: "O que é Cobertura de Código (Code Coverage)?",
            answers: [
                "A quantidade total de bugs encontrados durante a execução dos testes",
                "A porcentagem do código-fonte que é executada pelos testes automatizados",
                "O número total de casos de teste escritos para cobrir as funcionalidades",
                "A documentação técnica que descreve o funcionamento do código"
            ],
            correct: 1,
            explanation: "Code Coverage mede qual porcentagem do código é executada durante os testes. Tipos incluem: Line Coverage (linhas executadas), Branch Coverage (caminhos de decisão), Function Coverage (funções chamadas). 100% de cobertura não garante ausência de bugs."
        },
        {
            question: "O que é um Mock em testes?",
            answers: [
                "Um teste que falha propositalmente para validar tratamento de erros",
                "Um objeto simulado que imita o comportamento de objetos reais",
                "Um tipo de relatório de testes gerado após a execução da suíte",
                "Uma ferramenta de automação para criar scripts de teste"
            ],
            correct: 1,
            explanation: "Mock é um objeto simulado que imita o comportamento de dependências externas (APIs, banco de dados, etc). Permite testar unidades de código de forma isolada, controlando as respostas das dependências."
        },
        {
            question: "Qual a diferença entre Teste Caixa Preta e Caixa Branca?",
            answers: [
                "Caixa Preta testa exclusivamente a interface; Caixa Branca testa exclusivamente o backend",
                "Caixa Preta testa sem conhecer o código interno; Caixa Branca testa conhecendo a estrutura interna",
                "Caixa Preta é sempre executado manualmente; Caixa Branca é sempre automatizado",
                "Não há diferença significativa entre as duas abordagens de teste"
            ],
            correct: 1,
            explanation: "Caixa Preta (Black Box): testa funcionalidades sem conhecer a implementação interna, focando em entradas/saídas. Caixa Branca (White Box): testa conhecendo a estrutura interna do código, focando em caminhos lógicos e cobertura."
        },
        {
            question: "O que é Teste de Sanidade (Sanity Test)?",
            answers: [
                "Um teste completo de regressão que cobre todas as funcionalidades do sistema",
                "Um teste rápido e focado para verificar se uma correção específica funciona",
                "Um teste de usabilidade que avalia a experiência do usuário na aplicação",
                "Um teste que avalia a saúde mental e bem-estar do testador durante o projeto"
            ],
            correct: 1,
            explanation: "Sanity Test é um teste rápido e focado, geralmente feito após uma correção de bug, para verificar se a correção específica funciona sem fazer uma regressão completa. É mais focado que o Smoke Test."
        }
    ],
    frontend: [
        {
            question: "O que é Teste de Snapshot?",
            answers: [
                "Um teste de performance que mede o tempo de carregamento da página",
                "Um teste que compara a renderização atual com uma versão salva anteriormente",
                "Um teste de segurança que captura vulnerabilidades em tempo real",
                "Um teste de acessibilidade que fotografa elementos para análise"
            ],
            correct: 1,
            explanation: "Teste de Snapshot captura a saída renderizada (HTML, componente) e compara com uma versão salva. Se houver diferenças, o teste falha, ajudando a detectar mudanças inesperadas na UI. Popular em React com Jest."
        },
        {
            question: "O que o atributo 'data-testid' é usado para?",
            answers: [
                "Estilizar elementos com CSS específico para ambientes de teste",
                "Identificar elementos de forma estável para seletores de teste",
                "Armazenar dados de teste temporários diretamente no elemento HTML",
                "Validar formulários automaticamente antes do envio ao servidor"
            ],
            correct: 1,
            explanation: "data-testid é um atributo HTML usado para criar seletores estáveis em testes. Diferente de classes ou IDs que podem mudar, data-testid é mantido especificamente para testes, não sendo afetado por mudanças de estilo ou refatorações."
        },
        {
            question: "O que é Cross-Browser Testing?",
            answers: [
                "Testar a aplicação em diferentes resoluções e tamanhos de tela",
                "Verificar se a aplicação funciona corretamente em diferentes navegadores",
                "Testar a velocidade de carregamento da página em diferentes redes",
                "Testar a aplicação em diferentes sistemas operacionais móveis"
            ],
            correct: 1,
            explanation: "Cross-Browser Testing verifica se a aplicação funciona corretamente em diferentes navegadores (Chrome, Firefox, Safari, Edge) e suas versões. É importante porque cada navegador pode renderizar HTML/CSS/JS de forma diferente."
        },
        {
            question: "O que é Teste de Acessibilidade (a11y)?",
            answers: [
                "Testar a velocidade de acesso e carregamento do site em diferentes conexões",
                "Verificar se a aplicação é utilizável por pessoas com deficiências",
                "Testar o fluxo de login e autenticação de usuários na aplicação",
                "Testar a aplicação em dispositivos móveis de diferentes fabricantes"
            ],
            correct: 1,
            explanation: "Testes de Acessibilidade (a11y - numerônimo de 'accessibility') verificam se a aplicação é utilizável por pessoas com deficiências visuais, auditivas, motoras ou cognitivas. Inclui verificar contraste, navegação por teclado, leitores de tela, etc."
        },
        {
            question: "Qual ferramenta é comumente usada para testes de acessibilidade?",
            answers: [
                "Jest, utilizado principalmente para testes unitários de JavaScript",
                "axe-core / Lighthouse, que verificam conformidade com WCAG",
                "Postman, ferramenta popular para testar APIs REST",
                "JMeter, utilizado para testes de carga e performance"
            ],
            correct: 1,
            explanation: "axe-core é uma biblioteca popular para testes de acessibilidade que pode ser integrada com Cypress, Playwright, etc. Lighthouse (do Chrome DevTools) também avalia acessibilidade junto com performance e SEO."
        },
        {
            question: "O que é Visual Regression Testing?",
            answers: [
                "Testar a lógica de negócio e regras de validação do sistema",
                "Comparar screenshots da UI para detectar mudanças visuais não intencionais",
                "Testar se a aplicação é responsiva em diferentes tamanhos de tela",
                "Testar a performance visual e tempo de renderização dos elementos"
            ],
            correct: 1,
            explanation: "Visual Regression Testing compara screenshots da interface antes e depois de mudanças para detectar diferenças visuais não intencionais. Ferramentas como Percy, Chromatic, e BackstopJS são usadas para isso."
        },
        {
            question: "O que é Responsive Testing?",
            answers: [
                "Testar a velocidade de resposta do servidor às requisições dos usuários",
                "Verificar se a aplicação se adapta corretamente a diferentes tamanhos de tela",
                "Testar APIs REST e seus endpoints de forma automatizada",
                "Testar a validação e resposta de formulários ao enviar dados"
            ],
            correct: 1,
            explanation: "Responsive Testing verifica se a aplicação se adapta e funciona corretamente em diferentes tamanhos de tela (desktop, tablet, mobile). Inclui testar breakpoints, layout, e funcionalidade em cada viewport."
        },
        {
            question: "O que é Component Testing em frontend?",
            answers: [
                "Testar toda a aplicação de uma vez em ambiente de produção",
                "Testar componentes individuais de forma isolada verificando props e estados",
                "Testar apenas os estilos CSS e animações dos elementos",
                "Testar o servidor backend e suas respostas às requisições"
            ],
            correct: 1,
            explanation: "Component Testing testa componentes de UI (React, Vue, Angular) de forma isolada, verificando sua renderização, props, eventos e estados. Ferramentas como Testing Library, Storybook e Cypress Component Testing são usadas."
        },
        {
            question: "O que a biblioteca Testing Library promove como filosofia de teste?",
            answers: [
                "Testar detalhes de implementação interna dos componentes React",
                "Testar como o usuário interage com a aplicação de forma acessível",
                "Testar apenas snapshots e comparações visuais de componentes",
                "Testar apenas estilos CSS e classes aplicadas aos elementos"
            ],
            correct: 1,
            explanation: "Testing Library promove testar a aplicação da forma como o usuário a utiliza, não detalhes de implementação. Encoraja seletores acessíveis (getByRole, getByText) em vez de classes CSS ou estrutura do componente."
        },
        {
            question: "O que é DOM Testing?",
            answers: [
                "Testar o servidor de domínio e configurações de DNS da aplicação",
                "Verificar a estrutura e manipulação do Document Object Model",
                "Testar domínios de URL e certificados SSL do site",
                "Testar conexões de banco de dados e integridade dos dados"
            ],
            correct: 1,
            explanation: "DOM Testing envolve verificar a estrutura e manipulação do Document Object Model - a representação em árvore do HTML. Inclui verificar se elementos existem, têm atributos corretos, respondem a eventos, etc."
        }
    ],
    backend: [
        {
            question: "O que é Teste de Integração?",
            answers: [
                "Testar apenas a interface do usuário e seus elementos visuais",
                "Verificar se diferentes módulos/serviços funcionam corretamente juntos",
                "Testar unidades de código de forma isolada sem dependências externas",
                "Testar apenas as queries e operações do banco de dados"
            ],
            correct: 1,
            explanation: "Teste de Integração verifica se diferentes módulos, serviços ou componentes funcionam corretamente quando combinados. Diferente de testes unitários (isolados), aqui testamos a interação entre partes do sistema."
        },
        {
            question: "O que é um Teste de Carga (Load Test)?",
            answers: [
                "Testar o upload de arquivos grandes para verificar limites do sistema",
                "Avaliar o comportamento do sistema sob uma carga esperada de usuários",
                "Testar a conexão e latência com o banco de dados em produção",
                "Testar a interface de carregamento e indicadores de progresso"
            ],
            correct: 1,
            explanation: "Load Test avalia como o sistema se comporta sob a carga esperada de usuários simultâneos. Mede tempo de resposta, throughput e uso de recursos. Ferramentas: JMeter, k6, Gatling, Locust."
        },
        {
            question: "O que é um Teste de Estresse (Stress Test)?",
            answers: [
                "Testar o desempenho dos desenvolvedores trabalhando sob pressão de prazos",
                "Testar o sistema além da capacidade normal para encontrar seu ponto de quebra",
                "Testar a aplicação com dados inválidos e entradas malformadas",
                "Testar a segurança do sistema contra ataques de hackers e vulnerabilidades"
            ],
            correct: 1,
            explanation: "Stress Test leva o sistema além de sua capacidade normal para identificar o ponto de quebra e como ele se recupera. Diferente do Load Test que testa carga esperada, aqui testamos condições extremas."
        },
        {
            question: "O que é Database Testing?",
            answers: [
                "Testar apenas a interface gráfica de administração do banco de dados",
                "Validar integridade, performance e funcionalidade das operações de banco de dados",
                "Testar o processo de instalação e configuração inicial do banco",
                "Testar apenas as rotinas de backup automático e recuperação de dados"
            ],
            correct: 1,
            explanation: "Database Testing valida: integridade dos dados, constraints, triggers, stored procedures, performance de queries, transações ACID, e migrações. Garante que o banco funciona corretamente e mantém dados consistentes."
        },
        {
            question: "O que são Fixtures em testes?",
            answers: [
                "Correções de bugs aplicadas diretamente no código de produção",
                "Dados pré-definidos usados para configurar o estado inicial dos testes",
                "Ferramentas de automação para executar scripts de teste em CI/CD",
                "Relatórios de teste gerados após a execução da suíte de testes"
            ],
            correct: 1,
            explanation: "Fixtures são dados ou estados pré-definidos usados para configurar o ambiente de teste. Exemplos: usuários de teste, registros no banco, arquivos de configuração. Garantem que testes executem em um estado conhecido e reproduzível."
        },
        {
            question: "O que é um Health Check endpoint?",
            answers: [
                "Um endpoint corporativo para verificar a saúde e bem-estar dos funcionários",
                "Um endpoint que retorna o status de funcionamento da aplicação e suas dependências",
                "Um endpoint dedicado para download de relatórios de monitoramento",
                "Um endpoint de autenticação usado para validar credenciais de usuários"
            ],
            correct: 1,
            explanation: "Health Check é um endpoint (geralmente /health ou /status) que retorna se a aplicação está funcionando e o status de suas dependências (banco de dados, cache, serviços externos). Usado por load balancers e monitoramento."
        },
        {
            question: "O que é Teste de Contrato?",
            answers: [
                "Verificar se os contratos legais da empresa estão digitalizados corretamente",
                "Validar que a comunicação entre serviços segue um acordo pré-definido",
                "Testar formulários de cadastro e contratação de serviços",
                "Verificar licenças de software e conformidade com termos de uso"
            ],
            correct: 1,
            explanation: "Contract Testing valida que a comunicação entre serviços (ex: microsserviços, API consumer/provider) segue um contrato definido. Ferramentas como Pact garantem que mudanças em um serviço não quebrem consumidores."
        },
        {
            question: "O que é um Stub em testes?",
            answers: [
                "Um erro de teste que ocorre quando uma dependência não está disponível",
                "Uma implementação simplificada que retorna respostas pré-programadas",
                "Um tipo de relatório que mostra stubs de código não testados",
                "Uma ferramenta de CI/CD para automatizar deploys de aplicações"
            ],
            correct: 1,
            explanation: "Stub é uma implementação simplificada de uma dependência que retorna respostas pré-programadas. Diferente de Mock (que verifica interações), Stub apenas fornece dados necessários para o teste executar."
        },
        {
            question: "O que é Teste de Concorrência?",
            answers: [
                "Testar e comparar produtos com empresas concorrentes do mercado",
                "Verificar comportamento do sistema quando múltiplas operações ocorrem simultaneamente",
                "Testar a velocidade de conexão de rede em diferentes ambientes",
                "Comparar diferentes ferramentas de teste para escolher a melhor"
            ],
            correct: 1,
            explanation: "Teste de Concorrência verifica se o sistema funciona corretamente quando múltiplas operações acontecem simultaneamente. Detecta race conditions, deadlocks, e problemas de sincronização em ambientes multi-thread."
        },
        {
            question: "O que são Testes de Migração de Banco de Dados?",
            answers: [
                "Testar a mudança de provedor de cloud e infraestrutura do banco",
                "Validar que scripts de migração alteram o schema corretamente sem perda de dados",
                "Testar rotinas de backup e restore para recuperação de desastres",
                "Testar a performance de queries complexas em tabelas grandes"
            ],
            correct: 1,
            explanation: "Testes de Migração validam que scripts de alteração de schema (migrations) funcionam corretamente em ambas direções (up/down), preservam dados existentes, e não quebram a aplicação. Essencial para deploys seguros."
        }
    ],
    api: [
        {
            question: "Qual a diferença entre os métodos HTTP GET e POST?",
            answers: [
                "Não há diferença significativa entre os dois métodos HTTP",
                "GET é para obter dados (sem body); POST é para enviar dados (com body)",
                "GET é mais seguro que POST pois encripta os parâmetros na URL",
                "POST é apenas para formulários HTML e não pode ser usado em APIs"
            ],
            correct: 1,
            explanation: "GET é usado para obter/ler dados, é idempotente, e não deve ter body. POST é usado para criar/enviar dados, tem body, e não é idempotente. GET pode ser cacheado e aparece na URL; POST não."
        },
        {
            question: "O que significa o status code 404?",
            answers: [
                "Sucesso na requisição e dados retornados corretamente",
                "Recurso não encontrado no servidor solicitado",
                "Erro interno do servidor ao processar a requisição",
                "Não autorizado devido a credenciais inválidas"
            ],
            correct: 1,
            explanation: "404 Not Found indica que o servidor não encontrou o recurso solicitado. Pode significar que a URL está errada, o recurso foi deletado, ou nunca existiu. É um erro do cliente (4xx)."
        },
        {
            question: "O que significa o status code 500?",
            answers: [
                "Sucesso na requisição e processamento completo",
                "Recurso não encontrado na base de dados",
                "Erro interno do servidor ao processar a requisição",
                "Requisição inválida devido a parâmetros incorretos"
            ],
            correct: 2,
            explanation: "500 Internal Server Error indica que algo deu errado no servidor ao processar a requisição. É um erro genérico do servidor (5xx) quando nenhum outro código 5xx é apropriado."
        },
        {
            question: "O que é REST?",
            answers: [
                "Uma linguagem de programação para desenvolvimento backend",
                "Um estilo arquitetural para APIs que usa métodos HTTP e recursos",
                "Um banco de dados NoSQL para armazenamento de dados",
                "Uma ferramenta de teste para automação de APIs"
            ],
            correct: 1,
            explanation: "REST (Representational State Transfer) é um estilo arquitetural que usa HTTP, URLs para identificar recursos, métodos HTTP para ações (GET, POST, PUT, DELETE), e é stateless. APIs RESTful seguem essas convenções."
        },
        {
            question: "O que é uma API Idempotente?",
            answers: [
                "Uma API que sempre falha independente dos parâmetros enviados",
                "Uma operação que produz o mesmo resultado independente de quantas vezes é executada",
                "Uma API que não requer autenticação para ser acessada",
                "Uma API que não aceita parâmetros de entrada nas requisições"
            ],
            correct: 1,
            explanation: "Uma operação idempotente produz o mesmo resultado não importa quantas vezes seja executada. GET, PUT, DELETE são idempotentes. POST não é - cada chamada pode criar um novo recurso."
        },
        {
            question: "O que significa o status code 401?",
            answers: [
                "Sucesso e requisição processada com êxito",
                "Não autorizado - credenciais inválidas ou ausentes",
                "Proibido - usuário autenticado mas sem permissão",
                "Não encontrado - recurso inexistente no servidor"
            ],
            correct: 1,
            explanation: "401 Unauthorized significa que a requisição requer autenticação. As credenciais estão ausentes, inválidas, ou expiradas. O cliente deve se autenticar para obter a resposta."
        },
        {
            question: "Qual a diferença entre 401 e 403?",
            answers: [
                "São a mesma coisa e podem ser usados de forma intercambiável",
                "401 é falta de autenticação; 403 é falta de autorização (permissão)",
                "401 é erro de cliente (4xx); 403 é erro de servidor (5xx)",
                "401 é usado para métodos GET; 403 é usado para métodos POST"
            ],
            correct: 1,
            explanation: "401 Unauthorized: não autenticado (quem é você?). 403 Forbidden: autenticado mas sem permissão (você não pode fazer isso). 401 pode ser resolvido fazendo login; 403 indica que mesmo logado, não tem acesso."
        },
        {
            question: "O que é GraphQL?",
            answers: [
                "Um banco de dados de grafos para armazenar relações complexas",
                "Uma linguagem de consulta para APIs que permite solicitar dados específicos",
                "Uma ferramenta de visualização de grafos e estruturas de dados",
                "Um protocolo de rede para comunicação entre servidores"
            ],
            correct: 1,
            explanation: "GraphQL é uma linguagem de consulta para APIs desenvolvida pelo Facebook. Permite que clientes solicitem exatamente os dados necessários, evitando over-fetching e under-fetching comuns em REST."
        },
        {
            question: "O que é Rate Limiting em APIs?",
            answers: [
                "Limitar o tamanho máximo das respostas retornadas pela API",
                "Limitar o número de requisições que um cliente pode fazer em um período",
                "Limitar a velocidade de upload de arquivos para o servidor",
                "Limitar o número de endpoints disponíveis na API"
            ],
            correct: 1,
            explanation: "Rate Limiting restringe quantas requisições um cliente pode fazer em um período (ex: 100 req/minuto). Protege a API contra abuso, DDoS, e garante recursos para todos os usuários. Retorna 429 Too Many Requests quando excedido."
        },
        {
            question: "O que significa CRUD?",
            answers: [
                "Create, Read, Update, Delete - as quatro operações básicas de dados",
                "Connect, Retrieve, Upload, Download - operações de transferência de dados",
                "Call, Return, Use, Deploy - ciclo de vida de microsserviços",
                "Check, Review, Update, Debug - etapas do processo de QA"
            ],
            correct: 0,
            explanation: "CRUD representa as quatro operações básicas: Create (POST), Read (GET), Update (PUT/PATCH), Delete (DELETE). Praticamente toda API que gerencia recursos implementa essas operações."
        },
        {
            question: "O que é o Postman usado para?",
            answers: [
                "Enviar emails automatizados para clientes e usuários",
                "Testar, documentar e desenvolver APIs de forma colaborativa",
                "Criar interfaces de usuário responsivas para aplicações web",
                "Gerenciar servidores e infraestrutura de cloud computing"
            ],
            correct: 1,
            explanation: "Postman é uma ferramenta popular para testar APIs. Permite enviar requisições HTTP, organizar em collections, criar testes automatizados, mockar APIs, e gerar documentação. Alternativas: Insomnia, Thunder Client."
        },
        {
            question: "O que é o cabeçalho Content-Type?",
            answers: [
                "O tipo de navegador e sistema operacional do cliente",
                "O formato dos dados sendo enviados/recebidos (ex: application/json)",
                "O tamanho total do conteúdo sendo transferido em bytes",
                "A codificação de caracteres usada no texto da resposta"
            ],
            correct: 1,
            explanation: "Content-Type indica o tipo de mídia/formato dos dados no body da requisição ou resposta. Exemplos: application/json, text/html, multipart/form-data. O servidor usa isso para parsear os dados corretamente."
        },
        {
            question: "O que significa o status code 201?",
            answers: [
                "Sucesso na requisição, mas sem corpo de resposta retornado",
                "Recurso criado com sucesso no servidor após requisição POST",
                "Requisição aceita para processamento assíncrono posterior",
                "Requisição processada com sucesso, mas sem conteúdo para retornar"
            ],
            correct: 1,
            explanation: "201 Created indica que a requisição foi bem-sucedida e um novo recurso foi criado. Geralmente retornado após POST bem-sucedido. A resposta deve incluir o recurso criado ou sua localização (header Location)."
        },
        {
            question: "O que é OAuth 2.0?",
            answers: [
                "Um banco de dados para armazenar credenciais de usuários",
                "Um protocolo de autorização que permite acesso limitado a recursos",
                "Uma linguagem de programação para desenvolvimento seguro",
                "Um framework de testes para validar fluxos de autenticação"
            ],
            correct: 1,
            explanation: "OAuth 2.0 é um protocolo de autorização que permite que aplicações obtenham acesso limitado a recursos de usuários sem expor suas credenciais. Usado em 'Login com Google/Facebook' e APIs que requerem permissões específicas."
        },
        {
            question: "O que é um JWT (JSON Web Token)?",
            answers: [
                "Um banco de dados JSON para armazenar tokens de acesso",
                "Um token compacto e auto-contido para transmitir informações de forma segura",
                "Um formato de arquivo para exportar dados de aplicações",
                "Uma API de JavaScript nativa para manipulação de tokens"
            ],
            correct: 1,
            explanation: "JWT é um padrão para criar tokens de acesso que contêm claims (informações) em formato JSON, assinados digitalmente. Usado para autenticação stateless - o token contém todas as informações necessárias para validar o usuário."
        }
    ],
    playwright: [
        {
            question: "Qual comando instala o Playwright em um projeto?",
            answers: [
                "npm install playwright-test para adicionar apenas a biblioteca",
                "npm init playwright@latest para instalação completa com configuração",
                "npm install @playwright/core para instalar o núcleo do framework",
                "npx create-playwright para criar um novo projeto do zero"
            ],
            correct: 1,
            explanation: "O comando 'npm init playwright@latest' instala o Playwright e configura o projeto com arquivos de configuração, exemplo de teste, e oferece instalar os navegadores. 'npx playwright install' instala apenas os navegadores."
        },
        {
            question: "Qual é a sintaxe correta para navegar para uma URL no Playwright?",
            answers: [
                "page.navigate('https://exemplo.com') para navegação simples",
                "page.goto('https://exemplo.com') com opções de waitUntil",
                "page.open('https://exemplo.com') para abrir nova aba",
                "page.visit('https://exemplo.com') similar ao Cypress"
            ],
            correct: 1,
            explanation: "page.goto() é o método para navegar para uma URL no Playwright. Aceita opções como timeout e waitUntil. Exemplo: await page.goto('https://exemplo.com', { waitUntil: 'networkidle' })."
        },
        {
            question: "Como selecionar um elemento por texto no Playwright?",
            answers: [
                "page.$('text=Clique aqui') usando seletor jQuery style",
                "page.locator('text=Clique aqui') ou page.getByText('Clique aqui')",
                "page.findByText('Clique aqui') similar ao Testing Library",
                "page.selectText('Clique aqui') para selecionar texto na página"
            ],
            correct: 1,
            explanation: "Playwright oferece page.locator('text=Clique aqui') ou o método mais semântico page.getByText('Clique aqui'). Os métodos getBy* são recomendados por serem mais legíveis e alinhados com Testing Library."
        },
        {
            question: "O que é o Playwright Test Runner?",
            answers: [
                "Um plugin do Jest para executar testes Playwright",
                "O framework de testes integrado do Playwright com recursos como paralelismo e relatórios",
                "Uma extensão do VS Code para rodar testes visuais",
                "Um servidor de CI/CD para executar testes automatizados"
            ],
            correct: 1,
            explanation: "@playwright/test é o test runner integrado do Playwright. Oferece: paralelismo de testes, fixtures, hooks, retry automático, screenshots/videos em falha, múltiplos reporters, e modo UI para debugging."
        },
        {
            question: "Como fazer uma asserção de que um elemento está visível no Playwright?",
            answers: [
                "expect(element).toBeInTheDocument() do Testing Library",
                "await expect(locator).toBeVisible() com auto-waiting",
                "assert(element.isVisible()) usando assert nativo do Node",
                "element.shouldBeVisible() no estilo de asserção do Chai"
            ],
            correct: 1,
            explanation: "await expect(locator).toBeVisible() é a forma correta. O Playwright tem expect com auto-waiting - ele aguarda até que a condição seja verdadeira ou o timeout expire. Outras asserções: toHaveText, toHaveValue, toBeEnabled."
        },
        {
            question: "O que é o 'auto-waiting' do Playwright?",
            answers: [
                "Um sistema de filas para gerenciar requisições de teste",
                "O mecanismo que automaticamente espera elementos estarem prontos antes de interagir",
                "Um modo de espera manual configurado pelo desenvolvedor",
                "Um plugin de timeout para controlar tempo de execução"
            ],
            correct: 1,
            explanation: "Auto-waiting é o recurso do Playwright que automaticamente espera elementos estarem visíveis, habilitados, e estáveis antes de interagir. Elimina a necessidade de waits explícitos na maioria dos casos, tornando testes mais confiáveis."
        },
        {
            question: "Qual o comando para executar os testes Playwright?",
            answers: [
                "playwright run para execução direta do binário",
                "npx playwright test com opções de projeto e filtros",
                "npm test playwright usando script do package.json",
                "playwright execute para modo de execução contínua"
            ],
            correct: 1,
            explanation: "'npx playwright test' executa todos os testes. Opções úteis: --headed (ver navegador), --debug (modo debug), --ui (interface visual), --project=chromium (navegador específico), nome-do-arquivo.spec.ts (arquivo específico)."
        },
        {
            question: "Como o Playwright lida com múltiplos navegadores?",
            answers: [
                "Só suporta Chrome e navegadores baseados em Chromium",
                "Suporta Chromium, Firefox e WebKit através de projetos no config",
                "Precisa de plugins separados instalados para cada navegador",
                "Usa apenas navegadores headless e não suporta modo headed"
            ],
            correct: 1,
            explanation: "Playwright suporta nativamente Chromium, Firefox e WebKit (Safari). Configure projects no playwright.config.ts para testar em múltiplos navegadores. Comando: npx playwright test --project=firefox."
        },
        {
            question: "O que é o Playwright Codegen?",
            answers: [
                "Um compilador de código TypeScript para JavaScript",
                "Uma ferramenta que grava ações no navegador e gera código de teste",
                "Um gerador de relatórios HTML de execução de testes",
                "Um formatador de código para padronizar arquivos de teste"
            ],
            correct: 1,
            explanation: "'npx playwright codegen' abre um navegador onde você interage manualmente e o Playwright gera código de teste automaticamente. Útil para criar testes rapidamente e aprender os seletores/métodos do Playwright."
        },
        {
            question: "Como fazer debug de testes no Playwright?",
            answers: [
                "Não é possível debugar testes Playwright nativamente",
                "Usar --debug flag, page.pause(), ou Playwright Inspector",
                "Apenas usando console.log para imprimir valores no terminal",
                "Apenas no modo headless com logs de saída redirecionados"
            ],
            correct: 1,
            explanation: "Playwright oferece várias opções de debug: 'npx playwright test --debug' abre o inspector, 'await page.pause()' pausa a execução para inspecionar, '--ui' abre interface visual, e VS Code extension permite debug interativo."
        },
        {
            question: "O que são Fixtures no Playwright Test?",
            answers: [
                "Correções de bugs aplicadas em testes que estão falhando",
                "Objetos reutilizáveis que configuram o ambiente de teste (page, browser, context)",
                "Arquivos de configuração JSON para parametrizar testes",
                "Tipos de asserções específicos para validação de elementos"
            ],
            correct: 1,
            explanation: "Fixtures são objetos que o Playwright Test injeta nos testes. Built-in fixtures incluem page, browser, context. Você pode criar fixtures customizados para compartilhar setup/teardown, como login de usuário ou dados de teste."
        },
        {
            question: "Como tirar screenshot de uma página no Playwright?",
            answers: [
                "page.capture() para captura rápida da viewport",
                "page.screenshot({ path: 'screenshot.png' }) com opções de fullPage",
                "page.takePhoto() para captura instantânea do DOM",
                "page.saveImage() para salvar como arquivo de imagem"
            ],
            correct: 1,
            explanation: "await page.screenshot({ path: 'screenshot.png' }) captura a página. Opções incluem fullPage (página inteira), clip (área específica), type ('png' ou 'jpeg'). Para elementos: locator.screenshot()."
        },
        {
            question: "O que é o Trace Viewer do Playwright?",
            answers: [
                "Um rastreador de bugs integrado ao sistema de issues",
                "Uma ferramenta que grava e reproduz execuções de teste com screenshots, DOM, e network",
                "Um monitor de performance que mede tempo de carregamento",
                "Um logger de console para registrar mensagens de debug"
            ],
            correct: 1,
            explanation: "Trace Viewer grava uma 'trace' completa do teste: screenshots de cada ação, snapshots do DOM, logs de rede, e console. Ative com trace: 'on' no config. Visualize com 'npx playwright show-trace trace.zip'."
        },
        {
            question: "Como executar testes em paralelo no Playwright?",
            answers: [
                "Não é possível executar testes em paralelo no Playwright",
                "O Playwright Test executa em paralelo por padrão; configure workers no config",
                "Precisa de plugin adicional como playwright-parallel instalado",
                "Apenas em CI/CD com configuração especial de ambiente"
            ],
            correct: 1,
            explanation: "Playwright Test executa testes em paralelo por padrão. Configure o número de workers em playwright.config.ts: workers: 4 (número fixo) ou workers: '50%' (porcentagem de CPUs). Use test.describe.serial() para testes sequenciais."
        },
        {
            question: "Qual método é usado para preencher um campo de input no Playwright?",
            answers: [
                "page.type('selector', 'texto') para digitar caractere por caractere",
                "page.locator('selector').fill('texto') que limpa e preenche o campo",
                "page.input('selector', 'texto') para inserção direta de valor",
                "page.write('selector', 'texto') para escrita sequencial de texto"
            ],
            correct: 1,
            explanation: "locator.fill('texto') preenche campos de input, limpando o conteúdo anterior. Para digitar caractere por caractere (simulando digitação real), use locator.type('texto'). fill() é mais rápido e recomendado na maioria dos casos."
        }
    ],
    selenium: [
        {
            question: "O que é o WebDriver no Selenium?",
            answers: [
                "Um navegador especial otimizado para execução de testes",
                "Uma interface para controlar navegadores programaticamente",
                "Um servidor de testes que gerencia a execução distribuída",
                "Uma linguagem de programação específica para automação"
            ],
            correct: 1,
            explanation: "WebDriver é uma interface W3C que permite controlar navegadores programaticamente. Cada navegador tem seu driver (ChromeDriver, GeckoDriver, etc.) que implementa o protocolo WebDriver para automação."
        },
        {
            question: "Qual é a diferença entre findElement e findElements?",
            answers: [
                "Não há diferença significativa entre os dois métodos",
                "findElement retorna um elemento; findElements retorna uma lista de elementos",
                "findElement é mais rápido por usar cache interno",
                "findElements é deprecated e será removido em versões futuras"
            ],
            correct: 1,
            explanation: "findElement retorna o primeiro elemento encontrado ou lança exceção se não encontrar. findElements retorna uma lista (pode ser vazia) de todos os elementos que correspondem ao seletor."
        },
        {
            question: "O que é o Selenium Grid?",
            answers: [
                "Um editor de código integrado para escrever testes Selenium",
                "Uma infraestrutura para executar testes em múltiplas máquinas e navegadores em paralelo",
                "Um tipo de seletor avançado para localizar elementos",
                "Um relatório de testes com gráficos e métricas detalhadas"
            ],
            correct: 1,
            explanation: "Selenium Grid permite distribuir testes em múltiplas máquinas (nodes) controladas por um hub central. Possibilita executar testes em paralelo em diferentes navegadores/OS, reduzindo tempo de execução."
        },
        {
            question: "Como esperar um elemento estar presente no Selenium?",
            answers: [
                "Thread.sleep(5000) para esperar um tempo fixo",
                "WebDriverWait com ExpectedConditions para espera inteligente",
                "driver.wait() para espera implícita do driver",
                "element.waitFor() para esperar o elemento ficar pronto"
            ],
            correct: 1,
            explanation: "WebDriverWait com ExpectedConditions é a forma correta de esperar. Ex: new WebDriverWait(driver, 10).until(ExpectedConditions.presenceOfElementLocated(By.id('elemento'))). Evite Thread.sleep() que é espera fixa."
        },
        {
            question: "Quais são os tipos de espera no Selenium?",
            answers: [
                "Apenas espera implícita que é configurada globalmente",
                "Implícita, Explícita e Fluent Wait com diferentes estratégias",
                "Apenas Thread.sleep que pausa a execução por tempo fixo",
                "Apenas espera explícita usando WebDriverWait"
            ],
            correct: 1,
            explanation: "Implicit Wait: timeout global para todos os findElement. Explicit Wait (WebDriverWait): espera específica com condição. Fluent Wait: explicit wait com polling customizado e exceções ignoradas. Explicit/Fluent são preferidas."
        },
        {
            question: "O que é Page Object Model (POM)?",
            answers: [
                "Um tipo de seletor avançado para localizar elementos complexos",
                "Um padrão de design que encapsula elementos e ações de uma página em classes",
                "Uma ferramenta de automação para gerar testes automaticamente",
                "Um formato de relatório que organiza resultados por página"
            ],
            correct: 1,
            explanation: "Page Object Model é um design pattern onde cada página/componente da aplicação é representado por uma classe. Encapsula locators e métodos de interação, promovendo reusabilidade e manutenibilidade dos testes."
        },
        {
            question: "Como lidar com alertas JavaScript no Selenium?",
            answers: [
                "driver.findElement(By.alert()) para localizar o alerta",
                "driver.switchTo().alert() para mudar o foco para o alerta",
                "driver.handleAlert() para processar o alerta automaticamente",
                "Alert.dismiss() para fechar diretamente qualquer alerta"
            ],
            correct: 1,
            explanation: "driver.switchTo().alert() retorna um objeto Alert. Métodos: accept() (OK), dismiss() (Cancelar), getText() (obter texto), sendKeys() (digitar em prompts). Deve mudar o foco antes de interagir."
        },
        {
            question: "Qual locator é geralmente mais rápido e confiável no Selenium?",
            answers: [
                "XPath por sua flexibilidade em navegar pelo DOM",
                "ID por ser único e otimizado pelos navegadores",
                "CSS Selector por sua sintaxe moderna e legível",
                "Class Name por ser simples e direto de usar"
            ],
            correct: 1,
            explanation: "ID é geralmente mais rápido porque navegadores otimizam busca por ID (deve ser único). CSS Selectors são a segunda opção mais rápida. XPath é flexível mas mais lento. Use ID quando disponível, senão CSS Selector."
        },
        {
            question: "Como executar JavaScript no Selenium?",
            answers: [
                "driver.runScript() para executar scripts simples",
                "((JavascriptExecutor) driver).executeScript() com cast explícito",
                "driver.eval() para avaliar expressões JavaScript",
                "driver.js() para injetar código na página"
            ],
            correct: 1,
            explanation: "Faça cast para JavascriptExecutor e use executeScript(). Ex: ((JavascriptExecutor) driver).executeScript(\"return document.title;\"). Útil para scroll, obter valores, interagir com elementos não acessíveis normalmente."
        },
        {
            question: "O que é o Selenium IDE?",
            answers: [
                "Um ambiente de desenvolvimento integrado completo para automação",
                "Uma extensão de navegador para gravar e reproduzir testes",
                "Um servidor de testes para execução distribuída",
                "Uma biblioteca de código com utilitários de teste"
            ],
            correct: 1,
            explanation: "Selenium IDE é uma extensão para Chrome/Firefox que grava interações no navegador e gera testes. Útil para criar testes rapidamente sem código, mas testes exportados geralmente precisam de refinamento para produção."
        },
        {
            question: "Como fazer hover (passar o mouse) em um elemento no Selenium?",
            answers: [
                "element.hover() como método direto do elemento",
                "Actions class com moveToElement() para ações complexas",
                "driver.hover(element) usando o driver diretamente",
                "element.mouseOver() para simular passagem do mouse"
            ],
            correct: 1,
            explanation: "Use a classe Actions: new Actions(driver).moveToElement(element).perform(). A classe Actions permite ações complexas como hover, drag-and-drop, double-click, right-click, e sequências de ações."
        },
        {
            question: "O que é Headless mode no Selenium?",
            answers: [
                "Modo sem JavaScript habilitado no navegador",
                "Executar o navegador sem interface gráfica visível",
                "Modo sem conexão de rede para testes offline",
                "Modo de debug com logs detalhados de execução"
            ],
            correct: 1,
            explanation: "Headless mode executa o navegador sem renderizar a interface gráfica. É mais rápido e usa menos recursos, ideal para CI/CD. Configure com ChromeOptions: options.addArguments('--headless')."
        },
        {
            question: "Como alternar entre abas/janelas no Selenium?",
            answers: [
                "driver.switchWindow() para trocar diretamente de janela",
                "driver.switchTo().window(windowHandle) usando o handle da janela",
                "driver.changeTab() para alternar entre abas abertas",
                "driver.newWindow() para criar e mudar para nova janela"
            ],
            correct: 1,
            explanation: "Use driver.getWindowHandles() para obter todas as janelas e driver.switchTo().window(handle) para mudar. driver.getWindowHandle() retorna a janela atual. Sempre salve o handle original antes de mudar."
        },
        {
            question: "O que significa 'StaleElementReferenceException'?",
            answers: [
                "O elemento não existe na página e nunca existiu",
                "O elemento foi encontrado mas não está mais anexado ao DOM",
                "O seletor está errado e não corresponde a nenhum elemento",
                "Timeout excedido ao aguardar o elemento ficar disponível"
            ],
            correct: 1,
            explanation: "StaleElementReferenceException ocorre quando um elemento foi encontrado mas o DOM foi atualizado e o elemento não está mais anexado. Solução: encontrar o elemento novamente após a atualização do DOM."
        },
        {
            question: "Como capturar screenshot no Selenium?",
            answers: [
                "driver.screenshot() para captura simples da tela",
                "((TakesScreenshot) driver).getScreenshotAs(OutputType.FILE) com cast",
                "driver.capture() para capturar a viewport atual",
                "driver.saveImage() para salvar imagem em disco"
            ],
            correct: 1,
            explanation: "Faça cast para TakesScreenshot e use getScreenshotAs(). Pode salvar como FILE, BYTES, ou BASE64. Ex: File screenshot = ((TakesScreenshot) driver).getScreenshotAs(OutputType.FILE);"
        }
    ],
    cypress: [
        {
            question: "Qual comando é usado para visitar uma URL no Cypress?",
            answers: [
                "cy.navigate() para navegação programática",
                "cy.visit() que aceita URL relativa ou absoluta",
                "cy.goto() similar ao Playwright",
                "cy.open() para abrir nova janela do navegador"
            ],
            correct: 1,
            explanation: "cy.visit() é o comando para navegar para uma URL no Cypress. Aceita URL relativa (baseUrl do config) ou absoluta. Ex: cy.visit('/login') ou cy.visit('https://exemplo.com')."
        },
        {
            question: "O que é o Cypress Dashboard?",
            answers: [
                "Um painel de administração local para gerenciar testes",
                "Um serviço cloud para gravação, paralelização e analytics de testes",
                "Uma interface de configuração do cypress.config.js",
                "Um editor de código integrado para escrever testes"
            ],
            correct: 1,
            explanation: "Cypress Dashboard (agora Cypress Cloud) é um serviço que oferece gravação de execuções, screenshots/vídeos de falhas, paralelização inteligente, analytics, e flaky test detection. Requer conta e projectId no config."
        },
        {
            question: "Como selecionar um elemento pelo atributo data-cy no Cypress?",
            answers: [
                "cy.get('[data-cy=elemento]') usando seletor CSS de atributo",
                "cy.data('elemento') para acessar dados do elemento",
                "cy.find('data-cy=elemento') buscando dentro do contexto",
                "cy.getByData('elemento') similar ao Testing Library"
            ],
            correct: 0,
            explanation: "cy.get('[data-cy=elemento]') usa seletor CSS de atributo. data-cy é uma convenção recomendada pelo Cypress para criar seletores estáveis. Também pode usar data-test ou data-testid."
        },
        {
            question: "O que o comando cy.intercept() faz?",
            answers: [
                "Intercepta erros de JavaScript e exibe no console",
                "Intercepta e controla requisições de rede (mock/spy)",
                "Intercepta cliques do usuário para validação",
                "Intercepta logs do console para análise posterior"
            ],
            correct: 1,
            explanation: "cy.intercept() permite interceptar requisições HTTP para: mockar respostas (stub), esperar requisições (wait), modificar requests/responses, e simular erros de rede. Essencial para testes isolados e consistentes."
        },
        {
            question: "Qual é a diferença entre cy.get() e cy.find()?",
            answers: [
                "Não há diferença significativa entre os dois comandos",
                "cy.get() busca no documento todo; cy.find() busca dentro de um elemento pai",
                "cy.get() é mais rápido por usar cache do DOM",
                "cy.find() é deprecated e será removido em versões futuras"
            ],
            correct: 1,
            explanation: "cy.get() busca no documento inteiro a partir da raiz. cy.find() é encadeado e busca descendentes do elemento anterior. Ex: cy.get('.pai').find('.filho') - encontra .filho dentro de .pai."
        },
        {
            question: "O que é 'automatic waiting' no Cypress?",
            answers: [
                "Um plugin adicional instalado separadamente",
                "O Cypress automaticamente espera elementos e asserções sem timeouts explícitos",
                "Espera manual configurada pelo usuário no arquivo de config",
                "Modo de pausa automática entre cada comando executado"
            ],
            correct: 1,
            explanation: "Cypress automaticamente espera: comandos (até o elemento existir), asserções (até passar ou timeout), requisições (cy.wait). Timeout padrão é 4s. Isso elimina a necessidade de waits explícitos na maioria dos casos."
        },
        {
            question: "Como acessar um iframe no Cypress?",
            answers: [
                "cy.iframe() para acessar diretamente o conteúdo do iframe",
                "cy.get('iframe').its('0.contentDocument.body').should('not.be.empty').then(cy.wrap)",
                "cy.switchToFrame() para mudar o contexto para o iframe",
                "cy.frame() para selecionar o iframe pelo nome ou id"
            ],
            correct: 1,
            explanation: "Cypress não tem comando nativo para iframes. A solução comum é acessar o contentDocument do iframe e fazer wrap. O plugin cypress-iframe simplifica isso: cy.frameLoaded() e cy.iframe()."
        },
        {
            question: "O que são Custom Commands no Cypress?",
            answers: [
                "Comandos do sistema operacional executados durante os testes",
                "Comandos personalizados que você cria para reutilizar em testes",
                "Comandos de linha de comando para executar o Cypress",
                "Comandos de configuração definidos no cypress.config.js"
            ],
            correct: 1,
            explanation: "Custom Commands são comandos que você define em cypress/support/commands.js. Ex: Cypress.Commands.add('login', (user, pass) => {...}). Depois use cy.login('user', 'pass'). Ótimo para ações repetitivas como login."
        },
        {
            question: "O que o comando cy.fixture() faz?",
            answers: [
                "Cria arquivos temporários para uso durante os testes",
                "Carrega dados de arquivos da pasta cypress/fixtures",
                "Corrige elementos quebrados automaticamente no DOM",
                "Configura o ambiente de teste com variáveis específicas"
            ],
            correct: 1,
            explanation: "cy.fixture() carrega dados de arquivos JSON (ou outros) da pasta cypress/fixtures. Útil para dados de teste, mocks de API, etc. Ex: cy.fixture('users.json').then((users) => {...}). Pode usar com cy.intercept()."
        },
        {
            question: "Como executar testes Cypress em modo headless?",
            answers: [
                "cypress open --headless para abrir sem interface",
                "cypress run que executa em headless por padrão",
                "cypress test --no-gui para desativar a interface gráfica",
                "cypress execute para execução em modo background"
            ],
            correct: 1,
            explanation: "'cypress run' executa testes em modo headless por padrão (Electron ou Chrome headless). 'cypress open' abre o Test Runner interativo. Para CI/CD, use 'cypress run' com configurações de browser e spec específicas."
        },
        {
            question: "O que é o Test Runner do Cypress?",
            answers: [
                "Um servidor de CI/CD para executar testes automatizados",
                "A interface gráfica interativa para executar e debugar testes",
                "Um plugin de relatórios para gerar documentação",
                "Uma biblioteca de asserções com métodos de validação"
            ],
            correct: 1,
            explanation: "O Test Runner (aberto com 'cypress open') é a interface interativa do Cypress. Mostra o navegador em tempo real, snapshots de cada comando, time-travel debugging, seletor playground, e console para investigação."
        },
        {
            question: "Como lidar com elementos que aparecem condicionalmente no Cypress?",
            answers: [
                "Usar try-catch para capturar exceções de elemento não encontrado",
                "Usar cy.get().should('exist') ou verificar com jQuery",
                "Não é possível lidar com elementos condicionais no Cypress",
                "Usar cy.wait() com tempo fixo antes de buscar o elemento"
            ],
            correct: 1,
            explanation: "Para elementos condicionais: cy.get('body').then(($body) => { if ($body.find('.elemento').length) { ... } }). Ou use should('exist')/should('not.exist'). Evite testes dependentes de condições - prefira estado determinístico."
        },
        {
            question: "O que é cy.session() no Cypress?",
            answers: [
                "Cria uma nova aba do navegador para isolamento de testes",
                "Cacheia e restaura estado de autenticação entre testes",
                "Inicia uma sessão de debug para investigar falhas",
                "Gerencia cookies manualmente com controle total"
            ],
            correct: 1,
            explanation: "cy.session() (Cypress 8+) cacheia o estado do navegador (cookies, localStorage, sessionStorage) após uma ação como login. Testes subsequentes restauram esse estado sem repetir o login, acelerando significativamente a suite."
        },
        {
            question: "Qual é o arquivo de configuração principal do Cypress?",
            answers: [
                "cypress.json (deprecated) / cypress.config.js para configurações",
                "package.json onde ficam todas as configurações do projeto",
                "config.js arquivo genérico de configuração JavaScript",
                "settings.json para configurações em formato JSON padrão"
            ],
            correct: 0,
            explanation: "Cypress 10+ usa cypress.config.js (ou .ts). Versões anteriores usavam cypress.json. O arquivo configura baseUrl, viewportSize, timeouts, env variables, plugins, e outras opções do Cypress."
        },
        {
            question: "Como fazer asserções em requisições de rede no Cypress?",
            answers: [
                "cy.request().assert() para validar respostas diretamente",
                "cy.intercept() com cy.wait() e then() para verificar requisições",
                "cy.network().check() para monitorar tráfego de rede",
                "Não é possível fazer asserções de rede no Cypress"
            ],
            correct: 1,
            explanation: "Use cy.intercept() para interceptar, cy.wait('@alias') para esperar, e then() para acessar a requisição/resposta. Ex: cy.intercept('POST', '/api/*').as('apiCall'); cy.wait('@apiCall').its('response.statusCode').should('eq', 200)."
        }
    ],
    hibrido: [
        {
            question: "O que são Testes End-to-End (E2E)?",
            answers: [
                "Testes unitários avançados com maior cobertura de código",
                "Testes que validam fluxos completos da aplicação do início ao fim",
                "Testes focados apenas no backend e APIs do sistema",
                "Testes de integração limitados entre apenas dois módulos"
            ],
            correct: 1,
            explanation: "Testes E2E validam fluxos completos da aplicação como um usuário real faria: navegação, interações UI, chamadas de API, persistência de dados. Testam frontend + backend + banco juntos, garantindo que o sistema funciona de ponta a ponta."
        },
        {
            question: "O que é Contract Testing em arquitetura de microsserviços?",
            answers: [
                "Testar contratos legais e acordos entre empresas parceiras",
                "Validar que consumidores e provedores de API concordam sobre o formato de comunicação",
                "Testar termos de uso e políticas de privacidade do sistema",
                "Verificar licenças de software e dependências do projeto"
            ],
            correct: 1,
            explanation: "Contract Testing valida que serviços consumidores e provedores concordam sobre o 'contrato' (formato de requisições/respostas). Ferramentas como Pact permitem que cada lado teste independentemente contra o contrato, sem precisar do outro serviço."
        },
        {
            question: "O que é a estratégia de teste 'Test Double'?",
            answers: [
                "Executar cada teste duas vezes para garantir consistência",
                "Usar substitutos (mocks, stubs, fakes, spies) para dependências em testes",
                "Testar em dois navegadores diferentes simultaneamente",
                "Duplicar casos de teste para aumentar cobertura"
            ],
            correct: 1,
            explanation: "Test Double é um termo genérico para qualquer objeto que substitui uma dependência real em testes. Tipos: Stub (respostas pré-programadas), Mock (verifica interações), Fake (implementação simplificada), Spy (registra chamadas)."
        },
        {
            question: "O que é CI/CD e como se relaciona com testes?",
            answers: [
                "Um tipo de teste específico para pipelines de deploy",
                "Integração e Entrega Contínua - automatiza build, teste e deploy do código",
                "Uma ferramenta de automação de testes como Selenium ou Cypress",
                "Um framework de testes para aplicações web modernas"
            ],
            correct: 1,
            explanation: "CI (Continuous Integration) automatiza build e testes a cada commit. CD (Continuous Delivery/Deployment) automatiza o deploy. Testes automatizados são essenciais: unitários no CI, E2E antes do deploy, garantindo qualidade contínua."
        },
        {
            question: "O que é o padrão AAA (Arrange-Act-Assert) em testes?",
            answers: [
                "Uma classificação de bugs por severidade e prioridade",
                "Uma estrutura para organizar testes: preparar dados, executar ação, verificar resultado",
                "Uma métrica de qualidade para avaliar cobertura de testes",
                "Um tipo de relatório gerado após execução da suíte"
            ],
            correct: 1,
            explanation: "AAA é um padrão para estruturar testes: Arrange (preparar dados e contexto), Act (executar a ação sendo testada), Assert (verificar o resultado esperado). Similar ao Given-When-Then do BDD. Torna testes mais legíveis e organizados."
        },
        {
            question: "O que são Flaky Tests?",
            answers: [
                "Testes muito rápidos que executam em menos de um segundo",
                "Testes que falham intermitentemente sem mudanças no código",
                "Testes deprecated que devem ser removidos do projeto",
                "Testes sem asserções que apenas executam código"
            ],
            correct: 1,
            explanation: "Flaky Tests são testes instáveis que passam ou falham aleatoriamente. Causas comuns: race conditions, dependência de dados externos, timing issues, ordem de execução. São problemáticos porque minam a confiança na suite de testes."
        },
        {
            question: "O que é Test Data Management?",
            answers: [
                "Gerenciar senhas de teste e credenciais de acesso",
                "Estratégias para criar, manter e limpar dados usados em testes",
                "Backup de testes e versionamento de casos de teste",
                "Documentação de testes e manuais de execução"
            ],
            correct: 1,
            explanation: "Test Data Management envolve estratégias para dados de teste: fixtures (dados estáticos), factories (geração dinâmica), seeding (popular banco), cleanup (limpar após testes). Dados consistentes são cruciais para testes confiáveis."
        },
        {
            question: "O que é Teste de Ponta a Ponta com API Mocking?",
            answers: [
                "Testar apenas APIs de forma isolada sem interface",
                "Testes E2E onde o backend é simulado para isolar o frontend",
                "Testes sem frontend focados apenas em serviços backend",
                "Testes de performance de API para medir tempo de resposta"
            ],
            correct: 1,
            explanation: "É uma estratégia híbrida onde testes E2E de frontend usam APIs mockadas (cy.intercept/page.route). Benefícios: testes mais rápidos, controlados e isolados. Trade-off: não testam integração real com backend."
        },
        {
            question: "O que é o conceito de 'Shift Right' em testes?",
            answers: [
                "Mover testes para o início do ciclo de desenvolvimento",
                "Testar em produção com técnicas como canary releases e monitoramento",
                "Testar apenas o lado direito da interface em layouts RTL",
                "Postergar todos os testes para depois do deploy em produção"
            ],
            correct: 1,
            explanation: "Shift Right complementa Shift Left: é testar em produção de forma controlada. Inclui: canary releases, feature flags, A/B testing, monitoramento, chaos engineering. Reconhece que alguns problemas só aparecem em produção real."
        },
        {
            question: "O que é uma Test Suite?",
            answers: [
                "Um único teste isolado que valida uma funcionalidade",
                "Uma coleção organizada de casos de teste relacionados",
                "Uma ferramenta de teste para automação de fluxos",
                "Um relatório de bugs gerado após execução dos testes"
            ],
            correct: 1,
            explanation: "Test Suite é uma coleção de casos de teste agrupados logicamente, geralmente por funcionalidade, módulo ou tipo de teste. Permite executar grupos de testes relacionados juntos e organizar a cobertura de testes do projeto."
        },
        {
            question: "O que é Testing Trophy (Troféu de Testes)?",
            answers: [
                "Um prêmio dado para QAs com melhor desempenho",
                "Uma alternativa à Pirâmide que prioriza testes de integração",
                "Uma ferramenta de relatórios em formato de dashboard",
                "Uma certificação de QA reconhecida internacionalmente"
            ],
            correct: 1,
            explanation: "Testing Trophy (proposto por Kent C. Dodds) é uma alternativa à Pirâmide de Testes. Prioriza testes de integração no meio (maior confiança vs custo), com menos unitários, menos E2E, e análise estática na base. Popular em frontend."
        },
        {
            question: "O que é Feature Flag Testing?",
            answers: [
                "Testar apenas novas features antes de ir para produção",
                "Testar aplicações que usam feature flags, cobrindo cenários com flags ligadas/desligadas",
                "Marcar testes como features para organização no relatório",
                "Usar flags em relatórios para categorizar resultados"
            ],
            correct: 1,
            explanation: "Feature Flag Testing envolve testar aplicações com feature toggles: verificar comportamento com flag ON e OFF, testar transições, garantir rollback seguro. Essencial quando feature flags controlam funcionalidades em produção."
        },
        {
            question: "O que é Parallel Testing?",
            answers: [
                "Testar duas features diferentes ao mesmo tempo manualmente",
                "Executar múltiplos testes simultaneamente para reduzir tempo total",
                "Testar em dois monitores para visualizar diferentes partes",
                "Comparar dois sistemas lado a lado para encontrar diferenças"
            ],
            correct: 1,
            explanation: "Parallel Testing executa múltiplos testes simultaneamente em diferentes threads/processos/máquinas. Reduz drasticamente o tempo de execução da suite. Requer testes independentes (sem compartilhar estado) e infraestrutura adequada."
        },
        {
            question: "O que é a técnica de Boundary Value Analysis?",
            answers: [
                "Analisar limites de performance do sistema sob carga",
                "Testar valores nos limites e fronteiras de partições válidas",
                "Definir limites de tempo máximo para execução de testes",
                "Analisar cobertura de código e identificar áreas não testadas"
            ],
            correct: 1,
            explanation: "Boundary Value Analysis testa valores nas fronteiras de partições de entrada. Para um campo que aceita 1-100: testa 0, 1, 2, 99, 100, 101. Bugs frequentemente ocorrem nos limites (off-by-one errors). Complementa Equivalence Partitioning."
        },
        {
            question: "O que é Equivalence Partitioning?",
            answers: [
                "Dividir a equipe de QA em grupos para trabalhar em paralelo",
                "Dividir inputs em grupos onde todos os valores devem ter comportamento equivalente",
                "Particionar o banco de dados para melhorar performance de testes",
                "Dividir testes em categorias para organização do relatório"
            ],
            correct: 1,
            explanation: "Equivalence Partitioning divide possíveis inputs em classes de equivalência - grupos onde qualquer valor deve produzir mesmo comportamento. Para idade 18-65: menores que 18, 18-65, maiores que 65 são três partições. Reduz casos de teste necessários."
        }
    ]
};

// Mapeamento de categorias para nomes amigáveis
const categoryNames = {
    fundamentos: "Fundamentos QA",
    frontend: "Frontend Testing",
    backend: "Backend Testing",
    api: "API Testing",
    playwright: "Playwright",
    selenium: "Selenium",
    cypress: "Cypress",
    hibrido: "Testes Híbridos"
};

// Ícones das categorias
const categoryIcons = {
    fundamentos: "🎯",
    frontend: "🌐",
    backend: "⚙️",
    api: "🔌",
    playwright: "🎭",
    selenium: "🤖",
    cypress: "🌲",
    hibrido: "🔄"
};

// ========== Perguntas de Entrevista ==========
const interviewQuestions = {
    behavioral: [
        {
            question: "Fale sobre sua experiência profissional em QA.",
            tip: "Use a estrutura: contexto → responsabilidades → conquistas → aprendizados",
            modelAnswer: "Atuo com QA desde setembro de 2025 em um produto B2B SaaS de grande porte, com arquitetura modular e regras de negócio complexas. Entrei no projeto em um momento em que não havia estrutura de QA, e desde então sou responsável por definir, implementar e evoluir a estratégia de testes automatizados, atuando como referência de qualidade no time. Trabalho com testes automatizados de frontend, API e testes híbridos, principalmente com Playwright, cobrindo hoje 9 módulos principais do sistema, como Leads, Contratos, Vendas, Engenharia e Financeiro. Minha atuação envolve desde a criação da base de testes até a organização da estrutura, definição de padrões, reutilização de helpers e priorização de cenários críticos. Ao longo desse período, implementei centenas de testes automatizados, aumentando progressivamente a cobertura em módulos essenciais do produto. Alguns módulos já possuem cobertura elevada, enquanto outros estão em constante evolução, refletindo um trabalho contínuo de expansão e maturidade de QA em um sistema vivo e em crescimento. Além da automação, atuo fortemente na validação de regras de negócio, testes de regressão, smoke tests e testes de consistência de dados, especialmente em dashboards, indicadores financeiros, filtros avançados e configurações dinâmicas de tela. Também crio testes específicos para reproduzir bugs reais, garantindo correção definitiva e prevenindo regressões. Essa experiência me proporcionou uma visão sólida de qualidade ponta a ponta em produto SaaS, com foco não apenas na execução de testes, mas no impacto das funcionalidades para o usuário final e para o negócio. Hoje me sinto confortável atuando como QA",
            keyPoints: [
                "Mencione tempo de experiência e evolução na carreira",
                "Destaque responsabilidades atuais e anteriores",
                "Cite projetos relevantes e tecnologias utilizadas",
                "Apresente conquistas com números quando possível",
                "Mostre evolução e aprendizado contínuo"
            ],
            category: "behavioral"
        },
        {
            question: "Por que você escolheu trabalhar com Quality Assurance?",
            tip: "Seja autêntico e mostre paixão pela área",
            modelAnswer: "Escolhi trabalhar com Quality Assurance porque iniciei minha trajetória estudando desenvolvimento de software, o que me deu uma base técnica sólida, mas ao longo do tempo percebi que meu perfil se conecta ainda mais com qualidade. Tenho uma atenção natural aos detalhes, senso crítico e gosto de entender o comportamento do sistema como um todo. Em QA, consigo unir minha base em desenvolvimento com análise de negócio, prevenção de falhas e melhoria contínua da experiência do usuário. O que mais me motiva é saber que meu trabalho impacta diretamente a estabilidade, a confiabilidade e a qualidade final do produto, evitando problemas antes que cheguem à produção. QA me permite ter uma visão holística da aplicação e atuar de forma estratégica dentro do time.",
            keyPoints: [
                "Demonstre paixão genuína pela área",
                "Mencione características pessoais que combinam com QA",
                "Fale sobre o impacto do seu trabalho nos usuários",
                "Mostre que entende a importância estratégica de QA",
                "Evite respostas genéricas como 'caiu de paraquedas'"
            ],
            category: "behavioral"
        },
        {
            question: "Conte sobre um bug crítico que você encontrou e como lidou com a situação.",
            tip: "Use o método STAR: Situação, Tarefa, Ação, Resultado",
            modelAnswer: "Em um projeto de e-commerce, durante testes de regressão, descobri que o cálculo de frete estava retornando valores negativos em determinadas condições. Imediatamente documentei o bug com evidências, reproduzi o cenário e comuniquei ao time. Trabalhei junto com o desenvolvedor para entender a causa raiz (uma divisão por zero em casos específicos). O bug foi corrigido antes do deploy, evitando prejuízos financeiros estimados em R$50k/mês.",
            keyPoints: [
                "Descreva o contexto e a gravidade do bug",
                "Explique como você descobriu o problema",
                "Detalhe as ações que tomou (documentação, comunicação)",
                "Mencione a colaboração com o time",
                "Quantifique o impacto quando possível"
            ],
            category: "behavioral"
        },
        {
            question: "Como você lida com prazos apertados e pressão?",
            tip: "Dê exemplos concretos de como gerenciou situações de pressão",
            modelAnswer: "Encaro prazos apertados como oportunidade de demonstrar capacidade de priorização. Primeiro, avalio os riscos e priorizo testes das funcionalidades mais críticas. Comunico claramente ao time o que será coberto e o que ficará como risco aceito. Em uma situação recente, com prazo reduzido pela metade, criei uma matriz de risco, automatizei os testes críticos de regressão e mantive o time informado. Entregamos no prazo com qualidade aceitável e documentação clara dos riscos.",
            keyPoints: [
                "Mostre capacidade de priorização baseada em risco",
                "Demonstre comunicação clara com stakeholders",
                "Cite estratégias específicas (matriz de risco, smoke tests)",
                "Dê um exemplo real de situação que enfrentou",
                "Evite dizer que 'trabalha bem sob pressão' sem exemplos"
            ],
            category: "behavioral"
        },
        {
            question: "Descreva uma situação de conflito com um desenvolvedor e como resolveu.",
            tip: "Foque na resolução colaborativa, não em quem estava certo",
            modelAnswer: "Não tive conflitos diretos com desenvolvedores, pois sempre busquei reportar bugs de forma clara, objetiva e colaborativa. Um exemplo foi quando identifiquei que um preset não estava sendo atualizado corretamente. Relatei o problema com evidências, passos para reprodução e impacto no comportamento esperado. O desenvolvedor analisou, concordou com o cenário e realizou a correção.Durante o processo, mantivemos uma comunicação aberta e alinhada, o que facilitou a resolução rápida do problema. Esse tipo de abordagem ajuda a manter um ambiente saudável e focado na qualidade do produto, não em quem está certo ou errado.",
            keyPoints: [
                "Mostre maturidade e profissionalismo",
                "Demonstre busca por solução colaborativa",
                "Evite culpar ou criticar o outro lado",
                "Mencione o que aprendeu com a situação",
                "Destaque melhorias de processo resultantes"
            ],
            category: "behavioral"
        },
        {
            question: "Qual foi o maior desafio que você enfrentou em sua carreira de QA?",
            tip: "Escolha um desafio relevante e mostre como superou",
            modelAnswer: "Meu maior desafio foi estruturar a automação de testes em um projeto que não possuía um processo de QA definido. Quando entrei, não havia testes automatizados nem uma estratégia clara de qualidade. Comecei entendendo o sistema, priorizando os fluxos mais críticos para o negócio e implementando automações de forma incremental, iniciando pelos testes smoke e pelos principais cenários de API e frontend. Com o tempo, fui expandindo a cobertura, criando padrões, organizando a suíte de testes e integrando a automação ao dia a dia do time. Isso trouxe mais estabilidade para as entregas e ajudou a reduzir falhas recorrentes, além de aumentar a confiança nas novas releases.",
            keyPoints: [
                "Escolha um desafio significativo e relevante",
                "Explique os obstáculos específicos",
                "Descreva sua estratégia para superar",
                "Mostre resultados concretos",
                "Mencione aprendizados"
            ],
            category: "behavioral"
        },
        {
            question: "Conte uma situação em que você identificou uma falha em um teste de software que outros haviam negligenciado. Como você procedeu para detectar essa falha e qual foi o resultado da sua intervenção?",
            tip: "Destaque seu olhar crítico e metodologia de investigação",
            modelAnswer: "Durante testes manuais em uma aplicação web, identifiquei que uma determinada sessão deveria ocultar um card da interface conforme a regra de negócio, mas isso não estava acontecendo. Esse comportamento não havia sido percebido anteriormente porque os cenários cobertos focavam apenas na exibição padrão da tela. A falha foi detectada ao validar diferentes estados da aplicação e combinações de permissões e dados. Após confirmar o problema, documentei o bug com evidências claras, incluindo passos para reprodução e impacto no usuário. Compartilhei a análise com o time de desenvolvimento, que corrigiu o comportamento, inclusive em produção. Em seguida, automatizei o cenário para garantir que a regra fosse validada continuamente e evitar regressões futuras.",
            keyPoints: [
                "Explicar como percebeu a lacuna nos testes",
                "Mostrar pensamento crítico e questionador",
                "Descrever a metodologia usada para investigar",
                "Detalhar o bug encontrado e sua gravidade",
                "Apresentar o impacto positivo da descoberta",
                "Mencionar melhorias implementadas"
            ],
            category: "behavioral"
        }
    ],
    technical: [
        {
            question: "Explique a diferença entre testes funcionais e não-funcionais.",
            tip: "Dê exemplos práticos de cada tipo",
            modelAnswer: "Testes funcionais validam SE o sistema faz o que deveria - verificam requisitos de negócio, fluxos de usuário, regras de negócio. Exemplo: testar se o login aceita credenciais válidas e rejeita inválidas. Testes não-funcionais validam COMO o sistema faz - avaliam atributos de qualidade como performance (tempo de resposta), segurança (vulnerabilidades), usabilidade (facilidade de uso), escalabilidade (comportamento sob carga). Ambos são essenciais para qualidade completa.",
            keyPoints: [
                "Funcionais: O QUE o sistema faz (requisitos de negócio)",
                "Não-funcionais: COMO o sistema faz (atributos de qualidade)",
                "Cite exemplos concretos de cada tipo",
                "Mencione tipos específicos: performance, segurança, usabilidade",
                "Explique que ambos são necessários"
            ],
            category: "technical"
        },
        {
            question: "Como você decide o que automatizar e o que testar manualmente?",
            tip: "Mencione critérios objetivos de decisão",
            modelAnswer: "Eu decido o que automatizar considerando o contexto do produto e dos módulos. Funcionalidades que são executadas com frequência, aparecem em vários módulos ou fazem parte de fluxos críticos de negócio (como Financeiro, Contratos, Vendas e Engenharia) entram como prioridade para automação, principalmente para testes de regressão. Também automatizo cenários estáveis, regras de negócio bem definidas e validações que precisam ser executadas a cada release, garantindo consistência e rapidez na validação. Já testes pontuais, validações rápidas, cenários que não se repetem ou funcionalidades em constante mudança, prefiro manter como testes manuais ou exploratórios, onde o olhar humano agrega mais valor. Dessa forma, uso a automação de forma estratégica, focando em reduzir retrabalho e aumentar a confiabilidade do sistema.",
            keyPoints: [
                "Automação: testes repetitivos, regressão, smoke tests",
                "Manual: exploratório, usabilidade, cenários instáveis",
                "Critérios: frequência, estabilidade, ROI, criticidade",
                "Mencione que não é 'automatizar tudo'",
                "Considere custo de manutenção da automação"
            ],
            category: "technical"
        },
        {
            question: "O que você sabe sobre testes de API? Como você testaria uma API REST?",
            tip: "Tenho experiência prática com testes de API REST, tanto manuais quanto automatizados. Em uma API REST, valido principalmente status codes (200, 201, 400, 401, 403, 404, 500), estrutura e consistência do response, regras de negócio, headers, autenticação e autorização, além de cenários negativos com dados inválidos ou incompletos. No dia a dia, realizo testes de API automatizados com Playwright, validando payloads, contratos e integração entre API e frontend, inclusive em testes híbridos (API + UI) para garantir que os dados exibidos na interface estejam corretos. Também avalio tempo de resposta, paginação, filtros e impacto das chamadas de API nos diferentes módulos do sistema. Para testes manuais e exploratórios, utilizo Postman. Busco sempre garantir que a API esteja estável, previsível e alinhada às regras de negócio, pois ela é a base de um produto SaaS confiável.",
            keyPoints: [
                "Validações: status codes, response body, headers, schema",
                "Cenários: happy path, edge cases, erros, autenticação",
                "Ferramentas: Postman, RestAssured, Supertest",
                "Tipos: funcionais, performance, segurança, contrato",
                "Mencione documentação (Swagger/OpenAPI)"
            ],
            category: "technical"
        },
        {
            question: "Explique o conceito de Page Object Model e por que é importante.",
            tip: "Explique o problema que resolve e benefícios",
            modelAnswer: "Page Object Model é um design pattern onde cada página ou componente da aplicação é representado por uma classe. Essa classe encapsula os elementos da página (locators) e as ações possíveis (métodos). É importante porque: separa a lógica de teste da estrutura da UI (se um elemento mudar, atualizo em um só lugar), aumenta reusabilidade (mesmo page object usado em vários testes), melhora legibilidade (testes leem como ações de negócio, não como manipulação de elementos), e facilita manutenção.",
            keyPoints: [
                "Padrão que encapsula elementos e ações de uma página",
                "Benefício: separação entre teste e estrutura da UI",
                "Benefício: manutenção centralizada de locators",
                "Benefício: reusabilidade entre testes",
                "Benefício: testes mais legíveis"
            ],
            category: "technical"
        },
        {
            question: "Como você garantiria qualidade em um pipeline de CI/CD?",
            tip: "Descreva as etapas e tipos de teste em cada fase",
            modelAnswer: "Para garantir qualidade em um pipeline de CI/CD, trabalho com camadas de testes, priorizando feedback rápido e confiabilidade. No início do pipeline, após commits ou pull requests, executo testes automatizados de API e testes rápidos de frontend, garantindo que regras de negócio e integrações principais não foram quebradas. Em ambientes de validação ou staging, rodam testes de regressão automatizados e E2E, focando nos fluxos críticos dos módulos do sistema. Após o deploy, aplico smoke tests automatizados, validando se a aplicação está funcional e estável. Utilizo GitHub Actions para integração dos testes ao pipeline e acompanho falhas como indicadores de qualidade. A ideia é que o pipeline atue como um quality gate, impedindo que problemas cheguem à produção e aumentando a confiança nas entregas.",
            keyPoints: [
                "Testes unitários: rápidos, no commit",
                "Testes de integração: após unitários",
                "Testes E2E: antes do deploy",
                "Quality gates: cobertura mínima, zero falhas",
                "Smoke tests pós-deploy"
            ],
            category: "technical"
        },
        {
            question: "Qual sua experiência com testes de performance? Que métricas você considera importantes?",
            tip: "Hoje não atuo com testes de carga ou stress. No meu dia a dia, utilizo o Playwright para validar performance funcional, como tempo de resposta de APIs e carregamento de páginas, garantindo que fluxos críticos respondam dentro de limites aceitáveis. Para testes de performance em larga escala, reconheço que ferramentas específicas como JMeter ou k6 são mais adequadas.",
            keyPoints: [
                "Ferramentas: JMeter, k6, Gatling, Locust",
                "Métricas: latência (percentis), throughput, error rate",
                "Tipos: load, stress, spike, soak, endurance",
                "Importância de baselines e SLOs",
                "Monitoramento de recursos do servidor"
            ],
            category: "technical"
        },
        {
            question: "Como você aplicaria uma abordagem baseada em testes automatizados para melhorar a eficiência do processo de QA em um projeto que utiliza testes de regressão frequentes?",
            tip: "Foque em estratégia, priorização e ROI da automação",
            modelAnswer: "Em um projeto com regressões frequentes, começo entendendo quais fluxos realmente impactam o negócio e são executados repetidamente. Priorizo a automação com base em três critérios principais: criticidade do fluxo, frequência de execução e estabilidade da funcionalidade. No meu dia a dia, isso significa automatizar primeiro fluxos transversais e críticos — como autenticação, permissões, filtros globais, regras financeiras e integrações entre módulos — que se repetem em diferentes áreas do sistema e são altamente sensíveis a regressões. Utilizo o Playwright para construir uma suíte de testes automatizados que combina testes de API, testes híbridos (API + UI) e E2E, focando em validar regras de negócio e comportamento do sistema, não apenas a interface. Testes rápidos e pontuais, ou cenários muito voláteis, mantenho como testes manuais. Integro essa suíte ao pipeline de CI/CD, garantindo execução automática em pull requests e antes de novas entregas, com feedback rápido para o time. À medida que a cobertura cresce, reduzo o tempo gasto em regressões manuais e libero espaço para testes exploratórios e validações mais estratégicas. O principal ganho dessa abordagem é previsibilidade, redução de falhas em produção e aumento da confiança nas entregas, especialmente em um sistema grande e modular, onde mudanças em um ponto podem impactar várias áreas.",
            keyPoints: [
                "Mapear e priorizar o que automatizar primeiro",
                "Seguir a pirâmide de testes (unitários > integração > E2E)",
                "Integrar com CI/CD para execução automática",
                "Usar paralelização para otimizar tempo",
                "Manter testes estáveis e não-flaky",
                "Métricas de ROI: tempo economizado, bugs prevenidos"
            ],
            category: "technical"
        },
        {
            question: "Como você garantiria a qualidade dos testes antes de liberar uma versão de software, considerando a necessidade de validar funcionalidades novas e existentes?",
            tip: "Mostre visão holística de estratégia de release",
            modelAnswer: "Adotaria uma estratégia em camadas: 1) Para features novas: testes funcionais completos baseados em critérios de aceite, testes exploratórios focados em edge cases, validação de integração com funcionalidades existentes. 2) Para regressão: suíte automatizada de smoke tests (fluxos críticos), testes de integração automatizados, e regressão visual se aplicável. 3) Checklist de release: validação em ambiente staging idêntico a produção, testes de performance se houver mudanças de impacto, verificação de rollback plan. 4) Quality gates: cobertura mínima de código, zero bugs críticos abertos, aprovação de testes automatizados. 5) Monitoramento pós-deploy: alertas configurados, métricas de erro, plano de rollback pronto. Documentaria riscos conhecidos e decisões de go/no-go.",
            keyPoints: [
                "Estratégia diferenciada para features novas vs existentes",
                "Suíte de regressão automatizada e confiável",
                "Ambiente de staging espelhando produção",
                "Quality gates objetivos antes do release",
                "Checklist de validação pré-deploy",
                "Monitoramento e plano de rollback pós-deploy"
            ],
            category: "technical"
        },
        {
            question: "O que é BDD (Behavior Driven Development) e como você aplicaria em um projeto de testes?",
            tip: "Explique o conceito e dê exemplos práticos com Gherkin",
            modelAnswer: "BDD é uma abordagem que une negócio, desenvolvimento e QA através de especificações em linguagem natural. Usa o formato Gherkin (Given-When-Then) para descrever comportamentos esperados. Exemplo: 'Given que o usuário está logado, When ele adiciona um produto ao carrinho, Then o contador do carrinho deve mostrar 1 item'. Aplicaria assim: 1) Participar das sessões de refinamento para escrever cenários junto com PO e devs. 2) Usar ferramentas como Cucumber, SpecFlow ou Behave para automatizar os cenários. 3) Os cenários servem como documentação viva e critérios de aceite. Benefícios: comunicação clara entre áreas, testes alinhados com valor de negócio, documentação sempre atualizada.",
            keyPoints: [
                "BDD une negócio, dev e QA através de linguagem comum",
                "Formato Gherkin: Given-When-Then",
                "Ferramentas: Cucumber, SpecFlow, Behave",
                "Cenários escritos colaborativamente no refinamento",
                "Serve como documentação viva",
                "Foco em comportamento e valor de negócio"
            ],
            category: "technical"
        },
        {
            question: "Quais as principais diferenças entre testar aplicações web e mobile? Quais desafios específicos do mobile?",
            tip: "Aborde aspectos técnicos e de experiência do usuário",
            modelAnswer: "As principais diferenças são: 1) Fragmentação - mobile tem milhares de dispositivos, tamanhos de tela, versões de OS (Android 10-14, iOS 15-17). 2) Conectividade - testar em 3G, 4G, 5G, WiFi, modo offline, transições de rede. 3) Recursos limitados - bateria, memória, CPU afetam performance. 4) Interações específicas - gestos (swipe, pinch, long press), sensores (GPS, câmera, acelerômetro). 5) Distribuição - processo de aprovação nas stores, atualizações não são instantâneas. 6) Instalação - fluxo de install/uninstall, permissões, espaço em disco. Uso emuladores para cobertura ampla e dispositivos reais para validação final. Ferramentas: Appium para automação cross-platform, XCUITest para iOS, Espresso para Android.",
            keyPoints: [
                "Fragmentação: múltiplos dispositivos, OS, tamanhos de tela",
                "Testar diferentes condições de rede e modo offline",
                "Considerar bateria, memória e performance",
                "Gestos e interações específicas do touch",
                "Processo de distribuição via app stores",
                "Ferramentas: Appium, Espresso, XCUITest"
            ],
            category: "technical"
        },
        {
            question: "O que você sabe sobre testes de acessibilidade? Como garantir que uma aplicação seja acessível?",
            tip: "Mencione guidelines (WCAG), ferramentas e tipos de deficiência",
            modelAnswer: "Testes de acessibilidade garantem que pessoas com deficiências possam usar a aplicação. Sigo as diretrizes WCAG 2.1 (Web Content Accessibility Guidelines) nos níveis A, AA, AAA. Testo para: 1) Visual - contraste de cores (mínimo 4.5:1), funcionamento com leitores de tela (NVDA, VoiceOver), navegação sem mouse. 2) Auditivo - legendas em vídeos, alternativas para conteúdo sonoro. 3) Motor - navegação completa por teclado, áreas de clique adequadas. 4) Cognitivo - linguagem clara, estrutura consistente. Ferramentas: axe DevTools, Lighthouse, WAVE para análise automatizada. Também faço testes manuais com leitor de tela e navegação só por teclado. A acessibilidade não é só compliance - é alcançar mais usuários e melhorar UX para todos.",
            keyPoints: [
                "WCAG 2.1 como guideline (níveis A, AA, AAA)",
                "Testar com leitores de tela (NVDA, VoiceOver, JAWS)",
                "Navegação completa por teclado",
                "Contraste de cores adequado (4.5:1)",
                "Ferramentas: axe DevTools, Lighthouse, WAVE",
                "Considerar diferentes tipos de deficiência"
            ],
            category: "technical"
        },
        {
            question: "Quais métricas de qualidade você acompanha e reporta? Como usa essas métricas para melhorar o processo?",
            tip: "Mostre métricas relevantes e como elas direcionam decisões",
            modelAnswer: "Acompanho métricas de qualidade focadas em nossos módulos do sistema SaaS, como financeiro, engenharia e operacional.As principais métricas que monitoro são: Bugs encontrados por módulo e fase de teste, para identificar áreas mais críticas e prevenir problemas em produção. Cobertura de testes, garantindo que funcionalidades essenciais sejam validadas manualmente ou automatizadas. Tempo de execução de testes e taxa de automação, para entender eficiência e priorizar automação onde faz mais diferença. Tendência de defeitos ao longo do tempo, para acompanhar evolução da qualidade e ajustar prioridades. Uso essas métricas para identificar módulos com maior risco, planejar melhorias no processo de testes, e apresentar resultados claros para a equipe e stakeholders, mostrando o impacto do QA na estabilidade do sistema.",
            keyPoints: [
                "Bugs por fase: quanto mais cedo encontrar, melhor",
                "Taxa de escape: bugs que chegam em produção",
                "Cobertura de testes e taxa de automação",
                "Taxa de flakiness dos testes automatizados",
                "Lead time de bugs: tempo até correção",
                "Usar métricas para decisões e mostrar valor do QA"
            ],
            category: "technical"
        }
    ],
    situational: [
        {
            question: "O time quer lançar uma feature amanhã, mas você encontrou um bug. O que você faz?",
            tip: "Mostre capacidade de avaliar risco e comunicar decisões",
            modelAnswer: "Primeiro, avalio o impacto do bug: ele afeta uma funcionalidade crítica ou a maioria dos usuários? Existe alguma forma de contornar temporariamente? Documento tudo com prints, logs e passos para reproduzir, e comunico rapidamente ao PO e tech lead, explicando os riscos. Aponto opções: adiar o lançamento, seguir com o bug conhecido se for baixo impacto ou tentar um hotfix rápido se for viável. A decisão final é do time de negócio, mas meu papel é garantir que eles tenham informação completa para decidir.",
            keyPoints: [
                "Avaliar severidade e impacto do bug",
                "Documentar com evidências claras",
                "Comunicar imediatamente aos stakeholders",
                "Apresentar opções com análise de risco",
                "Deixar a decisão para o negócio, mas informar"
            ],
            category: "situational"
        },
        {
            question: "Como você testaria uma funcionalidade sem documentação ou especificação?",
            tip: "Mostre proatividade e técnicas de descoberta",
            modelAnswer: "Quando encontro uma funcionalidade sem documentação ou especificação, primeiro busco entender o contexto: converso com o PO, desenvolvedor que implementou ou outros stakeholders para compreender o objetivo e a intenção do recurso. Em seguida, realizo testes exploratórios, pensando em como o usuário final interagiria, quais são os casos de borda mais prováveis e como funcionalidades semelhantes funcionam. Durante o processo, documento tudo que descubro, criando uma base de especificação que o time pode validar, e reporto a falta de documentação como um ponto de melhoria do processo. Essa abordagem me permite testar com segurança, descobrir possíveis problemas antes que cheguem a produção e contribuir para que a equipe tenha informações mais claras para decisões futuras.",
            keyPoints: [
                "Buscar informações com PO, devs, stakeholders",
                "Usar testes exploratórios e heurísticas",
                "Analisar sistemas similares como referência",
                "Documentar descobertas e validar com o time",
                "Reportar a falta de especificação como risco"
            ],
            category: "situational"
        },
        {
            question: "Você percebe que a cobertura de testes do projeto é muito baixa. Como abordaria isso?",
            tip: "Mostre estratégia gradual e pragmática",
            modelAnswer: "Quando percebi que a cobertura de testes do projeto estava baixa, comecei recomendando aumentar a cobertura em cada módulo, priorizando os mais críticos. Para organizar o trabalho, pedi um tempo dedicado para implementar os testes, e criei um documento com planejamento e prioridades, detalhando quais módulos e funcionalidades testar primeiro. Atualmente, estou executando os testes de forma gradual, validando e automatizando onde faz mais diferença, e acompanhando a evolução da cobertura. Essa abordagem permite melhorar a qualidade do sistema de forma estruturada, sem comprometer o andamento do projeto, e já mostra valor ao time com resultados concretos.",
            keyPoints: [
                "Analisar e priorizar por risco",
                "Começar pelas áreas críticas",
                "Política de 'não piorar' - código novo com testes",
                "Metas incrementais realistas",
                "Mostrar valor com métricas"
            ],
            category: "situational"
        },
        {
            question: "O desenvolvedor diz que não consegue reproduzir o bug que você reportou. Como procede?",
            tip: "Mostre colaboração e capacidade de investigação",
            modelAnswer: "Primeiro, reviso meu report: está claro? Tem todos os passos, ambiente, dados usados? Verifico se ainda consigo reproduzir. Se sim, faço screen recording ou pair com o dev para mostrar ao vivo. Comparo ambientes: versões de browser, dados de teste, configurações. Às vezes o bug é específico de um ambiente ou condição de dados. Se não conseguir mais reproduzir, documento como intermitente e adiciono logs/monitoramento para capturar quando ocorrer novamente. Nunca descarto o bug só porque é difícil de reproduzir.",
            keyPoints: [
                "Revisar e melhorar a documentação do bug",
                "Verificar se ainda reproduz no seu ambiente",
                "Comparar ambientes e condições",
                "Fazer pair debugging com o desenvolvedor",
                "Se intermitente, adicionar monitoramento"
            ],
            category: "situational"
        },
        {
            question: "Você é o único QA em um time com 5 desenvolvedores. Como gerencia a demanda?",
            tip: "Mostre estratégia de multiplicação e priorização",
            modelAnswer: "Como única QA do time, organizo minha atuação por prioridade, focando primeiro em funcionalidades críticas, módulos mais usados e áreas com histórico de bugs. Planejo meu tempo entre testes exploratórios, automação de regressão e validação de novas funcionalidades. Sempre comunico ao time e ao PO sobre limites de demanda, discutindo riscos e priorizando o que precisa ser testado para garantir qualidade sem atrasar entregas.",
            keyPoints: [
                "Capacitar devs para qualidade (shift left)",
                "Automação para liberar tempo de regressão",
                "Priorização por risco",
                "Foco em testes exploratórios de alto valor",
                "Papel de quality coach, não gargalo"
            ],
            category: "situational"
        },
        {
            question: "O cliente reportou um bug em produção que passou pelos seus testes. Como reage?",
            tip: "Mostre responsabilidade e foco em melhoria",
            modelAnswer: "Quando um bug escapa para produção, assumo responsabilidade sem me colocar na defensiva, entendendo que isso acontece. Primeiro, reproduzo, documento e apoio a correção rapidamente. Depois, faço uma análise de causa raiz: faltou cenário no teste, dados diferentes ou condição de ambiente específica? Com base nisso, atualizo os testes e a estratégia para prevenir que aconteça novamente, e compartilho o aprendizado com o time de forma construtiva, transformando o erro em melhoria do processo.",
            keyPoints: [
                "Assumir responsabilidade, não ser defensivo",
                "Priorizar resolução do problema",
                "Fazer análise de causa raiz",
                "Adicionar cenário à suíte de testes",
                "Compartilhar aprendizado com o time"
            ],
            category: "situational"
        },
        {
            question: "Qual foi a situação mais desafiadora que você enfrentou ao testar um software e como você superou os obstáculos para garantir a qualidade do produto?",
            tip: "Use STAR: Situação complexa, sua Tarefa, Ações específicas, Resultado positivo",
            modelAnswer: "Um dos maiores desafios foi testar um sistema de pagamentos com integração a múltiplas gateways, onde o ambiente de homologação era instável e os dados de teste limitados. A complexidade envolvia cenários de timeout, rollback de transações e concorrência. Superei criando mocks para simular comportamentos das gateways, desenvolvi um gerador de massa de dados, implementei testes de contrato para validar integrações, e criei cenários de chaos testing para simular falhas. Também estabeleci parceria próxima com o time de infra para melhorar o ambiente. Resultado: reduzimos bugs em produção em 70% e o sistema passou a processar 50k transações/dia com 99.9% de disponibilidade.",
            keyPoints: [
                "Descrever a complexidade técnica do desafio",
                "Mencionar obstáculos específicos enfrentados",
                "Detalhar estratégias e soluções criativas",
                "Mostrar colaboração com outros times",
                "Apresentar resultados mensuráveis"
            ],
            category: "situational"
        },
        {
            question: "Imagine que uma versão do software apresenta um bug intermitente que ocorre apenas em condições específicas. Como você estruturaria um plano de testes para identificar e reproduzir esse bug?",
            tip: "Mostre metodologia sistemática de investigação",
            modelAnswer: "Para um bug intermitente, eu estruturaria um plano sistemático de investigação: Coletar dados: reunir reports, logs, ambiente, dados de entrada e sequência de ações em que o bug ocorreu. Analisar padrões: procurar correlações, horários, cargas ou tipos de dados que possam disparar o problema. Gerar hipóteses: possíveis causas como dados corrompidos, timeout, cache ou condições de concorrência. Reprodução controlada: criar cenários isolados e testar cada hipótese de forma organizada. Instrumentação: adicionar logs detalhados e monitoramento para capturar mais informações. Testes repetidos: rodar cenários várias vezes para aumentar a chance de reproduzir o bug. Documentação: registrar todas as tentativas, sucessos ou falhas, para análise do time e aprendizado futuro.",
            keyPoints: [
                "Coleta sistemática de dados e evidências",
                "Análise de padrões e correlações",
                "Levantamento de hipóteses técnicas",
                "Testes isolados para cada hipótese",
                "Instrumentação com logs e monitoramento",
                "Documentação de todas as tentativas"
            ],
            category: "situational"
        },
        {
            question: "Como você implementaria uma abordagem 'Shift Left' para envolver QA mais cedo no ciclo de desenvolvimento?",
            tip: "Mostre ações práticas em cada fase do ciclo",
            modelAnswer: "Shift Left significa antecipar atividades de qualidade para encontrar problemas mais cedo (quando são mais baratos de corrigir). Implementaria assim: 1) Requisitos - participar de refinamentos para identificar ambiguidades, sugerir critérios de aceite testáveis, fazer 'testability review'. 2) Design - revisar arquitetura pensando em testabilidade, sugerir pontos de observabilidade, questionar edge cases. 3) Desenvolvimento - pair com devs em features complexas, escrever testes de aceite antes do código (BDD), revisar PRs focando em riscos. 4) Testes unitários - incentivar e ajudar devs a escrever bons testes unitários, definir padrões de cobertura. 5) CI/CD - garantir que testes rodem em cada commit. Resultado: bugs encontrados em requisitos custam 10x menos que em produção.",
            keyPoints: [
                "Participar desde o refinamento de requisitos",
                "Revisar design pensando em testabilidade",
                "Escrever critérios de aceite antes do código",
                "Incentivar testes unitários pelos devs",
                "Integrar testes no CI/CD desde o início",
                "Bugs encontrados cedo custam menos para corrigir"
            ],
            category: "situational"
        },
        {
            question: "Como você gerencia ambientes de teste para garantir que sejam confiáveis e representem produção adequadamente?",
            tip: "Aborde configuração, dados, estabilidade e governança",
            modelAnswer: "Para garantir que os ambientes de teste sejam confiáveis e representem produção, eu foco em alguns pontos práticos: Configuração consistente: procuro que o ambiente seja o mais próximo possível do ambiente de produção em termos de funcionalidades e dados essenciais. Dados de teste: uso dados realistas ou sanitizados para validar cenários, garantindo que os testes reflitam situações reais. Estabilidade e isolamento: evito alterações simultâneas que possam interferir nos testes e documento o estado do ambiente quando necessário. Com isso, consigo realizar testes confiáveis, reproduzindo cenários de produção sem depender de ambientes instáveis.",
            keyPoints: [
                "Paridade com produção usando IaC (Docker, Terraform)",
                "Estratégia de dados: masking, geradores, refresh",
                "Isolamento entre ambientes e propósitos",
                "Monitoramento e processo de restore rápido",
                "Documentação de dependências e mocks",
                "Governança: acesso, logs, ownership"
            ],
            category: "situational"
        },
        {
            question: "Seu projeto acumulou muito 'débito técnico' de testes - testes flaky, desatualizados, lentos. Como você abordaria esse problema?",
            tip: "Mostre estratégia pragmática e incremental",
            modelAnswer: "Débito técnico de testes é tão prejudicial quanto débito de código. Abordaria assim: 1) Diagnóstico - identificar e categorizar: testes flaky (falham aleatoriamente), obsoletos (testam código removido), lentos (gargalos de CI), frágeis (quebram com qualquer mudança). 2) Priorização - focar primeiro nos flaky (destroem confiança) e nos que bloqueiam CI. 3) Quick wins - quarentena para flaky graves, deletar testes obsoletos (código morto), paralelizar execução. 4) Refatoração gradual - dedicar 20% de cada sprint para melhorar testes, aplicar padrões (Page Object, builders), reduzir duplicação. 5) Prevenção - code review de testes, métricas de qualidade (flakiness rate), não aceitar novos testes ruins. 6) Cultura - tratar testes como código de primeira classe, não como 'mal necessário'.",
            keyPoints: [
                "Diagnosticar: flaky, obsoletos, lentos, frágeis",
                "Priorizar por impacto (flaky e bloqueadores de CI primeiro)",
                "Quick wins: quarentena, deletar obsoletos, paralelizar",
                "Refatoração gradual: % de cada sprint",
                "Prevenção: code review, métricas, padrões",
                "Cultura: testes são código de primeira classe"
            ],
            category: "situational"
        }
    ],
    culture: [
        {
            question: "Como você se mantém atualizado na área de QA?",
            tip: "Mencione fontes específicas e práticas de aprendizado",
            modelAnswer: "Para me manter atualizada em QA, sigo comunidades e profissionais na área, como blogs, LinkedIn e grupos de QA. Também pratico em projetos pessoais, testando ferramentas novas e técnicas que aprendo. Sempre busco aprender no dia a dia no trabalho, observando como melhorar testes e processos, e tento dedicar algum tempo semanal para estudo estruturado, cursos ou leituras..",
            keyPoints: [
                "Fontes específicas: blogs, cursos, podcasts",
                "Comunidades e networking",
                "Prática em projetos pessoais",
                "Tempo dedicado a aprendizado",
                "Livros e conteúdo clássico da área"
            ],
            category: "culture"
        },
        {
            question: "Qual é sua visão sobre a relação entre QA e desenvolvimento?",
            tip: "Mostre visão colaborativa e moderna",
            modelAnswer: "Vejo QA e Dev como parceiros, não como adversários ou 'porteiros'. A qualidade é responsabilidade de todo o time, não só do QA. Meu papel é ser um facilitador de qualidade: ajudo devs a escreverem código mais testável, compartilho conhecimento de edge cases, trago a perspectiva do usuário. A melhor dinâmica é quando QA está envolvido desde o início (refinamento, design review) e quando devs também se preocupam com testes. O objetivo comum é entregar valor ao usuário com qualidade.",
            keyPoints: [
                "Parceria, não adversários",
                "Qualidade é responsabilidade do time todo",
                "QA como facilitador e coach",
                "Envolvimento desde o início do desenvolvimento",
                "Foco no objetivo comum: valor ao usuário"
            ],
            category: "culture"
        },
        {
            question: "Como você lida com feedback negativo sobre seu trabalho?",
            tip: "Mostre maturidade e mentalidade de crescimento",
            modelAnswer: "Vejo feedback como oportunidade de crescimento, mesmo quando é difícil de ouvir. Primeiro, ouço sem ficar na defensiva e busco entender o ponto de vista. Pergunto por exemplos específicos se não estiver claro. Reflito sobre o que é válido e o que posso melhorar. Agradeço pelo feedback. Se discordo de algo, expresso minha perspectiva de forma construtiva, mas também considero que posso estar errado. Já recebi feedback sobre comunicação que me levou a melhorar muito meus reports de bug, por exemplo.",
            keyPoints: [
                "Ouvir sem defensividade",
                "Buscar exemplos específicos",
                "Refletir sobre o que é válido",
                "Agradecer e mostrar que valoriza",
                "Dar exemplo de feedback que te ajudou a melhorar"
            ],
            category: "culture"
        },
        {
            question: "Onde você se vê em 5 anos na área de QA?",
            tip: "Mostre ambição realista e interesse em crescimento",
            modelAnswer: "Nos próximos 5 anos, me vejo continuando a me especializar em automação de testes, aprimorando minhas habilidades em ferramentas, frameworks e boas práticas. Também tenho interesse em crescer para posições de liderança, como QA Lead ou Quality Engineer Senior, contribuindo para a cultura de qualidade do time e apoiando colegas mais juniores. Quero estar em uma posição onde posso influenciar decisões de qualidade, ajudando a equipe a entregar software mais confiável e eficiente, sem perder a prática técnica que amo.",
            keyPoints: [
                "Ter uma direção, mas ser flexível",
                "Mencionar áreas de aprofundamento técnico",
                "Interesse em liderança ou influência",
                "Interesse em mentoria e compartilhamento",
                "Mostrar alinhamento com a área de QA"
            ],
            category: "culture"
        },
        {
            question: "O que você considera um 'bom teste'?",
            tip: "Mostre critérios claros e maduros",
            modelAnswer: "Um bom teste é: confiável (não é flaky - passa ou falha consistentemente), independente (não depende de outros testes), rápido (feedback rápido), legível (outro profissional entende a intenção), mantível (fácil de atualizar quando a feature muda), e valioso (testa algo que importa, não apenas aumenta cobertura). Deve ter um propósito claro - testar UM comportamento específico. Bons testes seguem o padrão Arrange-Act-Assert e têm nomes descritivos. Um teste ruim que passa às vezes é pior que não ter teste.",
            keyPoints: [
                "Confiável: não flaky",
                "Independente: não depende de outros testes",
                "Rápido: feedback rápido",
                "Legível: intenção clara",
                "Valioso: testa o que importa"
            ],
            category: "culture"
        },
        {
            question: "Por que devemos te contratar?",
            tip: "Seja confiante, específico e conecte com a vaga",
            modelAnswer: "Vocês deveriam me contratar porque tenho experiência prática com testes em aplicações web B2B SaaS, como dashboards de gestão para construtoras e incorporadoras. Já trabalhei com múltiplos módulos críticos, como financeiro, engenharia, contas a pagar/receber e funil de leads, garantindo que funcionalidades essenciais funcionem corretamente. Além de executar testes manuais e automatizados, contribuo para melhorar processos, aumentar cobertura e documentar cenários complexos, ajudando o time a entregar software mais confiável. Sou proativa, colaborativa e me adapto bem a times ágeis, e estou motivada para enfrentar desafios do produto, agregando valor desde o início.",
            keyPoints: [
                "Seja específico sobre suas qualificações",
                "Mencione conquistas relevantes",
                "Destaque soft skills importantes",
                "Mostre interesse genuíno na empresa/vaga",
                "Demonstre confiança sem arrogância"
            ],
            category: "culture"
        },
        {
            question: "Qual é o papel do QA em um time ágil (Scrum/Kanban)? Como você participa das cerimônias?",
            tip: "Mostre conhecimento de ágil e como QA agrega valor em cada momento",
            modelAnswer: "No meu time ágil, meu papel como QA é garantir que os módulos existentes funcionem corretamente, testando funcionalidades que já estão em produção ou que estão sendo adaptadas. Meu foco é validar os fluxos críticos, encontrar bugs e documentar os cenários de teste, ajudando o time a manter a qualidade do software. Embora ainda não participe de estimativas ou planejamento de histórias, me comunico com desenvolvedores sobre problemas encontrados e priorizo testes em áreas críticas, contribuindo para entregas mais confiáveis.",
            keyPoints: [
                "QA integrado ao time, não fase separada",
                "Participação ativa em todas as cerimônias",
                "Planning: estimativa, riscos, critérios de aceite",
                "Testar continuamente durante a sprint",
                "Trazer métricas e sugestões na retrospectiva",
                "Colaboração constante com devs e PO"
            ],
            category: "culture"
        },
        {
            question: "Como você escreve um bom relatório de bug? Quais informações são essenciais?",
            tip: "Demonstre clareza, completude e empatia com quem vai corrigir",
            modelAnswer: "Um bom bug report permite que qualquer pessoa reproduza e entenda o problema. Estrutura que uso: 1) Título claro e descritivo - '[Módulo] Ação específica causa resultado inesperado'. 2) Ambiente - browser, OS, versão da app, ambiente (staging/prod). 3) Pré-condições - estado necessário antes de reproduzir (usuário logado, dados específicos). 4) Passos para reproduzir - numerados, específicos, sem ambiguidade. 5) Resultado atual vs esperado - o que aconteceu vs o que deveria acontecer. 6) Evidências - screenshots, vídeos, logs de console, requests de rede. 7) Severidade/Prioridade - impacto no usuário e no negócio. 8) Informações adicionais - frequência (sempre/às vezes), workaround se existir. Penso: 'Se eu recebesse esse bug, conseguiria reproduzir e entender a urgência?'",
            keyPoints: [
                "Título claro e descritivo",
                "Ambiente completo: browser, OS, versão",
                "Passos numerados e específicos para reproduzir",
                "Resultado atual vs resultado esperado",
                "Evidências: screenshots, vídeos, logs",
                "Severidade e impacto no usuário/negócio"
            ],
            category: "culture"
        },
        {
            question: "Como você mantém a qualidade e comunicação efetiva trabalhando remotamente em times distribuídos?",
            tip: "Aborde comunicação, ferramentas, processos e desafios",
            modelAnswer: "Trabalho remoto exige intencionalidade na comunicação. Minhas práticas: 1) Comunicação assíncrona clara - documentar decisões, bug reports detalhados, atualizações de status escritas (não depender só de calls). 2) Ferramentas - Slack/Teams para comunicação rápida, Jira/Azure DevOps para tracking, Loom para gravar demonstrações de bugs, Miro para sessões colaborativas. 3) Cerimônias adaptadas - câmera ligada para conexão humana, sessões de pair testing via screen share, 'office hours' para dúvidas assíncronas. 4) Fusos horários - identificar janelas de overlap, documentar para quem não estava online, respeitar horários. 5) Construir relacionamentos - coffee chats virtuais, conhecer o time além do trabalho. 6) Ambiente de teste acessível - ambientes na nuvem, não dependentes de VPN complexa. O desafio é manter a confiança e alinhamento sem a comunicação informal do presencial.",
            keyPoints: [
                "Comunicação assíncrona clara e documentada",
                "Ferramentas certas: Slack, Jira, Loom, Miro",
                "Bug reports ainda mais detalhados (sem contexto presencial)",
                "Respeitar fusos horários e documentar decisões",
                "Construir relacionamentos intencionalmente",
                "Ambientes de teste acessíveis remotamente"
            ],
            category: "culture"
        }
    ]
};

// Mapeamento de categorias de entrevista
const interviewCategoryNames = {
    behavioral: "Comportamental",
    technical: "Técnico",
    situational: "Situacional",
    culture: "Cultura & Soft Skills"
};

const interviewCategoryIcons = {
    behavioral: "🎭",
    technical: "💻",
    situational: "🎯",
    culture: "🤝"
};

// ========== Interview Questions in English ==========
const interviewQuestionsEN = {
    behavioral: [
        {
            question: "Tell me about your professional experience in QA.",
            tip: "Use the structure: context → responsibilities → achievements → learnings",
            modelAnswer: "I've been working in QA for X years, starting as [initial role]. Currently, I'm a [current role] at [company], where I'm responsible for [main responsibilities]. Throughout my career, I've participated in projects like [examples], where I implemented [improvements/processes]. My main achievements include [measurable results like bug reduction, coverage improvement, etc.].",
            keyPoints: [
                "Mention your experience and career progression",
                "Highlight current and previous responsibilities",
                "Cite relevant projects and technologies used",
                "Present achievements with numbers when possible",
                "Show continuous evolution and learning"
            ],
            category: "behavioral"
        },
        {
            question: "Why did you choose to work in Quality Assurance?",
            tip: "Be authentic and show passion for the field",
            modelAnswer: "I chose QA because I have a natural attention to detail and passion for ensuring users have the best possible experience. I'm motivated knowing my work prevents problems before they reach users. Additionally, QA allows me to have a holistic view of the product, understand both the technical and business sides, and contribute directly to the final quality of what we deliver.",
            keyPoints: [
                "Demonstrate genuine passion for the field",
                "Mention personal characteristics that fit QA",
                "Talk about the impact of your work on users",
                "Show that you understand QA's strategic importance",
                "Avoid generic answers like 'fell into it by chance'"
            ],
            category: "behavioral"
        },
        {
            question: "Tell me about a critical bug you found and how you handled the situation.",
            tip: "Use the STAR method: Situation, Task, Action, Result",
            modelAnswer: "In an e-commerce project, during regression testing, I discovered that the shipping calculation was returning negative values under certain conditions. I immediately documented the bug with evidence, reproduced the scenario, and communicated with the team. I worked with the developer to understand the root cause (a division by zero in specific cases). The bug was fixed before deployment, avoiding estimated financial losses of $10k/month.",
            keyPoints: [
                "Describe the context and severity of the bug",
                "Explain how you discovered the problem",
                "Detail the actions you took (documentation, communication)",
                "Mention collaboration with the team",
                "Quantify the impact when possible"
            ],
            category: "behavioral"
        },
        {
            question: "How do you handle tight deadlines and pressure?",
            tip: "Give concrete examples of how you managed pressure situations",
            modelAnswer: "I see tight deadlines as an opportunity to demonstrate prioritization skills. First, I assess risks and prioritize tests for the most critical functionalities. I clearly communicate to the team what will be covered and what will remain as accepted risk. In a recent situation, with the deadline cut in half, I created a risk matrix, automated critical regression tests, and kept the team informed. We delivered on time with acceptable quality and clear documentation of risks.",
            keyPoints: [
                "Show risk-based prioritization ability",
                "Demonstrate clear communication with stakeholders",
                "Cite specific strategies (risk matrix, smoke tests)",
                "Give a real example of a situation you faced",
                "Avoid saying you 'work well under pressure' without examples"
            ],
            category: "behavioral"
        },
        {
            question: "Describe a conflict situation with a developer and how you resolved it.",
            tip: "Focus on collaborative resolution, not who was right",
            modelAnswer: "I had a situation where a developer disagreed that a behavior was a bug, claiming it was a 'feature'. Instead of escalating the conflict, I suggested we analyze the specification and expected user behavior together. We discovered the specification was ambiguous. We involved the PO to clarify, and together we defined the correct behavior. This improved our communication and we created a habit of reviewing specifications together before development.",
            keyPoints: [
                "Show maturity and professionalism",
                "Demonstrate seeking collaborative solutions",
                "Avoid blaming or criticizing the other side",
                "Mention what you learned from the situation",
                "Highlight resulting process improvements"
            ],
            category: "behavioral"
        },
        {
            question: "What was the biggest challenge you faced in your QA career?",
            tip: "Choose a relevant challenge and show how you overcame it",
            modelAnswer: "My biggest challenge was implementing test automation at a company that had never had it. I faced cultural resistance, lack of infrastructure, and legacy code that was difficult to test. I started small, automating the most critical smoke tests to show quick value. I gave presentations showing automation ROI. In 6 months, we had 60% automated coverage and the dev team started writing their own tests.",
            keyPoints: [
                "Choose a significant and relevant challenge",
                "Explain the specific obstacles",
                "Describe your strategy to overcome them",
                "Show concrete results",
                "Mention learnings"
            ],
            category: "behavioral"
        },
        {
            question: "Tell me about a time when you identified a flaw in software testing that others had overlooked. How did you proceed to detect this flaw and what was the result of your intervention?",
            tip: "Highlight your critical eye and investigation methodology",
            modelAnswer: "In an e-commerce project, I noticed that checkout tests always used the same user and default cart. I asked: 'What if the user has an expired coupon? What if the product goes out of stock during checkout?' I created scenarios with varied data and discovered a critical bug: when a product went out of stock during payment, the transaction was charged but the order wasn't created. The bug had existed for months because tests didn't cover this specific timing. My intervention avoided approximately $6k in monthly refunds and we implemented a stock reservation mechanism.",
            keyPoints: [
                "Explain how you noticed the gap in tests",
                "Show critical and questioning thinking",
                "Describe the methodology used to investigate",
                "Detail the bug found and its severity",
                "Present the positive impact of the discovery",
                "Mention improvements implemented"
            ],
            category: "behavioral"
        }
    ],
    technical: [
        {
            question: "Explain the difference between functional and non-functional testing.",
            tip: "Give practical examples of each type",
            modelAnswer: "Functional tests validate IF the system does what it should - they verify business requirements, user flows, business rules. Example: testing if login accepts valid credentials and rejects invalid ones. Non-functional tests validate HOW the system does it - they evaluate quality attributes like performance (response time), security (vulnerabilities), usability (ease of use), scalability (behavior under load). Both are essential for complete quality.",
            keyPoints: [
                "Functional: WHAT the system does (business requirements)",
                "Non-functional: HOW the system does it (quality attributes)",
                "Cite concrete examples of each type",
                "Mention specific types: performance, security, usability",
                "Explain that both are necessary"
            ],
            category: "technical"
        },
        {
            question: "How do you decide what to automate and what to test manually?",
            tip: "Mention objective decision criteria",
            modelAnswer: "I evaluate several criteria: execution frequency (frequently run tests are automation candidates), functionality stability (stable features are better for automation), setup complexity (scenarios with lots of manual setup benefit from automation), regression value (critical functionalities need automated regression). I keep manual: exploratory tests, usability, frequently changing scenarios, and cases requiring human judgment.",
            keyPoints: [
                "Automation: repetitive tests, regression, smoke tests",
                "Manual: exploratory, usability, unstable scenarios",
                "Criteria: frequency, stability, ROI, criticality",
                "Mention that it's not 'automate everything'",
                "Consider automation maintenance cost"
            ],
            category: "technical"
        },
        {
            question: "What do you know about API testing? How would you test a REST API?",
            tip: "Mention tools, test types, and specific validations",
            modelAnswer: "To test REST APIs, I verify: correct status codes (200, 201, 400, 401, 404, 500), response structure (schema validation), returned data, headers, response time, and behavior with invalid data. I use tools like Postman for manual and exploratory tests, and frameworks like RestAssured, Supertest, or Python's requests for automation. I also test authentication scenarios, rate limiting, pagination, and contract validation.",
            keyPoints: [
                "Validations: status codes, response body, headers, schema",
                "Scenarios: happy path, edge cases, errors, authentication",
                "Tools: Postman, RestAssured, Supertest",
                "Types: functional, performance, security, contract",
                "Mention documentation (Swagger/OpenAPI)"
            ],
            category: "technical"
        },
        {
            question: "Explain the Page Object Model concept and why it's important.",
            tip: "Explain the problem it solves and its benefits",
            modelAnswer: "Page Object Model is a design pattern where each page or component of the application is represented by a class. This class encapsulates page elements (locators) and possible actions (methods). It's important because: it separates test logic from UI structure (if an element changes, I update in one place), increases reusability (same page object used in multiple tests), improves readability (tests read like business actions, not element manipulation), and facilitates maintenance.",
            keyPoints: [
                "Pattern that encapsulates elements and actions of a page",
                "Benefit: separation between test and UI structure",
                "Benefit: centralized locator maintenance",
                "Benefit: reusability between tests",
                "Benefit: more readable tests"
            ],
            category: "technical"
        },
        {
            question: "How would you ensure quality in a CI/CD pipeline?",
            tip: "Describe the stages and test types at each phase",
            modelAnswer: "I would structure it in layers: on commit, unit tests and linters run (feedback in minutes). Next, integration and API tests (validate contracts between services). Before deploying to staging, automated E2E tests for critical flows. In staging, performance and security tests. I would implement quality gates: the pipeline fails if coverage drops, if tests fail, or if critical vulnerabilities are detected. I would also include smoke tests post-deploy in production.",
            keyPoints: [
                "Unit tests: fast, on commit",
                "Integration tests: after unit tests",
                "E2E tests: before deploy",
                "Quality gates: minimum coverage, zero failures",
                "Smoke tests post-deploy"
            ],
            category: "technical"
        },
        {
            question: "What's your experience with performance testing? What metrics do you consider important?",
            tip: "Mention tools, test types, and specific metrics",
            modelAnswer: "I have experience with JMeter and k6 for load testing. The main metrics I monitor are: response time (p50, p90, p99 - not just average), throughput (requests per second), error rate under load, and resource usage (CPU, memory). Test types: load test (expected load), stress test (beyond limit), spike test (sudden peaks), soak test (prolonged load). I always define baselines and SLOs before testing to have objective success criteria.",
            keyPoints: [
                "Tools: JMeter, k6, Gatling, Locust",
                "Metrics: latency (percentiles), throughput, error rate",
                "Types: load, stress, spike, soak, endurance",
                "Importance of baselines and SLOs",
                "Server resource monitoring"
            ],
            category: "technical"
        },
        {
            question: "How would you apply an automated testing approach to improve QA process efficiency in a project with frequent regression testing?",
            tip: "Focus on strategy, prioritization, and automation ROI",
            modelAnswer: "I would start by mapping current regression tests and prioritizing automation by: execution frequency, flow criticality, time spent manually, and functionality stability. I would implement the test pyramid: solid base of unit tests (fast, cheap), integration/API layer (validate contracts), and top with E2E only for critical flows. I would integrate with CI/CD for automatic execution on each PR. I would use parallelization to reduce execution time. I would implement clear reports with coverage metrics and trends. Expected result: 70% reduction in regression time, feedback in minutes instead of hours, and freeing the team for higher-value exploratory testing.",
            keyPoints: [
                "Map and prioritize what to automate first",
                "Follow the test pyramid (unit > integration > E2E)",
                "Integrate with CI/CD for automatic execution",
                "Use parallelization to optimize time",
                "Keep tests stable and non-flaky",
                "ROI metrics: time saved, bugs prevented"
            ],
            category: "technical"
        },
        {
            question: "How would you ensure test quality before releasing a software version, considering the need to validate both new and existing functionalities?",
            tip: "Show holistic view of release strategy",
            modelAnswer: "I would adopt a layered strategy: 1) For new features: complete functional tests based on acceptance criteria, exploratory tests focused on edge cases, integration validation with existing functionalities. 2) For regression: automated smoke test suite (critical flows), automated integration tests, and visual regression if applicable. 3) Release checklist: validation in staging environment identical to production, performance tests if there are impactful changes, rollback plan verification. 4) Quality gates: minimum code coverage, zero critical bugs open, automated tests approval. 5) Post-deploy monitoring: alerts configured, error metrics, rollback plan ready. I would document known risks and go/no-go decisions.",
            keyPoints: [
                "Differentiated strategy for new vs existing features",
                "Automated and reliable regression suite",
                "Staging environment mirroring production",
                "Objective quality gates before release",
                "Pre-deploy validation checklist",
                "Post-deploy monitoring and rollback plan"
            ],
            category: "technical"
        },
        {
            question: "What is BDD (Behavior Driven Development) and how would you apply it in a test project?",
            tip: "Explain the concept and give practical examples with Gherkin",
            modelAnswer: "BDD is an approach that unites business, development, and QA through specifications in natural language. It uses the Gherkin format (Given-When-Then) to describe expected behaviors. Example: 'Given the user is logged in, When they add a product to the cart, Then the cart counter should show 1 item'. I would apply it like this: 1) Participate in refinement sessions to write scenarios with PO and devs. 2) Use tools like Cucumber, SpecFlow, or Behave to automate scenarios. 3) Scenarios serve as living documentation and acceptance criteria. Benefits: clear communication between areas, tests aligned with business value, always up-to-date documentation.",
            keyPoints: [
                "BDD unites business, dev, and QA through common language",
                "Gherkin format: Given-When-Then",
                "Tools: Cucumber, SpecFlow, Behave",
                "Scenarios written collaboratively in refinement",
                "Serves as living documentation",
                "Focus on behavior and business value"
            ],
            category: "technical"
        },
        {
            question: "What are the main security vulnerabilities you test? Are you familiar with OWASP Top 10?",
            tip: "Mention specific vulnerabilities and how to test them",
            modelAnswer: "Yes, OWASP Top 10 is my main reference. The vulnerabilities I test most are: 1) Injection (SQL, NoSQL, LDAP) - I test by inserting malicious payloads in input fields like ' OR '1'='1. 2) Broken Authentication - I verify password policies, session management, effective logout. 3) XSS (Cross-Site Scripting) - I insert scripts like <script>alert('xss')</script> in text fields. 4) IDOR (Insecure Direct Object Reference) - I change IDs in URLs to access other users' data. 5) Security Misconfiguration - I check security headers, exposed error messages. I use tools like OWASP ZAP, Burp Suite for automated and manual security testing.",
            keyPoints: [
                "OWASP Top 10 as reference",
                "SQL Injection: payloads in input fields",
                "XSS: malicious scripts in inputs",
                "IDOR: ID manipulation for improper access",
                "Tools: OWASP ZAP, Burp Suite",
                "Check security headers and configurations"
            ],
            category: "technical"
        },
        {
            question: "What are the main differences between testing web and mobile applications? What are mobile-specific challenges?",
            tip: "Address technical aspects and user experience",
            modelAnswer: "The main differences are: 1) Fragmentation - mobile has thousands of devices, screen sizes, OS versions (Android 10-14, iOS 15-17). 2) Connectivity - testing on 3G, 4G, 5G, WiFi, offline mode, network transitions. 3) Limited resources - battery, memory, CPU affect performance. 4) Specific interactions - gestures (swipe, pinch, long press), sensors (GPS, camera, accelerometer). 5) Distribution - approval process in stores, updates aren't instant. 6) Installation - install/uninstall flow, permissions, disk space. I use emulators for broad coverage and real devices for final validation. Tools: Appium for cross-platform automation, XCUITest for iOS, Espresso for Android.",
            keyPoints: [
                "Fragmentation: multiple devices, OS, screen sizes",
                "Test different network conditions and offline mode",
                "Consider battery, memory, and performance",
                "Touch-specific gestures and interactions",
                "Distribution process via app stores",
                "Tools: Appium, Espresso, XCUITest"
            ],
            category: "technical"
        },
        {
            question: "What do you know about accessibility testing? How do you ensure an application is accessible?",
            tip: "Mention guidelines (WCAG), tools, and types of disabilities",
            modelAnswer: "Accessibility testing ensures people with disabilities can use the application. I follow WCAG 2.1 guidelines (Web Content Accessibility Guidelines) at levels A, AA, AAA. I test for: 1) Visual - color contrast (minimum 4.5:1), screen reader functionality (NVDA, VoiceOver), navigation without mouse. 2) Auditory - captions in videos, alternatives for audio content. 3) Motor - complete keyboard navigation, adequate click areas. 4) Cognitive - clear language, consistent structure. Tools: axe DevTools, Lighthouse, WAVE for automated analysis. I also do manual testing with screen readers and keyboard-only navigation. Accessibility isn't just compliance - it's reaching more users and improving UX for everyone.",
            keyPoints: [
                "WCAG 2.1 as guideline (levels A, AA, AAA)",
                "Test with screen readers (NVDA, VoiceOver, JAWS)",
                "Complete keyboard navigation",
                "Adequate color contrast (4.5:1)",
                "Tools: axe DevTools, Lighthouse, WAVE",
                "Consider different types of disabilities"
            ],
            category: "technical"
        },
        {
            question: "What quality metrics do you track and report? How do you use these metrics to improve the process?",
            tip: "Show relevant metrics and how they drive decisions",
            modelAnswer: "I track metrics across different dimensions: 1) Test effectiveness - bugs found per phase (the earlier the better), escape rate (bugs in production), requirements coverage. 2) Efficiency - suite execution time, automation rate, average time to test a feature. 3) Test code quality - flakiness rate, maintainability, time to fix broken tests. 4) Process - bug lead time (time to fix), defect density per module, bug trend over time. I use these metrics to: identify problematic areas (modules with more bugs), justify automation investment (ROI), improve estimates, and show QA value to stakeholders. I present monthly dashboards with trends.",
            keyPoints: [
                "Bugs per phase: the earlier found, the better",
                "Escape rate: bugs reaching production",
                "Test coverage and automation rate",
                "Flakiness rate of automated tests",
                "Bug lead time: time to fix",
                "Use metrics for decisions and showing QA value"
            ],
            category: "technical"
        }
    ],
    situational: [
        {
            question: "The team wants to launch a feature tomorrow, but you found a bug. What do you do?",
            tip: "Show ability to assess risk and communicate decisions",
            modelAnswer: "First, I assess the bug's severity and impact: does it affect critical functionality? How many users would be impacted? Is there a workaround? I document the bug with clear evidence and immediately communicate to the PO and tech lead with my risk analysis. I present options: delay the launch, launch with the known bug (if low impact) with a planned fix, or do a hotfix before launch if possible within the timeline. The final decision is the business's, but my role is to ensure they decide with complete information.",
            keyPoints: [
                "Assess bug severity and impact",
                "Document with clear evidence",
                "Immediately communicate to stakeholders",
                "Present options with risk analysis",
                "Leave decision to business, but inform"
            ],
            category: "situational"
        },
        {
            question: "How would you test a functionality without documentation or specification?",
            tip: "Show proactivity and discovery techniques",
            modelAnswer: "First, I seek information: talk to the PO, dev who implemented it, or stakeholders to understand the intent. I analyze the code or PRs if possible. Then, I use exploratory tests based on heuristics: what would a user expect? What are the obvious edge cases? How do similar systems work? I document what I discover and validate with the team. While testing, I create the missing documentation - turning testing into specification. I also report the lack of documentation as a process risk.",
            keyPoints: [
                "Seek information from PO, devs, stakeholders",
                "Use exploratory tests and heuristics",
                "Analyze similar systems as reference",
                "Document discoveries and validate with team",
                "Report lack of specification as risk"
            ],
            category: "situational"
        },
        {
            question: "You notice the project's test coverage is very low. How would you address this?",
            tip: "Show gradual and pragmatic strategy",
            modelAnswer: "I wouldn't try to solve everything at once. First, I would analyze where the biggest risks are - critical functionalities without coverage. I would prioritize automation for highest risk areas and most frequent bug areas. I would implement a 'don't make it worse' policy: all new code must have tests. I would set realistic incremental goals (increase 5% per sprint). I would show value to the team with metrics: bugs found by tests, time saved in regression. Gradually, the testing culture improves.",
            keyPoints: [
                "Analyze and prioritize by risk",
                "Start with critical areas",
                "'Don't make it worse' policy - new code with tests",
                "Realistic incremental goals",
                "Show value with metrics"
            ],
            category: "situational"
        },
        {
            question: "The developer says they can't reproduce the bug you reported. How do you proceed?",
            tip: "Show collaboration and investigation capability",
            modelAnswer: "First, I review my report: is it clear? Does it have all steps, environment, data used? I verify if I can still reproduce it. If yes, I do screen recording or pair with the dev to show it live. I compare environments: browser versions, test data, configurations. Sometimes the bug is specific to an environment or data condition. If I can't reproduce anymore, I document it as intermittent and add logs/monitoring to capture when it occurs again. I never dismiss a bug just because it's hard to reproduce.",
            keyPoints: [
                "Review and improve bug documentation",
                "Verify if it still reproduces in your environment",
                "Compare environments and conditions",
                "Pair debug with developer",
                "If intermittent, add monitoring"
            ],
            category: "situational"
        },
        {
            question: "You're the only QA in a team with 5 developers. How do you manage the demand?",
            tip: "Show multiplication and prioritization strategy",
            modelAnswer: "I don't try to test everything alone - that doesn't scale. My strategy: I enable devs to write tests and do self-review, I define quality checklists for PRs, I implement automation for regression (freeing my time), I prioritize my involvement in higher risk and complexity areas, I do exploratory tests where I add more value. I also negotiate with the team: if too much work comes in, we discuss priorities or accept documented risks. My role becomes more of a 'quality coach' than 'tester of everything'.",
            keyPoints: [
                "Enable devs for quality (shift left)",
                "Automation to free regression time",
                "Prioritization by risk",
                "Focus on high-value exploratory tests",
                "Role of quality coach, not bottleneck"
            ],
            category: "situational"
        },
        {
            question: "A customer reported a bug in production that passed your tests. How do you react?",
            tip: "Show responsibility and focus on improvement",
            modelAnswer: "First, I take responsibility without being defensive - bugs escape, it happens. I prioritize helping resolve: I reproduce the bug, document, and support the fix. Then, I do root cause analysis: why didn't we catch it? Missing test scenario? Different data? Environment condition? Based on this, I improve: add the missing scenario to the test suite, update strategy if needed. I share the learning with the team as a retrospective, not as blame. Every escaped bug is an opportunity to improve the process.",
            keyPoints: [
                "Take responsibility, don't be defensive",
                "Prioritize problem resolution",
                "Do root cause analysis",
                "Add scenario to test suite",
                "Share learning with team"
            ],
            category: "situational"
        },
        {
            question: "What was the most challenging situation you faced testing software and how did you overcome obstacles to ensure product quality?",
            tip: "Use STAR: Complex Situation, your Task, specific Actions, positive Result",
            modelAnswer: "One of the biggest challenges was testing a payment system with integration to multiple gateways, where the staging environment was unstable and test data was limited. The complexity involved timeout scenarios, transaction rollback, and concurrency. I overcame it by creating mocks to simulate gateway behaviors, developed a test data generator, implemented contract tests to validate integrations, and created chaos testing scenarios to simulate failures. I also established a close partnership with the infra team to improve the environment. Result: we reduced production bugs by 70% and the system started processing 50k transactions/day with 99.9% availability.",
            keyPoints: [
                "Describe the technical complexity of the challenge",
                "Mention specific obstacles faced",
                "Detail creative strategies and solutions",
                "Show collaboration with other teams",
                "Present measurable results"
            ],
            category: "situational"
        },
        {
            question: "Imagine a software version has an intermittent bug that only occurs under specific conditions. How would you structure a test plan to identify and reproduce this bug?",
            tip: "Show systematic investigation methodology",
            modelAnswer: "I would structure a systematic approach: 1) Collect data - gather all reports, logs, occurrence times, environment, input data, usage patterns. 2) Pattern analysis - look for correlations (time, load, specific data, action sequence). 3) Hypotheses - list possible causes: race condition, memory leak, cache, corrupted data, timeout. 4) Controlled reproduction - create isolated environment and test each hypothesis systematically. 5) Instrumentation - add detailed logs, resource monitoring, tracing. 6) Stress tests - run scenarios in loops to increase reproduction probability. 7) Document everything - even failed attempts help understand the problem.",
            keyPoints: [
                "Systematic data and evidence collection",
                "Pattern and correlation analysis",
                "Technical hypothesis gathering",
                "Isolated tests for each hypothesis",
                "Instrumentation with logs and monitoring",
                "Documentation of all attempts"
            ],
            category: "situational"
        },
        {
            question: "How would you implement a 'Shift Left' approach to involve QA earlier in the development cycle?",
            tip: "Show practical actions at each cycle phase",
            modelAnswer: "Shift Left means anticipating quality activities to find problems earlier (when they're cheaper to fix). I would implement it like this: 1) Requirements - participate in refinements to identify ambiguities, suggest testable acceptance criteria, do 'testability review'. 2) Design - review architecture thinking about testability, suggest observability points, question edge cases. 3) Development - pair with devs on complex features, write acceptance tests before code (BDD), review PRs focusing on risks. 4) Unit tests - encourage and help devs write good unit tests, define coverage standards. 5) CI/CD - ensure tests run on every commit. Result: bugs found in requirements cost 10x less than in production.",
            keyPoints: [
                "Participate from requirements refinement",
                "Review design thinking about testability",
                "Write acceptance criteria before code",
                "Encourage unit tests by devs",
                "Integrate tests in CI/CD from start",
                "Bugs found early cost less to fix"
            ],
            category: "situational"
        },
        {
            question: "How do you manage test environments to ensure they're reliable and adequately represent production?",
            tip: "Address configuration, data, stability, and governance",
            modelAnswer: "Environment management is critical for reliable tests. My approach: 1) Production parity - use Infrastructure as Code (Terraform, Docker) to ensure identical configurations, same service versions and dependencies. 2) Test data - data masking strategy for sanitized production data, test data generators for specific scenarios, periodic refresh. 3) Isolation - dedicated environments by purpose (dev, QA, staging, performance), avoid interference between teams. 4) Stability - environment health monitoring, fast reset/restore process, external dependency documentation and mocks when needed. 5) Governance - access control, change logs, clear ownership. Unstable environments generate flakiness and loss of test confidence.",
            keyPoints: [
                "Production parity using IaC (Docker, Terraform)",
                "Data strategy: masking, generators, refresh",
                "Isolation between environments and purposes",
                "Monitoring and fast restore process",
                "Dependency documentation and mocks",
                "Governance: access, logs, ownership"
            ],
            category: "situational"
        },
        {
            question: "Your project has accumulated a lot of test 'technical debt' - flaky tests, outdated, slow. How would you address this problem?",
            tip: "Show pragmatic and incremental strategy",
            modelAnswer: "Test technical debt is as harmful as code debt. I would address it like this: 1) Diagnosis - identify and categorize: flaky tests (fail randomly), obsolete (test removed code), slow (CI bottlenecks), fragile (break with any change). 2) Prioritization - focus first on flaky (destroy confidence) and CI blockers. 3) Quick wins - quarantine severe flaky tests, delete obsolete tests (dead code), parallelize execution. 4) Gradual refactoring - dedicate 20% of each sprint to improving tests, apply patterns (Page Object, builders), reduce duplication. 5) Prevention - test code review, quality metrics (flakiness rate), don't accept new bad tests. 6) Culture - treat tests as first-class code, not a 'necessary evil'.",
            keyPoints: [
                "Diagnose: flaky, obsolete, slow, fragile",
                "Prioritize by impact (flaky and CI blockers first)",
                "Quick wins: quarantine, delete obsolete, parallelize",
                "Gradual refactoring: % of each sprint",
                "Prevention: code review, metrics, standards",
                "Culture: tests are first-class code"
            ],
            category: "situational"
        }
    ],
    culture: [
        {
            question: "How do you stay updated in the QA field?",
            tip: "Mention specific sources and learning practices",
            modelAnswer: "I follow several sources: blogs like Ministry of Testing, Test Automation University for free courses, podcasts like Test Guild. On LinkedIn I follow professionals like Angie Jones, Alan Richardson. I participate in local QA communities and meetups. I practice on personal projects - I have a repo where I experiment with new tools. I also read classic books like 'Lessons Learned in Software Testing'. I try to dedicate at least 2 hours per week to structured learning, besides daily learning at work.",
            keyPoints: [
                "Specific sources: blogs, courses, podcasts",
                "Communities and networking",
                "Practice on personal projects",
                "Time dedicated to learning",
                "Books and classic content in the field"
            ],
            category: "culture"
        },
        {
            question: "What's your vision about the relationship between QA and development?",
            tip: "Show collaborative and modern view",
            modelAnswer: "I see QA and Dev as partners, not adversaries or 'gatekeepers'. Quality is the whole team's responsibility, not just QA's. My role is to be a quality facilitator: I help devs write more testable code, share edge case knowledge, bring the user's perspective. The best dynamic is when QA is involved from the beginning (refinement, design review) and when devs also care about tests. The common goal is delivering value to users with quality.",
            keyPoints: [
                "Partnership, not adversaries",
                "Quality is the whole team's responsibility",
                "QA as facilitator and coach",
                "Involvement from the development start",
                "Focus on common goal: value to user"
            ],
            category: "culture"
        },
        {
            question: "How do you handle negative feedback about your work?",
            tip: "Show maturity and growth mindset",
            modelAnswer: "I see feedback as a growth opportunity, even when it's hard to hear. First, I listen without being defensive and try to understand the perspective. I ask for specific examples if not clear. I reflect on what's valid and what I can improve. I thank them for the feedback. If I disagree with something, I express my perspective constructively, but also consider I might be wrong. I once received feedback about communication that led me to greatly improve my bug reports, for example.",
            keyPoints: [
                "Listen without defensiveness",
                "Ask for specific examples",
                "Reflect on what's valid",
                "Thank and show you value it",
                "Give example of feedback that helped you improve"
            ],
            category: "culture"
        },
        {
            question: "Where do you see yourself in 5 years in the QA field?",
            tip: "Show realistic ambition and interest in growth",
            modelAnswer: "In the next 5 years, I want to deepen in [automation/performance/leadership - choose your focus]. I would like to lead quality initiatives, perhaps as QA Lead or Senior Quality Engineer. I'm also interested in sharing knowledge - whether mentoring junior people or speaking at events in the field. I want to be in a position where I influence the organization's quality culture, not just execute tests. I remain open to where the path takes me, but always focused on software quality.",
            keyPoints: [
                "Have a direction, but be flexible",
                "Mention areas of technical deepening",
                "Interest in leadership or influence",
                "Interest in mentoring and sharing",
                "Show alignment with the QA field"
            ],
            category: "culture"
        },
        {
            question: "What do you consider a 'good test'?",
            tip: "Show clear and mature criteria",
            modelAnswer: "A good test is: reliable (not flaky - passes or fails consistently), independent (doesn't depend on other tests), fast (quick feedback), readable (another professional understands the intent), maintainable (easy to update when feature changes), and valuable (tests something that matters, not just increases coverage). It should have a clear purpose - test ONE specific behavior. Good tests follow the Arrange-Act-Assert pattern and have descriptive names. A bad test that sometimes passes is worse than having no test.",
            keyPoints: [
                "Reliable: not flaky",
                "Independent: doesn't depend on other tests",
                "Fast: quick feedback",
                "Readable: clear intent",
                "Valuable: tests what matters"
            ],
            category: "culture"
        },
        {
            question: "Why should we hire you?",
            tip: "Be confident, specific, and connect with the role",
            modelAnswer: "You should hire me because I combine solid technical experience with communication skills and business vision. I have [X years] of experience in [areas relevant to the role], and have [mention a relevant achievement]. Beyond technical skills, I bring a continuous improvement mindset - I don't just find bugs, I help prevent them by improving processes. I'm collaborative and adapt well to agile teams. I'm genuinely interested in [company/product] challenges and believe I can add value quickly.",
            keyPoints: [
                "Be specific about your qualifications",
                "Mention relevant achievements",
                "Highlight important soft skills",
                "Show genuine interest in the company/role",
                "Demonstrate confidence without arrogance"
            ],
            category: "culture"
        },
        {
            question: "What's the QA role in an agile team (Scrum/Kanban)? How do you participate in ceremonies?",
            tip: "Show agile knowledge and how QA adds value at each moment",
            modelAnswer: "In agile teams, QA is an integral part of the team, not a separate phase. My participation: 1) Planning - I help estimate considering test effort, identify risks, question incomplete acceptance criteria. 2) Refinement - I validate if stories are testable, suggest test scenarios, help break down large stories. 3) Daily - I communicate test status, blockers, and coordinate with devs. 4) During sprint - I test features as soon as they're ready (don't wait until the end), automate in parallel, do pair testing with devs. 5) Review - I demonstrate tested functionalities, show edge cases covered. 6) Retrospective - I bring quality metrics, suggest process improvements. In Kanban, I focus on limiting WIP and maintaining continuous validation flow.",
            keyPoints: [
                "QA integrated in team, not separate phase",
                "Active participation in all ceremonies",
                "Planning: estimation, risks, acceptance criteria",
                "Test continuously during sprint",
                "Bring metrics and suggestions in retrospective",
                "Constant collaboration with devs and PO"
            ],
            category: "culture"
        },
        {
            question: "How do you write a good bug report? What information is essential?",
            tip: "Demonstrate clarity, completeness, and empathy for who will fix it",
            modelAnswer: "A good bug report allows anyone to reproduce and understand the problem. Structure I use: 1) Clear, descriptive title - '[Module] Specific action causes unexpected result'. 2) Environment - browser, OS, app version, environment (staging/prod). 3) Preconditions - necessary state before reproducing (logged in user, specific data). 4) Steps to reproduce - numbered, specific, unambiguous. 5) Actual vs expected result - what happened vs what should happen. 6) Evidence - screenshots, videos, console logs, network requests. 7) Severity/Priority - impact on user and business. 8) Additional info - frequency (always/sometimes), workaround if exists. I think: 'If I received this bug, could I reproduce and understand the urgency?'",
            keyPoints: [
                "Clear and descriptive title",
                "Complete environment: browser, OS, version",
                "Numbered, specific steps to reproduce",
                "Actual vs expected result",
                "Evidence: screenshots, videos, logs",
                "Severity and impact on user/business"
            ],
            category: "culture"
        },
        {
            question: "How do you maintain quality and effective communication working remotely in distributed teams?",
            tip: "Address communication, tools, processes, and challenges",
            modelAnswer: "Remote work requires intentionality in communication. My practices: 1) Clear async communication - document decisions, detailed bug reports, written status updates (not depending only on calls). 2) Tools - Slack/Teams for quick communication, Jira/Azure DevOps for tracking, Loom for recording bug demonstrations, Miro for collaborative sessions. 3) Adapted ceremonies - camera on for human connection, pair testing sessions via screen share, 'office hours' for async questions. 4) Time zones - identify overlap windows, document for those not online, respect schedules. 5) Build relationships - virtual coffee chats, know the team beyond work. 6) Accessible test environment - cloud environments, not dependent on complex VPN. The challenge is maintaining trust and alignment without in-person informal communication.",
            keyPoints: [
                "Clear and documented async communication",
                "Right tools: Slack, Jira, Loom, Miro",
                "Even more detailed bug reports (without in-person context)",
                "Respect time zones and document decisions",
                "Build relationships intentionally",
                "Remotely accessible test environments"
            ],
            category: "culture"
        }
    ]
};

// Category names in English
const interviewCategoryNamesEN = {
    behavioral: "Behavioral",
    technical: "Technical",
    situational: "Situational",
    culture: "Culture & Soft Skills"
};
