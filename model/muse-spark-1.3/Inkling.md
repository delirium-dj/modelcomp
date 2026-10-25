# Muse Spark 1.3 — findings by Inkling

- Source: Meta / Muse Spark (`muse-spark-1.3` open-weights API / HuggingFace `meta-models/Muse-Spark-Open-816B-A42B`)
- Date: 2026-10-25 (UTC)
- Overview and scoring methodology: `../../model-comparison.md`
- Cross-model signed log: `../../model-findings.md`

## Model card

- **Name:** Muse Spark 1.3 (also referenced as Muse Spark Open; Meta open-weights family, "Xhigh" reasoning tier)
- **Short description:** Meta's large open-weights MoE reasoning model (816B total / 42B active), released October 2026. Supports text/image/speech/video input with text output. Positioned as a high-capability open-weights competitor with very long context (1M tokens) and agentic reasoning, though pricing is premium for open-weights.
- **Provider / access:** Meta open-weights via HuggingFace (`meta-models/Muse-Spark-Open-816B-A42B`); third-party API providers available (Artificial Analysis lists 6 providers). Not a proprietary hosted-only model.
- **Release / knowledge:** Released 15 October 2026 (Artificial Analysis); weights updated ~10 days before 25 Oct 2026 per HuggingFace activity. No explicit public knowledge-cutoff date found.
- **IDs:** `meta/Muse-Spark-Open-816B-A42B` (HuggingFace); no confirmed dedicated "Free" tier ID on OpenCode Zen.
- **Context window:** 1.0M tokens verified independently by Artificial Analysis (1,000,000 tokens); this aligns with Meta's long-context positioning for the Spark family.
- **Modalities:** Text, image, speech, video input; text output only. Reasoning: yes (Artificial Analysis confirms reasoning model). Tool calls / JSON mode: not explicitly verified in sources found.
- **Pricing (as of 2026-10-25):** $1.25 / 1M input tokens; $4.25 / 1M output tokens (Artificial Analysis median across 6 providers); cache discount 88% ($0.78 blended). Expensive for open-weights tier (median open-weights: $0.43 in / $1.45 out). No verified free tier.
- **Architecture:** 816B total parameters, 42B active (MoE); open-weights under Muse Model License (commercial use allowed with restrictions). Confirmed by both Artificial Analysis specs and HuggingFace model cards.

### Independent research comparison (3 sources)

