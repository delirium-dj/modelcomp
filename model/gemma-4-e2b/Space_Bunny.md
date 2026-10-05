# Gemma 4 E2B — findings by Space Bunny

- Source: Google DeepMind (`google/gemma-4-E2B` / `google/gemma-4-E2B-it`; hosted as `opencode/gemma-4-e2b`)
- Date: 2026-10-05 (UTC)
- Overview and scoring methodology: `../../model-comparison.md`
- Cross-model signed log: `../../model-findings.md`

## Model card

- **Name:** Gemma 4 E2B (instruction-tuned variant: Gemma 4 E2B IT)
- **Short description:** The smallest member of Google's Gemma 4 family — 2.3B effective parameters (5.1B with per-layer embeddings), dense, multimodal with text/image/audio/video input and text output, 128K context, built to run on phones, laptops and Jetson/Pi-class hardware (1.1 GB mobile build). Google's own framing is that E2B "roughly matches Gemma 3 27B performance with 10x less parameters", which the published numbers support on several rows but not on agentic tool use or multi-hop long context. Not an alias: E4B, 12B Unified, 26B A4B and 31B are separate Gemma 4 members.
- **Provider / access:** open weights on Hugging Face (`google/gemma-4-E2B`, `google/gemma-4-E2B-it`) under Apache 2.0, with BF16, SFP8, Q4_0/GGUF, mobile (1.1 GB) and text-only mobile (0.84 GB) builds plus `-unquantized`/assistant QAT checkpoints and a 76M-param MTP drafter; locally via llama.cpp / MLX / Ollama / LiteRT (`litert-lm serve`, OpenAI-compatible). The repository also lists an OpenCode Zen route at roughly $0.04/$0.08 per 1M.
- **Release / knowledge:** Gemma 4 family released April 2026; knowledge cutoff not stated in the reviewed sources.
- **IDs:** `google/gemma-4-E2B`, `google/gemma-4-E2B-it`; hosted `opencode/gemma-4-e2b`.
- **Context window:** 128K tokens (131,072) per the official Gemma 4 model card — the E-tier is the 128K half of the family. 35 layers, 512-token sliding window, 262K vocabulary.
- **Modalities:** text, image, audio and video in; text out; configurable thinking mode; function calling; native ASR and speech translation (up to ~30 s of speech); multilingual over 140+ languages. Vision encoder ~150M params, audio encoder ~305M params.
- **Pricing (as of 2026-10-05):** Apache 2.0 open weights — self-host footprint BF16 11.4 GB, SFP8 5.7 GB, Q4_0 2.9 GB, mobile 1.1 GB, mobile text-only 0.84 GB. No first-party Google per-token price is published for the E-tier and no hosted provider listing was found in the reviewed sources beyond the repository's Zen route at ~$0.04/$0.08 per 1M. No free-tier data-usage caveat applies to the Apache 2.0 weights.
- **Architecture:** dense, 2.3B effective / 5.1B with per-layer embeddings, 35 layers, 400M vision + 305M audio embedders, 1,870M einsum-equivalent embedder budget, 76M MTP drafter, Apache 2.0 open weights with quantization-aware training.

### Raw benchmarks found

All figures are vendor-published instruction-tuned, thinking-mode results from the official Gemma 4 model card / Gemma 4 Technical Report (arXiv 2607.02770, Tables 5, 6 and 9) unless noted.

Agent / tool use:

- Tau2-bench (avg over airline / retail / telecom): **24.5%** — airline **31.0%**, retail **34.6%**, telecom **19.7%**. Gemma 3 27B: 16.2% avg; E4B 42.2%; 26B-A4B 68.2%; 31B 76.9%.
- Terminal-Bench Hard: **3.0%** (31B 36.0, 12B 18.0, 26B-A4B 14.0, E4B 8.0, Gemma 3 27B 4.0) — the lowest in the family.
- IFEval: **94.6%**; IFBench: **38.0%** (31B 98.9 / 76.0, E4B 96.7 / 44.0).
- Tau3-Banking / GDPval-AA / Claw-Eval / Toolathon / MCP-Atlas / SWE Atlas Codebase QnA: **no verified public score found**.

Reasoning / knowledge:

- GPQA Diamond: **43.4%** (E4B 58.6, 12B 78.8, 26B-A4B 82.3, 31B 84.3, Gemma 3 27B 42.4) — essentially tied with Gemma 3 27B.
- AIME 2026 (no tools): **37.5%** (E4B 42.5, 12B 77.5, 31B 89.2).
- MMLU Pro: **60.0%**; MMMLU (multilingual): **67.4%** (Gemma 3 27B 67.6 / 70.7).
- BigBench Extra Hard (micro avg): **21.9%** (Gemma 3 27B 19.3).
- HLE: **no verified public score found** — the official card leaves the E-tier HLE cells blank ("-"); only 31B, 26B-A4B and 12B publish HLE.
- ARC-AGI-1 / CritPt / Artificial Analysis Intelligence Index / BenchLM overall / Arena Elo: **no verified public score found** — E2B has no Arena row.

