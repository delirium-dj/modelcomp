# GLM-5.3-FlashX — findings by GLM 5.3 Flash

- Source: Z.ai (`glm-5.3-flashx`)
- Date: 2026-11-05 (UTC)
- Overview and scoring methodology: `../../model-comparison.md`
- Cross-model signed log: `../../model-findings.md`

> Re-researched 2026-11-05 (prior passes 2026-10-06→10-16): FlashX still publishes **no
> benchmark set of its own** (BenchLM 404s the alias; no FlashX-labeled independent eval
> exists), so rows transfer from GLM-5.3-Flash via the vendor's same-weights statement —
> and that sibling file was re-researched today with fresh web evidence (AA v5.0.1 rows:
> HLE-Diamond 18%, Omniscience 1, Index chain 57→42→28; Vals Vibe 30.8%; OSWorld 59.1%
> recovered). Reasoning 80→79, Coding 87→86; Overall holds at 87. Web-search provider was
> returning HTTP 402 during this pass, so FlashX-specific pricing was not re-verified.

## Model card

- **Name:** GLM-5.3-FlashX
- **Short description:** High-speed serving variant of GLM-5.3-Flash from Z.ai (Zhipu AI) — identical weights and capabilities as GLM-5.3-Flash, served at roughly 4x speed (~200 tokens/s). Explicitly a variant of the `glm-5.3-flash` entry, not new weights; use it when Flash-class multimodal quality is needed at lower latency. (See `../glm-5.3-flash/GLM_5.3_Flash.md` for this pass's fresh same-weights evidence.)
- **Provider / access:** Z.ai API, Chat Completions (model ID `glm-5.3-flashx`). Also served via Vercel AI Gateway (~200 tok/s), OpenRouter, Merge Gateway, CometAPI, and AIHubMix. (also recorded: `z-ai/glm-5.3-flashx`)
- **Release / knowledge:** live on the Z.ai API 2026-09-17/18; knowledge cutoff not separately published — same weights (and thus same knowledge) as GLM-5.3-Flash, released 2026-08-26.
- **IDs:** `zai/glm-5.3-flashx` (Z.ai native). No OpenCode Zen ID verified — cost is scored on paid pricing. (also recorded: `z-ai/glm-5.3-flashx`)
- **Context window:** 1,048,576 tokens (1M) total, ~128K max output (Z.ai developer docs for the GLM-5.3 family; the shared-weights BenchLM row concurs at 1M).
- **Modalities:** text + image + video in (inherits GLM-5.3-Flash's native multimodality), text out; explicit reasoning mode; tool calls supported; JSON mode not separately verified.
- **Pricing (as of 2026-11-05):** $0.37 / 1M input, $1.25 / 1M output (Z.ai docs pricing table as verified 2026-10-11; **not re-verified this pass due to the search outage** — treat as unchanged-until-checked). Sits between GLM-5.3-Flash ($0.15/$0.50) and full GLM-5.3 ($1.40/$4.40). Note: OpenRouter's dynamically repriced Flash-family routes swung 3–6x during late October (see the glm-5.3-flash file) — aggregator snapshots are not list prices. (earlier pass also recorded: FlashX $0.37/$1.25 per Mtok (cache read $0.07) — vs base Flash $0.05/$0.18 list (OpenRouter medians lower): the price premium buys speed, not intelligence)
- **Architecture:** same weights as GLM-5.3-Flash (vendor-stated: "same model weights and capabilities, optimized for fast inference"); ~320B total / ~18B active MoE, open weights with an NVFP4 quantized release published ~2026-09-09 (third-party trackers).

### Raw benchmarks found

> FlashX publishes no separate benchmark set — Z.ai documents it as the same weights as GLM-5.3-Flash, so the rows below are the GLM-5.3-Flash scores **as re-verified 2026-11-05** (fresh web research in the sibling file) and they transfer to FlashX by the vendor statement. No FlashX-specific independent eval exists.

Agent / tool use:

- Terminal-Bench 2.1: **84.3%** (vendor; AA independent corroborates at 84.3%); Vals independent: **62.9%** (wide vendor-vs-independent gap — unchanged)
- Toolathlon-Verified: **78.4%** (vendor, #1/11 in its set); GDPval-AA: **1773 Elo** (vendor via AA)
- AA Terminal-Bench 4.0: **32.8%** / Vals TB4.0 **37.4%** (two independent readings of the shared weights)
- OSWorld 2.0: **59.1%** (vendor launch table — recovered in today's sibling-file research)
- AA AutomationBench-AA: **60.4%** (vendor harness 48.8% — version difference, both cited); AA ITBench 51.2%; AA Tau3-Banking 47.2%; AA-Briefcase 1454 Elo; AA EnterpriseOps-Gym 33.2%
- Agents' Last Exam: **26.3%** (vendor); Cyber rows (NEW via the shared-weights re-research): CyberGym-E2E-AA 74.0%, AA Cyber Index 49.9%, CWE-Bench-AA 55.8%, DeepsecBench-AA 19.9%
- Vals: HLAB-Vals-1.1 10.4% (weak); SkillsBench 40.2%; SRE Bench 0.8%; ProgramBench 0.0%; Tax Agent 31.6%; Finance Agent v2.1 60.6%
- Claw-Eval / MCP-Atlas: no verified public score found

Reasoning / knowledge:

- AA-GPQA Diamond: **91.2%** (AA) / **86.4%** (Vals) / 75.2% (llm-stats non-thinking) — three-reading bracket
- HLE: **55.3%** with tools (vendor) / AA-HLE **39.9%** (no tools) / **AA HLE-Diamond 18%** (v5.0.1 — NEW, much harder subset)
- **AA-Omniscience v1.1 index: 1** (v5.0.1 — NEW, near-zero)
- Artificial Analysis Intelligence Index version chain: **57** (v4.1.1 launch) → **41.8** (v4.3-era board, Oct 10) → **28** (v5.0.1, above the 23 median) — rescalings documented, not averaged
- MMLU-Pro: **86.1%** (Vals); AA-LCR v1.1: **80.0%**; MLCR-AA 51.1%; CritPt 15.4% / CritPt v2 hard 25%; FrontierMath v2 55.8% / T4 17.1%
- BenchLM overall (shared weights): **58.26, #56 of 1008** (Nov 4 refresh; drifts from 57.36/#55/889); Vals Index 50.9%; LLMBenchmark #44 of 112 (the GLM-5.3-Flash alias page)

Coding:

- SWE-bench (Vals): **92.0%** (independent, strong); LiveCodeBench (Vals): **80.5%**
- Vibe Code Bench v1.1 (Vals): **30.8%** (NEW — weak, vs frontier peers at 76–90)
- DeepSWE v1.1: **63.4%** (vendor, beats Opus 4.8's 58.0); AA-SciCode 51.6%; FrontierSWE v2 18.1% (Proximal, weak); NL2Repo 56.3% (1M ctx); OpenHarmony 57.3%; Code Migration 51.6%; IOI 52.5% (Vals)
- SWE-bench Verified / SWE-Pro: no verified public score found

Long context:

- AA-LCR v1.1: **80.0%**; MRCR/RULER at window length: no verified public score found

Multimodal:

- CharXiv: **89.4%**; MMVU (video): **80.5%**; Chartography (tools): **78.0%**; OfficeQA Pro: **62.4%** (vendor rows); Design Arena Website: **1278**

Speed / other:

- Generation speed: up to ~**200 tokens/s** (Z.ai docs; Vercel AI Gateway) — the reason this variant exists; the sibling standard-Flash route measures 60–71 tok/s with a 24.7-min-per-task AA profile

### Normalized scores (1–100)

- **Tool use: 88/100.** Unchanged — TB2.1 84.3% (double-confirmed), Toolathlon 78.4%, GDPval 1773 and the recovered OSWorld 59.1% hold the band; the Vals TB2.1 62.9% gap, AA TB4.0 32.8–37.4% and the 24.7-min/task standard-Flash serving profile cap it.
- **Reasoning: 79/100.** CHANGED from 80 — the fresh v5.0.1 rows on the shared weights (HLE-Diamond 18%, Omniscience index 1, Index chain ending at 28) trim the band GPQA 86.4–91.2% and LCR 80.0% had built; same evidence, same dock as the sibling file's 85→83 relative to its higher anchor.
- **Context window: 95/100.** Unchanged — 1M (1,048,576) with ~128K output; AA-LCR 80.0% solid; no retrieval-at-length score to reach higher.
- **Multimodal: 85/100.** Unchanged — native text+image+video in with CharXiv 89.4 / MMVU 80.5; no audio input, text-only output.
- **Coding: 86/100.** CHANGED from 87 — the Vibe Code Bench 30.8% row (Vals, shared weights) joins FrontierSWE v2 18.1% on the debit side against Vals SWE-bench 92.0%, LCB 80.5% and DeepSWE 63.4%.
- **Cost efficiency: 93/100.** Unchanged pending verification — $0.37/$1.25 is cheaper than the ~92 reference and the ~200 tok/s serving removes the latency penalty; not raised because the standard Flash remains 2.5x cheaper and this pass could not re-verify the Z.ai rate card.
- **Overall Score: 87/100.** (88 + 79 + 95 + 85 + 86) / 5 = 433/5 = 86.6 → 87 (unchanged). Best-fit: the same multimodal agent/coder brain as GLM-5.3-Flash at ~200 tok/s — pick it over standard Flash when wall-clock latency or throughput-per-dollar matters, and over full GLM-5.3 when budget matters more than peak reasoning; re-check the Z.ai rate card before committing spend.

---

## Signature

- Provided by: **GLM 5.3 Flash (z.ai/glm-5.3-flash)** — 2026-11-05 (re-research pass; prior 2026-10-16)
- Method: public internet re-research — **the web-search provider returned HTTP 402 throughout this pass, so no FlashX-specific searches succeeded**; the update therefore transfers the same-weights GLM-5.3-Flash evidence re-verified today with 3 successful searches in the sibling file (`../glm-5.3-flash/GLM_5.3_Flash.md`), per the vendor's same-weights statement that this file has relied on since the 2026-10-06 pass (BenchLM 404s the FlashX alias; no FlashX-labeled independent eval exists); FlashX pricing flagged unverified-this-pass; scores are normalized 1–100 interpretations, not official vendor scores.
- Future sources: add a new file next to this one, e.g. `GPT_5.md`, using the same headings.

---

## Archived research pass — `GLM_5.3_Flash.md.excluded` (merged 2026-11-12 — own-twin retirement)

> Merged from this folder's `GLM_5.3_Flash.md.excluded` when the active scored report above made the
> twin redundant (own-twin retirement, RULES.md § Research rules). The model card, raw benchmarks,
> normalized scores and signature above remain authoritative — the archived model card was folded
> into the active model card above; the content below is preserved research history, not judged data.

## GLM 5.3 Flash X — findings by GLM 5.3 Flash (SELF-EXCLUDED — no verified data for this exact ID)

- Source: Z.ai — no vendor ID `GLM-5.3-Flash-X` found; the name resolves to `GLM-5.3-FlashX` (`z-ai/glm-5.3-flashx`)
- Archived date: 2026-10-30 (UTC)
- Overview and scoring methodology: `../../model-comparison.md`
- Cross-model signed log: `../../model-findings.md`

> SELF-EXCLUSION: zero verified public benchmark numbers were found for this exact
> model ID — the hyphenated "Flash-X" spelling does not exist as a vendor route,
> and the model it resolves to (GLM-5.3-FlashX) has no separately published
> benchmark run. Per the template's mandatory self-exclusion rule this file is
> saved as `.md.excluded` (notes only; any scores inside are ignored) instead of
> a scored `.md`.

> Archived model card omitted — own-twin consolidation 2026-11-12.
> No material conflict remained (the archived remark was a pricing-tier or non-numeric note) — the active
> values stand. Archived pricing detail with figures absent from the active value was appended to the active
> Pricing row. Safe unions applied: IDs +1; Provider +1. Every other archived field value was an older or
> vaguer duplicate of the active card above.

#### Identity findings (2026-10-30, five independent searches)

- **Vendor surfaces:** docs.z.ai model guide is titled "GLM-5.3-Flash/FlashX" and describes FlashX as the high-speed variant; Z.ai release notes list no "Flash-X". OpenRouter's catalog has `z-ai/glm-5.3-flashx` (no hyphen). Hugging Face hosts `zai-org/GLM-5.3-Flash` (FlashX has no separate weights repo — same weights).
- **Third-party trackers:** ZenMux, Command Code, orcarouter and OpenRouter comparisons all use the unhyphenated `flashx` form; none lists a hyphenated variant.
- **Benchmarks:** GLM-5.3-FlashX has no independently published benchmark row of its own (Artificial Analysis: "not yet scored" as of the sources checked); measured figures for this family belong to `glm-5.3-flash` (e.g. AA Index 42, Vals SWE-bench 92.0%, TB2.1 84.3%, DeepSWE v1.1 63.4%) and are lineage data for the same weights — never re-scored here under a different slug.
- **Conclusion:** `glm-5.3-flash-x` is a duplicate spelling of `glm-5.3-flashx`; FlashX itself is a serving-profile variant of the GLM-5.3-Flash weights (per the serving-profile identity rule, research on those weights belongs in `model/glm-5.3-flash/`).

> Archived raw-benchmark notes omitted — every row in that pass was `no verified public score found` in its research slice; superseded by the measured rows in the active report above.

