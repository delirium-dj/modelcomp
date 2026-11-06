# GLM 5.3 FlashX — findings by Step 5 Preview

- Source: Z.AI (`glm-5.3-flashx`)
- Date: 2026-11-05 (UTC)
- Overview and scoring methodology: `../../model-comparison.md`
- Cross-model signed log: `../../model-findings.md`

## Model card

- **Name:** GLM 5.3 FlashX. **Not a separate checkpoint** — Z.AI describes it as an **inference-optimized serving variant of GLM-5.3-Flash**, same weights (320B total / 18B active), same 1M context and multimodal input, sold at a ~2.5x price premium for ~3x throughput. It is the latency tier of a capability tier already tracked as `model/glm-5.3-flash/` (refreshed earlier in this session).
- **Short description:** The rare case in this research series where a SKU exists purely as an **infrastructure product**: the review evidence is unanimous that FlashX "does not bring a new benchmark intelligence profile of its own". Its measurable advantages are all latency numbers — **~200 tok/s official (Vercel telemetry 198–208), 283.8 tok/s median vs 94.8 for standard Flash in one six-run third-party test, TTFT 1.52s vs 2.35s, total completion 8.96s vs 24.92s** — and its price is 2.5x. Everything else is inherited.
- **Provider / access:** Z.AI's own API (model key `glm-5.3-flashx`), BigModel, Vercel AI Gateway, OpenRouter, and OpenCode Zen (`opencode/glm-5.3-flashx`). **No Free ID** (the repo's meta.json explicitly records `noFreeId: true`), and open weights are **not** released for FlashX — it is an API serving tier, not a checkpoint.
- **Release / knowledge:** released **2026-09-18**. Knowledge cutoff not disclosed.
- **IDs:** `glm-5.3-flashx` (Z.AI, BigModel, Zen, Openrouter); `zai/glm-5.3-flashx` (Vercel). Aliases recorded in the repo's meta.json: `GLM-5.3-Flash-X`, `glm-5.3-flash-x`, `zhipu/glm-5.3-flash-x` — the hyphenated spelling is the forbidden variant.
- **Context window:** **1,048,576 tokens (1M)**, with a **~131K max output** (Vercel's listing); the repo's meta.json records 128K. Both are far above the Flash sibling's unpublished cap.
- **Modalities:** **text, image and video in; text out** (Z.AI's launch materials list text, images, video and files for the family; provider listings show text + image). Tool use and structured outputs supported; reasoning alongside function-call workflows.
- **Pricing (as of 2026-11-05):** **$0.37 input / $1.25 output per 1M** globally — ~2.5x standard GLM-5.3 Flash's $0.15/$0.50. On the Chinese BigModel rate card, ¥2/¥7 vs ¥0.8/¥2.8, preserving the same ~2.5x relationship.
- **Architecture:** the same **hybrid sparse + linear attention, 320B total / 18B active** MoE stack as GLM-5.3-Flash. Z.AI attributes the speed to inference optimization on a base of 100,000+ domestic AI chips.

### Raw benchmarks found

**There are no FlashX-specific capability benchmarks.** BenchLM assigns it **no overall score and no rank** ("unranked"), and the independent review evidence is explicit that a serving SKU cannot change benchmark intelligence. The measured figures that do exist are all **operational**, not capability:

Latency / throughput (the only unique measurements):

- **Official headline: up to 200 tokens/s** (Z.AI)
- **Vercel AI Gateway telemetry: ~198–208 tok/s** depending on snapshot — corroborates the official target
- **Independent six-run same-prompt test (Labmemo, 2026-09-18): 283.8 tok/s median vs 94.8 for standard Flash (2.99x)**; **TTFT 1.52s vs 2.35s**; **total completion 8.96s vs 24.92s (64% reduction)**

Capability benchmarks inherited from GLM-5.3-Flash (not measured on FlashX):

- **No verified FlashX-specific score found** for any capability benchmark — Terminal-Bench 2.1, GDPval-AA, SWE-bench, GPQA Diamond, SciCode, MMMU-Pro, Claw-Eval and MRCR are all unmeasured for this ID. The parent model's figures (reported in `model/glm-5.3-flash/`) are **lineage data only and are labelled as such**, per the no-substitution rule.

Operational caveats (worth more than any benchmark here):

- **A 2026-09-18 direct API test found FlashX returned HTTP 429 with error code 1311 through the GLM Coding Plan endpoint** — the tested plan did not yet include FlashX access. Verify entitlement rather than assuming the model name is enough.
- The review's central caution: throughput varies by route, load, request size and concurrency, and "a model that streams twice as fast but spends more time reasoning may not halve end-to-end latency."

### Normalized scores (1–100)

> **Methodology note.** All five quality dimensions here are inherited from the shared GLM-5.3-Flash weights, scored identically to `model/glm-5.3-flash/` (refreshed earlier this session: Tool 76 / Reasoning 62 / Context 95 / Multimodal 88 / Coding 76). Scoring a serving SKU differently on the same weights would be double-counting, and inventing FlashX-specific capability numbers would be fabrication. The unique contribution of this report is the operational evidence and the cost-efficiency re-score, which is where FlashX genuinely differs.

- **Tool use: 76/100.** Inherited from GLM-5.3-Flash (Terminal-Bench 2.1 84.3%, GDPval-AA 1,773 Elo, Toolathlon-Verified 78.4%). **No FlashX-specific measurement exists**, and no capability gain is claimed by any source.
- **Reasoning: 62/100.** Inherited (GPQA 86.4%, HLE 55.3% with tools, FrontierMath Tier 4 17.1%). No FlashX-specific measurement.
- **Context window: 95/100.** Inherited 1M window, and the repo's meta.json records a **128K output cap for FlashX where the parent Flash's cap is unpublished** — so on output capacity FlashX is the better-specified sibling.
- **Multimodal: 88/100.** Inherited (CharXiv 89.4%, MMVU 80.5%, ExtractBench 80.75%).
- **Coding: 76/100.** Inherited (SWE-bench 92.0% Vals, LiveCodeBench 80.5%).
- **Cost efficiency: 62/100.** **The dimension where FlashX genuinely differs, and where it is worse.** $0.37/$1.25 per 1M is ~2.5x the parent Flash's $0.15/$0.50, which itself scored 94 — so this is roughly the methodology's ~$3/$15 (≈60) anchor region, adjusted up for the ~131K output allowance. The premium buys latency, not capability, and the review evidence is explicit: **for asynchronous batch, background indexing or offline classification, standard Flash is the more economical choice and FlashX's premium "is harder to justify."** Scored at 62 rather than lower because ~3x throughput and 64% lower completion time are real, measurable operational value for interactive and high-concurrency agent loops, where cost-per-*completed-task* can beat cost-per-token.
- **Overall Score: 79/100.** (76 + 62 + 95 + 88 + 76) / 5 = 79.4 → **79** → **79**. Recommendation: **choose FlashX only when latency is the binding constraint** — interactive coding assistants, customer-facing agents and high-concurrency services where a blocked agent turn or a waiting user costs more than the 2.5x token premium. Its measured 2.99x throughput and 64% completion-time reduction are the strongest latency evidence in this research series. For everything else — batch, background, cost-first, and especially self-hosting — **standard GLM-5.3-Flash at $0.15/$0.50 is strictly better value on identical weights**, and note FlashX has no open weights and no free tier at all.

---

## Signature

- Provided by: **Step 5 Preview (stepfun-ai/stepfun-ai/step-5-preview)** — 2026-11-05
- Method: re-research using Z.AI's launch materials as the primary source for the serving-variant claim, cross-checked against an independent BuildFastWithAI review (which aggregates Vercel AI Gateway telemetry, a six-run Labmemo same-prompt API test, BigModel's Chinese rate card, and a 2026-09-18 Coding-Plan access test), OpenRouter's model listing for parameters and throughput, and the repo's own `meta.json` for the 128K output cap, alias family and `noFreeId` status. **The central finding of this report is a negative one**: no FlashX-specific capability benchmark exists anywhere, BenchLM leaves it unranked, and every source agrees it "does not bring a new benchmark intelligence profile of its own" — so the five quality scores are explicitly inherited from the shared GLM-5.3-Flash weights and labelled as such, while the unique contribution (latency measurements, the 2.5x pricing analysis and the HTTP 429 Coding-Plan caveat) is reported in full. Scores are normalized 1–100 interpretations, not official vendor scores.
- Reference URLs:
  - [BuildFastWithAI — GLM 5.3 FlashX Review (speed, price, Vercel telemetry, Labmemo API test, Coding-Plan 429 caveat)](https://blog.buildfastwithai.com/glm-5-3-flashx-review)
  - [OpenRouter — GLM-5.3-FlashX model page (parameters, ~200 tok/s, 1M context)](https://openrouter.ai/z-ai/glm-5.3-flashx)
  - [Z.AI — GLM-5.3-FlashX launch announcement](https://open.zhipuai.cn/)
  - [Z.AI — pricing documentation](https://docs.z.ai/guides/overview/pricing)
  - [OpenCode Zen — model list and Console pricing](https://opencode.ai/docs/zen/)
  - See also: [`model/glm-5.3-flash/`](glm-5.3-flash.md) — the parent capability tier, refreshed earlier in this session
- Future sources: add a new file next to this one, e.g. `GPT_5.md`, using the same headings.
