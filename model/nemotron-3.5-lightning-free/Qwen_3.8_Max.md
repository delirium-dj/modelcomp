# Nemotron 3.5 Lightning — findings by Qwen 3.8 Max

- Source: NVIDIA (`opencode/nemotron-3.5-lightning-free`; weights `nvidia/NVIDIA-Nemotron-3.5-Lightning-30B-A3B`; AA `nemotron-3-5-lightning`; OpenRouter `nvidia/nemotron-3.5-lightning:free`)
- Date: 2026-11-01 (UTC)
- Overview and scoring methodology: `../../model-comparison.md`
- Cross-model signed log: `../../model-findings.md`

> **Verdict:** **Nemotron 3.5 Lightning** is **NVIDIA's smallest Nemotron-3 open-weight model** (released **11 Aug 2026**, **OpenMDW-1.1**), a **30B-total / ~3B-active MoE purpose-built for the *execution layer* of always-on agents** — tool calls, result validation, formatting, sub-agent delegation — not for planning. The queue id `…-lightning-free` is simply **OpenCode Zen's $0 trial route of this same model** (paid $0.07/$0.20 elsewhere), so it is scored on the real artifact's merits. Its shape is a genuine, **independently-tracked Pareto trade-off**: **Artificial Analysis ranks it the #1-fastest model it measures (292.8 tok/s, 4-of-4)** and among the **cheapest (#2/6 on cost-per-task)**, but with the **Intelligence Index at just 6** — "among the least intelligent models" (class median 13). NVIDIA's own launch frames it exactly this way: it "**defines the accuracy-speed Pareto frontier for small open models**," hitting **86% on PinchBench while finishing 10,000 agentic tasks 30% faster than Qwen3.6-35B at similar accuracy**. The honest read: an **excellent cheap fast executor whose complex-reasoning / agentic ceiling is low** (curated tradeoff: **Terminal-Bench 2.1 24.6%, τ³-Banking 9.3%, AutomationBench 0.8%**). Scored, landing essentially **on the curated line**.

## Model card

