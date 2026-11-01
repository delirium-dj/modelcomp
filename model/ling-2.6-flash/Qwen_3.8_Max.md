# Ling 2.6 Flash — findings by Qwen 3.8 Max

- Source: InclusionAI / Ant Group (`inclusionAI/Ling-2.6-flash`; id `inclusionai/ling-2.6-flash`; AA `ling-2-6-flash`)
- Date: 2026-11-01 (UTC)
- Overview and scoring methodology: `../../model-comparison.md`
- Cross-model signed log: `../../model-findings.md`

> **Verdict:** **Ling 2.6 Flash** is Ant Group / InclusionAI's **April-2026 "Instant" (non-reasoning) open-weight MoE** — **104–107B total / 7.4B active** (Kilo/HF card say **104B**, Artificial Analysis resolves **107B**, same architecture), **MIT**, **text-only**, **262K context** (128–131K native, extended via YaRN), tuned for **fast, token-efficient agentic tool-calling**. It was launched under the Kilo **stealth pseudonym "Elephant"** ("a 100B-parameter stealth model from a prominent open model lab") and unmasked on **2026-04-21**. Today it is **DEPRECATED** (Artificial Analysis banner: *"InclusionAI has launched a newer release, Ling 3.0 Flash"*), so its **live AA Intelligence Index / Speed / Cost all read N/A ("No publicly available API")** — but a **substantial independent benchmark set was captured before delisting** (AA Intelligence Index **14.1**, GPQA-Diamond **59.3**, HLE **6.3**, AA-LCR **31.3**, CritPt **0.0**, SciCode **27**, AA-Coding-Index **25.3**, τ²-bench **86**, IFBench **57.4**, GDPval-AA **550/0%**, and a **catastrophic AA-Omniscience hallucination rate of 96.7%** — accuracy 15.6%, index −66.1). It is a **mid-to-low capability, cheap, speed-first instant agent** with an **elite tool-calling/τ² surface but a very weak knowledge/reasoning ceiling and near-total unattended-use hallucination** — exactly what its `meta` tradeoff warns.

## Model card

