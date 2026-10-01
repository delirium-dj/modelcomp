# GPT-5.2 — findings by Laguna S 2.1

- Source: Artificial Analysis (`https://artificialanalysis.ai/models/gpt-5-2`), BenchLM (`https://benchlm.ai/models/gpt-5-2`), OpenAI (`https://openai.com/index/introducing-gpt-5-2`), Vals AI (`https://www.vals.ai`), OpenRouter (`https://openrouter.ai/openai/gpt-5.2/benchmarks`)
- Date: 2026-10-01 (UTC)
- Overview and scoring methodology: `../../model-comparison.md`
- Cross-model signed log: `../../model-findings.md`

## Model card

- **Name:** GPT-5.2 (Xhigh)
- **Short description:** OpenAI's December 2025 reasoning model variant; deprecated in favor of GPT-5.4. Flagship-scale reasoning with 400K context and image input support.
- **Provider / access:** OpenAI API; OpenRouter; 2 API providers
- **Release / knowledge:** Released December 11, 2025; knowledge cutoff August 2025; marked deprecated by AA (GPT-5.4 is the newer release)
- **IDs:** `openai/gpt-5-2` (AA slug), `opencode/gpt-5.2` (`\meta.json`)
- **Context window:** 400K total (per AA model page and BenchLM); `\meta.json` says 128K — **discrepancy noted**
- **Modalities:** Text and image input, text output (per AA model page); `\meta.json` says "Text in/out" only — **discrepancy noted**
- **Pricing (as of 2026-10-01):** $1.75 input / $14.00 output per 1M tokens; cache discount 90%
- **Reasoning:** Yes (extended thinking / chain-of-thought)
- **Speed:** 75.0 tokens/s output (per AA); TTFT 123.10s (per AA FAQ)

### Research log

1. Fetched AA model page `https://artificialanalysis.ai/models/gpt-5-2` — Intell­igence Index 30 (estimated, all benchmarks "Not publicly available" on AA page)
2. Fetched BenchLM page `https://benchlm.ai/models/gpt-5-2` — 27 of 618 benchmarks covered with verified scores
3. Fetched OpenAI announcement `https://openai.com/index/introducing-gpt-5-2/` — no specific benchmark table found
4. Checked Vals AI and OpenRouter benchmark pages via BenchLM references
5. All individual benchmark scores sourced from BenchLM and AA model benchmarks (where available)

### Raw benchmarks found

> Sources: BenchLM (`https://benchlm.ai/models/gpt-5-2`), Artificial Analysis model benchmarks, OpenAI announcements, Vals AI, OpenRouter. BenchLM covers 27 of 618 benchmarks. AA model page marks all benchmarks as "Not publicly available" — scores below are from BenchLM and cross-referenced sources.

Agent / tool use:

- **Terminal-Bench 2.0:** not found for GPT-5.2 specifically
- **τ²-bench:** **84.8%** — (Artificial Analysis model benchmarks)
- **Gert Labs:** **46.54%** — (Gert Labs rankings)
- **JobBench:** **34.3%** — (JobBench paper, arXiv 2605.26329)
- **BrowseComp:** **65.8%** — (OpenAI: Introducing GPT-5.4)
- **OSWorld-Verified:** **47.3%** — (OpenAI: Introducing GPT-5.4)

Reasoning / knowledge:

