# Gemma 4 12B Unified — findings by Nemotron 3.5 Super VL 120B A12B

- Source: Hugging Face model card (`google/gemma-4-12B`, Google DeepMind), Gemma 4 Technical Report (arxiv 2607.02770), Gemma launch blog (`blog.google/.../introducing-gemma-4-12B/`), ai.google.dev Gemma docs (`ai.google.dev/gemma/docs/core`)
- Date: 2026-11-06 (UTC)
- Overview and scoring methodology: `../../model-comparison.md`
- Cross-model signed log: `../../model-findings.md`

## Model card

- **Name:** Gemma 4 12B Unified (Google DeepMind)
- **Short description:** Gemma 4 family open-weights multimodal model — 11.95B dense parameters, encoder-free "unified" architecture projecting raw image patches and audio waveforms directly into the LLM embedding space; text/image/audio in, text out; 256K context; Apache 2.0; thinking/reasoning mode; native function calling; released Jul 2026 (arxiv 2607.02770).
- **Provider / access:** Google DeepMind; open weights on Hugging Face `google/gemma-4-12B` (Apache 2.0); instruction-tuned `google/gemma-4-12B-it`; self-host via Transformers/llama.cpp; hosted pricing via OpenCode Zen ~$0.10/$0.25 per 1M in/out.
- **Release / knowledge:** Technical report arxiv 2607.02770 (Jul 2 2026); training data cutoff January 2025.
- **IDs:** `google/gemma-4-12B` (HF base), `google/gemma-4-12B-it` (HF instruct), `opencode/gemma-4-12b-unified` (OpenCode Zen route).
- **Context window:** 256K tokens total (HF model card table — 12B Unified supports 256K, same as 26B A4B/31B; E2B/E4B are 128K).
- **Modalities:** Text, image, audio in; text out (multimodal — NOT text-only); reasoning yes (thinking mode, `<|think|>` trigger); tool calls yes (native function calling/structured output); JSON mode via structured output.
- **Pricing (as of 2026-11-06):** Apache 2.0 open weights — self-host effectively $0; hosted via OpenCode Zen ~$0.10/$0.25 per 1M in/out.
- **Architecture:** 11.95B total parameters (dense), 48 layers, sliding window 1024 tokens, hybrid local sliding-window + full global attention, unified Keys/Values, Proportional RoPE, 262K vocabulary, encoder-free multimodal projection, BF16.

### Raw benchmarks found

All figures below are from the Gemma 4 Technical Report / Hugging Face model card benchmark table (instruction-tuned evaluation), verified 2026-11-06.

Agent / tool use:

- Tau2 (average over 3): **69.0%** (HF model card / arxiv 2607.02770)
- Native function calling / structured output: advertised (HF model card core capabilities); no isolated public harness % found.

Reasoning / knowledge:

- GPQA Diamond: **78.8%** (HF model card / arxiv 2607.02770)
- HLE no tools: **5.2%** (HF model card / arxiv 2607.02770)
- AIME 2026 no tools: **77.5%** (HF model card / arxiv 2607.02770)
- MMLU Pro: **77.2%** (HF model card / arxiv 2607.02770)
- MMMLU: **83.4%** (HF model card / arxiv 2607.02770)
- BigBench Extra Hard: **53.0%** (HF model card / arxiv 2607.02770)
- CritPt: no verified public score found
- Artificial Analysis Intelligence Index: no verified public score found

Coding:

- LiveCodeBench v6: **72.0%** (HF model card / arxiv 2607.02770)
- Codeforces ELO: **1659** (HF model card / arxiv 2607.02770)
- DeepSWE: no verified public score found
- SciCode: no verified public score found
- SWE-Bench Verified: no verified public score found
- SWE-Atlas: no verified public score found

Long context:

- MRCR v2 8 needle @128k: **43.4%** average (HF model card / arxiv 2607.02770)
- Declared 256K context; MRCR measured at 128K only — no public retrieval curve at full 256K.

### Conflicting results noted

- None material — single vendor technical report table; figures are self-reported by Google DeepMind but published in an arxiv technical report with a model card, so treated as verified vendor benchmarks rather than unverified marketing claims.
- HLE with search is blank for 12B Unified (only listed for 31B/26B); audio CoVoST/FLEURS marked with asterisk (excluding Chinese).

### Normalized scores (1–100)

Derived from the raw numbers above using the methodology in `model-comparison.md`; scores are normalized 1–100 interpretations, not official vendor scores.

**OVERALL SCORE FORMULA (v4, see `RULES.md`):**
Overall = half-up mean of the five quality dims `(Tool + Reasoning + Context + Multimodal + Coding) / 5`.
**NEVER include Cost efficiency** — scored independently.

- **Tool use: 72/100.** Tau2 69.0% (mid band per methodology: Tau3 ~10–25% → 50–70; Tau2 69% exceeds that), native function calling; capped by no Terminal-Bench/GDPval/OSWorld numbers found.
- **Reasoning: 63/100.** GPQA Diamond 78.8% (mid-high), AIME 2026 77.5%, MMLU Pro 77.2%; but HLE 5.2% (<10%, mid band), no CritPt/Intelligence Index; capped by weak HLE and missing independent index.
- **Context window: 70/100.** Declared and verified 256K total (200K–500K band = 65–84); MRCR 43.4% at 128K needle confirms usable retrieval mid-window; capped by no retrieval curve at full 256K.
- **Multimodal: 80/100.** Text + image + audio in, text out (+audio in or any non-text out → 90–100 band; audio only on 12B/E2B/E4B so partially applies); image + text = 75–90; scored 80 reflecting image+audio input coverage with text-only output.
- **Coding: 70/100.** LiveCodeBench v6 72.0%, Codeforces ELO 1659; capped by no SWE-Bench/DeepSWE/SciCode/SWE-Atlas numbers found; mid band per methodology (LiveCode 80% → 65–75).
- **Cost efficiency: 100/100.** Apache 2.0 open weights — self-host effectively $0; not counted toward Overall.
- **Overall Score: 71/100.** Half-up mean of (72 + 63 + 70 + 80 + 70) / 5 = 71.0 → 71. Best-fit recommendation: strong open multimodal reasoner/coder for local deployment; GPQA 78.8 and LiveCodeBench 72 are competitive, HLE 5.2 and missing independent agent benchmarks keep it below frontier.

---

## Signature

- Provided by: **Nemotron 3.5 Super VL 120B A12B (nvidia/NVIDIA-Nemotron-3.5-Super-VL-120B-A12B-BF16)** — 2026-11-06
- Method: public internet research (Hugging Face google/gemma-4-12B model card + Gemma 4 Technical Report arxiv 2607.02770 + Google launch blog + ai.google.dev docs); scores are normalized 1–100 interpretations, not official vendor scores.
- Reference URLs:
  - [Hugging Face — google/gemma-4-12B model card](https://huggingface.co/google/gemma-4-12B)
  - [Gemma 4 Technical Report (arxiv 2607.02770)](https://arxiv.org/abs/2607.02770)
  - [Google — Introducing Gemma 4 12B](https://blog.google/innovation-and-ai/technology/developers-tools/introducing-gemma-4-12B/)
  - [ai.google.dev Gemma docs](https://ai.google.dev/gemma/docs/core)
- Future sources: add a new file next to this one, using the same headings.
