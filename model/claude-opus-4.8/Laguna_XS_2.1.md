# Claude Opus 4.8 — findings by Laguna XS 2.1

- Source: Anthropic (`claude-opus-4-8`)
- Date: 2026-10-04 (UTC)
- Overview and scoring methodology: `../../model-comparison.md`
- Cross-model signed log: `../../model-findings.md`

## Model card

- **Name:** Claude Opus 4.8
- **Short description:** Anthropic's late-spring 2026 Opus (2026-05-28) — launch leader on OSWorld-Verified (83.4%) and GDPval-AA (1890 Elo), with a reported 4x improvement in code-flaw honesty over 4.7; legacy since Opus 5 (2026-07-24) at the same price.
- **Provider / access:** Claude API (`claude-opus-4-8`), Amazon Bedrock, Google Cloud, Microsoft Foundry, Claude Platform on AWS. Adaptive thinking, default effort `high`.
- **Release / knowledge:** 2026-05-28; knowledge cutoff January 2026.
- **IDs:** `claude-opus-4-8` (Claude API / GCP / Foundry); `anthropic.claude-opus-4-8` (Bedrock). No Zen Free ID found.
- **Context window:** 1M tokens; 128K max output (300K via Message Batches beta header).
- **Modalities:** text + image in; text out; reasoning yes (adaptive); tool calls yes; JSON mode yes.
- **Pricing (as of 2026-10-04):** $5 / $25 per 1M in/out; cache read $0.50, cache write $6.25 (5m) / $10 (1h); Batch 50%; Fast mode (Claude API only) $10 / $50 at ~2.5x speed.
- **Architecture:** proprietary; no parameter count published.

### Raw benchmarks found

Agent / tool use:

- OSWorld-Verified: **83.4%** (Anthropic launch — highest at launch; harness restated, 4.7 restated to 82.3)
- GDPval-AA: **1890 Elo** (Anthropic launch; 121 ahead of GPT-5.5); GDPval-AA v2 **1600.1** (OpenAI GPT-5.6 table)
- Terminal-Bench 2.1: **74.6%** (Anthropic, Terminus-2; GPT-5.5 led at 78.2) / **78.9%** (OpenAI GPT-5.6 launch table)
- OSWorld 2.0: **54.8%**; BrowseComp: **84.3%**; Agents' Last Exam: **45.2%**; Toolathlon: **59.9%**; AutomationBench: **15.5%** (OpenAI GPT-5.6 launch table)
- Tau2-bench: Retail **91.9%** / Telecom **99.3%** (Google 3.1 Pro card — measured on Opus 4.6 max; 4.8 row not published)
- Claw-Eval / MCP-Atlas absolute for 4.8: no verified public score found

Reasoning / knowledge:

- HLE (no tools): **49.8%** (Anthropic launch)
- GPQA Diamond: **93.6%** (Anthropic launch; 4.7 scored 94.2 — the one regression row)
- FrontierMath: Tier 1–3 **80%** / Tier 4 **56.1%** (OpenAI GPT-5.6 table)
- AA Intelligence Index v4.1: **55.7** (Artificial Analysis via kingy.ai)
- GeneBench Pro: **16%**; HealthBench Professional: **53%** (OpenAI GPT-5.6 table)
- Code-flaw honesty: ~**4x less likely** than Opus 4.7 to let a code flaw pass unflagged (Anthropic)

Coding:

- SWE-bench Verified: **88.6%** (Anthropic launch)
- SWE-bench Pro: **69.2%** (Anthropic launch; vs 4.7's 64.3)
- DeepSWE v1.1: **59%** (OpenAI GPT-5.6 table)
- TB 2.1 74.6–78.9% (see above)
- LiveCodeBench / SciCode: no verified public score found in sources checked

Long context:

- 1M window (Anthropic docs); MRCR / RULER / GraphWalks for 4.8: no verified public score found

### Normalized scores (1–100)

- **Tool use: 88/100.** OSWorld-Verified 83.4% (launch best) and GDPval-AA 1890 Elo (well ahead of GPT-5.5) anchor a frontier tool-use profile; capped by TB 2.1 trailing GPT-5.5/5.6 Sol and AutomationBench 15.5%.
- **Reasoning: 88/100.** HLE 49.8% no-tools, GPQA 93.6% and FrontierMath T4 56.1% are strong; capped by AA Index 55.7 and the small GPQA regression vs 4.7.
- **Context window: 95/100.** 1M window (95–100 tier); no public retrieval-at-length number for 4.8 found, so the floor.
- **Multimodal: 65/100.** Text + image in, text out (image-in band); no video/audio/PDF-in evidence found.
- **Coding: 88/100.** SWE-bench Verified 88.6% and Pro 69.2% were near-SOTA in May; capped by DeepSWE 59% below the 74% frontier ref and TB 2.1 behind GPT-5.5/5.6 Sol.
- **Cost efficiency: 55/100.** $5/$25 sits between the methodology's $3/$15 (~60) and $10/$50 (~30); $0.50 cache reads, 50% Batch and a 3x-cheaper fast mode help, but Opus 5.5 now beats it at $4/$20.
- **Overall Score: 85.2/100.** Mean of (88, 88, 95, 65, 88) = 85.2 — a proven, honest coding agent for pinned integrations; new deployments should start at Opus 5.5.

---

## Signature

- Provided by: **Laguna XS 2.1 (poolside/laguna-xs-2-1)** — 2026-10-04
- Method: public internet research (Anthropic launch post + platform docs + pricing + system card, benchr review, OpenAI GPT-5.6 launch table); scores are normalized 1–100 interpretations, not official vendor scores.
- Future sources: add a new file next to this one, e.g. `GPT_5.md`, using the same headings.
