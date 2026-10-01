# Claude Opus 5.5 — findings by Qwen 3.8 Flash

- Source: Anthropic / Claude Opus 5.5 (`anthropic/claude-opus-5-5`)
- Date: 2026-10-02 (UTC)
- Overview and scoring methodology: `../../model-comparison.md`
- Cross-model signed log: `../../model-findings.md`

## Model card

- **Name:** Claude Opus 5.5
- **Short description:** First model of Anthropic's Claude 5.5 family and the enterprise Opus workhorse, with adaptive thinking, a 1M-token window and frontier coding/agentic performance. Not a variant/alias of Sonnet 5.5 (lower tier).
- **Provider / access:** Anthropic Messages API (`claude-opus-5-5`); also on AWS Bedrock / Google Vertex. No OpenCode Zen free ID (`noFreeId`).
- **Release / knowledge:** 2026 (Claude 5.5 family); knowledge cutoff not disclosed in the system card index.
- **IDs:** `anthropic/claude-opus-5-5`.
- **Context window:** 1,000,000 in / 128,000 max out (per curated model meta; consistent with Anthropic 1M-window tier).
- **Modalities:** text, image in; text out; reasoning on (adaptive thinking); tool calls; JSON mode. No video/audio input, no non-text output.
- **Pricing (as of 2026-10-02):** Paid Opus tier; exact per-1M rate not verified in the fetched scorecard index — scored provisionally on historical Opus-tier pricing.
- **Architecture:** proprietary, hosted only.

### Raw benchmarks found

> Independently verified against BenchLM rows citing the Anthropic "Introducing Claude Opus 5.5" post, the Claude Opus 5.5 System Card PDF, and Artificial Analysis / ARC Prize leaderboards (fetched 2026-10-02).

Agent / tool use:

- Terminal-Bench 4.0: **66.4%** (Anthropic; AA 59.6%); Terminal-Bench-Science 58.7%
- GDPval-AA: **1846** Elo (Anthropic; AA-normalized 67.3%)
- Toolathlon-Verified: **77.8%** (Pass@3 82.4%, Pass³ 72.2%, avg 26.9 turns) (System Card)
- OSWorld 2.0: **48.7%** (System Card)
- AutomationBench: **40.0%** (Anthropic) / AA 69.5%
- AA Harvey LAB: **91.2%**; AA Briefcase 1822 Elo; HLE w/ tools 67.7%
- Claw-Eval / MCP-Atlas: no verified public score found for this exact ID

Reasoning / knowledge:

- ARC-AGI-1 / ARC-AGI-2: **97.5% / 91.7%** (ARC Prize verified)
- HLE (no tools / AA): **64.4% / 61.4%**
- AA-LCR (long-context reasoning): **84.7%**; MLCR-AA 66.7%
- Artificial Analysis Intelligence Index: **57.6**
- CritPt: **31.7%** (Artificial Analysis)
- Omniscience Accuracy / Hallucination Rate: **66.2% / 58.6%** (Artificial Analysis)
- ArXivMath Aug-2026 (no tools / tools): 91.2% / 96.9%

Coding:

- SWE-bench Pro: **89.9%** (System Card); SWE Multilingual 93.9%; SWE Multimodal 61.4%
- DeepSWE: **74.2%** (System Card)
- AA-SciCode: **66.9%** (Artificial Analysis)
- ProgramBench: **91.2%**; FrontierCode 1.1 54.4% (Extended 63.6%); CursorBench 4.0 57.8%; CWE-bench v1 67.0%

Long context:

- GraphWalks BFS 256K–1M: **66.8%**; AA-LCR 84.7%; MLCR-AA 66.7% (1M window; long-context retrieval moderate rather than ≥98%).

### Normalized scores (1–100)

> Derived from the raw numbers above using `model-comparison.md` v4 methodology. Overall = half-up mean of the five quality dims; Cost excluded.

- **Tool use: 94/100.** GDPval-AA 1846, Toolathlon-Verified 77.8% and Terminal-Bench 4.0 66.4% place it at the frontier agentic band; held under 100 by OSWorld 48.7%, AutomationBench 40% and no verified Claw-Eval/MCP-Atlas number.
- **Reasoning: 94/100.** ARC-AGI-2 91.7% (elite), HLE 61.4%, AA-LCR 84.7% and ArXivMath 91–96.9% clear frontier refs; capped by Intelligence Index 57.6 (just below 60) and Omniscience accuracy 66.2% / hallucination 58.6%.
- **Context window: 96/100.** 1M-token window with 128K output qualifies for the ≥1M 95–100 tier, but long-context retrieval evidence is only moderate (GraphWalks 66.8%, no ≥98% MRCR at 512K+), so it does not reach 100.
- **Multimodal: 70/100.** Image-in is strong (Chartography 89%, AA-MMMU-Pro 87.7%, BenchCAD Vision2Code), but modalities are text+image in / text out only — no video/audio input and no non-text output, capping it in the +image-in 60–70 band.
- **Coding: 96/100.** SWE-bench Pro 89.9%, SWE Multilingual 93.9%, ProgramBench 91.2%, DeepSWE 74.2% and SciCode 66.9% meet or exceed every frontier coding ref; minor drag from CursorBench 57.8% and SWE Multimodal 61.4%.
- **Cost efficiency: 55/100.** Paid Opus-tier pricing (exact rate unverified in fetched sources; scored provisionally against historical Opus ~$5/$25 per 1M). No free tier. Cost is excluded from Overall.
- **Overall Score: 90/100.** Mean of Tool 94, Reasoning 94, Context 96, Multimodal 70, Coding 96 = 90.0 → 90. Best fit: premium enterprise coding/agentic flagship where top reasoning and tool reliability justify paid Opus pricing; pair with a vision/audio model when true multimodality is required.

---

## Signature

- Provided by: **Qwen 3.8 Flash (qwen/qwen-3.8-flash)** — 2026-10-02
- Method: public internet research (BenchLM rows citing the Anthropic launch post and Claude Opus 5.5 System Card, plus Artificial Analysis and ARC Prize leaderboards); scores are normalized 1–100 interpretations, not official vendor scores.
- Future sources: add a new file next to this one, e.g. `GPT_5.md`, using the same headings.
