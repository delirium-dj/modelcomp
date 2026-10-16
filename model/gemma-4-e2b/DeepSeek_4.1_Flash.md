# Gemma 4 E2B — findings by DeepSeek 4.1 Flash

- Source: Google DeepMind (`google/gemma-4-E2B`)
- Date: 2026-10-16 (UTC) — third pass (previous Signature 2026-10-05)
- Overview and scoring methodology: `../../model-comparison.md`
- Cross-model signed log: `../../model-findings.md`

> **Third-pass refresh — 2026-10-16** (≥3 independent sources: official Hugging Face model card `google/gemma-4-E2B` plus the Google launch blog, Artificial Analysis, BenchLM).
> **New rows found.** The official HF family card now publishes the long-context and multilingual rows the 2026-10-05 pass lacked: **MRCR v2 8-needle 128K 19.1%**, **Tau2 (average over 3) 24.5%** (vendor), **BigBench Extra Hard 21.9%**, **MMMLU 67.4%**, **OmniDocBench 1.5 0.290**, **MATH-Vision 52.4%**, **MedXpertQA MM 23.5%**, **CoVoST 33.47**, **FLEURS 0.09**. Artificial Analysis now scores the reasoning build **8 (estimated) on Intelligence Index v4.3.2, #64/141 among similar-size open-weight models**, with **AA-LCR 16.3%**, **AA-Omniscience index -23.6 / accuracy 6.6% / hallucination 32.4%** and **CritPt 0.0%**. BenchLM gives a conservative **29.97/100 (#182/950, partial coverage)**.
> **Corrections.** CoVoST is **33.47** on the current card (the earlier 35.4 is superseded); FLEURS WER is **0.09**. The architecture is a **dense Per-Layer-Embeddings (PLE) model, not a MoE** — Artificial Analysis mislabels E2B as a 5.1B/2.3B MoE, which the HF card explicitly contradicts ("E" = effective; PLE lookup tables, no expert routing).
> **Conflicts.** (1) **Tau2 24.5% (vendor)** vs **20.8% (AA)**. (2) AA lists output modality as **text and image**, but Google/HF specify **text-only output**. (3) Release **2026-04-02** per the Google launch blog and AA; the earlier "2026-03-31" is not corroborated.
> Sources: https://huggingface.co/google/gemma-4-E2B · https://blog.google/innovation-and-ai/technology/developers-tools/gemma-4/ · https://artificialanalysis.ai/models/gemma-4-e2b · https://benchlm.ai/models/gemma-4-e2b

## Model card

- **Name:** Gemma 4 E2B
- **Short description:** Google DeepMind's smallest Gemma 4 edge variant — ~2.3B effective (5.1B including Per-Layer Embedding tables) for phones, laptops and Jetson/Pi-class hardware, with native image and audio input and a 128K context window; excellent at short scoped tasks, unreliable at multi-hop reasoning.
- **Provider / access:** Google DeepMind. Hugging Face `google/gemma-4-E2B` (base) and `google/gemma-4-E2B-it` (instruction-tuned), plus Ollama, AI Studio, Kaggle, LiteRT-LM, day-one Transformers/llama.cpp support; open weights under **Apache 2.0** (commercially permissive, no MAU cap). Hosted routes ~$0.04/$0.08 per 1M (carried from the prior pass; no first-party per-token price surfaced this pass).
- **Release / knowledge:** Gemma 4 family launched **2026-04-02** (Google launch blog and Artificial Analysis); E2B is one of the four launch sizes. MTP update 2026-04-16. Knowledge cutoff **January 2025**.
- **IDs:** `google/gemma-4-E2B` / `google/gemma-4-E2B-it`; no OpenCode Zen Free ID verified.
- **Context window:** **128,000 tokens** (edge-class cap; HF card states "128K tokens").
- **Modalities:** Text, image and audio in (video via sampled frames); **text out**. Configurable thinking mode (`<|think|>`), native function calling and structured output, 140+ languages.
- **Pricing (as of 2026-10-16):** Apache 2.0 open weights, self-host free; hosted ~$0.04 in / $0.08 out per 1M (carried from the prior pass, unverified this pass).
- **Architecture:** Dense edge transformer with **Per-Layer Embeddings (PLE)** — **2.3B effective / 5.1B total with embedding tables**, 35 layers, 512-token sliding window in a hybrid local/global attention stack with proportional RoPE (p-RoPE); dedicated ~150M-param vision and ~300M-param audio encoders; runs in under ~1 GB RAM on a phone. **Not a mixture-of-experts.** Apache 2.0.

### Raw benchmarks found

Agent / tool use:

- Tau2 (average over 3): **24.5%** vendor (HF card) vs **20.8%** (Artificial Analysis)
- GDPval-AA: **36 Elo / 0.0% normalized** (Artificial Analysis)
- Terminal-Bench 2.1 / Tau3-Banking / Claw-Eval / Toolathon / MCP-Atlas: no verified public score found

