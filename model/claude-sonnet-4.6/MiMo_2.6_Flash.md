# Claude Sonnet 4.6 — findings by MiMo 2.6 Flash

- Source: Anthropic (`claude-sonnet-4-6`)
- Date: 2026-10-07 (UTC)
- Overview and scoring methodology: `../../model-comparison.md`
- Cross-model signed log: `../../model-findings.md`

## Model card

- **Name:** Claude Sonnet 4.6
- **Short description:** Anthropic's most capable Sonnet at release (2026-02-17), the default model on claude.ai Free/Pro and Claude Cowork. Anthropic's pitch: "approaches Opus-level intelligence" — near-parity with Opus 4.6 on computer use (OSWorld-Verified 72.5 vs 72.7) and coding (SWE-bench Verified 79.6 vs 80.8), with best-in-table office work (GDPval-AA Office 1633 Elo, above Opus 4.6's 1559), while the hard-reasoning gap stays wide (ARC-AGI-2 58.3 vs ~69–75, HLE 19.1 vs 26.3). First Sonnet preferred over an Opus-tier predecessor (59% vs Opus 4.5). Superseded by Claude Sonnet 5 ($2/$10).
- **Provider / access:** Claude API (`claude-sonnet-4-6`), claude.ai (Free/Pro default), Claude Code/Cowork, Amazon Bedrock (`anthropic.claude-sonnet-4-6`), Google Vertex AI, Microsoft Foundry; all major clouds.
- **Release / knowledge:** released 2026-02-17; knowledge cutoff not stated in sources reviewed (Anthropic system card governs).
- **IDs:** `claude-sonnet-4-6` / `anthropic.claude-sonnet-4-6` (Bedrock).
- **Context window:** **1,000,000 tokens** (beta at launch, API; GA per later trackers), with **context compaction** (beta) auto-summarizing older context; **>200K input = premium pricing on the whole request** ($6 in / $22.50 out per 1M); standard ≤200K at base rates. Max output 64K standard (128K with the long-context beta flag in Anthropic's docs of the era).
- **Modalities:** text + images in (vision, image analysis), text out; reasoning yes (adaptive + extended thinking, `effort` parameter, default high; thinking tokens bill as output); tool calls yes (function calling, structured outputs, connectors, skills).
- **Pricing (as of 2026-10-07):** **$3.00 in / $15.00 out** per 1M (unchanged from Sonnet 4.5) — **exactly the methodology's $3/$15 anchor**; prompt caching up to 90% off (read $0.30, 5-min write $3.75), Batch 50% off ($1.50/$7.50); >200K premium tier doubles+ as above.

### Raw benchmarks found

Agent / tool use:

- OSWorld-Verified: **72.5** (vendor system card; +11.1 over 4.5) — **just under the 75% ref** (Opus 4.6 72.7)
- MCP-Atlas (Scaled Tool Use): **61.3** (vendor) — **under the 75% ref** (Opus 4.6 60.3 — the whole family sits low here)
- τ²-bench Retail: **91.7**, τ²-bench Telecom: **97.9** (vendor) — top-band
- GDPval-AA (Office): **1633 Elo** (vendor table; beats Opus 4.6 1559, GPT-5.2 1524) — best-in-table
- Terminal-Bench 2.0: **59.1** (vendor, thinking off, Terminus-2); Finance Agent 63.3; Vending-Bench Arena: ~$5,700 simulated profit (3rd in its head-to-head table)
- Terminal-Bench 2.1 / 4.0 / ALE: no rows found

Reasoning / knowledge (vendor system card):

- GPQA Diamond: **74.1** — **far under the 90%+ ref** (Opus 4.6 74.5, GPT-5.2 73.8 — flat with the field of its era, not frontier)
- Humanity's Last Exam: **19.1** — **under the 40%+ ref** (Opus 4.6 26.3)
- ARC-AGI-2 (Verified): **58.3** (+44.7 over 4.5's 13.6; Opus 4.6 68.8 per system card / 75.2 per another vendor table — readings differ)
- MATH-500: 97.8; MMLU-Pro: 79.1; no AA Intelligence Index row for this era

Coding (vendor):

- SWE-bench Verified: **79.6** (10-trial avg; 80.2 with prompt modification) — within 1.2 pts of Opus 4.6 (80.8); strong mid-frontier
- Terminal-Bench 2.0: 59.1; SWE-bench Pro / DeepSWE / SciCode / TB2.1 / coding-index rows: **none found**
- Anthropic's qualitative claims: fewer false-success claims, better context reading, shared-logic consolidation

Long context:

- 1M window (Vending-Bench cited as evidence of reasoning across it) + compaction; **no needle/MRCR/LCR figure** → capacity only.

Multimodal:

- Vision/image analysis in; MMMB 76.1 (vendor); Claude in Excel; no video/audio/PDF rows.

### Normalized scores (1–100)

- **Tool use: 84/100.** Best-in-table GDPval Office Elo (1633), elite τ² scores (91.7/97.9), OSWorld 72.5 within 0.2 of Opus; held under by the two refs it misses — OSWorld <75 and MCP-Atlas 61.3 (<75) — plus TB2.0 59.1 and no ALE/TB2.1 rows.
- **Reasoning: 73/100.** Both headline refs miss by wide margins (GPQA 74.1 vs 90, HLE 19.1 vs 40); ARC-AGI-2's +44.7 jump and MATH-500 97.8 show real improvement, but this is the acknowledged Sonnet-vs-Opus gap.
- **Context window: 95/100.** 1M → ≥1M floor (beta at launch), with compaction extending effective reach; no retrieval benchmark at any length, and the >200K whole-request premium affects cost, not capacity.
- **Multimodal: 66/100.** Text + image in, text out → image band (60–70); MMMB 76.1 and Excel integration are the only concrete rows; no video/audio/PDF.
- **Coding: 80/100.** SWE-bench Verified 79.6 (80.2 optimized) is genuinely near-Opus and TB2.0 59.1 is solid for its date, but every ref row is absent — no TB2.1, DeepSWE, SciCode, or coding-index figure exists to verify against, and TB2.0 59.1 is far off the TB2.1-band leaders.
- **Cost efficiency: 63/100.** Exactly at the $3/$15 anchor, softened by best-in-class 90% cache reads and 50% batch; penalized by the >200K input premium that doubles the entire request and by thinking tokens billing as output at full rate.
- **Overall Score: 80/100.** (84+73+95+66+80)/5 = 79.6 → 80 — the default workhorse of early 2026: near-Opus computer use and coding, best-in-table office agents, all at anchor pricing, discounted for a reasoning profile (GPQA 74, HLE 19) that earned its Sonnet badge and a ref set it mostly can't be checked against.

---

## Signature

- Provided by: **MiMo 2.6 Flash (Xiaomi — opencode/mimo-v2.6-flash)** — 2026-10-07
- Method: fresh public internet research (Anthropic launch post + product pages, Digital Applied benchmark tables, Caylent production analysis, ZBuild guide, swebench.com); scores are normalized 1–100 interpretations, not official vendor scores.
- Future sources: add a new file next to this one, e.g. `GPT_5.md`, using the same headings.

---

## Merged duplicate - Mimo_v2.6_Flash.md (same rater, spelling variant, merged 2026-10-09)

> This section preserves the full content of the deleted duplicate Mimo_v2.6_Flash.md (same Xiaomi MiMo 2.6 Flash rater; variant spelling _v2.6 vs _2.6 plus case). No benchmarks lost; canonical scores above remain the single parsed source (parser reads first score block).

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

