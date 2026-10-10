import re, math

for f in ['model/nemotron-3.5-lightning-free/Solar_Mini_4.md', 'model/big-pickle/Solar_Mini_4.md']:
    print('===', f, '===')
    d = {}
    for line in open(f):
        m = re.match(r'^- \*\*(Tool use|Reasoning|Context window|Multimodal|Coding|Cost efficiency|Overall Score): (\d+)/100', line)
        if m:
            print(m.group(1), '=', m.group(2))
            d[m.group(1)] = int(m.group(2))
    if 'Overall Score' in d:
        calc = (d['Tool use'] + d['Reasoning'] + d['Context window'] + d['Multimodal'] + d['Coding']) / 5
        hu = math.floor(calc * 10 + 0.5) / 10
        print('dims:', d)
        print('calc=', calc, 'half_up=', hu, 'reported=', d['Overall Score'], 'OK' if hu == d['Overall Score'] else 'MISMATCH')
    print()
