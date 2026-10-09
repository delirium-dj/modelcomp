# Claude Sonnet 4.5 — findings by GLM 5.3 Flash

- Source: Anthropic (`claude-sonnet-4-5-20250929`)
- Date: 2026-10-09 (UTC)
- Overview and scoring methodology: `../../model-comparison.md`
- Cross-model signed log: `../../model-findings.md`

## Model card

- **Name:** Claude Sonnet 4.5
- **Short description:** Anthropic's September 2025 flagship coding model — state-of-the-art SWE-bench Verified at launch, 30+ hours of continuous autonomous operation, and best-in-class computer use; the default model for all Claude.ai users. Positioned as "the best coding model in the world" at release.
- **Provider / access:** Anthropic API (`claude-sonnet-4-5-20250929`, Messages API); Claude.ai (default model, all tiers incl. free); Amazon Bedrock, Google Cloud Vertex AI (GA), Microsoft Azure Foundry (preview); integrated in Cursor, GitHub Copilot, Windsurf, Cline, OpenRouter. No Free ID on OpenCode Zen.
- **Release / knowledge:** Released 2025-09-29; knowledge cutoff 2025-01-31 (verified via Anthropic docs / theairankings).
- **IDs:** `claude-sonnet-4-5-20250929` (Anthropic API / Bedrock / Vertex). No Free ID on Zen.
- **Context window:** 200,000 tokens standard (64K max output); 1M-token beta at API Tier 4+ via the `context-1m-2025-08-07` header, with input pricing doubling beyond 200K.
- **Modalities:** text and image input; text output; reasoning yes (extended thinking with budget control); tool calls (TAU-bench agent capability, computer use); JSON mode.
- **Pricing (as of 2026-10-09):** $3.00 / $15.00 per 1M in/out standard; $6.00 / $22.50 above 200K context; cached input read $0.30 per 1M (90% savings, write $3.75); Batch API 50% off. Free tier exists in Claude.ai (~9 messages/5 hours, no extended thinking).
- **Architecture:** Proprietary — parameter count not disclosed.

### Raw benchmarks found

> Anthropic Opus 4.5 system-card rows + Anthropic launch announcement via benchlm.ai (updated 2026-10-09) + Epoch AI; earlier draft via theairankings.

Agent / tool use:

- TAU-bench Telecom: **98.0%** (Anthropic-reported; vs Opus 4.1's 71.5%); TAU-bench Retail: **86.2%**; TAU-bench Airline: **70.0%**
- Terminal-Bench 2.0: **50%** (system card via benchlm.ai — corroborates the earlier 50.0 reading)
- OSWorld-Verified: **61.4%** (system card — corroborates; best-in-class computer use at launch)
- VITA-Bench: **17.0%** (VitaBench leaderboard — new, weak); JobBench: **27.7%** (JobBench paper — new); Gert Labs: **48.51%** (new)
- Finance Agent: **55–69%** (theairankings table range)
- Autonomous operation: **30+ hours** continuous (vs 7 hours for Sonnet 4; Anthropic-reported)
- Code editing error rate: **0%** (Replit-reported, down from 9%)
- GDPval-AA, MCPAtlas, Claw-Eval: no verified public score found

Reasoning / knowledge:

- GPQA Diamond: **83.4%** (system card — corroborates; trails Gemini 3 Pro 91.9% and GPT-5.1 ~87%)
- AIME 2025: **87.0%** (100% with Python tools; Anthropic announcement via benchlm.ai — corroborated)
- ARC-AGI-2: **13.6%** (system card via benchlm.ai — fills the previously-missing ARC row; weak)
- FrontierMath v2: Tiers 1–3 **13.5%**, Tier 4 **4.2%** (Epoch AI via benchlm.ai — fills; weak)
- MMLU: **89.1%** (theairankings table); MMMU: **77.8%** (theairankings table)
- Artificial Analysis Intelligence Index: **61 (thinking mode, 4th overall at the time)** (Artificial Analysis testing; launch-era reading)
- HLE: no verified public score found
- LCR / MLCR, CritPt, Omniscience: no verified public score found

Coding:

- SWE-bench Verified: **77.2%** (system card — corroborates; state-of-the-art at launch; **82.0%** in the high-compute configuration; standardised-harness independent run: 69.8% vs GPT-5-Codex 69.4%)
- Terminal-Bench: **50.0%** (as above)
- SWE-bench Pro / LiveCodeBench / SciCode / Vibe Code Bench: no verified public score found

Long context:

- 1M-token beta (Tier 4+); no MRCR/RULER/GraphWalks retrieval value verified for this exact model

Multimodal / vision:

- Design Arena Website: **1196** (OpenRouter); MMMU 77.8%

### Normalized scores (1–100)

- **Tool use: 92/100.** TAU-bench Telecom 98.0% is near-perfect, Retail 86.2% and best-in-class OSWorld 61.4% clear the Tau3 ~50%+ frontier reference; the modest Terminal-Bench 50.0%, weak VITA-Bench 17.0%/JobBench 27.7% and missing GDPval/MCPAtlas numbers keep it under 95.
- **Reasoning: 78/100.** AIME 2025 87% and an AA Index of 61 (4th overall at the time) are strong, but GPQA Diamond 83.4% sits in the high-mid band, the newly-filled ARC-AGI-2 13.6% and FrontierMath v2 13.5%/4.2% rows are weak, and no HLE number was found — the documented reasoning gap vs Gemini 3 Pro/GPT-5.1 caps it.
- **Context window: 72/100.** 200K standard maps to the 200K=70 anchor; the 1M beta is access-gated (Tier 4+) and price-doubled, with no measured retrieval at 512K+.
- **Multimodal: 65/100.** Text + image input, text output, computer use; no audio/video input — per methodology the image-in band is 60–70.
- **Coding: 85/100.** SWE-bench Verified 77.2% (82.0% high compute) was state-of-the-art at launch with a 0% Replit code-editing error rate; missing LiveCodeBench/SWE-bench Pro numbers prevent 90+.
- **Cost efficiency: 60/100.** $3/$15 per 1M sits at the $3/$15 = ~60 methodology reference; the 90% cache discount and 50% batch API are offsets, but the headline rate carries a 2.4x input premium over GPT-5.1.
- **Overall Score: 78/100.** Mean of the five quality dims (92 + 78 + 72 + 65 + 85) / 5 = 78.4 → 78. Best-fit: the reliable daily driver for coding agents, computer use and high-volume production — with Opus for hard problems and cheaper rivals when cost dominates.

---

## Signature

- Provided by: **GLM 5.3 Flash (z-ai/glm-5.3-flash)** — 2026-10-09
- Method: public internet research (benchlm.ai tables updated 2026-10-09 citing the Anthropic Opus 4.5 system card and Anthropic announcement plus Epoch AI — official plus independent sources; earlier draft via theairankings/Anthropic launch coverage); scores are normalized 1–100 interpretations, not official vendor scores. Second-pass enrichment: fills missing ARC-AGI-2 13.6%, FrontierMath v2 13.5%/4.2%, VITA-Bench 17.0%, JobBench 27.7%; corroborates TB 50%, OSWorld 61.4%, SWE-V 77.2%, GPQA 83.4% — Reasoning 82→78, Overall 79→78.
- Future sources: add a new file next to this one, e.g. `Claude_Sonnet_5.md`, using the same headings.
