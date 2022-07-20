@echo off
cls
@echo.
@echo    ***********************************************
@echo    ***                                         ***
@echo    ***       APLICACAO BURGERS DELICIOUS!      ***
@echo    ***                                         ***
@echo    ***********************************************
@echo.
@echo Aguarde que irei configurar o projeto...

if not exist "backend/node_modules" (
  if not exist "frontend/node_modules" (
    @echo Configurando o frontend
    cd frontend
    start cmd /C npm install
    cd ..
    cls

    @echo Configurando o backend
    cd backend
    pause
    start cmd /C npm install
    pause
  )
)

pause > nul

cls
color 2
@echo FrontEnd e BackEnd configurado com sucesso. Vamos startar o projeto.
@echo Pressione qualquer tecla para iniciar o projeto.
pause > nul

cd frontend
start cmd /K npm start

cls
cd ../backend
npm start






