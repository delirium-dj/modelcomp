# Gemini 2.0 Flash — findings by Muse Spark 1.3

- Source: Google/Gemini 2.0 Flash (`muse-spark-1.3-contributor-free`)
- Date: 2026-09-27 (UTC)
- Overview and scoring methodology: `../../model-comparison.md`
- Cross-model signed log: `../../model-findings.md`

## Model card

- **Name:** Gemini 2.0 Flash
- **Short description:** Google's early-2025 workhorse multimodal model with a 1M context window and native tool use. Deprecated and shut down on 2026-06-01; kept as a historical 2.0-generation reference.
- **Provider / access:** Google AI Studio / Vertex AI (`gemini-2.0-flash`); historical Google ID `google/gemini-2.0-flash`. Chat Completions-compatible via gateways.
- **Release / knowledge:** 2025-02-05 general release (experimental Dec 2024); knowledge cutoff 2024-08-01; shut down 2026-06-01.
- **IDs:** `google/gemini-2.0-flash` (no Free ID exists on Zen — historical paid reference; state explicitly per repo meta `noFreeId`).
- **Context window:** 1M total (1,048,576 tokens; 8,192 max output) — verified via RankedAGI record, llm-stats comparison, and repo meta.
- **Modalities:** Text, image, audio, video in; text and image out; reasoning (separate Thinking variant exists, base Flash scored here); native tool calls (Google Search, code execution, user functions).
- **Pricing (as of 2026-09-27):** Historical (shut down): Google AI Studio $0.10/$0.40 per 1M (cached $0.03); Vertex AI $0.15/$0.60 per 1M. Scored on historical paid pricing.
- **Architecture:** Proprietary dense/undisclosed; not open-weights.

### Raw benchmarks found

Agent / tool use:

- Terminal-Bench 2.1: **no verified public score found** for gemini-2.0-flash.
- Tau3-Banking / Tau2-Bench: **no verified public score found** for gemini-2.0-flash.
- GDPval-AA: **569 Elo** (RankedAGI mirror of office-tasks GDPval-AA) — provisional, single-mirror attribution.
- Claw-Eval / ClawProBench: **no verified public score found**.
- Toolathon / MCP-Atlas / SWE Atlas Codebase QnA: **no verified public score found**.
- RankedAGI Agentic composite (proxy, provisional): **31.7%** (RankedAGI model record).

Reasoning / knowledge:

- GPQA Diamond: **62.1%** (Google official table via Langbase); mirrors at 62.2% (LangDB) and 60.1% (RankedAGI).
- HLE: **5.3%** (LangDB benchmark table).
- LCR / MLCR: no verified LCR score found; MRCR-family long-context number listed under Long context instead.
- CritPt: **no verified public score found**.
- Artificial Analysis Intelligence Index / BenchLM overall: **33.6 AAII** with 23.4 AA Coding Index and 21.7 AA Math Index (LangDB category table); BenchGecko average 44.5–48.0 across 20 benchmarks (rank ~#154).
- Omniscience Accuracy / Hallucination Rate: Hughes HHEM hallucination **0.7%** on summarization (RankedAGI mirror of Vectara leaderboard) — narrow factuality proxy, not Omniscience.
- MATH: **89.7%** with HiddenMath (AIME/AMC-like held-out) **63.0%** (Google official table); MATH level 5 **82.2%** (BenchGecko); AIME 2025 **27.5%** (RankedAGI) / AIME **33.0%** (LangDB); MMLU-Pro **76.4%** official / 77.6% RankedAGI / 77.15% LangDB; FACTS Grounding **83.6%** official.

Coding:

- SWE-bench Verified / SWE-Pro: **no verified public score found** for gemini-2.0-flash.
- LiveCodeBench: **35.1%** (Google official 06/01/2024–10/05/2024 window); mirrors at 33.4% (LangDB); LiveBench Coding 25.4-split **26.2%** and old LiveBench Coding **53.9%** (RankedAGI).
- SciCode / AA-SciCode: **33.3%** (LangDB SciCode row).
- Vibe Code Bench: **no verified public score found**.
- DeepSWE / Coding Index / other: AA Coding Index **23.4** (LangDB); Natural2Code **92.9%** and Bird-SQL Dev **56.9%** (Google official); Aider Polyglot **38.2** (BenchGecko); RankedAGI Coding composite **35.4%**.

Long context:

- MRCR (1M): **69.2%** (Google official table) vs 71.9% (1.5 Flash 002) and 82.6% (1.5 Pro 002) — weak retrieval at full length, caps the 1M tier.

### Normalized scores (1–100)

- **Tool use: 55/100.** Bird-SQL 56.9% plus GDPval-AA 569 Elo and RankedAGI Agentic 31.7% as provisional proxies; capped hard by zero verified TB2.1/Tau3/Claw-Eval numbers.
- **Reasoning: 64/100.** GPQA ~62%, MMLU-Pro ~76–77%, MATH ~90% but HiddenMath 63% and HLE 5.3%; capped by weak competition-math and expert-reasoning tail.
- **Context window: 85/100.** 1M window qualifies for the top tier but MRCR 69.2% at 1M plus 8K max output caps it well below full-retrieval peers.
- **Multimodal: 85/100.** Full text/image/audio/video input plus image output with MMMU ~71–72%; capped below omni-output peers by moderate MMMU and no audio-out.
- **Coding: 62/100.** Natural2Code 92.9% is strong but LiveCodeBench ~34–35%, SciCode 33.3%, and AA Coding 23.4 cap it; no verified SWE-bench for this ID.
- **Cost efficiency: 97/100.** Historical $0.10/$0.40 ($0.15/$0.60 Vertex) is near-free-tier cheap; scored on historical paid since the model is shut down and has no Zen Free ID.
- **Overall Score: 70/100.** Mean of the five quality dims (55 + 64 + 85 + 85 + 62) / 5 = 70.2 → 70; best fit as a cheap historical multimodal workhorse reference, not a current coding/reasoning pick.

---

## Signature

- Provided by: **Muse Spark 1.3 (muse-spark-1.3-contributor-free)** — 2026-09-27
- Method: public internet research (Google official benchmark table via Langbase, RankedAGI record, LangDB/BenchGecko mirrors, Vercel/llm-stats spec pages); scores are normalized 1–100 interpretations, not official vendor scores.
- Future sources: add a new file next to this one, e.g. `GPT_5.md`, using the same headings.
