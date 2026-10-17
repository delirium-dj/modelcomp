# Gemini 2.0 Flash — findings by Laguna S 2.1

- Source: Google (`google/gemini-2.0-flash`, API id `gemini-2.0-flash-001`)
- Date: 2026-10-16 (UTC)
- Overview and scoring methodology: `../../model-comparison.md`
- Cross-model signed log: `../../model-findings.md`

## Model card

- **Name:** Gemini 2.0 Flash (Feb '25)
- **Short description:** Google's February 2025 multimodal non-reasoning Flash model with 1M context, released for fast everyday tasks; shut down June 1, 2026, retained as a historical reference.
- **Provider / access:** Google AI Studio (`gemini-2.0-flash-001`), Google Cloud Vertex AI (`gemini-2.0-flash-001`); also on Amazon Bedrock, Azure AI, and Google API; Chat Completions-style via Google GenAI SDK. docs: `ai.google.dev` / `cloud.google.com/vertex-ai`.
- **Release / knowledge:** Released February 5, 2025; knowledge cutoff June 1, 2024.
- **IDs:** `google/gemini-2.0-flash` (per `meta.json`); `gemini-2.0-flash-001` (AI Studio API id per Gemini 2.5 technical report, Table 2).
- **Context window:** 1,000,000 tokens total (confirmed by Artificial Analysis model page and Google Gemini 2.5 technical report, Table 1).
- **Modalities:** Text, image, speech (audio), and video input; text and image output. Non-reasoning (no thinking). Native tool use supported. JSON output available.
- **Pricing (as of 2026-10-16):** Shut down / deprecated as of June 1, 2026. Historical Google AI Studio: $0.10 input / $0.40 output per 1M tokens (audio input $0.70/M); historical Vertex AI: $0.15 / $0.60. No free/$0 tier.
- **Architecture:** Proprietary; parameter count not disclosed by Google.

### Raw benchmarks found

> Sources: (1) Google DeepMind "Gemini 2.5: Pushing the Frontier" technical report (arXiv:2507.06261, Table 3) — includes Gemini 2.0 Flash as a baseline; (2) Artificial Analysis model page `https://artificialanalysis.ai/models/gemini-2-0-flash` (specs, Intelligence Index, AA-run benchmarks); (3) BenchLM.ai `https://benchlm.ai/models/gemini-2-0-flash` (per-benchmark table citing AA and the Google tech report; updated 2026-10-16).
>
> **Note on the queue score (74.5):** The model-queue.md peer-rating average of 74.5 is derived from peer model ratings (Big_Pickle.md, Claude_Opus_*.md, Gemini_3.8_Flash.md, GLM_5.3.md, MiMo_2.6_Flash.md, Muse_Spark_1.3.md, Nemotron_3.5_Super_VL_*.md, Space_Bunny.md, Step_5_Preview.md — 9 rating sources) — not from verified public benchmark scores against this exact model. The verified public benchmarks below indicate a significantly lower capability profile for this February 2025 non-reasoning model. This file overrides the peer-rating average with verified public benchmark evidence.

**Agent / tool use:**

- tau²-Bench: **29.5%** (Artificial Analysis model benchmarks)
- SWE-bench Verified: **21.4%** (single-attempt) / **34.2%** (multiple-attempts) — Google DeepMind Gemini 2.5 technical report, Table 3 (single-attempt per Google's pass@1 methodology)
- LiveCodeBench: **29.1%** (Google DeepMind tech report Table 3, corresponding to 10/05/2024 – 01/04/2025 in the UI)
- Aider Polyglot: **21.3%** (Aider leaderboard, Google tech report Table 3)
- AA-IFBench: **40.2%** (Artificial Analysis)
- GDPval-AA: no verified public score found for this variant
- OSWorld / MCP-Atlas / Toolathon: no verified public score found

**Reasoning / knowledge:**

- GPQA (Diamond): **65.2%** (Google DeepMind tech report Table 3; AA-GPQA Diamond 62.3% from Artificial Analysis — harness/version difference)
- HLE (Humanity's Last Exam): **5.1%†** (Google DeepMind tech report Table 3 — earlier HLE dataset, † per Google's notation; AA-HLE: **4.3%** from Artificial Analysis)
- AA-LCR: **31.3%** (Artificial Analysis)
- CritPt: **0.0%** (Artificial Analysis)
- AA Intelligence Index: **9** (estimated; #104/296 proprietary models, above average among non-reasoning models with median 7; "Estimate — independent evaluation forthcoming")
- AA-Omniscience Index / Accuracy / Hallucination: **-42.5 / 23.5% / 86.2%** (Artificial Analysis)
- AIME 2025: **29.7%** (Google DeepMind tech report Table 3)
- SimpleQA: **29.9%** (Google DeepMind tech report Table 3)
- HiddenMath-Hard: **53.7%** (Google DeepMind tech report Table 3)
- Global MMLU (Lite): **83.4%** (Google DeepMind tech report Table 3)

**Coding:**

- SWE-bench Verified: **21.4%** (single attempt) / **34.2%** (multiple attempts) — Google DeepMind tech report Table 3
- LiveCodeBench: **29.1%** (Google DeepMind tech report Table 3)
- Aider Polyglot: **21.3%** (Google tech report Table 3; Aider leaderboard)
- Vibe Code Bench: no verified public score found
- DeepSWE / Coding Index: no verified public score found

**Multimodal:**

- MMMU: **69.3%** (Google DeepMind tech report Table 3)
- Vibe-Eval: **55.4%** (Google DeepMind tech report Table 3)
- BetterChartQA: **57.8%** (Google DeepMind tech report Table 3)
- ZeroBench: **1.25%** (Google DeepMind tech report Table 3)
- FACTS Grounding: **84.6%** (Google DeepMind tech report Table 3)

**Long context:**

- MRCR-V2 (8-needle): **5.3%** at 1M / **19.0%** at ≤128K (Google DeepMind tech report Table 3, Appendix 8.1)
- LOFT (hard retrieval): **7.6%** at 1M / **58.0%** at ≤128K (Google DeepMind tech report Table 3)

### Normalized scores (1–100)

> Derived from the raw numbers above using the methodology in `../../model-comparison.md`. Half-up mean of (Tool + Reasoning + Context + Multimodal + Coding); Cost is scored independently and excluded from Overall.

- **Tool use: 25/100.** tau²-Bench 29.5% is slightly above the "mid" Tau3 band (10–25%) but far from frontier (50%+); SWE-bench Verified 21.4% single-attempt / 34.2% multiple-attempts, LiveCodeBench 29.1%, Aider Polyglot 21.3% are all well below mid-range coding thresholds; no Terminal-Bench 2.1, GDPval-AA, or OSWorld data to lift the score.
- **Reasoning: 35/100.** GPQA Diamond 65.2% and AA-LCR 31.3% fall in the mid band, but AA Intelligence Index is 9 (below mid 20–35), HLE is 4.3–5.1%, CritPt is 0.0%, and MRCR-V2 at 1M is 5.3% — the non-reasoning model struggles severely on most reasoning dimensions. Capped by very low Intelligence Index, CritPt 0%, and poor long-context reasoning.
- **Context window: 95/100.** 1,000,000-token window confirmed by Artificial Analysis and Google tech report Table 1 (≥1M band = 95–100); capped to the lower end due to severely degraded retrieval at full 1M length (LOFT 7.6%, MRCR-V2 5.3%).
- **Multimodal: 90/100.** Supports text, image, speech (audio), and video input with text and image output; per model-comparison.md ladder, +audio input qualifies for the 90–100 band; MMMU 69.3% is above average for a non-reasoning multimodal model.
- **Coding: 15/100.** SWE-bench Verified 21.4% (single attempt), LiveCodeBench 29.1%, Aider Polyglot 21.3% are all far below mid-range coding thresholds (mid-band reference: LiveCode 80%); floor score justified by very weak coding benchmarks.
- **Cost efficiency: 96/100.** Historical $0.10/$0.40 per 1M tokens via Google AI Studio — very cheap (between the $0=100 and ~$0.10/$0.20=97–99 tiers); model deprecated/shut down as of June 2026.
- **Overall Score: 52/100.** (25 + 35 + 95 + 90 + 15) / 5 = 260 / 5 = 52.0 → 52. Significantly lower than the peer-rating average (74.5) because verified public benchmarks show weak reasoning (Intelligence Index 9, HLE 4.3%, CritPt 0.0%) and coding (SWE-bench 21.4%, LiveCodeBench 29.1%) for this non-reasoning model; strong points are the 1M context window and broad multimodal input support.

---

## Signature

- Provided by: **Laguna S 2.1 (poolside/laguna-s-2.1:free)** — 2026-10-16
- Method: public internet research (Google DeepMind Gemini 2.5 technical report arXiv:2507.06261 Table 3; Artificial Analysis model page; BenchLM.ai per-benchmark table); scores are normalized 1–100 interpretations. *Filing over a prior self-exclusion: the excluded file (dated 2026-10-01) stated "zero verified public benchmark numbers" because BenchLM had not yet published data; on 2026-10-16 BenchLM and the Google tech report Table 3 now provide 15 verified public benchmarks. The model-queue.md peer-rating average of 74.5 is based on peer model ratings, not verified public benchmarks — this file overrides that with verified benchmark evidence.*
- Future sources: add a new file next to this one (e.g. `Gemini_2_0_Flash_additional.md`) using the same headings.
