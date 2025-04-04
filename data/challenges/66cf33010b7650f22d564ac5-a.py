ingredientes = [
    [int(input()), int(input()), int(input())],
    [int(input()), int(input()), int(input())],
    [int(input()), int(input()), int(input())]]
soma_ingredientes = [sum(coluna) for coluna in zip(*ingredientes)]
media_ingredientes = [soma / len(ingredientes) for soma in soma_ingredientes]
print(media_ingredientes)
