# Gemma 4 E4B — findings by Space Bunny

- Source: Google DeepMind (`google/gemma-4-E4B` / `google/gemma-4-E4B-it`; hosted as `opencode/gemma-4-e4b`)
- Date: 2026-10-05 (UTC)
- Overview and scoring methodology: `../../model-comparison.md`
- Cross-model signed log: `../../model-findings.md`

## Model card

- **Name:** Gemma 4 E4B (instruction-tuned variant: Gemma 4 E4B IT)
- **Short description:** Google's edge-optimized Gemma 4 member — 4.5B effective parameters (8B with per-layer embeddings), dense, multimodal with text/image/audio/video input and text output, and a 128K context window. Built for phones, laptops and single-board hardware (2.5 GB mobile build) with native ASR and speech translation. It roughly matches Gemma 3 27B non-thinking performance with ~6x fewer effective parameters. Not an alias of another entry: E2B, 12B Unified, 26B A4B and 31B are separate Gemma 4 members.
- **Provider / access:** open weights on Hugging Face (`google/gemma-4-E4B`, `google/gemma-4-E4B-it`) under Apache 2.0, with BF16, SFP8, Q4_0/GGUF, mobile and `-unquantized`/assistant QAT checkpoints plus a 77M-param MTP drafter; locally via llama.cpp / MLX / Ollama / LiteRT (`litert-lm serve`, OpenAI-compatible). One hosted route found (Google via aggregator, $0.20/$0.20 per 1M, cache read $0.10); the repository also lists an OpenCode Zen route at roughly $0.02/$0.10 per 1M.
- **Release / knowledge:** Gemma 4 family released April 2026; knowledge cutoff not stated in the reviewed sources.
- **IDs:** `google/gemma-4-E4B`, `google/gemma-4-E4B-it`; hosted `opencode/gemma-4-e4b`.
- **Context window:** 128K tokens (131,072) per the official Gemma 4 model card; the small E-tier models are the 128K members of the family (12B/26B/31B get 256K). 42 layers, 512-token sliding window, 262K vocabulary.
- **Modalities:** text, image, audio and video in; text out; configurable thinking mode; function calling; native ASR and speech-to-translated-text; multilingual over 140+ languages. Vision encoder ~150M params, audio encoder ~300M params.
- **Pricing (as of 2026-10-05):** Apache 2.0 open weights — self-host footprint BF16 17.9 GB, SFP8 8.9 GB, Q4_0 4.5 GB, mobile 2.5 GB (2.2 GB text-only). Hosted: **$0.20 in / $0.20 out per 1M, cache read $0.10** (single provider, Google, per pricepertoken/OpenRouter data); the repository's Zen listing is ~$0.02/$0.10 per 1M. No free-tier data-usage caveat applies to the Apache 2.0 weights.
- **Architecture:** dense, 4.5B effective / 8B with per-layer embeddings, 42 layers, 400M vision embedder + 670M audio embedder, 77M MTP drafter, Apache 2.0 open weights with quantization-aware training.

### Raw benchmarks found

All figures are vendor-published instruction-tuned, thinking-mode results from the official Gemma 4 model card / Gemma 4 Technical Report (arXiv 2607.02770, Tables 5, 6 and 9) unless noted.

Agent / tool use:

- Tau2-bench (avg over airline / retail / telecom): **42.2%** — airline **52.0%**, retail **67.1%**, telecom **18.4%**. Gemma 4 26B-A4B: 68.2% avg; 31B: 76.9%; Gemma 3 27B: 16.2%.
- Terminal-Bench Hard: **8.0%** (31B 36.0, 26B-A4B 14.0, 12B 18.0, Gemma 3 27B 4.0) — weak.
- IFEval: **96.7%**; IFBench: **44.0%** (31B 98.9 / 76.0, 12B 97.2 / 74.0).
- Tau3-Banking / GDPval-AA / Claw-Eval / Toolathon / MCP-Atlas / SWE Atlas Codebase QnA: **no verified public score found**.

Reasoning / knowledge:

- GPQA Diamond: **58.6%** (31B 84.3, 26B-A4B 82.3, 12B 78.8, Gemma 3 27B 42.4).
- AIME 2026 (no tools): **42.5%** (31B 89.2, 26B-A4B 88.3, 12B 77.5).
- MMLU Pro: **69.4%**; MMMLU (multilingual): **76.6%** (31B 85.2 / 88.4).
- BigBench Extra Hard (micro avg): **33.1%**.
- HLE: **no verified public score found** — the official card publishes HLE only for 31B (19.5 / 26.5), 26B-A4B (8.7 / 17.2) and 12B (5.2); the E-tier cells are "-".
- ARC-AGI-1 / CritPt / Artificial Analysis Intelligence Index / BenchLM overall / Arena Elo: **no verified public score found** — E4B has no Arena row.
- **E4B outperforms Gemma 3 27B non-thinking on every published row** (GPQA-D 58.6 vs 42.4, MMLU Pro 69.4 vs 67.6, MMMLU 76.6 vs 70.7, MMMU Pro 52.6 vs 49.7, BBEH 33.1 vs 19.3, MRCR 25.4 vs 13.5) at a fraction of the size.

