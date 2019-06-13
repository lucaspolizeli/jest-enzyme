## JEST-ENZYME

- Se após executar o comando `npm test` você selecionar a opção `a`, ele irá executar todos os testes. Após isso é possível executar os testes apenas para os arquivos que forem modificados, basta apertar `w`, e depois `o`.

- Para instalar o enzyme, e integrar com o jest, é preciso instalar alguns pacotes. Para isso, execute os seguintes comandos:

```
npm install ajv
npm install --save-dev enzyme enzyme-adapter-react-16
```

- O enzyme serve para criar um DOM Virtual.

- O enzyme precisa ser configurado para ser executado no React 16 através do EnzymeAdapter, para isso, usamos o código abaixo:
  js

```
Enzyme.configure({ adapter: new EnzymeAdapter() });
```

- `shallow`: renderiza apenas o componente que foi selecionado.

- `mount`: renderiza o component que foi selecionado e seus filhos.

- Quando um componente é renderizado pelo enzyme, ele retorna algo diferente de `undefined` ou `null`. Para verificar se algo é verdadeiro, se usa a função do jest `.toBeTruthy()`.

- Tipos de testes:

  - Teste unitário: Testa partes específicas do código, como funções e outros.
  - Teste de Integração: Testa o conjunto de partes do código, ou seja, uma funcionalidade inteira, com todas suas etapas.
  - Teste End-To-End: Teste de como o usuário intege com o aplicativo.

- Primeiro se mapeia todas as funcionalidades existentes, depois você escreve cada teste em específico.
