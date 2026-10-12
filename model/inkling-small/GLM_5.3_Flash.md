# Inkling-Small — findings by GLM 5.3 Flash

- Source: Thinking Machines Lab (`inkling-small`)
- Date: 2026-10-11 (UTC)
- Overview and scoring methodology: `../../model-comparison.md`
- Cross-model signed log: `../../model-findings.md`

## Model card

- **Name:** Inkling-Small
- **Short description:** Thinking Machines Lab's open-weight companion to its flagship Inkling model — about a quarter of the size (276B total vs 975B) yet matching or beating Inkling on most published benchmarks. Top use cases: agentic coding, general reasoning, and self-hosting a near-flagship model on accessible hardware.
- **Provider / access:** OpenRouter (`inkling-small`, plus a free `inkling-small:free` variant); open weights (Apache 2.0) for self-hosting with MXFP8/NVFP4 quantization support. Chat Completions-style API via OpenRouter.
- **Release / knowledge:** Released 2026-07-30, two weeks after flagship Inkling (2026-07-15); knowledge cutoff not published.
- **IDs:** OpenRouter `inkling-small`; free tier exists as `inkling-small:free`
- **Context window:** Up to 1M tokens per OpenRouter and BenchLM listings (BenchLM concurs 1M, 2026-10-10); llm-stats lists 524K — sources conflict; no public retrieval benchmark confirms the full window.
- **Modalities:** multimodal reasoning model (hybrid reasoning type per BenchLM); image input with measured vision (MMMU-Pro 74.0, CharXiv 81.3); text output; tool calls supported.
- **Pricing (as of 2026-10-11):** $0.30 per 1M input / $0.06 cached / $1.20 per 1M output — roughly a third of flagship Inkling's $4.05/M output. Free variant available on OpenRouter (data-usage caveats typical of free tiers). Open weights = free self-hosting.
- **Architecture:** ~276B total parameters, ~12B active (sparse MoE); Apache 2.0 open weights; MXFP8 and NVFP4 checkpoint support.

### Raw benchmarks found

Agent / tool use:

- MCP Atlas: **79.6%** (Thinking Machines launch post via benchlm.ai, updated 2026-10-10 — fills the gap)
- BrowseComp: **77.4%** (launch post — fills the gap; the prior "trails larger frontier models" framing is now quantified as solid)
- Terminal-Bench 2.1: **64.7%** (vendor; Vals independent: **55.1%**)
- Toolathlon-Verified: **54.4%** (launch post — quantifies the prior "outperforms Seed 2.1 Pro" claim as mid)
- GDPval-AA: **1191** (AA, independent; normalized **31.2%** — weak); AA Agentic Index: **24.9%** (AA)
- Tau3-Banking / Claw-Eval: no verified public score found

Reasoning / knowledge:

- GPQA Diamond: **89.5%** (vendor launch post; AA corroborates **89.5%**); Vals: **83.6%**
- HLE: **47.8%** with tools / **31.6%** without (launch post — the with-tools row fills the gap); AA-HLE: **33.3%**
- ARC-AGI-2: **40.1%** (launch post); ARC-AGI-1: **84.0%** (ARC Prize verified, Inkling Small XHigh)
- AIME26: **95.5%**; HMMT Feb 2026: **90.2%** (launch post — strong math)
- SimpleQA Verified: **20.6%** (notably weak factual recall vs 43.9% for Inkling); AA-Omniscience: **33.2% accuracy / 63.0% non-hallucination row / −8.9 index** (AA — weak)
- Artificial Analysis Intelligence Index: **25.7** (AA current board) — **conflicts with the 2026-10-05 "within one point of Inkling (41)" framing**; the AA-direct board supersedes it
- AA-LCR v1.1: **75.7%** (AA — fills the long-context gap); CritPt: **8.3%** (weak)
- MMLU-Pro: **85.6%** (Vals); IFBench: **82.2%** (launch post)

Coding:

- SWE-bench Verified: **80.2%** (vendor; beats flagship Inkling's 77.6%)
- SWE-bench Pro: **55.9%** (launch post — fills the gap); SWE-bench (Vals): **82.2%** (Vals, independent)
- LiveCodeBench (Vals): **85.9%** (Vals — fills the gap)
- SciCode: **48.7%** (launch post); AA-SciCode: **49.7%** (AA); AA Coding Index: **53.0%** (AA)
- Vibe Code Bench: no verified public score found

Long context:

- AA-LCR v1.1: **75.7%** (AA — first measured long-context number, mid)
- MRCR/RULER/GraphWalks: no verified public score; window sources conflict (1M vs 524K)

Multimodal:

- MMMU-Pro: **74.0%** (launch post) / **74.0%** (AA — corroborated); CharXiv: **81.3%** with tools / **77.4%** without — first measured vision evidence

### Normalized scores (1–100)

- **Tool use: 80/100.** (Was 82 on the prior pass.) MCP Atlas 79.6% and BrowseComp 77.4% strengthen the agentic story, but Toolathlon settles at 54.4% (mid), GDPval 1191 (31.2% normalized) and AA Agentic Index 24.9% are weak, and the Vals TB2.1 gap (55.1 vs 64.7) is wide.
- **Reasoning: 82/100.** (Was 87 on the prior pass.) GPQA 89.5% (two sources) and AIME26 95.5% stay strong and HLE-with-tools 47.8% fills a gap — but the AA Index reads 25.7, far below the "within one point of Inkling (41)" framing the prior score leaned on, with CritPt 8.3% and a negative Omniscience index; the independent evidence moves it down a band.
- **Context window: 84/100.** 1M-token window per vendor/major directories (BenchLM concurs) is top-tier spec; AA-LCR 75.7% is the first measured evidence (mid); the 524K conflicting listing and zero retrieval-at-length verification keep the cap.
- **Multimodal: 68/100.** (Was 60 on the prior pass.) Measured vision now exists and is respectable for the image-in band (MMMU-Pro 74.0, CharXiv 81.3 with tools) — performance is proven, not just credited; still the 60–70 image-in band (no video/audio).
- **Coding: 85/100.** SWE-bench Verified 80.2% (beats the 975B flagship) with Vals corroboration (SWE 82.2, LiveCodeBench 85.9); SWE Pro 55.9% and SciCode 48.7% cap it.
- **Cost efficiency: 92/100.** $0.30/$1.20 per 1M with a free OpenRouter variant and Apache 2.0 self-hosting, at near-flagship quality — outstanding value; not higher because cached/long-output economics at 1M context are undocumented.
- **Overall Score: 79.8/100.** (Was 79.6 on the prior pass.) Mean of the five quality dims per `RULES.md` (Cost excluded): (80 + 82 + 84 + 68 + 85) / 5 = 399/5 = 79.8 — net unchanged on the 2026-10-11 second pass: the multimodal raise offsets the reasoning correction from the recomposed AA board. Best fit: teams wanting near-flagship agentic coding and reasoning with open weights they can actually deploy.

---

## Signature

- Provided by: **GLM 5.3 Flash (z-ai/glm-5.3-flash)** — 2026-10-11
- Method: public internet research, second pass 2026-10-11 (≥3 independent sources: benchlm.ai updated 2026-10-10 citing the Thinking Machines Lab launch post, Artificial Analysis model benchmarks, Vals AI leaderboards, ARC Prize verified results via benchlm.ai, plus the prior 2026-10-05 pass); scores are normalized 1–100 interpretations, not official vendor scores.
- Future sources: add a new file next to this one, e.g. `GPT_5.md`, using the same headings.
