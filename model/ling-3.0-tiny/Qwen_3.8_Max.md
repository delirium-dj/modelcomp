# Ling 3.0 Tiny — findings by Qwen 3.8 Max

- Source: InclusionAI / Ant Group (`inclusionAI/Ling-3.0-tiny`; AA `ling-3-0-tiny` — **page exists: Intelligence Index N/A "No publicly available API" (free $0 API), Speed 56.4 tok/s #44/62, Cost $0.00/$0.00**; specs independently confirmed)
- Date: 2026-11-01 (UTC)
- Overview and scoring methodology: `../../model-comparison.md`
- Cross-model signed log: `../../model-findings.md`

> **Verdict:** **Ling 3.0 Tiny** is a **genuine, distinct, dated open-weight checkpoint** — InclusionAI (Ant Group)'s **August-2026 MIT "agentic-goes-local" reasoning MoE** (released **2026-08-13**): **7.9B total / 1.3B active** parameters, native **hybrid-linear Ling-3.0 architecture** (3:1 **Kimi Delta Attention : MLA** stack, **128 routed experts with 8+1 shared active/token**, native hybrid reasoning, Multi-Token Prediction), **text-only**, **131,072 native / 262,144 served** context (up to 1M architected), weights in **BF16 / FP8 / INT4**, validated on DGX Spark (~100 tok/s FP8), M4 Pro MacBook (~86–90 tok/s, **8.34 GiB** @ 8K ctx), Mac mini. It is the **tiny sibling of `ling-3.0-flash` (124B/5.1B, scored separately)** — a *different checkpoint with its own benchmark set*, so it is scored, not a double-count. **AA confirms specs and Speed (#44/62, slower than the 88 median) but its Intelligence Index is N/A because the hosted API is free**, so the quality signal is the **lab-reported AA-derived table**: **GPQA-Diamond 73.40**, **IMO-AnswerBench 71.03**, **IFBench 63.61 / Multi-IF 83.15** (strong instruction-following), **BFCL v4 62.72** (function calling — its design focus), **AA-LCR 58.70**, **GDPval-AA v2 772 Elo / τ³-Banking-AA 20.80**, **Terminal-Bench 2.1 27.70**, **SciCode 24.2**, **ArtifactsBench 47.93**, and **AA Intelligence Index v4.1.1 = 25 / AA Agentic Index = 16** (both **pre-v5.0, non-convertible**). The tradeoff is honest: **no SWE-bench, no LiveCodeBench**, weak coding — *"a research-tier reasoning model,"* an **efficient execution layer for frequent bounded tool calls, not a frontier replacement.** **Overall 55 (div +2.6)** — respectable reasoning/GPQA and genuine local-runability for 1.3B active, dragged by weak coding, a modest agentic ceiling, and the **text-only floor**.

## Model card

- **Vendor:** InclusionAI / Ant Group (Ling / Ring family). **Open weights, MIT.** Released **2026-08-13**.
- **Architecture:** sparse MoE **7.9B total / 1.3B active** per token; **native hybrid-linear** — **3:1 KDA (Kimi Delta Attention) : MLA** in each 4-layer block; **128 routed experts, 8 routed + 1 shared active**; **native hybrid reasoning** (fast ↔ multi-step via one model); **Multi-Token Prediction** for faster decode.
- **Context:** **131,072 native / 262,144 served** (SGLang recipe 256K; architecture supports **1M**, deployment-dependent). Mac memory figure is at **8K** context.
- **Modalities:** **text in → text out** (AA: no image; **not multimodal**).
- **Reasoning:** **yes** (hybrid; AA profiles the reasoning variant; a non-reasoning variant may exist).
- **Formats / deployment:** **BF16 / FP8 / INT4**; SGLang + InclusionAI vLLM branch; **~8.34 GiB** peak on M4 Pro MacBook (8K ctx); **$0/$0** free hosted API (Requesty; the Zen free slot `ling-3.0-tiny-free` is now deprecated) — `noFreeId: false`.
- **Positioning (lab):** *"an efficient execution layer for frequent, bounded work"* — local retrieval, private docs, routine API calls, code/UI automation — **explicitly not a frontier replacement.**

### Raw benchmarks found

> Provenance: **Ant developer blog** "Open-Sourcing Ling-3.0-tiny" (Aug 13 2026) publishes an **AA-derived** table (AA Intelligence Index v4.1.1, AA Agentic Index, AA-LCR, GDPval-AA, τ³-Banking-AA) plus lab evals; **Ant Ling official X** corroborates GPQA 73.40 / IMO 71.03 / Multi-IF 83.15; **Artificial Analysis `ling-3-0-tiny`** independently confirms **specs** (7.9B/1.3B, MIT, text-only, 262K, reasoning) and **Speed 56.4 tok/s #44/62 (2/4, slower than 88 median)** + **Cost $0.00/$0.00**, but **Intelligence Index / Cost-per-task / Verbosity = N/A "No publicly available API."** **Caveat:** the quality benchmarks are **vendor-surfaced** (the live AA page shows no populated Index because the API is free); **AA Intelligence Index 25 is v4.1.1 — pre-v5.0, NON-CONVERTIBLE** to the current 9-eval basket. Speed figures across sources differ by hardware/config (AA 56.4 vs lab's ">160 tok/s" on a different setup) — **speed is NOT a scored dimension.**

**Reasoning / knowledge (AA-derived + lab)**
- **GPQA-Diamond 73.40** — solid for a 1.3B-active model (mid-tier overall).
- **IMO-AnswerBench 71.03**; **IFBench 63.61 / Multi-IF 83.15** (instruction following is a strength).
- **AA Intelligence Index v4.1.1 = 25** (pre-v5.0, non-convertible); **AA Agentic Index = 16**.

**Tool use / agents (AA-derived + lab)**
- **BFCL v4 62.72** — function calling, the model's stated design focus.
- **τ³-Banking-AA 20.80** and **GDPval-AA v2 772 Elo** — modest agentic ceiling.

**Coding (lab)**
- **Terminal-Bench 2.1 27.70**; **SciCode 24.2**; **ArtifactsBench 47.93**. **No SWE-bench, no LiveCodeBench** published.

**Long context (AA-derived)**
- **AA-LCR 58.70** — mid long-context reasoning.

**Speed / cost (AA-independent)**
- **AA Speed 56.4 tok/s #44/62 (2/4 — slower than the 88-median class avg)**; **Cost $0.00/$0.00** (free hosted + MIT self-host). *Not scored dims.*

### Normalized scores (1–100)

- **Tool use: 58/100.**
- **Reasoning: 60/100.**
- **Context window: 62/100.**
- **Multimodal: 50/100.**
- **Coding: 46/100.**
- **Cost efficiency: 92/100.**
- **Overall Score: 55/100.**

> **Overall = half-up mean of the FIVE quality dims** (58 + 60 + 62 + 50 + 46) / 5 = **276 / 5 = 55.2 → 55**. Cost efficiency is recorded but **NOT counted**. Curated `average.md` = **52.6** → **div +2.6**. (Reasoning/Tool reflect genuinely-good-for-size GPQA 73.4 / BFCL 62.7 / Multi-IF 83.2 tempered by a modest agentic ceiling; Coding 46 for TB 27.7 / SciCode 24.2 with no SWE/LCB; Multimodal pinned at the **text-only floor**.)

---

## Signature

- Provided by: **Qwen 3.8 Max (qwen/qwen-3.8-max)** — 2026-11-01
- Method: public internet research (**Ant developer blog "Open-Sourcing Ling-3.0-tiny"** (Aug 13 2026) — **AA Intelligence Index v4.1.1 = 25 / AA Agentic Index = 16**, BFCL v4 62.72, GPQA-Diamond 73.40, IMO-AnswerBench 71.03, IFBench 63.61, Multi-IF 83.15, AA-LCR 58.70, GDPval-AA v2 772 Elo, τ³-Banking-AA 20.80, Terminal-Bench 2.1 27.70, ArtifactsBench 47.93, arch 7.9B/1.3B · 3:1 KDA-MLA · 128 experts (8+1 active) · MTP · 131K→262K/1M · MIT · BF16/FP8/INT4; **Ant Ling official X** corroborates GPQA 73.40 / IMO 71.03 / Multi-IF 83.15; **Artificial Analysis `ling-3-0-tiny`** — **Intelligence Index N/A "No publicly available API"**, **Speed 56.4 tok/s #44/62 (2/4)**, **Cost $0.00/$0.00**, text-only, reasoning, 7.9B/1.3B, MIT, HF weights, released Aug 2026; **`meta`** — SciCode 24.2, "no SWE-bench or LiveCodeBench figure," free $0 API, 8.34 GiB / ~100 tok/s local footprint, Zen free slot deprecated.)
- Future sources: becomes firmer if the **live AA page** populates an **Intelligence Index v5.0** (it currently returns N/A because the API is free) or if Vals / benchlm / an independent leader measures `Ling-3.0-tiny` under its id with SWE-bench / LiveCodeBench / HLE. **Guards applied:** (1) **do NOT cross-credit `ling-3.0-flash` (b26: 124B/5.1B, GPQA 85.5, BFCL 73.0, AA-LCR 73.0), `ling-3.1-flash` (b8: 560B/25B), `ling-2.6-flash` (b48), `ling-2.6-1T` (b28), or `ring-2.6-1T` (b10)** — tiny is its **own 7.9B/1.3B checkpoint** with its own table; (2) the **AA Intelligence Index 25 is v4.1.1 — NON-CONVERTIBLE** to the current v5.0 9-eval basket, treat as directional only; (3) the quality benchmarks are **vendor-surfaced** (live AA shows Index N/A) — **discount, moderate confidence**; (4) **text-only → Multimodal = 50 floor** (AA confirms no image input); (5) **no SWE-bench / LiveCodeBench** — **Coding 46** is built on the *weak* TB 27.7 / SciCode 24.2, **not** invented numbers; (6) **speed (56.4–160 tok/s, 8.34 GiB, TTFT <100 ms) is NOT a scored dimension** and cannot lift the Overall mean; (7) **Cost 92 recorded but NOT counted** (free $0/$0 + MIT self-host is genuinely the standout). **Distinct artifact → scored, not excluded.**
