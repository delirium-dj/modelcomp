# Claude Fable 5.2 — findings by Big Pickle

- Source: Anthropic/Claude Fable 5.2
- Date: 2026-11-11 (UTC)
- Overview and scoring methodology: `../../model-comparison.md`
- Cross-model signed log: `../../model-findings.md`

## Model card

- **Name:** Claude Fable 5.2
- **Short description:** Anthropic's flagship frontier model released 2026-11-09, aimed at long-horizon agentic coding, computer use, and document-heavy analysis. It is the publicly available twin of Claude Mythos 5.2: identical underlying weights, but Mythos is gated behind Anthropic's Cyber Verification Program / Life Sciences program and runs with certain cyber and bio safeguards lifted. Fable 5.2 sits at #1 of 214 on BenchLM's public ledger (92.05/100).
- **Provider / access:** Anthropic first-party (`anthropic/claude-fable-5.2`), also served on OpenCode Zen (`claude-fable-5-2`) and major clouds. Messages API with tool use and extended thinking.
- **Release / knowledge:** Released 2026-11-09; knowledge cutoff 2026-06 (vendor model card).
- **IDs:** `anthropic/claude-fable-5.2`; fast tier `claude-fable-5-2-fast`.
- **Context window:** 1,000,000 total / 128,000 max output (vendor model card; AA confirms 1M).
- **Modalities:** text + image + PDF in; text out; reasoning yes; tool calls yes; structured output yes.
- **Pricing (as of 2026-11-11):** $8.00 / $40.00 per 1M in/out; cache read $0.20, cache write $10.00; fast tier $16 / $80. (Note: `meta.json` still carries the pre-launch $10/$50 figure; Anthropic's launch page and OpenCode Zen's live price table both show $8/$40.)
- **Architecture:** proprietary.

### Raw benchmarks found

Agent / tool use:

- Terminal-Bench 4.0: **59.6%** (AA harness) / **67.6%** (vendor model card)
- Terminal-Bench Science: **73.3%** (AA) / **74.6%** (vendor)
- AutomationBench: **76.4%** (AA harness) / **51.4%** (vendor-reported, different subset)
- OSWorld 2.1 offline: **89.3%** (vendor)
- DRACO: **87.7%** (vendor)
- WANDR: **82.1%** (vendor)
- RoboDojo: **64.9%** (vendor)
- RLI: **41.3%** (vendor)
- GDPval-AA: **1831.33 Elo** (AA)
- AA Briefcase: **1785.32 Elo** (AA)
- Bug Hunt: **58 fixes** (vendor-reported count)
- Claw-Eval / Toolathon / MCP-Atlas: no verified public score found.

Reasoning / knowledge:

- AA Intelligence Index: **64.56** — #1 of the AA field at release
- HLE: **74.2%** (AA 74.28%; vendor 74.2% with tools, 73.2% without)
- HLE-Diamond: **80.2%** (AA)
- ARC-AGI-3: **65.7%**; **94.9%** with the vendor adapter
- STEM Professor: **61.8%**
- CritPt: **35.4%** (AA) / **76.5%** agentic-hard variant (AA)
- LCR: **83.3%** (AA)
- AA-Omniscience: accuracy **79.1%**, hallucination rate **59.3%** (AA)
- PhysicianBench: **64.4%** (vendor)
- MLCR: **43.9%** (AA)
- GPQA Diamond: no verified public score found in the launch materials (AA returns null for this model).
- BenchLM overall: **92.05 / #1 of 214**

Coding:

- SWE-bench Pro: **93%** (vendor)
- SWE-bench Multilingual: **96.6%** (vendor)
- SWE-bench Multimodal: **74.1%** (vendor)
- DeepSWE: **74.3%** (vendor)
- FrontierSWE v2: **69.9%** (vendor)
- ProgramBench: **85.6%** (vendor)
- FrontierCode 2.0: **48.8%** (AA) / **49.1%** (vendor)
- CursorBench 4.0: **60.0%** (vendor)
- SciCode: **67.7%** (AA)
- LiveCodeBench: no verified public score found.

Document / chart QA (supports the multimodal band):

- OfficeQA Pro: **72.9%**
- OfficeQA: **83.4%**
- Chartography: **73.4%** plain / **91.6%** with tools
- BenchCAD: **75.4** plain / **83.5** with tools

Long context:

- LCR **83.3%** (AA) — strong, but below the ≥98%-at-512K bar that would justify a 100.
- MRCR / RULER / GraphWalks: no separate public numbers found.

### Normalized scores (1–100)

- **Tool use: 95/100.** TB 4.0 59.6–67.6%, OSWorld 2.1 89.3%, DRACO 87.7%, AutomationBench 76.4% (AA) and GDPval 1831 Elo are all frontier-band; capped by RLI 41.3% and the vendor's lower AutomationBench subset, which show headroom on long-horizon autonomy.
- **Reasoning: 95/100.** AA Index 64.56 (#1), HLE 74.2%, HLE-Diamond 80.2%, ARC-AGI-3 65.7% (94.9% with adapter) and LCR 83.3% are frontier; capped by CritPt 35.4% and a 59.3% hallucination rate on AA-Omniscience.
- **Context window: 95/100.** 1M-token tier with 128K output; LCR 83.3% is good but just short of the ≥98%-at-512K retrieval threshold for 100.
- **Multimodal: 82/100.** Text + image + PDF input only (no audio/video), but top-of-band document/vision evidence: SWE-bench Multimodal 74.1%, Chartography 91.6% with tools, BenchCAD 83.5 with tools.
- **Coding: 97/100.** SWE-bench Pro 93%, SWE Multilingual 96.6%, ProgramBench 85.6%, DeepSWE 74.3%, SciCode 67.7% — best-in-class; FrontierCode 2.0 48.8% is the only soft spot.
- **Cost efficiency: 38/100.** $8/$40 per 1M is close to the $10/$50 ≈ 30 anchor; $0.20 cache reads and $10 cache writes soften the bill, but the $16/$80 fast tier is not value-oriented.
- **Overall Score: 93/100.** (95 + 95 + 95 + 82 + 97) / 5 = 92.8 → 93. Best fit: the hardest agentic coding, computer-use, and long-context document work where price is secondary.

---

## Signature

- Provided by: **Big Pickle (opencode/big-pickle)** — 2026-11-11
- Method: public web research (Anthropic launch page and 5.2 system card, Artificial Analysis model page and API data, BenchLM public ledger, OpenCode Zen price table); scores are normalized 1–100 interpretations, not official vendor scores.
- Reference URLs:
  - [Anthropic — Claude Fable 5.2 and Claude Mythos 5.2](https://www.anthropic.com/claude-fable-and-mythos-5-2)
  - [Anthropic — Claude Fable 5.2 and Mythos 5.2 System Card](https://www.anthropic.com/document/claude-fable-5-2-mythos-5-2-system-card)
  - [Artificial Analysis — Claude Fable 5.2](https://artificialanalysis.ai/models/claude-fable-5-2)
  - [BenchLM — Claude Fable 5.2](https://benchlm.ai/models/claude-fable-5-2)
  - [OpenCode Zen — model list and pricing](https://opencode.ai/docs/zen/)
- Future sources: add a new file next to this one, e.g. `Claude_Fable_5.2_Update.md`, using the same headings.
