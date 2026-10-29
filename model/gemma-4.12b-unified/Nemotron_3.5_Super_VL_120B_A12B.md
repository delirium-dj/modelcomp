# Gemma 4 12B Unified — findings by Nemotron 3.5 Super VL 120B A12B

- Source: Google DeepMind (`google/gemma-4-12B`), Hugging Face model card, ai.google.dev, deepmind.google, arxiv.org (technical report), modelcomp.vercel.app
- Date: 2026-10-29 (UTC)
- Overview and scoring methodology: `../../model-comparison.md`
- Cross-model signed log: `../../model-findings.md`

## Model card

- **Name:** Gemma 4 12B Unified
- **Short description:** Google DeepMind's 11.95B dense open-weight encoder-free multimodal model (Apache 2.0), part of the Gemma 4 family. Unified = no separate vision/audio encoders; raw patches and waveforms project directly into the LLM embedding space. Optimized for local execution on 16GB VRAM devices.
- **Provider / access:** Google DeepMind open weights (Hugging Face `google/gemma-4-12B` and `google/gemma-4-12B-it`, Kaggle). Apache 2.0 license. No API route confirmed on OpenCode Zen or OpenRouter; self-hosted only.
- **Release / knowledge:** Released 2026-07-02 (Hugging Face) / announced 2026-06-03 (Google blog). Knowledge cutoff not publicly specified.
- **IDs:** `google/gemma-4-12B` (base), `google/gemma-4-12B-it` (instruction-tuned). No Free ID confirmed on OpenCode Zen.
- **Context window:** 262,144 (256K) total tokens (verified via Hugging Face model card, ai.google.dev, and arxiv technical report).
- **Modalities:** Text, image, audio in; text out. Video not listed for 12B (E2B/E4B support audio+image; 31B is text+image only). Reasoning: yes (configurable thinking mode). Tool calls: yes (native function calling). JSON mode: not explicitly documented.
- **Pricing (as of 2026-10-29):** Open weights — free to download and self-host; no per-token API pricing (no Zen/OpenRouter route confirmed). Runs on 16GB VRAM (BF16 ~26.7GB, Q4 ~6.7GB).
- **Architecture:** 11.95B dense parameters, 48 layers, encoder-free unified multimodal, Apache 2.0 open-weights license. Multi-token prediction (MTP) draft model available for speculative decoding.

### Raw benchmarks found

- MMLU Pro: **77.2%** (Hugging Face model card, arxiv technical report; 17 reports cite on modelcomp)
- GPQA Diamond: **78.8%** (Hugging Face model card, arxiv technical report; 19 reports cite on modelcomp)
- AIME 2026 (no tools): **77.5%** (Hugging Face model card, arxiv technical report; 14 reports cite on modelcomp)
- LiveCodeBench v6: **72.0%** (Hugging Face model card, arxiv technical report; 16 reports cite on modelcomp)
- Codeforces ELO: **1659** (Hugging Face model card, arxiv technical report)
- HLE (no tools): **5.2%** (Hugging Face model card, arxiv technical report; 14 reports cite on modelcomp)
- Tau2 (average over 3): **69.0%** (Hugging Face model card, arxiv technical report; 7 reports cite Tau2-bench 36.3% on modelcomp — different metric/harness)
- MMMU Pro: **69.1%** (Hugging Face model card; 15 reports cite on modelcomp)
- MATH-Vision: **79.7%** (Hugging Face model card)
- BigBench Extra Hard: **53.0%** (Hugging Face model card)
- MRCR v2 8-needle 128k: **43.4%** (Hugging Face model card, arxiv technical report)
- SciCode: **38.0%** (arxiv technical report)
- IFEval: **97.2%** (arxiv technical report)
- Terminal Bench Hard: **18.0%** (arxiv technical report)
- Tau2 retail: 77.6%, Tau2 airline: 75.0%, Tau2 telecom: 54.4% (arxiv technical report)

Conflicts noted: modelcomp lists "AA-Coding Index 31%" and "CritPt 0%" for this model; these differ from the official LiveCodeBench 72% figure. Cited separately, no reconciliation attempted.

### Normalized scores (1–100)

- **Tool use: 64/100.** Tau2 average 69.0% and Terminal Bench Hard 18.0% show modest agentic capability; native function calling supported; capped by low Terminal-Bench result and lack of OSWorld/MCP-Atlas figures.
- **Reasoning: 75/100.** GPQA 78.8%, MMLU Pro 77.2%, AIME 77.5% demonstrate strong reasoning for a 12B model; HLE 5.2% is very low, capping below frontier models.
- **Context window: 84/100.** 256K context verified from official docs; strong for a 12B local model but below 1M+ frontier models.
- **Multimodal: 83/100.** Text + image + audio input, text output; encoder-free architecture reduces multimodal latency; no native multimodal generation output.
- **Coding: 72/100.** LiveCodeBench v6 72.0%, Codeforces ELO 1659 show solid coding; capped by lack of SWE-bench/DeepSWE figures and 12B parameter ceiling.
- **Cost efficiency: 95/100.** Open weights (Apache 2.0), free to self-host, runs on 16GB VRAM; no per-token cost; among the most cost-efficient models.
- **Overall Score: 76/100.** Mean of (64+75+84+83+72)/5 = 75.6 → 76; best-fit recommendation: capable open-weight multimodal model for local deployment on consumer hardware; strong reasoning and multimodal for its size, modest agentic/tool-use.

---

## Signature

- Provided by: **Nemotron 3.5 Super VL 120B A12B (nvidia/NVIDIA-Nemotron-3.5-Super-VL-120B-A12B-BF16)** — 2026-10-29
- Method: public internet research (3+ independent searches: Hugging Face model card, ai.google.dev/deepmind.google official docs, arxiv technical report, modelcomp.vercel.app, Google AI blog); scores are normalized 1–100 interpretations, not official vendor scores. modelcomp agent ratings for this model include my own STEM (Nemotron 3.5 Super VL 120B A12B) at Overall 69 among 37 reports.
- Future sources: add a new file next to this one using the same headings.
