# Claude Opus 4.6 — findings by GLM 5.3

- Source: Anthropic (`claude-opus-4.6`)
- Date: 2026-09-24 (UTC)
- Overview and scoring methodology: `../../model-comparison.md`
- Cross-model signed log: `../../model-findings.md`

## Model card

- **Name:** Claude Opus 4.6
- **Short description:** Anthropic's late-2025 Opus model, two generations behind Opus 5; the base (non-adaptive) config is what BenchLM tracks. Top use case: legacy Opus-class coding/computer-use continuity on existing pipelines.
- **Provider / access:** OpenCode Zen `https://opencode.ai/zen/v1/messages` (Anthropic Messages API, `@ai-sdk/anthropic`); also Anthropic API and cloud partners.
- **Release / knowledge:** late 2025 (predecessor in the Opus 4.6→4.7→4.8→5 line; exact date not re-verified this session); knowledge cutoff not publicly disclosed.
- **IDs:** `opencode/claude-opus-4.6` (Zen ID `claude-opus-4-6`; no Free ID — paid only)
- **Context window:** 1M tokens total (BenchLM model details; an "Adaptive" thinking sibling `claude-opus-4-6-thinking` exists).
- **Modalities:** text/image in; text out; base config non-reasoning (adaptive/thinking sibling available); tool calls; JSON mode.
- **Pricing (as of 2026-09-24):** Zen $5.00 in / $25.00 out per 1M (cached read $0.50); Anthropic API same headline.
- **Architecture:** proprietary; Anthropic has not disclosed parameter count.

### Raw benchmarks found

Agent / tool use:

- Terminal-Bench 2.0: **65.4%** (BenchLM `claude-opus-4-6`)
- Tau2-Bench: **84.8%** (BenchLM); Tau3-Banking: **no verified public score found** for this ID
- Claw-Eval: **70.4%** (BenchLM)
- GDPval-AA: **no verified public score found** for this ID
- OSWorld-Verified: **72.7%**; BrowseComp **83.7%**; DeepSearchQA **73.7%**; CyberGym **66.6%**; Gert Labs **61.85%**; JobBench **36.7%** (BenchLM)

Reasoning / knowledge:

- GPQA Diamond: **91.3%** (BenchLM; GPQA-D 89.2%; AA harness 84.0%; SuperGPQA 95%)
- HLE: **53.0%** w/ tools / **40.0%** w/o tools / AA-HLE **19.1%** (BenchLM — wide harness spread)
- AA-LCR: **67.0%**; CritPt **2.8%** (BenchLM)
- Artificial Analysis Intelligence Index: **26.4** (BenchLM listing — dated for the current field)
- Omniscience Accuracy / Hallucination Rate: **45.8% / 80.1%** (BenchLM — high hallucination)
- AIME25: **99.8%**; FrontierMath v2 Tier 4 **22.9%**; MMLU-Pro 82–89% (BenchLM)

Coding:

- SWE-bench Verified: **80.8%** (BenchLM; Arcee harness 75.6%)
- LiveCodeBench Pro: **70.7%**; SWE-bench Pro **53.4%**; SWE-Rebench **65.3%**; Vibe Code Bench **57.57%**; React Native Evals **84.1%**; FrontierCode 1.1 Main **26.9%** (BenchLM)
- DeepSWE: **no verified public score found** for this ID

Long context:

- 1M window (BenchLM); AA-LCR 67.0%; no MRCR/RULER retrieval number in current coverage.

Multimodal (grounding):

- MMMU-Pro **77.3%** (AA 72.5%); ScreenSpot Pro **83.1%**; MedXpertQA-MM **64.8%**; ERQA **51.6%**; Design Arena Website **1302** (BenchLM).

### Normalized scores (1–100)

- **Tool use: 80/100.** Tau2 84.8%, Claw-Eval 70.4% and OSWorld-Verified 72.7% are strong; TB2.0 65.4% is mid and GDPval/Tau3 are unpublished — behind the 4.8/5 successors.
- **Reasoning: 78/100.** GPQA 91.3% and HLE-with-tools 53% clear frontier refs, AIME25 99.8% is elite; but AA Index 26.4, CritPt 2.8%, HLE w/o tools 19–40% and an 80.1% hallucination rate drag it down.
- **Context window: 95/100.** 1M total context (top tier band); no verified retrieval-at-512K number for 100.
- **Multimodal: 70/100.** Text+image input per Claude platform — top of the "+image in" band; MMMU-Pro 77.3%/ScreenSpot Pro 83.1%.
- **Coding: 76/100.** SWE-bench V 80.8% is solid; SWE-bench Pro 53.4% and FrontierCode 26.9% are weak; DeepSWE unpublished.
- **Cost efficiency: 55/100.** $5/$25 per 1M is Opus-class pricing for two-generation-old intelligence; poor value vs Opus 5 at the same price.
- **Overall Score: 79.8/100.** (80 + 78 + 95 + 70 + 76) / 5 = 79.8. Best-fit: continuity pick only; Opus 4.8/5 strictly dominate at equal price.

---

## Signature

- Provided by: **GLM 5.3 (z-ai/glm-5.3)** — 2026-09-24
- Method: public internet research (BenchLM, OpenCode Zen docs); scores are normalized 1–100 interpretations, not official vendor scores.
- Future sources: add a new file next to this one, e.g. `GPT_5.md`, using the same headings.
