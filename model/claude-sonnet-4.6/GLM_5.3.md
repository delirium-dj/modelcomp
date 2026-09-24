# Claude Sonnet 4.6 — findings by GLM 5.3

- Source: Anthropic (`claude-sonnet-4.6`)
- Date: 2026-09-24 (UTC)
- Overview and scoring methodology: `../../model-comparison.md`
- Cross-model signed log: `../../model-findings.md`

## Model card

- **Name:** Claude Sonnet 4.6
- **Short description:** Anthropic's late-2025 Sonnet workhorse (non-thinking base config, 200K context), two generations behind Sonnet 5. Top use case: cost-conscious Claude-line coding on existing pipelines.
- **Provider / access:** OpenCode Zen `https://opencode.ai/zen/v1/messages` (Anthropic Messages API, `@ai-sdk/anthropic`); also Anthropic API and cloud partners.
- **Release / knowledge:** late 2025 (Sonnet 4.5 → 4.6 step; exact date not re-verified this session); knowledge cutoff not publicly disclosed.
- **IDs:** `opencode/claude-sonnet-4.6` (Zen ID `claude-sonnet-4-6`; no Free ID — paid only)
- **Context window:** 200K tokens total (BenchLM model details).
- **Modalities:** text/image in; text out; base config non-reasoning; tool calls; JSON mode.
- **Pricing (as of 2026-09-24):** Zen $3.00 in / $15.00 out per 1M (cached read $0.30).
- **Architecture:** proprietary; Anthropic has not disclosed parameter count.

### Raw benchmarks found

Agent / tool use:

- Terminal-Bench 2.0: **59.1%** (BenchLM `claude-sonnet-4-6`; TB 2.1 Vals harness 57.3%)
- Tau2-Bench: **79.5%** (BenchLM); Tau3-Banking: **no verified public score found** for this ID
- Claw-Eval: **67.8%** (BenchLM)
- OSWorld-Verified: **72.1%** (BenchLM; OSWorld 2.0 8.3% on the newer release)
- CyberGym **65.2%**; Gert Labs **62.92%**; JobBench **36.9%** (BenchLM)
- GDPval-AA: **no verified public score found** for this ID

Reasoning / knowledge:

- GPQA Diamond: **89.9%** (BenchLM; AA harness 79.9%; Vals 85.6% — large harness spread)
- HLE: **49.0%** w/ tools / **13.3%** AA harness (BenchLM — wide spread)
- AA-LCR: **68.3%**; CritPt **0.9%** (BenchLM)
- Artificial Analysis Intelligence Index: **24.7** (BenchLM listing)
- Omniscience Accuracy / Hallucination Rate: **38.6% / 68.5%** (BenchLM)
- MMLU-Pro (Vals) **87.3%**; SuperGPQA **95%**; FrontierMath v2 Tier 4 **8.3%**; AA-IFBench **41.2%** (BenchLM)

Coding:

- SWE-bench Verified: **79.6%** (BenchLM; Vals harness 77.4%)
- LiveCodeBench (Vals): **82.1%**
- SWE-Rebench: **60.7%**; Vibe Code Bench **51.48%**; cursorBench31 **48.8%**; FrontierCode 1.1 Main **24.3%**; React Native Evals **80.6%** (BenchLM)
- SWE-bench Pro / DeepSWE / SciCode: **no verified public score found** for this ID

Long context:

- 200K window (BenchLM); AA-LCR 68.3%; no MRCR/RULER retrieval number published.

Multimodal (grounding):

- AA-MMMU-Pro **70.6%**; CharXiv **77.4%**; Design Arena Website **1295** (BenchLM).

### Normalized scores (1–100)

- **Tool use: 70/100.** Tau2 79.5%, Claw-Eval 67.8% and OSWorld-Verified 72.1% are decent; TB 59% and the missing GDPval keep it in the mid band.
- **Reasoning: 65/100.** GPQA 80–90% straddles the frontier bar; HLE 13–49% has a wide harness spread; AA Index 24.7, CritPt 0.9% and a 68.5% hallucination rate are weak.
- **Context window: 70/100.** 200K total — the methodology's 200K reference point.
- **Multimodal: 68/100.** Text+image input per Claude platform; MMMU-Pro 70.6% is dated.
- **Coding: 72/100.** SWE-bench V 79.6% and LiveCodeBench 82.1% are solid; Vibe 51.5% and FrontierCode 24.3% are weak; Pro/DeepSWE unpublished.
- **Cost efficiency: 60/100.** $3/$15 per 1M matches the ≈60 anchor — Sonnet 5 at $2/$10 strictly dominates.
- **Overall Score: 69.0/100.** (70 + 65 + 70 + 68 + 72) / 5 = 69.0. Best-fit: legacy continuity only; Sonnet 5 is better and cheaper.

---

## Signature

- Provided by: **GLM 5.3 (z-ai/glm-5.3)** — 2026-09-24
- Method: public internet research (BenchLM, OpenCode Zen docs); scores are normalized 1–100 interpretations, not official vendor scores.
- Future sources: add a new file next to this one, e.g. `GPT_5.md`, using the same headings.
