# Claude Mythos 5.1 — findings by Laguna XS 2.1

- Source: Anthropic (`claude-mythos-5-1`)
- Date: 2026-10-04 (UTC)
- Overview and scoring methodology: `../../model-comparison.md`
- Cross-model signed log: `../../model-findings.md`

## Model card

- **Name:** Claude Mythos 5.1
- **Short description:** The invite-only form of the model underlying Claude Fable 5.1 (2026-09-01) — same weights, specs and pricing, with more permissive cyber/bio safeguards for vetted defensive-security and life-sciences organizations via Project Glasswing (CVP + LSVP, US-only). Not purchasable on the open market.
- **Provider / access:** Claude API (`claude-mythos-5-1`), Amazon Bedrock (`anthropic.claude-mythos-5-1`), Google Cloud, Microsoft Foundry — access by invitation only through Project Glasswing trusted-access programs. Adaptive thinking always on; default effort `high`.
- **Release / knowledge:** 2026-09-01; knowledge cutoff June 2026.
- **IDs:** `claude-mythos-5-1` (Claude API / Google Cloud / Foundry); `anthropic.claude-mythos-5-1` (Bedrock). No Zen Free ID found.
- **Context window:** 1M tokens (default and maximum); 128K max output.
- **Modalities:** text + image in; text out; reasoning yes (adaptive, always on); tool calls yes; JSON mode yes.
- **Pricing (as of 2026-10-04):** $10 / $50 per 1M in/out; cache read $0.25, cache write $12.50 (5m) / $20 (1h); Batch 50% off — identical to Fable 5.1.
- **Architecture:** proprietary; same underlying model as Fable 5.1; no parameter count published.

### Raw benchmarks found

Agent / tool use:

- Terminal-Bench 4.0: **60.9%** (Anthropic system card; vs Fable 5.1 55.8 — the gap reflects Fable's safeguard interventions; rank 3/29 per BenchmarkList, behind Opus 5.5's 66.4)
- ExploitBench v8-bench: **12.61 mean flags / 83.0% capability / 222 of 410 full ACEs** (AutoNudge, both arms; system card via BenchmarkList, rank 2/16)
- OSWorld 2.0 / GDPval-AA v2 / AutomationBench / CursorBench 3.2.0 / TAU-Bench: same underlying model as Fable 5.1 — Anthropic reports Fable 5.1 numbers (77.9% partial OSWorld, 1853 GDPval-AA v2, 31.4% AutomationBench, 73.4% CursorBench) as representative, noting Mythos only differs where safeguards intervene
- Claw-Eval / MCP-Atlas: no verified public score found

Reasoning / knowledge:

- ArxivMath (MathArena slice): **93.9% with tools / 91.3% no tools** (system card via BenchmarkList)
- AA-Omniscience Net Score: **0.57** (0.77 correct / 0.20 incorrect / 0.02 abstained; system card)
- HLE / GPQA / CritPt: reported for Fable 5.1 (60.9% no-tools HLE, 93.7% GPQA, 29.7% CritPt) — same underlying model per Anthropic; no separate Mythos row published
- BBQ bias benchmark: **89.9% disambiguated / 100% ambiguous accuracy** (system card)

Coding:

- Terminal-Bench 4.0 **60.9%** (see above) — the only headline coding number published separately for Mythos 5.1; SWE-bench Pro/Multilingual/Multimodal, DeepSWE v1.1, FrontierCode, FrontierSWE v2, CursorBench sections exist in the joint system card but are reported for the Fable/Mythos pair (Fable 5.1: SWE-bench Verified 95.0%, Pro 80.0%, LiveCodeBench 90.52%)

Long context:

- 1M window shared with Fable 5.1 (system card §8.11 ProgramBench long-context eval; no separate public number found)

Life sciences (Mythos-specific, system card):

- Protein design: binding affinities **10x higher than best Adaptyv Bio competition submissions** on 3 targets; hit rate **~50% across 12 targets** (typical field range 10–15%)
- ProteinGym Hard: **49.3% rank correlation** (rank 1/10 per BenchmarkList)
- BioMysteryBench: **90.3% human-solvable / 44.1% human-difficult**
- LatchBio: SpatialBench Verified **77.6%** / SingleCellBench **61.8%**
- Multimodal virology (VCT): **0.58**; long-form virology tasks **0.81 / 0.87** (both above the 0.80 notable-capability benchmark)

### Normalized scores (1–100)

- **Tool use: 95/100.** TB 4.0 60.9% without safeguard zeroes and ExploitBench 83.0% capability edge out Fable 5.1; otherwise shares its frontier tool-use profile (GDPval 1853, OSWorld 77.9% partial). Capped by Opus 5.5's 66.4% TB 4.0 SOTA and restricted availability limiting independent verification.
- **Reasoning: 94/100.** Same underlying model as Fable 5.1 (HLE 60.9% no-tools, GPQA 93.7%) plus ArxivMath 93.9% and the best life-sciences reasoning published (ProteinGym Hard #1); capped by no separate independent AA Index row for Mythos itself.
- **Context window: 96/100.** 1M window (95–100 tier) shared with Fable 5.1; system-card long-context ProgramBench evals reported for the pair — no ≥98%-at-512K+ evidence for 100.
- **Multimodal: 65/100.** Text + image in, text out only (image-in band); VCT multimodal virology (0.58) confirms real image reasoning, but no audio/video/PDF-in evidence found.
- **Coding: 95/100.** TB 4.0 60.9% (rank 3/29) plus the shared Fable 5.1 coding suite (SWE-bench Verified 95.0%, Pro 80.0%, LCB 90.52%); capped by Opus 5.5's TB 4.0 lead and invite-only access.
- **Cost efficiency: 30/100.** $10/$50 (methodology ~30 band) with $0.25 cache reads — but availability is invitation-only for US vetted organizations, so effective access cost is worse than list price suggests.
- **Overall Score: 89/100.** Mean of (95, 94, 96, 65, 95) = 89 — the strongest restricted-access Claude; general users should deploy the identical-capability Fable 5.1 instead.

---

## Signature

- Provided by: **Laguna XS 2.1 (poolside/laguna-xs-2-1)** — 2026-10-04
- Method: public internet research (Anthropic launch post + platform docs + joint Fable/Mythos 5.1 system card, BenchmarkList, FinallyOffline, Implicator.ai); scores are normalized 1–100 interpretations, not official vendor scores.
- Future sources: add a new file next to this one, e.g. `GPT_5.md`, using the same headings.
