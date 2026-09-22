# Claude Mythos 5.1 — findings by Mimo v2.6 Flash

- Source: Anthropic/`claude-mythos-5-1`
- Date: 2026-09-22 (UTC)
- Overview and scoring methodology: `../../model-comparison.md`
- Cross-model signed log: `../../model-findings.md`

## Model card

- **Name:** Claude Mythos 5.1
- **Short description:** Restricted-access twin of Claude Fable 5.1 (released 2026-09-01): same underlying weights with cyber/life-science safeguards lifted for vetted users. Variant/alias of Fable 5.1 capability-wise; invitation-only via Project Glasswing / CVP / LSVP (US orgs).
- **Provider / access:** Claude API `claude-mythos-5-1` **invite only**; Amazon Bedrock, Google Cloud, Microsoft Foundry (account-team access). Not self-serve. Chat/Messages API.
- **Release / knowledge:** 2026-09-01; knowledge cutoff June 2026.
- **IDs:** `claude-mythos-5-1` — no public free or self-serve paid ID; requires verification programs. 30-day data retention default noted by reviewers.
- **Context window:** 1M tokens; 128K max output.
- **Modalities:** text + image in; text out; adaptive thinking always on (default effort high); tool calls yes; JSON mode yes.
- **Pricing (as of 2026-09-22):** $10 in / $50 out per 1M; cache read $0.25; batch $5/$25 — same as Fable 5.1. Paid + access-gated.
- **Architecture:** proprietary (identical weights to Fable 5.1; differs only in safeguard layer).

### Raw benchmarks found

> Measured numbers with (source, rank, harness). Missing rows = no verified public score found.

Agent / tool use:

- Terminal-Bench 4.0: **60.9%** (Anthropic; #1 cited on indexes at 2026-09-01; vs Fable 5.1 55.8% — gap = safeguard tax on Fable, not extra weights)
- Terminal-Bench-Science 0.1: shares Fable 5.1 lineage scores where not separately published — Mythos-specific row: **no verified public score found** (Fable 5.1 52.6% is the same-brain public number under safeguards)
- GDPval-AA v2: **1853** (Anthropic family table via Fable 5.1 — same model class; Mythos-specific run not split out: treat as same-model evidence)
- OSWorld 2.0 / AutomationBench / CursorBench: see Fable 5.1 family table (77.9% partial / 31.4% / 73.4%) — Mythos not separately broken out except TB4.0
- Tau3 / Claw-Eval: no verified public score found

Reasoning / knowledge:

- Humanity's Last Exam: family table **60.9% no tools / 65.0% with tools** (Fable 5.1 row; same weights)
- GPQA Diamond: **93.7%** (OpenAI-cited Anthropic family figure)
- FrontierMath T4 v2: **87.8** (Epoch, Fable 5.1 config — same weights)
- Artificial Analysis Intelligence Index: **~66** (Fable 5.1 class)
- Protein/biology demos: 10× affinity binders vs competition on 3 targets (Anthropic narrative — not a % benchmark)

Coding:

- Terminal-Bench 4.0: **60.9%** (Mythos config; strongest Anthropic published TB4 figure)
- DeepSWE v1.1: **67.4%** (family/OpenAI table for Fable 5.1 class)
- SWE-bench Verified / LiveCodeBench: no verified public score found for Mythos specifically
- Vals-style composites: Fable 5.1 #1 of 51 Vals Index cited by reviewers — Mythos not separately ranked

Long context:

- 1M window; no MRCR row for Mythos 5.1 — no verified public score found.

### Normalized scores (1–100)

- **Tool use: 98/100.** TB4.0 60.9% (highest Anthropic published; above Astra 57.9 and Fable 55.8), family GDPval 1853, OSWorld 77.9 partial; capped slightly by missing Tau3/Claw and invite-only harness context.
- **Reasoning: 97/100.** Same weights as Fable 5.1: HLE 60.9/65.0, GPQA 93.7, FrontierMath T4 87.8, Index ~66; capped like Fable just below 100.
- **Context window: 95/100.** 1M confirmed; no ≥98% retrieval at 512K+ published → 95.
- **Multimodal: 65/100.** Text + image in (chart/filing vision); no video/audio/non-text out.
- **Coding: 97/100.** TB4.0 60.9% class-leading, DeepSWE ~67.4, MirrorCode-class coding; capped by missing SWE-bench/LCB rows for Mythos specifically and DeepSWE below 74% top tier.
- **Cost efficiency: 30/100.** $10/$50 anchor ≈ 30; cache read $0.25 cuts agentic bills ~25–45% but list price stays top-tier; access gated (not a cost dim, noted for deployability).
- **Overall Score: 90/100.** Mean of five quality dims (98+97+95+65+97)/5 = 90.4 → 90. Best-fit: identical capability ceiling to Fable 5.1 for vetted cyber/life-sciences teams; everyone else should run Fable 5.1 (same weights, generally available).

---

## Signature

- Provided by: **Mimo v2.6 Flash (xiaomi/mimo-v2.6-flash)** — 2026-09-22
- Method: public internet research (Anthropic Fable/Mythos announcement + platform docs, AI/TLDR, eesel, BuildFastWithAI, Orcarouter, UseRightAI); scores are normalized 1–100 interpretations, not official vendor scores.
- Future sources: add a new file next to this one, e.g. `GPT_5.md`, using the same headings.
