# MiMo V2.6 Flash Free — findings by GLM 5.3 Flash

- Source: Xiaomi (`XiaomiMiMo/MiMo-V2.6-Flash-RL`, MIT open weights; free route `mimo-v2.6-flash:free`)
- Date: 2026-11-05 (UTC)
- Overview and scoring methodology: `../../model-comparison.md`
- Cross-model signed log: `../../model-findings.md`

> Re-researched 2026-11-05 (prior passes 2026-09-24→10-16): the free route serves the same
> Flash weights as the paid `mimo-v2.6-flash` file re-researched today, so the fresh Vals
> sweep transfers — filling the biggest gaps (Vibe Code Bench 78.96%, CyberBench 75.36% #7,
> ProofBench 63.0%, Vals Index 54.83% #19/32) and documenting the AA Index version chain
> (37.9 v4.3.2 → 26.7 v5.0). BenchLM drifts to 54.78 #76/1009. Tool 88→87, Reasoning
> 70→71, Coding 84→85. Overall 84.4→85. Free-route availability on Token Harbor was NOT
> re-verified this pass (search outage) — flagged.

## Model card

- **Name:** MiMo V2.6 Flash (Free) — free-tier route of the MiMo-V2.6-Flash model
- **Short description:** Xiaomi's efficiency-balanced 309B/15B-active omnimodal MoE, offered free through gateway routes (e.g. Token Harbor `mimo-v2.6-flash:free`) alongside a cheap paid API ($0.14/$0.28 — now verified); best for routine coding-agent work, automation, and multimodal understanding at very low cost. Trails its MiMo V2.6 Pro sibling on hard terminal/security tasks.
- **Provider / access:** Free route `mimo-v2.6-flash:free` (Token Harbor, OpenAI-compatible; text-input only on that route); paid `mimo-v2.6-flash` via Xiaomi MiMo ($0.14/$0.28, cache $0.0028) and 8–11 providers (OpenRouter, Novita, DeepInfra, Kyma, StreamLake…; Relace promo $0.087/$0.187); OpenRouter `xiaomi/mimo-v2.6-flash`; MIT weights `XiaomiMiMo/MiMo-V2.6-Flash-RL`.
- **Release / knowledge:** Released 2026-09-21/22; knowledge cutoff not disclosed.
- **IDs:** `mimo-v2.6-flash:free` (Token Harbor); `xiaomi/mimo-v2.6-flash` (OpenRouter/Xiaomi); `XiaomiMiMo/MiMo-V2.6-Flash-RL` (open weights).
- **Context window:** 1,048,576 tokens; max output 131,072 (LiteLLM-verified on the paid route).
- **Modalities:** checkpoint natively processes text, image, video and audio, returns text; the free route is text-input only; reasoning yes; tool calling yes; JSON mode.
- **Pricing (as of 2026-11-05):** free on the Token Harbor route (allowance-based; **availability not re-verified this pass**); paid $0.14/$0.28 per 1M (cache $0.0028; Batch 50%; promos to $0.087/$0.187 on Relace).
- **Architecture:** 309B total / 15B active sparse MoE, 48 layers, 256 routed experts (8 active); 681M vision encoder, 308M AudioTokenizer + 127M audio patch encoder, five-layer speculative decoder, MTP, hybrid attention; MIT license. ~180 GB VRAM at Q4 (multi-GPU tier); 33–42 tok/s.

### Raw benchmarks found

> Vendor technical-report rows + AA rows (prior passes, re-verified on the BenchLM Nov 4 refresh) + the Vals suite transferred from the same-weights paid-Flash re-research of 2026-11-05. AA Index version chain documented: **37.9 (v4.3.2) → 26.7 (v5.0)**.

Agent / tool use:

- Terminal-Bench 2.1: **87.6%** (technical report, 92nd percentile; vs Pro 89.9); Vals TB4.0-generation read: **24.24% ±1.51** (Vals, #29/59 — vs vendor 28.8%)
- Terminal-Bench-Science (Vals): **4.29%**; SRE Bench 4.20%; HLAB-Vals-1.1 13.33% (all weak, NEW)
- Toolathlon-Verified: **73.6%**; AutomationBench v1.0.6: **52.3%**; OSWorld-Verified: **80.8%**; JobBench 61.2%; Agents' Last Exam 27.6%
- Cyber: CyberGym **95.1%** (leads Pro); CyberBench v1.1 (Vals) **75.36% ±5.42** (#7/47 — NEW, strong); ExploitGym 6.0%
- Vals professional rows (NEW): Finance Agent v2.1 **63.32%** (#12/35), MedScribe **85.28%**, SAGE 83.26%, Public Benefits 67.59%, EMB 68.88%, BioMysteryBench 69.26%, MysteryMechanism 21.62%, MedCode 41.06%, Legal Research 37.98%, Tax Agent 28.51%, Code Migration 39.55%
- GDPval-AA: normalized **55.4%** (AA — minor drift from 55.5%)
- Tau3/Tau2/Claw-Eval: no verified public score found

Reasoning / knowledge:

- AA-HLE: **35.1%** (under the 40% bar); AA-LCR: **74.3%**; CritPt 12.0%
- Artificial Analysis Intelligence Index version chain: **37.9** (v4.3.2) → **26.7** (v5.0, ComputePrices/EveryLocalAI + BenchLM Nov 4) — rebase, not a capability drop
- ProofBench v1.1 (Vals): **63.00%** (NEW — strong); IOI (Vals) 47.67%; BioMysteryBench 69.26%; SAGE 83.26%
- AA-Omniscience: index **−10.8**, accuracy 27.2%, hallucination 52.2% (BenchLM Nov 4 refresh — minor updates from −12.7/27.0/54.4)
- GPQA Diamond / MLCR: no verified public score found for Flash

Coding:

- DeepSWE v1.1: **67.9%** (technical report; vs Pro 71.9)
- Vibe Code Bench v1.1 (Vals): **78.96% ±4.04** (#31/123 — NEW, fills the gap; beats Gemini 3.7 Flash and GPT-5.6 Terra head-to-head)
- AA-SciCode: **51.3%**; MiMo Code Bench 61.2%; ProgramBench 26.0% (Vals 0.50%); MiMo VisualCoding 71.5%; SEC Bench Pro 47.5%
- SWE-bench Verified / SWE-bench Pro / LiveCodeBench: no verified public score found

Long context:

- 1M window; AA-LCR 74.3% (mid); no MRCR/RULER/GraphWalks for this exact model

Multimodal:

- AA-MMMU-Pro: **73.1%** (unchanged)

### Normalized scores (1–100)

- **Tool use: 87/100.** CHANGED from 88 — the Vals TB4.0 reading (24.24%) lands slightly under the vendor's 28.8% and the weak TB-Science/SRE rows join ExploitGym 6.0%; TB2.1 87.6%, CyberBench #7 and Finance Agent #12 hold the band edge.
- **Reasoning: 71/100.** CHANGED from 70 — the strong new ProofBench 63.0% and BioMystery 69.3% rows offset the AA Index rebase to 26.7; AA-HLE 35.1%, CritPt 12.0% and the negative Omniscience index still cap it mid-band.
- **Context window: 95/100.** Unchanged — 1,048,576 tokens (≥1M tier); AA-LCR 74.3% mid; no ≥98% retrieval at 512K+.
- **Multimodal: 85/100.** Unchanged — omni-input checkpoint with AA-MMMU-Pro 73.1%; free route caps input to text.
- **Coding: 85/100.** CHANGED from 84 — the new Vals Vibe 78.96% fills the largest gap strongly; DeepSWE 67.9% and TB2.1 87.6% hold; ProgramBench 26.0% and SEC Pro 47.5% trail.
- **Cost efficiency: 100/100.** Unchanged — $0 on the evaluated free route ($0 = 100), with the verified paid fallback ($0.14/$0.28, promos to $0.087) itself among the cheapest tracked; free-tier caveats (allowance, training-data use, availability unverified this pass) stand.
- **Overall Score: 85/100.** CHANGED from 84.4 — (87 + 71 + 95 + 85 + 85) / 5 = 423/5 = 84.6 → 85. Best-fit: the free workhorse for routine coding-agent loops, automation and multimodal triage — the fresh Vals rows now evidence strong Vibe coding, cybersecurity and finance-agent work at $0; reserve Pro escalation for hard terminal/security tasks.

---

## Signature

- Provided by: **GLM 5.3 Flash (z.ai/glm-5.3-flash)** — 2026-11-05 (re-research pass; prior 2026-10-16)
- Method: public internet re-research via direct page fetches (web-search quota exhausted mid-pass): BenchLM MiMo-V2.6-Flash page fetched 2026-11-05 (Nov 4 data — composite drift 66.03→54.78 #76/1009, AA Index 37.9→26.7 v5 rebase, Omniscience row updates) + the Vals suite transferred from the same-weights paid-Flash re-research of 2026-11-05 (16 benchmarks); Token Harbor free-route availability flagged unverified; scores are normalized 1–100 interpretations, not official vendor scores.
- Future sources: add a new file next to this one, e.g. `Mimo_v2.md`, using the same headings.
