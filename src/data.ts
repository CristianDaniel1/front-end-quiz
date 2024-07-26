import htmlImg from './assets/html-icon.svg';
import cssImg from './assets/css-icon.svg';
import javascriptImg from './assets/javascript-icon.svg';
import reactImg from './assets/react-icon.svg';

import github from './assets/github-icon.svg';
import linkedin from './assets/linkedin.svg';
import email from './assets/email.png';

import goldenCup from './assets/golden-cup.png';
import silverCup from './assets/silver-cup.png';
import bronzeCup from './assets/bronze-cup.png';

export const allQuizzes = [
  {
    quizId: 'html',
    questions: [
      {
        question: 'Qual é a tag correta para o maior título em HTML?',
        options: ['<h1>', '<header>', '<h6>', '<head>'],
        answer: '<h1>',
      },
      {
        question:
          'Qual atributo HTML é usado para definir um link em um novo destino?',
        options: ['href', 'target', 'src', 'link'],
        answer: 'target',
      },
      {
        question:
          'Qual é o elemento HTML correto para inserir uma linha horizontal?',
        options: ['<hr>', '<line>', '<tr>', '<br>'],
        answer: '<hr>',
      },
      {
        question: 'Qual é a tag HTML correta para criar uma lista numerada?',
        options: ['<ul>', '<list>', '<ol>', '<dl>'],
        answer: '<ol>',
      },
      {
        question:
          'Qual é o atributo HTML usado para definir um texto alternativo para uma imagem?',
        options: ['title', 'alt', 'src', 'longdesc'],
        answer: 'alt',
      },
      {
        question: 'Como você faz um comentário em HTML?',
        options: [
          '<!-- Este é um comentário -->',
          '// Este é um comentário',
          "' Este é um comentário",
          '<comment> Este é um comentário </comment>',
        ],
        answer: '<!-- Este é um comentário -->',
      },
      {
        question: 'Qual é o elemento HTML correto para a quebra de linha?',
        options: ['<lb>', '<break>', '<br>', '<newline>'],
        answer: '<br>',
      },
      {
        question:
          'Qual é a tag HTML usada para definir um item em uma lista não ordenada?',
        options: ['<list>', '<item>', '<li>', '<ul>'],
        answer: '<li>',
      },
      {
        question: 'Qual é a tag HTML para definir um parágrafo?',
        options: ['<p>', '<para>', '<pg>', '<paragraph>'],
        answer: '<p>',
      },
      {
        question: 'Qual é a tag HTML correta para adicionar uma imagem?',
        options: ['<image>', '<img>', '<pic>', '<picture>'],
        answer: '<img>',
      },
    ],
  },
  {
    quizId: 'css',
    questions: [
      {
        question:
          'Qual é a propriedade CSS usada para alterar a cor de fundo de um elemento?',
        options: ['color', 'background-color', 'bgcolor', 'background'],
        answer: 'background-color',
      },
      {
        question:
          'Qual é a sintaxe correta para adicionar uma cor de fundo em CSS?',
        options: [
          'background-color: red;',
          'color: red;',
          'bgcolor: red;',
          'background: red;',
        ],
        answer: 'background-color: red;',
      },
      {
        question: 'Como você adiciona um comentário em um arquivo CSS?',
        options: [
          '// Este é um comentário',
          '<!-- Este é um comentário -->',
          "' Este é um comentário",
          '/* Este é um comentário */',
        ],
        answer: '/* Este é um comentário */',
      },
      {
        question: 'Qual é a propriedade CSS usada para alterar a cor do texto?',
        options: ['text-color', 'font-color', 'color', 'text-style'],
        answer: 'color',
      },
      {
        question:
          'Como você seleciona todos os elementos `<p>` em um arquivo CSS?',
        options: ['p { }', '.p { }', '#p { }', 'all.p { }'],
        answer: 'p { }',
      },
      {
        question:
          'Qual é a propriedade CSS usada para alterar o tamanho da fonte?',
        options: ['font-size', 'text-size', 'font-style', 'text-style'],
        answer: 'font-size',
      },
      {
        question: 'Como você faz um texto ficar em negrito usando CSS?',
        options: [
          'font-weight: bold;',
          'font-style: bold;',
          'text-weight: bold;',
          'text-style: bold;',
        ],
        answer: 'font-weight: bold;',
      },
      {
        question: 'Qual é a propriedade CSS usada para centralizar um texto?',
        options: ['text-align', 'text-center', 'align', 'center'],
        answer: 'text-align',
      },
      {
        question: "Como você seleciona um elemento com o id 'header' em CSS?",
        options: ['#header', '.header', 'header', '*header'],
        answer: '#header',
      },
      {
        question:
          'Qual é a propriedade CSS usada para adicionar espaços internos ao redor do conteúdo de um elemento?',
        options: ['padding', 'margin', 'border', 'spacing'],
        answer: 'padding',
      },
    ],
  },
  {
    quizId: 'javascript',
    questions: [
      {
        question: 'Qual das opções abaixo NÃO é um tipo de dado em JavaScript?',
        options: ['String', 'Number', 'Boolean', 'Character'],
        answer: 'Character',
      },
      {
        question: "Qual é o resultado de '2' + 2 em JavaScript?",
        options: ['4', '22', 'NaN', 'undefined'],
        answer: '22',
      },
      {
        question: 'Como você cria uma função em JavaScript?',
        options: [
          'function minhaFuncao() {}',
          'function: minhaFuncao() {}',
          'minhaFuncao function() {}',
          'function = minhaFuncao() {}',
        ],
        answer: 'function minhaFuncao() {}',
      },
      {
        question: "Como você chama uma função chamada 'minhaFuncao'?",
        options: [
          'minhaFuncao()',
          'call minhaFuncao',
          'chamar minhaFuncao()',
          'call function minhaFuncao',
        ],
        answer: 'minhaFuncao()',
      },
      {
        question:
          'Qual a sintaxe correta para referenciar um arquivo externo de JavaScript?',
        options: [
          "<script src='arquivo.js'></script>",
          "<script href='arquivo.js'></script>",
          "<script ref='arquivo.js'></script>",
          "<script link='arquivo.js'></script>",
        ],
        answer: "<script src='arquivo.js'></script>",
      },
      {
        question: 'Qual é o operador de atribuição correto em JavaScript?',
        options: ['=', '==', '===', '<='],
        answer: '=',
      },
      {
        question: 'Como você escreve uma condição IF em JavaScript?',
        options: ['if i == 5 then', 'if (i == 5)', 'if i = 5', 'if i == 5'],
        answer: 'if (i == 5)',
      },
      {
        question: 'Qual método converte uma string para letras maiúsculas?',
        options: [
          'toUpperCase()',
          'toUpper()',
          "changeCase('upper')",
          'upperCase()',
        ],
        answer: 'toUpperCase()',
      },
      {
        question: 'Como você adiciona um comentário em JavaScript?',
        options: [
          '// Este é um comentário',
          '<!-- Este é um comentário -->',
          '# Este é um comentário',
          "' Este é um comentário",
        ],
        answer: '// Este é um comentário',
      },
      {
        question:
          'Qual método é usado para adicionar um ou mais elementos ao final de um array?',
        options: ['push()', 'pop()', 'shift()', 'unshift()'],
        answer: 'push()',
      },
    ],
  },
  {
    quizId: 'react',
    questions: [
      {
        question:
          'Qual é o método correto para criar um componente em classe em React?',
        options: [
          'class MyComponent extends React.Component {}',
          'function MyComponent() {}',
          'const MyComponent = () => {}',
          'createComponent(MyComponent) {}',
        ],
        answer: 'class MyComponent extends React.Component {}',
      },
      {
        question:
          'Qual hook é usado para adicionar estado a um componente funcional?',
        options: ['useState', 'useEffect', 'useContext', 'useReducer'],
        answer: 'useState',
      },
      {
        question:
          'Qual é o comando correto para criar um novo projeto React usando Create React App?',
        options: [
          'npx create-react-app my-app',
          'npm install create-react-app',
          'npm create-react-app my-app',
          'npx create-react-project my-app',
        ],
        answer: 'npx create-react-app my-app',
      },
      {
        question:
          'Qual hook é usado para realizar efeitos colaterais em componentes funcionais?',
        options: ['useState', 'useEffect', 'useContext', 'useReducer'],
        answer: 'useEffect',
      },
      {
        question: 'Como você passa dados para componentes filhos em React?',
        options: [
          'Usando props',
          'Usando state',
          'Usando context',
          'Usando hooks',
        ],
        answer: 'Usando props',
      },
      {
        question:
          'Qual é a função usada para atualizar o estado em componentes de classe?',
        options: ['setState', 'updateState', 'changeState', 'modifyState'],
        answer: 'setState',
      },
      {
        question: 'O que é JSX em React?',
        options: [
          'Uma extensão de sintaxe para JavaScript',
          'Uma nova linguagem de programação',
          'Uma ferramenta de construção',
          'Uma biblioteca de componentes',
        ],
        answer: 'Uma extensão de sintaxe para JavaScript',
      },
      {
        question: 'Como você pode aplicar estilos em um componente React?',
        options: [
          'Usando o atributo style',
          'Usando classes CSS',
          'Usando bibliotecas de estilo como styled-components',
          'Todas as opções',
        ],
        answer: 'Todas as opções',
      },
      {
        question: 'O que é um Fragment em React?',
        options: [
          'Um componente para agrupar elementos sem adicionar nós extras ao DOM',
          'Uma ferramenta para gerenciar estado',
          'Um tipo especial de props',
          'Uma biblioteca externa',
        ],
        answer:
          'Um componente para agrupar elementos sem adicionar nós extras ao DOM',
      },
      {
        question: 'Como você gerencia o estado global em uma aplicação React?',
        options: [
          'Usando Context API',
          'Usando Redux',
          'Usando MobX',
          'Todas as opções',
        ],
        answer: 'Todas as opções',
      },
    ],
  },
];

