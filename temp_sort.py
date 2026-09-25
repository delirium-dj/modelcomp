import os, re
root='E:/qwik/modelcomp/model'
missing=[]
pattern=re.compile(r'- \*\*Overall Score:\s*([\d\.]+)/100')
for name in os.listdir(root):
    d=os.path.join(root,name)
    if not os.path.isdir(d): continue
    if os.path.exists(os.path.join(d,'Muse_Glimmer_30B.md')): continue
    avg_path=os.path.join(d,'average.md')
    score=None
    if os.path.exists(avg_path):
        txt=open(avg_path,encoding='utf-8',errors='ignore').read()
        m=pattern.search(txt)
        if m: score=float(m.group(1))
    missing.append((name,score))
missing.sort(key=lambda x: (-(x[1] if x[1] is not None else -1), x[0]))
for n,s in missing[:200]:
    print(f'{n} {s}')
