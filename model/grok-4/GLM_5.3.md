# Grok 4 — findings by GLM 5.3

- Source: xAI (`grok-4`)
- Date: 2026-09-24 (UTC)
- Overview and scoring methodology: `../../model-comparison.md`
- Cross-model signed log: `../../model-findings.md`

## Model card

- **Name:** Grok 4
- **Short description:** xAI's July-2025 frontier model (non-thinking base config as tracked), the foundation of the Grok 4 line; no longer on the Zen list. Top use case: legacy Grok-agent continuity on the xAI API.
- **Provider / access:** xAI API (docs.x.ai); **no OpenCode Zen ID** (Zen carries Grok 4.5/4.6/4.7 only).
- **Release / knowledge:** 2025-07 (Grok 4 launch; date not re-verified this session); knowledge cutoff not publicly disclosed.
- **IDs:** `grok-4` (xAI API; no Zen ID, no Free ID)
- **Context window:** 128K tokens total (BenchLM model details).
- **Modalities:** text/image in; text out; base config non-reasoning (fast-reasoning and thinking variants exist separately); tool calls; JSON mode.
- **Pricing (as of 2026-09-24):** xAI per-token list price for the base model **not verified this session**; scored provisionally at the legacy Grok flagship tier (~$3/$15).
- **Architecture:** proprietary; xAI has not disclosed parameter count.

### Raw benchmarks found

> BenchLM coverage for this ID is thin (15 rows); scores are correspondingly low-confidence.

Agent / tool use:

- Tau2-Bench: **74.9%** (BenchLM `grok-4`); Gert Labs **42.34%** (BenchLM)
- Terminal-Bench / Claw-Eval / GDPval-AA / MCP-Atlas / Tau3: **no verified public score found** for this ID

Reasoning / knowledge:

- GPQA Diamond: **87.7%** (AA harness via BenchLM — below the 90% bar)
- HLE: **26.7%** (AA-HLE via BenchLM)
- AA-LCR: **68.0%**; CritPt **2.0%** (BenchLM)
- Artificial Analysis Intelligence Index: **22.5** (BenchLM listing)
- Omniscience Accuracy / Hallucination Rate: **40.5% / 64.5%** (BenchLM)
- FrontierMath v2 Tier 4: **2.1%**; AA-IFBench **53.7%** (BenchLM)

Coding:

- React Native Evals: **72.6%** (BenchLM)
- SWE-bench Verified / LiveCodeBench / SciCode / DeepSWE / Vibe Code Bench: **no verified public score found** for this ID

Long context:

- 128K window (BenchLM); no retrieval number published.

Multimodal (grounding):

- AA-MMMU-Pro **68.8%** (BenchLM); image input per the Grok 4 line.

### Normalized scores (1–100)

- **Tool use: 60/100.** Only Tau2 74.9% and Gert Labs 42.3% are verified; every core agent harness is unpublished — mid-band with low confidence.
- **Reasoning: 58/100.** GPQA 87.7% misses the frontier bar; HLE 26.7%, CritPt 2.0%, AA Index 22.5 and FrontierMath T4 2.1% are weak; hallucination 64.5% mid.
- **Context window: 60/100.** 128K total — mid of the 100K–200K band.
- **Multimodal: 65/100.** Text+image input per the Grok 4 line; MMMU-Pro 68.8% is dated.
- **Coding: 55/100.** Only React Native Evals 72.6% verified; the mainstream coding harnesses are unpublished for this ID.
- **Cost efficiency: 60/100.** Pricing unverified (no Zen ID); provisionally at the legacy ≈$3/$15 (≈60) anchor.
- **Overall Score: 59.6/100.** (60 + 58 + 60 + 65 + 55) / 5 = 59.6. Best-fit: none vs current stock — Grok 4.5/4.6 dominate at verified prices.

---

## Signature

- Provided by: **GLM 5.3 (z-ai/glm-5.3)** — 2026-09-24
- Method: public internet research (BenchLM, OpenCode Zen docs); scores are normalized 1–100 interpretations, not official vendor scores.
- Future sources: add a new file next to this one, e.g. `GPT_5.md`, using the same headings.
