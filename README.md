# Projeto Interdisciplinar II - Sistemas de Informação ESPM

<p align="center">
    <a href="https://www.espm.br/cursos-de-graduacao/sistemas-de-informacao/"><img src="https://raw.githubusercontent.com/tech-espm/misc-template/main/logo.png" alt="Sistemas de Informação ESPM" style="width: 375px;"/></a>
</p>

# [Ecosense]()

### 2024-02

## Integrantes
- [Alexandre Martinelli](https://github.com/alexandremartinelli11/)
- [Guilherme Orlandi](https://github.com/carrico05/)
- [Hugo Ferraz](https://github.com/z-hugo-ferraz/)
- [Julia Biagio](https://github.com/juliabiagio/)
- [Luiz Felipe Pimenta](https://github.com/PimentaBrrt/)
- [Theo Gaspar](https://github.com/tigasparzin/)
- [Ycaro Campovilla](https://github.com/Ycakraft/)

## Descrição do Projeto

Notando a falta de conscientização da população geral brasileira em relação às matrizes energéticas e à importância que tem a produção de energia limpa para o futuro, o nosso grupo, após uma sessão de Brainstorming, decidiu realizar um site descritivo com o objetivo final de informar dados relevantes em relação ao tema, como a principal fonte de energia de cada Estado brasileiro, a quantidade de carbono emitida no país e em cada município e fontes de energia sustentáveis potenciais para o Brasil. Contudo, quando começamos o desenvolvimento o projeto, pensamos que é interessante tornar nosso site um ambiente seguro para discutir o tema no formato de fórums e realizar postagens, tornando-o, também, interativo. É importante salientar que haverão políticas bem estabelecidas que limitarão os usuários para evitar temas sensíveis e indesejados para o propósito do nosso site.

# Detalhes de Configuração

Para funcionar corretamente, devem ser criados os seguintes arquivos/pastas nos caminhos especificados, com o conteúdo especificado:

- O arquivo `.env` deve ser criado em `/`, com o conteúdo abaixo:
```
app_localIp=0.0.0.0
app_port=3000
app_root=
# Não pode terminar com barra /
app_urlSite=http://localhost:3000
app_cookie=[NOME DO COOKIE]
app_cookieSecure=0
app_staticFilesDir=public
app_disableStaticFiles=0
app_sqlConfig_connectionLimit=30
app_sqlConfig_waitForConnections=1
app_sqlConfig_charset=utf8mb4
app_sqlConfig_host=localhost
app_sqlConfig_port=3306
app_sqlConfig_user=[USUÁRIO DO BANCO]
app_sqlConfig_password=[SENHA DO USUÁRIO DO BANCO]
app_sqlConfig_database=[NOME DO BANCO]
app_usuarioSenhaPadrao=[SENHA PADRÃO PARA NOVOS USUÁRIOS]
app_usuarioHashSenhaPadrao=[HASH DA SENHA PADRÃO PARA NOVOS USUÁRIOS]
# Não utilizar números > 0x7FFFFFFF pois os XOR resultarão em -1
app_usuarioHashId=[HASH DE 32 BITS PARA O ID EM HEXADECIMAL, COMO 0x1234ABCD]
```

- A pasta `dados` deve ser criada em `/`
- A pasta `imagens` dee ser criada em `/dados`

# Licença

Este projeto é licenciado sob a [MIT License](https://github.com/tech-espm/misc-template/blob/main/LICENSE).

<p align="right">
    <a href="https://www.espm.br/cursos-de-graduacao/sistemas-de-informacao/"><img src="https://raw.githubusercontent.com/tech-espm/misc-template/main/logo-si-512.png" alt="Sistemas de Informação ESPM" style="width: 375px;"/></a>
</p>