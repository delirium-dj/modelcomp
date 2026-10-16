# Gemma 4 E4B — findings by DeepSeek 4.1 Flash

- Source: Google DeepMind (`google/gemma-4-E4B`)
- Date: 2026-10-16 (UTC) — third pass (previous Signature 2026-10-05)
- Overview and scoring methodology: `../../model-comparison.md`
- Cross-model signed log: `../../model-findings.md`

> **Third-pass refresh — 2026-10-16** (≥3 independent sources: official Hugging Face model card `google/gemma-4-E4B` plus the Google launch blog, Artificial Analysis, BenchLM).
> **New rows found.** The official HF family card now publishes **MRCR v2 8-needle 128K 25.4%**, **Tau2 (average over 3) 42.2%** (vendor), **BigBench Extra Hard 33.1%**, **MMMLU 76.6%**, **OmniDocBench 1.5 0.181**, **MATH-Vision 59.5%**, **MedXpertQA MM 28.7%**, **CoVoST 35.54** and **FLEURS 0.08**. Artificial Analysis scores the reasoning build **9 on Intelligence Index v4.3.2, #51/141 among similar-size open-weight models**, with **AA-SciCode 24.4%**, **AA Coding Index 9.4%**, **AA-LCR 32.0%**, **CritPt 0.6%** and **AA-Omniscience index -19.7 / accuracy 8.6% / hallucination 30.9%**; hosted pricing **$0.02 in / $0.10 out**, 46.6 tok/s, TTFT 0.92s. BenchLM gives **31.05/100 (#178/950, partial coverage)**.
> **Corrections.** CoVoST is **35.54** on the current card (the earlier 38.2 is superseded) and FLEURS WER is **0.08** (was 0.075); the AA Intelligence Index is now **9** (was 8.9). Architecture is a **dense Per-Layer-Embeddings (PLE) model, not a MoE** — AA's "MoE, 8B/4.5B" label is wrong (the 4.5B/8B figures are effective-vs-with-embeddings, not active-vs-total experts).
> **Conflicts.** (1) **Tau2 42.2% (vendor)** vs **20.8% (AA)** — a wide, unexplained spread. (2) Release **2026-04-02** per the Google launch blog vs **2026-04-03** per AA.
> Sources: https://huggingface.co/google/gemma-4-E4B · https://blog.google/innovation-and-ai/technology/developers-tools/gemma-4/ · https://artificialanalysis.ai/models/gemma-4-e4b · https://benchlm.ai/models/gemma-4-e4b

## Model card

- **Name:** Gemma 4 E4B
- **Short description:** Google DeepMind's edge-optimized "effective 4B" multimodal Gemma 4 model (~4.5B effective, ~8B with Per-Layer Embedding tables) built for mobile/edge latency, with native audio input and a 128K context window.
- **Provider / access:** Google DeepMind. Hugging Face `google/gemma-4-E4B` (base) and `google/gemma-4-E4B-it` (instruction-tuned), plus Ollama, AI Studio, Kaggle, LiteRT-LM, Transformers and llama.cpp; open weights under **Apache 2.0**. Hosted routes ~$0.02/$0.10 per 1M (AA median across providers).
- **Release / knowledge:** Gemma 4 family launched **2026-04-02** (Google launch blog; AA lists E4B as 2026-04-03). MTP update 2026-04-16. Knowledge cutoff **January 2025**.
- **IDs:** `google/gemma-4-E4B` / `google/gemma-4-E4B-it`; no OpenCode Zen Free ID verified.
- **Context window:** **128,000 tokens** (edge-class cap; the 12B/26B/31B get 256K).
- **Modalities:** Text, image and audio in (video via sampled frames); **text out**. Configurable thinking mode, native function calling, structured JSON output, 140+ languages.
- **Pricing (as of 2026-10-16):** Apache 2.0 open weights, self-host free; hosted median ~**$0.02 in / $0.10 out** per 1M (Artificial Analysis; blended ~$0.03).
- **Architecture:** Edge-class multimodal transformer with **Per-Layer Embeddings (PLE)** — **4.5B effective / 8B total with embedding tables**, 42 layers, 512-token sliding window in a hybrid local/global attention stack with p-RoPE; on-disk audio encoder shrank ~78% (680M→305M) vs Gemma 3n; MTP drafter support. **Not a mixture-of-experts.** Apache 2.0.

### Raw benchmarks found

Agent / tool use:

- Tau2 (average over 3): **42.2%** vendor (HF card) vs **20.8%** (Artificial Analysis)
- GDPval-AA: **177 Elo / 0.0% normalized** (Artificial Analysis)
- Terminal-Bench 2.1 / Tau3-Banking / Claw-Eval / Toolathon / MCP-Atlas: no verified public score found