- **Vendor / lineage:** **InclusionAI** (Ant Group's AGI initiative), **Ling-2.6 series** (sized SKUs). Revealed from the Kilo **"Elephant"** stealth slot on **2026-04-21**.
- **Architecture:** MoE, **104B (Kilo/HF) / 107B (AA) total, 7.4B active**; **Agentic-RL** trained, OpenClaw-compatible; inference served fast via **Novita**.
- **Reasoning:** **NON-reasoning "Instant"** (AA explicitly profiles the non-reasoning variant; direct responses, no extended CoT).
- **Modalities:** **Text in → text out. Does NOT support image input / not multimodal** (AA FAQ). → Multimodal scored at the corpus text-only floor.
- **Context:** **262K** (AA "~393 A4 pages"; meta 131,072 native / 262,144 via YaRN).
- **License / weights:** **MIT** (commercial use allowed), on Hugging Face, self-host $0.
- **Pricing / providers:** hosted **$0.10 in / $0.30 out / $0.02 cached-read** per 1M (ZenMux, Requesty); a **free Zen slot existed and is now deprecated** (`noFreeId`); MIT self-host **$0**.
- **Status:** **DEPRECATED** — superseded by **Ling 3.0 Flash**, then **Ling 3.1 Flash**.

### Raw benchmarks found

> Provenance: **Artificial Analysis `ling-2-6-flash`** (Intelligence Index / Speed / Cost now N/A post-deprecation, "No publicly available API"), surfaced as an **independent benchmark set via benchlm** (every cell attributed to *"Artificial Analysis … model benchmarks / summary screenshot"*), plus **InclusionAI HF model-index (vendor)** and the **Kilo reveal blog** (blind-test qualitative + official spec). Vendor numbers are discounted; AA-sourced numbers are the independent signal.

- **Coding / agentic (AA-independent):** **AA-Coding Index 25.3** · **SciCode 27** · **AA-LCR 31.3** · **GDPval-AA 550 Elo / All-pass 0.0** · **τ²-bench 86** (strong tool/task surface) · **IFBench 57.4**. *(meta cites **SWE-bench Verified 61.2** and **tau2 76.4** and **MRCR 75.9** — HF/vendor figures; AA does not publish a SWE-bench-Verified cell for this delisted slot, so 61.2 is treated as vendor-only, and the AA τ² figure (86) differs from meta's 76.4 by harness/sub-task.)*
- **Reasoning / knowledge (AA-independent):** **AA Intelligence Index 14.1** (historical, pre-v5.0 basket — **NON-convertible** to the current v5.0 index, which now shows N/A) · **GPQA-Diamond 59.3** (mid for a non-reasoning model) · **HLE-Diamond 6.3** (very low) · **CritPt 0.0** (total fail).
- **Faithfulness (AA-independent, decisive):** **AA-Omniscience Hallucination 96.7%** · **Accuracy 15.6%** · **Index −66.1** — near-total confabulation; corroborates meta's "96.7% hallucination … unsafe for unattended work".
- **Context (vendor):** **MRCR 75.9% at 256K** — strong long-context retrieval for the class.
- **Speed / cost:** AA Speed & Cost-per-task now **N/A** (deprecated, no live API). Served cheaply **$0.10/$0.30**; positioned as a **high-token-efficiency instant** model (Kilo: "super fast inference").
- **Meta-verification:** AA confirms **non-reasoning, text-only, MIT, 107B/7.4B, 262K, released 2026-04-21, deprecated**. `meta`'s "Intelligence Index of 10" is an older snapshot; the last captured AA value was **14.1** (both low, both pre-v5.0, both non-convertible).

### Normalized scores (1–100)

- **Tool use: 62/100.**
- **Reasoning: 44/100.**
- **Context window: 70/100.**
- **Multimodal: 50/100.**
- **Coding: 55/100.**
- **Cost efficiency: 85/100.**
- **Overall Score: 56/100.**

---

## Signature

- Provided by: **Qwen 3.8 Max (qwen/qwen-3.8-max)** — 2026-11-01
- Method: public internet research (**Artificial Analysis `ling-2-6-flash`** — InclusionAI open-weights MIT, released 2026-04-21, non-reasoning, text-only, 107B/7.4B, 262K ctx, **DEPRECATED** (Ling 3.0 Flash successor), Intelligence Index / Speed / Cost now **N/A** "No publicly available API"; **benchlm** independent benchmark set with every cell attributed to Artificial Analysis — Intelligence Index 14.1, GPQA-Diamond 59.3, HLE 6.3, AA-LCR 31.3, CritPt 0.0, SciCode 27, AA-Coding-Index 25.3, τ²-bench 86, IFBench 57.4, GDPval-AA 550/0%, **AA-Omniscience Hallucination 96.7% / Accuracy 15.6% / Index −66.1**, Non-Reasoning, 262K; **Kilo blog "The Elephant is Out of the Bag"** (2026-04-21) — unmask of the "Elephant" 100B stealth slot as Ant's Ling-2.6-flash, official spec "Instant, 104B total / 7.4B active", Agentic-RL, OpenClaw, Novita inference; **orcarouter blog** — Ling-3.0-flash AA Index 38 = "+24 points from Ling-2.6-flash" (⇒ ~14, corroborates 14.1); **InclusionAI HF `Ling-2.6-flash`** — "comprehensive evaluation … performs strongly"; **curated `meta`** — SWE 61.2 / τ² 76.4 / MRCR 75.9 / 96.7% hallucination / $0.10-$0.30, noFreeId true.)
- Future sources: revisit only if a **v5.0 AA re-measurement** or a **reproduced SWE-bench-Verified / Terminal-Bench cell** appears for this exact artifact. **Guards applied:** (1) do **NOT** cross-credit **Ling 3.0 Flash** (b26, 124B/5.1B, index ~33-38, GPQA 85.5) or **Ling 3.1 Flash** (b8, 560B/25B) — those are later, stronger successors with their own entries; (2) do **NOT** import **Ling-2.6-1T** (b28, 1.0T/63B, SWE-Verified 72.2, index 34) or **Ring-2.6-1T** (b10) — same-generation but different models; (3) AA Intelligence Index **14.1 is pre-v5.0 / NON-convertible**, and the live AA page shows **N/A** (deprecated, no public API) — treat as historical context, not a current index; (4) the **AA-Omniscience 96.7% hallucination** is an *independent faithfulness measurement*, not a vendor claim — it materially caps Reasoning and is why the model is flagged unsafe for unattended use; (5) **SWE-bench Verified 61.2 / MRCR 75.9 are VENDOR HF** (uncorroborated by AA for this slot) — Coding weighted toward the low independent indices (25.3 / 27 / 31.3); (6) text-only ⇒ **Multimodal 50** (not the sibling VL/omni variants); (7) **Cost 85** recorded but **excluded from the Overall mean** per the scoring contract. **Overall = half-up mean of the five quality dims (62+44+70+50+55)/5 = 56.2 → 56; curated `average.md` 55.5 → div +0.5.**
