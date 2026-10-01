# GPT-5.4 mini — findings by Laguna S 2.1

- Source: Artificial Analysis (`https://artificialanalysis.ai/models/gpt-5-4-mini`), BenchLM (`https://benchlm.ai/models/gpt-5-4-mini`), OpenAI (`https://openai.com/index/introducing-gpt-5-4-mini-and-nano`), Vals AI (`https://www.vals.ai`), OpenRouter (`https://openrouter.ai/openai/gpt-5.4-mini/benchmarks`), Epoch AI
- Date: 2026-10-01 (UTC)
- Overview and scoring methodology: `../../model-comparison.md`
- Cross-model signed log: `../../model-findings.md`

## Model card

- **Name:** GPT-5.4 mini (Xhigh)
- **Short description:** OpenAI's March 2026 fast, efficient reasoning model optimized for high-volume coding and subagent workloads. 2x faster than GPT-5 mini, approaching GPT-5.4-level performance on several evaluations.
- **Provider / access:** OpenAI API; OpenRouter; 2 API providers; available in Codex and ChatGPT
- **Release / knowledge:** Released March 17, 2026; knowledge cutoff August 2025; marked deprecated by AA (GPT-5.6 Terra is the newer release)
- **IDs:** `openai/gpt-5-4-mini` (AA slug), `opencode/gpt-5.4-mini` (`\meta.json`)
- **Context window:** 400K total (per AA model page and BenchLM); `\meta.json` says 128K — **discrepancy noted**
- **Modalities:** Text and image input, text output (per AA model page); `\meta.json` says "Text in/out" — **discrepancy noted**
- **Pricing (as of 2026-10-01):** $0.75 input / $4.50 output per 1M tokens; cache discount 90%; $0.45 per Intelligence Index task
- **Reasoning:** Yes (extended thinking / chain-of-thought)
- **Speed:** 216.3 tokens/s output (per AA, rank #6/224 in speed); TTFT 122.03s (per AA FAQ)
- **Knowledge cutoff:** Aug 31, 2025

### Research log

1. Fetched AA model page `https://artificialanalysis.ai/models/gpt-5-4-mini` — Intelligence Index 24 (estimated, rank #127/224)
2. Fetched BenchLM page `https://benchlm.ai/models/gpt-5-4-mini` — 37 of 618 benchmarks covered with verified scores
3. Fetched OpenAI announcement `https://openai.com/index/introducing-gpt-5-4-mini-and-nano/` — contains benchmark tables with specific scores
4. Cross-referenced Vals AI leaderboards and OpenRouter benchmark pages
5. Cross-referenced Epoch AI FrontierMath v2 leaderboard

### Raw benchmarks found

> Sources: OpenAI announcement (`https://openai.com/index/introducing-gpt-5-4-mini-and-nano/`), BenchLM (`https://benchlm.ai/models/gpt-5-4-mini`), Artificial Analysis model benchmarks, Vals AI, OpenRouter, Epoch AI. BenchLM covers 37 of 618 benchmarks. AA model page marks all benchmarks as "Not publicly available" — scores below are from the OpenAI announcement and BenchLM cross-referenced sources.

Agent / tool use:

- **Terminal-Bench 2.0:** **60.0%** — (OpenAI announcement; BenchLM)
- **OSWorld-Verified:** **72.1%** — (OpenAI announcement; BenchLM)
- **MCP Atlas:** **57.7%** — (OpenAI announcement; BenchLM)
- **Toolathlon:** **42.9%** — (OpenAI announcement; BenchLM)
- **τ²-bench (telecom):** **93.4%** — (OpenAI announcement; BenchLM)
- **APEX-Agents-AA:** **28.2%** — (Artificial Analysis model benchmarks via BenchLM)
- **GDPval-AA (normalized):** **25.0%** — (Artificial Analysis model benchmarks via BenchLM)
- **GDPval-AA (Elo):** **1095** — (Artificial Analysis: gdpval-aa leaderboard via BenchLM)
- **AA Agentic Index:** **19.6%** — (Artificial Analysis model benchmarks via BenchLM)
- **Terminal-Bench 2.1 (Vals):** **54.7%** — (Vals AI: Terminal-Bench 2.1 leaderboard)

Coding:

- **SWE-bench Pro:** **54.4%** — (OpenAI announcement)
- **Vibe Code Bench:** **47.97%** — (Vals AI: Vibe Code Bench v1.1 via BenchLM)
- **AA-SciCode:** **52.1%** — (Artificial Analysis model benchmarks via BenchLM)
- **FrontierCode 1.1:** **27.0%** — (Cognition: FrontierCode 1.1 via BenchLM)
- **LiveCodeBench (Vals):** **81.5%** — (Vals AI: LiveCodeBench leaderboard)
- **SWE-bench (Vals):** **73.0%** — (Vals AI: SWE-bench leaderboard)
- **AA Coding Index:** **56.1%** — (Artificial Analysis model benchmarks via BenchLM)

Reasoning / knowledge:

- **Artificial Analysis Intelligence Index:** **24** (estimated, rank #127/224, median: 26) — (AA model page)
- **BenchLM Intelligence Index:** **24.1%** — (Artificial Analysis model benchmarks via BenchLM)
- **GPQA Diamond:** **88.0%** — (OpenAI announcement; BenchLM)
- **GPQA Diamond (Vals):** **83.1%** — (Vals AI: GPQA Diamond leaderboard)
- **AA-GPQA Diamond:** **87.5%** — (Artificial Analysis: gpqa-diamond leaderboard via BenchLM)
- **AA-HLE:** **28.1%** — (Artificial Analysis: humanitys-last-exam leaderboard via BenchLM)
- **HLE w/ tools:** **41.5%** — (OpenAI announcement)
- **HLE w/o tools:** **28.2%** — (OpenAI announcement)
- **AA-LCR:** not found
- **OpenAI MRCR v2 8-needle 64K–128K:** **47.7%** — (OpenAI announcement)
- **OpenAI MRCR v2 8-needle 128K–256K:** **33.6%** — (OpenAI announcement)
- **Graphwalks BFS 0K–128K:** **76.3%** — (OpenAI announcement)
- **Graphwalks parents 0–128K:** **71.5%** — (OpenAI announcement)
- **CritPt:** **10.0%** — (Artificial Analysis: critpt leaderboard via BenchLM)
- **AA-Omniscience Index:** **-18.9%** — (BenchLM)
- **AA-Omniscience Accuracy:** **37.5%** — (BenchLM)
- **AA-Omniscience Hallucination Rate:** **90.2%** — (BenchLM)
- **MMLU-Pro (Vals):** **84.6%** — (Vals AI: MMLU Pro leaderboard)
- **AA-IFBench:** **73.3%** — (Artificial Analysis model benchmarks via BenchLM)
- **FrontierMath v2 (Tiers 1-3):** **28.280%** — (Epoch AI FrontierMath v2 leaderboard)
- **FrontierMath v2 (Tier 4):** **2.080%** — (Epoch AI FrontierMath v2 leaderboard)
- **ARC-AGI-1:** **63.70%** — (ARC Prize official leaderboard data via BenchLM)
- **ARC-AGI-2:** **18.9%** — (ARC Prize official leaderboard data via BenchLM)

Multimodal & grounded:

- **MMMU-Pro:** **76.6%** — (OpenAI announcement; BenchLM)
- **MMMU-Pro w/ Python:** **78.0%** — (OpenAI announcement)
- **AA-MMMU-Pro:** **73.3%** — (Artificial Analysis model benchmarks via BenchLM)
- **Design Arena Website:** **1202** — (OpenRouter model benchmarks via BenchLM)
- **OmniDocBench 1.5:** **0.1263** — (OpenAI announcement; lower is better)

### Normalized scores (1–100)

> Method: `model-comparison.md` v4. `Overall = round((Tool + Reasoning + Context + Multimodal + Coding) / 5)`. Cost is scored independently and excluded.
  > Confidence: high — 37 public benchmarks found across 5 sources (OpenAI announcement, BenchLM, AA, Vals AI, OpenRouter, Epoch AI).

- **Tool use: 68/100.** τ²-bench 93.4% is excellent (best in class for agentic tasks). OSWorld-Verified 72.1% and Terminal-Bench 2.0 60% are solid. MCP Atlas 57.7% and GDPval-AA 1095 Elo are moderate. However, AA Agentic Index 19.6% and GDPval-AA normalized 25.0% are below average. Terminal-Bench 2.1 (Vals) 54.7% is moderate. Strong performance on telecom τ²-bench but average on other agentic tasks.
- **Reasoning: 63/100.** AA Intelligence Index 24 (estimated, below median 26) is below average. GPQA Diamond 88.0% (OpenAI) and 87.5% (AA) are very good but not frontier (90%+). HLE w/ tools 41.5% and w/o tools 28.2% are moderate-to-weak. LCR not found but MRCR 47.7% at 64K–128K is moderate. CritPt 10.0% is weak. Omniscience Index -18.9% indicates hallucination issues. MMLU-Pro 84.6% is solid. IFBench 73.3% is good. ARC-AGI-1 63.7% is decent.
- **Context window: 78/100.** 400K tokens falls in the 200K–500K tier (65–84 range), high end. Strong long-context performance: Graphwalks BFS 76.3%, Graphwalks parents 71.5%, but MRCR 47.7% at 64K–128K is below frontier (86% for GPT-5.4). meta.json claims 128K but verified 400K.
- **Multimodal: 65/100.** Text and image input, text output (per AA model page). +image-in only, no video/audio/PDF verified. MMMU-Pro 76.6% and MMMU-Pro w/ Python 78.0% show solid vision reasoning. meta.json discrepancy noted.
- **Coding: 67/100.** SWE-bench Pro 54.4% is moderate. LiveCodeBench (Vals) 81.5% and SWE-bench (Vals) 73.0% are good. Terminal-Bench 2.0 60% is moderate. MCP Atlas 57.7% and Toolathlon 42.9% are moderate. AA Coding Index 56.1% is below frontier (70%+). Vibe Code Bench 47.97% is weak. No DeepSWE or SciCode frontier scores.
- **Cost efficiency: 85/100.** $0.75 in / $4.50 out per 1M tokens — very competitive pricing (below the $1.25/$4.25 anchor). 216 tok/s speed. noFreeId (no $0 tier).
- **Overall Score: 68/100.** Mean of five quality dimensions: (68 + 63 + 78 + 65 + 67) / 5 = 341 / 5 = 68.2 → 68. Strong agentic performance (τ²-bench 93.4%) and good coding (LiveCode 81.5%, SWE-bench 73%), but below-average Intelligence Index (24) and hallucination issues (Omniscience -18.9%) limit the score. Very cost-efficient at $0.75/$4.50. `meta.json` discrepancies noted: claims 128K context vs verified 400K; claims text-only vs verified text+image input.

---

## Signature

- Provided by: **Laguna S 2.1 (poolside/laguna-s-2.1)** — 2026-10-01
- Method: public internet research via Artificial Analysis, BenchLM, OpenAI announcements, Vals AI, OpenRouter, and Epoch AI; zero-influence: did not read peer `model/` findings files during research. Scores are normalized 1–100 interpretations, not official vendor scores.
- Meta.json discrepancies: `meta.json` lists 128K context window and text-only modalities, but AA model page and BenchLM show 400K context window with text+image input support. OpenAI announcement confirms 400K context and text+image input. `meta.json` appears to be a placeholder for this model.
- Future sources: add a new file next to this one, e.g. `OpenAI_GPT_5.4_mini_System_Card.md`, using the same headings.
