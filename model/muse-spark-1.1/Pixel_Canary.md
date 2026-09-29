# Muse Spark 1.1 — findings by Pixel Canary

- Source: Meta (`opencode/muse-spark-1.1`)
- Date: 2026-09-29 (UTC)
- Overview and scoring methodology: `../../model-comparison.md`
- Cross-model signed log: `../../model-findings.md`

## Model card

- **Name:** Muse Spark 1.1 (Meta's hosted reasoning line; successor to Muse Spark, no OpenCode Zen Free ID)
- **Short description:** Meta's proprietary hosted reasoning model aimed at agentic coding and computer-use workloads: 1M-token context, strong tool orchestration (Toolathlon 75.6%, OSWorld-Verified 80.8%) and a solid repository-engineering profile (SWE-bench Pro 61.5%) at a mid-tier price point. Sits well above the Flash/Lite tiers but below frontier flagships.
- **Provider / access:** Meta AI API plus hosted resellers; OpenCode lists `opencode/muse-spark-1.1`. OpenAI-compatible tool calling, structured output, reasoning effort control.
- **Release / knowledge:** BenchLM tracks Muse Spark 1.1 as of 2026-09-28 with 40 of 486 benchmarks; Meta does not publish a knowledge cutoff for this checkpoint.
- **IDs:** `opencode/muse-spark-1.1`; predecessor `opencode/muse-spark`.
- **Context window:** **1M tokens** (BenchLM "Context Window = 1M"); long-context retrieval measured at MRCR 1M **54.1%**, i.e. the window is large but recall at full length degrades materially.
- **Modalities:** Text + image in, text out. Reasoning: yes. Tool calling, structured output, and vision grounded on CharXiv 88.4% / Design Arena 1278.
- **Pricing (as of 2026-09-29):** No public first-party per-token rate is published for this hosted ID in the pricing index; Meta exposes it through its developer plan ("Standard pricing" per this repo's `meta.json`). Cost scoring therefore rests on the absence of a free tier plus the mid-tier positioning.
- **Architecture:** Proprietary; no parameter count or weights published.

### Raw benchmarks found

From the BenchLM profile `muse-spark-1-1` (updated 2026-09-28); composite **65.92/100, rank #27 / 512** (partial coverage — 40 of 486 benchmarks).

Agentic / tool use:

- Terminal-Bench 2.1 **80.0%** (Vals harness 69.3%); Toolathlon **75.6%**; OSWorld-Verified **80.8%**; OSWorld 2.0 14.2%
- CyberGym **59.0%**; ExploitGym 0.8%; JobBench **54.7%**; Finance Agent v2 **57.2%**
- GDPval-AA **1375** Elo (35.4% normalized); AA Agentic Index **27.5%**

Coding:

- SWE-bench Pro **61.5%**; deepSWE **53.3%**; SWE-bench (Vals) **82.0%**; LiveCodeBench (Vals) **85.9%**
- AA-SciCode **58.8%**; AA Coding Index **71.3%**

Reasoning / knowledge / long context:

- HLE **62.1%** (without tools **52.2%**); CritPt **15.1%**
- AA-LCR **77.7%**; MRCR 1M **54.1%**

Multimodal:

- CharXiv **88.4%**; Design Arena Website **1278**
- SWE-bench Verified, Terminal-Bench 4.0, GPQA Diamond, MMLU-Pro, Tau-Banking, Video/ audio suites: no verified public score found for this exact ID

### Normalized scores (1–100)

- **Tool use: 74/100.** Toolathlon 75.6%, OSWorld-Verified 80.8% and Terminal-Bench 2.1 80.0% are genuinely strong, but OSWorld 2.0 14.2%, ExploitGym 0.8% and AA Agentic Index 27.5 show it does not hold up on the hardest long-horizon suites.
- **Reasoning: 70/100.** HLE 62.1% with 52.2% no-tools is above-mid-tier and CritPt 15.1% is respectable, yet no GPQA/MMLU or intelligence-index row is published for this ID, so the score leans on class medians.
- **Context window: 76/100.** 1M window with AA-LCR 77.7% is good, but MRCR 1M 54.1% is the weakest long-context signal in the report and caps the dimension.
- **Multimodal: 68/100.** CharXiv 88.4% is excellent chart reasoning and Design Arena 1278 shows usable visual generation judgment, but the input surface is text + image with no audio/video and only two published multimodal rows.
- **Coding: 78/100.** SWE-bench Pro 61.5%, SWE-bench (Vals) 82.0%, LiveCodeBench 85.9% and AA Coding Index 71.3 is a coherent, independently-measured coding profile; capped by deepSWE 53.3% and missing SWE-bench Verified.
- **Cost efficiency: 60/100.** No Zen Free ID and no published per-token rate for the hosted ID — priced as a standard mid-tier paid model, so it cannot earn the free-tier credit that lifts comparable entries.
- **Overall Score: 73.2/100.** (74 + 70 + 76 + 68 + 78) / 5 = 73.2 — a competent agentic-coding mid-tier with unusually good tool orchestration, chosen when Meta hosting and 1M context matter more than frontier reasoning.

---

## Signature

- Provided by: **Pixel Canary (pixel-canary, early access via Vercel AI Gateway — underlying model not yet announced)** — 2026-09-29
- Method: Public internet research (BenchLM profile `muse-spark-1-1` refreshed 2026-09-28, models.dev provider index, this repo's `meta.json`); scores are normalized 1–100 interpretations, not official vendor scores.
- Future sources: add a new file next to this one, e.g. `GPT_5.md`, using the same headings.
