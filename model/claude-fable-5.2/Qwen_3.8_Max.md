- Source: Anthropic (`claude-fable-5.2`)
- Date: 2026-11-10 (UTC)
- Overview and scoring methodology: `../../model-comparison.md`
- Cross-model signed log: `../../model-findings.md`

## Model card

- **Name:** Claude Fable 5.2
- **Short description:** Anthropic's top-of-lineup model for demanding reasoning and long-horizon agentic work — released 2026-11-09, positioned above Claude Opus 5.5 for multi-hour agent sessions, deep research, and advanced codebase engineering. Shares its weights with the verification-gated Claude Mythos 5.2 (a separate roster entry) which lifts the cyber/biology safeguards.
- **Provider / access:** Anthropic Claude API `claude-fable-5-2` (Messages API); also Amazon Bedrock `anthropic.claude-fable-5-2`, Google Cloud (Google- and Anthropic-managed), Microsoft Foundry, Claude Platform on AWS. Adaptive thinking always on; forced tool use (`tool_choice` any/tool) returns a 400; omit temperature/top_p/top_k. Server tools (web search, code execution) + MCP supported.
- **Release / knowledge:** Released 2026-11-09; reliable-knowledge and training-data cutoff Jun 2026; retirement not sooner than 2027-11-09.
- **IDs:** `anthropic/claude-fable-5.2` (dataset id); API `claude-fable-5-2`. No free tier (`noFreeId`) — the launch promo only grants extra Fable usage to eligible paid subscribers.
- **Context window:** 1M tokens input / 128K max output (synchronous Messages API), verified via the official Claude Platform docs model page (~555k words on the current tokenizer).
- **Modalities:** Text + image in → text out; vision yes; reasoning yes (adaptive thinking, always on; default effort `high`, scalable to Xhigh/Max); tool calls yes; multilingual.
- **Pricing (as of 2026-11-10):** $8 / 1M input, $40 / 1M output; cache read $0.20/MTok (2.5% of base input), 5m cache write $10, 1h cache write $16; Batch API 50% off; optional fast mode (up to 2.5× generation) $16/$80. Requires 30-day data retention (ZDR only via the Enterprise Frontier Safeguards private beta). **DISCREPANCY:** `meta.json` claims $10/$50 and cache read $0.25 — official docs say $8/$40 and $0.20; the official figures are used here.
- **Architecture:** Proprietary (closed-weight); Anthropic does not disclose parameter counts. Same underlying model as Claude Mythos 5.2.

### Raw benchmarks found

> Official Anthropic announcement (2026-11-09) benchmark table; each model's highest-available effort, safeguards on, unless noted.

Agent / tool use:

- OSWorld 2.1 (computer use, offline set, partial): **89.3%** (Opus 5.5 87.2%, GPT-6 Astra 79.5%, Gemini 4 Carbon 81.5%)
- WANDR (agentic search, relaxed score): **82.1%** (Fable 5.1 68.7%, Opus 5.5 72.3%)
- Terminal-Bench-Science 0.1 (agentic scientific research): **74.6%** (Mythos 5.2 75.3%; GPT-6 Astra 68.1%, Opus 5.5 58.7%)
- AutomationBench (business workflows): **51.4%** (Gemini 4 Carbon 53.9% higher; Opus 5.5 42.5%)
- Remote Labor Index (RLI, High effort): **41.3%** (Opus 5.5 21.3%, GPT-6 Astra 20.8%)
- AA-Briefcase v1.1 (knowledge work): **66.1% rubric**; the adjacent Elo row reads **1785** (Opus 5.5 1800, GPT-6 Astra 1569, Gemini 4 Carbon 1611) — the rendered table leaves that row's benchmark label ambiguous (AA-Briefcase Elo vs GDPval-AA), so it is cited as-is and not relied on for scoring
- RoboDojo Sim (robotics, Max effort): **64.9%** (Opus 5.5 39.4%, GPT-6 Astra 29.8%, Gemini 4 Argon 34.2%)

Reasoning / knowledge:

- Humanity's Last Exam (with tools): **74.2%** (Opus 5.5 67.7%, Fable 5.1 65.6%, GPT-6 Astra 57.2%)
- Chartography (visual chart recognition, no tools): **73.4%** at highest effort (66.4% at Medium; Gemini 4 Carbon 72.5%, GPT-6 Astra 71.0%)
- GPQA Diamond / Artificial Analysis Intelligence Index / Omniscience: no verified public score found in the primary sources reviewed (announcement + docs); the system card was not parsed for a numeric GPQA
- Qualitative: a 1,000-agent team fully formalized Fermat's Last Theorem in Lean in 30 h (Opus 5.5 reached 26% in 18 h); solved two open black-hole physics problems; automated behavioral-audit misalignment score 2.67 (lower better; Mythos 5.1 3.28, Opus 5.5 2.79)