- **Name:** Nemotron 3.5 Lightning (30B-A3B)
- **Short description:** NVIDIA's execution-layer agent model — a small sparse-MoE (with MTP/speculative-decoding + DSpark/DFlash draft models and an NVFP4 checkpoint) optimized for high-volume, low-latency tool calls inside harnesses (OpenClaw, Hermes Agent).
- **Provider-access:** OpenCode Zen (`:free` trial route), **OpenRouter** (`nvidia/nemotron-3.5-lightning`), **DeepInfra** ($0.08/$0.20), build.nvidia.com, plus **Hugging Face / ModelScope weights** (BF16 + NVFP4) and **free self-host** under OpenMDW-1.1.
- **Release-knowledge:** Released **11 Aug 2026**; smallest member of the Nemotron 3 family (Ultra/Super handle planning; Lightning routes "down" via NeMo Switchyard).
- **IDs:** `opencode/nemotron-3.5-lightning-free` · `nvidia/NVIDIA-Nemotron-3.5-Lightning-30B-A3B` · AA `nemotron-3-5-lightning`.
- **Context window:** AA card lists **1M tokens**; **served 262,144** (DeepInfra 262.1K/262.1K); the 1M figure is the multi-GPU ceiling (curated note "up to 1M on 8× H100").
- **Modalities:** **Text in / text out only** → Multimodal scored at the text-only convention.
- **Pricing:** **Free** Zen trial tier (usage logged — keep confidential data off); paid **$0.06–$0.08 in / $0.20 out** per M; **$0 self-host** (OpenMDW).
- **Architecture:** sparse MoE, **AA-measured 31.6B total / 3.6B active** (curated "30B/3B"); multi-token-prediction baked into pretraining + DSpark/DFlash draft models for speculative decoding; NVFP4 + BF16 checkpoints. *(The curated "Mamba-2" label is not stated in NVIDIA's launch post and is treated as unconfirmed; scoring does not depend on it.)*

### Raw benchmarks found

> Provenance: **rich INDEPENDENT AA tracking + vendor execution evals.** **Artificial Analysis** measures **Intelligence Index, Speed, Cost, Verbosity** (the AA page's "Model summary" is authoritative). **PinchBench, Terminal-Bench 2.1, τ³-Banking, AutomationBench** cells are **NVIDIA model-card / launch numbers** (PinchBench is an *efficiency/throughput* bench, not a raw-capability one). **Competitors** (Qwen3.6-35B, Nemotron 3 Ultra/Super) are **rivals/orchestrators — never credited to Lightning.**

**Coding / agentic (mixed, execution-weighted):**
- **PinchBench 86% accuracy, 10,000 tasks 30% faster than Qwen3.6-35B at similar accuracy** (VENDOR, via NVIDIA blog) — an **efficiency** metric (speed at parity), not peak intelligence.
- **Terminal-Bench 2.1 24.6%** (curated tradeoff / vendor) — *weak* on long agentic coding runs; consistent with "executes rather than plans."
- **AA Intelligence Index = 6 (INDEPENDENT)** — v5.0 basket (AA-Briefcase, AutomationBench-AA, Terminal-Bench 4.0, FrontierCode 2.0, AA-Omniscience, GDP.pdf, HLE-Diamond, CritPt v2, TB-Science); AA flags it "**among the least intelligent models**" (class median 13). Individual eval cells are chart-rendered (not transcribable).

**Reasoning / knowledge (weak):**
- No standalone **GPQA / AIME / HLE / LiveCodeBench** published for Lightning specifically; the low AA composite (6) is the independent signal for a low reasoning ceiling.

**Tool use (its design target, but low ceiling):**
- Native function calling + harness-optimized training make **routine tool/execution steps reliable and cheap**; but **τ³-Banking 9.3%** and **AutomationBench 0.8%** (curated tradeoff) show the **complex multi-step agentic orchestration ceiling is low**.

**Vision / multimodal:** none — text-only.

**Long context:** **1M nominal / 262K served**; no MRCR / needle benchmark published.

**Speed / cost (NOT scored dimensions):** AA **292.8 tok/s, #1/62 (4-of-4, fastest model AA tracks)**; **Cost $0.06 in / $0.20 out, cache 42%, $0.29 per Intelligence-Index task, #2/6 (1-of-4 cheapest)**; **Verbosity 78M tokens, #4/6 (3-of-4)**; TTFT **~0.6 s** (curated standout). *The raw speed is the headline; it is not a scored axis.*

**Meta-verification:** curated meta **largely accurate** — 30B/3B OpenMDW-1.1, text-only, free Zen trial (usage logged), paid ~$0.06–0.08/$0.20, weak agentic ceiling (TB 2.1 24.6 / τ³-Banking 9.3 / AutomationBench 0.8). **Two flags:** (a) meta's **313 tok/s** vs **AA-measured 292.8 tok/s** (#1/62) — speed is provider-dependent, both are "fastest-in-class"; (b) meta's **"Mamba-2"** architecture claim is **unconfirmed by NVIDIA's launch post** — not relied on. No corrections change the scores.

### Normalized scores (1–100)

- **Tool use: 58/100.**
- **Reasoning: 48/100.**
- **Context window: 76/100.**
- **Multimodal: 50/100.**
- **Coding: 55/100.**
- **Cost efficiency: 88/100.**
- **Overall Score: 57/100.**

> Overall = half-up mean of the five non-cost dimensions (58 + 48 + 76 + 50 + 55) / 5 = 287 / 5 = **57.4 → 57**. Curated average is **57.0** → my divergence **+0.4** (the independent AA #1-speed / cheap-cost + a genuine 1M-context ceiling nudge it a hair up; the bottom-tier AA Intelligence Index of 6 and sub-25% agentic benchmarks keep reasoning, coding and tool use modest).

---

## Signature

- Provided by: **Qwen 3.8 Max (qwen/qwen-3.8-max)** — 2026-11-01
- Method: public internet research (**Artificial Analysis `nemotron-3-5-lightning`** — **Intelligence Index 6 (#6/66, 1-of-4)**, **Speed 292.8 tok/s (#1/62, 4-of-4)**, **Cost $0.06/$0.20, cache 42%, $0.29/task (#2/6)**, **Verbosity 78M (#4/6)**, **1M context, text-only, Reasoning = Yes, 31.6B total / 3.6B active, OpenMDW-1.1**, v5.0 9-eval basket, AA calls it "among the least intelligent models … notably fast … somewhat verbose"; **NVIDIA technical blog (11 Aug 2026)** — execution-layer 30B/3B MoE for OpenClaw/Hermes, MTP + DSpark/DFlash speculative decoding + NVFP4 checkpoint, **PinchBench 86% while completing 10,000 tasks 30% faster than Qwen3.6-35B**, "defines the accuracy-speed Pareto frontier for small open models," NeMo Switchyard routes execution down to Lightning; **llm-stats `nemotron-3.5-lightning-30b-a3b`** — released 11 Aug 2026, **DeepInfra $0.08/$0.04-cached/$0.20, served 262.1K/262.1K**, OpenMDW v1.1; **OpenRouter `nvidia/nemotron-3.5-lightning:free`** — free route, 30B/3B; **curated meta** — free Zen trial (usage logged), TB 2.1 24.6 / τ³-Banking 9.3 / AutomationBench 0.8, 313 tok/s / 0.6 s TTFT.) AA Intelligence/Speed/Cost independent; PinchBench & the weak agentic cells are vendor.
- Future sources: refresh when **NVIDIA transcribes Terminal-Bench / τ-Bench / FrontierCode individual cells** out of chart images, and when the **AA per-evaluation breakdown (AA-Omniscience, HLE-Diamond, CritPt v2)** is readable for Lightning. **Guards applied:** (1) `…-lightning-free` is **the same Nemotron 3.5 Lightning model** on OpenCode Zen's trial route, not a separate checkpoint — scored on its own artifact; (2) **PinchBench 86% is an efficiency/throughput benchmark** (tasks-per-time at parity), **not** raw intelligence — the independent quality signal is the **AA Intelligence Index 6**; (3) NVIDIA's "**Pareto frontier**" claim = **accuracy-per-speed**, not high absolute accuracy; (4) **do NOT import Nemotron 3 Ultra / Super / Bolt / Nano / Super-VL numbers** — distinct family members; (5) **competitor cells (Qwen3.6-35B etc.) are rivals**, never credited here; (6) **meta's 313 tok/s vs AA 292.8** — both fastest-in-class, provider-dependent; (7) **"Mamba-2" architecture label unconfirmed** by the launch post — not relied on; (8) **text-only → Multimodal 50**; (9) **raw #1 speed and cheap cost are NOT scored dimensions** (cost efficiency 88 recorded, excluded from Overall). **Cost efficiency (88) scored but excluded from Overall.**
