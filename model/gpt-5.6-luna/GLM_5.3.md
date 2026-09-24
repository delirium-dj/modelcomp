# GPT-5.6 Luna — findings by GLM 5.3

- Source: OpenAI (`gpt-5.6-luna`)
- Date: 2026-09-24 (UTC)
- Overview and scoring methodology: `../../model-comparison.md`
- Cross-model signed log: `../../model-findings.md`

## Model card

- **Name:** GPT-5.6 Luna
- **Short description:** OpenAI's July 2026 budget tier of the GPT-5.6 family (1M context) — near-Sol intelligence indices at a fraction of the price. Top use case: high-volume agentic coding and math on a budget.
- **Provider / access:** OpenCode Zen `https://opencode.ai/zen/v1/responses` (OpenAI Responses API, `@ai-sdk/openai`); also OpenAI API.
- **Release / knowledge:** 2026-07-09 (GPT-5.6 family launch); knowledge cutoff not publicly disclosed.
- **IDs:** `opencode/gpt-5.6-luna` (Zen; no Free ID — paid but cheap)
- **Context window:** 1M tokens total (1.05M per BenchLM).
- **Modalities:** text/image in; text out; reasoning yes (effort levels); tool calls; JSON mode.
- **Pricing (as of 2026-09-24):** Zen $0.20 in / $1.20 out per 1M ≤272K tokens ($0.40/$1.80 above 272K; cached read $0.02).
- **Architecture:** proprietary; OpenAI has not disclosed parameter count.

### Raw benchmarks found

Agent / tool use:

- Terminal-Bench 2.1: **84.7%** (BenchLM `gpt-5-6-luna`; Vals harness 79.0%; TB 3.0 14.3%)
- GDPval-AA: **1582 Elo** (BenchLM; normalized 47.2%)
- Tau3-Banking (AA harness): **31.1%** (BenchLM — weak)
- Claw-Eval: **no verified public score found**
- BrowseComp **83.3%**; OSWorld 2.0 **45.6%**; CyberGym **77.9%**; Toolathlon **53.4%**; AA Harvey LAB **87.9%**; AA ITBench **40.3%**; AA Agentic Index **42.7%**; AA EnterpriseOps-Gym **40.8%** (BenchLM)

Reasoning / knowledge:

- GPQA Diamond: **92.3%** (BenchLM; AA harness 91.1%; Vals 91.7%)
- HLE: **39.5%** (AA-HLE via BenchLM — just under the 40% bar)
- AA-LCR: **83.7%**; CritPt **20.6%**; MLCR-AA **19.4%** (BenchLM)
- ARC-AGI-2: **59.5%** / ARC-AGI-3 **0.2%** (BenchLM)
- Artificial Analysis Intelligence Index: **51.2** (BenchLM listing — remarkable for the price tier)
- Omniscience Accuracy / Hallucination Rate: **42.7% / 92.6%** (BenchLM — very high hallucination, negative Omniscience Index)
- FrontierMath v2: **78.6%** Tiers 1–3 / **58.5%** Tier 4; MMLU-Pro (Vals) **86.0%** (BenchLM)

Coding:

- SWE-bench Verified (Vals): **93.0%** (BenchLM — elite for the tier)
- SWE-bench Pro: **62.7%**; DeepSWE **67.2%**; AA Coding Index **71.5%**; SciCode / AA-SciCode **53.6%**; CursorBench 3.2 **61.1%**; VulcanBench v3 **85.5%**; FrontierCode 1.1 Extended **55.1%** (BenchLM)
- LiveCodeBench / Vibe Code Bench: **no verified public score found** for this ID

Long context:

- 1.05M window (BenchLM); AA-LCR 83.7% at long context; no MRCR/RULER retrieval number published.

Multimodal (grounding):

- MMMU-Pro **78.4%** / w/ Python **79.5%** (AA 78.6%) (BenchLM).

### Normalized scores (1–100)

- **Tool use: 80/100.** TB2.1 84.7%, BrowseComp 83.3% and Harvey LAB 87.9% are strong; Tau3 31.1%, OSWorld 45.6% and GDPval 1582 pull it to the high-mid band.
- **Reasoning: 84/100.** GPQA 92.3% clears the frontier bar, AA Index 51.2 and FrontierMath T4 58.5% are outstanding for the price; HLE 39.5% just misses and a very high 92.6% hallucination rate drags knowledge reliability.
- **Context window: 95/100.** 1.05M total context (top tier band); no verified retrieval-at-512K number for 100.
- **Multimodal: 70/100.** Text+image input only — top of the "+image in" band; MMMU-Pro 78.4%.
- **Coding: 82/100.** SWE-bench V 93.0% (Vals) is elite; Coding Index 71.5% clears its ref; SciCode 53.6% and SWE-bench Pro 62.7% miss; DeepSWE 67.2% decent.
- **Cost efficiency: 93/100.** $0.20/$1.20 per 1M ≤272K — cheaper than the ~$0.60/$2.20 (≈92) anchor; the value leader of the GPT-5.6 line.
- **Overall Score: 82.2/100.** (80 + 84 + 95 + 70 + 82) / 5 = 82.2. Best-fit: the price-performance pick for high-volume coding/math agents; avoid for knowledge-recall work.

---

## Signature

- Provided by: **GLM 5.3 (z-ai/glm-5.3)** — 2026-09-24
- Method: public internet research (BenchLM, OpenCode Zen docs); scores are normalized 1–100 interpretations, not official vendor scores.
- Future sources: add a new file next to this one, e.g. `GPT_5.md`, using the same headings.
