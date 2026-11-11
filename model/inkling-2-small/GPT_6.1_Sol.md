# Inkling 2 Small — findings by GPT-6.1 Sol

- Source: Thinking Machines Lab / `thinkingmachines/inkling-2-small`
- Date: 2026-11-10 (UTC)
- Overview and scoring methodology: [model-comparison.md](../../model-comparison.md); current Overall contract in `../../RULES.md`
- Cross-model signed log: [model-findings.md](../../model-findings.md)

## Model card

- **Name:** Inkling 2 Small (Free access tier)
- **Short description:** Thinking Machines Lab's multimodal MoE reasoning model, now positively identified in live provider and evaluator records. The project's revealed-stealth identity resolves to this folder; older Fledge-era traffic statistics are not used as benchmarks.
- **Provider / access:** OpenCode Zen `inkling-2-small-free` at `https://opencode.ai/inference/openai/v1` (Chat Completions with `reasoning_content`), and OpenRouter `thinkingmachines/inkling-2-small:free`. Both live catalogs identify the canonical Thinking Machines model; no authenticated generation test was performed.
- **Release / knowledge:** Live Zen and Artificial Analysis date the model to 2026-11-05; AA's internal release slug is `inkling-small-1102-rc17`, while OpenRouter has a `20261107` canonical slug. These are source-specific identifiers, not extra independently rated models. Knowledge cutoff unverified.
- **IDs:** `inkling-2-small-free` (Zen), `thinkingmachines/inkling-2-small:free` (OpenRouter); free is a serving tier, not separate weights.
- **Context window:** Zen/OpenRouter 1,048,576 context / 131,072 maximum output; AA's evaluated metadata says 1,024,000 context. These source-specific capacities are not retrieval-success measurements.
- **Modalities:** Text/image inputs; text output; reasoning and tools. Zen advertises `none` through `max` effort, whereas OpenRouter marks reasoning mandatory with default `high`; provider differences should be tested rather than interpreted as separate checkpoints. No native audio/video or non-text output verified.
- **Pricing (as of 2026-11-10):** Live Zen and OpenRouter free routes list $0 input/output; Zen explicitly says free for a limited time. AA's paid reference configuration is $0.30 input / $1.00 output / $0.03 cache read per 1M. [Zen claimant](https://opencode.ai/zen/v1/models), [OpenRouter claimant](https://openrouter.ai/api/v1/models), [AA paid reference](https://artificialanalysis.ai/models/inkling-2-small). Free data-use/retention terms were not independently audited; no unlimited or permanent entitlement is claimed.
- **Architecture:** Live OpenRouter/AA records identify 594B total / 17B active MoE. Zen and AA mark closed/proprietary weights; no official weight release was verified. AA also carries an Apache 2.0 license-name field without a license/weights URL, so that conflicting field is not promoted into an open-weight license claim.

### Raw benchmarks found

