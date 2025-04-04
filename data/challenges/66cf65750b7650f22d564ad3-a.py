matriz = [
    [int(input()), int(input()), int(input())],
    [int(input()), int(input()), int(input())],
    [int(input()), int(input()), int(input())]]
soma_bairros = [sum(linha) for linha in matriz]
print(soma_bairros)