Coding:

- FrontierCode 2.0 (agentic coding): **49.1%** at Xhigh — highest of any released model Anthropic has tested (Opus 5.5 45.5%, GPT-6 Astra 42.8%, Gemini 4 Carbon 41.1%); at High effort 45.3% ≈ Opus 5.5's best for ~half the cost/task
- FrontierSWE v2: **69.9%** (GPT-6 Astra 65.5%, Opus 5.5 62.3%, Gemini 4 Carbon 61.2%)
- BenchCAD 2.1 (hardware engineering, with tools, 0–100): **83.5** at Max (Opus 5.5 65.3, Fable 5.1 44.4)
- SWE-bench Verified / LiveCodeBench / SciCode: no Fable-5.2-specific verified public score found in the sources reviewed (one leaderboard lists Claude Fable 5 — not 5.2 — at SWE-bench Pro 80.0%); qualitative: >90% of merges into Anthropic's core codebase are Claude-written, an 8-day 1,000-subagent run produced a booting OS, and a Python→Rust service migration yielded ~26× faster startup

Long context:

- 1M-token window / 128K max output (official docs); no MRCR / RULER / GraphWalks retrieval figure published in the primary sources reviewed

### Normalized scores (1–100)

> Derived from the raw numbers above via `model-comparison.md`. Overall = half-up mean of the five quality dims; Cost efficiency is scored independently and never counted.

- **Tool use: 94/100.** Frontier agentic/tool profile — OSWorld 2.1 89.3%, WANDR 82.1%, Terminal-Bench-Science 74.6%, RLI 41.3%, RoboDojo 64.9% all at or above the leading cohort; capped just under the ceiling because the knowledge-work Elo (~1785) sits slightly below Opus 5.5 (1800), AutomationBench (51.4%) trails Gemini 4 Carbon (53.9%), and forced tool use is API-blocked.
- **Reasoning: 94/100.** HLE (with tools) 74.2% and Chartography 73.4% are top-of-cohort, reinforced by the 30-hour 1,000-agent Fermat's Last Theorem formalization and two solved open physics problems; held under the ceiling only by the absence of a verified public GPQA Diamond / Intelligence Index number.
- **Context window: 97/100.** 1M-token window (top tier, ≥1M) with a large 128K max output; a few points off the ceiling because it is not the absolute maximum advertised (some rivals cite 2M) and no long-context retrieval (MRCR/RULER) score is published.
- **Multimodal: 68/100.** Text + image input → text output; strong vision (Chartography 73.4%, noted vision gains) places it at the top of the image-input band, but no native video/audio/PDF ingestion and text-only output cap it below the 75–90 multi-format tier.
- **Coding: 94/100.** FrontierCode 2.0 49.1% (highest released model tested), FrontierSWE v2 69.9% (leads GPT-6 Astra and Opus 5.5), BenchCAD 2.1 83.5, plus the booting-OS and Rust-migration feats; capped by the lack of a Fable-5.2-specific SWE-bench Verified / SciCode number (FrontierSWE v2 69.9% sits just under the 74% frontier marker).
- **Cost efficiency: 74/100.** Premium frontier pricing at $8/$40 per MTok (fast mode $16/$80) is among the most expensive in the dataset; partly offset by strong per-task efficiency (High effort ≈ Opus 5.5 Max for ~half the cost/task, HLE at Low effort for <1/10), the 50% batch discount, $0.20 cache reads, and 30% faster output than Fable 5.1 — but the raw token price keeps it well below mid-tier value.
- **Overall Score: 89.4/100.** Mean of the five quality dims (94+94+97+68+94)/5 = 89.4. Best fit: the top choice for long-horizon autonomous agents, deep multi-step research, and high-complexity codebase engineering where per-task capability outweighs premium token cost; start on Opus 5.5 for routine coding and escalate to Fable 5.2 when evals fall short.

---

## Signature

- Provided by: **Qwen 3.8 Max (qwen/qwen-3.8-max)** — 2026-11-10
- Method: public internet research (official Anthropic announcement + Claude Platform docs model page and overview); scores are normalized 1–100 interpretations, not official vendor scores. Researched independently of the peer findings in this folder.
- Reference URLs:
  - [Introducing Claude Fable 5.2 and Claude Mythos 5.2 (Anthropic announcement + benchmark table)](https://www.anthropic.com/claude-fable-and-mythos-5-2)
  - [Claude Fable 5.2 model page (Claude Platform docs — pricing, context, capabilities)](https://platform.claude.com/docs/en/models/fable-5-2/overview)
  - [Models overview — compare the current Claude lineup](https://platform.claude.com/docs/en/models/overview)
  - [Claude Fable 5.2 & Claude Mythos 5.2 System Card](https://www.anthropic.com/document/claude-fable-5-2-mythos-5-2-system-card)
