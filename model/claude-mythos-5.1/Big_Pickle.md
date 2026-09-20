# Claude Mythos 5.1 — findings by Big Pickle

- Source: Anthropic (`claude-mythos-5-1`)
- Date: 2026-09-20 (UTC)
- Overview and scoring methodology: `../../model-comparison.md`
- Cross-model signed log: `../../model-findings.md`

## Model card

- **Name:** Claude Mythos 5.1
- **Short description:** Anthropic's restricted configuration of its most capable model — the exact same weights as Claude Fable 5.1 with cybersecurity and life-sciences safeguards relaxed — gated behind invitation-only trusted access programs (Project Glasswing) for vetted US organizations; posts the top Terminal-Bench 4.0 score in Anthropic's launch table.
- **Provider / access:** Invite-only (`claude-mythos-5-1`, not on the public API); via Claude API, Amazon Bedrock (v1), Google Cloud, Microsoft Foundry through account teams. Cyber Verification Program (launching) and Life Sciences Verification Program (invite-only beta); currently US organizations, international expansion coordinated with governments.
- **Release / knowledge:** Released 2026-09-01; three months after Fable 5 / Mythos 5 (June 2026). Knowledge cutoff June 2026.
- **IDs:** `claude-mythos-5-1` (proprietary; identical weights to `claude-fable-5-1`)
- **Context window:** 1,000,000 tokens; max output 128,000 tokens.
- **Modalities:** text and images input; text output. Adaptive thinking always on, default effort `high`.
- **Pricing (as of 2026-09-20):** $10 in / $50 out per 1M tokens (same as Fable 5.1, programme-gated); cache reads dropped 75% to $0.25/1M (Anthropic measures ~25% lower cost on typical workloads, up to ~45% on context-heavy agentic ones); cache writes $12.50 (5m) / $20 (1h); batch 50% off.
- **Architecture:** Undisclosed; identical to Fable 5.1 with adaptive (always-on) thinking and effort levels. Anthropic ECI point estimate **161.98** (95% CI [158.20, 169.00], n=46); does not cross Anthropic's CB-2 threshold.

### Raw benchmarks found

Agent / tool use (the single Mythos-specific figure; all others are vendor-run on the shared model):

- Terminal-Bench 4.0: **60.9%** (Mythos 5.1) — top of Anthropic's launch table (Fable 5.1 55.8%, Opus 5 52.3%, GPT-5.6 Sol 37.3%; +19 pts over Mythos 5's 42.0%).
- No SWE-bench figure of any kind was published for Fable 5.1/Mythos 5.1 — an unusual gap at this tier.
- Shared-model scores: OSWorld 2.0 **77.9% partial / 41.7% strict**; AutomationBench **31.4%**; GDPval-AA v2 **1853**.

Reasoning / knowledge:

- Humanity's Last Exam (shared model): **60.9%** no tools / **65.0%** with tools; GDPval-AA v2 1853.
- Artificial Analysis Intelligence Index: Fable 5.1 (the accessible twin) scores **66, first of 192 models tracked**; no independent score exists for Mythos 5.1 because AA cannot access it.
- Cyber: strongest overall cyber capabilities of any Anthropic release (meets/exceeds Mythos 5 across ExploitBench, OSS-Fuzz, Firefox 147, ExploitGym), though Anthropic did not republish the ExploitBench 78.0% / BioMysteryBench 46.1% figures that accompanied Mythos 5.

Coding:

- Terminal-Bench 4.0 60.9% (above); CursorBench 3.2.0 **73.4%** (shared); no SWE-bench result published.
- Mythos 5.1 powers Claude Security (vulnerability scanning + patch suggestions) for Claude Enterprise.

Scientific / multimodal research (shared model, vendor demonstrations):

- Molecular design: ~**50%** hit rate across 12 protein-design targets (typical is 10-15%) with hit rates ~10x Adaptyv Bio competition bests, validated in two external labs.
- Computational biology: wrote custom GPU kernels speeding seven open-source DL models up to **2.5x** with identical outputs.
- Planetary science: trained a network on Magellan radar data to map ~1/3 of Venus at 2-3 km resolution.

Long context:

- 1M window with 128K output and adaptive always-on thinking; long-context retrieval benchmarks (MRCR, etc.) not published in this launch.

### Normalized scores (1–100)

- **Tool use: 56/100.** Terminal-Bench 4.0 60.9% tops the launch table and OSWorld 41.7% strict is solid, but it is a single vendor-run figure, no SWE-bench exists for the family, and nothing is independently measurable behind the access wall.
- **Reasoning: 58/100.** The underlying model is indubitably frontier (HLE 65.0% with tools, GDPval-AA v2 1853, AA Index 66 on its Fable twin), yet Mythos itself has zero independent reasoning scores public.
- **Context window: 68/100.** A full 1M window with 128K output and adaptive thinking is strong, but long-context retrieval was not benchmarked at launch.
- **Multimodal: 40/100.** Text + image input only (text output); the research demos are impressive but no multimodal evaluation suite was published for the family.
- **Coding: 52/100.** Terminal-Bench 4.0 60.9% and CursorBench 3.2.0 73.4% indicate a very strong agentic coder, but the total absence of SWE-bench figures — unusual at this tier — keeps confidence capped.
- **Cost efficiency: 45/100.** $10/$50 per 1M with a 75% cache-read cut (25-45% effective savings) is competitive per-task, but the model is effectively unbuyable outside two US programmes, so value is academic for most teams.
- **Overall Score: 55/100.** Mean of the five quality dims (56+58+68+40+52)/5 = 54.8. A restrictively-gated frontier model whose provable public footprint is one headline benchmark and a handful of shared-model scores — grow-in with top-tier DNA, short on independent evidence.

---

## Signature

- Provided by: **Big Pickle (`opencode/big-pickle`)** — 2026-09-20
- Method: public web research (anthropic.com announcement, Anthropic system card PDF, platform.claude.com docs, theairankings.com, coursiv.io, marktechpost.com, benchlm.ai); scores are normalized 1–100 interpretations, not official vendor scores.
- Future sources: add a new file next to this one, e.g. `Muse_Spark_1.3.md`, using the same headings.