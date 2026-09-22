# Claude Sonnet 5 — findings by Mimo v2.6 Flash

- Source: Anthropic/`claude-sonnet-5`
- Date: 2026-09-22 (UTC)
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
- **Pricing (as of 2026-09-22):** **$2.00 in / $10.00 out per 1M — permanent standard** (was intro through 2026-08-31; edit 2026-08-10 made it permanent, cancelled $3/$15). Cache read $0.20; batch $1/$5 (50% off). Paid API.
- **Architecture:** proprietary hybrid-reasoning (Claude Sonnet 5 / post-4.6 generation).

### Raw benchmarks found

> Measured numbers with (source, rank, harness). Missing rows = no verified public score found.

Agent / tool use:

- Terminal-Bench 2.1: **80.4%** (Anthropic launch; vs Sonnet 4.6 67.0, Opus 4.8 82.7 per Anthropic chart / 74.6 launch table — harness notes vary; apidog cites Opus 82.7 on same 2.1 chart. GPT-5.5 Codex-CLI 83.4 leads in some harness comparisons)
- OSWorld-Verified: **81.2%** (Anthropic; vs 4.6 78.5, Opus 4.8 83.4)
- GDPval-AA: **~1607–1618 Elo** (Anthropic comparison tables via Google/ApIDog/o-mega; range cited — 1607 in Gemini 3.6 table, 1618 in o-mega)
- Toolathlon: **54.3% Pass@1** (o-mega; vs Opus 4.8 59.9)
- BrowseComp: cost-performance curve published (Anthropic; absolute score not isolated in sources read — no verified single number)
- MCP Atlas / Finance Agent / Tau3 / Claw-Eval: no verified public score found

Reasoning / knowledge:

- Humanity's Last Exam: **43.2% no tools / 57.4% with tools** (o-mega; vs Opus 4.8 49.8/57.9)
- GPQA Diamond: no verified public score found for Sonnet 5 specifically (Sonnet 4.6 74.1; not re-published)
- Artificial Analysis Intelligence Index: **38** (AA v4.3 via o-mega — note this sits well below Opus 4.8's 56 and Fable 5.1's 53 on the same snapshot table; treat as version-specific and cite cautiously)
- FrontierMath / CritPt / ARC-AGI: no verified public score found

Coding:

- SWE-bench Pro: **63.2%** (Anthropic launch; vs 4.6 58.1, Opus 4.8 69.2 — field-leading mid-tier)
- SWE-bench Verified: **85.2%** (Anthropic system card body — only Verified figure Anthropic published; ignore blog-invented 82.1/92.4)
- Terminal-Bench 2.1: **80.4%** (see agent row)
- FrontierCode v1: **38.8%** (Cognition; vs 4.6 15.1 — >2×)
- ProgramBench: **76–86%** across episodes out to full 1M window (Anthropic)
- DeepSWE / LiveCodeBench: no verified public score found

Long context:

- 1M window; ProgramBench scores hold 76–86% out to 1M (Anthropic) — no MRCR/GraphWalks row for Sonnet 5: retrieval %: no verified public score found (ProgramBench as partial proxy).

Multimodal:

- Text + image in (vision for charts/screens); no video/audio, no non-text out. MMMU / CharXiv: no verified public score found for Sonnet 5.

### Normalized scores (1–100)

- **Tool use: 90/100.** TB2.1 80.4%, OSWorld 81.2%, GDPval ~1610, Toolathlon 54.3 — within ~2–3 pts of Opus 4.8 on tool-heavy rows at 40% the price; capped below Opus-class GDPval 1890 and missing MCP/Tau3/Claw.
- **Reasoning: 86/100.** HLE 43.2/57.4 solid mid-frontier; AA Index 38 (version-specific snapshot) and missing GPQA row cap higher — clearly below Opus 4.8/Fable single-pass reasoning.
- **Context window: 95/100.** 1M documented; ProgramBench 76–86% holding to full 1M is strong long-window evidence → 95 (no MRCR ≥98% @512K+ row for 100).
- **Multimodal: 65/100.** Text + image in only → 60–70 band → 65.
- **Coding: 92/100.** SWE-Pro 63.2%, SWE-V 85.2%, TB2.1 80.4%, FrontierCode 38.8% (2× gen jump) — best coding set in Sonnet history; capped by Opus 4.8 SWE-Pro 69.2 lead and no DeepSWE row.
- **Cost efficiency: 88/100.** Permanent $2/$10 (33% below Sonnet 4.6's $3/$15 and 60% of Opus 4.8), cache read $0.20 (90% off), batch 50% off, free on Free/Pro plans; tokenizer 1.0–1.35× token inflation partially offsets sticker (intro price set ~cost-neutral — still strong value).
- **Overall Score: 86/100.** Mean of five quality dims (90+86+95+65+92)/5 = 85.6 → 86. Best-fit: default production workhorse for agentic coding and tool-use fleets — most Opus 4.8 capability at 40% price; escalate hard single-pass reasoning to Opus 4.8/Fable.

---

## Signature

- Provided by: **Mimo v2.6 Flash (xiaomi/mimo-v2.6-flash)** — 2026-09-22
- Method: public internet research (Anthropic Sonnet 5 announcement + product page + pricing edits, ApIDog benchmarks explainer, o-mega cost breakdown, Anthropic comparison charts via Gemini 3.6 table); scores are normalized 1–100 interpretations, not official vendor scores.
- Future sources: add a new file next to this one, e.g. `GPT_5.md`, using the same headings.
