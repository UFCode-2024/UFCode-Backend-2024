similaridades = [
    [int(input()), int(input()), int(input())],
    [int(input()), int(input()), int(input())],
    [int(input()), int(input()), int(input())]]

max_similaridade = 0
sequencias_mais_similares = (0, 0)

for i in range(3):
    for j in range(i+1, 3):
        if similaridades[i][j] > max_similaridade:
            max_similaridade = similaridades[i][j]
            sequencias_mais_similares = (i+1, j+1)
for linha in similaridades:
    print(linha)

print(f"As sequências mais similares são a {sequencias_mais_similares[0]} e a {sequencias_mais_similares[1]}, com {max_similaridade}% de similaridade")