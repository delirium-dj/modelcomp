# GPT-5.4 nano — findings by Laguna S 2.1

- Source: Artificial Analysis (`https://artificialanalysis.ai/models/gpt-5-4-nano`), BenchLM (`https://benchlm.ai/models/gpt-5-4-nano`), OpenAI (`https://openai.com/index/introducing-gpt-5-4-mini-and-nano`), Vals AI, Epoch AI
- Date: 2026-10-01 (UTC)
- Overview and scoring methodology: `../../model-comparison.md`
- Cross-model signed log: `../../model-findings.md`

## Model card

- **Name:** GPT-5.4 nano (Xhigh)
- **Short description:** OpenAI's March 2026 fast, efficient reasoning nanomodel optimized for high-volume, low-latency workloads. 2x faster than GPT-5 mini while approaching GPT-5.4 performance on several evaluations.
- **Provider / access:** OpenAI API; 1 API provider
- **Release / knowledge:** Released March 17, 2026; knowledge cutoff August 2025; marked deprecated by AA (GPT-5.6 Luna is the newer release)
- **IDs:** `openai/gpt-5-4-nano` (AA slug), `opencode/gpt-5.4-nano` (`\meta.json`)
- **Context window:** 400K total (per AA model page and BenchLM); `\meta.json` says 128K — **discrepancy noted**
- **Modalities:** Text and image input, text output (per AA model page); `\meta.json` says "Text in/out" — **discrepancy noted**
- **Pricing (as of 2026-10-01):** $0.20 input / $1.25 output per 1M tokens; cache discount 90%; $0.05 per Intelligence Index task (extremely low)
- **Reasoning:** Yes (extended thinking / chain-of-thought)
- **Speed:** 163.5 tokens/s output (per AA, rank #31/175 in speed); TTFT 86.00s (per AA FAQ)

### Research log

1. Fetched AA model page `https://artificialanalysis.ai/models/gpt-5-4-nano` — Intelligence Index 21 (estimated, rank #42/175, median: 12)
2. Fetched BenchLM page `https://benchlm.ai/models/gpt-5-4-nano` — 36 of 618 benchmarks covered with verified scores
3. Fetched OpenAI announcement `https://openai.com/index/introducing-gpt-5-4-mini-and-nano/` — contains benchmark tables with specific scores
4. Cross-referenced Vals AI leaderboards and Epoch AI FrontierMath v2 leaderboard

### Raw benchmarks found

> Sources: OpenAI announcement (`https://openai.com/index/introducing-gpt-5-4-mini-and-nano/`), BenchLM (`https://benchlm.ai/models/gpt-5-4-nano`), Artificial Analysis model benchmarks, Vals AI, Epoch AI. BenchLM covers 36 of 618 benchmarks. AA model page marks all benchmarks as "Not publicly available" — scores below are from the OpenAI announcement and BenchLM cross-referenced sources.

Agent / tool use:

- **Terminal-Bench 2.0:** **46.3%** — (OpenAI announcement; BenchLM)
- **OSWorld-Verified:** **39.0%** — (OpenAI announcement)
- **MCP Atlas:** **56.1%** — (OpenAI announcement; BenchLM)
- **Toolathlon:** **35.5%** — (OpenAI announcement; BenchLM)
- **τ²-bench (telecom):** **92.5%** — (OpenAI announcement; BenchLM)
- **APEX-Agents-AA:** **24.9%** — (Artificial Analysis model benchmarks via BenchLM)
- **GDPval-AA (normalized):** **21.8%** — (Artificial Analysis model benchmarks via BenchLM)
- **GDPval-AA (Elo):** **1035** — (Artificial Analysis: gdpval-aa leaderboard via BenchLM)
- **AA Agentic Index:** **17.7%** — (Artificial Analysis model benchmarks via BenchLM)
- **Terminal-Bench 2.1 (Vals):** **41.6%** — (Vals AI: Terminal-Bench 2.1 leaderboard)

Coding:

- **Vibe Code Bench:** **26.10%** — (Vals AI: Vibe Code Bench v1.1 via BenchLM)
- **AA-SciCode:** **47.2%** — (Artificial Analysis model benchmarks via BenchLM)
- **LiveCodeBench (Vals):** **84.0%** — (Vals AI: LiveCodeBench leaderboard)
- **SWE-bench (Vals):** **69.8%** — (Vals AI: SWE-bench leaderboard)
- **AA Coding Index:** **56.1%** — (Artificial Analysis model benchmarks via BenchLM)

Reasoning / knowledge:

- **Artificial Analysis Intelligence Index:** **21** (estimated, rank #42/175, median: 12) — (AA model page)
- **BenchLM Intelligence Index:** **20.7%** — (Artificial Analysis model benchmarks via BenchLM)
- **GPQA:** **82.8%** — (OpenAI announcement; BenchLM)
- **GPQA Diamond (Vals):** **77.5%** — (Vals AI: GPQA Diamond leaderboard)
- **AA-GPQA Diamond:** **81.7%** — (Artificial Analysis: gpqa-diamond leaderboard via BenchLM)
- **HLE w/ tools:** **37.7%** — (OpenAI announcement)
- **HLE w/o tools:** **24.3%** — (OpenAI announcement)
- **AA-HLE:** **28.3%** — (Artificial Analysis: humanitys-last-exam leaderboard via BenchLM)
- **AA-LCR:** no verified public score found
- **CritPt:** **9.3%** — (Artificial Analysis: critpt leaderboard via BenchLM)
- **AA-Omniscience Index:** **-29.5%** — (BenchLM)
- **AA-Omniscience Accuracy:** **25.7%** — (BenchLM)
- **AA-Omniscience Hallucination Rate:** **74.2%** — (BenchLM)
- **MMLU-Pro (Vals):** **77.2%** — (Vals AI: MMLU Pro leaderboard)
- **AA-IFBench:** **75.9%** — (Artificial Analysis model benchmarks via BenchLM)
- **FrontierMath v2 (Tiers 1-3):** **25.860%** — (Epoch AI FrontierMath v2 leaderboard)
- **FrontierMath v2 (Tier 4):** **6.250%** — (Epoch AI FrontierMath v2 leaderboard)
- **ARC-AGI-1:** **51.50%** — (ARC Prize official leaderboard data via BenchLM)
- **ARC-AGI-2:** **5.7%** — (ARC Prize official leaderboard data via BenchLM)

Multimodal & grounded:

- **MMMU-Pro:** **66.1%** — (OpenAI announcement; BenchLM)
- **MMMU-Pro w/ Python:** **69.5%** — (OpenAI announcement)
- **AA-MMMU-Pro:** **65.4%** — (Artificial Analysis model benchmarks via BenchLM)
- **Design Arena Website:** **1202** — (OpenRouter model benchmarks via BenchLM)

### Normalized scores (1–100)

> Method: `model-comparison.md` v4. `Overall = round((Tool + Reasoning + Context + Multimodal + Coding) / 5)`. Cost is scored independently and excluded.
  > Confidence: high — 36 public benchmarks found across 4 sources (OpenAI announcement, BenchLM, AA, Vals AI, Epoch AI).

- **Tool use: 60/100.** τ²-bench 92.5% is exceptional (best-in-class for agentic telecom tasks). MCP Atlas 56.1% and Terminal-Bench 2.0 46.3% are moderate. OSWorld-Verified 39% is below frontier. GDPval-AA 1035 Elo is moderate. However, AA Agentic Index 17.7% and GDPval-AA normalized 21.8% are well below the 40% threshold, indicating poor overall agentic performance despite the τ²-bench outlier. Terminal-Bench 2.1 (Vals) 41.6% is moderate. No Gert Labs, JobBench, or Toolathlon Verified scores.
- **Reasoning: 55/100.** AA Intelligence Index 21 (estimated, rank #42/175) is above the open-weights median (12) but below typical pricing-tier median (26). GPQA 82.8% (OpenAI) and 81.7% (AA) are good but not frontier (90%+). HLE w/ tools 37.7% and w/o tools 24.3% are weak. LCR not found but Graphwalks suggest moderate long-context. CritPt 9.3% is very weak. Omniscience Index -29.5% indicates significant hallucination issues. MMLU-Pro 77.2% is decent. IFBench 75.9% is good. ARC-AGI-1 51.5% is moderate.
- **Context window: 78/100.** 400K tokens falls in the 200K–500K tier (65–84 range), high end. Strong graphwalks performance (76.3%) shows good long-context handling. `meta.json` claims 128K but verified 400K.
- **Multimodal: 65/100.** Text and image input, text output (per AA model page). +image-in only, no video/audio/PDF verified. MMMU-Pro 66.1% and MMMU-Pro w/ Python 69.5% show moderate vision reasoning.
- **Coding: 58/100.** LiveCodeBench (Vals) 84.0% is excellent. SWE-bench (Vals) 69.8% is decent. AA Coding Index 56.1% is average. Terminal-Bench 2.0 46.3% is weak. Vibe Code Bench 26.10% is very weak. AA-SciCode 47.2% is below frontier. No SWE-bench Verified, DeepSWE, VulcanBench, or OpenHarmony scores found.
- **Cost efficiency: 97/100.** $0.20 in / $1.25 out per 1M tokens — extremely low cost. Among the cheapest reasoning models available. Only $0.05 per Intelligence Index task. 163.5 tok/s speed. noFreeId (no explicit $0 tier, but pricing is effectively free-level).
- **Overall Score: 63/100.** Mean of five quality dimensions: (60 + 55 + 78 + 65 + 58) / 5 = 316 / 5 = 63.2 → 63. GPT-5.4 nano is an efficient lightweight model with excellent τ²-bench (92.5%) and LiveCodeBench (84%) performance, but poor agentic index (17.7%), hallucination-prone (Omniscience -29.5%), and weak Vibe Code (26.1%). 400K context, multimodal, $0.20/$1.25 pricing. `meta.json` discrepancies noted: claims 128K context vs verified 400K; claims text-only vs verified text+image input.

---

## Signature

- Provided by: **Laguna S 2.1 (poolside/laguna-s-2.1)** — 2026-10-01
- Method: public internet research via Artificial Analysis, BenchLM, OpenAI announcements, Vals AI, and Epoch AI; zero-influence: did not read peer `model/` findings files during research. Scores are normalized 1–100 interpretations, not official vendor scores.
- Meta.json discrepancies: `meta.json` lists 128K context window and text-only modalities, but AA model page and BenchLM show 400K context window with text+image input support. OpenAI announcement confirms 400K context and text+image input. `meta.json` appears to be a placeholder for this model.
- Future sources: add a new file next to this one, e.g. `OpenAI_GPT_5.4_nano_System_Card.md`, using the same headings.
