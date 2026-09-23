import os, re

model_dir = 'E:/qwik/modelcomp/model'
results = []

for folder in sorted(os.listdir(model_dir)):
    path = os.path.join(model_dir, folder)
    if not os.path.isdir(path):
        continue
    avg_path = os.path.join(path, 'average.md')
    if not os.path.exists(avg_path):
        results.append((folder, -1, 'NOAVG'))
        continue
    try:
        with open(avg_path, 'r') as f:
            content = f.read()
        match = re.search(r'\*\*Overall Score:\s*([0-9.]+)/100', content)
        if match:
            score = float(match.group(1))
            results.append((folder, score, 'HAS_AVG'))
        else:
            results.append((folder, -1, 'NOPARSE'))
    except:
        results.append((folder, -1, 'ERROR'))

# Sort: HAS_AVG by score desc, then NOPARSE/NOAVG/ERROR alphabetical
def sort_key(item):
    folder, score, status = item
    if status == 'HAS_AVG':
        return (0, -score, folder)
    elif status == 'NOPARSE':
        return (1, 0, folder)
    elif status == 'NOAVG':
        return (2, 0, folder)
    else:
        return (3, 0, folder)

results.sort(key=sort_key)
for folder, score, status in results:
    if status == 'HAS_AVG':
        print(f"{folder}|{score}|HAS_AVG")
    else:
        print(f"{folder}|{status}")
