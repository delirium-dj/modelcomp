# Claude Mythos 5.1 — findings by Fledge Alpha

- Source: Anthropic (`claude-mythos-5-1`)
- Date: 2026-10-08 (UTC, refreshed from 2026-10-02)
- Overview and scoring methodology: `../../model-comparison.md`
- Cross-model signed log: `../../model-findings.md`

## Model card

- **Name:** Claude Mythos 5.1
- **Short description:** Anthropic's Sept 1, 2026 invite-only variant of Claude Fable 5.1 with less restrictive safety safeguards, distributed via Project Glasswing.
- **Provider / access:** Claude API (`claude-mythos-5-1`), Bedrock, Google Cloud, MS Foundry — invite-only. Access expanded 2026-10-07: Anthropic folded Project Glasswing + the earlier CVP into a single **Cyber Verification Program** with three access tiers covering Mythos 5.1, Opus 5.5, Sonnet 5.5 and future models (claudenews.online). Anthropic's Claude Security codebase-scanning product is now also powered by Mythos 5.1.
- **Release / knowledge:** 2026-09-01; knowledge cutoff Jun 2026.
- **IDs:** `anthropic/claude-mythos-5-1`
- **Context window:** 1,000,000 tokens; 128K max output.
- **Modalities:** text + image in; text out; adaptive thinking always on.
- **Pricing (as of 2026-10-02):** Same card as Fable 5.1 — $10/M in, $50/M out, $0.25/M cache read; Batch 50% off.
- **Architecture:** same underlying model as Claude Fable 5.1; differences reflect fewer safeguard interventions.

### Raw benchmarks found

Agent / tool use:

- Terminal-Bench 4.0: **60.9%** (vs Fable 5.1's 55.8% — same model, fewer safeguard interventions)
- GDPval-AA v2: shares Fable 5.1-class results (~1853 Elo)
- OSWorld 2.0: strict subset — 41.7% reported for the shared spec
- AutomationBench: 31.4% shared-class

Reasoning / knowledge:

- HLE (no tools): **60.9%** / with tools: **65.0%** (shared with Fable 5.1)
- Terminal-Bench-Science 0.1: 52.6% class
- BioMysteryBench/protein-design/organic-chemistry: Mythos 5.1 leads most internal/partner life-science benchmarks (Anthropic)

Coding:

- SWE-bench Pro: **81.2%** (shared spec); SWE-bench Multilingual **89.1%**; DeepSWE **67.4%**; CursorBench 73.4%

Long context:

- 1M window, same as Fable 5.1.

### Normalized scores (1–100)

- **Tool use: 84/100.** Terminal-Bench 4.0 60.9% (higher than Fable 5.1 due to fewer interventions); same agentic envelope otherwise.
- **Reasoning: 88/100.** HLE with tools 65.0%, no-tools 60.9% — shares Fable 5.1's reasoning ceiling.
- **Context window: 95/100.** Full 1M window.
- **Multimodal: 68/100.** Text + image in.
- **Coding: 85/100.** SWE-bench Pro 81.2%, Multilingual 89.1%, CursorBench 73.4% (shared spec).
- **Cost efficiency: 60/100.** Same $10/$50 card as Fable 5.1; invite-only, so value limited to Glasswing participants.
- **Overall Score: 84/100.** Mean of the five quality dims; same capability as Fable 5.1 — most useful where Fable's safeguards block the task, and it is not publicly purchasable.

---

## Signature

- Provided by: **Fledge Alpha (opencode/fledge-alpha-free)** — 2026-10-08
- Method: public internet research (Anthropic launch post, platform docs, system card, claudenews CVP expansion coverage); scores are normalized 1–100 interpretations, not official vendor scores.
- Future sources: add a new file next to this one using the same headings.
