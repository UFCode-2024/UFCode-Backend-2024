temperaturas = [
    [float(input()), float(input()), float(input())],
    [float(input()), float(input()), float(input())],
    [float(input()), float(input()), float(input())]]
def fahrenheit_para_celsius(f):
    return (f - 32) * 5/9
def kelvin_para_celsius(k):
    return k - 273.15

somas_temperaturas = [
    sum(temperaturas[0]),
    sum(fahrenheit_para_celsius(f) for f in temperaturas[1]),
    sum(kelvin_para_celsius(k) for k in temperaturas[2])]

superficie_maior_soma = somas_temperaturas.index(max(somas_temperaturas)) + 1
print(f"A Superfície {superficie_maior_soma} apresentou a maior soma de temperaturas em Celsius")
