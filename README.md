Nome do Projeto: Clinic App. 


1. INTRODUÇÃO:

Este projeto é uma aplicação web composta por um front-end desenvolvido em Angular e um back-end utilizando Django Rest Framework (DRF). Ele permite o gerenciamento de funcionários, incluindo funcionalidades como listagem, criação, edição e exclusão de registros. O banco de dados utilizado é o PostgreSQL.

2. TECNOLOGIAS UTILIZADAS:

FRONT-END:
Angular 18.2.0
TailwindCSS
Node.js
Express.js (para renderização SSR - Server-Side Rendering)

BACK-END:
Django 4.x
Django Rest Framework
PostgreSQL

3. ESTRUTURA DE PASTAS.

frontend/
├── src/
│   ├── app/                  # Componentes Angular
│   ├── assets/               # Arquivos estáticos
│   ├── environments/         # Configurações de ambiente
│   ├── styles.css            # Estilos globais
│   └── main.ts               # Arquivo principal da aplicação Angular
├── angular.json              # Configuração Angular CLI
├── package.json              # Dependências e scripts NPM
└── tsconfig.json             # Configuração TypeScript


backend/
├── employees/
│   ├── admin.py              # Configuração do painel admin do Django
│   ├── apps.py               # Configuração da aplicação Django
│   ├── models.py             # Modelos de dados
│   ├── serializers.py        # Serializadores para API
│   ├── tests.py              # Testes unitários
│   ├── urls.py               # Rotas
│   └── views.py              # Lógica de negócio
├── manage.py                 # Ferramenta CLI do Django
└── db.sqlite3                # Banco de dados SQLite (substituído por PostgreSQL em produção)

4. BANCO DE DADOS:

A aplicação utiliza PostgreSQL como banco de dados principal. Abaixo estão os modelos implementados no back-end:

Campo	                  Tipo                   Descrição
                 	               
cd_employee	            AutoField	      Código único do funcionário
nm_employee	            CharField	      Nome do funcionário
ds_email_employee	    TextField	      Email do funcionário
ds_pass_employee	    CharField	      Senha do funcionário (criptografada)
nm_position	            CharField	      Cargo do funcionário


5. CONFIGURAÇÃO DO AMBIENTE:

Requisitos:

    - Node.js e npm ou yarn (para o front-end)
    - Python 3.x e pip (para o back-end)
    - PostgreSQL (para o banco de dados)

Passos de Instalação:

5.1 Front-end:

1 - Acesse a pasta frontend.
No bash: 
    comando: cd frontend.

2 - instale as dependências.
No bash: 
    comando: npm install ou yarn install.

3 - inicie o servidor.
No bash:
    comando: npm start ou yarn start.

5.2 Back-end:

1 - Crie um ative um ambiente virtual:
No bash:
    comando: python -m venv venv
             source venv/bin/activate  # (Linux/Mac)
             venv\Scripts\activate     # (Windows)
             
2 - Instale as dependências do projeto:
No bash:
    comando: pip install -r requirements.txt

3 - Configure o banco de dados no settings.py:
No bash:
    comando: 
    
    DATABASES = {
    'default': {
        'ENGINE': 'django.db.backends.postgresql',
        'NAME': 'seu_banco',
        'USER': 'seu_usuario',
        'PASSWORD': 'sua_senha',
        'HOST': 'localhost',
        'PORT': '5432',
    }
}

4 - Realize as migrações: 
No bash:
    comando: python manage.py migrate

5 - inicie o servidor:
No bash: 
    comando: python manage.py runserver

6. ROTAS DA API:

Listagem de Funcionários:
GET /employees/

Detalhes de um Funcionário:
GET /employee/<int:pk>

Criação de Funcionário:
POST /employees/

Atualização de Funcionário:
PUT ou PATCH /employee/<int:pk>

Exclusão de Funcionário:
DELETE /employee/<int:pk>

7. Testes

Front-end:

Para executar os testes unitários:

No bash: 
    comando: npm test

Back-end:

Para rodar os testes do Django:

No bash:
    comando: python manage.py test

8. CONSIDERAÇÕES FINAIS:

Este projeto combina tecnologias modernas para fornecer uma aplicação eficiente e escalável. É essencial garantir que as dependências estejam sempre atualizadas e que a documentação evolua conforme o projeto cresce.




