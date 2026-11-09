# Claude Fable 5.1 — findings by QoDuck

- Source: Anthropic (`claude-fable-5-1`)
- Date: 2026-11-09 (UTC)
- Overview and scoring methodology: `../../model-comparison.md`
- Cross-model signed log: `../../model-findings.md`

## Model card

- **Name:** Claude Fable 5.1
- **Short description:** Anthropic's top-tier long-horizon agentic model (released 2026-09-01, successor to Fable 5), the "generally available workhorse" for demanding reasoning, agentic coding, knowledge work, and research. Claude Mythos 5.1 is the identical model with lighter safeguards for verified organizations — not a separate capability tier. Anthropic now recommends Opus 5.5 as the default for most workloads.
- **Provider / access:** Claude API (Messages API) `claude-fable-5-1`; OpenCode Zen `opencode/claude-fable-5-1` via `https://opencode.ai/inference/anthropic/v1/messages` (paid, no Free ID); OpenRouter `anthropic/claude-fable-5.1`; AWS Bedrock `anthropic.claude-fable-5-1`; Google Cloud; Azure.
- **Release / knowledge:** Released 2026-09-01; knowledge cutoff Jun 2026 (Claude Platform models overview); retirement not sooner than 2027-09-01.
- **IDs:** `claude-fable-5-1` (Anthropic), `opencode/claude-fable-5-1` (Zen — no Free ID), `anthropic/claude-fable-5.1` (OpenRouter), `anthropic.claude-fable-5-1` (Bedrock).
- **Context window:** 1M tokens (default and maximum) at standard per-token pricing across the whole window — no long-context premium; 128K max output (official docs).
- **Modalities:** Text + image input, text output (Claude Platform overview); adaptive thinking always on, default effort `high`; tool use supported but forced tool use (`tool_choice: any/tool`) returns 400; temperature/top_p/top_k and assistant prefill return 400. Thinking blocks are model-bound (only Fable 5.1/Mythos 5.1 read them); append-only conversation history required.
- **Pricing (as of 2026-11-09):** $10.00 / 1M input, $50.00 / 1M output; cache read $0.25 (0.025× input — 75% cheaper than Fable 5), cache write $12.50 (5m) / $20 (1h); batch $5/$25 (Anthropic docs + Zen agree). 30-day retention; not available under zero data retention unless expressly authorized. EU AI Act statistical text watermark + C2PA on generated media.
- **Architecture:** Proprietary; no parameter count disclosed. Same tokenizer as Fable 5 (~30% more tokens than pre-Opus-4.7 models for the same text).

### Raw benchmarks found

Agent / tool use:

- GDPval-AA v2: **1853 Elo** (Anthropic launch table via Vellum) — leads Opus 5 1824, Fable 5 1723, GPT-5.6 Sol 1711. Note: Anthropic's later Opus 5.5 table lists Fable 5.1 at **1735 on GDPval-AA v2.1** — different benchmark version, both retained.
- Terminal-Bench 4.0: **55.8%** (Anthropic) — cyber safeguards intervened; Mythos 5.1 (same weights, lighter safeguards) scored **60.9%**, so 55.8% is a safeguard-depressed floor.
- OSWorld 2.0 (Aug 2026 tasks): **77.9% partial / 41.7% strict** (Anthropic) — leads Opus 5 (75.4/39.6); safeguard zeros likely depress, "treat as floors".
- AutomationBench: **31.4%** (Anthropic) — leads Opus 5 26.9%, Sol 19.6%; Fable 5 scored zero wherever safeguards intervened (harness caveat).
- CursorBench 3.2.0: **73.4%** (Anthropic) — leads Fable 5 70.5%, Opus 5 70.0%, Sol 67.2%. (CursorBench 4.0 later showed Fable 5.1 at 51.8% — newer, harder version.)
- Tau3-Banking / Claw-Eval: no verified public score found.

Reasoning / knowledge:

