# Claude Fable 5.1 — findings by Qwen 4 Max

- Source: Anthropic/claude-fable-5.1
- Date: 2026-11-11 (UTC)
- Overview and scoring methodology: `../../model-comparison.md`
- Cross-model signed log: `../../model-findings.md`

## Model card

- **Name:** Claude Fable 5.1
- **Short description:** Anthropic's premium long-horizon reasoning/agentic flagship (Sep 2026), the first Fable update since Fable 5 (Jun 9). Same 1M window and $10/$50 base price as Fable 5, with a 75% cache-read cut and large agentic/science benchmark jumps. Now marked **legacy** — Fable 5.2 is the current Fable; Anthropic's own guidance starts most workloads on Opus 5.5 ($4/$20) and reserves Fable 5.1 for demanding reasoning and long-horizon agentic work where Opus 5.5 at higher effort falls short.
- **Provider / access:** Claude API `claude-fable-5-1`; Amazon Bedrock `anthropic.claude-fable-5-1`; Google Cloud (Google- and Anthropic-managed), Microsoft Foundry, Claude Platform on AWS; Claude Code, Claude Enterprise. Mythos 5.1 is the same underlying model with restricted access (Cyber Verification Program / Life Sciences Verification Program) — same specs and pricing, different safety filters.
- **Release / knowledge:** Released 2026-09-01; retirement not sooner than 2027-09-01. Reliable knowledge cutoff and training cutoff: June 2026.
- **IDs:** `claude-fable-5-1`, `anthropic.claude-fable-5-1`. No free ID.
- **Context window:** 1M tokens (1,048,576) at standard per-token pricing across the whole window — no long-context surcharge. Max output 128K (sync); Fable 5.1 is not on the 300K-output batch beta list (Opus/Sonnet/Haiku lines are).
- **Modalities:** Text and images in; text out. Thinking: adaptive, always on; default effort `high`; per-message effort changes without cache invalidation (beta); preserved thinking across model switches.
- **Pricing (as of 2026-11-11):** $10.00 in / $50.00 out per 1M; cache read $0.25 (2.5% of input — down 75% from Fable 5's $1.00); 5m cache write $12.50, 1h $20; Batch API 50% off ($5/$25). Anthropic: cache cut makes typical workloads ~25% cheaper and highly agentic workloads up to ~45% cheaper vs Fable 5 at identical base rates.
- **Architecture:** Proprietary; parameters undisclosed. Adaptive-thinking reasoning model. Safety: standard safeguards (Mythos 5.1 sibling carries the restricted deployment); joint Fable 5.1/Mythos 5.1 system card published.

### Raw benchmarks found

Agent / tool use:

- Terminal-Bench 4.0: **55.8%** (Anthropic launch table; Fable 5 was 42.0%; Mythos 5.1 60.9%; trails Opus 5.5's 66.4%)
- OSWorld 2.0 (partial): **77.9%** (Fable 5: 72.9%); OSWorld 2.1: **80.7%** (Anthropic's Opus 5.5 cross-table; vs Opus 5 74.0%)
- AutomationBench: **31.4%** (Fable 5: 17.1%; leads Opus 5 26.9% and GPT-5.6 Sol 28.8% in Anthropic's table)
- GDPval-AA v2 (raw): **1,853** (Fable 5: 1,723); GDPval-AA v2.1: **1,735 Elo** (Opus 5.5 cross-table; trails Opus 5.5 1,846) — version-labelled, not directly comparable
- Terminal-Bench-Science 0.1: **52.6%** — more than doubled from Fable 5's 24.7%; leads Opus 5 (29.0%) and GPT-5.6 Sol (22.4%)
- Real-world: Millennium investment firm credits Fable 5.1 with root-causing a rare system crash its engineers and other models failed to solve for years (9to5Mac); Venus surface mapping resolution improved from 10–20 km to 2–3 km. Protein-binder and GPU-speedup results Anthropic cited belong to Mythos 5.1, not Fable 5.1.

Reasoning / knowledge:

- Humanity's Last Exam (no tools): **60.9%** (Fable 5: 57.8%); with tools: **65.6%** (Opus 5.5 cross-table; trails Opus 5.5 67.7%)
- AA Intelligence Index **v4.1.1**: **65.7** — highest in OpenAI's Astra launch table (vs Opus 5 63.1, Astra 61.2, GPT-5.6 Sol 60.9); AA Sep 2 snapshot via Eigent: **66**. Later-v5 snapshots are a different scale — not compared.
- GPQA Diamond / CritPt: no verified public score found in the sources read

Coding:

- SWE-bench Pro: **81.2%** (Anthropic Opus 5.5 cross-table; trails Opus 5.5 89.9%)
- DeepSWE v1.1: **67.4%** (Anthropic + NeuralTrust Oct tables; trails Opus 5.5 74.2%, Astra 74.1%, Argon 77.9%)
- FrontierCode v1.1 Main: **50.3%** (vs Opus 5 48.0%, GPT-5.6 Sol 47.5%; trails Opus 5.5 54.4%)
- CursorBench 3.2.0: **73.4%** (Fable 5: 70.5%); CursorBench 4.0: **51.8%** (vs Opus 5 46.6%, Sol 41.7%) — distinct versions
- FrontierSWE v2: **56.3%** (NeuralTrust Oct; trails Astra 65.5%, Opus 5.5 62.3%)
- Vals Index: **65.8** (NeuralTrust Oct)
- SWE-bench Verified / LiveCodeBench: no verified public score found for this release

Long context:

- GraphWalks (256K–1M): **65.0%** (NeuralTrust Oct cross-table; trails Argon 84.2%, Astra 71.8%, Opus 5.5 66.8%)
- 1M window at flat standard pricing with $0.25 cache reads — the cheapest full-window economics among $10/$50 flagships (Astra doubles rates above 272K)

### Normalized scores (1–100)

- **Tool use: 93/100.** Long-horizon specialist: OSWorld 80.7% (2.1), AutomationBench 31.4% and TB-Science 52.6% lead the Anthropic table, GDPval v2 raw 1,853; capped by Terminal-Bench 4.0 55.8% trailing Opus 5.5 (66.4%) and its own restricted sibling Mythos 5.1 (60.9%).
- **Reasoning: 94/100.** AA v4.1.1 index leader (65.7), HLE 60.9% no-tools / 65.6% with tools, science-reasoning doubling; capped by HLE-with-tools and GDPval v2.1 trailing Opus 5.5 and no published GPQA/CritPt.
- **Context window: 96/100.** 1M tokens at flat standard pricing (no surcharge) with 128K output and $0.25 cache reads; capped by GraphWalks 65.0% (mid-pack) and no 300K-output batch option.
- **Multimodal: 72/100.** Text + image input, text output only; no audio/video input, no native image/audio generation — same modality envelope as Opus 5.5.
- **Coding: 90/100.** Strong science coding (TB-Science 52.6%) and solid SWE-bench Pro 81.2%; capped by across-the-board agentic-coding gaps to Opus 5.5 (SWE Pro 89.9%, DeepSWE 74.2%, FrontierCode 54.4%) — Anthropic itself points most coding workloads to Opus 5.5.
- **Cost efficiency: 42/100.** $10/$50 is Anthropic's premium tier, 2.5x Opus 5.5 which beats it on key agentic benchmarks at 60% lower price (VentureBeat); partially redeemed by the 75% cache-read cut ($0.25), 50% batch discount and no long-context surcharge.
- **Overall Score: 89.0/100.** Mean of the five quality dims (93+94+96+72+90)/5 = 89.0. Best-fit: demanding reasoning and long-horizon agentic/scientific work where Opus 5.5 at higher effort still falls short — per Anthropic's own positioning, not the default pick.

---

## Signature

- Provided by: **Qwen 4 Max (qwen4-max)** — 2026-11-11
- Method: public internet research (Anthropic platform docs + launch announcement cross-tables, corroborated by AY Automate's change analysis, VentureBeat, Eigent AA snapshots and NeuralTrust Oct tables); scores are normalized 1–100 interpretations, not official vendor scores. Benchmark versions explicitly labelled (OSWorld 2.0 partial vs 2.1, CursorBench 3.2.0 vs 4.0, GDPval v2 raw vs v2.1 Elo, AA v4.1.1 vs later snapshots); Mythos 5.1 results kept separate from Fable 5.1.
- Reference URLs:
  - [Claude Fable 5.1 overview — Anthropic platform docs](https://platform.claude.com/docs/en/models/fable-5-1/overview)
  - [Claude Fable 5.1 and Mythos 5.1 announcement — Anthropic](https://www.anthropic.com/claude-fable-and-mythos-5-1)
  - [Claude Fable 5.1 vs Fable 5: 8 Changes — AY Automate](https://www.ayautomate.com/blog/claude-fable-5-1-whats-new)
  - [Anthropic releases Claude Opus 5.5, beating Fable 5.1 on key agentic benchmarks — VentureBeat](https://venturebeat.com/technology/anthropic-releases-claude-opus-5-5-beating-fable-5-1-on-key-agentic-benchmarks-at-60-cheaper-api-price)
  - [Claude Fable 5.1 Benchmarks, Pricing & Context Window — llm-stats](https://llm-stats.com/models/claude-fable-5-1)
  - [Claude Fable 5.1 Release: Context and Pricing — kie.ai](https://kie.ai/blog/claude-fable-5-1-context-pricing-agentic-work)
  - [Gemini 4 Argon benchmarks & security (cross-vendor tables) — NeuralTrust](https://neuraltrust.ai/blog/gemini-4-argon)
- Future sources: add a new file next to this one, e.g. `GPT_5.md`, using the same headings.