Coding:

- LiveCodeBench v6: **52.0%** (31B 80.0, 26B-A4B 77.1, 12B 72.0, Gemma 3 27B 29.1).
- Codeforces ELO: **940** (31B 2150, 26B-A4B 1718, 12B 1659).
- SciCode: **24.0%** (31B 43.0, 26B-A4B 40.0).
- SWE-bench Verified / SWE-Pro / Vibe Code Bench: **no verified public score found**.

Long context:

- MRCR v2 8-needle @128k (average): **25.4%** (31B 66.4, 26B-A4B 44.1, 12B 43.4, Gemma 3 27B 13.5).
- RULER accuracy: **95.2% @32k**, **86.6% @128k** (technical report Table 9; 31B 96.8 / 96.4, 12B 96.4 / 91.2, Gemma 3 27B 91.1 / 66.0).
- LOFT Recall@k @128k: **58.5%** (31B 79.5, 26B-A4B 66.3, 12B 66.4).
- GraphWalks F1 <128k: **50.9%** (31B 82.3, 26B-A4B 72.6, 12B 71.0, Gemma 3 27B 32.8).
- MTOB eng→kgv @128k: **37.8%** (31B 52.9, 26B-A4B 50.0, 12B 45.1).

### Normalized scores (1–100)

- **Tool use: 52/100.** Tau2 average 42.2% with retail 67.1% shows genuine multi-step tool use, and retail even edges the 31B's 69.3-adjacent range, but telecom at 18.4% and Terminal-Bench Hard at 8.0% show real multi-step agentry is out of reach. IFEval 96.7 confirms instruction discipline; IFBench 44.0 confirms it is weak on complex format constraints.
- **Reasoning: 58/100.** GPQA Diamond 58.6%, MMLU Pro 69.4% and MMMLU 76.6% clear Gemma 3 27B's non-thinking baseline convincingly, and MMMLU 76.6 is unusually high for the size. Capped by AIME 2026 at 42.5% (roughly half the 12B's 77.5%), BigBench Extra Hard 33.1%, and the complete absence of any HLE figure.
- **Context window: 78/100.** This is the dimension where the E-tier model punches above its weight class: a genuine 128K window with RULER 95.2% @32k and 86.6% @128k — better than Gemma 3 27B at 128k (66.0) and close to the 12B. Held to 78 because MRCR @128k is only 25.4% and multi-hop retrieval degrades sharply (LOFT 58.5, GraphWalks 50.9, MTOB 37.8).
- **Multimodal: 78/100.** Rare breadth for the class — image (MMMU Pro 52.6, MATH-Vision 59.5, InfographicVQA 70.0, OmniDocBench 1.5 edit distance 0.181), **audio** (CoVoST 35.54 CorpusBLEU into English, FLEURS WER 0.08) and video all in one 4.5B-effective model that fits a phone. Capped by MedXPertQA MM at 28.7% on medical imagery and by vision trailing the 12B on every measure.
- **Coding: 52/100.** LiveCodeBench v6 52.0% and Codeforces 940 are real but modest — better than Gemma 3 27B (29.1 / 110) and roughly 2/3 of the 12B's 72.0. SciCode 24.0% and Terminal-Bench Hard 8.0% show it is a completion-and-snippet model, not an agentic or repository-scale coder; no SWE-bench Verified exists.
- **Cost efficiency: 93/100.** Apache 2.0 weights with a 2.5 GB mobile build and 4.5 GB Q4_0 build, plus a hosted route at $0.20/$0.20 and a Zen route around $0.02/$0.10, put this among the cheapest genuinely multimodal models available anywhere. Not 100 because self-hosting still needs hardware and the API routes are metered.
- **Overall Score: 63.6/100.** The on-device multimodal workhorse of this comparison — 4.5B effective parameters with native audio, vision and video, a real 128K window and Gemma-3-27B-class reasoning; best fit for mobile/edge agents, on-device assistants and always-on local inference, not for coding or frontier reasoning.

---

## Signature

- Provided by: **Space Bunny (opencode/space-bunny-free)** — 2026-10-05
- Method: public internet research (Google AI for Developers Gemma 4 model card, `google/gemma-4-E4B` Hugging Face model card, Gemma 4 Technical Report arXiv 2607.02770 including the long-context Table 9, Gemma 4 specification datasheet, and hosted pricing aggregators); scores are normalized 1–100 interpretations, not official vendor scores.
- Future sources: add a new file next to this one, e.g. `GPT_5.md`, using the same headings.