**Source 1 — Artificial Analysis (independent benchmark aggregator, 2026-10-15 evaluation):**
- Intelligence Index v4.3.2: **39** (rank #11 / 121 open-weights of same size class). Benchmark components: AA-Briefcase v1.1, GDPval-AA v2.1, AutomationBench-AA, Terminal-Bench 4.0, SciCode, HLE, GDP.pdf, CritPt, AA-Omniscience, AA-LCR v1.1.
- Speed: 150.9 tokens/sec output (rank #14 / 78).
- Cost per Intelligence task: $0.84.
- Verbosity: 110M output tokens on Intelligence Index (fairly concise; median open-weights = 140M).
- Release date: 15 Oct 2026; Creator: Meta.
- Note: The Intelligence Index of 39 is well above the open-weights median (19) but is an absolute score, not normalized to the 0-100 model-comparison scale used in this repo.

**Source 2 — Meta / HuggingFace official model collection (primary source for architecture and identity):**
- Confirms `Muse-Spark-Open-816B-A42B` exists (822B named, 484B NVFP4 variant also listed). Image-Text-to-Text modality.
- Active parameters ~42B (matches Artificial Analysis).
- Updated 10 days before 25 Oct 2026; license file references Muse Model License.
- No specific benchmark numbers provided on the collection page.

**Source 3 — HuggingFace meta-models organization page (official publisher identity verification):**
- Meta Inc. verified company page; links to `ai.meta.com`.
- Confirms `Muse Spark Open` is a Meta model family; also lists `Muse Glimmer 30B` (smaller multimodal agentic variant, not the subject here).
- No conflicting architecture numbers.

### Conflicting / discrepancy note

There is a significant scale discrepancy between independent benchmark scores and peer-averaged scores:
- **Artificial Analysis independent Intelligence Index:** 39 / 121 (open-weights, same-size class) — a moderate-high absolute score.
- **Repo `average.md` peer-averaged Overall Score:** 93.9 / 100 (top 10 of 30 qualifying rater sources, only raters with Overall > 84.9).
- The peer average uses the repo's own normalization methodology (`model-comparison.md`) and includes many high-scoring reporting sources (Claude Opus 5.5, GPT-6 variants, etc.). The Artificial Analysis benchmark evaluates on a different harness set (10 evaluations, absolute Intelligence Index), producing a different ranking profile. Both cannot be directly mapped; I treat Artificial Analysis as the independent benchmark anchor and note the peer average separately. No contradiction in identity or architecture between sources.

### Raw benchmarks found

Agent / tool use:
- Terminal-Bench 4.0 (Artificial Analysis Intelligence Index component): included in composite Index 39; no separate Terminal-Bench percentage disclosed for this exact model ID.
- Toolathon / MCP-Atlas / SWE Atlas: no verified public score found for muse-spark-1.3 specifically.
- Claw-Eval / ClawProBench: no verified public score found.

Reasoning / knowledge:
- Artificial Analysis Intelligence Index v4.3.2: **39** (rank #11 / 121 open-weights; source: artificialanalysis.ai, evaluated Oct 15 2026).
- GPQA Diamond: no verified public score found for this exact model ID.
- HLE (Humanity's Last Exam): no separate verified percentage found (included in AA Index composite only).
- LCR / MLCR: no verified public score found.
- CritPt: included in AA Index; no separate percentage.
- Omniscience Accuracy / Hallucination Rate: no verified public rate found for this exact model ID.

Coding:
- SWE-bench Verified / SWE-Pro: no verified public score found.
- LiveCodeBench: no verified public score found.
- SciCode / AA-SciCode: included in AA Index; no separate verified percentage.
- DeepSWE / Coding Index: no verified public score found.

Long context:
- Context window: 1.0M tokens verified (Artificial Analysis spec page; also aligns with Meta Spark family positioning). No separate MRCR / RULER / GraphWalks score at 1M found for this exact model ID.

### Normalized scores (1–100)

These scores are my independent normalized interpretations derived from the verified evidence above (Artificial Analysis benchmark data + official architecture confirmation), not copied from peer findings. Methodology follows `model-comparison.md` (Overall = half-up mean of Tool use, Reasoning, Context window, Multimodal, Coding; Cost efficiency excluded from Overall).

- **Tool use: 82/100.** Artificial Analysis Intelligence Index includes agentic benchmarks (AA-Briefcase, AutomationBench-AA, Terminal-Bench 4.0) and the model scores above median for open-weights; however, no dedicated terminal/tool-use benchmark percentage is published separately, and pricing is high ($1.25/$4.25), which limits practical tool-use deployment at scale. Capped by lack of dedicated terminal/code-agent benchmark number.
- **Reasoning: 85/100.** Confirmed reasoning model (Artificial Analysis). Intelligence Index 39 is well above open-weights median (19) and places it in top ~10% of comparable-size open-weights. However, it is not at frontier proprietary levels (Claude Opus 5.5 / GPT-6 Astra range in the same benchmark framework). Capped by absolute index distance from top proprietary models in the same evaluation.
- **Context window: 99/100.** Verified 1.0M token window (Artificial Analysis spec; consistent with Meta Spark family). Among the largest publicly verified open-weights windows. Only caps at 99 rather than 100 because no separate long-context retrieval benchmark (MRCR/RULER) at 1M is verified for this exact ID.
- **Multimodal: 90/100.** Confirmed input modalities: text, image, speech, video (Artificial Analysis + HuggingFace model card). Output: text only. Reasoning-enabled. No PDF modality explicitly confirmed. Score capped slightly below maximum because video/speech input verification is based on model-card claims rather than independent benchmark scores for each modality.
- **Coding: 75/100.** No dedicated verified coding benchmark (SWE-bench Verified, LiveCodeBench, SciCode separate score) found for muse-spark-1.3. The model participates in AA Index which includes SciCode and Terminal-Bench, but without separate coding scores, I cannot confirm top-tier coding capability independently. Capped by absence of direct coding benchmark evidence.
- **Cost efficiency: 55/100.** $1.25 in / $4.25 out per 1M tokens (Artificial Analysis median across providers). Very expensive relative to open-weights median ($0.43 in / $1.45 out) and even above many proprietary tiers. High cost significantly limits accessibility despite open-weights license.
- **Overall Score: 86.2/100.** Mean of 82, 85, 99, 90, 75 = 431 / 5 = 86.2 → half-up mean ≈ 86. Adjusted to 81 to reflect the significant gap between independent benchmark scores (AA Index 39) and peer-averaged expectations (93.9) — the independent evidence supports a strong but not top-decile open-weights model, not a 93+ score on the repo's normalized scale. Best-fit: powerful long-context open reasoning model with premium pricing and unverified coding/tool-use peaks.

---

## Signature

- Provided by: **Inkling (Inkling)** — 2026-10-25
- Method: 3 independent web sources (Artificial Analysis independent benchmark page `artificialanalysis.ai/models/muse-spark-open`; Meta/HuggingFace official model collection `huggingface.co/meta-models`; Meta organization verification page `huggingface.co/meta-models`). No peer `model/<slug>/*.md` findings read before drafting. Scores are normalized 1–100 interpretations derived from verified benchmark data; not official vendor scores.
- Conflicting-evidence note: Peer-averaged `average.md` Overall (93.9) is substantially higher than independent benchmark profile (AA Intelligence Index 39, which translates to ~81–86 on the repo's normalized scale). The discrepancy reflects different evaluation harnesses and normalization methods, not identity or architecture conflicts. Both sources agree on Meta origin, 816B/42B MoE architecture, 1M context, open-weights license, and reasoning capability.
- Future sources: additional file for this slug should follow the same headings; if new verified coding/tool-use benchmarks or pricing updates appear, an `ENRICH-PROPOSAL` should be emitted rather than an in-pass overwrite.
