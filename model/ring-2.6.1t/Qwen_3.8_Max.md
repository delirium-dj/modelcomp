# Ring 2.6 1T — findings by Qwen 3.8 Max

- Source: InclusionAI (`ring-2.6.1t`; id `inclusionai/ring-2.6-1t`; AA `ring-2-6-1t`)
- Date: 2026-10-30 (UTC)
- Overview and scoring methodology: `../../model-comparison.md`
- Cross-model signed log: `../../model-findings.md`

> **Verdict:** InclusionAI's (Ant Group) open-weights 1T-total / 63B-active MIT reasoning MoE, positioned for agentic execution rather than pure benchmark chasing, with adaptive **high/xhigh** reasoning effort. Elite vendor reasoning (AIME 2026 95.8%, GPQA Diamond 88.3%) plus an independently strong ARC-AGI-V2 66.18%, and above-average speed (113.6 tok/s, #23/78). But AA Intelligence Index v5.0 is N/A, no Terminal-Bench / SWE-bench / LiveCodeBench was ever published, TTFT is very high (3.62s), and long-context quality is unverifiable because the report's MRCR rows belong to Ling 2.6. Scored Overall 70 (div +2.6 vs curated 67.4).

## Model card

- **Name:** Ring 2.6 1T (Ring-2.6-1T)
- **Short description:** InclusionAI's trillion-parameter open-weights thinking model with 63B active parameters, built for real-world agent workflows and optimized for coding agents / tool use; supports two reasoning-effort levels (high, xhigh) that dynamically allocate reasoning budget by task complexity.
- **Provider / access:** Open weights on Hugging Face (MIT). Served via InclusionAI's API — AA lists **1 API provider** at $0.30/$2.50. A `inclusionai/ring-2.6-1t:free` endpoint is listed on OpenRouter/Kilo at $0.00, but its live status is disputed (meta tradeoff: "OpenRouter has no live endpoint"; HF notes no Inference Provider deploys the weights directly). Self-hosting needs ~32 GPUs.
- **Release / knowledge:** Released **May 8, 2026** (AA FAQ, HF, kilo).
- **IDs:** id `inclusionai/ring-2.6-1t`; AA model-page slug `ring-2-6-1t`; free variant `inclusionai/ring-2.6-1t:free`.
- **Context window:** **128K native (131,072), 256K with YaRN**; AA and kilo both serve **262,144** tokens (AA spec 262k / FAQ 260k — a rounding of the YaRN-extended window). Max output **65,536** tokens (kilo).
- **Modalities:** Text in → Text out. Not multimodal — AA confirms no image input.
- **Pricing:** $0.30 / 1M input (moderately priced, median $0.50), $2.50 / 1M output (somewhat expensive, median $2.10), cache $0.06; blended 7:2:1 = **$0.52 / 1M** (AA). MIT weights are free, but ~32-GPU self-host is costly. Cost-per-Index-task and Verbosity = N/A (Index not scored).
- **Architecture:** Mixture of Experts, 1T total / 63B active parameters. Reasoning model (extended thinking / chain-of-thought) with adjustable high and xhigh effort.

### Raw benchmarks found

> **Provenance:** Mixed — InclusionAI-vendor (GPQA Diamond, AIME 2026, PinchBench, from the HF technical report), independently corroborated (ARC-AGI-V2 66.18), and AA-measured (Speed, Cost, context, provider count). AA Intelligence Index v5.0 is NOT scored for this model.

- **Agent / tool use:**
  - PinchBench (agent / workflow, high effort) — vendor reports "strong performance across both Agent execution and hard reasoning"; exact figure not independently surfaced here.
  - Design evidence: "optimized for coding agents, tool use"; supports Function Calling, Tool Choice, Structured Outputs, Reasoning Tokens (kilo/OpenRouter).
  - **No Terminal-Bench was ever published** for Ring-2.6-1T (meta guard confirmed) — no AA-independent agentic-coding number exists.
  - AA Intelligence Index v5.0 = **N/A** → no AA-Briefcase / AutomationBench-AA / Terminal-Bench 4.0 / GDPval-AA scores in the current basket.
- **Reasoning / knowledge:**
  - AIME 2026 = **95.8%** (vendor, high/xhigh) — elite mathematics.
  - GPQA Diamond = **88.3%** (vendor) — strong graduate-level science reasoning.
  - ARC-AGI-V2 = **66.18%** (xhigh; independently corroborated) — very strong fluid/novel-task generalization for an open-weight model.
  - Adaptive reasoning effort (high / xhigh) raises the capability ceiling on hard reasoning.
  - AA Intelligence Index v5.0 = **N/A**. GUARD: the "~34 AA Index" figure circulating in coverage belongs to **Ling-2.6-1T**, NOT Ring-2.6-1T — not reattributed.
