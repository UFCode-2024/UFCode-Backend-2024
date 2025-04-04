# Matriz 3x3
imagem = [
    [int(input()), int(input()), int(input())],
    [int(input()), int(input()), int(input())],
    [int(input()), int(input()), int(input())]
]

# Transpondo a matriz
transposta = [[imagem[j][i] for j in range(3)] for i in range(3)]

# Exibindo a matriz transposta
for linha in transposta:
    print(linha)