export const availableQuizzes = [
  {
    quiz: 'HTML',
    description: 'Você domina as tags e atributos de HTML? Faça o teste!',
    image: {
      icon: htmlImg,
      alt: 'icone de html',
    },
  },
  {
    quiz: 'CSS',

    description:
      'Conhece tudo o que precisa para estilizar os seus sites? Teste seu conhecimento de CSS',
    image: {
      icon: cssImg,
      alt: 'icone de css',
    },
  },
  {
    quiz: 'JavaScript',
    description: 'Veja se domina os métodos e sintaxe da linguagem JavaScript!',
    image: {
      icon: javascriptImg,
      alt: 'icone de javascript',
    },
  },
  {
    quiz: 'React',
    description:
      'Teste seu nível de React! Componentes, hooks e estados globais',
    image: {
      icon: reactImg,
      alt: 'icone de react',
    },
  },
];

export const links = [
  {
    img: linkedin,
    url: 'https://www.linkedin.com/in/cristiandaniel1',
    alt: 'Icone de linkedin',
  },
  {
    img: github,
    url: 'https://github.com/CristianDaniel1',
    alt: 'Icone de github',
  },
  {
    img: email,
    url: 'mailto:cristiandaniel.1050@gmail.com',
    alt: 'Icone de email',
  },
];

export const resultsCup = {
  goldenCup,
  silverCup,
  bronzeCup,
};
