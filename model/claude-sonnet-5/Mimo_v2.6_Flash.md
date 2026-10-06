# Claude Sonnet 5 — findings by Mimo v2.6 Flash

- Source: Anthropic/`claude-sonnet-5`
- Date: 2026-10-06 (UTC) — re-run of the 2026-09-22 research
- Overview and scoring methodology: `../../model-comparison.md`
- Cross-model signed log: `../../model-findings.md`

## Model card

- **Name:** Claude Sonnet 5
- **Short description:** Most agentic Sonnet yet (2026-06-30): closes most of the gap to Opus 4.8 on tool-heavy tasks (TB2.1 80.4%, OSWorld 81.2%, SWE-Pro 63.2%) at permanent **$2/$10** pricing (intro rate made permanent 2026-08-10; scheduled $3/$15 step-up cancelled). Default model on Free and Pro plans.
- **Provider / access:** Claude API `claude-sonnet-5`; claude.ai (all plans), Claude Code, Amazon Bedrock, Google Vertex AI, Microsoft Foundry. US-only inference at 1.1× available. Paid API + free consumer tier.
- **Release / knowledge:** 2026-06-30; knowledge cutoff not isolated (Claude 4.x/5 era).
- **IDs:** `claude-sonnet-5`.
- **Context window:** 1,048,576 tokens; 128K max output.
- **Modalities:** text + image in; text out; effort levels (medium default tier curves; xhigh available); tool calls yes; structured outputs; prompt caching; Batch API. **Updated tokenizer: same input maps to ~1.0–1.35× more tokens vs Sonnet 4.6** (intro price set roughly cost-neutral).
- **Pricing (as of 2026-10-06):** **$2.00 in / $10.00 out per 1M — permanent standard** (was intro through 2026-08-31; edit 2026-08-10 made it permanent, cancelled $3/$15). Cache read $0.20; batch $1/$5 (50% off). **Conflict flagged:** BenchmarkList's 2026-10-06 at-a-glance still lists "$3 in · $15 out" (launch list) — Anthropic's own pricing edit is the primary source; treat $2/$10 as current. Paid API.
- **Architecture:** proprietary hybrid-reasoning (Claude Sonnet 5 / post-4.6 generation).

### Raw benchmarks found

> Measured numbers with (source, rank, harness). Missing rows = no verified public score found.

Agent / tool use:

- Terminal-Bench 2.1: **80.4%** (Anthropic launch; vs Sonnet 4.6 67.0, Opus 4.8 82.7 per Anthropic chart / 74.6 launch table — harness notes vary; apidog cites Opus 82.7 on same 2.1 chart. GPT-5.5 Codex-CLI 83.4 leads in some harness comparisons)
- OSWorld-Verified: **81.2%** (Anthropic; vs 4.6 78.5, Opus 4.8 83.4)
- GDPval-AA: **~1607–1618 Elo** (Anthropic comparison tables via Google/ApIDog/o-mega; range cited — 1607 in Gemini 3.6 table, 1618 in o-mega)
- Toolathlon: **74.7% Pass@1 / 84.3% Pass@3 / 65.7% Pass^3** (BenchmarkList 2026-10-06, rank 13/41 — supersedes the o-mega 54.3% Pass@1 row; both harnesses noted) / **54.3% Pass@1** (o-mega; vs Opus 4.8 59.9)
- BrowseComp: **84.7%** (BenchmarkList, rank 22/60 — fills the former "absolute score not isolated" gap)
- Tau3-Banking: **37.3%** (BenchmarkList, rank 23/176 — fills the Tau3 gap)
- MCP Atlas / Finance Agent / Claw-Eval: no verified public score found (re-checked 2026-10-06)

Reasoning / knowledge:

- Humanity's Last Exam: **43.2% no tools / 57.4% with tools** (o-mega; BenchmarkList 2026-10-06 system-card row re-confirms both figures, rank 1 of 1 on its exact-config board; vs Opus 4.8 49.8/57.9)
- GPQA Diamond: **88.9% ±2.2** (Vals AI max-effort run via BenchmarkList, 2026-07-28, rank 25/117 — fills the former GPQA gap; field leader G-5.6 Sol 95.2%)
- Artificial Analysis Intelligence Index: **38** (AA v4.3 via o-mega — note this sits well below Opus 4.8's 56 and Fable 5.1's 53 on the same snapshot table; treat as version-specific and cite cautiously)
- MMLU-Pro: **87.5%** (Vals, rank 20/116); AIIQ Composite IQ: **124** (rank 33/147); AA-Omniscience net **0.23** (rank 8/11) (BenchmarkList 2026-10-06)
- FrontierMath / CritPt / ARC-AGI: no verified public score found

