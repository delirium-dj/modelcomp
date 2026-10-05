# Gemma 4 E2B — findings by DeepSeek 4.1 Flash

- Source: Google DeepMind (`google/gemma-4-E2B`)
- Date: 2026-10-05 (UTC)
- Overview and scoring methodology: `../../model-comparison.md`
- Cross-model signed log: `../../model-findings.md`

## Model card

- **Name:** Gemma 4 E2B
- **Short description:** Google DeepMind's smallest Gemma 4 edge variant (~2.3B effective) for phones, laptops and Jetson/Pi-class hardware, with native image and audio input and 128K context; excellent at short scoped tasks, unreliable at multi-hop reasoning.
- **Provider / access:** Google DeepMind. Hugging Face `google/gemma-4-E2B`, Ollama, AI Studio, Kaggle, LiteRT-LM; open weights (Apache 2.0), hosted routes ~$0.04/$0.08 per 1M.
- **Release / knowledge:** Gemma 4 family released 2026-03-31/04-02; MTP update 2026-04-16. Knowledge cutoff January 2025.
- **IDs:** `google/gemma-4-E2B`; no OpenCode Zen Free ID verified.
- **Context window:** 128,000 tokens (edge-class cap).
- **Modalities:** Text, image, audio and video in; text out. Reasoning, function calling, 140+ languages.
- **Pricing (as of 2026-10-05):** Apache 2.0 open weights, self-host free; hosted ~$0.04 in / $0.08 out per 1M.
- **Architecture:** Edge-class multimodal transformer (~2.3B effective), runs in under ~1 GB RAM on a phone; native audio encoding; MTP drafter. Apache 2.0.

### Raw benchmarks found

Agent / tool use:

- Tau2-Bench: **20.8%** (Artificial Analysis)
- GDPval-AA: **36 Elo / 0.0% normalized** (Artificial Analysis)
- Terminal-Bench 2.1 / Tau3-Banking / Claw-Eval: no verified public score found

Reasoning / knowledge:

- MMLU Pro: **60.0%** (Google model card / HF blog)
- GPQA Diamond: **43.4%** vendor / **43.3%** AA
- AIME 2026 (no tools): **37.5%** (Gemma 4 technical report)
- HLE: no vendor score; AA-HLE **4.8%**
- Artificial Analysis Intelligence Index: **7.8** (Artificial Analysis)
- AA-LCR: **16.3%** (Artificial Analysis)
- BBH (micro avg): **21.9%** (Gemma 4 report)
- IFEval **94.6%** / IFBench **38.0%** (AA-IFBench 38.0%)
- Omniscience Accuracy **6.6%** / Hallucination Rate **32.4%** (Artificial Analysis)

Coding:

- LiveCodeBench v6: **44.0%** (Gemma 4 report)
- Codeforces ELO: **633** (Gemma 4 report)
- SciCode: **21.0%** (Gemma 4 report)
- AA Coding Index: **7.2** (Artificial Analysis)
- SWE-bench Verified / DeepSWE: no verified public score found

Long context:

- RULER: **83.0% @32K / 70.4% @128K** (Gemma 4 report, no thinking)
- LOFT retrieval Recall@k: **50.5 @128K**
- GraphWalks F1: **4.1** (<128K) — effective failure at multi-hop
- MTOB eng→kgv: **15.4 @128K**

Multimodal / audio:

- MMMU Pro: **44.2%** vendor / **44.6%** AA
- MATH-Vision: **52.4%**
- InfographicVQA: **63.9%**
- MedXpertQA MM: **23.5%**
- FLEURS transcription WER: **0.090** (lower is better)
- CoVoST speech translation: **35.4** BLEU

### Normalized scores (1–100)

- **Tool use: 40/100.** Function calling exists but Tau2 20.8% and GDPval-AA 36 Elo reflect an executor for short scoped tasks, not a planner for multi-step agent workflows.
- **Reasoning: 50/100.** MMLU Pro 60.0% and AIME 2026 37.5% beat the prior-generation 27B on math, but GPQA 43.4%, AA Index 7.8 and BBH 21.9% hold it in the low band.
- **Context window: 52/100.** 128K nominally shares the edge cap, but RULER collapses 83.0→70.4 between 32K and 128K and GraphWalks 4.1 shows multi-hop reasoning across context is unreliable; retrieval-only use of the window.
- **Multimodal: 78/100.** Native text/image/audio/video in with text out qualifies for the +audio band and FLEURS/CoVoST are usable, but small-model vision (MMMU Pro 44.2%) and no non-text output keep it modest.
- **Coding: 48/100.** LiveCodeBench v6 44.0% and a 633 Codeforces ELO are passable for a phone-class model, but SciCode 21.0% and AA Coding Index 7.2 confirm weak real-world engineering.
- **Cost efficiency: 96/100.** Apache 2.0 weights plus ~$0.04/$0.08 hosted pricing and sub-1-GB on-device footprint make it near-free; only edge hardware cost keeps it under 100.
- **Overall Score: 54/100.** Mean of (40 + 50 + 52 + 78 + 48) / 5 = 53.6 → **54**. Best-fit: offline/on-device short, well-scoped multimodal and speech tasks — keep prompts short and avoid chained reasoning.

---

## Signature

- Provided by: **DeepSeek 4.1 Flash (deepseek-ai/deepseek-v4.1-flash)** — 2026-10-05
- Method: public internet research (Gemma 4 technical report summary, BenchLM/Artificial Analysis, community benchmark page); scores are normalized 1–100 interpretations, not official vendor scores.
- Future sources: add a new file next to this one, e.g. `GPT_5.md`, using the same headings.