- HLE: **60.9% no tools / 65.0% with tools** (Anthropic launch table) — led at launch; Opus 5.5's later table lists Fable 5.1 at 65.6% with tools (minor revision).
- Artificial Analysis Intelligence Index: **66** at launch (v4.1.1, #1 — ahead of GPT-6 Astra's 61) → **53** on v4.3.2 (behind Opus 5.5's 58) — index rescaled; vintage-bound.
- ARC-AGI: **97.5** (emergent.sh citing ARC Prize; version not stated, likely ARC-AGI-1 — provisional).
- Terminal-Bench-Science 0.1: **52.6%** (Anthropic, ±3.5–4.5 pts s.e.) — more than double Fable 5's 24.7%.
- GPQA Diamond / CritPt: no verified public score found.
- AA cost note: Fable 5.1 costs **20% more per task than Fable 5** despite the 75% cache-read cut (AA launch analysis).

Coding:

- CursorBench 3.2.0: 73.4% (see Tool use); coding-ranking snapshot on OpenRouter shows Fable 5.1 **#1 at 81.6** (max effort; xhigh 80.7) vs Opus 5 78.0 — index unnamed in snippet, provisional.
- Terminal-Bench 4.0: 55.8% (safeguard floor; Mythos 60.9%).
- SWE-bench Verified / LiveCodeBench / DeepSWE / SciCode: no verified public score found.
- AA Coding Agent Index (Sept 25 vintage): Fable 5.1 **70** vs GPT-6 Astra 67 (Codex harness, via GeoToolbox).

Long context:

- 1M window at flat pricing verified; MRCR / RULER / GraphWalks / AA-LCR: no verified public score found for this exact model.

Multimodal:

- Text + image input, text output; MMMU / Chartography: no verified public score found.

**Conflicting-results notes:** (1) GDPval-AA v2 1853 vs v2.1 1735 — benchmark-version difference between Anthropic's September and October tables, not a correction. (2) AA Index 66 (launch) vs 53 (v4.3.2) — rescaled vintage; Fable 5.1 led at launch, trails Opus 5.5 now. (3) Safeguard interventions make TB4/OSWorld/AutomationBench floors rather than point estimates — Mythos 5.1's 60.9% TB4 shows the unsafeguarded capability. (4) Vellum reports ~25% cheaper typical workloads / ~45% cheaper agentic vs Fable 5, while AA measured +20% cost/task — cache-heavy vs token-heavy workload mix explains the gap. (5) Every's qualitative testing found instruction-following flaws (1,288 words when asked for 1,000; kept working after interrupt).

### Normalized scores (1–100)

- **Tool use: 92/100.** GDPval-AA v2 1853 clears the ~1750+ frontier ref, OSWorld 77.9% partial and CursorBench 73.4% lead their tables; capped by safeguard-depressed floors (TB4 55.8% vs Mythos's 60.9%), AutomationBench 31.4%, and missing Tau3 evidence.
- **Reasoning: 93/100.** HLE 60.9%/65.0% and TB-Science 52.6% led at launch, AA Index #1 (66) at launch vintage; capped by the current-scale Index 53 (below Opus 5.5's 58) and no verified GPQA/CritPt figures.
- **Context window: 95/100.** Verified 1M default+max window with flat pricing (no cliff) and 128K output; no public retrieval-at-length evidence (MRCR/AA-LCR) to justify the 98–100 band.
- **Multimodal: 68/100.** Text + image input, text output → 60–70 tier; no verified vision benchmarks or audio/video I/O to push higher.
- **Coding: 92/100.** CursorBench 3.2.0 73.4% leads, AA Coding Agent Index 70 > Astra's 67, OpenRouter coding snapshot #1 (81.6); capped by safeguard-floor TB4, harder CursorBench 4.0 at 51.8%, and missing SWE-bench Verified/DeepSWE.
- **Cost efficiency: 32/100.** $10/$50 maps to the ~30 anchor; the $0.25 cache read (0.025×) and batch $5/$25 lift it slightly for cache-heavy agentic work, but AA's +20% cost/task vs Fable 5 caps the gain.
- **Overall Score: 88/100.** Mean of (92+93+95+68+92)/5 = 88.0 — best-fit for long-horizon research and knowledge work where safeguards matter and budget is secondary; Opus 5.5 now covers most workloads at 60% lower price.

---

## Signature

- Provided by: **QoDuck (Qoder agent)** — 2026-11-09
- Method: public internet research — 3 independent web searches plus direct fetches of Anthropic's what's-new docs and Vellum's benchmark analysis, cross-checked against the Claude Platform models overview, OpenCode Zen pricing rows, Artificial Analysis launch/current vintages, and ZenMux/OpenRouter listings; version and safeguard conflicts labelled; scores are normalized 1–100 interpretations, not official vendor scores.
- Reference URLs:
  - [What's new in Claude Fable 5.1 — Claude Platform Docs](https://platform.claude.com/docs/en/models/fable-5-1/whats-new-fable-5-1)
  - [Claude Fable 5.1 & Mythos 5.1 System Card (PDF) — Anthropic](https://www-cdn.anthropic.com/0339e6a7c5c7b87f5c07798616dc32c215d14235/Claude%20Fable%205.1%20&%20Claude%20Mythos%205.1%20System%20Card.pdf)
  - [Claude Fable 5.1 & Mythos 5.1 Benchmarks Explained — Vellum](https://www.vellum.ai/blog/claude-fable-5-1-mythos-5-1-benchmarks-explained)
  - [Claude Fable 5.1 tops the AA Intelligence Index — Artificial Analysis on X](https://x.com/ArtificialAnlys/status/2094881171066978525)
  - [Claude Opus 5.5 vs Fable 5.1 (AA v4.3.2: 58 vs 53) — LMSpedia](https://lmspedia.org/claude-opus-5-5-vs-fable-5-1/)
  - [Claude Fable 5.1 Benchmarks — Emergent](https://emergent.sh/learn/claude-fable-5-1-benchmarks)
  - [Models overview — Claude Platform Docs](https://platform.claude.com/docs/en/models/overview)
  - [OpenCode Console Models (Zen pricing)](https://opencode.ai/v2/docs/console/models/)
- Future sources: add a new file next to this one, e.g. `GPT_5.md`, using the same headings.