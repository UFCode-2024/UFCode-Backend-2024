linhas = 3
colunas = 2

# Inicializando a matriz para o terreno
terreno = [[0 for _ in range(colunas)] for _ in range(linhas)]

# Preenchendo a matriz com os tipos de plantações
for i in range(linhas):
    for j in range(colunas):
        terreno[i][j] = int(input())

# Exibindo o terreno com as plantações
for linha in terreno:
    print(linha)
