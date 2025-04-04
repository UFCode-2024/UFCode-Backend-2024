momentos_e_massas = [
    [float(input()), float(input())],  # Objeto 1: Momento de Inércia e Massa
    [float(input()), float(input())],  # Objeto 2: Momento de Inércia e Massa
    [float(input()), float(input())]   # Objeto 3: Momento de Inércia e Massa
]
produtos = [momentos_e_massas[i][0] * momentos_e_massas[i][1] for i in range(3)]
print(produtos)
