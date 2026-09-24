# GPT-5.6 Terra — findings by GLM 5.3

- Source: OpenAI (`gpt-5.6-terra`)
- Date: 2026-09-24 (UTC)
- Overview and scoring methodology: `../../model-comparison.md`
- Cross-model signed log: `../../model-findings.md`

## Model card

- **Name:** GPT-5.6 Terra
- **Short description:** OpenAI's July 2026 GPT-5.6 reasoning model, mid variant between Sol (flagship-tier) and Luna (budget); max effort default. Top use case: strong agentic coding at mid-flagship pricing.
- **Provider / access:** OpenCode Zen `https://opencode.ai/zen/v1/responses` (OpenAI Responses API, `@ai-sdk/openai`); also OpenAI API.
- **Release / knowledge:** 2026-07-09; knowledge cutoff not publicly disclosed.
- **IDs:** `opencode/gpt-5.6-terra` (Zen; no Free ID — paid only)
- **Context window:** 1M tokens total (1.05M per BenchLM; AA lists 1M).
- **Modalities:** text/image in; text out; reasoning yes (effort levels); tool calls; JSON mode.
- **Pricing (as of 2026-09-24):** Zen $2.00 in / $12.00 out per 1M ≤272K tokens ($4.00/$18.00 above 272K; cached read $0.20); OpenAI API same headline.
- **Architecture:** proprietary; OpenAI has not disclosed parameter count.

### Raw benchmarks found

Agent / tool use:

- Terminal-Bench 2.1: **87.4%** (BenchLM `gpt-5-6-terra`; Vals harness 77.5%; TB 3.0 20.8%)
- Tau2-Bench: **86.3%** (BenchLM); Tau3-Banking: **no verified public score found** for this ID
- GDPval-AA: **1583 Elo** (BenchLM; normalized 46.6%)
- Claw-Eval / ClawProBench: **no verified public score found**
- Toolathlon: **53.1%**; OSWorld 2.0 **50.2%**; BrowseComp **87.5%**; CyberGym **81.8%**; ExploitGym **23.2%**; AA ITBench **51.0%**; AA Agentic Index **43.7%**; APEX-Agents-AA **38.9%** (BenchLM)

Reasoning / knowledge:

- GPQA Diamond: **92.9%** (BenchLM; AA harness 92.5%; Vals 90.9%)
- HLE: **42.9%** AA harness / **51.1%** HLE-Verified (BenchLM)
- ARC-AGI-2: **83.9%** / ARC-AGI-3 **0.8%** (BenchLM)
- AA-LCR: **83.0%**; CritPt **30.0%** (BenchLM)
- Artificial Analysis Intelligence Index: **42** (max effort, AA #38/211; BenchLM lists 55.0 from an earlier snapshot)
- Omniscience Accuracy / Hallucination Rate: **46.8% / 87.9%** (BenchLM — very high hallucination rate)
- FrontierMath v2: **84.9%** Tiers 1–3 / **68.3%** Tier 4; MMLU-Pro (Vals) **86.7%** (BenchLM)

Coding:

- SWE-bench Verified (Vals): **95.4%**
- SWE-bench Pro: **63.4%**; DeepSWE **69.6%**; LiveCodeBench (Vals) **85.9%** (BenchLM)
- SciCode / AA-SciCode: **55.0%**; AA Coding Index **76.7%**; CursorBench 3.2 **64.9%**; FrontierCode 1.1 Extended **55.8%**; VulcanBench v3 **87.0%** (BenchLM)
- Vibe Code Bench: **no verified public score found**

Long context:

- 1M window (AA/BenchLM); AA-LCR 83.0% at long context; no MRCR/RULER retrieval-at-512K number published for this ID.

Multimodal (grounding):

- MMMU-Pro **80.7%** / w/ Python **82%** (AA 80.7%) (BenchLM).

### Normalized scores (1–100)

- **Tool use: 85/100.** TB2.1 87.4% is a hair under the frontier ref, Tau2 86.3% and BrowseComp 87.5% strong; GDPval 1583, OSWorld 50.2% and Agentic Index 43.7% are solidly mid-band.
- **Reasoning: 85/100.** GPQA 92.9% and HLE 42.9–51.1% clear the frontier bars and FrontierMath T4 68.3% is good; ARC-AGI-3 0.8% and a very high 87.9% hallucination rate cap it.
- **Context window: 95/100.** 1M total context (top tier band); no verified retrieval-at-512K number for 100.
- **Multimodal: 70/100.** Text+image input only (AA verified) — top of the "+image in" band; MMMU-Pro 80.7% is decent.
- **Coding: 88/100.** SWE-bench V 95.4% (Vals) is elite; Coding Index 76.7%, LiveCodeBench 85.9%, SciCode 55.0% clear frontier refs; DeepSWE 69.6% misses 74 and SWE-bench Pro 63.4% is mid.
- **Cost efficiency: 70/100.** $2/$12 per 1M on the evaluated tier (doubling above 272K) — between the $1.25/$4.25 (≈88) and $3/$15 (≈60) anchors; decent speed (85 tok/s) but 211s TTFT at max effort.
- **Overall Score: 84.6/100.** (85 + 85 + 95 + 70 + 88) / 5 = 84.6. Best-fit: near-flagship coding agent at mid price; hallucination-prone on knowledge tasks — pair with retrieval.

---

## Signature

- Provided by: **GLM 5.3 (z-ai/glm-5.3)** — 2026-09-24
- Method: public internet research (Artificial Analysis, BenchLM, OpenCode Zen docs); scores are normalized 1–100 interpretations, not official vendor scores.
- Future sources: add a new file next to this one, e.g. `GPT_5.md`, using the same headings.
