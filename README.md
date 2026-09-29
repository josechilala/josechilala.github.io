# José Chilala Jacinto — Portfólio

Portfólio profissional em português, construído com React, TypeScript e Vite. Apresenta atuação Full Stack com foco em back-end .NET, competências, experiência, formação e três projetos. O conteúdo profissional usa `Jose_Chilala_Curriculo_Atual.pdf` como fonte oficial, complementado pelo `Briefing_Codex_Portfolio_Jose_Chilala.docx`. Ambos estão preservados na raiz.

## Executar localmente

Requisito: Node.js 22.13+ ou 24 com npm.

```sh
npm install
npm run dev
```

Abra o endereço exibido pelo Vite, normalmente `http://localhost:5173`. No PowerShell com scripts bloqueados, use `npm.cmd` no lugar de `npm`; não é necessário alterar a política de execução.

```sh
npm run lint
npm run typecheck
npm run build
npm run preview
```

O build verifica TypeScript e gera `dist/`. O preview serve esse build localmente, normalmente em `http://localhost:4173`. `package-lock.json` fixa as versões instaladas; use `npm ci` para reproduzir a instalação.

## Organização

```text
src/
  components/    Header, ThemeToggle, Footer, links, títulos e galeria reutilizável
  sections/      Hero, About, Stack, Experience, Projects, Education, Contact
  data/          portfolio.ts: conteúdo profissional e configuração de imagens
  types/         Contratos de projeto e imagem
  assets/        Recursos importáveis pelos componentes
  styles/        Estilos globais e layouts responsivos
  App.tsx        Composição da página
public/
  theme.js       Tema inicial antes da renderização
  favicon.svg
  images/profile/
  images/projects/queueflow/application/
  images/projects/queueflow/commercial/
  images/projects/webapp-compras/
  images/projects/actdigital/
.github/workflows/deploy.yml
```

Uma única página, com navegação por âncoras, sem router e sem backend. Componentes recebem conteúdo tipado; dados editáveis ficam fora do layout. Dependências de produção: apenas React e React DOM. Vite, TypeScript, plugin React, tipos e ESLint são ferramentas de desenvolvimento. Os ícones são SVGs locais; não há biblioteca de ícones ou animações.

O design preserva composição, tipografia e espaçamentos da versão original. A identidade usa azul como destaque e superf?cies neutras nos dois temas. DM Sans e Manrope são carregadas pelo Google Fonts, com fallback para sans-serif se a rede não estiver disponível. O site tem link para pular ao conteúdo, foco visível, menu com estado acessível, links externos identificados, imagens com texto alternativo e respeito a `prefers-reduced-motion`.

## Temas Light / Dark

O seletor no Header usa botões nativos com `aria-pressed`. Na primeira visita, o tema acompanha `prefers-color-scheme`, inclusive se o sistema mudar durante a visita. Uma escolha explícita é salva em `localStorage`, na chave `portfolio-theme`, e passa a prevalecer. Mudanças nessa preferência são sincronizadas entre abas. Se o armazenamento estiver bloqueado, a escolha funciona durante a visita.

`public/theme.js` é executado no início do `<head>`, antes dos estilos e da montagem do React, para aplicar a preferência antes da primeira pintura. Ele também atualiza `color-scheme` e a cor do navegador. Para voltar à preferência do sistema, remova a chave `portfolio-theme` do armazenamento local e recarregue a página.

As cores estão centralizadas em variáveis no início de `src/styles/index.css`. Dark usa fundo `#0B1120`, seções `#111827`, superfícies `#151E2E` e texto `#F8FAFC`. Light usa fundo `#F8FAFC`, superfícies brancas e texto `#0F172A`. Links azuis são ajustados ao contraste de cada tema; botões usam azul `#2563EB` com texto branco. Os três placeholders dos projetos foram preservados, inclusive suas cores originais, conforme solicitado.

## Conteúdo e fontes

Resumo e apresentação foram condensados a partir do currículo, mantendo a IA generativa como área de aprofundamento. Experiências: Senior Sistemas (jun/2021–atual), JJ Suporte Técnico e Manutenção de Computadores (mai/2019–jun/2021), Stefanini (fev/2020–mai/2021) e StarCorp (abr/2017–fev/2019). Os períodos sobrepostos de JJ e Stefanini reproduzem o documento; não foram corrigidos por suposição.

A formação inclui UNASP Hortolândia (2019), Faculdade Metropolitana (2022) e CENES-SP (2023). O e-mail de contato é o informado no currículo. Telefone, métricas e cursos complementares não foram necessários à apresentação resumida.

A seleção de projetos é independente do currículo: QueueFlow, WebApp Compras e ActDigital.Account.Api. Seus dados técnicos originais foram preservados. Não se presume que o projeto chamado “Sistema de Compras Online” no CV corresponda ao repositório WebApp Compras, por isso sua stack não foi transferida.

## Foto profissional

O Hero usa a foto real `public/images/profile/jose-chilala.webp.jpg`, configurada em `profile.photo` em `src/data/portfolio.ts`, com alt text ?Jos? Chilala Jacinto?. O arquivo original foi preservado, sem filtros ou retoques. A imagem mant?m propor??o quadrada, enquadramento centralizado e largura responsiva, com `object-fit: cover`. O card tem bordas discretas e n?o tem inclina??o, nos dois temas.

Para substituir a foto futuramente, atualize `profile.photo` e confira as dimens?es intr?nsecas em `Hero.tsx`.

