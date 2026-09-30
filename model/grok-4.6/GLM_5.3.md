# Grok 4.6 — findings by GLM 5.3

- Source: xAI (`grok-4.6`)
- Date: 2026-09-24 (UTC)
- Overview and scoring methodology: `../../model-comparison.md`
- Cross-model signed log: `../../model-findings.md`

## Model card

- **Name:** Grok 4.6
- **Short description:** xAI's August 2026 flagship reasoning model (high effort default); top-tier knowledge honesty (lowest hallucination rates in BenchLM's table). Top use case: agentic coding and research with strong factual grounding at mid price.
- **Provider / access:** OpenCode Zen `https://opencode.ai/zen/v1/responses` (OpenAI Responses API, `@ai-sdk/openai`); also xAI API (docs.x.ai).
- **Release / knowledge:** 2026-08-12; knowledge cutoff not publicly disclosed.
- **IDs:** `opencode/grok-4.6` (Zen; no Free ID — paid only)
- **Context window:** 500K tokens total (verified via AA technical specs and BenchLM).
- **Modalities:** text/image in; text out; reasoning yes (effort levels, "high" default); tool calls; JSON mode.
- **Pricing (as of 2026-09-24):** Zen $2.00 in / $6.00 out per 1M ≤200K tokens ($4.00/$12.00 above 200K; cached read $0.50); xAI API same headline.
- **Architecture:** proprietary; xAI has not disclosed parameter count.

### Raw benchmarks found

Agent / tool use:

- Terminal-Bench 2.1 (Vals harness): **78.3%** (BenchLM `grok-4-6`; TB 3.0 26.5%)
- Tau3-Banking (AA harness): **50.7%** (BenchLM — clears the ~50% frontier ref)
- GDPval-AA: **1605 Elo** (BenchLM; normalized 55.3%)
- Claw-Eval / ClawProBench: **no verified public score found**
- AA Agentic Index: **53.4%** (top-tier); APEX-Agents **57.5%**; AA Briefcase Elo **1546**; AA AutomationBench **66.7%**; AA EnterpriseOps-Gym **48.3%**; AA-AnalystAgent **41.3%** (BenchLM)

Reasoning / knowledge:

- GPQA Diamond: **94.9%** (AA harness; Vals 94.7%)
- HLE: **42.9%** (AA-HLE via BenchLM)
- AA-LCR: **80.3%**; CritPt **17.1%** (BenchLM)
- ARC-AGI-1/2/3: **87.0% / 67.1% / 2.1%** (BenchLM)
- Artificial Analysis Intelligence Index: **44** (high effort, AA #28/211)
- Omniscience Accuracy / Hallucination Rate: **48.2% / 34.3%** (BenchLM — lowest hallucination rate among models surveyed this cycle)
- MMLU-Pro (Vals): **89.4%** (BenchLM)

Coding:

- SWE-bench Verified (Vals): **95.6%** (BenchLM — elite)
- LiveCodeBench (Vals): **88.2%**
- DeepSWE: **65.9%**; SciCode / AA-SciCode **56.5%**; AA Coding Index **76.8%**; CursorBench 3.2 **70.8%**; FrontierCode 1.1 Extended **61.3%**; FrontierSWE v2 **25.3%**; VulcanBench v3 **87.0%**; Bug Hunt Bench **27 fixes** (BenchLM)
- Vibe Code Bench: **no verified public score found** for this ID

Long context:

- 500K window (AA/BenchLM); AA-LCR 80.3% at long context; no MRCR/RULER retrieval number published for this ID.

Multimodal (grounding):

- Design Arena Website **1302** (BenchLM); image input verified via AA specs.

### Normalized scores (1–100)

- **Tool use: 88/100.** Tau3 50.7% clears the frontier ref, Agentic Index 53.4% and APEX 57.5% are top-tier; GDPval 1605 sits just under 1750 and TB2.1 78.3% is a step behind the 88%+ tier; Claw-Eval unpublished.
- **Reasoning: 88/100.** GPQA 94.9% and HLE 42.9% clear the frontier bars with the best hallucination profile (34.3%); ARC-AGI-2 67.1%, ARC-AGI-3 2.1% and CritPt 17.1% cap it.
- **Context window: 87/100.** 500K total context (bottom of the 500K–1M band); no verified retrieval-at-512K number.
- **Multimodal: 70/100.** Text+image input only (AA verified) — top of the "+image in" band; no published vision benchmark numbers for this ID.
- **Coding: 89/100.** SWE-bench V 95.6% and LiveCodeBench 88.2% are elite; SciCode 56.5%, Coding Index 76.8%, CursorBench 70.8% solid; DeepSWE 65.9% misses the 74% ref.
- **Cost efficiency: 85/100.** $2/$6 per 1M ≤200K is cheaper than the $1.25/$4.25 (≈88) anchor on output; doubling above 200K and slow decode (65 tok/s) shave a few points.
- **Overall Score: 84.4/100.** (88 + 88 + 87 + 70 + 89) / 5 = 84.4. Best-fit: the honest-knowledge agent — top coding with the lowest hallucination rate at mid price.

---

## Signature

- Provided by: **GLM 5.3 (z-ai/glm-5.3)** — 2026-09-24
- Method: public internet research (Artificial Analysis, BenchLM, OpenCode Zen docs); scores are normalized 1–100 interpretations, not official vendor scores.
- Future sources: add a new file next to this one, e.g. `GPT_5.md`, using the same headings.
