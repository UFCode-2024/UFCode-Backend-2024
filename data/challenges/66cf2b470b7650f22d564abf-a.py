safra1 = [
    [int(input()), int(input())],
    [int(input()), int(input())]]
safra2 = [
    [int(input()), int(input())],
    [int(input()), int(input())]]
diferenca = [[safra2[i][j] - safra1[i][j] for j in range(2)] for i in range(2)]
for linha in diferenca:
    print(linha)
