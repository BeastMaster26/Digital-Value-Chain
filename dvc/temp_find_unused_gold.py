import pathlib, re
root = pathlib.Path(r'c:/Users/ibnua/Downloads/Digital-Value-Chain/dvc')
components = sorted(root.glob('src/components/GOLD/*.tsx'))
repo = [p for p in root.rglob('*') if p.suffix in {'.tsx', '.ts', '.jsx', '.js'}]
unused = []
for file in components:
    base = file.stem
    # match imports using @/components/GOLD or relative paths
    pattern = re.compile(rf"from ['\"](?:@/components/GOLD|\.\./)+{re.escape(base)}['\"]")
    count = 0
    for p in repo:
        if p == file:
            continue
        try:
            text = p.read_text(encoding='utf-8')
        except Exception:
            continue
        if pattern.search(text):
            count += len(pattern.findall(text))
    print(f'{base}: {count}')
    if count == 0:
        unused.append(base)
print('UNUSED GOLD COMPONENT FILES:')
for u in unused:
    print(u)