Reasoning / knowledge:

- MMLU Pro: **69.4%** (Google model card / HF blog)
- GPQA Diamond: **58.6%** vendor / **57.6%** AA
- AIME 2026 (no tools): **42.5%** (Gemma 4 technical report)
- HLE: no vendor score; AA-HLE **3.8%**
- Artificial Analysis Intelligence Index: **9** (v4.3.2, #51/141 similar-size open weights) — BenchLM lists **8.9**
- AA-LCR: **32.0%** (Artificial Analysis)
- BBH / BigBench Extra Hard (micro avg): **33.1%** (Gemma 4 report)
- MMMLU: **76.6%** (HF card)
- IFEval **96.7%** / IFBench **44.0%** (AA-IFBench 44.2%)
- Omniscience Index **-19.7** / Accuracy **8.6%** / Hallucination Rate **30.9%** (Artificial Analysis)
- CritPt: **0.6%** (Artificial Analysis)

Coding:

- LiveCodeBench v6: **52.0%** (Gemma 4 report)
- Codeforces ELO: **940** (Gemma 4 report)
- SciCode: **24.0%** vendor / **24.4%** AA
- AA Coding Index: **9.4** (Artificial Analysis)
- SWE-bench Verified / DeepSWE: no verified public score found

Long context:

- MRCR v2 8-needle 128K (average): **25.4%** (HF card) — weak retrieval at depth
- RULER: **95.2% @32K / 86.6% @128K** (earlier pass; not re-published on the current card)
- LOFT retrieval Recall@k: **58.5 @128K** (earlier pass)
- GraphWalks F1: **50.9** (<128K) (earlier pass)
- MTOB eng→kgv: **37.8 @128K** (earlier pass)

Multimodal / audio:

- MMMU Pro: **52.6%** vendor / **51.4%** AA
- MATH-Vision: **59.5%**
- OmniDocBench 1.5 (average edit distance, lower is better): **0.181**
- InfographicVQA: **70.0%** (earlier pass)
- MedXpertQA MM: **28.7%**
- FLEURS transcription WER: **0.08** (lower is better)
- CoVoST speech translation: **35.54** BLEU (card; the earlier 38.2 is superseded)

### Normalized scores (1–100)

- **Tool use: 42/100.** Function calling is present, but the vendor Tau2 42.2% and AA's 20.8% disagree by a wide margin, and GDPval-AA 177 Elo places multi-step agentic use well below mid; edge-class models are routed executors, not planners.
- **Reasoning: 55/100.** MMLU Pro 69.4% and GPQA 58.6% are respectable for ~4.5B effective parameters, but HLE 3.8%, AA Index 9 and BigBench Extra Hard 33.1 cap it in the lower-mid band.
- **Context window: 58/100.** 128K sits mid-band in the 100K–200K tier; RULER 86.6% at 128K is solid but MRCR v2 25.4% and LOFT 58.5 show multi-hop retrieval limits.
- **Multimodal: 82/100.** Native text/image/audio/video input with text output earns the +audio band; modest vision (MMMU Pro 52.6%, MATH-Vision 59.5%) and no non-text output keep it well under 90.
- **Coding: 52/100.** LiveCodeBench v6 52.0% and a 940 Codeforces ELO are passable for the size, but SciCode 24.0% and AA Coding Index 9.4 show weak repository-level engineering.
- **Cost efficiency: 96/100.** Apache 2.0 open weights plus ~$0.02/$0.10 hosted pricing make it near-free at the low end; only the cost of edge hardware/quantization keeps it just under 100.
- **Overall Score: 58/100.** Mean of (42 + 55 + 58 + 82 + 52) / 5 = 57.8 → **58** (unchanged — new rows corroborate the bands; the Tau2 vendor/AA spread is unresolved). Best-fit: on-device short-scope multimodal and audio tasks (transcription, translation, light vision), not autonomous agents.

---

## Signature

- Provided by: **DeepSeek 4.1 Flash (deepseek-ai/deepseek-v4.1-flash)** — 2026-10-16
- Method: public internet research; third-pass re-verification on 2026-10-16 against the official Hugging Face model card `google/gemma-4-E4B`, the Google launch blog, Artificial Analysis and BenchLM, adding the first MRCR v2 long-context, Tau2-vendor, MMMLU, OmniDocBench, AA-SciCode, CritPt and CoVoST/FLEURS rows, correcting the CoVoST/FLEURS values and the AA index, and flagging the Tau2 vendor-vs-AA spread and AA's incorrect MoE label. Scores are normalized 1–100 interpretations, not official vendor scores.
- Future sources: add a new file next to this one, e.g. `GPT_5.md`, using the same headings.
