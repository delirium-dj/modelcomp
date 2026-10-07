# Claude Sonnet 5 — findings by MiMo 2.6 Flash

- Source: Anthropic (`claude-sonnet-5`)
- Date: 2026-10-07 (UTC)
- Overview and scoring methodology: `../../model-comparison.md`
- Cross-model signed log: `../../model-findings.md`

## Model card

- **Name:** Claude Sonnet 5
- **Short description:** "The most agentic Sonnet yet" (released 2026-06-30) — near-Opus agentics at Sonnet pricing: SWE-Pro 63.2 (+5.1 over 4.6), TB2.1 80.4 (+13.4, all but matching Opus 4.8), OSWorld 81.2, GDPval-AA v2 1618 (one outright win over Opus 4.8's 1615). Became the default Free/Pro model day one. Headline pricing story: launched at an "introductory" $2/$10 which Anthropic **made permanent on 2026-08-10** (the scheduled $3/$15 step-up cancelled). Now marked legacy in favor of Sonnet 5.5 (same $2/$10, higher scores); retirement not before 2027-06-30.
- **Provider / access:** Claude API (`claude-sonnet-5`), Claude.ai, Claude Code, Claude Platform on AWS, Amazon Bedrock, Google Cloud, Microsoft Foundry; day-one in Cursor, VS Code, GitHub Copilot.
- **Release / knowledge:** released 2026-06-30; knowledge cutoff **January 2026**.
- **IDs:** `anthropic/claude-sonnet-5` (gateway routes) / `claude-sonnet-5` (native).
- **Context window:** 1,000,000 tokens; max output 128,000.
- **Modalities:** text + images in; text out; reasoning yes (adaptive thinking, default effort `high`, higher levels available with raised rate limits); tool calls yes.
- **Pricing (as of 2026-10-07):** **$2.00 in / $10.00 out** per 1M (standard since 2026-08-10), cached input **$0.20** (10%), 5m/1h cache writes $2.50/$4, Batch API 50%. **Tokenizer caveat:** new tokenizer maps the same text to ~1.0–1.35× (≈30% average) more tokens than Sonnet 4.6 — intro pricing was set to keep real spend roughly neutral. Paid.
- **Architecture:** proprietary.

### Raw benchmarks found

Agent / tool use (Anthropic-run unless noted):

- OSWorld-Verified: **81.2** (vs Opus 4.8 83.4). BrowseComp: **84.7** single-agent / **86.6** multi-agent (Anthropic's corrected methodology chart).
- Terminal-Bench 2.1: **80.4** (Anthropic harness; +13.4 vs 4.6) — **GPT-5.5 leads via Codex CLI at 83.4** on the comparable row; below the 88% ref either way. Frontier-Bench v0.1 (TB's successor, Harbor/Laude): **14.6** (hard, ever-evolving set).
- GDPval-AA: **1618** (Anthropic; AA independent ~1609, Google's table 1607 — all mid-1600s, under the 1750+ v1 ref; v2-era: 1618 narrowly edges Opus 4.8's 1615/1582 family).
- Toolathlon: 54.3 Pass@1. AutomationBench / ALE / DeepSWE: DeepSWE v1.1 row **54** (vendor comparison tables — under the 74 ref). MCP-Atlas: no verified row found.

Reasoning / knowledge:

- HLE: **43.2** no tools / **57.4** with tools — both clear the 40%+ ref (+10.6 tools vs 4.6).
- GPQA Diamond: **not published** by Anthropic for Sonnet 5 (n/p in every compilation).
- AA Intelligence Index: **38** (AA v4.3, per o-mega's compilation) — well under the 60+ ref (Fable 5.1: 53, Opus 5: 51 on the same board).
- FrontierCode v1 (Cognition, real PRs): 38.8 (vs 4.6's 15.1 — coding-adjacent). BullshitBench v2: 80%.

Coding:

- SWE-bench Verified: **85.2** (system-card body — the only Verified figure Anthropic published; the viral 82.1/92.4 numbers were third-party inventions). SWE-bench Pro: **63.2** (contamination-resistant headline; vs Opus 4.8 69.2, Fable 5.1 80.4-class rows).
- SWE-bench Multilingual: 78.3. Terminal-Bench 2.1: 80.4 (as above). ProgramBench (long-context reconstruction): **76–86 across episodes out to the full 1M window**. CursorBench v3.2: 61.5.
- Supabase Evals 95.5 (with skills); Next.js Evals 79. Arena Elo: 1463 text / 1543 code.

Long context:

- 1M window with ProgramBench's 76–86 across episodes reaching the full 1M — the strongest 1M evidence for an Anthropic mid-tier here; no MRCR/needle ≥98% figure.

### Normalized scores (1–100)

- **Tool use: 88/100.** OSWorld 81.2, BrowseComp 84.7/86.6 and TB2.1 80.4 are Opus-adjacent, GDPval v2 1618 beats Opus 4.8 on the shared board; Toolathlon 54.3, Frontier-Bench 14.6 and TB's loss to GPT-5.5's harness keep it at 88.
- **Reasoning: 84/100.** HLE 43.2/57.4 clears the 40+ ref cleanly (+10.6 over 4.6); **no GPQA row at all** and AA Index 38 (under 60+) are the offsets — weaker reasoning evidence than any Opus-tier sibling.
- **Context window: 95/100.** 1M = ≥1M tier floor, with ProgramBench 76–86 all the way to 1M as real evidence; no ≥98% needle/LCR number → floor.
- **Multimodal: 66/100.** Text + image in, text out = image band (60–70); CharXiv 77.0 (Google's table) is mid, no video/audio/PDF-specific or non-text output.
- **Coding: 86/100.** SWE-V 85.2, SWE-Pro 63.2 (+5.1), TB2.1 80.4 (+13.4), FrontierCode 38.8 (2.5× over 4.6) — Opus-class at 40% less output cost; below 90 because TB2.1 loses to GPT-5.5, DeepSWE 54 misses the 74 ref, and every hard row still trails Opus 4.8/Fable.
- **Cost efficiency: 74/100.** $2/$10 sits between the $1.25/$4.25 ≈ 88 and $3/$15 ≈ 60 anchors (≈72), with cache reads at 90% off and batch at 50%; the permanent (non-expiring) rate and Free/Pro default status lift it to 74, offset by the ~30% tokenizer inflation on same text.
- **Overall Score: 84/100.** (88+84+95+66+86)/5 = 83.8 → 84 — the workhorse release of mid-2026: Opus-adjacent agentics and coding at a permanent third-off price, held back by thin reasoning disclosure (no GPQA, Index 38) and image-only multimodality.

---

## Signature

- Provided by: **MiMo 2.6 Flash (Xiaomi — opencode/mimo-v2.6-flash)** — 2026-10-07
- Method: fresh public internet research (Anthropic launch post + platform docs, LLM Boss, Emergent, Capital Compute, O-mega, DataNorth, AI Release Tracker); scores are normalized 1–100 interpretations, not official vendor scores.
- Future sources: add a new file next to this one, e.g. `MiMo_2.6_Flash.md`, using the same headings.
