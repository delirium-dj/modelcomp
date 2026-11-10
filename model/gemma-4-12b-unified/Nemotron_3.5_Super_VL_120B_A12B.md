# Gemma 4 12B Unified — findings by Nemotron 3.5 Super VL 120B A12B

- Source: Google DeepMind / Gemma 4 12B Unified
- Date: 2026-11-11 (UTC)
- Overview and scoring methodology: `../../model-comparison.md`
- Cross-model signed log: `../../model-findings.md`

## Model card

- **Name:** Gemma 4 12B Unified
- **Short description:** Google DeepMind's Gemma 4 12B Unified — an open-weights multimodal reasoning model from the Gemma 4 family. The "Unified" variant uses an encoder-free architecture that projects raw image patches and audio waveforms directly into the LLM's embedding space. Suited for reasoning, agentic workflows, coding, and multimodal understanding.
- **Provider / access:** Google (open weights on Hugging Face `google/gemma-4-12B`); API via 1 provider on Artificial Analysis. Apache 2.0 license.
- **Release / knowledge:** Released June 3, 2026 (Artificial Analysis); training data cutoff January 2025 (HF model card).
- **IDs:** `google/gemma-4-12B` (Hugging Face). Instruction-tuned variant `google/gemma-4-12B-it`.
- **Context window:** 256,000 tokens total (HF model card); 262K per Artificial Analysis. Verified via HF model card and AA.
- **Modalities:** text + image + speech + video in; text out; reasoning yes (configurable thinking modes); function calling / native tool use yes; JSON mode / structured output yes.
- **Pricing (as of 2026-11-11):** $0.10 per 1M input tokens, $0.30 per 1M output tokens (median across providers, per Artificial Analysis); ~$0.12 per 1M blended. Open weights $0 self-host. Very cheap.
- **Architecture:** 11.95B total parameters, 48 layers, 1024 sliding window, hybrid sliding-window + full global attention, proportional RoPE (p-RoPE), encoder-free unified multimodal architecture. Apache 2.0 open weights.

### Raw benchmarks found

> List measured numbers with (source, rank/percentile, harness) for traceability.
> If a benchmark was not found, say "no verified public score found" and mark the closest proxy as provisional — never invent values.

- Terminal-Bench: no verified public score found
- Tau3 / Tau2: Tau2 (average over 3): 69.0% (HF model card); τ²-bench: 36.3% (BenchLM/AA).
- Claw-Eval: no verified public score found
- GDPval / OSWorld / Automation: GDPval-AA: 591 (BenchLM/AA); GDPval-AA normalized: 0.0% (BenchLM/AA). OSWorld: no verified public score found.
- Reasoning (GPQA / HLE / MRCR / LCR / CritPt / Index): GPQA Diamond 78.8% (HF); GPQA-D 78.8% (BenchLM/AA); AA-GPQA Diamond 75.3%; HLE w/o tools 5.2% (HF); AA-HLE 15.7%; MRCRv2 43.4% (HF); AA-LCR 63.7%; CritPt 0.0% (AA). MMLU-Pro 77.2%, AIME26 77.5%, MMMLU 83.4%, BigBench Extra Hard 53.0%.
- Coding (SWE-bench / DeepSWE / LiveCode / SciCode / SWE-Atlas): LiveCodeBench v6 72.0% (HF/BenchLM); AA Coding Index 31.0% (AA). SWE-bench / DeepSWE / SciCode / SWE-Atlas: no verified public score found. Codeforces ELO 1659 (HF).
- Cost per task / speed (if available): no per-task cost figures located. Time to first answer token 20.45s; output speed 84 tok/s (AA).

### Normalized scores (1–100)

> Derive each from the raw numbers above using the methodology in `model-comparison.md`. Add a one-sentence justification citing the key evidence, and state what caps the score.

- **Tool use: 75/100.** Native function calling and structured tool use; agentic workflows supported; Tau2 69.0%. Capped by absence of published Terminal-Bench / GDPval agentic figures.
- **Reasoning: 75/100.** GPQA Diamond 78.8%, MMLU-Pro 77.2%, AIME26 77.5% (frontier-leaning); configurable thinking/reasoning mode. Capped by very low HLE 5.2% and CritPt 0.0%.
- **Context window: 72/100.** Verified 256K-token context window (200K–500K tier → 65–84; MRCRv2 8-needle 128k at 43.4% supports mid-tier retrieval).
- **Multimodal: 85/100.** Text + image + speech + video input, text output (+video/audio in → 75–90+ range); text-only output caps the top.
- **Coding: 80/100.** LiveCodeBench v6 72.0%, Codeforces ELO 1659; coding-focused enhancements claimed. Capped by absence of SWE-bench / DeepSWE / SciCode figures.
- **Cost efficiency: 96/100.** $0.10/$0.30 per 1M API (very cheap; methodology ~$0.10/$0.20 → 97–99). Open weights $0 self-host.
- **Overall Score: 77/100.** Mean of (75 + 75 + 72 + 85 + 80) / 5 = 77.4 → 77. Best-fit: low-cost open multimodal reasoning agent for long-context document/code work; strong on price and multimodal coverage, weaker on pure knowledge reasoning (HLE).

---

## Signature

- Provided by: **Nemotron 3.5 Super VL 120B A12B (nvidia/nemotron-3.5-super-vl-120b-a12b)** — 2026-11-11
- Method: public internet research via webfetch (Hugging Face official Google model card, Artificial Analysis model page, BenchLM aggregated scores, Gemma official docs); scores are normalized 1–100 interpretations, not official vendor scores.
- Reference URLs:
  - [Hugging Face: google/gemma-4-12B — official Google model card with benchmarks](https://huggingface.co/google/gemma-4-12B)
  - [Artificial Analysis: Gemma 4 12B — Intelligence, Performance & Price Analysis](https://artificialanalysis.ai/models/gemma-4-12b/)
  - [BenchLM: Gemma 4 12B benchmark scores](https://benchlm.ai/models/gemma-4-12b)
  - [Google Gemma docs](https://ai.google.dev/gemma/docs)
- Future sources: add a new file next to this one, e.g. `GPT_5.md`, using the same headings.
