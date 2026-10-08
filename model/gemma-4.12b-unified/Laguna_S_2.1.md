# Gemma 4 12B Unified — findings by Laguna S 2.1

- Source: Artificial Analysis (`https://artificialanalysis.ai/models/gemma-4-12b`), BenchLM (`https://benchlm.ai/models/gemma-4-12b`), Hugging Face (`https://huggingface.co/google/gemma-4-12B-it`), Google DeepMind Technical Report (`https://arxiv.org/abs/2607.02770`)
- Date: 2026-10-08 (UTC)
- Overview and scoring methodology: `../../model-comparison.md`
- Cross-model signed log: `../../model-findings.md`

## Model card

- **Name:** Gemma 4 12B Unified (Reasoning)
- **Short description:** Google DeepMind's encoder-free open-weights dense model (11.95B params, Apache 2.0) with native text+image+audio(+video) input at 256K context — best for local multimodal agents via unified encoder-free architecture.
- **Provider / access:** Google; managed API via 10 providers (per AA); self-host free (Apache 2.0, `noFreeId: true` per `meta.json`); OpenCode Zen: `google/gemma-4.12b-unified` (per `meta.json`)
- **Release / knowledge:** Released June 3, 2026; knowledge cutoff January 2025 (per HF model card)
- **IDs:** `opencode/gemma-4.12b-unified` (per `meta.json`); `google/gemma-4-12B-it` (HuggingFace, instruction-tuned); `google/gemma-4-12B` (base, pre-trained)
- **Architecture:** Dense (unified, encoder-free); 11.95B parameters; 48 layers; sliding window 1024 tokens; hybrid attention (local sliding window + global); Proportional RoPE (p-RoPE); unified embedding (raw image patches and audio waveforms projected directly into LLM embedding space)
- **Context window:** 262,144 (256K) (per AA, HF model card, and `meta.json`)
- **Modalities:** Text, image, audio (speech), and video input; text output (per AA and HF model card; `meta.json` states "Text, image, audio in; text out" but model card confirms video support via code examples and "Extended Multimodalities" section)
- **Pricing (as of 2026-10-08):** $0.10 input / $0.30 output per 1M tokens (AA median across 10 providers); meta.json: OpenRouter ~$0.09/$0.30 (cheapest $0.05/$0.25); self-host $0 (Apache 2.0); blended rate $0.12 per 1M (per AA); `noFreeId: true`
- **Reasoning:** Yes (configurable thinking mode, chain-of-thought; per HF model card and AA)
- **Speed:** 115.0 tokens/s (AA, rank #18/142 for medium-size open-weight models, median: 82.4 t/s)
- **TTFT:** 2.45s (AA, "somewhat higher than average")
- **License:** Apache 2.0 (per HF, AA, and `meta.json`)
- **Status:** Current (not deprecated)

### Raw benchmarks found

> Sources: Artificial Analysis (`https://artificialanalysis.ai/models/gemma-4-12b`), BenchLM (`https://benchlm.ai/models/gemma-4-12b`), Hugging Face model card (`https://huggingface.co/google/gemma-4-12B-it`), Google DeepMind Technical Report (`https://arxiv.org/abs/2607.02770`). BenchLM covers 26 of 623 benchmarks. AA Intelligence Index = 14 (estimated, rank #21/142 for medium-size open-weight, median: 8). Confidence: high for reported benchmarks.

Agent / tool use:

- **GDPval-AA:** **0.0%** — (BenchLM citing AA; normalized score; extremely weak)
- **GDPval-AA (Elo):** **591** — (BenchLM citing AA; below 500 baseline + 91, very weak; frontier models ~1200+)
- **τ²-bench:** **43.6%** — (BenchLM citing AA; moderate)
- **Terminal-Bench 4.0:** no verified public score found (not reported)
- **Terminal-Bench 2.1:** no verified public score found (not reported)
- **AA-Briefcase v1.1:** no verified public score found (part of Intelligence Index but not broken out)
- **AA Agentic Index:** no verified public score found
- **OSWorld-Verified:** no verified public score found
- **Claw-Eval:** no verified public score found

Reasoning / knowledge:

- **Artificial Analysis Intelligence Index:** **14** (estimated) — (AA v4.3.2, rank #21/142 for medium-size open-weight, median: 8)
- **Artificial Analysis Intelligence Index (BenchLM):** **14.2%** — (BenchLM citing AA; consistent with AA)
- **AA-GPQA Diamond:** **75.3%** — (BenchLM citing AA; moderate)
- **GPQA Diamond:** **78.8%** — (HF model card; moderate-strong)
- **AA-HLE:** **15.7%** — (BenchLM citing AA; very weak)
- **HLE (no tools):** **5.2%** — (HF model card; extremely weak)
- **AA-LCR:** **63.7%** — (BenchLM citing AA; moderate)
- **CritPt:** **0.0%** — (BenchLM citing AA; weak)
- **AA-Omniscience Index:** **-52.7%** — (BenchLM citing AA; very poor)
- **AA-Omniscience Accuracy:** **15.6%** — (BenchLM citing AA; very weak)
- **AA-Omniscience Hallucination Rate:** **81.0%** — (BenchLM citing AA; very high)
- **MMLU-Pro:** **77.2%** — (HF model card; moderate-strong)
- **MMMLU:** **83.4%** — (HF model card; strong)
- **BigBench Extra Hard:** **53.0%** — (HF model card; moderate)
- **AIME 2026:** **77.5%** — (HF model card; strong for math)
- **BBH:** **53%** — (HF model card; moderate)
- **MRCR v2 (8 needle 128k):** **43.4%** — (HF model card; weak for 256K context)
- **AA-IFBench:** **73.5%** — (BenchLM citing AA; moderate)

Coding:

- **AA Coding Index:** **31.0%** — (BenchLM citing AA; below average)
- **AA-SciCode:** no verified public score found (not reported for this model)
- **LiveCodeBench v6:** **72.0%** — (HF model card; moderate)
- **SWE-bench Verified:** no verified public score found (not reported)
- **SWE-bench Multilingual:** no verified public score found
- **DeepSWE:** no verified public score found
- **Codeforces ELO:** **1659** — (HF model card; moderate for a 12B model)

Multimodal & grounded:

- **MMMU-Pro:** **69.1%** — (HF model card and BenchLM citing AA: 69.7%; moderate-strong)
- **AA-MMMU-Pro:** **69.7%** — (BenchLM citing AA; moderate-strong)
- **MATH-Vision:** **79.7%** — (HF model card; strong)
- **MedXpertQA (MM):** **48.7%** — (HF model card; moderate)
- **OmniDocBench 1.5:** **0.164** (edit distance, lower is better) — (HF model card; moderate)
- **RealWorldQA:** no verified public score found
- **VideoMME:** no verified public score found (video input supported but no VideoMME score)
- **CountBench:** no verified public score found
- **ScreenSpot Pro:** no verified public score found

Long context:

- **MRCR v2 (8 needle 128k):** **43.4%** — (HF model card; weak for 256K context)
- **AA-LCR:** **63.7%** — (BenchLM citing AA; moderate)
- **RULER:** no verified public score found (not reported)

### Normalized scores (1–100)

> Method: `model-comparison.md` v4. Overall = half-up mean of the five quality dims (see `RULES.md`). Cost excluded from Overall.
> Confidence: moderate — 26 public benchmarks found across 3 sources (AA, BenchLM, HuggingFace). Note: `meta.json` tracks `opencode/gemma-4.12b-unified`; model card data is for `google/gemma-4-12B-it` (HuggingFace) — same model, different deployment. AA Intelligence Index is "Estimated" (not yet independently computed, per AA model page).

- **Tool use: 36/100.** GDPval-AA at 0.0% (Elo 591) is extremely weak — well below the 500 baseline and frontier ~1200+. τ²-bench at 43.6% is moderate. No Terminal-Bench 2.1 or 4.0 scores (not reported). No AA-Briefcase, AA Agentic Index, OSWorld, or Claw-Eval. With only two agentic benchmarks and GDPval-AA being very poor, tool use is estimated at 36.

- **Reasoning: 44/100.** Intelligence Index 14 → base = 14 + 30 = 44 (per scoring methodology, estimated). GPQA Diamond at 75.3% (AA) / 78.8% (HF) is moderate-strong (below 90% frontier). AA-HLE at 15.7% / HLE 5.2% is extremely weak (well below ~37.5% frontier). CritPt at 0.0% is at the frontier threshold. AA-LCR at 63.7% is moderate (below ~95% frontier). AA-Omniscience Index at -52.7 is very poor (extreme hallucination: 81% rate, 15.6% accuracy). MMLU-Pro at 77.2% and MMMLU at 83.4% are strong. BigBench Extra Hard at 53.0% is moderate. Despite strong knowledge (MMLU-Pro 77.2%, MMMLU 83.4%), the terrible hallucination metrics and weak HLE drag down the score.

- **Context window: 72/100.** 262,144 (256k) tokens (per AA, HF model card, and `meta.json`). ≥256K tier → 72. MRCR v2 at 43.4% is weak for the 256K context (frontier ~95%+ at 256K). AA-LCR at 63.7% confirms moderate long-context reasoning. No verified ≥98% token-retrieval at longer ranges.

- **Multimodal: 90/100.** Text, image, audio (speech), and video input; text output (per AA and HF model card: "Supports: text, image, speech, and video"; HF model card explicitly lists audio encoder ~300M params for 12B Unified, video code examples shown). Per methodology: "+audio in = 90–100". With text+image+audio+video in, text out: 90. No non-text output (no image generation, no audio output).

- **Coding: 47/100.** AA Coding Index at 31.0% is below average (weak). AA-SciCode not reported for this model. LiveCodeBench v6 at 72.0% (HF) is moderate-strong (frontier ~85%+). No SWE-bench Verified or DeepSWE scores. Codeforces ELO 1659 is moderate for a 12B model. Without SWE-bench or DeepSWE, and with weak AA Coding Index, coding is estimated at 47.

- **Cost efficiency: 65/100.** $0.10 input / $0.30 output per 1M tokens (AA median across 10 providers; `meta.json`: ~$0.09/$0.30, cheapest $0.05/$0.25). Blended rate $0.12 per 1M (per AA FAQ). At $0.10/$0.30, input is below $0.15 tier (→ 80) but output is above $0.15 (→ 65). AA notes model is "somewhat expensive" for its class (peer median: $0.03 input, $0.15 output). `noFreeId: true` (no Zen free tier). Self-host free (Apache 2.0). Using 65 as a balanced estimate — cheap in absolute terms but somewhat expensive relative to peers, and output price falls in the "$0.15–$1" tier.

- **Overall Score: 58/100.** Mean of five non-cost dimensions: (36 + 44 + 72 + 90 + 47) / 5 = 289 / 5 = 57.8 → **58**. BenchLM overall 31.9/100 (#163/887, 26 of 623 benchmarks — conservative due to partial coverage). Strong multimodal capabilities (90) with text+image+audio+video input, good knowledge (MMMLU 83.4%, MMLU-Pro 77.2%), and moderate coding (LiveCodeBench 72.0%). Severely limited by extremely weak agentic performance (GDPval-AA Elo 591, 0.0% normalized), poor hallucination metrics (Omniscience Index -52.7, Accuracy 15.6%, Hallucination 81%), weak HLE (5.2%), and low Intelligence Index (14, estimated). Moderate cost ($0.10/$0.30) but "somewhat expensive" for its class.

---

## Signature

- Provided by: **Laguna S 2.1 (poolside/laguna-s-2.1)** — 2026-10-08
- Method: public internet research via Artificial Analysis, BenchLM, HuggingFace, and Google DeepMind Technical Report; scores are normalized 1–100 interpretations, not official vendor scores. Zero-influence: did not read peer `model/` findings files during research.
- Notes: `meta.json` tracks `opencode/gemma-4.12b-unified`; model card data is for `google/gemma-4-12B-it` (HuggingFace) — same model, different deployment. AA Intelligence Index is "Estimated" (not yet independently computed). BenchLM covers 26 of 623 benchmarks (partial coverage, conservative overall score). `noFreeId: true` — no free Zen tier; self-host is free (Apache 2.0).
- Future sources: add a new file next to this one, e.g. `Gemma_4_12B_Unified_Tech_Report.md`, using the same headings.

---