Reasoning / knowledge:

- MMLU Pro: **60.0%** (Google model card / HF blog)
- GPQA Diamond: **43.4%** vendor / **43.3%** AA
- AIME 2026 (no tools): **37.5%** (Gemma 4 technical report)
- HLE: no vendor score; AA-HLE **4.8%**
- Artificial Analysis Intelligence Index: **8** (estimated; v4.3.2, #64/141 similar-size open weights) — BenchLM lists **7.8**
- AA-LCR: **16.3%** (Artificial Analysis)
- BBH / BigBench Extra Hard (micro avg): **21.9%** (Gemma 4 report)
- MMMLU: **67.4%** (HF card)
- IFEval **94.6%** / IFBench **38.0%** (AA-IFBench 38.0%)
- Omniscience Index **-23.6** / Accuracy **6.6%** / Hallucination Rate **32.4%** (Artificial Analysis)
- CritPt: **0.0%** (Artificial Analysis)

Coding:

- LiveCodeBench v6: **44.0%** (Gemma 4 report)
- Codeforces ELO: **633** (Gemma 4 report)
- SciCode: **21.0%** (Gemma 4 report)
- AA Coding Index: **7.2** (Artificial Analysis)
- SWE-bench Verified / DeepSWE: no verified public score found

Long context:

- MRCR v2 8-needle 128K (average): **19.1%** (HF card) — weak retrieval at depth
- RULER: **83.0% @32K / 70.4% @128K** (earlier pass; not re-published on the current card)
- LOFT retrieval Recall@k: **50.5 @128K** (earlier pass)
- GraphWalks F1: **4.1** (<128K) — effective failure at multi-hop (earlier pass)
- MTOB eng→kgv: **15.4 @128K** (earlier pass)

Multimodal / audio:

- MMMU Pro: **44.2%** vendor / **44.6%** AA
- MATH-Vision: **52.4%**
- OmniDocBench 1.5 (average edit distance, lower is better): **0.290**
- InfographicVQA: **63.9%** (earlier pass)
- MedXpertQA MM: **23.5%**
- FLEURS transcription WER: **0.09** (lower is better)
- CoVoST speech translation: **33.47** BLEU (card; the earlier 35.4 is superseded)

### Normalized scores (1–100)

- **Tool use: 40/100.** Function calling exists but Tau2 20.8–24.5% and GDPval-AA 36 Elo reflect an executor for short scoped tasks, not a planner for multi-step agent workflows.
- **Reasoning: 50/100.** MMLU Pro 60.0% and AIME 2026 37.5% beat the prior-generation 27B on math, but GPQA 43.4%, AA Index 8 and BigBench Extra Hard 21.9% hold it in the low band.
- **Context window: 52/100.** 128K nominally shares the edge cap, but MRCR v2 19.1% at 128K (RULER 83.0→70.4 between 32K and 128K) and GraphWalks 4.1 show multi-hop reasoning across context is unreliable; retrieval-only use of the window.
- **Multimodal: 78/100.** Native text/image/audio/video in with text out qualifies for the +audio band and FLEURS/CoVoST are usable, but small-model vision (MMMU Pro 44.2%) and no non-text output keep it modest.
- **Coding: 48/100.** LiveCodeBench v6 44.0% and a 633 Codeforces ELO are passable for a phone-class model, but SciCode 21.0% and AA Coding Index 7.2 confirm weak real-world engineering.
- **Cost efficiency: 96/100.** Apache 2.0 weights plus ~$0.04/$0.08 hosted pricing and sub-1-GB on-device footprint make it near-free; only edge hardware cost keeps it under 100.
- **Overall Score: 54/100.** Mean of (40 + 50 + 52 + 78 + 48) / 5 = 53.6 → **54** (unchanged — the new rows corroborate the bands rather than move them). Best-fit: offline/on-device short, well-scoped multimodal and speech tasks — keep prompts short and avoid chained reasoning.

---

## Signature

- Provided by: **DeepSeek 4.1 Flash (deepseek-ai/deepseek-v4.1-flash)** — 2026-10-16
- Method: public internet research; third-pass re-verification on 2026-10-16 against the official Hugging Face model card `google/gemma-4-E2B`, the Google launch blog, Artificial Analysis and BenchLM, adding the first MRCR v2 long-context, Tau2-vendor, MMMLU, OmniDocBench, CoVoST/FLEURS and CritPt rows, correcting the CoVoST/FLEURS values, and flagging the vendor-vs-AA Tau2 spread and AA's incorrect MoE/image-output labels. Scores are normalized 1–100 interpretations, not official vendor scores.
- Future sources: add a new file next to this one, e.g. `GPT_5.md`, using the same headings.
