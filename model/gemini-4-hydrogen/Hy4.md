- Source: Google DeepMind/Gemini 4 Hydrogen
- Date: 2026-11-14 (UTC)
- Overview and scoring methodology: `../../model-comparison.md`
- Cross-model signed log: `../../model-findings.md`

## Model card

- **Name:** Gemini 4 Hydrogen
- **Short description:** Google's 2026-11-12 fast-tier Gemini 4 model, adapted from Gemini 4 Carbon and positioned as the "fast execution engine" alongside the deep-reasoning Carbon and Argon. Google Antigravity's Orchestrator can switch between Carbon and Hydrogen within one session (Carbon plans/coordinates). A distinct SKU, not an alias.
- **Provider / access:** Gemini API / Google AI Studio, Gemini app and Google Search AI Mode (which fully switched to the Hydrogen base), Google Antigravity with Orchestrator. No free Zen ID verified.
- **Release / knowledge:** 2026-11-12 (local time; global rollout from 2026-11-13 Beijing time); **knowledge cutoff 2026-03** per Google's official model card.
- **IDs:** `gemini-4-hydrogen` family ID as cited. No free Zen ID verified.
- **Context window:** **1,000,000 tokens native input and up to 1,000,000 tokens output**; **64K default synchronous** output, extendable to 1M via background long decode. **Four thinking depths: low / medium / high (default) / xhigh**.
- **Modalities:** large PDFs, spreadsheets, charts, audio and video in; text out (Google DeepMind official page / Baike). Native multimodal understanding (MKA, Chartography rows in Google's official table). No verified non-text output.
- **Pricing (as of 2026-11-14):** **$1.50 / 1M input, $7.50 / 1M output, $0.075 / 1M cached input** per Google's official announcement and Gemini API pricing page (as reported by the AI Pro League release tracker, read 2026-11-13).
- **Architecture:** Proprietary, closed weights; adapted from Gemini 4 Carbon. Parameter count not disclosed. Orchestrator switching with Carbon reported to cut compute 24% and improve speed 19% at near-Carbon Terminal-Bench 4.0 success.

### Raw benchmarks found

Google DeepMind's official Gemini 4 Hydrogen comparison table (Hydrogen / Claude Sonnet 5.5 / GPT-6.1 Terra):

Agent / tool use:

- SWE-sweep (agentic coding): **13.5%** — best in table (Sonnet 5.5 3.1%, GPT-6.1 Terra 5.8%)
- Terminal-Bench 4.1 (cheating-adjusted): **57.0%** (Sonnet 5.5 leads at 63.9%)
- Agents' Last Exam v1.1: **71.6%** — best in table (Sonnet 5.5 60.4%, Terra 69.8%)
- AutomationBench-AA: **76.1%** — best in table (Sonnet 5.5 71.8%, Terra 60.2%)
- Vending-Bench 2 bank balance: **$14,549** — best in table (Sonnet 5.5 $11,165, Terra $9,107)
- OSWorld-2.1 offline subset: **77.6%** (Sonnet 5.5 leads at 83.9%)
- LiveBench 2.0: **77.0** (AI Pro League tracker, results dated 2026-11-06), ranking **#4** on LiveBench; read 2026-11-13
- Tau3-Banking / Tau2-Bench / GDPval-AA / Claw-Eval / Toolathon / MCP-Atlas: no verified public score found

Reasoning / knowledge:

- HLE-Diamond: **58.8%** — best in table (Sonnet 5.5 53.3%, Terra 47.3%)
- GPQA Diamond / LCR / MLCR / CritPt / AA Intelligence Index / Omniscience: no verified public score found for this exact ID

Coding:

- SWE-sweep **13.5%** and Terminal-Bench 4.1 **57.0%** as above
- Chartography **66.6%** — best in table (Sonnet 5.5 61.6%, Terra 63.2%)
- MKA Climb WSR accuracy **53.4%** — best in table (Sonnet 5.5 52.0%, Terra 43.8%)
- SWE-bench Verified / LiveCodeBench / SciCode / Vibe Code Bench / DeepSWE: no verified public score found

Long context:

- 1M native input / up to 1M output with 64K default synchronous; Terminal-Bench-Science 0.1 **51.4%** (Sonnet 5.5 leads at 59.9%)
- MRCR / RULER / GraphWalks: no verified public score found

### Normalized scores (1–100)

- **Tool use: 95/100.** Best-in-table SWE-sweep 13.5%, Agents' Last Exam 71.6%, AutomationBench-AA 76.1%, Vending-Bench 2 $14,549 and HLE-Diamond 58.8%; capped by trailing Sonnet 5.5 on Terminal-Bench 4.1 and OSWorld-2.1.
- **Reasoning: 94/100.** Top HLE-Diamond 58.8% with four selectable thinking depths up to xhigh, plus #4 LiveBench 77.0; capped by no GPQA/AA index figure and no published reasoning benchmark beyond HLE.
- **Context window: 97/100.** 1M native input **and** up to 1M output (64K synchronous, background long decode to 1M) — an unusually large output budget; capped by no published retrieval benchmark.
- **Multimodal: 95/100.** Native PDF/spreadsheet/chart/audio/video input with best-in-table MKA 53.4% and Chartography 66.6%; capped by text-only output and no published audio benchmark.
- **Coding: 93/100.** A dominant 13.5% SWE-sweep (more than 2x its comparators) and 57.0% Terminal-Bench 4.1; capped by trailing Sonnet 5.5 on Terminal-Bench 4.1 and no SWE-bench Verified figure.
- **Cost efficiency: 92/100.** $1.50/$7.50 per 1M with $0.075 cached reads, plus the Orchestrator's reported 24% compute saving and 19% speed gain when paired with Carbon. Excluded from Overall.
- **Overall Score: 95/100.** Half-up mean of 95, 94, 97, 95, 93 = 94.8 → 95. Best fit: high-throughput, multimodal agentic workflows and Search-AI-mode serving where speed, a 1M×1M context/output envelope and low cost dominate.

---

## Signature

- Provided by: **Hy4 (tencent/hy4)** — 2026-11-14 UTC
- Method: Fresh public-web research this pass, conducted independently (no peer findings files consulted). Primary evidence: Google DeepMind's official Gemini 4 performance page (the Hydrogen comparison table with exact per-benchmark values for Hydrogen, Claude Sonnet 5.5 and GPT-6.1 Terra), the Baidu Baike Gemini 4 Hydrogen article (four thinking depths, 1M input/output, modalities), and the AI Pro League release tracker entry (official Google pricing, knowledge cutoff, LiveBench 77.0, long-decode detail). Comparator rows measured under other model IDs are labelled by harness and never merged into Hydrogen's own rows. Scores are normalized 1–100 interpretations, not official vendor scores.
- Reference URLs: only URLs actually fetched this pass.
  - [Gemini — Google DeepMind (official Gemini 4 Hydrogen benchmark table)](https://deepmind.google/models/gemini/nano/)
  - [Gemini 4 Hydrogen — 百度百科 (thinking depths, 1M in/out, modalities)](https://baike.baidu.com/item/Gemini%204%20Hydrogen/69704018)
  - [Best AI Models Ranked 2026 — AI Pro League (release tracker: pricing, cutoff, LiveBench)](https://aiproleague.com/)
