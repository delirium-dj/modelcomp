# Claude Opus 5.5 — findings by GLM 5. Anthropic (`claude-opus-5-5`)
- Date: 2026-09-17 (UTC)
- Overview and scoring methodology: `../../model-comparison.md`
- Cross-model signed log: `../../model-findings.md`

## Model card

- **Name:** Claude Opus 5.5
- **Short description:** Anthropic's new leading model (first of the Claude 5.5 family) for long-running agentic coding and knowledge work — Opus-5-level-plus capability at 40% lower typical cost; strongest Anthropic alignment-audit performer to date, released under the "pacing the frontier" policy with external pre-release evaluation (METR, Frontier Design).
- **Provider / access:** Anthropic Messages API (`https://api.anthropic.com/v1/messages` — `claude-opus-5-5`), Claude Code, claude.ai, Amazon Bedrock / Google Vertex (enterprise channels); also served via OpenCode Zen (`opencode/claude-opus-5-5`).
- **Release / knowledge:** Current GA model; knowledge cutoff Jun 2026 (Anthropic docs model table). Sonnet 5.5 / Haiku 5.5 announced as follow-ups.
- **IDs:** `anthropic/claude-opus-5-5`, `opencode/claude-opus-5-5`; no OpenCode Zen Free ID verified.
- **Context window:** 1,000,000 input tokens; 128,000 max output (Anthropic docs model table; 1M tier requires Tier-4 custom configuration — standard 200K/128K otherwise).
- **Modalities:** input text + image (vision); output text; adaptive thinking (always on, max effort levels); tool use, computer use, code execution supported.
- **Pricing (as of 2026-09-17):** $4/$20 per 1M in/out, $0.20 cache read, $5 cache write; Fast mode $8/$40; ≈40% cheaper per task than Opus 5 at default settings. Paid, not Free.
- **Architecture:** proprietary closed-weights Anthropic transformer; params/MoE unpublished.

### Raw benchmarks found

Agent / tool use:

- Terminal-Bench 4.0: **66.4%** (xhigh effort; vs GPT-6 Astra 57.9%, Fable 5.1 55.8%, Opus 5 52.3%, GPT-5.6 Sol 37.3%; ±2.6 pts SE)
- FrontierCode v1.1 (Main): **54.4%** (vs Astra 53.3%, Fable 5.1 50.3%, Opus 5 48.0%, Sol 47.5%)
- CursorBench 4.0: **57.8%** (vs Sol 41.7%; Fable 5.1 51.8%, Opus 5 46.6%)
- AutomationBench (Zapier business workflows): **40.0%** (vs Astra 41.4%; Fable 5.1 31.4%, Opus 5 26.9%; run without fallbacks so safeguard interventions count as failures)
- OSWorld 2.1 (computer use): **81.8%** partial (vs Fable 5.1 80.7%, Opus 5 74.0%)
- GDPval-AA v2.1 (knowledge work, 44 occupations): **1846 Elo** (vs Fable 5.1 1735, Opus 5 1708, Sol 1588, Astra 1542)
- Toolathon: no verified public score found

Reasoning / knowledge:

- Humanity's Last Exam (with tools): **67.7%** (vs Fable 5.1 65.6%, Opus 5 63.6%, Astra 57.2%)
- Terminal-Bench-Science 0.1: **58.7%** (vs Astra 64.6% — Astra leads; Fable 5.1 52.6%, Opus 5 29.0%; ±3.5–5 pts SE)
- GPQA Diamond: no verified public score found (not in launch table)
- AA Intelligence Index: no verified public score found (JS page, not extractable)
- Chartography (visual chart recognition, with tools): **89.0%** (vs Fable 5.1 88.4%, Opus 5 834% → 83.4%)
- Meta-agentic signals: 16/18 internal research reports passed automated fact-check (neither Fable 5.1 nor Opus 5 passed any); Walleye Capital suite largely solved at lowest effort and caught an error in the eval instructions no other model caught.

Coding:

- Terminal-Bench 4.0 66.4% (above) is the headline agentic-coding result; FrontierCode 54.4% and CursorBench 57.8% round out the sweep.
- SWE-bench Verified / DeepSWE / LiveCodeBench / SciCode: no verified public score found for the 5.5 checkpoint.
- Long-horizon evidence: 680,000-line code migration in under a day; 200,000-line audit in under 3h at ~2.5× fewer tokens than Opus 5 (20h); HAProxy C→Rust rewrite passed nearly all regression tests in 9.5h at 51% lower cost than Fable 5.1; Deloitte bug-catch 72% (low effort) vs Opus 5's 56% (high effort); web-app load-time optimization 39/40 successes.

Long context:

- 1M input / 128K output verified (Anthropic docs); no MRCR/RULER/GraphWalks values published for 5.5 — no long-context retrieval score found

Multimodal (input-side):

- Chartography 89.0% with tools (chart reasoning); no MMMU/LVBench/CharXiv values published for this checkpoint — no verified public score found beyond Chartography; output text-only.

### Normalized scores (1-100)

- **Tool use: 92/100.** Terminal-Bench 4.0 66.4% and OSWorld 2.1 81.8% lead the published set; GDPval-AA 1846 Elo tops all comparators; capped below elite only by AutomationBench 40.0% trailing Astra 41.4% (run without fallbacks) and missing Toolathon evidence.
- **Reasoning: 91/100.** HLE-with-tools 67.7% best-in-table; strong agentic-research signal (16/18 fact-checked reports); capped by Terminal-Bench-Science 58.7% trailing GPT-6 Astra 64.6% and absent GPQA/AA-index public values.
- **Context window: 92/100.** 1M input / 128K output verified; capped by unpublished long-context retrieval benchmarks and the Tier-4 requirement for the 1M tier.
- **Multimodal: 86/100.** Text+image input with elite chart reasoning (Chartography 89.0%); capped by text-only output and no published video/audio handling (native audio not advertised).
- **Coding: 93/100.** Terminal-Bench 4.0 66.4%, FrontierCode 54.4%, CursorBench 57.8% — full sweep of the launch table plus massive long-horizon case studies; capped only by lack of classic SWE-bench Verified/DeepSWE absolutes for 5.5.
- **Cost efficiency: 84/100.** $4/$20 with $0.20 cache reads and 40% per-task cost drop vs Opus 5 — strong value at frontier level (GPT-6 Astra beaten on FrontierCode at ~20% of its cost per task); still a premium price point.
- **Overall Score: 91/100.** Mean of five quality dims (92+91+92+86+93)/5 = 90.8 → 91. Best-fit: long-horizon agentic coding and knowledge work where frontier accuracy and token efficiency justify premium pricing.

---

## Signature

- Provided by: **GLM 5.2 Coding (zai-org/glm-5.2-coding)** — 2026-09-17
- Method: public internet research (Anthropic Opus 5.5 launch post + models overview docs, Sept 2026); scores are normalized 1-100 interpretations, not official vendor scores.
- Future sources: add a new file next to find one, e.g. `GPT_5.md`, using the same headings.