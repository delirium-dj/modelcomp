# Doubao Seed 2.1 Pro 260915 — findings by Gemini 3.5 Flash Lite

- Source: ByteDance Seed / Volcengine Ark (`doubao-seed-2.1-pro-260915`)
- Date: 2026-11-13 (UTC)
- Overview and scoring methodology: `../../model-comparison.md`
- Cross-model signed log: `../../model-findings.md`

## Model card

- **Name:** Doubao Seed 2.1 Pro (260915)
- **Short description:** Doubao Seed 2.1 Pro is a ByteDance Seed large model in the Seed2.1 family aimed at real-world productivity, with strengthened agentic task execution, end-to-end coding delivery, multimodal understanding, and long-context processing.
- **Provider / access:** Volcengine Ark model ID `doubao-seed-2.1-pro-260915` (also surfaced via BytePlus ModelArk playground/API naming in Seed materials as part of Seed2.1). Exact public API base URL and authentication details not fully enumerated in fetched pages beyond product/platform references.
- **Release / knowledge:** Listed as a recommended Seed2.1 model on Volcengine Ark model list as of 2026-11-13; model date/version tag `260915`. Knowledge cutoff not stated in fetched sources.
- **IDs:** `doubao-seed-2.1-pro-260915` (Volcengine Ark). No OpenCode Zen free ID found in fetched sources.
- **Context window:** 1024K tokens context window, 1024K max input, 256K max answer (default 4K), 256K max reasoning/thinking chain (per Volcengine Ark model list).
- **Modalities:** Multimodal understanding (text/image/video/document/audio-related capabilities listed in Seed2.1/Ark materials), text generation, deep reasoning/thinking, GUI task handling, tool calling, structured output. Output modalities beyond text not explicitly specified in fetched sources.
- **Pricing (as of 2026-11-13):** No verified public per-token pricing found for `doubao-seed-2.1-pro-260915` in fetched sources.
- **Architecture:** Proprietary ByteDance Seed model; parameter count and detailed architecture not publicly disclosed in fetched sources.

### Raw benchmarks found

> Benchmarks below are taken from the Seed2.1 official page table (Seed2.1 Pro column) and platform capability/spec listings where applicable. Not all benchmark protocols/harness details were included on the fetched page.

Agent / tool use:

- Workspace Bench (**high-economic-value / office-agent tasks**): **53.0** (Seed2.1 evaluation table, Seed2.1 Pro).
- Agent Startup Bench (**agent practice**): **68.8** (Seed2.1 evaluation table, Seed2.1 Pro).
- xDailyBench (**white-collar office work**): **61.0** (Seed2.1 evaluation table, Seed2.1 Pro).
- GUI task processing: supported capability listed by Volcengine Ark for `doubao-seed-2.1-pro-260915` (no standardized benchmark score found).
- Terminal-Bench 2.1 (**terminal usage**): **71.0** (Seed2.1 evaluation table, Seed2.1 Pro).
- Tau3-Banking / Tau2-Bench: no verified public score found.
- GDPval-AA: no verified public score found.
- Claw-Eval / ClawProBench: no verified public score found.
- Toolathon / MCP-Atlas / SWE Atlas Codebase QnA: no verified public score found.

Reasoning / knowledge:

- KINA (**knowledge**): **48.3** (Seed2.1 evaluation table, Seed2.1 Pro).
- SuperGPQA (**knowledge**): **70.8** (Seed2.1 evaluation table, Seed2.1 Pro).
- BeyondAIME (**reasoning**): **87.0** (Seed2.1 evaluation table, Seed2.1 Pro).
- MathVision (w. Tool): **92.6 (94.5)** (Seed2.1 evaluation table, Seed2.1 Pro).
- MMMU-Pro (w. Tool): **81.6 (82.7)** (Seed2.1 evaluation table, Seed2.1 Pro).
- WorldVQA (**visual knowledge**): **53.0** (Seed2.1 evaluation table, Seed2.1 Pro).
- GPQA Diamond: no verified public score found.
- HLE: no verified public score found.
- LCR / MLCR: no verified public score found.
- CritPt: no verified public score found.
- Artificial Analysis Intelligence Index / BenchLM overall: no verified public score found.
- Omniscience Accuracy / Hallucination Rate: no verified public score found.

Coding:

- NL2Repo-Bench (**long-horizon end-to-end code**): **47.0** (Seed2.1 evaluation table, Seed2.1 Pro).
- ProgramBench (**long-horizon end-to-end code**): **0/1/50.3** as reported (Seed2.1 evaluation table, Seed2.1 Pro).
- Terminal Bench 2.1 (**terminal usage**): **71.0** (Seed2.1 evaluation table, Seed2.1 Pro).
- SWE-Atlas (**debugging**): **35.2** (Seed2.1 evaluation table, Seed2.1 Pro).
- SWE-bench Verified / SWE-Pro: no verified public score found.
- LiveCodeBench: no verified public score found.
- SciCode / AA-SciCode: no verified public score found.
- Vibe Code Bench: no verified public score found.

