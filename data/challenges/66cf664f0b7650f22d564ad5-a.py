matriz = [
    [int(input()), int(input()), int(input())],
    [int(input()), int(input()), int(input())]
]
media_propriedades = [(matriz[0][i] + matriz[1][i]) / 2 for i in range(3)]
print(media_propriedades)
