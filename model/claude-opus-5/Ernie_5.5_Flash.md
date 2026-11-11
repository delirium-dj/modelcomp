# Claude Opus 5 — findings by Ernie 5.5 Flash

- Source: Anthropic/Claude Opus 5 (`claude-opus-5`)
- Date: 2026-11-11 (UTC)
- Overview and scoring methodology: `../../model-comparison.md`
- Cross-model signed log: `../../model-findings.md`

## Model card

- **Name:** Claude Opus 5
- **Short description:** Anthropic's strongest Opus model for coding, agents and professional work (released 2026-07-24), superseded by Opus 5.5 in September 2026. Still a top-tier coding model with a 1M context.
- **Provider / access:** Anthropic API (`claude-opus-5`), Amazon Bedrock, Google Vertex (`claude-opus-5@default`), plus ~40 gateway routes (OpenRouter, LLM Gateway, Vercel, Prime, AI/ML API, Kenari, AgentRouter).
- **Release / knowledge:** 2026-07-24; knowledge cutoff 2026-05 (models.dev).
- **IDs:** `claude-opus-5`, `anthropic/claude-opus-5`, `google-vertex/claude-opus-5@default`, `opencode/claude-opus-5`.
- **Context window:** 1,000,000 tokens total; 128,000 max output.
- **Modalities:** text, image and PDF in; text out; extended thinking and tool calls.
- **Pricing (as of 2026-11-11):** $5.00 / $25.00 per 1M input/output; cache read $0.50.
- **Architecture:** proprietary (undisclosed).

### Raw benchmarks found

Agent / tool use:

- BrowseComp: **90.8%**
- VulcanBench CII v1: **96.4%**; VulcanBench v3: **87.0%**
- AutomationBench: **26.0%** (weak — safeguard interventions counted as failures)
- Terminal-Bench 2.1 / 4.x: no verified public rows for Opus 5 (Anthropic reported TB4.0 at 52.3% in the Opus 5.5 post, see below)
- OSWorld / Toolathlon: no verified public row published

Reasoning / knowledge:

- HLE / GPQA Diamond / ARC-AGI: no verified public rows published for Opus 5 itself
- ProgramBench: **93.0%**; ProgramBench episode-1 hidden-test pass rate: **83.0%**
- Omniscience accuracy / hallucination rate: no verified public score found

Coding:

- SWE-bench Verified: **96%** (Anthropic); SWE-bench (Vals AI): **97.0%**
- SWE-bench Pro: **79.2%**; SWE Multilingual: **89.5%**; SWE-bench Multimodal: **59.4%**
- DeepSWE: **68.8%**; LiveCodeBench (Vals AI): **89.0%**
- CursorBench 3.2: **70.0%**; CursorBench 4.0: **46.6%**; FrontierCode 1.1 Main **53.4%** / Extended **63.6%**; FrontierCode 2.0: **26.7%**
- ScarfBench: **69.8%**; PostTrainBench v1.1: **35.0%**; Bug Hunt Bench: **27.0 fixes**

Long context:

- 1M context documented; no MRCR / RULER / GraphWalks row published
- Anthropic's Opus 5.5 post reports Opus 5 reproducing 52.3% on Terminal-Bench 4.0 (±1.6–2 pts), within noise of the public leaderboard's 51.8%

### Normalized scores (1–100)

- **Tool use: 88/100.** BrowseComp 90.8% and VulcanBench CII 96.4% are frontier, and the reproduced Terminal-Bench 4.0 figure (52.3%) is respectable; AutomationBench 26.0% and the absent OSWorld/Toolathlon rows cap it.
- **Reasoning: 86/100.** ProgramBench 93.0% is the only strong public reasoning row; no HLE/GPQA/ARC publication for this checkpoint makes the score provisional.
- **Context window: 100/100.** 1,000,000 tokens with 128,000 max output.
- **Multimodal: 70/100.** Text, image and PDF input only; no public multimodal benchmark rows.
- **Coding: 92/100.** SWE-bench Verified 96% (97.0% on the Vals harness) and VulcanBench CII 96.4% are elite; FrontierCode 2.0 26.7% and CursorBench 4.0 46.6% show the agentic-coding frontier has moved on.
- **Cost efficiency: 45/100.** $5/$25 per 1M — mid-premium, undercut by Sonnet 5.5 at 40% of the price and beaten on quality by Opus 5.5 at 20% less.
- **Overall Score: 87.2/100.** Best fit for repo-scale supervised coding where SWE-bench-style correctness matters; superseded by Opus 5.5 for long-horizon autonomy.

---

## Signature

- Provided by: **Ernie 5.5 Flash (baidu/ernie-5.5-flash-preview)** — 2026-11-11
- Method: public internet research (Anthropic model documentation and the Claude Opus 5.5 launch post, BenchLM model profile, models.dev catalog); scores are normalized 1–100 interpretations, not official vendor scores.
- Reference URLs:
  - [Introducing Claude Opus 5.5 (contains Opus 5 comparison figures) — Anthropic](https://www.anthropic.com/claude-opus-5-5)
  - [Claude Opus 5 benchmarks & sources — BenchLM](https://benchlm.ai/models/claude-opus-5)
  - [models.dev provider catalog](https://models.dev)
- Future sources: add a new file next to this one, e.g. `Claude_Opus_5_v2.md`, using the same headings.