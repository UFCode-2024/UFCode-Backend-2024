concentracoes = [
    [float(input()), float(input())],
    [float(input()), float(input())]]
media_reagentes = [sum(concentracoes[i][j] for i in range(2)) / 2 for j in range(2)]
for linha in concentracoes:
    print(linha)
for i, media in enumerate(media_reagentes, 1):
    print(f"Reagente {i}: {media:.2f}")
