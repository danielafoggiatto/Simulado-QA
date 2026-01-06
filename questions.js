const questions = {
    fundamentos: [
        {
            question: "O que é a Pirâmide de Testes?",
            answers: [
                "Uma estrutura que sugere ter mais testes unitários, menos de integração e ainda menos E2E",
                "Uma ferramenta de automação de testes",
                "Um tipo de teste de performance",
                "Uma metodologia ágil"
            ],
            correct: 0,
            explanation: "A Pirâmide de Testes é um conceito que sugere uma proporção ideal: muitos testes unitários na base (rápidos e baratos), menos testes de integração no meio, e poucos testes E2E no topo (lentos e caros)."
        },
        {
            question: "Qual a diferença entre Verificação e Validação em QA?",
            answers: [
                "Não há diferença, são sinônimos",
                "Verificação checa se o produto foi construído corretamente; Validação checa se é o produto certo",
                "Verificação é feita pelo cliente; Validação pelo desenvolvedor",
                "Verificação é automática; Validação é manual"
            ],
            correct: 1,
            explanation: "Verificação responde 'Estamos construindo o produto corretamente?' (conformidade com especificações). Validação responde 'Estamos construindo o produto certo?' (atende às necessidades do usuário)."
        },
        {
            question: "O que é TDD (Test-Driven Development)?",
            answers: [
                "Escrever testes após o código estar pronto",
                "Escrever testes antes do código de produção",
                "Testar apenas em ambiente de desenvolvimento",
                "Desenvolver sem escrever testes"
            ],
            correct: 1,
            explanation: "TDD é uma prática onde os testes são escritos ANTES do código de produção. O ciclo é: Red (escrever teste que falha) → Green (escrever código mínimo para passar) → Refactor (melhorar o código)."
        },
        {
            question: "O que é BDD (Behavior-Driven Development)?",
            answers: [
                "Uma linguagem de programação para testes",
                "Uma extensão do TDD focada em comportamentos e linguagem natural (Given-When-Then)",
                "Um tipo de teste de performance",
                "Uma ferramenta de automação"
            ],
            correct: 1,
            explanation: "BDD é uma evolução do TDD que usa linguagem natural para descrever comportamentos esperados. Usa o formato Given (contexto) - When (ação) - Then (resultado esperado), facilitando a comunicação entre técnicos e não-técnicos."
        },
        {
            question: "Qual é o ciclo de vida de um bug?",
            answers: [
                "Encontrado → Corrigido → Fechado",
                "Novo → Atribuído → Aberto → Corrigido → Verificado → Fechado",
                "Aberto → Fechado",
                "Criado → Deletado"
            ],
            correct: 1,
            explanation: "O ciclo completo inclui: Novo (reportado) → Atribuído (designado a um dev) → Aberto (em análise) → Corrigido (fix aplicado) → Verificado (QA retesta) → Fechado. Pode incluir estados como Rejeitado, Reaberto ou Adiado."
        },
        {
            question: "O que é Teste de Regressão?",
            answers: [
                "Testar novas funcionalidades apenas",
                "Verificar se alterações no código não quebraram funcionalidades existentes",
                "Testar o sistema em condições de estresse",
                "Testar apenas a interface do usuário"
            ],
            correct: 1,
            explanation: "Teste de Regressão verifica se mudanças recentes (novas features, correções, refatorações) não introduziram bugs em funcionalidades que já funcionavam. É essencial em CI/CD."
        },
        {
            question: "O que é um Caso de Teste (Test Case)?",
            answers: [
                "Um bug encontrado durante os testes",
                "Um documento com condições, passos e resultados esperados para validar uma funcionalidade",
                "Uma ferramenta de automação",
                "Um relatório de execução de testes"
            ],
            correct: 1,
            explanation: "Um Caso de Teste é um documento que especifica: pré-condições, dados de entrada, passos a executar, e resultados esperados. Serve para validar se uma funcionalidade específica funciona corretamente."
        },
        {
            question: "O que é Teste de Fumaça (Smoke Test)?",
            answers: [
                "Um teste completo de todas as funcionalidades",
                "Um teste rápido e superficial para verificar se as funcionalidades críticas funcionam",
                "Um teste de segurança",
                "Um teste de usabilidade"
            ],
            correct: 1,
            explanation: "Smoke Test é um teste rápido e superficial que verifica se as funcionalidades mais críticas do sistema estão funcionando. É feito antes de testes mais detalhados para garantir que vale a pena continuar testando."
        },
        {
            question: "Qual a diferença entre Severidade e Prioridade de um bug?",
            answers: [
                "São a mesma coisa",
                "Severidade é o impacto técnico; Prioridade é a urgência de correção",
                "Severidade é definida pelo cliente; Prioridade pelo QA",
                "Severidade é para bugs críticos; Prioridade para bugs menores"
            ],
            correct: 1,
            explanation: "Severidade mede o impacto técnico do bug no sistema (ex: crash = alta severidade). Prioridade indica a urgência da correção baseada em fatores de negócio. Um bug pode ter alta severidade mas baixa prioridade se afetar uma área pouco usada."
        },
        {
            question: "O que é Teste Exploratório?",
            answers: [
                "Teste com scripts pré-definidos",
                "Teste simultâneo de aprendizado, design e execução sem scripts predeterminados",
                "Teste automatizado",
                "Teste de performance"
            ],
            correct: 1,
            explanation: "Teste Exploratório é uma abordagem onde o testador aprende sobre o sistema, projeta e executa testes simultaneamente. Não segue scripts predefinidos e depende da criatividade e experiência do testador para encontrar bugs."
        },
        {
            question: "O que significa o termo 'Shift Left' em testes?",
            answers: [
                "Mover os testes para o final do ciclo de desenvolvimento",
                "Antecipar as atividades de teste para o início do ciclo de desenvolvimento",
                "Testar apenas o lado esquerdo da interface",
                "Usar apenas ferramentas open source"
            ],
            correct: 1,
            explanation: "Shift Left significa mover as atividades de teste para mais cedo no ciclo de desenvolvimento. Quanto antes bugs são encontrados, mais barato é corrigi-los. Inclui práticas como TDD, revisão de requisitos e testes unitários."
        },
        {
            question: "O que é Cobertura de Código (Code Coverage)?",
            answers: [
                "A quantidade de bugs encontrados",
                "A porcentagem do código-fonte que é executada pelos testes",
                "O número de casos de teste escritos",
                "A documentação do código"
            ],
            correct: 1,
            explanation: "Code Coverage mede qual porcentagem do código é executada durante os testes. Tipos incluem: Line Coverage (linhas executadas), Branch Coverage (caminhos de decisão), Function Coverage (funções chamadas). 100% de cobertura não garante ausência de bugs."
        },
        {
            question: "O que é um Mock em testes?",
            answers: [
                "Um teste que falha propositalmente",
                "Um objeto simulado que imita o comportamento de objetos reais",
                "Um tipo de relatório de testes",
                "Uma ferramenta de automação"
            ],
            correct: 1,
            explanation: "Mock é um objeto simulado que imita o comportamento de dependências externas (APIs, banco de dados, etc). Permite testar unidades de código de forma isolada, controlando as respostas das dependências."
        },
        {
            question: "Qual a diferença entre Teste Caixa Preta e Caixa Branca?",
            answers: [
                "Caixa Preta testa a interface; Caixa Branca testa o backend",
                "Caixa Preta testa sem conhecer o código interno; Caixa Branca testa conhecendo a estrutura interna",
                "Caixa Preta é manual; Caixa Branca é automatizado",
                "Não há diferença significativa"
            ],
            correct: 1,
            explanation: "Caixa Preta (Black Box): testa funcionalidades sem conhecer a implementação interna, focando em entradas/saídas. Caixa Branca (White Box): testa conhecendo a estrutura interna do código, focando em caminhos lógicos e cobertura."
        },
        {
            question: "O que é Teste de Sanidade (Sanity Test)?",
            answers: [
                "Um teste completo de regressão",
                "Um teste rápido e focado para verificar se uma correção específica funciona",
                "Um teste de usabilidade",
                "Um teste de segurança mental do testador"
            ],
            correct: 1,
            explanation: "Sanity Test é um teste rápido e focado, geralmente feito após uma correção de bug, para verificar se a correção específica funciona sem fazer uma regressão completa. É mais focado que o Smoke Test."
        }
    ],
    frontend: [
        {
            question: "O que é Teste de Snapshot?",
            answers: [
                "Um teste de performance da página",
                "Um teste que compara a renderização atual com uma versão salva anteriormente",
                "Um teste de segurança",
                "Um teste de acessibilidade"
            ],
            correct: 1,
            explanation: "Teste de Snapshot captura a saída renderizada (HTML, componente) e compara com uma versão salva. Se houver diferenças, o teste falha, ajudando a detectar mudanças inesperadas na UI. Popular em React com Jest."
        },
        {
            question: "O que o atributo 'data-testid' é usado para?",
            answers: [
                "Estilizar elementos para testes",
                "Identificar elementos de forma estável para seletores de teste",
                "Armazenar dados de teste no elemento",
                "Validar formulários"
            ],
            correct: 1,
            explanation: "data-testid é um atributo HTML usado para criar seletores estáveis em testes. Diferente de classes ou IDs que podem mudar, data-testid é mantido especificamente para testes, não sendo afetado por mudanças de estilo ou refatorações."
        },
        {
            question: "O que é Cross-Browser Testing?",
            answers: [
                "Testar em diferentes resoluções de tela",
                "Verificar se a aplicação funciona corretamente em diferentes navegadores",
                "Testar a velocidade de carregamento",
                "Testar em diferentes sistemas operacionais"
            ],
            correct: 1,
            explanation: "Cross-Browser Testing verifica se a aplicação funciona corretamente em diferentes navegadores (Chrome, Firefox, Safari, Edge) e suas versões. É importante porque cada navegador pode renderizar HTML/CSS/JS de forma diferente."
        },
        {
            question: "O que é Teste de Acessibilidade (a11y)?",
            answers: [
                "Testar a velocidade de acesso ao site",
                "Verificar se a aplicação é utilizável por pessoas com deficiências",
                "Testar o login de usuários",
                "Testar em dispositivos móveis"
            ],
            correct: 1,
            explanation: "Testes de Acessibilidade (a11y - numerônimo de 'accessibility') verificam se a aplicação é utilizável por pessoas com deficiências visuais, auditivas, motoras ou cognitivas. Inclui verificar contraste, navegação por teclado, leitores de tela, etc."
        },
        {
            question: "Qual ferramenta é comumente usada para testes de acessibilidade?",
            answers: [
                "Jest",
                "axe-core / Lighthouse",
                "Postman",
                "JMeter"
            ],
            correct: 1,
            explanation: "axe-core é uma biblioteca popular para testes de acessibilidade que pode ser integrada com Cypress, Playwright, etc. Lighthouse (do Chrome DevTools) também avalia acessibilidade junto com performance e SEO."
        },
        {
            question: "O que é Visual Regression Testing?",
            answers: [
                "Testar a lógica de negócio",
                "Comparar screenshots da UI para detectar mudanças visuais não intencionais",
                "Testar a responsividade",
                "Testar a performance visual"
            ],
            correct: 1,
            explanation: "Visual Regression Testing compara screenshots da interface antes e depois de mudanças para detectar diferenças visuais não intencionais. Ferramentas como Percy, Chromatic, e BackstopJS são usadas para isso."
        },
        {
            question: "O que é Responsive Testing?",
            answers: [
                "Testar a velocidade de resposta do servidor",
                "Verificar se a aplicação se adapta corretamente a diferentes tamanhos de tela",
                "Testar APIs REST",
                "Testar a resposta de formulários"
            ],
            correct: 1,
            explanation: "Responsive Testing verifica se a aplicação se adapta e funciona corretamente em diferentes tamanhos de tela (desktop, tablet, mobile). Inclui testar breakpoints, layout, e funcionalidade em cada viewport."
        },
        {
            question: "O que é Component Testing em frontend?",
            answers: [
                "Testar toda a aplicação de uma vez",
                "Testar componentes individuais de forma isolada",
                "Testar apenas o CSS",
                "Testar o servidor"
            ],
            correct: 1,
            explanation: "Component Testing testa componentes de UI (React, Vue, Angular) de forma isolada, verificando sua renderização, props, eventos e estados. Ferramentas como Testing Library, Storybook e Cypress Component Testing são usadas."
        },
        {
            question: "O que a biblioteca Testing Library promove como filosofia de teste?",
            answers: [
                "Testar detalhes de implementação",
                "Testar como o usuário interage com a aplicação",
                "Testar apenas snapshots",
                "Testar apenas CSS"
            ],
            correct: 1,
            explanation: "Testing Library promove testar a aplicação da forma como o usuário a utiliza, não detalhes de implementação. Encoraja seletores acessíveis (getByRole, getByText) em vez de classes CSS ou estrutura do componente."
        },
        {
            question: "O que é DOM Testing?",
            answers: [
                "Testar o servidor de domínio",
                "Verificar a estrutura e manipulação do Document Object Model",
                "Testar domínios de URL",
                "Testar conexões de banco de dados"
            ],
            correct: 1,
            explanation: "DOM Testing envolve verificar a estrutura e manipulação do Document Object Model - a representação em árvore do HTML. Inclui verificar se elementos existem, têm atributos corretos, respondem a eventos, etc."
        }
    ],
    backend: [
        {
            question: "O que é Teste de Integração?",
            answers: [
                "Testar apenas a interface do usuário",
                "Verificar se diferentes módulos/serviços funcionam corretamente juntos",
                "Testar unidades de código isoladamente",
                "Testar apenas o banco de dados"
            ],
            correct: 1,
            explanation: "Teste de Integração verifica se diferentes módulos, serviços ou componentes funcionam corretamente quando combinados. Diferente de testes unitários (isolados), aqui testamos a interação entre partes do sistema."
        },
        {
            question: "O que é um Teste de Carga (Load Test)?",
            answers: [
                "Testar o upload de arquivos",
                "Avaliar o comportamento do sistema sob uma carga esperada de usuários",
                "Testar a conexão com o banco de dados",
                "Testar a interface de carregamento"
            ],
            correct: 1,
            explanation: "Load Test avalia como o sistema se comporta sob a carga esperada de usuários simultâneos. Mede tempo de resposta, throughput e uso de recursos. Ferramentas: JMeter, k6, Gatling, Locust."
        },
        {
            question: "O que é um Teste de Estresse (Stress Test)?",
            answers: [
                "Testar desenvolvedores sob pressão",
                "Testar o sistema além da capacidade normal para encontrar seu ponto de quebra",
                "Testar com dados inválidos",
                "Testar a segurança do sistema"
            ],
            correct: 1,
            explanation: "Stress Test leva o sistema além de sua capacidade normal para identificar o ponto de quebra e como ele se recupera. Diferente do Load Test que testa carga esperada, aqui testamos condições extremas."
        },
        {
            question: "O que é Database Testing?",
            answers: [
                "Testar apenas a interface de administração do banco",
                "Validar integridade, performance e funcionalidade das operações de banco de dados",
                "Testar a instalação do banco",
                "Testar backup automático"
            ],
            correct: 1,
            explanation: "Database Testing valida: integridade dos dados, constraints, triggers, stored procedures, performance de queries, transações ACID, e migrações. Garante que o banco funciona corretamente e mantém dados consistentes."
        },
        {
            question: "O que são Fixtures em testes?",
            answers: [
                "Correções de bugs",
                "Dados pré-definidos usados para configurar o estado inicial dos testes",
                "Ferramentas de automação",
                "Relatórios de teste"
            ],
            correct: 1,
            explanation: "Fixtures são dados ou estados pré-definidos usados para configurar o ambiente de teste. Exemplos: usuários de teste, registros no banco, arquivos de configuração. Garantem que testes executem em um estado conhecido e reproduzível."
        },
        {
            question: "O que é um Health Check endpoint?",
            answers: [
                "Um endpoint para verificar a saúde dos funcionários",
                "Um endpoint que retorna o status de funcionamento da aplicação e suas dependências",
                "Um endpoint para download de relatórios",
                "Um endpoint de autenticação"
            ],
            correct: 1,
            explanation: "Health Check é um endpoint (geralmente /health ou /status) que retorna se a aplicação está funcionando e o status de suas dependências (banco de dados, cache, serviços externos). Usado por load balancers e monitoramento."
        },
        {
            question: "O que é Teste de Contrato?",
            answers: [
                "Verificar contratos legais da empresa",
                "Validar que a comunicação entre serviços segue um acordo pré-definido",
                "Testar formulários de cadastro",
                "Verificar licenças de software"
            ],
            correct: 1,
            explanation: "Contract Testing valida que a comunicação entre serviços (ex: microsserviços, API consumer/provider) segue um contrato definido. Ferramentas como Pact garantem que mudanças em um serviço não quebrem consumidores."
        },
        {
            question: "O que é um Stub em testes?",
            answers: [
                "Um erro de teste",
                "Uma implementação simplificada que retorna respostas pré-programadas",
                "Um tipo de relatório",
                "Uma ferramenta de CI/CD"
            ],
            correct: 1,
            explanation: "Stub é uma implementação simplificada de uma dependência que retorna respostas pré-programadas. Diferente de Mock (que verifica interações), Stub apenas fornece dados necessários para o teste executar."
        },
        {
            question: "O que é Teste de Concorrência?",
            answers: [
                "Testar com empresas concorrentes",
                "Verificar comportamento do sistema quando múltiplas operações ocorrem simultaneamente",
                "Testar velocidade de conexão",
                "Comparar ferramentas de teste"
            ],
            correct: 1,
            explanation: "Teste de Concorrência verifica se o sistema funciona corretamente quando múltiplas operações acontecem simultaneamente. Detecta race conditions, deadlocks, e problemas de sincronização em ambientes multi-thread."
        },
        {
            question: "O que são Testes de Migração de Banco de Dados?",
            answers: [
                "Testar a mudança de provedor de cloud",
                "Validar que scripts de migração alteram o schema corretamente sem perda de dados",
                "Testar backup e restore",
                "Testar performance de queries"
            ],
            correct: 1,
            explanation: "Testes de Migração validam que scripts de alteração de schema (migrations) funcionam corretamente em ambas direções (up/down), preservam dados existentes, e não quebram a aplicação. Essencial para deploys seguros."
        }
    ],
    api: [
        {
            question: "Qual a diferença entre os métodos HTTP GET e POST?",
            answers: [
                "Não há diferença",
                "GET é para obter dados (sem body); POST é para enviar dados (com body)",
                "GET é mais seguro que POST",
                "POST é apenas para formulários"
            ],
            correct: 1,
            explanation: "GET é usado para obter/ler dados, é idempotente, e não deve ter body. POST é usado para criar/enviar dados, tem body, e não é idempotente. GET pode ser cacheado e aparece na URL; POST não."
        },
        {
            question: "O que significa o status code 404?",
            answers: [
                "Sucesso na requisição",
                "Recurso não encontrado",
                "Erro interno do servidor",
                "Não autorizado"
            ],
            correct: 1,
            explanation: "404 Not Found indica que o servidor não encontrou o recurso solicitado. Pode significar que a URL está errada, o recurso foi deletado, ou nunca existiu. É um erro do cliente (4xx)."
        },
        {
            question: "O que significa o status code 500?",
            answers: [
                "Sucesso na requisição",
                "Recurso não encontrado",
                "Erro interno do servidor",
                "Requisição inválida"
            ],
            correct: 2,
            explanation: "500 Internal Server Error indica que algo deu errado no servidor ao processar a requisição. É um erro genérico do servidor (5xx) quando nenhum outro código 5xx é apropriado."
        },
        {
            question: "O que é REST?",
            answers: [
                "Uma linguagem de programação",
                "Um estilo arquitetural para APIs que usa métodos HTTP e recursos",
                "Um banco de dados",
                "Uma ferramenta de teste"
            ],
            correct: 1,
            explanation: "REST (Representational State Transfer) é um estilo arquitetural que usa HTTP, URLs para identificar recursos, métodos HTTP para ações (GET, POST, PUT, DELETE), e é stateless. APIs RESTful seguem essas convenções."
        },
        {
            question: "O que é uma API Idempotente?",
            answers: [
                "Uma API que sempre falha",
                "Uma operação que produz o mesmo resultado independente de quantas vezes é executada",
                "Uma API sem autenticação",
                "Uma API que não aceita parâmetros"
            ],
            correct: 1,
            explanation: "Uma operação idempotente produz o mesmo resultado não importa quantas vezes seja executada. GET, PUT, DELETE são idempotentes. POST não é - cada chamada pode criar um novo recurso."
        },
        {
            question: "O que significa o status code 401?",
            answers: [
                "Sucesso",
                "Não autorizado - credenciais inválidas ou ausentes",
                "Proibido - sem permissão",
                "Não encontrado"
            ],
            correct: 1,
            explanation: "401 Unauthorized significa que a requisição requer autenticação. As credenciais estão ausentes, inválidas, ou expiradas. O cliente deve se autenticar para obter a resposta."
        },
        {
            question: "Qual a diferença entre 401 e 403?",
            answers: [
                "São a mesma coisa",
                "401 é falta de autenticação; 403 é falta de autorização (permissão)",
                "401 é erro de cliente; 403 é erro de servidor",
                "401 é para GET; 403 é para POST"
            ],
            correct: 1,
            explanation: "401 Unauthorized: não autenticado (quem é você?). 403 Forbidden: autenticado mas sem permissão (você não pode fazer isso). 401 pode ser resolvido fazendo login; 403 indica que mesmo logado, não tem acesso."
        },
        {
            question: "O que é GraphQL?",
            answers: [
                "Um banco de dados de grafos",
                "Uma linguagem de consulta para APIs que permite solicitar dados específicos",
                "Uma ferramenta de visualização",
                "Um protocolo de rede"
            ],
            correct: 1,
            explanation: "GraphQL é uma linguagem de consulta para APIs desenvolvida pelo Facebook. Permite que clientes solicitem exatamente os dados necessários, evitando over-fetching e under-fetching comuns em REST."
        },
        {
            question: "O que é Rate Limiting em APIs?",
            answers: [
                "Limitar o tamanho das respostas",
                "Limitar o número de requisições que um cliente pode fazer em um período",
                "Limitar a velocidade de upload",
                "Limitar o número de endpoints"
            ],
            correct: 1,
            explanation: "Rate Limiting restringe quantas requisições um cliente pode fazer em um período (ex: 100 req/minuto). Protege a API contra abuso, DDoS, e garante recursos para todos os usuários. Retorna 429 Too Many Requests quando excedido."
        },
        {
            question: "O que significa CRUD?",
            answers: [
                "Create, Read, Update, Delete - operações básicas de dados",
                "Connect, Retrieve, Upload, Download",
                "Call, Return, Use, Deploy",
                "Check, Review, Update, Debug"
            ],
            correct: 0,
            explanation: "CRUD representa as quatro operações básicas: Create (POST), Read (GET), Update (PUT/PATCH), Delete (DELETE). Praticamente toda API que gerencia recursos implementa essas operações."
        },
        {
            question: "O que é o Postman usado para?",
            answers: [
                "Enviar emails",
                "Testar, documentar e desenvolver APIs",
                "Criar interfaces de usuário",
                "Gerenciar servidores"
            ],
            correct: 1,
            explanation: "Postman é uma ferramenta popular para testar APIs. Permite enviar requisições HTTP, organizar em collections, criar testes automatizados, mockar APIs, e gerar documentação. Alternativas: Insomnia, Thunder Client."
        },
        {
            question: "O que é o cabeçalho Content-Type?",
            answers: [
                "O tipo de navegador do cliente",
                "O formato dos dados sendo enviados/recebidos (ex: application/json)",
                "O tamanho do conteúdo",
                "A codificação de caracteres"
            ],
            correct: 1,
            explanation: "Content-Type indica o tipo de mídia/formato dos dados no body da requisição ou resposta. Exemplos: application/json, text/html, multipart/form-data. O servidor usa isso para parsear os dados corretamente."
        },
        {
            question: "O que significa o status code 201?",
            answers: [
                "Sucesso, sem corpo de resposta",
                "Recurso criado com sucesso",
                "Aceito para processamento",
                "Sem conteúdo"
            ],
            correct: 1,
            explanation: "201 Created indica que a requisição foi bem-sucedida e um novo recurso foi criado. Geralmente retornado após POST bem-sucedido. A resposta deve incluir o recurso criado ou sua localização (header Location)."
        },
        {
            question: "O que é OAuth 2.0?",
            answers: [
                "Um banco de dados",
                "Um protocolo de autorização que permite acesso limitado a recursos",
                "Uma linguagem de programação",
                "Um framework de testes"
            ],
            correct: 1,
            explanation: "OAuth 2.0 é um protocolo de autorização que permite que aplicações obtenham acesso limitado a recursos de usuários sem expor suas credenciais. Usado em 'Login com Google/Facebook' e APIs que requerem permissões específicas."
        },
        {
            question: "O que é um JWT (JSON Web Token)?",
            answers: [
                "Um banco de dados JSON",
                "Um token compacto e auto-contido para transmitir informações de forma segura",
                "Um formato de arquivo",
                "Uma API de JavaScript"
            ],
            correct: 1,
            explanation: "JWT é um padrão para criar tokens de acesso que contêm claims (informações) em formato JSON, assinados digitalmente. Usado para autenticação stateless - o token contém todas as informações necessárias para validar o usuário."
        }
    ],
    playwright: [
        {
            question: "Qual comando instala o Playwright em um projeto?",
            answers: [
                "npm install playwright-test",
                "npm init playwright@latest",
                "npm install @playwright/core",
                "npx create-playwright"
            ],
            correct: 1,
            explanation: "O comando 'npm init playwright@latest' instala o Playwright e configura o projeto com arquivos de configuração, exemplo de teste, e oferece instalar os navegadores. 'npx playwright install' instala apenas os navegadores."
        },
        {
            question: "Qual é a sintaxe correta para navegar para uma URL no Playwright?",
            answers: [
                "page.navigate('https://exemplo.com')",
                "page.goto('https://exemplo.com')",
                "page.open('https://exemplo.com')",
                "page.visit('https://exemplo.com')"
            ],
            correct: 1,
            explanation: "page.goto() é o método para navegar para uma URL no Playwright. Aceita opções como timeout e waitUntil. Exemplo: await page.goto('https://exemplo.com', { waitUntil: 'networkidle' })."
        },
        {
            question: "Como selecionar um elemento por texto no Playwright?",
            answers: [
                "page.$('text=Clique aqui')",
                "page.locator('text=Clique aqui') ou page.getByText('Clique aqui')",
                "page.findByText('Clique aqui')",
                "page.selectText('Clique aqui')"
            ],
            correct: 1,
            explanation: "Playwright oferece page.locator('text=Clique aqui') ou o método mais semântico page.getByText('Clique aqui'). Os métodos getBy* são recomendados por serem mais legíveis e alinhados com Testing Library."
        },
        {
            question: "O que é o Playwright Test Runner?",
            answers: [
                "Um plugin do Jest",
                "O framework de testes integrado do Playwright com recursos como paralelismo e relatórios",
                "Uma extensão do VS Code",
                "Um servidor de CI/CD"
            ],
            correct: 1,
            explanation: "@playwright/test é o test runner integrado do Playwright. Oferece: paralelismo de testes, fixtures, hooks, retry automático, screenshots/videos em falha, múltiplos reporters, e modo UI para debugging."
        },
        {
            question: "Como fazer uma asserção de que um elemento está visível no Playwright?",
            answers: [
                "expect(element).toBeInTheDocument()",
                "await expect(locator).toBeVisible()",
                "assert(element.isVisible())",
                "element.shouldBeVisible()"
            ],
            correct: 1,
            explanation: "await expect(locator).toBeVisible() é a forma correta. O Playwright tem expect com auto-waiting - ele aguarda até que a condição seja verdadeira ou o timeout expire. Outras asserções: toHaveText, toHaveValue, toBeEnabled."
        },
        {
            question: "O que é o 'auto-waiting' do Playwright?",
            answers: [
                "Um sistema de filas",
                "O mecanismo que automaticamente espera elementos estarem prontos antes de interagir",
                "Um modo de espera manual",
                "Um plugin de timeout"
            ],
            correct: 1,
            explanation: "Auto-waiting é o recurso do Playwright que automaticamente espera elementos estarem visíveis, habilitados, e estáveis antes de interagir. Elimina a necessidade de waits explícitos na maioria dos casos, tornando testes mais confiáveis."
        },
        {
            question: "Qual o comando para executar os testes Playwright?",
            answers: [
                "playwright run",
                "npx playwright test",
                "npm test playwright",
                "playwright execute"
            ],
            correct: 1,
            explanation: "'npx playwright test' executa todos os testes. Opções úteis: --headed (ver navegador), --debug (modo debug), --ui (interface visual), --project=chromium (navegador específico), nome-do-arquivo.spec.ts (arquivo específico)."
        },
        {
            question: "Como o Playwright lida com múltiplos navegadores?",
            answers: [
                "Só suporta Chrome",
                "Suporta Chromium, Firefox e WebKit através de projetos no config",
                "Precisa de plugins separados para cada navegador",
                "Usa apenas navegadores headless"
            ],
            correct: 1,
            explanation: "Playwright suporta nativamente Chromium, Firefox e WebKit (Safari). Configure projects no playwright.config.ts para testar em múltiplos navegadores. Comando: npx playwright test --project=firefox."
        },
        {
            question: "O que é o Playwright Codegen?",
            answers: [
                "Um compilador de código",
                "Uma ferramenta que grava ações no navegador e gera código de teste",
                "Um gerador de relatórios",
                "Um formatador de código"
            ],
            correct: 1,
            explanation: "'npx playwright codegen' abre um navegador onde você interage manualmente e o Playwright gera código de teste automaticamente. Útil para criar testes rapidamente e aprender os seletores/métodos do Playwright."
        },
        {
            question: "Como fazer debug de testes no Playwright?",
            answers: [
                "Não é possível debugar",
                "Usar --debug flag, page.pause(), ou Playwright Inspector",
                "Apenas usando console.log",
                "Apenas no modo headless"
            ],
            correct: 1,
            explanation: "Playwright oferece várias opções de debug: 'npx playwright test --debug' abre o inspector, 'await page.pause()' pausa a execução para inspecionar, '--ui' abre interface visual, e VS Code extension permite debug interativo."
        },
        {
            question: "O que são Fixtures no Playwright Test?",
            answers: [
                "Correções de bugs",
                "Objetos reutilizáveis que configuram o ambiente de teste (page, browser, context)",
                "Arquivos de configuração",
                "Tipos de asserções"
            ],
            correct: 1,
            explanation: "Fixtures são objetos que o Playwright Test injeta nos testes. Built-in fixtures incluem page, browser, context. Você pode criar fixtures customizados para compartilhar setup/teardown, como login de usuário ou dados de teste."
        },
        {
            question: "Como tirar screenshot de uma página no Playwright?",
            answers: [
                "page.capture()",
                "page.screenshot({ path: 'screenshot.png' })",
                "page.takePhoto()",
                "page.saveImage()"
            ],
            correct: 1,
            explanation: "await page.screenshot({ path: 'screenshot.png' }) captura a página. Opções incluem fullPage (página inteira), clip (área específica), type ('png' ou 'jpeg'). Para elementos: locator.screenshot()."
        },
        {
            question: "O que é o Trace Viewer do Playwright?",
            answers: [
                "Um rastreador de bugs",
                "Uma ferramenta que grava e reproduz execuções de teste com screenshots, DOM, e network",
                "Um monitor de performance",
                "Um logger de console"
            ],
            correct: 1,
            explanation: "Trace Viewer grava uma 'trace' completa do teste: screenshots de cada ação, snapshots do DOM, logs de rede, e console. Ative com trace: 'on' no config. Visualize com 'npx playwright show-trace trace.zip'."
        },
        {
            question: "Como executar testes em paralelo no Playwright?",
            answers: [
                "Não é possível",
                "O Playwright Test executa em paralelo por padrão; configure workers no config",
                "Precisa de plugin adicional",
                "Apenas em CI/CD"
            ],
            correct: 1,
            explanation: "Playwright Test executa testes em paralelo por padrão. Configure o número de workers em playwright.config.ts: workers: 4 (número fixo) ou workers: '50%' (porcentagem de CPUs). Use test.describe.serial() para testes sequenciais."
        },
        {
            question: "Qual método é usado para preencher um campo de input no Playwright?",
            answers: [
                "page.type('selector', 'texto')",
                "page.locator('selector').fill('texto')",
                "page.input('selector', 'texto')",
                "page.write('selector', 'texto')"
            ],
            correct: 1,
            explanation: "locator.fill('texto') preenche campos de input, limpando o conteúdo anterior. Para digitar caractere por caractere (simulando digitação real), use locator.type('texto'). fill() é mais rápido e recomendado na maioria dos casos."
        }
    ],
    selenium: [
        {
            question: "O que é o WebDriver no Selenium?",
            answers: [
                "Um navegador especial",
                "Uma interface para controlar navegadores programaticamente",
                "Um servidor de testes",
                "Uma linguagem de programação"
            ],
            correct: 1,
            explanation: "WebDriver é uma interface W3C que permite controlar navegadores programaticamente. Cada navegador tem seu driver (ChromeDriver, GeckoDriver, etc.) que implementa o protocolo WebDriver para automação."
        },
        {
            question: "Qual é a diferença entre findElement e findElements?",
            answers: [
                "Não há diferença",
                "findElement retorna um elemento; findElements retorna uma lista de elementos",
                "findElement é mais rápido",
                "findElements é deprecated"
            ],
            correct: 1,
            explanation: "findElement retorna o primeiro elemento encontrado ou lança exceção se não encontrar. findElements retorna uma lista (pode ser vazia) de todos os elementos que correspondem ao seletor."
        },
        {
            question: "O que é o Selenium Grid?",
            answers: [
                "Um editor de código",
                "Uma infraestrutura para executar testes em múltiplas máquinas e navegadores em paralelo",
                "Um tipo de seletor",
                "Um relatório de testes"
            ],
            correct: 1,
            explanation: "Selenium Grid permite distribuir testes em múltiplas máquinas (nodes) controladas por um hub central. Possibilita executar testes em paralelo em diferentes navegadores/OS, reduzindo tempo de execução."
        },
        {
            question: "Como esperar um elemento estar presente no Selenium?",
            answers: [
                "Thread.sleep(5000)",
                "WebDriverWait com ExpectedConditions",
                "driver.wait()",
                "element.waitFor()"
            ],
            correct: 1,
            explanation: "WebDriverWait com ExpectedConditions é a forma correta de esperar. Ex: new WebDriverWait(driver, 10).until(ExpectedConditions.presenceOfElementLocated(By.id('elemento'))). Evite Thread.sleep() que é espera fixa."
        },
        {
            question: "Quais são os tipos de espera no Selenium?",
            answers: [
                "Apenas espera implícita",
                "Implícita, Explícita e Fluent Wait",
                "Apenas Thread.sleep",
                "Apenas espera explícita"
            ],
            correct: 1,
            explanation: "Implicit Wait: timeout global para todos os findElement. Explicit Wait (WebDriverWait): espera específica com condição. Fluent Wait: explicit wait com polling customizado e exceções ignoradas. Explicit/Fluent são preferidas."
        },
        {
            question: "O que é Page Object Model (POM)?",
            answers: [
                "Um tipo de seletor",
                "Um padrão de design que encapsula elementos e ações de uma página em classes",
                "Uma ferramenta de automação",
                "Um formato de relatório"
            ],
            correct: 1,
            explanation: "Page Object Model é um design pattern onde cada página/componente da aplicação é representado por uma classe. Encapsula locators e métodos de interação, promovendo reusabilidade e manutenibilidade dos testes."
        },
        {
            question: "Como lidar com alertas JavaScript no Selenium?",
            answers: [
                "driver.findElement(By.alert())",
                "driver.switchTo().alert()",
                "driver.handleAlert()",
                "Alert.dismiss()"
            ],
            correct: 1,
            explanation: "driver.switchTo().alert() retorna um objeto Alert. Métodos: accept() (OK), dismiss() (Cancelar), getText() (obter texto), sendKeys() (digitar em prompts). Deve mudar o foco antes de interagir."
        },
        {
            question: "Qual locator é geralmente mais rápido e confiável no Selenium?",
            answers: [
                "XPath",
                "ID",
                "CSS Selector",
                "Class Name"
            ],
            correct: 1,
            explanation: "ID é geralmente mais rápido porque navegadores otimizam busca por ID (deve ser único). CSS Selectors são a segunda opção mais rápida. XPath é flexível mas mais lento. Use ID quando disponível, senão CSS Selector."
        },
        {
            question: "Como executar JavaScript no Selenium?",
            answers: [
                "driver.runScript()",
                "((JavascriptExecutor) driver).executeScript()",
                "driver.eval()",
                "driver.js()"
            ],
            correct: 1,
            explanation: "Faça cast para JavascriptExecutor e use executeScript(). Ex: ((JavascriptExecutor) driver).executeScript(\"return document.title;\"). Útil para scroll, obter valores, interagir com elementos não acessíveis normalmente."
        },
        {
            question: "O que é o Selenium IDE?",
            answers: [
                "Um ambiente de desenvolvimento integrado completo",
                "Uma extensão de navegador para gravar e reproduzir testes",
                "Um servidor de testes",
                "Uma biblioteca de código"
            ],
            correct: 1,
            explanation: "Selenium IDE é uma extensão para Chrome/Firefox que grava interações no navegador e gera testes. Útil para criar testes rapidamente sem código, mas testes exportados geralmente precisam de refinamento para produção."
        },
        {
            question: "Como fazer hover (passar o mouse) em um elemento no Selenium?",
            answers: [
                "element.hover()",
                "Actions class com moveToElement()",
                "driver.hover(element)",
                "element.mouseOver()"
            ],
            correct: 1,
            explanation: "Use a classe Actions: new Actions(driver).moveToElement(element).perform(). A classe Actions permite ações complexas como hover, drag-and-drop, double-click, right-click, e sequências de ações."
        },
        {
            question: "O que é Headless mode no Selenium?",
            answers: [
                "Modo sem JavaScript",
                "Executar o navegador sem interface gráfica visível",
                "Modo sem rede",
                "Modo de debug"
            ],
            correct: 1,
            explanation: "Headless mode executa o navegador sem renderizar a interface gráfica. É mais rápido e usa menos recursos, ideal para CI/CD. Configure com ChromeOptions: options.addArguments('--headless')."
        },
        {
            question: "Como alternar entre abas/janelas no Selenium?",
            answers: [
                "driver.switchWindow()",
                "driver.switchTo().window(windowHandle)",
                "driver.changeTab()",
                "driver.newWindow()"
            ],
            correct: 1,
            explanation: "Use driver.getWindowHandles() para obter todas as janelas e driver.switchTo().window(handle) para mudar. driver.getWindowHandle() retorna a janela atual. Sempre salve o handle original antes de mudar."
        },
        {
            question: "O que significa 'StaleElementReferenceException'?",
            answers: [
                "O elemento não existe",
                "O elemento foi encontrado mas não está mais anexado ao DOM",
                "O seletor está errado",
                "Timeout excedido"
            ],
            correct: 1,
            explanation: "StaleElementReferenceException ocorre quando um elemento foi encontrado mas o DOM foi atualizado e o elemento não está mais anexado. Solução: encontrar o elemento novamente após a atualização do DOM."
        },
        {
            question: "Como capturar screenshot no Selenium?",
            answers: [
                "driver.screenshot()",
                "((TakesScreenshot) driver).getScreenshotAs(OutputType.FILE)",
                "driver.capture()",
                "driver.saveImage()"
            ],
            correct: 1,
            explanation: "Faça cast para TakesScreenshot e use getScreenshotAs(). Pode salvar como FILE, BYTES, ou BASE64. Ex: File screenshot = ((TakesScreenshot) driver).getScreenshotAs(OutputType.FILE);"
        }
    ],
    cypress: [
        {
            question: "Qual comando é usado para visitar uma URL no Cypress?",
            answers: [
                "cy.navigate()",
                "cy.visit()",
                "cy.goto()",
                "cy.open()"
            ],
            correct: 1,
            explanation: "cy.visit() é o comando para navegar para uma URL no Cypress. Aceita URL relativa (baseUrl do config) ou absoluta. Ex: cy.visit('/login') ou cy.visit('https://exemplo.com')."
        },
        {
            question: "O que é o Cypress Dashboard?",
            answers: [
                "Um painel de administração local",
                "Um serviço cloud para gravação, paralelização e analytics de testes",
                "Uma interface de configuração",
                "Um editor de código"
            ],
            correct: 1,
            explanation: "Cypress Dashboard (agora Cypress Cloud) é um serviço que oferece gravação de execuções, screenshots/vídeos de falhas, paralelização inteligente, analytics, e flaky test detection. Requer conta e projectId no config."
        },
        {
            question: "Como selecionar um elemento pelo atributo data-cy no Cypress?",
            answers: [
                "cy.get('[data-cy=elemento]')",
                "cy.data('elemento')",
                "cy.find('data-cy=elemento')",
                "cy.getByData('elemento')"
            ],
            correct: 0,
            explanation: "cy.get('[data-cy=elemento]') usa seletor CSS de atributo. data-cy é uma convenção recomendada pelo Cypress para criar seletores estáveis. Também pode usar data-test ou data-testid."
        },
        {
            question: "O que o comando cy.intercept() faz?",
            answers: [
                "Intercepta erros de JavaScript",
                "Intercepta e controla requisições de rede (mock/spy)",
                "Intercepta cliques do usuário",
                "Intercepta logs do console"
            ],
            correct: 1,
            explanation: "cy.intercept() permite interceptar requisições HTTP para: mockar respostas (stub), esperar requisições (wait), modificar requests/responses, e simular erros de rede. Essencial para testes isolados e consistentes."
        },
        {
            question: "Qual é a diferença entre cy.get() e cy.find()?",
            answers: [
                "Não há diferença",
                "cy.get() busca no documento todo; cy.find() busca dentro de um elemento pai",
                "cy.get() é mais rápido",
                "cy.find() é deprecated"
            ],
            correct: 1,
            explanation: "cy.get() busca no documento inteiro a partir da raiz. cy.find() é encadeado e busca descendentes do elemento anterior. Ex: cy.get('.pai').find('.filho') - encontra .filho dentro de .pai."
        },
        {
            question: "O que é 'automatic waiting' no Cypress?",
            answers: [
                "Um plugin adicional",
                "O Cypress automaticamente espera elementos e asserções sem timeouts explícitos",
                "Espera manual configurada pelo usuário",
                "Modo de pausa automática"
            ],
            correct: 1,
            explanation: "Cypress automaticamente espera: comandos (até o elemento existir), asserções (até passar ou timeout), requisições (cy.wait). Timeout padrão é 4s. Isso elimina a necessidade de waits explícitos na maioria dos casos."
        },
        {
            question: "Como acessar um iframe no Cypress?",
            answers: [
                "cy.iframe()",
                "cy.get('iframe').its('0.contentDocument.body').should('not.be.empty').then(cy.wrap)",
                "cy.switchToFrame()",
                "cy.frame()"
            ],
            correct: 1,
            explanation: "Cypress não tem comando nativo para iframes. A solução comum é acessar o contentDocument do iframe e fazer wrap. O plugin cypress-iframe simplifica isso: cy.frameLoaded() e cy.iframe()."
        },
        {
            question: "O que são Custom Commands no Cypress?",
            answers: [
                "Comandos do sistema operacional",
                "Comandos personalizados que você cria para reutilizar em testes",
                "Comandos de linha de comando",
                "Comandos de configuração"
            ],
            correct: 1,
            explanation: "Custom Commands são comandos que você define em cypress/support/commands.js. Ex: Cypress.Commands.add('login', (user, pass) => {...}). Depois use cy.login('user', 'pass'). Ótimo para ações repetitivas como login."
        },
        {
            question: "O que o comando cy.fixture() faz?",
            answers: [
                "Cria arquivos temporários",
                "Carrega dados de arquivos da pasta cypress/fixtures",
                "Corrige elementos quebrados",
                "Configura o ambiente de teste"
            ],
            correct: 1,
            explanation: "cy.fixture() carrega dados de arquivos JSON (ou outros) da pasta cypress/fixtures. Útil para dados de teste, mocks de API, etc. Ex: cy.fixture('users.json').then((users) => {...}). Pode usar com cy.intercept()."
        },
        {
            question: "Como executar testes Cypress em modo headless?",
            answers: [
                "cypress open --headless",
                "cypress run",
                "cypress test --no-gui",
                "cypress execute"
            ],
            correct: 1,
            explanation: "'cypress run' executa testes em modo headless por padrão (Electron ou Chrome headless). 'cypress open' abre o Test Runner interativo. Para CI/CD, use 'cypress run' com configurações de browser e spec específicas."
        },
        {
            question: "O que é o Test Runner do Cypress?",
            answers: [
                "Um servidor de CI/CD",
                "A interface gráfica interativa para executar e debugar testes",
                "Um plugin de relatórios",
                "Uma biblioteca de asserções"
            ],
            correct: 1,
            explanation: "O Test Runner (aberto com 'cypress open') é a interface interativa do Cypress. Mostra o navegador em tempo real, snapshots de cada comando, time-travel debugging, seletor playground, e console para investigação."
        },
        {
            question: "Como lidar com elementos que aparecem condicionalmente no Cypress?",
            answers: [
                "Usar try-catch",
                "Usar cy.get().should('exist') ou verificar com jQuery",
                "Não é possível no Cypress",
                "Usar cy.wait()"
            ],
            correct: 1,
            explanation: "Para elementos condicionais: cy.get('body').then(($body) => { if ($body.find('.elemento').length) { ... } }). Ou use should('exist')/should('not.exist'). Evite testes dependentes de condições - prefira estado determinístico."
        },
        {
            question: "O que é cy.session() no Cypress?",
            answers: [
                "Cria uma nova aba do navegador",
                "Cacheia e restaura estado de autenticação entre testes",
                "Inicia uma sessão de debug",
                "Gerencia cookies manualmente"
            ],
            correct: 1,
            explanation: "cy.session() (Cypress 8+) cacheia o estado do navegador (cookies, localStorage, sessionStorage) após uma ação como login. Testes subsequentes restauram esse estado sem repetir o login, acelerando significativamente a suite."
        },
        {
            question: "Qual é o arquivo de configuração principal do Cypress?",
            answers: [
                "cypress.json (deprecated) / cypress.config.js",
                "package.json",
                "config.js",
                "settings.json"
            ],
            correct: 0,
            explanation: "Cypress 10+ usa cypress.config.js (ou .ts). Versões anteriores usavam cypress.json. O arquivo configura baseUrl, viewportSize, timeouts, env variables, plugins, e outras opções do Cypress."
        },
        {
            question: "Como fazer asserções em requisições de rede no Cypress?",
            answers: [
                "cy.request().assert()",
                "cy.intercept() com cy.wait() e then()",
                "cy.network().check()",
                "Não é possível no Cypress"
            ],
            correct: 1,
            explanation: "Use cy.intercept() para interceptar, cy.wait('@alias') para esperar, e then() para acessar a requisição/resposta. Ex: cy.intercept('POST', '/api/*').as('apiCall'); cy.wait('@apiCall').its('response.statusCode').should('eq', 200)."
        }
    ],
    hibrido: [
        {
            question: "O que são Testes End-to-End (E2E)?",
            answers: [
                "Testes unitários avançados",
                "Testes que validam fluxos completos da aplicação do início ao fim",
                "Testes apenas de backend",
                "Testes de integração entre dois módulos"
            ],
            correct: 1,
            explanation: "Testes E2E validam fluxos completos da aplicação como um usuário real faria: navegação, interações UI, chamadas de API, persistência de dados. Testam frontend + backend + banco juntos, garantindo que o sistema funciona de ponta a ponta."
        },
        {
            question: "O que é Contract Testing em arquitetura de microsserviços?",
            answers: [
                "Testar contratos legais",
                "Validar que consumidores e provedores de API concordam sobre o formato de comunicação",
                "Testar termos de uso",
                "Verificar licenças de software"
            ],
            correct: 1,
            explanation: "Contract Testing valida que serviços consumidores e provedores concordam sobre o 'contrato' (formato de requisições/respostas). Ferramentas como Pact permitem que cada lado teste independentemente contra o contrato, sem precisar do outro serviço."
        },
        {
            question: "O que é a estratégia de teste 'Test Double'?",
            answers: [
                "Executar cada teste duas vezes",
                "Usar substitutos (mocks, stubs, fakes, spies) para dependências em testes",
                "Testar em dois navegadores",
                "Duplicar casos de teste"
            ],
            correct: 1,
            explanation: "Test Double é um termo genérico para qualquer objeto que substitui uma dependência real em testes. Tipos: Stub (respostas pré-programadas), Mock (verifica interações), Fake (implementação simplificada), Spy (registra chamadas)."
        },
        {
            question: "O que é CI/CD e como se relaciona com testes?",
            answers: [
                "Um tipo de teste",
                "Integração e Entrega Contínua - automatiza build, teste e deploy do código",
                "Uma ferramenta de automação de testes",
                "Um framework de testes"
            ],
            correct: 1,
            explanation: "CI (Continuous Integration) automatiza build e testes a cada commit. CD (Continuous Delivery/Deployment) automatiza o deploy. Testes automatizados são essenciais: unitários no CI, E2E antes do deploy, garantindo qualidade contínua."
        },
        {
            question: "O que é o padrão AAA (Arrange-Act-Assert) em testes?",
            answers: [
                "Uma classificação de bugs",
                "Uma estrutura para organizar testes: preparar dados, executar ação, verificar resultado",
                "Uma métrica de qualidade",
                "Um tipo de relatório"
            ],
            correct: 1,
            explanation: "AAA é um padrão para estruturar testes: Arrange (preparar dados e contexto), Act (executar a ação sendo testada), Assert (verificar o resultado esperado). Similar ao Given-When-Then do BDD. Torna testes mais legíveis e organizados."
        },
        {
            question: "O que são Flaky Tests?",
            answers: [
                "Testes muito rápidos",
                "Testes que falham intermitentemente sem mudanças no código",
                "Testes deprecated",
                "Testes sem asserções"
            ],
            correct: 1,
            explanation: "Flaky Tests são testes instáveis que passam ou falham aleatoriamente. Causas comuns: race conditions, dependência de dados externos, timing issues, ordem de execução. São problemáticos porque minam a confiança na suite de testes."
        },
        {
            question: "O que é Test Data Management?",
            answers: [
                "Gerenciar senhas de teste",
                "Estratégias para criar, manter e limpar dados usados em testes",
                "Backup de testes",
                "Documentação de testes"
            ],
            correct: 1,
            explanation: "Test Data Management envolve estratégias para dados de teste: fixtures (dados estáticos), factories (geração dinâmica), seeding (popular banco), cleanup (limpar após testes). Dados consistentes são cruciais para testes confiáveis."
        },
        {
            question: "O que é Teste de Ponta a Ponta com API Mocking?",
            answers: [
                "Testar apenas APIs",
                "Testes E2E onde o backend é simulado para isolar o frontend",
                "Testes sem frontend",
                "Testes de performance de API"
            ],
            correct: 1,
            explanation: "É uma estratégia híbrida onde testes E2E de frontend usam APIs mockadas (cy.intercept/page.route). Benefícios: testes mais rápidos, controlados e isolados. Trade-off: não testam integração real com backend."
        },
        {
            question: "O que é o conceito de 'Shift Right' em testes?",
            answers: [
                "Mover testes para o início do desenvolvimento",
                "Testar em produção com técnicas como canary releases e monitoramento",
                "Testar apenas o lado direito da interface",
                "Postergar testes para depois do deploy"
            ],
            correct: 1,
            explanation: "Shift Right complementa Shift Left: é testar em produção de forma controlada. Inclui: canary releases, feature flags, A/B testing, monitoramento, chaos engineering. Reconhece que alguns problemas só aparecem em produção real."
        },
        {
            question: "O que é uma Test Suite?",
            answers: [
                "Um único teste",
                "Uma coleção organizada de casos de teste relacionados",
                "Uma ferramenta de teste",
                "Um relatório de bugs"
            ],
            correct: 1,
            explanation: "Test Suite é uma coleção de casos de teste agrupados logicamente, geralmente por funcionalidade, módulo ou tipo de teste. Permite executar grupos de testes relacionados juntos e organizar a cobertura de testes do projeto."
        },
        {
            question: "O que é Testing Trophy (Troféu de Testes)?",
            answers: [
                "Um prêmio para QAs",
                "Uma alternativa à Pirâmide que prioriza testes de integração",
                "Uma ferramenta de relatórios",
                "Uma certificação de QA"
            ],
            correct: 1,
            explanation: "Testing Trophy (proposto por Kent C. Dodds) é uma alternativa à Pirâmide de Testes. Prioriza testes de integração no meio (maior confiança vs custo), com menos unitários, menos E2E, e análise estática na base. Popular em frontend."
        },
        {
            question: "O que é Feature Flag Testing?",
            answers: [
                "Testar apenas novas features",
                "Testar aplicações que usam feature flags, cobrindo cenários com flags ligadas/desligadas",
                "Marcar testes como features",
                "Usar flags em relatórios"
            ],
            correct: 1,
            explanation: "Feature Flag Testing envolve testar aplicações com feature toggles: verificar comportamento com flag ON e OFF, testar transições, garantir rollback seguro. Essencial quando feature flags controlam funcionalidades em produção."
        },
        {
            question: "O que é Parallel Testing?",
            answers: [
                "Testar duas features simultaneamente",
                "Executar múltiplos testes simultaneamente para reduzir tempo total",
                "Testar em dois monitores",
                "Comparar dois sistemas"
            ],
            correct: 1,
            explanation: "Parallel Testing executa múltiplos testes simultaneamente em diferentes threads/processos/máquinas. Reduz drasticamente o tempo de execução da suite. Requer testes independentes (sem compartilhar estado) e infraestrutura adequada."
        },
        {
            question: "O que é a técnica de Boundary Value Analysis?",
            answers: [
                "Analisar limites de performance",
                "Testar valores nos limites e fronteiras de partições válidas",
                "Definir limites de tempo de teste",
                "Analisar cobertura de código"
            ],
            correct: 1,
            explanation: "Boundary Value Analysis testa valores nas fronteiras de partições de entrada. Para um campo que aceita 1-100: testa 0, 1, 2, 99, 100, 101. Bugs frequentemente ocorrem nos limites (off-by-one errors). Complementa Equivalence Partitioning."
        },
        {
            question: "O que é Equivalence Partitioning?",
            answers: [
                "Dividir a equipe de QA em grupos",
                "Dividir inputs em grupos onde todos os valores devem ter comportamento equivalente",
                "Particionar o banco de dados",
                "Dividir testes em categorias"
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
            modelAnswer: "Trabalho com QA há X anos, começando como [cargo inicial]. Atualmente sou [cargo atual] na [empresa], onde sou responsável por [principais responsabilidades]. Ao longo da minha carreira, participei de projetos como [exemplos], onde implementei [melhorias/processos]. Minhas principais conquistas incluem [resultados mensuráveis como redução de bugs, melhoria de cobertura, etc.].",
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
            modelAnswer: "Escolhi QA porque tenho uma atenção natural aos detalhes e paixão por garantir que os usuários tenham a melhor experiência possível. Me motiva saber que meu trabalho previne problemas antes que cheguem aos usuários. Além disso, QA me permite ter uma visão holística do produto, entender tanto o lado técnico quanto o negócio, e contribuir diretamente para a qualidade final do que entregamos.",
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
            modelAnswer: "Tive uma situação onde um desenvolvedor discordava que um comportamento era bug, alegando ser 'feature'. Em vez de escalar o conflito, sugeri analisarmos juntos a especificação e o comportamento esperado pelo usuário. Descobrimos que a especificação era ambígua. Envolvemos o PO para esclarecer, e juntos definimos o comportamento correto. Isso melhorou nossa comunicação e criamos o hábito de revisar especificações juntos antes do desenvolvimento.",
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
            modelAnswer: "Meu maior desafio foi implementar automação de testes em uma empresa que nunca tinha tido isso. Enfrentei resistência cultural, falta de infraestrutura e código legado difícil de testar. Comecei pequeno, automatizando os smoke tests mais críticos para mostrar valor rápido. Fiz apresentações mostrando o ROI da automação. Em 6 meses, tínhamos 60% de cobertura automatizada e o time de dev começou a escrever seus próprios testes.",
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
            modelAnswer: "Em um projeto de e-commerce, percebi que os testes de checkout sempre usavam o mesmo usuário e carrinho padrão. Questionei: 'E se o usuário tiver cupom expirado? E se o produto sair de estoque durante o checkout?' Criei cenários com dados variados e descobri um bug crítico: quando um produto saía de estoque durante o pagamento, a transação era cobrada mas o pedido não era criado. O bug existia há meses porque os testes não cobriam esse timing específico. Minha intervenção evitou prejuízos de aproximadamente R$30k em estornos mensais e implementamos um mecanismo de reserva de estoque.",
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
            modelAnswer: "Avalio vários critérios: frequência de execução (testes executados frequentemente são candidatos a automação), estabilidade da funcionalidade (features estáveis são melhores para automatizar), complexidade de setup (cenários com muito setup manual se beneficiam de automação), valor de regressão (funcionalidades críticas precisam de regressão automatizada). Mantenho manual: testes exploratórios, usabilidade, cenários que mudam frequentemente, e casos que precisam de julgamento humano.",
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
            tip: "Mencione ferramentas, tipos de teste e validações específicas",
            modelAnswer: "Para testar APIs REST, verifico: status codes corretos (200, 201, 400, 401, 404, 500), estrutura do response (schema validation), dados retornados, headers, tempo de resposta, e comportamento com dados inválidos. Uso ferramentas como Postman para testes manuais e exploratórios, e frameworks como RestAssured, Supertest ou requests do Python para automação. Também testo cenários de autenticação, rate limiting, paginação, e validação de contratos.",
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
            modelAnswer: "Estruturaria em camadas: no commit, rodam testes unitários e linters (feedback em minutos). Em seguida, testes de integração e API (validam contratos entre serviços). Antes do deploy para staging, testes E2E automatizados dos fluxos críticos. Em staging, testes de performance e segurança. Implementaria quality gates: o pipeline falha se cobertura cair, se testes falharem, ou se vulnerabilidades críticas forem detectadas. Também incluiria smoke tests pós-deploy em produção.",
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
            tip: "Mencione ferramentas, tipos de teste e métricas específicas",
            modelAnswer: "Tenho experiência com JMeter e k6 para testes de carga. As métricas principais que monitoro são: tempo de resposta (p50, p90, p99 - não apenas média), throughput (requisições por segundo), taxa de erro sob carga, e uso de recursos (CPU, memória). Tipos de teste: load test (carga esperada), stress test (além do limite), spike test (picos repentinos), soak test (carga prolongada). Sempre defino baselines e SLOs antes de testar para ter critérios objetivos de sucesso.",
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
            modelAnswer: "Começaria mapeando os testes de regressão atuais e priorizando automação por: frequência de execução, criticidade do fluxo, tempo gasto manualmente, e estabilidade da funcionalidade. Implementaria a pirâmide de testes: base sólida de testes unitários (rápidos, baratos), camada de integração/API (validam contratos), e topo com E2E apenas para fluxos críticos. Integraria ao CI/CD para execução automática em cada PR. Usaria paralelização para reduzir tempo de execução. Implementaria reports claros com métricas de cobertura e tendências. O resultado esperado: redução de 70% no tempo de regressão, feedback em minutos ao invés de horas, e liberação do time para testes exploratórios de maior valor.",
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
            question: "Quais são os principais tipos de vulnerabilidades de segurança que você testa? Conhece o OWASP Top 10?",
            tip: "Mencione vulnerabilidades específicas e como testá-las",
            modelAnswer: "Sim, o OWASP Top 10 é minha referência principal. As vulnerabilidades que mais testo são: 1) Injection (SQL, NoSQL, LDAP) - testo inserindo payloads maliciosos em campos de entrada como ' OR '1'='1. 2) Broken Authentication - verifico políticas de senha, session management, logout efetivo. 3) XSS (Cross-Site Scripting) - insiro scripts como <script>alert('xss')</script> em campos de texto. 4) IDOR (Insecure Direct Object Reference) - altero IDs em URLs para acessar dados de outros usuários. 5) Security Misconfiguration - verifico headers de segurança, mensagens de erro expostas. Uso ferramentas como OWASP ZAP, Burp Suite para testes automatizados e manuais de segurança.",
            keyPoints: [
                "OWASP Top 10 como referência",
                "SQL Injection: payloads em campos de entrada",
                "XSS: scripts maliciosos em inputs",
                "IDOR: manipulação de IDs para acesso indevido",
                "Ferramentas: OWASP ZAP, Burp Suite",
                "Verificar headers de segurança e configurações"
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
            modelAnswer: "Acompanho métricas em diferentes dimensões: 1) Eficácia dos testes - bugs encontrados por fase (quanto mais cedo, melhor), taxa de escape (bugs em produção), cobertura de requisitos. 2) Eficiência - tempo de execução da suíte, taxa de automação, tempo médio para testar uma feature. 3) Qualidade do código de teste - taxa de flakiness, manutenibilidade, tempo de fix de testes quebrados. 4) Processo - lead time de bugs (tempo até correção), densidade de defeitos por módulo, tendência de bugs ao longo do tempo. Uso essas métricas para: identificar áreas problemáticas (módulos com mais bugs), justificar investimento em automação (ROI), melhorar estimativas, e mostrar valor do QA para stakeholders. Apresento dashboards mensais com tendências.",
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
            modelAnswer: "Primeiro, avalio a severidade e impacto do bug: afeta funcionalidade crítica? Quantos usuários seriam impactados? Existe workaround? Documento o bug com evidências claras e comunico imediatamente ao PO e tech lead com minha análise de risco. Apresento opções: adiar o lançamento, lançar com o bug conhecido (se for baixo impacto) com fix planejado, ou fazer hotfix antes do lançamento se for possível no prazo. A decisão final é do negócio, mas meu papel é garantir que decidam com informação completa.",
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
            modelAnswer: "Primeiro, busco informações: converso com o PO, dev que implementou, ou stakeholders para entender a intenção. Analiso o código ou PRs se possível. Depois, uso testes exploratórios baseados em heurísticas: o que um usuário esperaria? Quais são os edge cases óbvios? Como sistemas similares funcionam? Documento o que descubro e valido com o time. Enquanto testo, crio a documentação que faltava - transformando o teste em especificação. Também reporto a falta de documentação como risco de processo.",
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
            modelAnswer: "Não tentaria resolver tudo de uma vez. Primeiro, analisaria onde estão os maiores riscos - funcionalidades críticas sem cobertura. Priorizaria automação das áreas de maior risco e maior frequência de bugs. Implementaria uma política de 'não piorar': todo código novo deve ter testes. Definiria metas incrementais realistas (aumentar 5% por sprint). Mostraria o valor ao time com métricas: bugs encontrados por testes, tempo economizado em regressão. Gradualmente, a cultura de testes melhora.",
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
            modelAnswer: "Não tento testar tudo sozinho - isso não escala. Minha estratégia: capacito os devs para escreverem testes e fazerem self-review, defino checklists de qualidade para PRs, implemento automação para regressão (liberando meu tempo), priorizo minha atuação em áreas de maior risco e complexidade, faço testes exploratórios onde agregar mais valor. Também negocio com o time: se entrar muito trabalho, discutimos prioridades ou aceitamos riscos documentados. Meu papel vira mais de 'quality coach' do que 'testador de tudo'.",
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
            modelAnswer: "Primeiro, assumo responsabilidade sem ficar na defensiva - bugs escapam, faz parte. Priorizo ajudar a resolver: reproduzo o bug, documento, e apoio o fix. Depois, faço análise de causa raiz: por que não pegamos? Faltou cenário no teste? Dados diferentes? Condição de ambiente? Com base nisso, melhoro: adiciono o cenário que faltou à suíte de testes, atualizo a estratégia se necessário. Compartilho o aprendizado com o time como retrospectiva, não como culpa. Todo bug escapado é oportunidade de melhorar o processo.",
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
            modelAnswer: "Estruturaria uma abordagem sistemática: 1) Coletar dados - reunir todos os reports, logs, horários de ocorrência, ambiente, dados de entrada, padrões de uso. 2) Análise de padrões - buscar correlações (horário, carga, dados específicos, sequência de ações). 3) Hipóteses - listar possíveis causas: race condition, memory leak, cache, dados corrompidos, timeout. 4) Reprodução controlada - criar ambiente isolado e testar cada hipótese sistematicamente. 5) Instrumentação - adicionar logs detalhados, monitoramento de recursos, tracing. 6) Testes de estresse - executar cenários em loop para aumentar probabilidade de reprodução. 7) Documentar tudo - mesmo tentativas que falharam ajudam a entender o problema.",
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
            modelAnswer: "Gestão de ambientes é crítica para testes confiáveis. Minha abordagem: 1) Paridade com produção - usar Infrastructure as Code (Terraform, Docker) para garantir configurações idênticas, mesmas versões de serviços e dependências. 2) Dados de teste - estratégia de data masking para dados de produção sanitizados, geradores de massa de dados para cenários específicos, refresh periódico. 3) Isolamento - ambientes dedicados por propósito (dev, QA, staging, performance), evitar interferência entre times. 4) Estabilidade - monitoramento da saúde do ambiente, processo de reset/restore rápido, documentação de dependências externas e mocks quando necessário. 5) Governança - controle de acesso, log de mudanças, ownership claro. Ambientes instáveis geram flakiness e perda de confiança nos testes.",
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
            modelAnswer: "Sigo várias fontes: blogs como Ministry of Testing, Test Automation University para cursos gratuitos, podcasts como Test Guild. No LinkedIn sigo profissionais como Angie Jones, Alan Richardson. Participo de comunidades locais de QA e meetups. Pratico em projetos pessoais - tenho um repo onde experimento ferramentas novas. Também leio livros clássicos como 'Lessons Learned in Software Testing'. Tento dedicar pelo menos 2 horas por semana para aprendizado estruturado, além de aprender no dia a dia no trabalho.",
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
            modelAnswer: "Nos próximos 5 anos, quero me aprofundar em [automação/performance/liderança - escolha seu foco]. Gostaria de liderar iniciativas de qualidade, talvez como QA Lead ou Quality Engineer Senior. Também me interesso por compartilhar conhecimento - seja mentorando pessoas mais juniores ou palestrando em eventos da área. Quero estar em uma posição onde influencio a cultura de qualidade da organização, não apenas executo testes. Continuo aberto a onde o caminho me levar, mas sempre focado em qualidade de software.",
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
            modelAnswer: "Vocês deveriam me contratar porque combino experiência técnica sólida com habilidades de comunicação e visão de negócio. Tenho [X anos] de experiência em [áreas relevantes para a vaga], e já [mencione uma conquista relevante]. Além das skills técnicas, trago uma mentalidade de melhoria contínua - não apenas encontro bugs, mas ajudo a preveni-los melhorando processos. Sou colaborativo e me adapto bem a times ágeis. Estou genuinamente interessado nos desafios de [empresa/produto] e acredito que posso agregar valor rapidamente.",
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
            modelAnswer: "Em times ágeis, QA é parte integral do time, não uma fase separada. Minha participação: 1) Planning - ajudo a estimar considerando esforço de teste, identifico riscos, questiono critérios de aceite incompletos. 2) Refinement - valido se histórias são testáveis, sugiro cenários de teste, ajudo a quebrar histórias grandes. 3) Daily - comunico status dos testes, bloqueios, e coordeno com devs. 4) Durante a sprint - testo features assim que ficam prontas (não espero o final), automatizo em paralelo, faço pair testing com devs. 5) Review - demonstro funcionalidades testadas, mostro edge cases cobertos. 6) Retrospectiva - trago métricas de qualidade, sugiro melhorias de processo. Em Kanban, foco em limitar WIP e manter fluxo contínuo de validação.",
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
