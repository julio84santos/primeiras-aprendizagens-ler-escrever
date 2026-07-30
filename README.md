# Primeiras Aprendizagens — Ler e Escrever

Landing page estática da EduRecorta, pronta para GitHub e Vercel.

## Publicar no GitHub

1. Crie um repositório novo no GitHub.
2. Envie todos os ficheiros desta pasta, mantendo a pasta `assets`.
3. Confirme que `index.html` está na raiz do repositório.

## Publicar na Vercel

1. Entre em https://vercel.com e escolha **Add New → Project**.
2. Importe o repositório do GitHub.
3. Em **Framework Preset**, escolha **Other**.
4. Não informe comando de compilação.
5. Mantenha o diretório de saída como `.` e clique em **Deploy**.

## Ligar o checkout da Hotmart

Abra `config.js` e cole os quatro links das páginas de pagamento:

```js
window.EDURECORTA_OFFERS = {
  lerEscrever: "https://pay.hotmart.com/LINK-1",
  pensarContar: "https://pay.hotmart.com/LINK-2",
  coresFormasMedidas: "https://pay.hotmart.com/LINK-3",
  colecaoCompleta: "https://pay.hotmart.com/LINK-4"
};
```

Enquanto um campo estiver vazio, o respetivo botão informa que o checkout está em preparação.
