cidades = 3
dias = 7

# Inicializando a matriz para as temperaturas
temperaturas = [[0 for _ in range(dias)] for _ in range(cidades)]

# Preenchendo a matriz com as temperaturas
for i in range(cidades):
    for j in range(dias):
        temperaturas[i][j] = float(input())

# Calculando e imprimindo a matriz e a média de cada cidade
for i in range(cidades):
    print(f"Temperaturas da cidade {i+1}: {temperaturas[i]}")
    media = sum(temperaturas[i]) / dias
    print(f"Média semanal da cidade {i+1}: {media:.2f}")
