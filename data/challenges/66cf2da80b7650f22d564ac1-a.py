dados_historicos = [
    [int(input()), int(input()), int(input())],
    [int(input()), int(input()), int(input())]
]
transposta = [[dados_historicos[j][i] for j in range(2)] for i in range(3)]
for linha in transposta:
    print(linha)
