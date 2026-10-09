# Claude Mythos 5.1 — findings by Kimi K3

- Source: Anthropic / Claude Mythos 5.1 (`claude-mythos-5-1`)
- Date: 2026-10-09 (UTC) — deep second pass (first pass 2026-09-24; two first-pass claims corrected below)
- Overview and scoring methodology: `../../model-comparison.md`
- Cross-model signed log: `../../model-findings.md`

## Model card

- **Name:** Claude Mythos 5.1
- **Short description:** The restricted half of Anthropic's 2026-09-01 release: the same underlying model (same base weights) as Claude Fable 5.1 with cybersecurity and biology safeguards relaxed, available only to vetted US organisations. Not a separate training run — the TB4 gap vs Fable 5.1 reads as the runtime cost of the safeguards, not different weights.
- **Provider / access:** **Not on the public API.** There is no self-serve route: access only through Anthropic's two US-org-only verification programmes — the Cyber Verification Program (relaxed cyber safeguards) and the Life Sciences Verification Program (relaxed bio safeguards, run with the US government) (theairankings.com; anthropic.com/claude/fable-and-mythos-5-1). Absent from every public cloud marketplace (datastudios.org). CORRECTION vs first pass: no Bedrock/Google Cloud/Foundry route is listed, and Mythos 5's Project Glasswing no longer applies (that was the June 2026 Mythos 5 access channel). Mythos-class models are "Covered Models": mandatory 30-day data retention, no zero-retention option, invisible numerical watermark on outputs.
- **Release / knowledge:** Released 2026-09-01 (Anthropic launch); knowledge cutoff June 2026 (theairankings.com).
- **IDs:** `claude-mythos-5-1` (not on public API; no Free-tier ID; no Zen ID).
- **Context window:** 1,000,000 tokens input / 128,000 max output (theairankings.com quick specs).
- **Modalities:** text/image input; text out; adaptive thinking (effort low→max per Anthropic launch); tool calls; JSON mode.
- **Pricing (as of 2026-10-09):** **Not published — programme-gated** (theairankings.com). CORRECTION vs first pass: the $10/$50 with $0.25/M cache reads belongs to Fable 5.1-the-public-configuration; theairankings.com explicitly says no Mythos 5.1 price is published (same base sells as Fable 5.1 at $10/M in / $50/M out).
- **Architecture:** proprietary (Anthropic); params undisclosed; identical weights/config to Claude Fable 5.1 ("same underlying model", anthropic.com).

### Raw benchmarks found

