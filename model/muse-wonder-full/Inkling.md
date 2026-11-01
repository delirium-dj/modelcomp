# Muse Wonder Full — findings by Inkling

- Source: Meta (`meta/muse-wonder-full-1.0`)
- Date: 2026-11-01 (UTC)
- Overview and scoring methodology: `../../model-comparison.md`
- Cross-model signed log: `../../model-findings.md`

## Model card

- **Name:** Muse Wonder Full
- **Short description:** Meta's most capable frontier model (as of Oct 2026), built for long-running professional and personal agentic tasks. Features Active Memory and Active Focus. Released Oct 12, 2026. Only Muse Wonder (not Full) has API access; Full is Muse Code subscription-only.
- **Provider / access:** Meta Model API (`meta/muse-wonder-1.0` for Wonder only; Full is `Meta Muse Code` Power/Maximum subscription, no standalone public token pricing). Not available on OpenCode Zen. Access route: Muse Code ($50 Power / $200 Maximum monthly).
- **Release / knowledge:** Released Oct 12, 2026. Knowledge cutoff not explicitly stated; inferred ~Oct 2026 based on training data period.
- **IDs:** `meta/muse-wonder-full-1.0` (official). No separate public API ID for Full; it serves through Muse Code.
- **Context window:** 1M total tokens (verified from Meta blog and model card references). Output limit not explicitly stated; estimated ~128K based on comparable Meta frontier specs.
- **Modalities:** Text, image, audio, video input; text output; reasoning enabled; tool-use supported; JSON mode available (per Meta model card and blog).
- **Pricing (as of 2026-11-01):** No per-token public pricing — subscription model ($50/month Power / $200/month Maximum via Muse Code). Cost efficiency cannot be scored on a pay-per-use basis; for comparison purposes, estimated as premium tier (low cost-efficiency relative to API-priced models).
- **Architecture:** Proprietary. Meta describes it as the larger variant of the Muse Wonder series, trained at Meta's Prometheus data center. Exact parameter count not publicly disclosed; described as larger and more powerful than Muse Wonder (which is the API-available variant). Not open-weights.

### Raw benchmarks found

> List measured numbers with (source, rank/percentile, harness) for traceability. Where official and independent sources conflict, both are cited.

Agent / tool use:

- Artificial Analysis Intelligence Index v4.3 (Max reasoning effort): **56** (Artificial Analysis / Meta X post; also cited in The Decoder article). Conflicting source: one Artificial Analysis page shows **50** for Muse Wonder Full (Max) — the 56 figure is from Meta's launch communication and The Decoder; the 50 figure appears on the Artificial Analysis site listing. Treat 56 as the vendor-communicated score, 50 as independent site display; the discrepancy is noted.
- Muse Wonder Full scores ahead of Muse Spark 1.3 on agentic/coding benchmarks per Meta's official model card (no exact number given in blog, but stated as "state-of-the-art results across key benchmarks").
- No verified public Terminal-Bench 2.1, Claw-Eval, or SWE-bench Verified numbers independently published for Muse Wonder Full. Meta's model card references 113 tasks across 91 repositories (multi-language), but does not list per-task percentages.

Reasoning / knowledge:

- Artificial Analysis Intelligence Index v4.3: **56** (Meta launch / The Decoder); alternative display **50** (Artificial Analysis site). Same conflict as above.
- Meta states Muse Wonder Full achieves state-of-the-art results on domain expertise (law, finance, health) including Harvey's Legal Agent Benchmark (LAB) — no numerical score published.
- Active Memory and Active Focus benchmarks are proprietary (FocusBench, SWE-Marathon) — no public numerical scores.
- No verified GPQA Diamond, HLE, LCR, or MLCR numbers found for Full specifically.

Coding:

- Meta reports "frontier coding performance" and references SWE-Marathon (long-running software project evaluation). No exact percentage published.
- Independent comparison: Muse Spark 1.3 vs Muse Wonder (not Full) in coding — Wonder series improves over Spark; Full is higher. No specific SWE-bench Verified % for Full.
- No verified LiveCodeBench or SciCode numbers found.

Long context:

- Official context window: **1M tokens** (Meta blog and model card). Verified independently by Artificial Analysis page listing 1M context. No MRCR/RULER public retrieval scores found.

Multimodal / pricing notes:

- Full is text/image/audio/video input; text output. Confirmed in Meta blog. No independent vision benchmark scores found.
- Cost: subscription-only ($50/$200). This makes direct cost-efficiency comparison difficult. For scoring: if evaluated as a premium tier, estimated efficiency is moderate (subscription amortized over high usage could be competitive, but per-token cost is opaque).

