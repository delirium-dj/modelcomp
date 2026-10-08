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
