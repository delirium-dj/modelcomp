# GPT-5.5 — findings by GLM 5.3

- Source: OpenAI (`gpt-5.5`)
- Date: 2026-09-24 (UTC)
- Overview and scoring methodology: `../../model-comparison.md`
- Cross-model signed log: `../../model-findings.md`

## Model card

- **Name:** GPT-5.5
- **Short description:** OpenAI's April 2026 flagship reasoning model (xhigh effort default), predecessor to the GPT-5.6/6 lines; still served on Zen. Top use case: general-purpose frontier reasoning with strong computer-use agentic behavior.
- **Provider / access:** OpenCode Zen `https://opencode.ai/zen/v1/responses` (OpenAI Responses API, `@ai-sdk/openai`); also OpenAI API.
- **Release / knowledge:** 2026-04-23; knowledge cutoff not publicly disclosed.
- **IDs:** `opencode/gpt-5.5` (Zen; no Free ID — paid only)
- **Context window:** 922K tokens total (AA technical specs; BenchLM rounds to 1M).
- **Modalities:** text/image in; text out; reasoning yes (effort levels, xhigh default); tool calls; JSON mode.
- **Pricing (as of 2026-09-24):** Zen $5.00 in / $30.00 out per 1M ≤272K tokens ($10.00/$45.00 above 272K; cached read $0.50).
- **Architecture:** proprietary; OpenAI has not disclosed parameter count.

### Raw benchmarks found

Agent / tool use:

- Terminal-Bench 2.0: **82%** (BenchLM `gpt-5-5`; TB 2.1 Vals harness 76.4%)
- Tau2-Bench: **98%** (BenchLM)
- GDPval-AA: **1396 Elo** (BenchLM; normalized 41.8%)
- Claw-Eval / ClawProBench: **no verified public score found**
- OSWorld-Verified: **78.7%** (BenchLM; OSWorld 2.0 13.0% on the newer release); MCP-Atlas **75.3%**; Toolathlon **55.6%**; BrowseComp **84.4%**; CyberGym **81.8%**; AA Agentic Index **37.3%**; AA ITBench **45.8%**; Gert Labs **72.93%** (BenchLM)

Reasoning / knowledge:

- GPQA Diamond: **93.6%** (BenchLM; AA harness 93.5%; Vals 93.2%)
- HLE: **45.8%** AA harness / **52.2%** w/ tools / **41.4%** w/o tools (BenchLM)
- MRCR v2: **83.1%** (64K–128K) / **87.5%** (128K–256K) (BenchLM); AA-LCR **84.3%**; CritPt **27.1%**
- ARC-AGI-2: **85%** / ARC-AGI-3 **0.4%** (BenchLM)
- Artificial Analysis Intelligence Index: **38** (xhigh, AA #53/211)
- Omniscience Accuracy / Hallucination Rate: **58.0% / 89.0%** (BenchLM — very high hallucination rate)
- FrontierMath v2: **51.7%** Tiers 1–3 / **35.4%** Tier 4; MMLU-Pro (Vals) **88.1%** (BenchLM)

Coding:

- SWE-bench Verified (Vals): **82.6%**
- SWE-bench Pro: **58.6%**; LiveCodeBench (Vals) **85.3%** (BenchLM)
- SciCode / AA-SciCode: **55.8%**; AA Coding Index **74.9%**; Vibe Code Bench **69.85%**; CursorBench 3.1 **59.2%** / 3.2 **58.4%**; React Native Evals **84.7%**; FrontierCode 1.1 Main **43.0%** (BenchLM)
- DeepSWE: **no verified public score found** for this ID

Long context:

- 922K window (AA); MRCR v2 83.1%/87.5% verified to 256K; no 512K–1M figure published.

Multimodal (grounding):

- MMMU-Pro **81.2%** / w/ Python **83.2%** (AA 79.9%) (BenchLM); OfficeQA Pro **54.1%**.

### Normalized scores (1–100)

- **Tool use: 84/100.** Tau2 98% and OSWorld-Verified 78.7% are elite; MCP-Atlas 75.3% and TB2.0 82% solid; GDPval 1396 and Agentic Index 37.3% pull it below the current frontier tier.
- **Reasoning: 84/100.** GPQA 93.6% and HLE 41–52% clear the frontier bars with MRCR 87.5% to 256K; ARC-AGI-3 0.4%, FrontierMath T4 35.4% and a very high 89% hallucination rate cap it.
- **Context window: 90/100.** 922K total (top of the 500K–1M band); retrieval verified only to 256K.
- **Multimodal: 70/100.** Text+image input only (AA verified) — top of the "+image in" band; MMMU-Pro 81.2%.
- **Coding: 84/100.** SWE-bench V 82.6%, LiveCodeBench 85.3%, SciCode 55.8%, Coding Index 74.9% and Vibe 69.9% are all solid-to-frontier; SWE-bench Pro 58.6% and CursorBench ~58% are mid; DeepSWE unpublished.
- **Cost efficiency: 45/100.** $5/$30 per 1M on the evaluated tier (doubling above 272K) — between the $3/$15 (≈60) and $10/$50 (≈30) anchors.
- **Overall Score: 82.4/100.** (84 + 84 + 90 + 70 + 84) / 5 = 82.4. Best-fit: legacy flagship with standout computer-use skills; GPT-5.6/6 successors beat it on value.

---

## Signature

- Provided by: **GLM 5.3 (z-ai/glm-5.3)** — 2026-09-24
- Method: public internet research (Artificial Analysis, BenchLM, OpenCode Zen docs); scores are normalized 1–100 interpretations, not official vendor scores.
- Future sources: add a new file next to this one, e.g. `GPT_5.md`, using the same headings.
