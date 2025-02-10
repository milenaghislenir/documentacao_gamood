# a\) Introdução

## I\. Minimundo do projeto

> **Gamood**
>
> O sistema de aluguel de jogos por hora automatizado é implementado para gerenciar o uso de jogos da empresa Gamood, permitindo que os clientes façam reservas e pagamentos de maneira prática, rápida e autônoma. O sistema organiza as operações de aluguel de jogos, com três categorias de jogos e preços diferentes para cada uma. Dessa forma possuindo um **Cadastro de Jogos e Categorias**. O sistema é dividido em três categorias de jogos, sendo cada uma associada a uma faixa de preço diferente por hora:
>
> - **Categoria 1:** Jogos Simples – Preço por hora: R$ 20 (jogos de cartas)
>
> - **Categoria 2**: Jogos Intermediários – Preço por hora: R$ 40 (jogos de tabuleiro)
>
> - **Categoria 3:** Jogos Avançados – Preço por hora: R$ 60 (jogos que envolvam materiais eletrônicos, como banco imobiliário)
>
> O sistema mantém um cadastro de clientes, com informações pessoais e identificação única. Além disso, o sistema deve registrar o histórico financeiro, com controle de pagamentos. Cada cliente tem acesso ao sistema por meio de login e senha, com os dados: nome, CPF, endereço, telefone e e-mail.

> Os clientes acessam o portal para realizar reservas de jogos (previamente ou no local), seguindo os seguintes passos: escolher a categoria do jogo desejada, selecionar o horário e a data de reserva, e indicar o tempo de uso, em horas, para calcular o valor total. O sistema gera um boleto de pagamento com o valor calculado, que pode ser pago via PIX ou cartão. Após o pagamento, o sistema envia uma notificação para o cliente (via telefone e e-mail), confirmando a reserva do jogo por meio de um **ticket de acesso com qrcode** informando o horário e a data. Esse ticket também fica disponível para acesso na conta do cliente, na aba **minhas reservas**. Sobre a utilização, o cliente vai até o local do jogo no horário reservado e, ao chegar, apresenta seu ticket virtual para acessar a área. O sistema deve realizar atualização automática a cada jogo retirado para verificação de disponibilidade, após o término do uso do jogo, o sistema registra a devolução e libera o mesmo. O sistema também permite: cancelamento ou reagendamento de reservas (por parte do cliente) com a devida notificação para a empresa e atualização automática na plataforma. Cada cliente tem controle de seus pagamentos no sistema.

> Os administradores têm acesso a um painel para gerenciar e monitorar as reservas: visualizar reservas futuras, com dados sobre jogos, horários e valores. O sistema deve gerar relatórios financeiros para acompanhar o fluxo de receitas do sistema de aluguel. Também deve ajustar preços ou categorias de jogos, conforme necessidade.

> O cliente pode avaliar a experiência de uso e o feedback (incluindo a experiência com os jogos ofertados) é coletado para melhorar os serviços do clube. O cliente também pode consultar seu histórico de reservas, jogos e pagamentos feitos.

## 1\.1 Objetivo

O objetivo deste documento é fornecer uma visão geral do projeto **Gamood Club**. Ele descreve a finalidade do projeto, os principais stakeholders envolvidos, os requisitos principais, os diagramas de caso de uso, diagrama de classes e protótipos de possíveis telas para o sistema.

## 1\.2 Escopo

Este projeto visa desenvolver um sistema eficiente que terá como finalidade reservar horários para utilizar jogos, de forma fácil e autônoma, por parte dos próprios usuários. O sistema se destina aos usuários que irão realizar as reservas e aos administradores que irão acompanhar seus clientes.

## 1\.3 Público-alvo

Este documento destina-se a todas as partes interessadas envolvidas no desenvolvimento, implementação e uso do software Gamood Club. Isso inclui membros da equipe de desenvolvimento, gerentes de projeto, clientes, usuários finais e outras partes interessadas relevantes.