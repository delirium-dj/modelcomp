# GPT-5.6 Terra — findings by GPT-5.6 Terra

- Source: OpenAI (`gpt-5.6-terra`)
- Date: 2026-09-18 (UTC)
- Overview and scoring methodology: `../../model-comparison.md`
- Cross-model signed log: `../../model-findings.md`

## Model card

- **Name:** GPT-5.6 Terra
- **Short description:** OpenAI's GPT-5.6 tier for workloads that balance intelligence and cost; OpenAI describes it as approximately the earlier GPT-5 mini tier.
- **Provider / access:** OpenAI API, `gpt-5.6-terra`, via both Chat Completions and Responses APIs.
- **Release / knowledge:** knowledge cutoff 2026-02-16; public model-page release date not stated.
- **IDs:** `openai/gpt-5.6-terra` (no Zen Free ID verified).
- **Context window:** 1,050,000 tokens total and 128,000 maximum output tokens, per the official model page.
- **Modalities:** text and image input; text output; reasoning tokens; function calling, structured outputs, web/file search, image generation, Code Interpreter, hosted shell, computer use, MCP and tool search are supported in Responses.
- **Pricing (as of 2026-09-18):** $2.00 input / $0.20 cached input / $12.00 output per 1M text tokens; paid API model.
- **Architecture:** proprietary; parameter count and architecture not publicly disclosed.

### Raw benchmarks found

Agent / tool use:

- Terminal-Bench 2.1: **87.4%**; AutomationBench: **15.2%**; Toolathlon: **53.1%** (OpenAI GPT-5.6 launch evaluation table).
- GDPval-AA v2: **1593 Elo**; Agents' Last Exam: **50.4%**; OSWorld 2.0: **50.2%**; BrowseComp: **87.5%** (OpenAI GPT-5.6 launch evaluation table).
- Tau3-Banking / Tau2-Bench, Claw-Eval / ClawProBench, MCP Atlas, and SWE Atlas Codebase QnA: OpenAI's public GPT-5.6 table does not publish result rows for these suites.

Reasoning / knowledge:

- GPQA Diamond: **92.9%**; FrontierMath v2 Tier 1-3: **84.9%**; Tier 4: **68.3%** (OpenAI GPT-5.6 launch evaluation table).
- Artificial Analysis Intelligence Index v4.1: **55**; Big Finance Bench: **51%** (OpenAI GPT-5.6 launch evaluation table).
- HLE, LCR / MLCR, CritPt, and Omniscience: OpenAI's public GPT-5.6 table does not publish result rows for these suites.

Coding:

- SWE-bench Pro: **63.4%**; DeepSWE v1.1: **69.6%**; Terminal-Bench 2.1: **87.4%**; Artificial Analysis Coding Agent Index v1.1: **77.4** (OpenAI GPT-5.6 launch evaluation table).
- LiveCodeBench, SciCode / AA-SciCode, and Vibe Code Bench: OpenAI's public GPT-5.6 table does not publish result rows for these suites.

Long context:

- OpenAI MRCR v2 8-needle: **89.6%** at 256K-512K and **72.5%** at 512K-1M; GraphWalks BFS F1: **76.9%** at 256K and **71.2%** at 1M (OpenAI GPT-5.6 launch evaluation table).

### Normalized scores (1–100)

- **Tool use: 85/100.** Terminal-Bench 2.1 at 87.4%, Agents' Last Exam at 50.4%, Toolathlon at 53.1%, and documented first-party tools support a strong score; AutomationBench at 15.2% and OSWorld at 50.2% cap it.
- **Reasoning: 89/100.** GPQA Diamond at 92.9%, FrontierMath at 84.9% on Tiers 1-3, and an AA Intelligence Index of 55 are substantial evidence; OpenAI does not publish HLE, LCR, CritPt, or Omniscience rows for Terra.
- **Context window: 95/100.** The official 1.05M context plus MRCR v2 72.5% and GraphWalks 71.2% at the 1M tier support a high score, while showing real retrieval degradation at maximum length.
- **Multimodal: 78/100.** Text and image input are confirmed and MMMU Pro reaches 80.7% without tools / 82.0% with tools; audio and video are unsupported and output is text-only.
- **Coding: 90/100.** SWE-bench Pro at 63.4%, DeepSWE at 69.6%, Terminal-Bench 2.1 at 87.4%, and AA Coding Agent Index 77.4 demonstrate strong agentic coding; OpenAI does not publish LiveCodeBench or SciCode rows.
- **Cost efficiency: 65/100.** $2/$12 per MTok is a paid mid-tier rate, not free-tier pricing.
- **Overall Score: 87.4/100.** Mean of the five quality dimensions: (85 + 89 + 95 + 78 + 90) / 5 = 87.4; best suited to tool-enabled, long-context work where a paid mid-tier model is appropriate.

---

## Signature

- Provided by: **GPT-5.6 Terra (`openai/gpt-5.6-terra`)** — 2026-09-18
- Method: public internet research using the official OpenAI model documentation; scores are normalized 1–100 interpretations, not official vendor scores.
- Future sources: add a new file next to this one, e.g. `GPT_5.md`, using the same headings.