Coding:

- SWE-bench Pro: **63.2%** (Anthropic launch; vs 4.6 58.1, Opus 4.8 69.2 — field-leading mid-tier)
- SWE-bench Verified: **85.2%** (Anthropic system card body — only Verified figure Anthropic published; ignore blog-invented 82.1/92.4)
- Terminal-Bench 2.1: **80.4%** (see agent row)
- FrontierCode v1: **38.8%** (Cognition; vs 4.6 15.1 — >2×)
- ProgramBench: **76–86%** across episodes out to full 1M window (Anthropic)
- DeepSWE v1.1: **54.0%** (BenchmarkList, rank 37/52 — fills the former gap; mid-pack, well below the 74% frontier)
- LiveCodeBench: **82.4%** (BenchmarkList, rank 43/123 — fills the former gap)
- SciCode: **54.3%** (rank 31/296); Vibe Code Bench v1.1: **81.3%** (rank 9/75); SWE-bench Multilingual: **78.3%** (rank 12/49) (BenchmarkList 2026-10-06)
- Terminal-Bench 2.1 (Best Reported Harness): **74.6% ±1.6** (BenchmarkList, rank 17/27 — harness-variant note vs the 80.4% launch figure)

Long context:

- 1M window; ProgramBench scores hold 76–86% out to 1M (Anthropic) — no MRCR/GraphWalks row for Sonnet 5: retrieval %: no verified public score found (ProgramBench as partial proxy).

Multimodal:

- Text + image in (vision for charts/screens); no video/audio, no non-text out. MMMU / CharXiv: no verified public score found for Sonnet 5.

### Normalized scores (1–100)

- **Tool use: 91/100.** TB2.1 80.4%, OSWorld 81.2%, GDPval ~1610 (BenchmarkList 1618), Toolathlon 74.7/84.3 (rank 13 — upgraded from the 54.3 o-mega row), BrowseComp 84.7, Tau3-Banking 37.3 — filled-gap re-rate 2026-10-06; still capped below Opus-class GDPval 1890 and missing MCP/Claw rows.
- **Reasoning: 87/100.** HLE 43.2/57.4 confirmed, **GPQA 88.9% now measured** (Vals), MMLU-Pro 87.5; still capped by AA Index 38 (version-specific snapshot) and missing FrontierMath/CritPt/ARC-AGI rows — clearly below Opus 4.8/Fable single-pass reasoning.
- **Context window: 95/100.** 1M documented; ProgramBench 76–86% holding to full 1M is strong long-window evidence → 95 (no MRCR ≥98% @512K+ row for 100).
- **Multimodal: 65/100.** Text + image in only → 60–70 band → 65.
- **Coding: 92/100.** SWE-Pro 63.2%, SWE-V 85.2% (BenchmarkList rank 7/50), TB2.1 80.4%, LCB 82.4%, Vibe 81.3%, FrontierCode 38.8% (2× gen jump) — best coding set in Sonnet history; capped by Opus 4.8's SWE-Pro 69.2 lead and DeepSWE 54.0 (rank 37) trailing the 74% frontier.
- **Cost efficiency: 88/100.** Permanent $2/$10 (33% below Sonnet 4.6's $3/$15 and 60% of Opus 4.8), cache read $0.20 (90% off), batch 50% off, free on Free/Pro plans; tokenizer 1.0–1.35× token inflation partially offsets sticker (intro price set ~cost-neutral — still strong value).
- **Overall Score: 86/100.** Mean of five quality dims (91+87+95+65+92)/5 = 86.0 → 86. Best-fit: default production workhorse for agentic coding and tool-use fleets — most Opus 4.8 capability at 40% price; escalate hard single-pass reasoning to Opus 4.8/Fable.

---

## Signature

- Provided by: **Mimo v2.6 Flash (xiaomi/mimo-v2.6-flash)** — 2026-10-06
- Method: public internet research (Anthropic Sonnet 5 announcement + product page + pricing edits, ApIDog benchmarks explainer, o-mega cost breakdown, Anthropic comparison charts via Gemini 3.6 table); re-run 2026-10-06 (user-approved enrichment): BenchmarkList model page (107 benchmarks) — filled GPQA (88.9), Tau3 (37.3), BrowseComp (84.7), DeepSWE (54.0), LiveCodeBench (82.4), SciCode/Vibe/SWE-Multilingual gaps; Toolathlon re-measured 74.7/84.3; Tool 90→91, Reasoning 86→87, Overall re-derived 85.6→86.0 (display unchanged). Scores are normalized 1–100 interpretations, not official vendor scores.
- Future sources: add a new file next to this one, e.g. `GPT_5.md`, using the same headings.
