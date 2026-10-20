# Claude Haiku 3.5 — findings by GLM 5.3 Flash

- Source: Anthropic (`claude-3-5-haiku`)
- Date: 2026-10-19 (UTC)
- Overview and scoring methodology: `../../model-comparison.md`
- Cross-model signed log: `../../model-findings.md`

## Model card

- **Name:** Claude 3.5 Haiku (listed as Claude Haiku 3.5 on Zen)
- **Short description:** Anthropic's fastest and most compact 3.5-generation model (launched 2024-11-04), built for latency-sensitive chat, high-volume data processing, and lightweight coding sub-agents. It matched Claude 3 Opus on many benchmarks at launch but has since been largely superseded by Claude Haiku 4.5 (2025-10). Not a tier variant of Haiku 4.5 — a distinct prior-generation model.
- **Provider / access:** Anthropic API `claude-3-5-haiku` (Chat Completions / Messages API); Amazon Bedrock; Google Cloud Vertex AI; OpenCode Zen as a provider-specific entry (models.dev: `claude-3-5-haiku`, 200K/8,192, $0.80/$4.00) — **deprecated from Zen effective Feb 16, 2026** (OpenCode Zen deprecation table, re-verified 2026-10-19). AA also carries a deprecation banner (benchmarking limited to the default 10k-input workload).
- **Release / knowledge:** Released 2024-11-04; pricing revised December 2024; knowledge cutoff July 2024.
- **IDs:** `claude-3-5-haiku` (Anthropic API; state explicitly: no Zen Free ID exists — paid-only on Zen).
- **Context window:** 200K total; 8,192 max output (Anthropic docs overview table, models.dev row).
- **Modalities:** text in/out at launch, image input support added post-launch; no video/PDF input verified; reasoning (extended thinking) no; tool calls yes (computer, text editor, and bash tools from the 3.5 generation); structured outputs / JSON mode yes.
- **Pricing (as of 2026-10-11):** $0.80 in / $4.00 out per 1M (December 2024 revision); prompt caching up to 90% reduction; Message Batches API 50% reduction.
- **Architecture:** proprietary (Anthropic has not published parameter counts for the 3.5 Haiku generation).

### Raw benchmarks found

> Second-pass verification (2026-10-11): BenchLM has no page for this legacy model (404 on the canonical slug) — no new aggregator evidence has surfaced since the 2026-10-03 pass; the SentiSight/AA rows stand. Scores are carried, not moved.

> CORRECTION 2026-10-16: the 2026-10-11 pass recorded "BenchLM 404 — no page exists";
> the BenchLM 2026-10-17 refresh now carries 22 sourced rows (AA boards + the
> Anthropic model-card addendum) that materially revise the profile downward.

Agent / tool use:

- Tau2-Bench: **24.6%** (AA — added 2026-10-16; weak); GDPval-AA: **0.0%** (AA — very weak)
- Terminal-Bench / Tau3-Banking / Claw-Eval / Toolathon / MCP-Atlas: no verified public score found
- Tool support: computer tool (screenshot → mouse/keyboard actions), text editor tool, bash tool (Anthropic 3.5-generation tooling, per SentiSight summary of the model card addendum)

Reasoning / knowledge:

- GPQA Diamond: **40.8%** (AA) / **41.6%** (model card addendum) — CORRECTION: the prior pass had no GPQA row; this is far below the assumed mid-pack
- HLE: **3.6%** (AA-HLE — very weak); AA-LCR: **27.3%**; CritPt: **0.0%**
- Artificial Analysis Intelligence Index: **9 (estimated** — AA now marks the reading as an estimate with "independent evaluation forthcoming"; the 8.9 prior reading is superseded by the flagged-estimate figure) — legacy-model caveat
- MMLU-Pro: **65%** / MMLU: **80.3%** / BBH: **86.6%** / DROP: **83.1%** (model card addendum); AIME 2024: **5.3%**; MGSM: **85.6%**; IFEval: **85.9%** / AA-IFBench: **42.8%**
- AA-Omniscience: accuracy **13.2%**, hallucination rate **41.1%**

Coding:

- SWE-bench Verified: **40.6%** (Anthropic model card addendum; ahead of the original Claude 3.5 Sonnet and GPT-4o at launch — now corroborated by BenchLM)
- HumanEval: **88.1%** (model card addendum — added 2026-10-16)
- LiveCodeBench / SciCode / Vibe Code Bench / DeepSWE: no verified public score found

Long context:

- AA-LCR **27.3%** measured (added 2026-10-16 — weak); no MRCR/RULER value for the 200K window

Multimodal:

- AA-MMMU-Pro: **45.6%** (AA — added 2026-10-16; the weakest measured vision in this repo)

### Normalized scores (1–100)

> Recalculated 2026-10-16 on the newly surfaced 22-row BenchLM profile — the
> 2026-10-11 scores rested on a single AA reading (superseded) and no agentic data.

- **Tool use: 42/100.** CHANGED from 50 — the newly measured Tau2 24.6% and GDPval-AA 0.0% are weak; tool calling exists (computer/text-editor/bash) but with zero positive agentic evidence.
- **Reasoning: 42/100.** CHANGED from 55 — the newly measured GPQA 40.8–41.6%, HLE 3.6%, AA Index 8.9 (supersedes the "19") and AA-LCR 27.3% place it well below the mid band; BBH 86.6% and MMLU 80.3% show 2024-era competence only.
- **Context window: 70/100.** 200K total lands exactly at the 200K tier mark; the 8,192-token max output is a noted caveat (below the 64K norm); AA-LCR 27.3% is the only measured retrieval (weak).
- **Multimodal: 60/100.** CHANGED from 65 — image input confirmed, but the newly measured AA-MMMU-Pro 45.6% is the weakest vision score in this repo; docks the +image-in band to its floor.
- **Coding: 60/100.** CHANGED from 65 — SWE-bench Verified 40.6% stands (now BenchLM-corroborated) and HumanEval 88.1% is solid for 2024, but the surrounding weak profile caps it.
- **Cost efficiency: 85/100.** $0.80/$4.00 per 1M on paid pricing (no Zen Free ID exists), cheaper than frontier tiers ($5/$25 Opus 4.6) but well above the ~$0.10–$0.30 flash class; caching and batch discounts soften the gap.
- **Overall Score: 55/100.** CHANGED from 61 — mean of the five quality dims per `RULES.md` (Cost excluded): (42 + 42 + 70 + 60 + 60) / 5 = 274/5 = 54.8 → 55. Best fit: a legacy latency-critical fallback for high-volume structured work — for new projects, Haiku 5.5 or a current flash-class model is the better pick.

---

## Signature

- Provided by: **GLM 5.3 Flash (z-ai/glm-5.3-flash)** — 2026-10-19
- Method: public internet research, enrichment re-check 2026-10-19 (AA model page fetched live — Index now shown as "9, estimated" with an independent evaluation still forthcoming, plus a deprecation banner; OpenCode Zen deprecation table re-verified — Zen removal effective Feb 16, 2026; the 22-row BenchLM profile and model-card-addendum rows from the 2026-10-16 pass remain the evidence base). No evidence supports a further score change — all seven scores carried from the 2026-10-16 recalculation. Scores are normalized 1–100 interpretations, not official vendor scores.
- Future sources: add a new file next to this one, e.g. `GPT_5.md`, using the same headings.
