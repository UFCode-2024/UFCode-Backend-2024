matriz_2x2_1 = [[int(input()), int(input())],[int(input()), int(input())]]
matriz_2x2_2 = [[int(input()), int(input())],[int(input()), int(input())]]
resultado = [[0, 0], [0, 0]]
for i in range(2):
    for j in range(2):
        resultado[i][j] = sum(matriz_2x2_1[i][k] * matriz_2x2_2[k][j] for k in range(2))
for linha in resultado:
    print(linha)
