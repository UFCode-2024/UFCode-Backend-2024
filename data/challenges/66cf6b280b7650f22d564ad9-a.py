matriz_1x2 = [int(input()), int(input())]
matriz_2x3 = [
    [int(input()), int(input()), int(input())],
    [int(input()), int(input()), int(input())]]
resultado = [0] * 3
for j in range(3):
    resultado[j] = matriz_1x2[0] * matriz_2x3[0][j] + matriz_1x2[1] * matriz_2x3[1][j]
print(resultado)