Long context:

- MMLongBench-128K (**multimodal long-context**): **78.3** (Seed2.1 evaluation table, Seed2.1 Pro).
- 1024K context window stated by Volcengine Ark; no verified MRCR/RULER/GraphWalks results found in fetched sources.

Multimodal/video understanding (additional raw evidence):

- VideoMME (**long video understanding**): **89.2**
- TOMATO (**motion & perception**): **79.5**
- Minerva (**video reasoning**): **70.7**
- OVOBench (**streaming**): **80.7**
- VideoSimpleQA (**knowledge**): **76.4**
- CharXiv-RQ (w. Tool): **85.4 (86.4)**
- ERQA (**spatial reasoning**): **72.0**
- ZEROBench (w. Tool): **18.0 (22.0)**
- BabyVision (**perception**): **73.7**
(all from Seed2.1 evaluation table, Seed2.1 Pro column)

### Normalized scores (1–100)

> Scores are evidence-limited interpretations from fetched public sources as of 2026-11-13. Overall = mean of the five non-cost quality dimensions (Tool use, Reasoning, Context window, Multimodal, Coding); Cost efficiency excluded.

- **Tool use: 72/100.** Supported by strong agent/productivity benchmark results (Agent Startup Bench 68.8, xDailyBench 61.0, Workspace Bench 53.0) and platform-stated tool calling/GUI task handling; capped by limited independent third-party tool-use benchmarks (e.g. Tau-bench, GDPval-AA) in fetched sources.
- **Reasoning: 78/100.** BeyondAIME 87.0 and solid knowledge/reasoning indicators (SuperGPQA 70.8, MathVision 92.6/94.5, MMMU-Pro 81.6/82.7) indicate strong reasoning for complex tasks; capped by weaker KINA (48.3) and missing standard frontier reasoning benchmarks (GPQA Diamond, HLE, LCR/MLCR).
- **Context window: 85/100.** Vendor/platform-stated 1024K context with 256K answer/thinking budget is very large and supported by MMLongBench-128K (78.3); capped by absence of verified long-context retrieval stress tests at full window in fetched sources.
- **Multimodal: 84/100.** Broad multimodal/video performance is strong across fetched benchmarks (VideoMME 89.2, OVOBench 80.7, TOMATO 79.5, VideoSimpleQA 76.4, CharXiv-RQ 85.4/86.4, ERQA 72.0), indicating capable visual and temporal understanding; capped by mixed results on harder visual puzzles/knowledge (ZEROBench 18.0/22.0, WorldVQA 53.0).
- **Coding: 68/100.** Terminal Bench 2.1 (71.0) shows good terminal/code-agent execution, but end-to-end software engineering/debugging evidence is mixed (NL2Repo-Bench 47.0, SWE-Atlas 35.2, ProgramBench reported as 0/1/50.3) and common external coding benchmarks were not found; this caps confidence in general coding robustness.
- **Cost efficiency: 50/100.** No verified public pricing found for `doubao-seed-2.1-pro-260915` in fetched sources as of 2026-11-13; provisional neutral score pending disclosed per-token/API pricing.
- **Overall Score: 77/100.** Mean of Tool use, Reasoning, Context window, Multimodal, and Coding = (72 + 78 + 85 + 84 + 68) / 5 = 77.4, rounded half-up to 77. Best fit for long-context multimodal productivity and agentic workflows where document/video understanding and tool-assisted execution matter, with coding robustness and public pricing transparency as key uncertainties.

---

## Signature

- Provided by: **Gemini 3.5 Flash Lite (google/gemini-3.5-flash-lite)** — 2026-11-13 UTC
- Method: Independent public web research using direct page fetches (web search unavailable in this environment due HTTP 402 during attempts; fallback via `webfetch` per `RULES.md` § Web-research fallback). Scores are normalized 1–100 interpretations, not official vendor scores.
- Reference URLs:
  - [Seed2.1 — ByteDance Seed](https://seed.bytedance.com/en/seed2_1)
  - [Volcengine Ark model list / capabilities (includes doubao-seed-evolving and doubao-seed-2-1-pro-260915)](https://www.volcengine.com/docs/82379/1330310)
  - [ByteDance Seed models overview](https://seed.bytedance.com/en/models)
- Future sources: add a new file next to this one, e.g. `GPT_5.md`, using the same headings.
