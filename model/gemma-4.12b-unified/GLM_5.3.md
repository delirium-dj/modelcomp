# Gemma 4 12B Unified — findings by GLM 5.3

- Source: Google (`gemma-4.12b-unified`)
- Date: 2026-10-08 (UTC)
- Overview and scoring methodology: `../../model-comparison.md`
- Cross-model signed log: `../../model-findings.md`

## Model card

- **Name:** Gemma 4 12B Unified
- **Short description:** Google's mid-size open-weight dense model (11.95B, Apache 2.0) — the encoder-free Gemma 4 variant with native text+image+audio input at 256K context; aimed at local multimodal agents and cheap hosted multimodal work.
- **Provider / access:** hosted APIs (median ~$0.10/$0.30 per 1M; cheapest hosts $0.05/$0.25); self-host via Hugging Face `google/gemma-4-12B` at $0. Project meta lists Zen ID `opencode/gemma-4.12b-unified` (absent from the live Zen models list when re-checked 2026-10-08 — no Free ID).
- **Release / knowledge:** 2026 (Gemma 4 generation); knowledge cutoff not stated on tracked pages.
- **IDs:** `opencode/gemma-4.12b-unified` (project meta); Hugging Face `google/gemma-4-12B`.
- **Context window:** 256,000 (262,144) verified (BenchLM 256K); hosts commonly serve 32K–256K.
- **Modalities:** text, image, audio in (native unified input per project meta); text out; reasoning yes; tool calls yes (τ²-bench measured); JSON mode not verified.
- **Pricing (as of 2026-10-08):** ~$0.10 in / $0.30 out per 1M (median; cheapest $0.05/$0.25); self-host $0 (Apache 2.0). No Zen Free ID.
- **Architecture:** 11.95B dense, open weights, Apache 2.0 (project meta; HF model card).

### Raw benchmarks found

Agent / tool use:

- τ²-bench: **36.3%** (Artificial Analysis via BenchLM)
- GDPval-AA: **591** (0.0% normalized) (AA via BenchLM)
- Terminal-Bench / Tau3 / Claw-Eval / Toolathlon: **no verified public score found**

Reasoning / knowledge:

- GPQA Diamond: **78.8%** (model card) / **75.3%** (AA harness) (BenchLM)
- MMLU-Pro: **77.2%** (model card via BenchLM)
- AIME26: **77.5%** (model card via BenchLM)
- BBH: **53%** (model card via BenchLM)
- HLE: **5.2%** without tools (model card) / **15.7%** (AA harness) (BenchLM)
- AA-LCR: **63.7%** (AA via BenchLM)
- CritPt: **0.0%** (AA via BenchLM)
- Artificial Analysis Intelligence Index: **14.2** (AA via BenchLM)
- AA-Omniscience Index: **-52.7** (accuracy 15.6%, hallucination rate 81.0%) (AA via BenchLM)

Coding:

- LiveCodeBench v6: **72.0%** (model card via BenchLM)
- AA Coding Index: **31.0%** (AA via BenchLM)
- SWE-bench / SciCode / DeepSWE: **no verified public score found**

Multimodal:

- MMMU-Pro: **69.1%** (model card) / **69.7%** (AA harness) (BenchLM)
- MathVision: **79.7%** (model card via BenchLM)
- MMMLU: **83.4%** (model card via BenchLM)
- MedXpertQA (MM): **48.7%** (model card via BenchLM)
- audio-input benchmark: **no verified public score found**

Long context:

- 256K window verified (BenchLM); MRCRv2 **43.4%** (model card via BenchLM) is the only retrieval-style measurement — weak; AA-LCR 63.7%.

Instruction following:

- AA-IFBench: **73.5%** (AA via BenchLM)

### Normalized scores (1–100)

- **Tool use: 35/100.** τ²-bench 36.3% and GDPval-AA 591 sit below the mid bands (GDPval mid 900–1200) with no Terminal-Bench coverage — the weakest agentic profile in the Gemma 4 lineup tracked here.
- **Reasoning: 52/100.** GPQA 78.8%, MMLU-Pro 77.2% and AIME26 77.5% are strong for 12B dense, but AA Index 14.2, HLE 5.2–15.7%, CritPt 0.0% and an 81% hallucination rate cap it sharply.
- **Context window: 70/100.** 256K is just above the 200K (=70) tier floor, and the only published retrieval-style number (MRCRv2 43.4%) is weak.
- **Multimodal: 85/100.** Native unified text+image+audio input with verified image scores (MMMLU 83.4%, MathVision 79.7%, MMMU-Pro ~69%); capped by text-only output and zero published audio benchmark evidence.
- **Coding: 50/100.** LiveCodeBench v6 72.0% (vendor) is decent, but AA Coding Index 31.0% and no SWE-bench/SciCode numbers keep it in light-duty territory.
- **Cost efficiency: 96/100.** ~$0.10/$0.30 per 1M (down to $0.05/$0.25) plus free Apache 2.0 self-hosting — near the top of the paid-value band.
- **Overall Score: 58/100.** (35 + 52 + 70 + 85 + 50) / 5 = 58.4 → 58. Best-fit recommendation: local/hobby multimodal agent on a single GPU — cheap native image+audio understanding with solid knowledge; weak tools, weak retrieval, unreliable facts.

---

## Signature

- Provided by: **GLM 5.3 (zai/glm-5.3)** — 2026-10-08
- Method: public internet research (BenchLM aggregating the official Hugging Face model card and Artificial Analysis leaderboards); scores are normalized 1–100 interpretations, not official vendor scores.
- Future sources: add a new file next to this one, e.g. `GPT_5.md`, using the same headings.
