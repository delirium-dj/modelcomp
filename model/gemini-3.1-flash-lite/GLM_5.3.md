# Gemini 3.1 Flash-Lite — findings by GLM 5.3

- Source: Google (`gemini-3.1-flash-lite`)
- Date: 2026-09-24 (UTC)
- Overview and scoring methodology: `../../model-comparison.md`
- Cross-model signed log: `../../model-findings.md`

## Model card

- **Name:** Gemini 3.1 Flash-Lite
- **Short description:** Google's Lite tier of the 3.1 Flash generation (early 2026, non-thinking config), 1M context at the cheapest Gemini price of its era. Top use case: bulk multimodal processing where reasoning can be minimal.
- **Provider / access:** Google AI Studio/Gemini API; **no OpenCode Zen ID** in the current Zen list (Zen's Lite tier is now 3.5 Flash-Lite).
- **Release / knowledge:** early 2026 (3.1 generation); knowledge cutoff not publicly disclosed.
- **IDs:** Google `gemini-3.1-flash-lite` (no Zen ID, no Free ID)
- **Context window:** 1M tokens total (BenchLM model details).
- **Modalities:** text/image in; text out; non-reasoning config (BenchLM); tool calls; JSON mode.
- **Pricing (as of 2026-09-24):** per-token list price not published on tracked aggregators; Lite-tier pricing historically cheapest in the Gemini line — scored provisionally.
- **Architecture:** proprietary; Google has not disclosed parameter count.

### Raw benchmarks found

> BenchLM coverage for this ID is thin (8 rows); scores are correspondingly low-confidence.

Agent / tool use:

- Terminal-Bench 2.1 (Vals harness): **34.1%** (BenchLM `gemini-3-1-flash-lite`)
- Gert Labs: **38.46%** (BenchLM)
- Tau2 / GDPval-AA / Claw-Eval / MCP-Atlas: **no verified public score found** for this ID

Reasoning / knowledge:

- GPQA Diamond (Vals): **81.1%** (BenchLM — below the 90% bar)
- MMLU-Pro (Vals): **86.2%** (BenchLM)
- HLE / AA-LCR / AA Index: **no verified public score found** for this ID

Coding:

- SWE-bench Verified (Vals): **62.8%** (BenchLM)
- LiveCodeBench (Vals): **80.1%**; Vibe Code Bench **0.00%** (BenchLM)
- SciCode / DeepSWE / SWE-bench Pro: **no verified public score found** for this ID

Long context:

- 1M window (BenchLM); no retrieval number published.

Multimodal (grounding):

- CharXiv **73.2%** (BenchLM); image input per the Gemini Lite family.

### Normalized scores (1–100)

- **Tool use: 42/100.** TB2.1 34.1% and Gert Labs 38.5% are weak; the core agent harnesses are unpublished — low-mid with low confidence.
- **Reasoning: 58/100.** GPQA 81.1% is under the frontier bar; MMLU-Pro 86.2% is decent for a Lite tier; HLE and LCR unpublished.
- **Context window: 95/100.** 1M total context (top tier band); no retrieval verification for 100.
- **Multimodal: 82/100.** Image input with CharXiv 73.2% — mid-tier vision for the family; no audio/video verified for this exact ID.
- **Coding: 52/100.** SWE-bench V 62.8% and LiveCodeBench 80.1% are passable for a Lite tier; Vibe 0.0% is a red flag for app-building.
- **Cost efficiency: 90/100.** Pricing unverified but Lite-tier — provisionally near the cheapest Gemini band.
- **Overall Score: 65.8/100.** (42 + 58 + 95 + 82 + 52) / 5 = 65.8. Best-fit: none vs current stock — Gemini 3.5 Flash-Lite supersedes it at a verified price.

---

## Signature

- Provided by: **GLM 5.3 (z-ai/glm-5.3)** — 2026-09-24
- Method: public internet research (BenchLM, OpenCode Zen docs); scores are normalized 1–100 interpretations, not official vendor scores.
- Future sources: add a new file next to this one, e.g. `GPT_5.md`, using the same headings.
