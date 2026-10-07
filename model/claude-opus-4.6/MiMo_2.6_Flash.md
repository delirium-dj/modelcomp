# Claude Opus 4.6 — findings by MiMo 2.6 Flash

- Source: Anthropic (`claude-opus-4-6`)
- Date: 2026-10-07 (UTC)
- Overview and scoring methodology: `../../model-comparison.md`
- Cross-model signed log: `../../model-findings.md`

## Model card

- **Name:** Claude Opus 4.6
- **Short description:** The February-2026 flagship that defined the Claude 4.6 generation (released 2026-02-05, superseded by Opus 4.7) — first Opus-class model with a **1M-token context window (beta)**, adaptive thinking at four effort levels, and at release #1 rows on Terminal-Bench 2.0, HLE, BrowseComp and GDPval-AA (+144 Elo over GPT-5.2, +190 over Opus 4.5). Introduced the compaction API and the agentic "manages a 50-person org across 6 repos" demo. Legacy now — Okou has dropped it from its lineup; Okou's guidance: stay only for behaviour stability of validated agents.
- **Provider / access:** Claude API (`claude-opus-4-6`), Claude Platform, Amazon Bedrock, Google Vertex, Microsoft Foundry, claude.ai (Pro/Team); US-only inference at 1.1× (`inference_geo`).
- **Release / knowledge:** released 2026-02-05; knowledge cutoff not surfaced in these sources → not scored.
- **IDs:** `anthropic/claude-opus-4-6` (gateway routes) / `claude-opus-4-6` (native; no date suffix).
- **Context window:** **200K standard / 1M beta** (usage tier 4+ or custom limits, Claude Platform only); max output 128,000; prefilling removed (400 error); Compaction API beta.
- **Modalities:** text + images in; text out; reasoning yes (adaptive thinking, four effort levels); tool calls yes.
- **Pricing (as of 2026-10-07):** **$5.00 in / $25.00 out** per 1M up to 200K context; **prompts >200K in the 1M beta bill every token at $10/$37.50**; Batch $2.50/$12.50 (50%); cache read $0.50 (AA); US-only +1.1×. Paid. (Okou's archived reseller card lists $15/$75 — a third-party markup, not Anthropic list.)
- **Architecture:** proprietary.

### Raw benchmarks found

Agent / tool use (Anthropic-run unless noted):

- Terminal-Bench 2.0: **65.4** (Anthropic, max effort — #1 at release vs GPT-5.2's 64.7 Codex-CLI; public Terminus-2 leaderboard entry 62.9 ±2.7). Terminal-Bench 2.1: **62.9 ±2.7** (leaderboard, Terminus-2, 2026-02-06) — well under the 88% frontier ref that later models hold.
- GDPval-AA: **1606** Elo (vs GPT-5.2 1462, Opus 4.5 1416) — the release's #1 claim, but **under the 1750+ ref**.
- BrowseComp: **84.0** (#1 at release; vs GPT-5.2 Pro 77.9). OSWorld: **72.7** (+6.4 over 4.5). Finance Agent: **60.7**. τ²-bench Retail: **91.9**. OpenRCA: 34.9.
- MCP-Atlas: known trade-off (multiple reviews note weaker large-scale tool orchestration vs gains elsewhere; no score surfaced). AutomationBench: no row for this model.

Reasoning / knowledge:

- GPQA Diamond: **91.3** — clears the 90%+ ref (GPT-5.2 Pro 93.2, Gemini 3 Pro 91.9 above).
- HLE with tools: **53.1** — clears the 40%+ ref (GPT-5.2 Pro 50.0). No-tools HLE not published by Anthropic; AA's **non-reasoning** config reads 19 (not comparable to reasoning-mode scores).
- AA Intelligence Index: **26** for the measured non-reasoning/high configuration (AA) — the reasoning-mode index value did not surface; on either reading it is under the 60+ ref (later-era scale).
- Anthropic's release framing: #1 on HLE among frontier models at 2026-02-05.

Coding (Anthropic-run unless noted):

- SWE-bench Verified: **80.8** (flat vs Opus 4.5's 80.9; GPT-5.2 80.0) — mid-saturation era; **below the 85%+ band** later frontier rows occupy, and OpenAI flagged cross-frontier SWE-V contamination in this period (Okou note).
- Terminal-Bench 2.0/2.1 as above (65.4 / 62.9). OpenRCA 34.9. No DeepSWE/SciCode/AA Coding Index row found.

Long context:

- **MRCR v2 (8-needle): 93% at 256K, 76% at 1M** (Anthropic) vs Sonnet 4.5's 10.8/18.5 — a "qualitative shift against context rot"; the strongest 1M retrieval evidence among early-2026 models, though 76 at 1M is still short of the ≥98% condition and the whole tier is premium-gated/beta.

### Normalized scores (1–100)

- **Tool use: 84/100.** BrowseComp 84.0 (#1), OSWorld 72.7, τ² 91.9 and FinanceAgent 60.7 are strong release-day rows; GDPval 1606 misses the 1750 ref, TB2.1 ~63 is far under the modern frontier bar, and MCP-Atlas is a noted weakness.
- **Reasoning: 86/100.** GPQA 91.3 (90+) and HLE-tools 53.1 (40+) both clear, and Anthropic led the field on HLE at release; no published no-tools HLE, a non-reasoning-only AA Index row (26), and no ARC/AlphaProof-class evidence cap it at 86.
- **Context window: 95/100.** 1M exists (beta) with MRCR 93/76 — real retrieval proof — but the window is gated to top tiers, billed at $10/$37.50 above 200K, and 76% at 1M misses the ≥98% condition → floor with an asterisk.
- **Multimodal: 65/100.** Text + image in, text out = image band (60–70); OSWorld/BrowseComp show strong visual grounding, no video/audio/PDF-native input or non-text output.
- **Coding: 82/100.** TB2.0 #1 at release (65.4) and SWE-V 80.8 led the February cohort, OpenRCA 34.9 solid; absolute rows are well below the later frontier refs (TB2.1 88, SWE-V 85+) and SWE-V was in its contamination-flagged era.
- **Cost efficiency: 50/100.** $5/$25 sits midway between the $3/$15 ≈ 60 and $10/$50 ≈ 30 anchors (≈48–50); batch halves, 90%-off cache reads, and flat pre-200K pricing hold it at 50 — the 200K+ premium doubling input to $10/$37.50 is the structural negative.
- **Overall Score: 82/100.** (84+86+95+65+82)/5 = 82.4 → 82 — the model that made 1M context and adaptive thinking standard for Claude, judged now as a legacy tier: four #1-at-release rows and excellent MRCR evidence, weighed against a 200K-gated window, GDPval below the frontier ref, and absolute benchmark rows the 4.7/4.8/5.x line has left behind.

---

## Signature

- Provided by: **MiMo 2.6 Flash (Xiaomi — opencode/mimo-v2.6-flash)** — 2026-10-07
- Method: fresh public internet research (Anthropic launch post + research page, Digital Applied, TechInformed, Vellum, Code Velocity, Okou, Artificial Analysis comparison pages); scores are normalized 1–100 interpretations, not official vendor scores.
- Future sources: add a new file next to this one, e.g. `MiMo_2.6_Flash.md`, using the same headings.
