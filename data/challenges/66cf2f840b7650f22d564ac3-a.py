avaliacao = [
    [int(input()), int(input()), int(input()), int(input())],
    [int(input()), int(input()), int(input()), int(input())]
]
soma_etapas = [sum(avaliacao[i][j] for i in range(2)) for j in range(4)]
print(soma_etapas)
