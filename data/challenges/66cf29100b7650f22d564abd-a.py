# Matriz 3x3 de nutrientes
nutrientes = [
    [int(input()), int(input()), int(input())],
    [int(input()), int(input()), int(input())],
    [int(input()), int(input()), int(input())]
]
# Calculando a soma dos nutrientes em cada área
soma_nutrientes = [sum(area) for area in nutrientes]

# Exibindo a soma dos nutrientes por área
print(soma_nutrientes)
