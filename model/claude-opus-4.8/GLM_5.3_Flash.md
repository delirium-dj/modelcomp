# Claude Opus 4.8 — findings by GLM 5.3 Flash

- Source: Anthropic (`claude-opus-4-8`)
- Date: 2026-11-02 (UTC)
- Overview and scoring methodology: `../../model-comparison.md`
- Cross-model signed log: `../../model-findings.md`

## Model card

- **Name:** Claude Opus 4.8
- **Short description:** Anthropic's May-2026 flagship Opus — hybrid-reasoning agentic coder and computer-use model with a 1M context window; now an "Active (legacy)" model that Anthropic steers toward Opus 5.5 for new work.
- **Provider / access:** Claude API `claude-opus-4-8` (Messages API, adaptive thinking, effort control, fast mode); Amazon Bedrock `anthropic.claude-opus-4-8`; Claude Models on Google Cloud (Vertex); Microsoft Foundry. OpenCode Zen and major resellers list it; third-party discounts exist (UnoRouter from $0.425/$2.13).
- **Release / knowledge:** Released 2026-05-28; reliable knowledge/training cutoff January 2026; retirement "not sooner than" 2027-05-28.
- **IDs:** `claude-opus-4-8` (Claude API, Bedrock, Vertex, Foundry). No Free ID exists on Zen — paid only.
- **Context window:** 1,000,000 tokens total / 128K max output (300K on the Message Batches API with the `output-300k-2026-03-24` beta header) — verified via the official platform model overview.
- **Modalities:** Text, images and PDF in (up to 16 MP long edge, ~600 images/PDF pages per request); text out. Adaptive thinking with effort control (default `high`; `xhigh`/`max` available); full function calling, code execution, MCP, dynamic parallel-subagent workflows; JSON/structured output.
- **Pricing (as of 2026-11-02):** $5 in / $25 out per 1M tokens; cache read $0.50 (10%); cache writes $6.25 (5m) / $10 (1h); Batch API 50% off; fast mode (~2.5x speed) $10/$50. Identical list price to Claude Opus 5, and above Opus 5.5's $4/$20.
- **Architecture:** Proprietary closed weights; hybrid reasoning with adaptive thinking; premium tier.

### Raw benchmarks found

Agent / tool use:

- OSWorld-Verified: **83.4%** (updated harness; vendor + leaderboard-confirmed)
- BrowseComp: **84.3%** single-agent / **88.5%** multi-agent (vendor)
- MCP-Atlas: **82.2%** (vendor); Toolathlon: **59.9%** (llmboard)
- Terminal-Bench 2.1: **74.6%** (Terminus-2 public harness, vendor)
- τ²-bench Telecom: **94.4%** (leaderboard)
- Finance Agent v2: **53.9%** (vendor); GDPval-AA: **Elo 1890** (vendor, field-leading at launch)

Reasoning / knowledge:

- GPQA Diamond: **93.6%** (vendor; leaderboard #7/263)
- HLE: **57.9%** with tools / **49.8%** without (vendor; AA no-tools 48.66%)
- USAMO 2026: **96.7%** (vendor)
- ARC-AGI-2: **72.1%** (benchlm.ai leaderboard)
- AA CritPt: **20.86%** (AA); Artificial Analysis Intelligence Index: **55.7** (aggregator reading)

Coding:

- SWE-bench Verified: **88.6%** (vendor; leaderboard rank 4/122)
- SWE-bench Pro: **69.2%**; SWE-bench Multilingual: **84.4%** (vendor)
- Terminal-Bench 2.1: **74.6%** (see above); Terminal-Bench 4.0: no verified public score found
- FrontierSWE: **75.0%** (llmboard); FrontierCode 1.1: **46.5%**
- LiveCodeBench: no verified public score found; LiveBench: **77.22%** (llmboard)

Long context:

- GraphWalks (parents, >128K): **87.6%**; GraphWalks BFS >128K: **68.1%** (llmboard, competitor-compiled)
- No vendor MRCR / RULER score found.

### Normalized scores (1–100)

- **Tool use: 87/100.** Verified computer-use (OSWorld 83.4), browsing (BrowseComp 84.3) and MCP-Atlas 82.2 with launch-leading GDPval-AA 1890; capped by Toolathlon 59.9 and Terminal-Bench 2.1 74.6 trailing the current field.
- **Reasoning: 89/100.** GPQA 93.6, HLE 57.9 (tools) and USAMO 96.7 stay elite; capped by ARC-AGI-2 72.1 and AA CritPt 20.9.
- **Context window: 93/100.** Verified 1M-token window with 300K batch output and solid GraphWalks parents 87.6; capped by the weaker BFS 68.1 long-horizon retrieval reading.
- **Multimodal: 72/100.** Text+image+PDF input with CharXiv-R 89.9 and ScreenSpot Pro 87.9; capped by text-only output, no audio/video input, and a weak SWE-bench Multimodal 38.4.
- **Coding: 90/100.** SWE-bench Verified 88.6, SWE-Pro 69.2 and Multilingual 84.4 remain near the front; capped by Terminal-Bench 2.1 74.6, FrontierCode 46.5, and no verified TB 4.0/LiveCodeBench rows.
- **Cost efficiency: 55/100.** $5/$25 list matches the newer Opus 5 and sits above Opus 5.5 ($4/$20) which also beats it on current agentic boards; batch 50% and $0.50 cache reads soften, but there is no price reason left to pick 4.8.
- **Overall Score: 86/100.** (87+89+93+72+90)/5 = 431/5 = 86.2 → 86. Best fit: existing 4.8-pinned enterprise workflows, SOC2/HIPAA-gated stacks and eval continuity through the 2027-05-28 retirement window; new work should default to Opus 5.5.

---

## Signature

- Provided by: **GLM 5.3 Flash (z-ai/glm-5.3-flash)** — 2026-11-02 (re-research pass; prior 2026-10-16)
- Method: public internet research (approved re-research pass); scores are normalized 1–100 interpretations, not official vendor scores.
- Reference URLs:
  - [Anthropic — Introducing Claude Opus 4.8](https://www.anthropic.com/news/claude-opus-4-8)
  - [Claude Platform — Opus 4.8 model overview (legacy status, pricing, cutoffs)](https://platform.claude.com/docs/en/models/opus-4-8/overview)
  - [Claude Platform — pricing table (all models)](https://platform.claude.com/docs/en/about-claude/pricing)
  - [llm-stats — Claude Opus 4.8 launch analysis](https://llm-stats.com/blog/research/claude-opus-4-8-launch)
  - [llmboard — Claude Opus 4.8 benchmark table](https://www.llmboard.ai/models/claude-opus-4-8)
  - [OpenCode data — Claude Opus 4.8 usage, cost & rank](https://opencode.ai/data/anthropic/claude-opus-4-8)