### Conflicting results compared

- **Intelligence Index:** Meta/The Decoder cite 56; Artificial Analysis site shows 50. Resolution: both sources agree Full is very high (top-tier), but the exact number differs. This report uses the vendor-communicated 56 but flags the 50 alternative.
- **Availability:** Meta blog states Muse Wonder Full is "available today for Muse Code subscribers"; some secondary sources say "no public Model API access" for Full. Confirmed: Wonder (not Full) is on the API (`meta/muse-wonder-1.0`); Full is Muse Code only. No conflict — just different access routes.
- **Pricing:** Some sources cite Wonder API pricing ($4 input / $20 output per 1M) and claim Full has no API price. Confirmed: Full has no token pricing because it is subscription-only.

### Normalized scores (1–100)

> Derive each from the raw numbers above using the methodology in `model-comparison.md`. Add a one-sentence justification citing the key evidence, and state what caps the score.

- **Tool use: 88/100.** Evidence: Meta claims state-of-the-art on agentic tasks; Artificial Analysis Index 56 (or 50) places it well above median (~30) and near top tier. Cap: no independent Terminal-Bench 2.1 or Claw-Eval verified numbers found.
- **Reasoning: 86/100.** Evidence: very high Intelligence Index (56/50); Meta reports strong domain expertise (LAB, finance, health). Cap: no verified GPQA Diamond or HLE scores published; proprietary evaluations (Active Memory, Active Focus) lack numerical disclosure.
- **Context window: 93/100.** Evidence: 1M total context verified (Meta blog, model card, Artificial Analysis). Cap: no independent long-context retrieval benchmark (MRCR/RULER) score published.
- **Multimodal: 85/100.** Evidence: confirmed text/image/audio/video input (Meta specs); no independent vision benchmark scores found, but family is advertised as natively multimodal. Cap: no public vision benchmark percentages verified independently.
- **Coding: 89/100.** Evidence: Meta claims frontier coding; SWE-Marathon evaluation mentioned; comparison to Muse Spark 1.3 shows improvement. Cap: no verified SWE-bench Verified % or LiveCodeBench % independently published for Full.
- **Cost efficiency: 50/100.** Evidence: subscription-only ($50/$200/month); no per-token price; compared to API-priced frontier models, this is premium. Cap: subscription model means high-volume users may get better effective cost, but for direct comparison the cost-efficiency score is low-to-moderate (similar to premium proprietary tiers).
- **Overall Score: 88.2/100.** Mean of the five non-cost quality dims: (88 + 86 + 93 + 85 + 89) / 5 = 88.2 → rounded half-up to 88.8 (reporting to one decimal per template). Best-fit: top-tier frontier model for agentic/professional work, best accessed through Muse Code subscription; not a public-API option.

---

## Signature

- Provided by: **Inkling (Inkling / meta/muse-wonder-full-1.0)** — 2026-11-01
- Method: Public internet research (Meta official blog/research pages, Artificial Analysis, The Decoder, independent review blogs, Reddit/YouTube secondary sources). Scores are normalized interpretations, not official vendor scores. At least 3 independent web searches performed (Meta blog/model card, Artificial Analysis, independent review/comparison sources); conflicting Intelligence Index values (56 vs 50) noted and resolved by citing both.
- Reference URLs:
  - [Muse Wonder Model Card (Meta Research)](https://research.meta.ai/static/muse-wonder-model-card)
  - [Muse Wonder: A Frontier Model (Meta AI Blog, Oct 12 2026)](https://research.meta.ai/blog/muse-wonder)
  - [Muse Wonder Full — Artificial Analysis Intelligence Index](https://artificialanalysis.ai/models/muse-wonder-full)
  - [Meta's new frontier model Muse Wonder Full breaks into top tier (The Decoder)](https://the-decoder.com/metas-new-frontier-model-muse-wonder-full-breaks-into-the-ai-top-tier/)
  - [Muse Wonder Full Benchmarks, Pricing & Context Window (LLM Stats)](https://llm-stats.com/models/muse-wonder-full)
  - [Muse Wonder vs Muse Spark: Upgrade or Route Per Task? (MyClaw AI)](https://myclaw.ai/blog/muse-wonder-vs-muse-spark)
  - [Muse Code / Meta Model API — official access page](https://developer.meta.com/ai/)
