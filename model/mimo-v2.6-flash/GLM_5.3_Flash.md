# MiMo-V2.6-Flash — findings by GLM 5.3 Flash

- Source: Xiaomi (`mimo-v2.6-flash-free` on Zen; paid `mimo-v2.6-flash` now verified)
- Date: 2026-11-05 (UTC)
- Overview and scoring methodology: `../../model-comparison.md`
- Cross-model signed log: `../../model-findings.md`

> Re-researched 2026-11-05 (prior passes 2026-10-09, 2026-10-16): the paid tier is now
> **verified** ($0.14/$0.28 per 1M on Xiaomi MiMo; promos to $0.087/$0.187 across 11
> providers) — filling the old "paid equiv. not verified" gap. A full new Vals sweep adds
> Vibe 78.96%, CyberBench 75.36% (#7), ProofBench 63.0% and TB4.0 24.24%; the AA Index
> version chain (37.9 v4.3.2 → 26.7 v5.0) is documented. Coding 76→78; Overall 84→85.

## Model card

- **Name:** MiMo-V2.6-Flash (RL checkpoint; Zen free tier "MiMo-V2.6-Flash Free")
- **Short description:** Xiaomi's efficiency-balanced checkpoint of the MiMo-V2.6 series — an omnimodal reasoning MoE built to "scale reinforcement learning toward self-improvement" with groupwise agentic grading (GRS/GAR) and MOPD2 distillation. Top use cases: high-volume agentic coding, general agents, cybersecurity, and long-horizon multimodal runs at flash pricing. Sibling of MiMo-V2.6-Pro-RL; distinct from the tracked `mimo-v2.5-free`.
- **Provider / access:** OpenCode Zen `opencode/mimo-v2.6-flash-free` (free tier, training-data caveat during the free period); **paid `mimo-v2.6-flash` now verified** on Xiaomi MiMo Open Platform ($0.14/$0.28) and 8–11 providers (OpenRouter, Novita, DeepInfra, Kyma, StreamLake, OpenCode Go, EmpirioLabs…; Relace promo $0.087/$0.187, −37.9% over 90 days); weights on HF/ModelScope (`XiaomiMiMo/MiMo-V2.6-Flash-RL`, `-MOPD`).
- **Release / knowledge:** Published September 2026 (RL checkpoint ~2026-09-21 per BenchLeader/benchgap; Zen free tier listed ~2026-09-28). No verified knowledge cutoff.
- **IDs:** `opencode/mimo-v2.6-flash-free` (Zen); `mimo-v2.6-flash` (Xiaomi MiMo platform); weights as above. Community "Uncensored/Abliterated" fine-tunes exist ($0.50/$1.50) — not this model.
- **Context window:** 1,048,576 tokens; **max output 131,072** (LiteLLM — new precision).
- **Modalities:** Text, image, video, and audio input; text output; reasoning yes (RL model, `--reasoning-parser mimo`); tool calls yes; JSON mode not independently verified.
- **Pricing (as of 2026-11-05):** Free on Zen (evaluated tier; training-data caveat); **paid now verified at $0.14/$0.28 per 1M** (cache read $0.0028; batch 50%; input range $0.087–$0.189 across providers).
- **Architecture:** Sparse MoE, 309B total / 15B activated (HF safetensors 311B); hybrid SWA/GA backbone (48 layers, SWA 128, 256 experts / 8 activated); 681M MiMo ViT + 308M AudioTokenizer + 127M audio patch encoder; 5-layer speculative MTP decoder. MIT license. ~180 GB VRAM at Q4_K_M (multi-GPU tier); 33–42 tok/s measured.

### Raw benchmarks found

> Xiaomi MiMo-V2.6 technical report rows (Pro-RL PDF) + Artificial Analysis rows (prior passes) + the NEW Vals sweep (this pass) + AA v5.0 rebase.

Agent / tool use:

- Terminal-Bench 2.1: **87.6%** (technical report; #16/193 per BenchmarkList; vs Pro 89.9%, Opus 5 89.1%)
- Terminal-Bench 4.0: **28.8%** (technical report) / **24.24% ±1.51** (Vals — NEW; beats Gemini 3.7 Flash's 12.12% and Muse Spark 1.3's 10.61% on the same harness)
- Terminal-Bench-Science (Vals): **4.29%** (weak); SRE Bench 4.20%; HLAB-Vals-1.1 13.33%
- Toolathlon-Verified: **73.6%**; AutomationBench v1.0.6: **52.3%**; OSWorld-Verified: **80.8%**; JobBench 61.2%; Agents' Last Exam 27.6%
- Cybersecurity: CyberGym **95.1%**, CyberBench v1.1 (Vals) **75.36% ±5.42** (#7 of 47 — NEW, strong), MiMo Cyber Bench 77.2%, ExploitBench 25.3%, ExploitGym 6.0%, SEC Bench Pro 47.5%
- GDPval-AA: **55.5%** (AA-normalized); Vals Finance Agent v2.1 **63.32%** (#12/35 — NEW); Vals Finance Index 57.15%, Legal Index 68.99%, Science Index 31.72%
- Vals professional rows (NEW): MedScribe **85.28%**, SAGE 83.26%, EMB 68.88%, BioMysteryBench 69.26%, MysteryMechanism 21.62%, Public Benefits 67.59%
- AA Agentic Index 36.5 (v5-era reading)

Reasoning / knowledge:

- AA-HLE: **35.1%**; AA-LCR: **74.3%**; CritPt: 12.0%
- Artificial Analysis Intelligence Index version chain: **37.9** (v4.3.2) → **26.7** (v5.0-era, ComputePrices/EveryLocalAI Nov 2, 46th percentile) — rebase, not a capability drop; Coding Index 22.1, Agentic 36.5 on v5
- ProofBench v1.1 (Vals): **63.00% ±4.85** (NEW — strong; beats Gemini 3.7 Flash's 58.0 and Muse Spark 1.3's 55.0)
- AA-Omniscience: index −12.7, accuracy 27.0%, hallucination 54.4%
- GPQA Diamond: no verified public score found (still)
- MMLU-Pro/AGIEval/C-Eval etc.: base-model internal rows from the technical report (unchanged)

Coding:

- DeepSWE v1.1: **67.9%** (vs Pro 71.9%, Opus 5 74.0%)
- Vibe Code Bench v1.1 (Vals): **78.96% ±4.04** (#31/123 — NEW, fills the gap; beats Gemini 3.7 Flash's 70.39% and GPT-5.6 Terra's 74.59%)
- AA-SciCode: **51.3%** (below the 55% mark); MiMo Code Bench 61.2%; ProgramBench 26.0% / Vals 0.50%
- Terminal-Bench 2.1 (coding harness): 87.6%; MiMo VisualCoding 71.5%
- LiveCodeBench: no verified public score found (still)

Long context:

- 1M window; AA-LCR **74.3%** measured; no MRCR/RULER/GraphWalks at depth

Multimodal / vision:

- AA-MMMU-Pro: **73.1%** (only measured vision row; unchanged)

### Normalized scores (1–100)

- **Tool use: 84/100.** Unchanged — TB2.1 87.6% (92nd percentile), the new Vals TB4.0 24.24% (which beats several frontier-adjacent models on the same harness), CyberBench #7 and Finance Agent #12 corroborate the mid-band; ExploitGym 6.0% and TB-Science 4.29% cap it.
- **Reasoning: 76/100.** Unchanged — the AA Index rebase (37.9→26.7 on v5) is offset by the strong new ProofBench 63.0% row; AA-HLE 35.1%, AA-LCR 74.3% and the 54.4% hallucination rate keep it upper-mid, below frontier reasoning.
- **Context window: 95/100.** Unchanged — 1M tokens (≥1M tier) with 131K output now confirmed; no ≥98% retrieval at 512K+ published (AA-LCR 74.3% strongest evidence).
- **Multimodal: 90/100.** Unchanged — text/image/video/audio in via dedicated encoders meets the omni-tier floor; text-only output and modest AA-MMMU-Pro 73.1% keep it at the floor.
- **Coding: 78/100.** CHANGED from 76 — the new Vals Vibe 78.96% row fills the biggest gap with a strong result (beating Gemini 3.7 Flash and GPT-5.6 Terra head-to-head), joining DeepSWE 67.9% and TB2.1 87.6%; AA-SciCode 51.3% and ProgramBench 26.0% still cap it below the 80s.
- **Cost efficiency: 98/100.** Unchanged — $0 on the evaluated Zen Free tier (training-data caveat, limited-time), and the newly verified paid fallback ($0.14/$0.28, promos to $0.087/$0.187) is itself near the cheapest in the dataset — the downside scenario improved.
- **Overall Score: 85/100.** CHANGED from 84 — (84 + 76 + 95 + 90 + 78) / 5 = 423/5 = 84.6 → 85. Best fit: a genuinely cheap omni-input agentic workhorse that now has third-party Vals evidence it punches above its price on Vibe coding, cybersecurity and finance-agent work; pair with a frontier reasoner for deep science/math and don't trust it on knowledge recall.

---

## Signature

- Provided by: **GLM 5.3 Flash (z.ai/glm-5.3-flash)** — 2026-11-05 (re-research pass; prior 2026-10-16)
- Method: public internet re-research (3 web searches: Xiaomi MiMo platform + LiteLLM/ComputePrices/BenchLeader/pricepertoken pricing and provider verification (paid tier now confirmed), Vals AI model page + six Vals comparison pages (vs GLM 5.3, Gemini 3.7/3.8 Flash, GPT-5.6 Terra, GPT-6 Luna, Muse Spark 1.3), EveryLocalAI/llmbenchmark AI-index rebase rows + technical-report rows via BenchmarkList); AA version chain documented; estimates excluded; scores are normalized 1–100 interpretations, not official vendor scores.
- Future sources: add a new file next to this one, e.g. `MiMo_V2.7.md`, using the same headings.
