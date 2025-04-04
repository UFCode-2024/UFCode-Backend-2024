# Matriz 2x2
matriz_a = [
    [int(input()), int(input())],
    [int(input()), int(input())]
]

# Matriz 2x3
matriz_b = [
    [int(input()), int(input()), int(input())],
    [int(input()), int(input()), int(input())]
]

# Calculando o produto das matrizes
resultado = [[sum(matriz_a[i][k] * matriz_b[k][j] for k in range(2)) for j in range(3)] for i in range(2)]

# Exibindo a matriz resultado
for linha in resultado:
    print(linha)
