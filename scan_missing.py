p = r"E:/qwik/modelcomp/src/data/vendorIcons.generated.ts"
s = open(p).read()
needle = ',{"viewBox"'
i=0; cnt=0; samples=[]
while True:
    j=s.find(needle,i)
    if j==-1: break
    cnt+=1
    if len(samples)<10: samples.append(repr(s[j-40:j+40]))
    i=j+1
print("missing key (,{viewBox):", cnt)
for x in samples: print(x)
# also check for },{"viewBox" without comma? already
needle2 = '}{"viewBox"'
i=0; cnt2=0
while True:
    j=s.find(needle2,i)
    if j==-1: break
    cnt2+=1; i=j+1
print("}{{viewBox (no comma):", cnt2)