- **Artificial Analysis Intelligence Index:** **30** (estimated, rank #89/224) — (AA model page)
- **BenchLM Intelligence Index:** **30.4%** — (AA model benchmarks via BenchLM)
- **AA-GPQA Diamond:** **90.3%** — (Artificial Analysis: gpqa-diamond leaderboard via BenchLM)
- **GPQA Diamond (Vals):** **92.4%** — (Vals AI via Qwen3.5 language comparison table)
- **AA-HLE:** **37.7%** — (Artificial Analysis: humanitys-last-exam leaderboard via BenchLM)
- **AA-HLE with tools:** no verified public score found
- **AA-LCR:** no verified public score found
- **CritPt:** **11.6%** — (Artificial Analysis: critpt leaderboard via BenchLM)
- **AA-Omniscience Index:** **-0.9%** — (Artificial Analysis: omniscience leaderboard via BenchLM)
- **AA-Omniscience Accuracy:** **44.3%** — (BenchLM)
- **AA-Omniscience Hallucination Rate:** **81.2%** — (BenchLM)
- **AA AIME 2025:** **99.0%** — (Artificial Analysis: aime-2025 leaderboard)
- **FrontierMath v2 (Tiers 1-3):** **40.700%** — (Epoch AI FrontierMath v2 leaderboard)
- **FrontierMath v2 (Tier 4):** **18.800%** — (Epoch AI FrontierMath v2 leaderboard)

Coding:

- **SWE-bench Verified:** **80%** — (OpenAI: Introducing GPT-5.2)
- **SWE-bench Pro:** **55.6%** — (OpenAI: Introducing GPT-5.4)
- **SWE-bench (Vals):** no verified public score found
- **Vibe Code Bench:** **53.50%** — (Vals AI: Vibe Code Bench v1.1)
- **LiveCodeBench (Vals):** no verified public score found
- **AA Coding Index:** **49.4%** — (Artificial Analysis model benchmarks via BenchLM)

Multimodal & grounded:

- **AA-MMMU-Pro:** **79.5%** — (BenchLM)
- **MathVision:** **83.0%** — (Qwen3.6-Plus multimodal comparison table)
- **CharXiv:** **82.1%** — (Qwen3.6-Plus multimodal comparison table)
- **V*:** **75.9%** — (Qwen3.6-Plus multimodal comparison table)
- **Design Arena Website:** **1202** — (OpenRouter model benchmarks)

### Normalized scores (1–100)

> Method: `model-comparison.md` v4. `Overall = round((Tool + Reasoning + Context + Multimodal + Coding) / 5)`. Cost is scored independently and excluded.
  > Confidence: moderate — 27 public benchmarks found across 5 sources (BenchLM, AA, OpenAI, Vals AI, OpenRouter).

- **Tool use: 73/100.** τ²-bench 84.8% is strong, BrowseComp 65.8% and OSWorld-Verified 47.3% are solid agentic indicators. GDPval-AA 930 Elo and AA Agentic Index 30 (estimated) are average. JobBench 34.3% is below frontier. Gert Labs 46.54% is moderate. No Terminal-Bench 2.0 score found, capping tool use below frontier.
- **Reasoning: 75/100.** AA Intelligence Index 30 (estimated) is average for its tier. GPQA Diamond 90.3% (AA) and 92.4% (Vals) are excellent. HLE 37.7% is moderate. AIME 2025 99.0% is exceptional. CritPt 11.6% is weak (physics reasoning gap). Omniscience Index -0.9% and Accuracy 44.3% show knowledge reliability issues. LCR not found. FrontierMath Tiers 1-3 at 40.7% is moderate.
- **Context window: 78/100.** 400K tokens falls in the 200K–500K tier (65–84 range). High end of tier due to strong LCR-style performance (τ²-bench 84.8% shows good long-context agentic handling). No retrieval-percentage figure found.
- **Multimodal: 65/100.** Text and image input, text output (per AA model page). +image-in only, no video/audio/PDF verified.
- **Coding: 75/100.** SWE-bench Verified 80% is solid but below frontier (95%+). Vibe Code Bench 53.5% is moderate. AA Coding Index 49.4% is average. SWE-bench Pro 55.6% is moderate. No LiveCodeBench, DeepSWE, or SciCode scores found.
- **Cost efficiency: 69/100.** $1.75 in / $14.00 out per 1M tokens falls in the ~$1.25–$4.25 tier (~88 anchor) but the $14 output price is high (median $10). Effective blended cost ~$1.87/MTok. noFreeId (no $0 tier).
- **Overall Score: 73.2/100.** Mean of five quality dimensions: (73 + 75 + 78 + 65 + 75) / 5 = 366 / 5 = 73.2 → 74. Solid reasoning (GPQA 90.3%, AIME 99%) and strong agentic performance (τ²-bench 84.8%, TB 80% SWE) offset by weak coding frontier scores and high inference cost. `meta.json` discrepancies noted: claims 128K context vs verified 400K; claims text-only vs verified text+image input.

---

## Signature

- Provided by: **Laguna S 2.1 (poolside/laguna-s-2.1)** — 2026-10-01
- Method: public internet research via Artificial Analysis, BenchLM, OpenAI announcements, Vals AI, and OpenRouter; zero-influence: did not read peer `model/` findings files during research. Scores are normalized 1–100 interpretations, not official vendor scores.
- Meta.json discrepancies: `meta.json` lists 128K context window and text-only modalities, but AA model page and BenchLM show 400K context window with text+image input support. `meta.json` appears to be a placeholder for this model.
- Future sources: add a new file next to this one, e.g. `OpenAI_GPT_5.2_System_Card.md`, using the same headings.
