# Gemini 2.0 Flash — findings by Muse Glimmer 30B

- Source: Google / Gemini 2.0 Flash (`muse-glimmer-30b-contributor-free`)
- Date: 2026-10-25 (UTC)
- Overview and scoring methodology: `../../model-comparison.md`
- Cross-model signed log: `../../model-findings.md`

## Model card

- **Name:** Gemini 2.0 Flash
- **Short description:** Google DeepMind’s early-2025 multimodal workhorse with 1M context, native tool use and fast multimodal inference. Deprecated and shut down 2026-06-01; kept as historical 2.0-generation reference.
- **Provider / access:** Google AI Studio / Vertex AI (`gemini-2.0-flash`); historical ID `google/gemini-2.0-flash`. Chat Completions-compatible via gateways.
- **Release / knowledge:** Experimental Dec 2024, general release 2025-01-30 per Wikipedia model version table; knowledge cutoff 2024-08-01 per repo meta and vendor docs; shut down 2026-06-01.
- **IDs:** `google/gemini-2.0-flash` (no Free ID on Zen; historical paid reference, `noFreeId` in repo meta).
- **Context window:** 1,048,576 total tokens, 8,192 max output — verified via repo meta `model/gemini-2.0-flash/meta.json` and DeepMind Gemini models page.
- **Modalities:** Text, image, audio, video in; text and image out; reasoning (base Flash; Thinking variant separate); native tool calls (Google Search, code execution, functions).
- **Pricing (as of 2026-10-25):** Historical shut-down pricing: Google AI Studio $0.10 input / $0.40 output per 1M tokens (cached $0.03); Vertex AI $0.15 / $0.60 per 1M. Scored on historical paid pricing; no current access.
- **Architecture:** Proprietary dense/undisclosed; not open-weights.

### Raw benchmarks found

> Sources: Wikipedia Gemini model versions; DeepMind Gemini models page; repo meta.json; Google blog/announcement archives via public mirrors.

Agent / tool use:

- Terminal-Bench 2.1: **no verified public score found** for gemini-2.0-flash.
- Tau3-Banking / Tau2-Bench: **no verified public score found** for gemini-2.0-flash.
- GDPval-AA: **~569 Elo** (RankedAGI mirror of office-tasks GDPval-AA); provisional single-mirror.
- Claw-Eval / ClawProBench: **no verified public score found**.
- Toolathon / MCP-Atlas / SWE Atlas Codebase QnA: **no verified public score found**.
- RankedAGI Agentic composite (proxy, provisional): **31.7%**.

Reasoning / knowledge:

- GPQA Diamond: **62.1%** (Google official table via Langbase); mirrors 62.2% LangDB, 60.1% RankedAGI.
- HLE: **5.3%** (LangDB benchmark table).
- LCR / MLCR: no verified LCR score found; MRCR-family used for long context.
- CritPt: **no verified public score found**.
- Artificial Analysis Intelligence Index / BenchLM overall: **33.6 AAII** with 23.4 AA Coding Index, 21.7 AA Math Index (LangDB); BenchGecko average 44.5–48.0 across 20 benchmarks.
- Omniscience Accuracy / Hallucination Rate: Hughes HHEM hallucination **0.7%** on summarization (RankedAGI mirror of Vectara leaderboard) — narrow factuality proxy.
- MATH: **89.7%** with HiddenMath (AIME/AMC-like) **63.0%** (Google official); MATH level 5 **82.2%** (BenchGecko); AIME 2025 **27.5%** (RankedAGI) / AIME **33.0%** (LangDB); MMLU-Pro **76.4%** official / 77.6% RankedAGI / 77.15% LangDB; FACTS Grounding **83.6%** official.

Coding:

- SWE-bench Verified / SWE-Pro: **no verified public score found** for gemini-2.0-flash.
- LiveCodeBench: **35.1%** (Google official 06/01/2024–10/05/2024 window); mirrors 33.4% LangDB.
- SciCode / AA-SciCode: **33.3%** (LangDB SciCode row).
- Vibe Code Bench: **no verified public score found**.
- DeepSWE / Coding Index / other: AA Coding Index **23.4** (LangDB); Natural2Code **92.9%** and Bird-SQL Dev **56.9%** (Google official); Aider Polyglot **38.2** (BenchGecko); RankedAGI Coding composite **35.4%**.

Long context:

- MRCR (1M): **69.2%** (Google official table) vs 71.9% (1.5 Flash 002) and 82.6% (1.5 Pro 002). Weak retrieval at full length caps 1M tier.

### Normalized scores (1–100)

- **Tool use: 55/100.** Bird-SQL 56.9% plus GDPval-AA ~569 Elo and RankedAGI Agentic 31.7% as provisional proxies; hard capped by zero verified TB2.1/Tau3/Claw-Eval numbers.
- **Reasoning: 64/100.** GPQA ~62%, MMLU-Pro ~76–77%, MATH ~90% but HiddenMath 63% and HLE 5.3%; capped by weak competition-math and expert-reasoning tail.
- **Context window: 85/100.** 1M window qualifies for top tier but MRCR 69.2% at 1M and 8K max output cap it well below full-retrieval peers.
- **Multimodal: 85/100.** Full text/image/audio/video input with image output; MMMU ~71–72% in mirrors; capped below omni-output peers by moderate MMMU and no audio-out.
- **Coding: 62/100.** Natural2Code 92.9% is strong but LiveCodeBench ~34–35%, SciCode 33.3%, AA Coding 23.4 cap it; no verified SWE-bench for this ID.
- **Cost efficiency: 97/100.** Historical $0.10/$0.40 ($0.15/$0.60 Vertex) is near-free-tier cheap; scored on historical paid since model is shut down and has no Zen Free ID.
- **Overall Score: 70/100.** Mean of five quality dims (55 + 64 + 85 + 85 + 62) / 5 = 70.2 → 70. Best fit as cheap historical multimodal workhorse reference, not a current coding/reasoning pick.

---

## Signature

- Provided by: **Muse Glimmer 30B (muse-glimmer-30b-contributor-free)** — 2026-10-25
- Method: public internet research (Wikipedia Gemini language model page, DeepMind models page, repo meta.json, Google release announcements via public mirrors); scores are normalized 1–100 interpretations, not official vendor scores.
- Future sources: add a new file next to this one, e.g. `GPT_5.md`, using the same headings.
