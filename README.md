# Simulado-QA

Um pequeno aplicativo de simulado em HTML/JavaScript/CSS para estudar perguntas e respostas. Fornece modos de quiz, flashcards e modo entrevista. Projeto leve e sem dependências — basta abrir `index.html` ou servir a pasta via um servidor HTTP simples.

## Visão geral

- Tipo: Aplicação web estática (front-end apenas).
- Tecnologias: HTML, CSS, JavaScript.
- Objetivo: Praticar perguntas tipo QA (questões de múltipla escolha, flashcards, revisão e modo entrevista).

## Estrutura de arquivos

- `index.html` - página principal do app e ponto de entrada.
- `style.css` - estilos visuais e layout do aplicativo.
- `script.js` - lógica da aplicação (navegação entre telas, fluxo do quiz, UI interactions).
- `questions.js` - base de dados de perguntas/respostas (onde adicionar/editar questões).

> Observação: os nomes acima correspondem ao layout do projeto presente na raiz do repositório.

## Como rodar (modo rápido)

Você tem duas opções simples:

1) Abrir localmente (não recomendado se seu navegador bloquear requisições locais para módulos):

- Clique duas vezes em `index.html` para abrir no navegador.

2) Servir a pasta com um servidor HTTP simples (recomendado):

No Linux/macOS/Windows com Python instalado, rode no terminal na pasta do projeto:

```bash
python3 -m http.server 8000
```

Depois abra no navegador:

```
http://localhost:8000
```

(Se você usa Node.js, pode usar `npx http-server .` ou outra ferramenta equivalente.)

## Como editar perguntas

As questões ficam em `questions.js`. O formato típico (exemplo) é:

```js
{
  id: 1,
  category: 'JavaScript',
  question: 'O que faz o método Array.prototype.map?',
  options: ['Itera e transforma cada elemento', 'Filtra elementos', 'Ordena o array', 'Reduz o array a um valor'],
  answerIndex: 0,
  explanation: 'O map() cria um novo array com os resultados da chamada de uma função para cada elemento.'
}
```

- `options` é um array de strings com alternativas.
- `answerIndex` é o índice (0-based) da alternativa correta.
- `explanation` (opcional) contém a justificativa mostrada ao revisar a questão.

Adicione, modifique ou remova objetos no array de `questions.js` para manter o conteúdo atualizado.

## Modos suportados

- Quiz (múltipla escolha) — fluxo com progresso, pontuação e feedback imediato.
- Flashcards — revele respostas e auto-avaliação ("soube" / "não soube").
- Modo entrevista — caixa de texto para respostas discursivas e revisão com pontos-chave.
- Tela de resultados e revisão com explicações e estatísticas.

## Personalização e desenvolvimento

- Estilos: edite `style.css` para alterar tema, cores e layout.
- Comportamento: `script.js` contém a lógica de fluxo; procure por funções que controlam navegação entre "telas" (classes `.screen`) e handlers de respostas.
- Internacionalização: os textos estão no HTML/JS; para suportar múltiplos idiomas, extrair strings para um arquivo de tradução é uma boa melhoria.

## Testes rápidos (manuais)

- Verifique a navegação entre telas escolhendo uma categoria e iniciando o quiz.
- Selecione alternativas e confirme que o feedback e a pontuação aparecem.
- Teste o modo flashcard, reveal e autoavaliação.

## Próximos passos sugeridos

- Adicionar persistência local (localStorage) para salvar progresso e histórico.
- Implementar import/export de perguntas em JSON para facilitar edição em massa.
- Adicionar testes unitários (p. ex. com Jest) para validar transformação de dados e pontuação.
- Tornar responsividade e acessibilidade mais robustas (aria-labels, foco por teclado).

## Contribuição

Contribuições são bem-vindas. Para colaborar:

1. Fork e clone o repositório.
2. Crie uma branch descritiva: `feature/nova-questao` ou `fix/bug-xyz`.
3. Faça commits claros e abertos a revisão.
4. Abra um pull request descrevendo a mudança.