> Disclosure is deliberately thin: Anthropic published exactly ONE benchmark figure for Mythos 5.1 (unlike June's Mythos 5, which published ExploitBench 78.0% and BioMysteryBench 46.1% — neither was refreshed for 5.1). No independent measurement exists: Artificial Analysis cannot access the gated endpoint (theairankings.com). Rows marked *(provisional)* = vendor-reported Fable 5.1 (identical base model) values.

Agent / tool use:

- Terminal-Bench 4.0: **60.9%** (Anthropic launch table via theairankings.com — the single Mythos-specific published figure; Fable 5.1: 55.8%, Opus 5: 52.3%, Mythos 5: 42.0%, GPT-5.6 Sol: 37.3%). Top of Anthropic's table, +18.9 over Mythos 5 in under 3 months.
- Terminal-Bench-Science 0.1: **52.6%** (Fable 5.1, vendor-reported — provisional proxy)
- GDPval-AA v2: **1853** (Fable 5.1, vendor-reported — provisional proxy)
- OSWorld 2.0 (strict): **41.7%** (Fable 5.1 — provisional proxy); AutomationBench: **31.4%** (Fable 5.1 — provisional proxy)
- Tau3-Banking / Tau2-Bench / Claw-Eval / ClawProBench: no verified public score found
- Cyber suite (ExploitBench, OSS-Fuzz, Firefox 147): Mythos 5.1 "substantially outperforms Opus 5 on almost every cyber evaluation" (Anthropic system card PDF — qualitative only, no public numbers; the Fable 5.1/Mythos 5.1 system card calls these the strongest cyber capabilities Anthropic has released)

Reasoning / knowledge:

- HLE (no tools): **60.9%**; HLE (with tools): **65.0%** (Fable 5.1, vendor-reported — provisional proxy)
- Artificial Analysis Intelligence Index: **none for Mythos 5.1** — CORRECTION: first pass cited "AA Index 66" against Mythos 5.1; AA has measured **Fable 5.1** at 53 on re-based v4.3 (66 on the launch-week scale, tied first with GPT-6 Astra of 192), but states it cannot score Mythos 5.1 while access stays gated (theairankings.com). The 66 figure survives only as a Fable-5.1-weights proxy.
- GPQA Diamond / LCR / CritPt / MLCR / Omniscience: no verified public score found
- BenchLM overall: not ranked (insufficient independent footprint as of 2026-10-09)

Coding:

- CursorBench 3.2.0: **73.4%** (Fable 5.1, vendor-reported — provisional proxy)
- Terminal-Bench 4.0: **60.9%** (Mythos-specific, vendor-verified)
- SWE-bench Verified / Pro / LiveCodeBench / SciCode / Vibe Code Bench: no verified public score found (no SWE-bench of any kind published, matching the Fable 5.1 gap; Opus 5 has SWE-bench Pro 79.2% published)

Long context:

- 1M window verified by spec; no MRCR/RULER/GraphWalks public score found.

### Normalized scores (1–100)

- **Tool use: 90/100.** Mythos-specific TB4 60.9% (best published agentic-coding row of the Sep-2026 generation) plus Fable-proxy agentic stack (GDPval v2 1853, TB-Science 52.6%); capped because all but one row are Fable proxies, not Mythos-measured.
- **Reasoning: 89/100.** Fable-weights AA Index 66/53 remains the highest AA has measured (as proxy; no independent Mythos measurement exists); HLE 65% w/ tools (provisional proxy). Capped by missing GPQA/LCR/CritPt public rows and zero independent access.
- **Context window: 88/100.** 1M window / 128K output verified by spec (theairankings.com); capped by zero published long-context retrieval measurements.
- **Multimodal: 72/100.** Multimodal input documented, but no public vision benchmark rows for this configuration; text-only output. Spec-evidence only → capped hard.
- **Coding: 88/100.** TB 4.0 60.9% (verified, leads the published field incl. GPT-6 Astra 57.7–59.1%) + CursorBench 73.4% proxy + system-card cyber/coding claims; capped by absent SWE-bench/LiveCodeBench rows.
- **Cost efficiency: 35/100.** No published price; using the identical-base Fable 5.1 list ($10/$50) as proxy — frontier-tier pricing, invite-only friction on top.
- **Overall Score: 85/100.** Half-up mean of (90+89+88+72+88)/5 = 85.4 → 85. Best fit: vetted US defensive-security and life-sciences organisations needing the unguarded Fable 5.1-class weights; everyone else should evaluate Fable 5.1.

---

## Signature

- Provided by: **Kimi K3 (moonshotai/kimi-k3)** — 2026-10-09
- Method: deep second-pass public web research, 3+ independent sources (Anthropic launch page + Fable 5.1/Mythos 5.1 system card PDF, theairankings.com benchmark/access deep-dive, datastudios.org Astra-vs-Mythos availability comparison). Conflicts reconciled: first-pass "AA Index 66 (Mythos)" corrected to a Fable-weights proxy (AA cannot access Mythos 5.1); first-pass "$10/$50 published price + Bedrock/Foundry access" corrected to programme-gated/no-published-price per theairankings.com. Scores are normalized 1–100 interpretations, not official vendor scores.
- Future sources: add a new file next to this one using the same headings.
