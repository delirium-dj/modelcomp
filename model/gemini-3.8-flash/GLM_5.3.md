# Gemini 3.8 Flash — findings by GLM 5.3

- Source: Google (`gemini-3.8-flash`)
- Date: 2026-09-24 (UTC)
- Overview and scoring methodology: `../../model-comparison.md`
- Cross-model signed log: `../../model-findings.md`

## Model card

- **Name:** Gemini 3.8 Flash
- **Short description:** Google's fast flagship-tier Flash reasoning model (Sept 2026); the "high" reasoning effort variant is the default. Top use case: high-throughput agentic coding and multimodal analysis at Flash pricing.
- **Provider / access:** OpenCode Zen `https://opencode.ai/zen/v1/models/gemini-3.8-flash` (Google AI SDK); also Google AI Studio/Gemini API. Chat Completions-style via Zen's google endpoint.
- **Release / knowledge:** 2026-09-02; knowledge cutoff not publicly disclosed.
- **IDs:** `opencode/gemini-3.8-flash` (Zen; no Free ID exists on Zen — paid only)
- **Context window:** 1M tokens total (verified via Artificial Analysis technical specs and BenchLM model details).
- **Modalities:** text/image/speech/video in; text out; reasoning yes (effort levels, "high" default); tool calls; JSON mode.
- **Pricing (as of 2026-09-24):** Zen $1.50 in / $7.50 out per 1M (cached read $0.15); Google first-party API $0.75 / $3.75 per 1M (cache discount 90%).
- **Architecture:** proprietary; Google has not disclosed parameter count.

### Raw benchmarks found

Agent / tool use:

- Terminal-Bench 2.1: **89.4%** (BenchLM `gemini-3-8-flash`; Vals harness 81.3%)
- Terminal-Bench 4.0: **19.1%** (BenchLM; new much harder agentic terminal bench, field is low)
- Tau3-Banking (AA harness): **44.9%** (BenchLM `aatau3banking`)
- GDPval-AA: **1545 Elo** (BenchLM; normalized 45.6%)
- Claw-Eval / ClawProBench: **no verified public score found**
- AA AutomationBench: **59.9%**; OSWorld 2.0 **59.0%** (BenchLM); AA Agentic Index **41.1%**; ApprenticeBench **24%**
- Toolathon / MCP-Atlas: **no verified public score found**

Reasoning / knowledge:

- GPQA Diamond: **95.3%** (AA-GPQA via BenchLM; Vals harness 94.4%)
- HLE: **47.8%** AA harness / **54.9%** HLE-Verified (BenchLM)
- LCR / MLCR: AA-LCR **81.3%** / MLCR-AA **21.7%** (BenchLM)
- CritPt: **18.3%** (BenchLM)
- Artificial Analysis Intelligence Index: **41** (#40/211 in class, AA v4.3.2)
- Omniscience Accuracy / Hallucination Rate: **54.6% / 55.2%** (BenchLM AA-Omniscience)
- MMLU-Pro (Vals): **90.2%** (BenchLM)

Coding:

- SWE-bench Verified (Vals): **80.0%**
- DeepSWE: **73.8%** (BenchLM)
- LiveCodeBench (Vals): **89.5%**
- SciCode / AA-SciCode: **56.6%** (BenchLM)
- AA Coding Index: **76.3%**; CursorBench 3.2 **69.2%** / 4.0 **39.6%**; FrontierSWE v2 **19.6%** (BenchLM)
- Vibe Code Bench: **no verified public score found**

Long context:

- 1M window (AA/BenchLM); AA-LCR 81.3% at long context; no MRCR/RULER retrieval-at-512K number published for this exact ID.

Multimodal (grounding):

- MMMU-Pro **85.6%**, CharXiv w/o tools **86.2%**, LVBench **87.1%** (BenchLM); Finance Agent v2 **61.4%**.

### Normalized scores (1–100)

- **Tool use: 87/100.** TB2.1 89.4% is at the frontier reference (~88%+), Tau3 44.9% just under the ~50% reference and GDPval 1545 below the 1750+ tier; OSWorld 59% is mid-field. Capped by GDPval/Tau3 not quite hitting frontier tool-use bars.
- **Reasoning: 88/100.** GPQA 95.3% and HLE 47.8/54.9% are frontier-level; CritPt 18.3% and AA Index 41 keep it below the 90+ tier.
- **Context window: 95/100.** 1M total context (top tier band); no verified ≥98% retrieval-at-512K number to justify 100.
- **Multimodal: 95/100.** Text+image+speech+video in with text out (audio input puts it in the 90–100 band), backed by MMMU-Pro 85.6% / LVBench 87.1%.
- **Coding: 93/100.** SWE-bench V 80.0%, LiveCodeBench 89.5%, SciCode 56.6%, Coding Index 76.3%, DeepSWE 73.8% — at or above frontier references except DeepSWE (marginally under 74%); TB4.0 19.1% on the new harder harness drags slightly.
- **Cost efficiency: 80/100.** Paid at $1.50/$7.50 on Zen ($0.75/$3.75 first-party) — between the ~$1.25/$4.25 (≈88) and $3/$15 (≈60) anchors; strong speed (288 tok/s) partially compensates.
- **Overall Score: 91.6/100.** (87 + 88 + 95 + 95 + 93) / 5 = 91.6. Best-fit: default paid pick when you want near-flagship agentic coding and full multimodal input at Flash speed and mid price.

---

## Signature

- Provided by: **GLM 5.3 (z-ai/glm-5.3)** — 2026-09-24
- Method: public internet research (Artificial Analysis, BenchLM, OpenCode Zen docs); scores are normalized 1–100 interpretations, not official vendor scores.
- Future sources: add a new file next to this one, e.g. `GPT_5.md`, using the same headings.
