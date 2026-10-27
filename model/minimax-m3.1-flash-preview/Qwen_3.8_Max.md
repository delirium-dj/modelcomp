# MiniMax M3.1 Flash Preview — findings by Qwen 3.8 Max

- Source: MiniMax (`minimax-m3.1-flash-preview`)
- Date: 2026-10-27 (UTC)
- Overview and scoring methodology: `../../model-comparison.md`
- Cross-model signed log: `../../model-findings.md`

## Model card

- **Name:** MiniMax M3.1 Flash (Preview) — the revealed identity of stealth "**Space Bunny**"
- **Short description:** MiniMax's **low-cost reasoning model for agents and coding**, formally released **October 19, 2026** (a preview build — the anonymous OpenRouter "**Space Bunny**" — circulated from late September and was confirmed as an early M3.1 Flash). Genuinely strong on independent composites (**AA Intelligence Index 43**, **HLE 48.0%**, top **Automation-Bench 62.8** and **LOCA-Bench 60.3**) with a **1M context / 524K output**, **text+image+video** input, **5 effort levels**, and the **cheapest cost per AA task ($0.22)** — but with a serious reliability flaw: a **92.8% hallucination rate** (it confidently invents facts when unsure).
- **Provider / access:** MiniMax API / M Plan / MiniMax Code; AI/ML API `minimax/minimax-m3.1-flash`; OpenRouter (as the former stealth `space-bunny`). Aliases: Space Bunny / Space Bunny Alpha / Space Bunny Free. Open weights were **announced (Oct 23) but not yet published**. `noFreeId: true` in meta, though "Space Bunny Free" preview routes existed.
- **Release / knowledge:** Released **October 19, 2026**; preview from ~late September 2026. Current, **not deprecated**. Knowledge cutoff not published.
- **IDs:** `minimax-ai/minimax-m3.1-flash-preview`; AI/ML API `minimax/minimax-m3.1-flash`; AA `minimax-m3-1-flash`.
- **Context window:** **1,000,000 tokens** with a **524,288-token max output** (exceptional write allowance); **AA-LCR long-context reasoning 79.7%** independently validates it.
- **Modalities:** **Text, image, and video in → text out** (⚠ meta said "text in/out, image/video unverified" — corrected: BabyVision-with-tools 91.0% and the spec table confirm image+video input). No image/audio output. **Always-on reasoning** with **5 effort levels** (low/medium/high/xhigh/max, default max). Tool calling + JSON mode supported.
- **Pricing (as of 2026-10-27):** ~**$0.15/$0.60** per 1M (OpenRouter stealth) to **$0.195/$0.78** (AI/ML API); **AA cost per Intelligence-Index task $0.22 — the cheapest in its peer comparison**. MiniMax claims ~70% lower agent-task cost vs M3. (⚠ meta said "no public per-token price" — corrected.)
- **Architecture:** Parameters **not disclosed** (the "428B" on some pages is MiniMax **M3**'s size, not this). Reasoning-token MoE-style fast tier; ~93 tok/s (AA) / 109 (AI/ML API test) / 200+ (vendor claim).

### Raw benchmarks found

> Independent anchors: **Artificial Analysis** (Intelligence Index 43, HLE, AA-Omniscience, AA-LCR, Terminal-Bench 4.0, cost/speed), **Vals AI** (Vals Index 53.78%), **BenchAlign/BenchLM** (#29/229, 67.15/100, Estimated), and **Plotly** (DataAnalyticsBench 41/43). Vendor figures are MiniMax's own launch runs (it self-ran Automation-Bench/DeepSWE/etc. in Claude Code/Codex/mini-SWE-agent), so a rival's setup can differ. **MiniMax did not report SWE-bench Verified, GPQA, or AIME.**

Independent (current):

- **AA Intelligence Index: 43** (10 evaluations) — strong; peer context: DeepSeek V4.1 Flash 1017 = 45, GLM-5.3 Flash = 42, Gemini 3.8 Flash = 41, MiniMax M3 = 29. **AA cost/index task $0.22 (cheapest)**; **AA speed 93 tok/s**; **TTFT 1.38s**.
- **Humanity's Last Exam: 48.0%** (independent — ties Gemini 3.8 Flash, above DeepSeek V4.1 Flash's 43.3%).
- **AA-Omniscience: 56.2% accuracy** (best factual recall in the group) **but 92.8% hallucination rate** — when it doesn't know, it almost never says so (vs 18.4% for M3). A system prompt did **not** reduce its invented answers.
- **AA-LCR (long-context reasoning): 79.7%**; **Terminal-Bench 4.0 (AA's run): 25.8%** (weak; below DeepSeek 33.8% and GLM-5.3 Flash 32.8%).
- **Vals Index: 53.78%** (professional tasks — mid; below DeepSeek 61.26% and Gemini 3.8 Flash 55.95%, above GLM-5.3 Flash 50.86%). **BenchAlign: #29/229, 67.15/100** (Estimated). **Plotly DataAnalyticsBench: 41/43** (tied Claude Opus 5.5) but ~32K tokens/question, 3 min each (slowest, very verbose).

Vendor (MiniMax launch, self-run):

- **Automation-Bench v1.0.6: 62.8 (top)** — beats DeepSeek V4.1 Flash 60.5, Claude Opus 5 50.3, GPT-5.6 Sol 45.8. **LOCA-Bench 256K: 60.3 (top)**. **BankerToolBench: 76.2** (ties Claude Opus 5). **OSWorld 2.0: 61.7** (computer use).
- **DeepSWE v1.1: 73.7** (trails DeepSeek 77.0 by ~3); **Terminal-Bench 4.0: 38.1** (vendor; AA's independent run got 25.8); **CyberGym: 82.2**; **NL2Repo-Bench: 61.2**; **BabyVision (visual, with tools): 91.0**; **Agents' Last Exam: 29.6**; **HLE (no tools): 43.4**.

> Provenance: **AA Index 43, HLE 48.0%, AA-Omniscience, AA-LCR, Terminal-Bench 4.0 (25.8%), Vals Index 53.78%, BenchAlign 67.15, Plotly 41/43** are independent and paint a **strong-composite but mid-Vals, hallucination-prone, verbose** model. Automation-Bench/LOCA/BankerTool/DeepSWE/CyberGym/BabyVision are **vendor self-runs** (MiniMax's own setup) — leading on business-workflow agentic tasks but not independently reproduced, and no SWE-bench Verified/GPQA/AIME was published.
> Meta verification: **several corrections** — the meta's "no published params, context or price" and "text in/out (image/video unverified)" are now **outdated**: the Oct-19 reveal established **context 1M / output 524K**, **price ~$0.15–$0.195 / $0.60–$0.78** ($0.22/AA task), and **input text+image+video** (BabyVision 91.0%). **Parameters remain undisclosed** ✓ (meta correct on that) and **open weights are announced-but-unpublished** ✓. The **"5 effort levels"** ✓ (low→max, default max) and the **Space Bunny reveal (2026-10-19)** ✓ are accurate. Enriched from AA/Vals/BenchAlign/aimlapi: **AA Index 43**, **HLE 48.0%**, **92.8% hallucination**, **Vals Index 53.78%**, **Automation-Bench 62.8 (top)**, **BenchAlign #29/229 (67.15)**.

### Normalized scores (1–100)

- **Tool use: 80/100.** Strong agentic design for long multi-step runs — vendor **Automation-Bench 62.8 (top)**, **LOCA-Bench 60.3 (top)**, **BankerToolBench 76.2** (ties Claude Opus 5), **OSWorld 2.0 61.7**, plus tool calling + JSON. Tempered because those are **vendor self-runs**, the **independent Terminal-Bench 4.0 is weak (25.8%)**, **Vals Index is mid (53.78%)**, and the 92.8% hallucination rate undermines trust in unsupervised agent loops.
- **Reasoning: 80/100.** **AA Intelligence Index 43** (2nd in its flash peer group) and **HLE 48.0%** (independent, ties Gemini 3.8 Flash) are genuinely strong, and always-on 5-level reasoning is flexible. Held back from the mid-80s by the **92.8% confident-hallucination rate** (a real reasoning-reliability flaw — it invents facts and a "say you don't know" prompt didn't help) and mid **Vals Index 53.78%**.
- **Context window: 85/100.** **1M native** with an exceptional **524K max output**, and **AA-LCR 79.7%** independently validates long-context reasoning. Proven-1M tier; current model.
- **Multimodal: 82/100.** **Text + image + video in** (native video, confirmed via the spec table and **BabyVision-with-tools 91.0%** — near DeepSeek's 92.5). Text-only output keeps it below the any-non-text-out tier. Native-video VL band.
- **Coding: 77/100.** **DeepSWE v1.1 73.7%** (vendor, trails DeepSeek's 77.0), **CyberGym 82.2%**, **NL2Repo 61.2** are solid, but the **independent Terminal-Bench 4.0 is only 25.8%**, there is **no SWE-bench Verified**, and MiniMax self-ran the coding benchmarks — so this sits at the strong-published-but-independently-soft tier.
- **Cost efficiency: 92/100.** The standout — **cheapest per AA Intelligence-Index task ($0.22)**, ~$0.15–$0.195/$0.60–$0.78 per 1M, ~70% lower agent-task cost than M3, with open weights announced. Excellent value for a 1M-context multimodal reasoner. Not counted toward Overall.
- **Overall Score: 81/100.** Mean of Tool 80 + Reasoning 80 + Context 85 + Multimodal 82 + Coding 77 = 404 / 5 = 80.8 → 81. Best fit: a **cheap, fast, 1M-context multimodal agent/coding model** with a strong independent composite (AA 43, HLE 48%) and leading business-workflow agentic scores — but **verify its outputs**: the 92.8% confident-hallucination rate makes it risky for unsupervised factual/agent work without a checking step or provided source text. **Divergence note:** curated queue 76.6 vs my 81 → **+4.4** (one of my widest positive gaps). This is a **stale-curation divergence**: the curated 76.6 was set while the model was still the **opaque "Space Bunny" preview** ("no published params, context or price"), before the Oct-19 reveal. The now-verified independent evidence (**AA Index 43** — 2nd in its flash peer group; **HLE 48%**; 1M/524K context; text+image+video; cheapest-per-task) shows a substantially stronger model, landing it just below DeepSeek V4.1 Flash 1017 (82, AA 45) — consistent with AA 43 vs 45. The hallucination rate and mid Vals/Terminal-Bench keep it from scoring higher.

---

## Signature

- Provided by: **Qwen 3.8 Max (qwen/qwen-3.8-max)** — 2026-10-27
- Method: public internet research (Artificial Analysis `minimax-m3-1-flash` for Intelligence Index 43 / HLE 48.0% / AA-Omniscience 56.2%+92.8% hallucination / AA-LCR 79.7% / Terminal-Bench 4.0 25.8% / cost-per-task $0.22 / speed 93 tok/s; Vals AI for Vals Index 53.78%; BenchLM/BenchAlign #29/229 at 67.15; AI/ML API review for the spec table, vendor launch benchmarks and independent comparison; Plotly DataAnalyticsBench; MiniMax launch post via secondary reporting for the Space Bunny reveal and 5 effort levels; Artificial Analysis `minimax-m3-1-flash-preview` slug 404'd so the `minimax-m3-1-flash` page and aggregators were used); scores are normalized 1–100 interpretations, not official vendor scores.
- Future sources: add a new file next to this one, e.g. `Qwen_3.8_Max.md`, using the same headings.