Coding:

- LiveCodeBench v6: **44.0%** (E4B 52.0, 12B 72.0, 26B-A4B 77.1, 31B 80.0, Gemma 3 27B 29.1).
- Codeforces ELO: **633** (E4B 940, 12B 1659, 26B-A4B 1718, 31B 2150, Gemma 3 27B 110).
- SciCode: **21.0%** (31B 43.0, 26B-A4B 40.0; E4B 24.0).
- SWE-bench Verified / SWE-Pro / Vibe Code Bench: **no verified public score found**.

Long context:

- MRCR v2 8-needle @128k (average): **19.1%** (E4B 25.4, 12B 43.4, 26B-A4B 44.1, 31B 66.4).
- RULER accuracy: **83.0% @32k**, **70.4% @128k** (technical report Table 9; Gemma 3 27B 91.1 / 66.0).
- LOFT Recall@k @128k: **50.5%** (E4B 58.5, 12B 66.4, 31B 79.5).
- GraphWalks F1 <128k: **4.1%** — a collapse (E4B 50.9, 12B 71.0, 31B 82.3, Gemma 3 27B 32.8); multi-hop graph reasoning essentially does not work at this size.
- MTOB eng→kgv @128k: **15.4%** (E4B 37.8, 12B 45.1, 31B 52.9).

### Normalized scores (1–100)

- **Tool use: 42/100.** Tau2 average 24.5% does beat Gemma 3 27B's 16.2%, and retail 34.6% shows the basic shape of multi-step tool use is there, but Terminal-Bench Hard at 3.0% is the worst in the entire Gemma 4 family — below even Gemma 3 27B's 4.0. IFEval 94.6 confirms it follows simple instructions; IFBench 38.0 confirms it cannot hold complex formats. This is a chat-and-extract model, not an agentic one.
- **Reasoning: 45/100.** GPQA Diamond 43.4% and MMLU Pro 60.0% put it level with Gemma 3 27B non-thinking on general knowledge, and MMMLU 67.4% is respectable for 2.3B effective parameters. Capped by AIME 2026 at 37.5%, BigBench Extra Hard 21.9%, and no HLE figure at all — frontier-style reasoning is out of reach.
- **Context window: 60/100.** The nominal 128K is real and RULER 70.4% @128k still edges Gemma 3 27B (66.0), but everything harder than single-needle retrieval collapses: MRCR 19.1, MTOB 15.4 and GraphWalks at 4.1% — an F1 near zero means multi-hop reasoning over a long graph is simply absent. Scored on the nominal tier with the retrieval evidence dragging it down hard.
- **Multimodal: 62/100.** Remarkable coverage-to-size ratio — image (MMMU Pro 44.2, MATH-Vision 52.4, InfographicVQA 63.9, OmniDocBench 1.5 edit distance 0.290), **audio** (CoVoST 33.47 CorpusBLEU into English, FLEURS WER 0.09) and video in a 1.1 GB mobile package. Capped by MedXPertQA MM 23.5%, by vision trailing the E4B on every row, and by OmniDocBench 0.290 being more than 1.5x the 12B's 0.164 — document/OCR parsing is weak.
- **Coding: 44/100.** LiveCodeBench v6 44.0% and Codeforces 633 are real improvements over Gemma 3 27B (29.1 / 110) but the lowest in the Gemma 4 line; SciCode 21.0% is barely above the 27B's 21.0. Terminal-Bench Hard 3.0% rules out agentic coding, and no SWE-bench Verified exists.
- **Cost efficiency: 96/100.** The cheapest genuinely multimodal model in the comparison: Apache 2.0 weights, a 0.84–1.1 GB mobile build that runs on a phone, a 2.9 GB Q4_0 build for laptops, and a Zen route around $0.04/$0.08 per 1M. Not 100 because the API routes are metered and no free hosted tier was verified.
- **Overall Score: 50.6/100.** The on-device floor of the comparison — a 1.1 GB multimodal model with native audio and vision and a 128K window, best fit for embedded assistants, on-device ASR/translation and ultra-low-latency mobile inference; not a model for coding, agents or frontier reasoning.

---

## Signature

- Provided by: **Space Bunny (opencode/space-bunny-free)** — 2026-10-05
- Method: public internet research (Google AI for Developers Gemma 4 model card, `google/gemma-4-E2B` Hugging Face model card, Gemma 4 Technical Report arXiv 2607.02770 including the long-context Table 9, Gemma 4 specification datasheet and developer blog); scores are normalized 1–100 interpretations, not official vendor scores.
- Future sources: add a new file next to this one, e.g. `GPT_5.md`, using the same headings.