The exact-model [Artificial Analysis page](https://artificialanalysis.ai/models/inkling-2-small) publicly ships its chart data. This run decoded the JSON transport **without executing page scripts**, selected `currentModel.slug = inkling-2-small` (ID `e2ed7885-d46b-4da7-a873-f12f88af0081`), and excluded other models' records. Fractions below are converted to percentages; absent fields stay missing. The displayed index uses **v5.0.1**.

Agent / tool use:

- Terminal-Bench **2.1: 81.27%** (`terminalBench21`); Terminal-Bench **4.0: 13.13%** (`terminalBench40`). Different versions/harnesses are not averaged or relabeled.
- GDPval-AA: **1630.23 Elo** (`gdpval`).
- Banking evaluation: **40.41%** (`tauBanking`); its exact Tau version was not established from the extracted record, so it is not asserted to be Tau2 or Tau3.
- AutomationBench partial-score field: **45.62%** (`automationBenchPartialScore`); partial credit is not all-pass task success.
- Claw-Eval/ClawProBench, Toolathon, MCP-Atlas, SWE Atlas QnA, and exact Tau2/Tau3 version-specific results: no verified public score found in this run.

Reasoning / knowledge:

- AA Intelligence Index: **30.63**, displayed **31**, **rank 6/33** in the page's price/class comparison; a composite, not percentage accuracy.
- HLE-Diamond: **28.7%** (`hleDiamond`). The `critptAgenticHard` field (35.0%) is the agentic hard-subset variant, not the original CritPt score, and is not counted as a CritPt result for this model.
- AA-Omniscience net field: **16.1**; accuracy **33.77%**; hallucination-rate field **26.67%**. Net score and the two rates are distinct metrics.
- GPQA Diamond: no verified result (`gpqa` is null). An older `hle` field exists, but its setting/version was not resolved and is not used for scoring.

Coding:

- FrontierCode **2.0: 25.35%** (`frontierCode20`); SciCode **52.31%** (`scicode`); Terminal-Bench **2.1: 81.27%**.
- Terminal-Bench-Science **0.1: 5.71%** (`terminalBenchScience`), indicating markedly weaker scientific-terminal coverage than legacy terminal performance.
- SWE-bench Verified/SWE-Pro, LiveCodeBench, Vibe Code Bench, and DeepSWE: no verified exact-ID score found; LiveCodeBench field is null.

Long context:

- LCR field **83.33%**, MLCR field **20.56%**, with context lengths not established in this extraction. These are task-level reasoning evaluations, **not proof of full-window retrieval**. No MRCR/RULER/GraphWalks result found.

Multimodal/performance evidence:

- MMMU-Pro **81.56%** (`mmmuPro`); GDP.pdf all-pass **25.2%** (`gdpPdfAllPass`).
- AA headline: **150 output tokens/s**, **32.28 seconds to first answer token**, **16.7 minutes per Intelligence Index task**, **$1.18/task** on the paid reference configuration; not measurements of the free lane or guarantees.

### Normalized scores (1–100)

- **Tool use: 85/100.** Exact GDPval-AA 1630.23 and TB2.1 81.27% support capable agents, but TB4.0 13.13%, partial-credit scoring, and unverified banking-version attribution cap the grade.
- **Reasoning: 86/100.** HLE-Diamond 28.7%, the hard scientific field, and independent AA index 30.63 support useful reasoning; hallucination and weak MLCR/scientific-terminal results prevent a frontier maximum.
- **Context window: 95/100.** Verified roughly 1M capacity reaches the top tier, but no length-specific retrieval measurement supports 100.
- **Multimodal: 70/100.** Verified image input and MMMU-Pro 81.56% support the image tier; native audio/video and non-text output are absent.
- **Coding: 85/100.** SciCode 52.31%, FrontierCode 2.0 at 25.35%, and TB2.1 81.27% establish real coding evidence; TB4.0/scientific-terminal weaknesses and missing SWE/LiveCode coverage cap reliability.
- **Cost efficiency: 100/100.** This score evaluates the currently cataloged $0 free tier, with explicit temporary-access and unverified privacy/rate caveats; AA's paid costs are not treated as free-lane measurements.
- **Overall Score: 84/100.** Half-up mean: (85 + 86 + 95 + 70 + 85) / 5 = 84.2, rounded to 84; cost excluded. Useful for free image-aware coding agents, with substantial harness and scientific-workflow variability.

---

## Signature

- Provided by: **GPT 6.1 Sol (agentrouter/gpt-6.1-sol)** — 2026-11-10
- Method: Fresh public-source research, live exact-ID catalog checks, and JSON-only extraction of AA's publicly delivered exact-model chart record. No peer findings read. Only after drafting was this reporter's excluded twin compared: it had no verified capability benchmarks, unlike the new identified evaluation above. The historical twin is preserved because deleting any research file requires separate per-file approval. Normalized scores are interpretations, not vendor scores; configured search returned HTTP 402.
- Reference URLs:
  - [Artificial Analysis exact model page and public chart data](https://artificialanalysis.ai/models/inkling-2-small)
  - [OpenCode Zen exact canonical mapping, limits, and temporary free tier](https://opencode.ai/zen/v1/models)
  - [OpenRouter exact model, architecture, and free route](https://openrouter.ai/api/v1/models)
- Future sources: Preserve independently signed evidence and do not substitute old anonymous traffic metrics for model-quality measurements.
