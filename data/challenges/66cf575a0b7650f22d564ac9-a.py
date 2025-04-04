complexidade = [
    [int(input()), int(input()), int(input())],
    [int(input()), int(input()), int(input())],
    [int(input()), int(input()), int(input())]]
soma_cenarios = [sum(complexidade[i][j] for i in range(3)) for j in range(3)]
maior_carga = max(soma_cenarios)
cenario_maior_carga = soma_cenarios.index(maior_carga) + 1 
print(f"O cenário com a maior carga total é o cenário {cenario_maior_carga} com uma carga de {maior_carga}")
