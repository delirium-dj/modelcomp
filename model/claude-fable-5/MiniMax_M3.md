# Claude Fable 5 — findings by MiniMax M3

- Source: Anthropic (`anthropic/claude-fable-5`)
- Date: 2026-10-13 (UTC)
- Overview and scoring methodology: `../../model-comparison.md`
- Cross-model signed log: `../../model-findings.md`

## Model card

- **Name:** Claude Fable 5
- **Short description:** Anthropic's first broadly-available Mythos-class model (launched 9 June 2026) — the tier above Opus, built for long-horizon agentic work and software engineering. Legacy since Claude Fable 5.1 (1 Sept 2026). Fable 5 = Mythos 5 (same underlying model) with safety classifiers lifted for general release.
- **Provider / access:** Anthropic API (`claude-fable-5`); also OpenRouter as `anthropic/claude-fable-5`. Chat Completions API.
- **Release / knowledge:** Release 9 June 2026 (rolled out in stages).
- **IDs:** `anthropic/claude-fable-5`; no free ID.
- **Context window:** 1,000,000 total; 128,000 max output. Reported by Anthropic and OpenRouter listing.
- **Modalities:** Text, image in; text out. Reasoning: yes. Tool calls: yes. JSON mode: yes.
- **Pricing (as of 2026-10-13):** $10 input / $50 output per 1M tokens; cache read $1/MTok (90% off). Paid, no free tier.
- **Architecture:** Proprietary. Same underlying model as Claude Mythos 5; safety classifiers differentiate the two.

### Raw benchmarks found

Agent / tool use:

- Cognition FrontierCode eval (medium effort): **highest among frontier models at launch** (Anthropic, 9 June 2026).
- Slay the Spire long-horizon autonomy (persistent memory): **3× more often than Opus 4.8** reached the final act (Anthropic).
- Stripe 50M-line Ruby migration: completed codebase-wide migration in a single day (vs 2+ months for a team) — Stripe's own early-access test, cited in Anthropic announcement.
- Cursor early-access: "opened a class of long-horizon problems that were out of reach for earlier models" (Anthropic).
- Vision-only Pokémon FireRed completion: minimal harness required (Anthropic).
- Customer benchmark: "broke 90% on a core analytics benchmark of long-running analytical tasks, 10-point jump over Opus" (early-access partner, Anthropic).
- Vals.ai Claude Fable 5.1 retrospective (1 Sept 2026) — Fable 5 baseline **66.04%** on Vals suite (vs ~70% for Fable 5.1).
- Toolathlon / MCP-Atlas / SWE Atlas: no verified public score found for this exact model/ID.

Reasoning / knowledge:

- Hebbia Finance Benchmark: **highest score of any model at launch** (Anthropic, 9 June 2026). Document-based reasoning, chart and table interpretation, problem solving.
- Frontier physics research (early-access partner): reached results in **36 hours vs GPT-5.5's 4 days**, using 1/3 the reasoning tokens.
- Self-review at highest effort: Fable 5 reflects on and validates its own work (Anthropic).
- AA Intelligence Index: no verified public score found for this exact model/ID.
- GPQA Diamond / HLE / LCR / MLCR / CritPt: no verified public score found for this exact model/ID.
- Omniscience Accuracy / Hallucination Rate: no verified public score found for this exact model/ID.

Coding:

- SWE-bench / FrontierCode: Fable 5 leads among frontier models even at *medium* effort (Anthropic).
- Multi-file refactor capability: complex refactors handed off with less supervision.
- Self-improving agent pipelines: less frequent human check-ins required.
- SWE-bench Verified / SWE-Pro: no verified public score found for this exact model/ID.
- LiveCodeBench / SciCode / Vibe Code Bench / DeepSWE: no verified public score found for this exact model/ID.

Long context:

- Persistent memory benefit on Slay the Spire: 3× reach-to-end vs Opus 4.8.
- 1M-token context window with persistent file-based memory advantage.
- MRCR / RULER / GraphWalks at window length: no long-context retrieval reported.

### Normalized scores (1–100)

- **Tool use: 92/100.** Leads frontier models on FrontierCode medium effort. 3× Opus 4.8 on Slay the Spire with persistent memory. Stripe 50M-line Ruby migration is concrete evidence. Capped because detailed Toolathlon / MCP-Atlas scores were not published.
- **Reasoning: 93/100.** Highest on Hebbia Finance; 36 hr vs GPT-5.5's 4 days on frontier physics with 1/3 the reasoning tokens. Self-review at high effort. Capped because HLE/GPQA scores were not separately published.
- **Context window: 95/100.** 1M total / 128K output. Persistent memory gives 3× reach-to-end on long-horizon tasks. Capped at 95 (vs Fable 5.1/Mythos 5.1 at 96) because no public MRCR/RULER numbers at 500K-1M.
- **Multimodal: 78/100.** State-of-the-art vision at launch: rebuild apps from screenshots, SOTA on vision benchmarks. Compressed ceiling because input is text+image only (no audio/video).
- **Coding: 93/100.** Leads on FrontierCode medium effort and SWE-bench. 3× Opus 4.8 on sustained long-horizon autonomy. Capped because SWE-bench Verified / SWE-Pro head-to-head numbers were not published.
- **Cost efficiency: 38/100.** $10/$50 per 1M is 2× Opus 4.8 ($5/$25), 2× Sonnet 5 ($5/$25). Cache reads cut input 90%. Cost-effective for long-horizon but pricey for high-volume.
- **Overall Score: 90/100.** Half-up mean of Tool 92, Reasoning 93, Context 95, Multimodal 78, Coding 93 = 451/5 = 90.2 → half-up 90. Fable 5 = Mythos 5 with safety classifiers lifted; for high-stakes long-horizon agentic work, this is the cohort's strongest available model at launch, but premium-priced.

---

## Signature

- Provided by: **MiniMax M3 (MiniMax-M3)** — 2026-10-13
- Method: public internet research (Anthropic launch, OpenRouter, Vals.ai, Cosmic JS developer guide, peer findings cross-check). Scores are normalized 1–100 interpretations, not official vendor scores.
- Future sources: add a new file next to this one, e.g. `Claude_Fable_5_Anthropic.md`, using the same headings.
