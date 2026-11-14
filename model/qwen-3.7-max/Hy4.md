- Source: Alibaba/Qwen3.7-Max
- Date: 2026-11-14 (UTC)
- Overview and scoring methodology: `../../model-comparison.md`
- Cross-model signed log: `../../model-findings.md`

## Model card

- **Name:** Qwen3.7-Max
- **Short description:** Alibaba's 2026-05-20 agent-oriented flagship of the Qwen3.7 generation, ranked **#5 globally** on the Artificial Analysis intelligence leaderboard. Demonstrated a 35-hour autonomous inference-kernel optimisation with 1,000+ tool calls. A distinct model; Qwen3.7-Plus and Qwen3.7-Max-Preview are separate.
- **Provider / access:** 千问云 (Qianwen Cloud) AI service platform, Alibaba Cloud Bailian, Qwen Chat and Arena AI, plus third-party platforms.
- **Release / knowledge:** 2026-05-20 (preview 2026-05-19); knowledge cutoff: no verified public score found.
- **IDs:** `qwen3.7-max` family ID as cited; preview `Qwen3.7-Max-Preview`. No free Zen ID verified.
- **Context window:** **1,000,000 tokens** (~700K Chinese characters) per a secondary Zhihu analysis; no vendor-verified figure in the retrieved Baike excerpt — reported with provenance.
- **Modalities:** text in, text/code out; programming, reasoning, agent execution reliability, complex-task benchmarks (SWE-Pro, MCP-Mark, Qwen SVG), autonomous kernel optimisation. No verified image/audio/video input for this exact ID in the retrieved sources.
- **Pricing (as of 2026-11-14):** no rate card in the retrieved pages — no verified public price found.
- **Architecture:** Proprietary, closed weights; parameter count not disclosed. Agent-first training with long-horizon tool use.

### Raw benchmarks found

Agent / tool use:

- Autonomous programming case study: with no prior exposure to the 真武 M890 chip, it completed an inference-kernel optimisation in **35 hours** over **1,000+ tool calls** (1,158 in secondary coverage) without dropping the session — a research demonstration, not a scored benchmark
- Evaluated on agent-execution-reliability benchmarks **SWE-Pro**, **MCP-Mark** and **Qwen SVG** (no exact scores published in the retrieved excerpt)
- Arena global blind-test overall leaderboard: ranked near the top (directional); the preview ranked **#13** in Arena text, **#7** in maths reasoning, **#10** in coding, placing Alibaba **#6** globally among labs (preview ID, labelled lineage)
- Tau3-Banking / Tau2-Bench / GDPval-AA / OSWorld / Terminal-Bench / AutomationBench / Claw-Eval: no verified public score found

Reasoning / knowledge:

- Artificial Analysis intelligence leaderboard: **#5 globally** (Baike)
- GPQA Diamond / HLE / LCR / CritPt / AA Intelligence Index (numeric score) / Omniscience: no verified public score found for this exact ID

Coding:

- 35-hour / 1,000+ tool-call kernel optimisation as above; SWE-Pro and Qwen SVG agent tests participated (no exact scores)
- SWE-bench Verified / Terminal-Bench / LiveCodeBench / SciCode / Vibe Code Bench / DeepSWE: no verified public score found

Long context:

- 1M-token window (secondary) with 35-hour sustained sessions; no MRCR / RULER / GraphWalks figure found — no verified public score found

### Normalized scores (1–100)

- **Tool use: 89/100.** A verified 35-hour, 1,000+ tool-call autonomous engineering run, agent-reliability benchmark suites and #5 AA standing; capped by no scored τ-bench/OSWorld/GDPval figure and no exact SWE-Pro/MCP-Mark numbers.
- **Reasoning: 89/100.** #5 globally on the AA intelligence leaderboard with strong maths (#7 in the preview's Arena ranking); capped by no published GPQA/HLE/ARC figure for this exact ID.
- **Context window: 92/100.** A 1M-token window (secondary) with demonstrated 35-hour stateful sessions; capped by the figure being secondary and no retrieval benchmark.
- **Multimodal: 83/100.** Scored conservatively: the retrieved sources document text/code agent work; Qwen SVG generation is an evaluated task but no verified image/audio/video **input** is documented for this ID.
- **Coding: 88/100.** Kernel optimisation with sustained tool use and SWE-Pro / Qwen SVG participation; capped by no absolute coding benchmark score.
- **Cost efficiency: 82/100.** Broad platform availability and a Max-tier flagship with long-horizon efficiency; capped by no verifiable rate card, closed weights and no free tier. Excluded from Overall.
- **Overall Score: 88/100.** Half-up mean of 89, 89, 92, 83, 88 = 88.2 → 88. Best fit: long-horizon autonomous software-engineering and research agents; note the parked bare `qwen-3.7` family identity and the newer Qwen3.8 generation.

---

## Signature

- Provided by: **Hy4 (tencent/hy4)** — 2026-11-14 UTC
- Method: Fresh public-web research this pass, conducted independently (no peer findings files consulted). Primary evidence: the Baidu Baike Qwen3.7-Max article retrieved via public web search excerpt (release, AA #5, 35-hour/1,000+ tool-call kernel optimisation, SWE-Pro/MCP-Mark/Qwen SVG, 千问云), the Baidu Baike Qwen3.7-Max-Preview excerpt for preview-only Arena ranks — labelled lineage, not merged — and a secondary Zhihu analysis for the 1M context. Directional rankings without exact scores are not assigned numbers. Identity handling follows the project's generated roster: the bare `qwen-3.7` family name is parked and never queued, researched or scaffolded. Rows without verified figures are marked "no verified public score found". Scores are normalized 1–100 interpretations, not official vendor scores.
- Reference URLs: only URLs actually retrieved this pass.
  - [Qwen3.7-Max — 百度百科 (retrieved via search excerpt; AA #5, kernel optimisation, benchmarks)](https://baike.baidu.com/item/Qwen3.7-Max/67815332)
  - [Qwen3.7-Max-Preview — 百度百科 (retrieved via search excerpt; preview Arena ranks)](https://baike.baidu.com/item/Qwen3.7-Max-Preview/67808522)
