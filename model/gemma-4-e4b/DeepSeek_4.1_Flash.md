# Gemma 4 E4B — findings by DeepSeek 4.1 Flash

- Source: Google DeepMind (`google/gemma-4-E4B`)
- Date: 2026-10-05 (UTC)
- Overview and scoring methodology: `../../model-comparison.md`
- Cross-model signed log: `../../model-findings.md`

## Model card

- **Name:** Gemma 4 E4B
- **Short description:** Google DeepMind's edge-optimized "effective 4B" multimodal Gemma 4 model (~4.5B effective, ~8B with embeddings) built for mobile/edge latency, with native audio input and 128K context.
- **Provider / access:** Google DeepMind. Hugging Face `google/gemma-4-E4B`, Ollama, AI Studio, Kaggle, LiteRT-LM, plus hosted routes (~$0.02/$0.10 per 1M). Open weights (Apache 2.0).
- **Release / knowledge:** Gemma 4 family released 2026-03-31/04-02; MTP update 2026-04-16. Knowledge cutoff January 2025.
- **IDs:** `google/gemma-4-E4B`; no OpenCode Zen Free ID verified.
- **Context window:** 128,000 tokens (edge-class cap; the 12B/26B/31B get 256K).
- **Modalities:** Text, image, audio and video in; text out. Reasoning, function calling, structured JSON, 140+ languages.
- **Pricing (as of 2026-10-05):** Apache 2.0 open weights, self-host free; hosted routes ~$0.02 in / $0.10 out per 1M.
- **Architecture:** Edge-class multimodal transformer (~4.5B effective / ~8B with embeddings); on-disk audio encoder shrank ~78% (680M→305M) vs Gemma 3n; MTP drafter support. Apache 2.0.

### Raw benchmarks found

Agent / tool use:

- Tau2-Bench: **20.8%** (Artificial Analysis)
- GDPval-AA: **177 Elo / 0.0% normalized** (Artificial Analysis)
- Terminal-Bench 2.1 / Tau3-Banking / Claw-Eval: no verified public score found

Reasoning / knowledge:

- MMLU Pro: **69.4%** (Google model card / HF blog)
- GPQA Diamond: **58.6%** vendor / **57.6%** AA
- AIME 2026 (no tools): **42.5%** (Gemma 4 technical report)
- HLE: no vendor score; AA-HLE **3.8%**
- Artificial Analysis Intelligence Index: **8.9** (Artificial Analysis)
- AA-LCR: **32.0%** (Artificial Analysis)
- BBH (micro avg): **33.1%** (Gemma 4 report)
- IFEval **96.7%** / IFBench **44.0%** (AA-IFBench 44.2%)
- Omniscience Accuracy **8.6%** / Hallucination Rate **30.9%** (Artificial Analysis)

Coding:

- LiveCodeBench v6: **52.0%** (Gemma 4 report)
- Codeforces ELO: **940** (Gemma 4 report)
- SciCode: **24.0%** vendor / **24.4%** AA
- AA Coding Index: **9.4** (Artificial Analysis)
- SWE-bench Verified / DeepSWE: no verified public score found

Long context:

- RULER: **95.2% @32K / 86.6% @128K** (Gemma 4 report, no thinking)
- LOFT retrieval Recall@k: **58.5 @128K**
- GraphWalks F1: **50.9** (<128K)
- MTOB eng→kgv: **37.8 @128K**

Multimodal / audio:

- MMMU Pro: **52.6%** vendor / **51.4%** AA
- MATH-Vision: **59.5%**
- InfographicVQA: **70.0%**
- MedXpertQA MM: **28.7%**
- FLEURS transcription WER: **0.075** (lower is better)
- CoVoST speech translation: **38.2** BLEU

### Normalized scores (1–100)

- **Tool use: 42/100.** Function calling is present, but Tau2 20.8% and GDPval-AA 177 Elo place multi-step agentic use well below mid; edge-class models are routed executors, not planners.
- **Reasoning: 55/100.** MMLU Pro 69.4% and GPQA 58.6% are respectable for ~4.5B effective parameters, but HLE 3.8%, AA Index 8.9 and BBH 33.1 cap it in the lower-mid band.
- **Context window: 58/100.** 128K sits mid-band in the 100K–200K tier; RULER 86.6% at 128K is solid, but LOFT 58.5 and MTOB 37.8 show multi-hop retrieval limits.
- **Multimodal: 82/100.** Native text/image/audio/video input with text output earns the +audio band; modest vision (MMMU Pro 52.6%, MATH-Vision 59.5%) and no non-text output keep it well under 90.
- **Coding: 52/100.** LiveCodeBench v6 52.0% and a 940 Codeforces ELO are passable for the size, but SciCode 24.0% and AA Coding Index 9.4 show weak repository-level engineering.
- **Cost efficiency: 96/100.** Apache 2.0 open weights plus ~$0.02/$0.10 hosted pricing make it near-free at the low end; only the cost of edge hardware/quantization keeps it just under 100.
- **Overall Score: 58/100.** Mean of (42 + 55 + 58 + 82 + 52) / 5 = 57.8 → **58**. Best-fit: on-device short-scope multimodal and audio tasks (transcription, translation, light vision), not autonomous agents.

---

## Signature

- Provided by: **DeepSeek 4.1 Flash (deepseek-ai/deepseek-v4.1-flash)** — 2026-10-05
- Method: public internet research (Gemma 4 technical report summary, BenchLM/Artificial Analysis, creeta memory analysis); scores are normalized 1–100 interpretations, not official vendor scores.
- Future sources: add a new file next to this one, e.g. `GPT_5.md`, using the same headings.
