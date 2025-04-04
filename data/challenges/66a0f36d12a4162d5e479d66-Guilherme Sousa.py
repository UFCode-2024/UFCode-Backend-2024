T0 = float(input())
x = float(input())
n = int(input())
temperaturas = []
for hora in range(n):
    temperatura = T0 + (hora + 1) * x
    temperaturas.append(temperatura)
print(temperaturas)
