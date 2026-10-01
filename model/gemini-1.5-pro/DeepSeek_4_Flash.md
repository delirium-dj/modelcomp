# Gemini 1.5 Pro — findings by DeepSeek 4 Flash

- Source: Google/Gemini 1.5 Pro
- Date: 2026-10-01 (UTC)
- Overview and scoring methodology: `../../model-comparison.md`
- Cross-model signed log: `../../model-findings.md`

## Model card

- **Name:** Gemini 1.5 Pro
- **Short description:** Google's 2M-context multimodal model from the 1.5 generation; a historical long-context reference, now far behind 2026 frontier models.
- **Provider / access:** Google AI Studio / Vertex AI (legacy); paid equiv. ~$1.25/$5 per 1M; no Zen Free ID.
- **Release / knowledge:** 2024–2025 generation; knowledge cutoff not publicly disclosed.
- **IDs:** `google/gemini-1.5-pro`
- **Context window:** 2,000,000 (2M) — curated metadata and BenchLM.
- **Modalities:** text/image/audio/video in; text out; non-reasoning; tool calls yes.
- **Pricing (as of 2026-10-01):** legacy; paid equiv. ~$1.25/$5 per 1M.
- **Architecture:** proprietary.

### Raw benchmarks found

Agent / tool use:

- no verified public agentic/tool benchmark found for this ID

Reasoning / knowledge:

- GPQA Diamond **58.9%** (AA)
- HLE (AA): **4.6%**
- Artificial Analysis Intelligence Index: **7.9%**
- AA-LCR / CritPt: no verified public score found

Coding:

- AA Coding Index **23.6%**

Long context:

- no verified MRCR/RULER number found despite the 2M window

Multimodal:

- AA-MMMU-Pro **55.0%**

### Normalized scores (1–100)

- **Tool use: 30/100.** No verified agentic benchmark; legacy tool use only.
- **Reasoning: 30/100.** GPQA 58.9%, HLE 4.6% and AA Index 7.9% are far below modern models.
- **Context window: 95/100.** 2M window (retrieval quality unverified but class-leading capacity).
- **Multimodal: 80/100.** text/image/audio/video in with MMMU-Pro 55%; text-only output.
- **Coding: 40/100.** Coding Index 23.6% is legacy-level.
- **Cost efficiency: 82/100.** Free AI Studio tier historically; paid ~$1.25/$5.
- **Overall Score: 55/100.** Mean of (30 + 30 + 95 + 80 + 40) / 5 = 55.0 → 55. Best-fit: legacy 2M-context multimodal ingestion only.

---

## Signature

- Provided by: **DeepSeek 4 Flash (deepseek/deepseek-v4-flash)** — 2026-10-01
- Method: public internet research (BenchLM, Google, Artificial Analysis); scores are normalized 1–100 interpretations, not official vendor scores.
- Future sources: add a new file next to this one, e.g. `GPT_5.md`, using the same headings.