## Adicionar screenshots reais

Use as pastas de cada projeto em `public/images/projects/`. Não foram criadas telas fictícias: os painéis atuais são placeholders tipográficos identificados.

Em `src/data/portfolio.ts`, preencha `images` do projeto correspondente:

```ts
images: [
  {
    src: '/images/projects/queueflow/application/painel.webp',
    alt: 'Descreva com precisão o conteúdo da tela real',
    caption: 'Legenda da tela real',
    category: 'application',
  },
]
```

Cada projeto aceita várias imagens. A galeria exibe botões numerados quando há mais de uma; as imagens usam `object-fit: contain` para preservar toda a tela. Textos alternativos e legendas devem descrever a imagem efetivamente adicionada. Recomenda-se WebP ou AVIF otimizados, cerca de 1200 px de largura.

O QueueFlow tem pastas separadas para aplicação e site comercial. Use `category: 'commercial'` para imagens do site comercial. O campo opcional `commercialUrl` habilita o link somente quando houver uma URL confirmada. Não há link comercial presumido nesta versão.

## Conteúdo pendente

- PDF público em `public/documents/curriculo-jose-chilala.pdf`. Depois de adicioná-lo, configure `profile.resumeUrl` como `/documents/curriculo-jose-chilala.pdf`. O componente `ResumeLink` exibe o CTA no Hero e no Contato apenas quando esse campo estiver preenchido. O currículo interno não foi copiado nem exposto no build.

- Foto profissional e screenshots reais dos três projetos.
- URL e seleção das telas do site comercial do QueueFlow.
- Confirmação da stack específica do repositório WebApp Compras, caso deseje detalhá-la.

Não foram incluídos resultados, clientes, métricas de negócio, empregadores adicionais ou links de demonstração não confirmados.

## Conteúdo e cases técnicos

Sobre reúne três parágrafos curtos e quatro destaques em `highlights`: experiência, Full Stack, arquitetura e aprofundamento em IA. As seis categorias de `skills` combinam uma descrição concreta da área de atuação com as tecnologias. Experiência e Formação preservam os dados do currículo.

Cada projeto aceita `caseSections`, uma lista de `{ title, text }`, e `featured` para destaque visual. QueueFlow apresenta contexto, base tecnológica documentada e aplicação/site comercial, sem atribuir decisões arquiteturais não descritas no briefing. WebApp Compras apresenta contexto e jornada de compra assistida, sem presumir stack. ActDigital apresenta regras de domínio, arquitetura, repositório em memória thread-safe, testes, API e cliente React/Vite.

Além de `src`, `alt` e `caption`, as imagens aceitam `order` (ordem crescente; sem valor, preserva-se a ordem relativa no array), `width`, `height` e `category`. Use `application` para Aplicação e `commercial` para Site comercial. As categorias disponíveis geram filtros automaticamente; selecionar uma categoria volta à primeira imagem daquele grupo. Botões nativos permitem navegação por Tab e ativação por Enter/Espaço; a legenda anuncia a imagem selecionada. Não há rotação automática nem modal. As imagens usam carregamento lazy e uma área de altura reservada, com `object-fit: contain` para não cortar screenshots. Nenhuma imagem de teste faz parte dos dados ou do build público.

## SEO

Título, descrição, idioma, canonical e Open Graph textual estão em `index.html`. O favicon local usa as iniciais. Uma imagem de compartilhamento pode ser adicionada futuramente com `og:image` e URL absoluta; não há imagem social fictícia nesta versão.

## GitHub Pages — publicação futura

O repositório de destino é `josechilala.github.io`, servido em `/`. `vite.config.ts` usa `base: '/'`. As âncoras não criam rotas adicionais que causem 404 em refresh.

Quando decidir publicar:

1. Revise o conteúdo, faça commit e envie o projeto ao repositório por sua iniciativa.
2. No GitHub, abra **Settings → Pages → Build and deployment** e escolha **GitHub Actions**.
3. Em **Actions**, selecione **Publicar portfólio no GitHub Pages** e execute **Run workflow** na branch desejada.

O workflow é exclusivamente manual (`workflow_dispatch`), instala com `npm ci`, executa lint e build, envia `dist` e publica no ambiente `github-pages`. Não dispara em push. Nenhum commit, push ou deploy foi realizado durante a implementação.

## Validação

Lint, TypeScript e build de produção validados sem erros. Servidor de desenvolvimento iniciado e renderização conferida no Chrome headless em 1440, 768, 390 e 320 px, sem transbordamento horizontal nem exceções de JavaScript. Foram verificados destinos das âncoras, primeiro foco de teclado no link para pular ao conteúdo, abertura e fechamento do menu mobile e `prefers-reduced-motion`.

Na revisão de conteúdo e identidade visual, currículo e briefing foram lidos integralmente e confrontados com os dados da página. Os dois temas foram conferidos em 320, 390, 768 e 1440 px, incluindo persistência após recarregar e acompanhamento da preferência do sistema. O menu mobile também fecha com Escape e devolve o foco ao botão. Os projetos exibem “Ver código”; “Ver site” fica disponível quando `commercialUrl` for preenchida.

Lint: `npm run lint`. Tipos: `npm run typecheck`. Produção: `npm run build`. Após inserir imagens reais, revise os controles da galeria e o enquadramento da foto. Fontes externas são opcionais para a renderização. Essa conferência básica não substitui uma auditoria completa com leitores de tela.
