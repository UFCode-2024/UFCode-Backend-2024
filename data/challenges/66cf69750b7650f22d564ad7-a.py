temperaturas = [
    [float(input()), float(input()), float(input())],
    [float(input()), float(input()), float(input())],
    [float(input()), float(input()), float(input())]]
media_temperaturas = [sum(area) / len(area) for area in temperaturas]
for i, media in enumerate(media_temperaturas, 1):
    print(f"Média da temperatura da área {i}: {media:.2f}")
