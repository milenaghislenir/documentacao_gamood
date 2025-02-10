import { defineConfig } from 'vitepress';

// refer https://vitepress.dev/reference/site-config for details
export default defineConfig({
  lang: 'en-US',
  title: 'Documentação do Sistema - Gamood Club',
  description: 'Vite & Vue powered static site generator.',

  themeConfig: {
    nav: [
      { text: 'a) Introdução', link: '/a_introducao' },

      // {
      //   text: 'Dropdown Menu',
      //   items: [
      //     { text: 'Item A', link: '/item-1' },
      //     { text: 'Item B', link: '/item-2' },
      //     { text: 'Item C', link: '/item-3' },
      //   ],
      // },

      // ...
    ],
    search: {
      provider: 'local',
    },
    sidebar: [
      {
        items: [
          { text: 'Informações', link: '/info' },
          { text: 'a) Introdução', link: '/a_introducao' },
          {
            text: 'b) Desenvolvimento',
            items: [
              {
                text: 'I. Descrição do Projeto',
                link: '/bI_desenvolvimento',
              },
              {
                text: 'II. Principais Recursos e Funcionalidades',
                link: '/bII_desenvolvimento',
              },
              {
                text: 'III. Diagrama de Caso de Uso',
                link: '/bIII_desenvolvimento',
              },
              {
                text: 'IV. Diagrama de Classes',
                link: '/bIV_desenvolvimento',
              },
              {
                text: 'V. Protótipos de Telas',
                link: '/bV_desenvolvimento',
              },
              {
                text: 'VI. Cronograma e Entrega',
                link: '/bVI_desenvolvimento',
              },
              {
                text: 'VII. Riscos e Mitigação',
                link: '/bVII_desenvolvimento',
              },
              {
                text: 'VIII. Custos e Orçamento',
                link: '/bVIII_desenvolvimento',
              },
            ],
          },
          { text: 'c) Considerações finais', link: '/c_consideracoes' },
        ],
      },
    ],
  },
});
