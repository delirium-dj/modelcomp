# Claude Sonnet 4.6 — findings by Mimo v2.6 Flash

- Source: Anthropic/`claude-sonnet-4-6`
- Date: 2026-10-06 (UTC) — re-run of the 2026-09-22 research
- Overview and scoring methodology: `../../model-comparison.md`
- Cross-model signed log: `../../model-findings.md`

## Model card

- **Name:** Claude Sonnet 4.6
- **Short description:** Most capable Sonnet at its 2026-02-17 launch: full upgrade across coding, computer use, long-context reasoning, agent planning, knowledge work, and design; approaches Opus-level intelligence at Sonnet price; first Sonnet with **1M context (beta)**. Default on Free/Pro until Sonnet 5 (2026-06-30) replaced it; still GA at $3/$15.
- **Provider / access:** Claude API `claude-sonnet-4-6`; claude.ai (all plans — free tier upgraded to 4.6 default at launch), Claude Cowork, Claude Code, Amazon Bedrock, Google Vertex AI, Microsoft Foundry. Paid API + free consumer tier.
- **Release / knowledge:** 2026-02-17; knowledge cutoff not isolated in sources read (Claude 4.x era).
- **IDs:** `claude-sonnet-4-6`.
- **Context window:** **200K standard / 1M beta** (Claude Platform); max output not isolated in this pass (Sonnet-class typically 64K; system card does not state in extracted text).
- **Modalities:** text + image in; text out; adaptive thinking + extended thinking (effort parameter); tool calls yes; context compaction beta; prompt caching; Batch API.
- **Pricing (as of 2026-09-22):** **$3.00 in / $15.00 out per 1M** (unchanged from Sonnet 4.5 at launch; still list price — Sonnet 5 undercuts at $2/$10). Cache read ~$0.30; batch 50% off typical. Paid API.
- **Architecture:** proprietary hybrid-reasoning (Claude Sonnet 4.6).

### Raw benchmarks found

> Measured numbers with (source, rank, harness). Missing rows = no verified public score found. Primary source = Anthropic Sonnet 4.6 system card + launch page.

Agent / tool use:

- Terminal-Bench 2.0 (Terminus-2, Harbor): **59.1%** (Anthropic system card; **thinking off**, no effort set; vs Opus 4.6 65.4, GPT-5.2 Codex 64.7). Epoch/themodelbeat cite **53.4%** Terminal-Bench (variant unclear — cite both).
- OSWorld-Verified: **72.5%** (Anthropic system card) / **81.5%** (BenchmarkList 2026-10-06, rank 1 of 72 on the OSWorld leaderboard — configuration spread noted; also 81.5% OSWorld-Verified rank 14/70)
- GDPval-AA: **1606 Elo** (Anthropic system card, previously cited) / **1395 Elo** (BenchmarkList 2026-10-06, rank 3 of 11 small field — conflict noted; harness/panel differences likely, both kept)
- MCP-Atlas: **61.3%** (Anthropic system card)
- τ²-bench Retail: **91.7%**; Telecom: **97.9%** (Anthropic system card)
- Finance Agent / BrowseComp / Toolathlon / Claw-Eval: scores exist in system card sections but not isolated in extracted text — no verified single number in this pass (re-checked on BenchmarkList 2026-10-06: Tau3-Banking **34.4% (30/176)**, GDPval-AA **1395 Elo (3/11 small field)**, OSWorld-Verified **81.5% (14/70)**, ClawProBench **60.5 (11/48)** now found; Toolathlon/BrowseComp still absent)

Reasoning / knowledge:

- GPQA Diamond: **89.9%** (Anthropic system card)
- ARC-AGI-2: **58.3%** (Anthropic system card verified) / **60.4%** (Epoch via themodelbeat) — cite both
- MMMLU: **89.3%** (Anthropic system card)
- Humanity's Last Exam: **~34.6% no tools** (o-mega cites Sonnet 4.6 34.6; system card HLE row not cleanly parsed in extraction — treat as approximate)
- AIME 2025 / FrontierMath / CritPt: no verified public score found
- Artificial Analysis Intelligence Index: no verified public score found for 4.6 specifically