- **Coding:**
  - **No SWE-bench Verified, no LiveCodeBench, and no Terminal-Bench published.** Only vendor PinchBench agent-coding signals. Coding capability is asserted by design ("optimized for coding agents") but lacks standard independent coding benchmarks.
- **Long context:** 128K native, 256K via YaRN, served at 262,144; max output 65,536. GUARD: the **MRCR rows in the technical report belong to Ling 2.6**, not Ring — no Ring-specific long-context retrieval/reasoning benchmark is verified here, so long-context quality is treated as unproven.
- **Speed / cost (AA-measured):** Output speed **113.6 tok/s** — rank **#23/78**, 3 of 4 units, above the open-weight median (74.0 t/s). TTFT **3.62s** — at the higher end (median 1.66s), a notable latency penalty. Cost $0.30/$2.50, blended $0.52.

> **Meta-verification:** meta.json independently checked, not inherited. CONFIRMED: InclusionAI open-weights 1T/63B MIT reasoning MoE (AA + HF + kilo + llmtimeline), released May 8 2026, text-only, adaptive high/xhigh effort, ARC-AGI-2 66.2 (independently 66.18), GPQA 88.3 / AIME 95.8 (vendor HF report). CORRECTED / FLAGGED: (1) AA v5.0 Index = **N/A** — not scored; the ~34 Index is Ling-2.6-1T's, not Ring's. (2) Context: native 128K + YaRN 256K; AA/kilo serve 262,144 (meta's "256,144 with YaRN" ≈ AA's 262k/260k rounding). (3) Reattribution guards honored: no Terminal-Bench published; MRCR = Ling 2.6's. (4) Free `:free` endpoint disputed (OpenRouter/Kilo list $0.00 but meta says no live endpoint); AA counts 1 provider (InclusionAI API). Kept DISTINCT from `ling-2.6.1t` (a separate queue model) and `ling-3.1-flash` (same lab, different line) — no double-count.

### Normalized scores (1–100)

- **Tool use: 72/100.** Agentic-execution-focused by design (function calling, tool choice, structured outputs; "optimized for coding agents, tool use") with vendor PinchBench agent claims, but no Terminal-Bench was ever published and AA v5.0 provides no independent agentic number — capability is asserted, not independently verified.
- **Reasoning: 80/100.** Elite vendor math (AIME 2026 95.8%) and science (GPQA Diamond 88.3%), plus an independently strong ARC-AGI-V2 66.18% and adjustable high/xhigh effort; tempered because GPQA/AIME are vendor-reported and AA Index v5.0 is N/A.
- **Context window: 77/100.** 262,144 served (128K native + 256K YaRN) with 65,536 max output is a solid 256K-class window, but the extension is YaRN-based and long-context quality is unverifiable (the report's MRCR rows belong to Ling 2.6, not Ring).
- **Multimodal: 50/100.** Text-only — AA confirms no image input.
- **Coding: 69/100.** Optimized for coding agents and PinchBench-signaled, but zero standard coding benchmarks published (no SWE-bench Verified, LiveCodeBench, or Terminal-Bench) — cannot be scored higher without invented numbers.
- **Cost efficiency: 80/100.** MIT open weights are free, but $2.50/1M output (blended $0.52) is premium, ~32-GPU self-host is expensive, the free endpoint is disputed, and a single API provider limits competition. (Scored but NOT counted toward Overall.)
- **Overall Score: 70/100.** Half-up mean of the five quality dims (72+80+77+50+69)/5 = 69.6 → 70. Divergence **+2.6** vs the curated queue value 67.4 — driven by the strong reasoning trio (AIME/GPQA/ARC-AGI-2) outweighing the thin coding/agentic benchmark coverage and Index-N/A status. Cost efficiency excluded from the mean per methodology.

---

## Signature

- **Provided by:** Qwen 3.8 Max (`qwen/qwen-3.8-max`)
- **Method:** Fresh independent public web research on 2026-10-30 — AA `ring-2-6-1t` model page (summary, spec table, Speed/Cost ranks, FAQ), InclusionAI Hugging Face report, kilo.ai model page, OpenRouter/ZenMux listings, llmtimeline, and ARC-AGI-2 coverage; ≥5 independent searches/fetches. meta.json verified against primary sources, not inherited; reattribution guards (Ling 2.6 MRCR / ~34 Index; no Terminal-Bench) enforced. No peer findings files read (zero-influence rule).
- **Future sources:** AA Intelligence Index v5.0 inclusion; published PinchBench / SWE-bench Verified / LiveCodeBench / Terminal-Bench numbers; a Ring-specific long-context (MRCR/RULER) result distinct from Ling 2.6; confirmation of whether the OpenRouter `:free` endpoint is live.
