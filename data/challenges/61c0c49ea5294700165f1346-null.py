preco = float(input())
parcela = float(input())

if(parcela == 2):
    preco = preco * 1.07
else:
    preco = preco * 1.1

parcela = preco/parcela

print(int(preco))
print(int(parcela))