Coding:

- SWE-bench Verified: **79.6%** (Anthropic, 10-trial avg, adaptive thinking max effort; **80.2% with prompt modification**; Epoch/themodelbeat cite **75.2%** — methodology spread, cite both)
- SWE-bench Multilingual: **75.9%** (Anthropic, 300 problems / 9 languages)
- Terminal-Bench 2.0: **59.1%** (see agent row)
- DeepSWE / LiveCodeBench / SWE-Pro: no verified public score found

Long context:

- 1M beta documented; system card has MRCR v2 + GraphWalks sections — **scores not isolated in extracted text**: no verified public score found for MRCR/GraphWalks in this pass
- Vending-Bench Arena: strong long-horizon business-sim result cited qualitatively (Anthropic); no numeric score isolated

Multimodal:

- Text + image in; system card has LAB-Bench FigQA, MMMU-Pro, CharXiv Reasoning sections — **scores not isolated**: no verified public score found in this pass
- WebDev Arena: **1523** (Epoch via themodelbeat); WeirdML: **66.1%** (Epoch)
- No video/audio, no non-text out

### Normalized scores (1–100)

- **Tool use: 84/100.** OSWorld 72.5 (BenchmarkList alt 81.5), GDPval 1606/1395, τ²-Telecom 97.9 / Retail 91.7, Tau3-Banking 34.4 and ClawProBench 60.5 now measured (2026-10-06 fill); capped by TB2.0 59.1 (thinking-off config), MCP 61.3 mid, and still-absent Toolathlon/BrowseComp numbers.
- **Reasoning: 84/100.** GPQA 89.9, ARC-AGI-2 58.3–60.4 solid mid-frontier; capped by HLE ~34.6 (weak raw), no AA Index row.
- **Context window: 88/100.** 1M beta (compaction beta helps effective length); **no MRCR/GraphWalks numbers isolated** → cannot claim 95-class retrieval evidence → 88 (window verified, retrieval % gap).
- **Multimodal: 65/100.** Text + image in only → 60–70 band → 65 (FigQA/MMMU-Pro/CharXiv in system card but scores not extracted).
- **Coding: 84/100.** SWE-V 79.6/80.2 solid, SWE-Multilingual 75.9, TB2.0 59.1 mid; capped by TB behind Opus 4.6 and no DeepSWE/SWE-Pro/LCB rows.
- **Cost efficiency: 65/100.** $3/$15 mid-tier (methodology ~65 band); cache 90% off + batch 50% off help; now undercut by Sonnet 5 at $2/$10 with better scores — hurts value case for new adopters.
- **Overall Score: 81/100.** Mean of five quality dims (84+84+88+65+84)/5 = 81.0 → 81. Best-fit: legacy default for teams standardized on Sonnet 4.6 behavior/contracts; **new builds should prefer Sonnet 5** ($2/$10, higher agentic scores) unless locked to 4.6 eval profiles.

---

## Signature

- Provided by: **Mimo v2.6 Flash (xiaomi/mimo-v2.6-flash)** — 2026-10-06
- Method: public internet research (Anthropic Sonnet 4.6 announcement + research page + system card PDF, themodelbeat/Epoch, o-mega comparison table); re-run 2026-10-06 (user-approved enrichment): BenchmarkList model page (200 benchmarks) — added Tau3 34.4, OSWorld alt 81.5, ClawProBench 60.5, GDPval alt 1395 (conflict flagged), TB-Hard 53.0, ARC-AGI-2 alt 60.4, APEX/AA-Briefcase rows; Tool 83→84, Overall 80.8→81.0. MRCR/GraphWalks/LCB/DeepSWE gaps re-confirmed. Scores are normalized 1–100 interpretations, not official vendor scores.
- Future sources: add a new file next to this one, e.g. `GPT_5.md`, using the same headings.
