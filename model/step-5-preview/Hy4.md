- Source: StepFun/Step 5 Preview
- Date: 2026-11-14 (UTC)
- Overview and scoring methodology: `../../model-comparison.md`
- Cross-model signed log: `../../model-findings.md`

## Model card

- **Name:** Step 5 Preview
- **Short description:** StepFun's 2026-09-20 flagship base model (skipping Step 4.x), designed for real-world agentic work with a compute-efficiency focus; open-sourced 2026-10-15. A distinct model; Step 3.5/3.7 Flash are earlier versions.
- **Provider / access:** StepFun API/platform, Tencent WorkBuddy, OpenRouter, Hugging Face and ModelScope (BF16 + FP8 weights, technical blog and open-source tooling released 2026-10-15); Moore Threads MTT S5000 / MUSA Day-0 adaptation, Huawei Atlas 950 SuperPoD support.
- **Release / knowledge:** 2026-09-20 (weights 2026-10-15); knowledge cutoff: no verified public score found.
- **IDs:** `step-5-preview` family ID as cited. No free Zen ID verified.
- **Context window:** **1,000,000 tokens**, with Long-horizon RL and Context Compaction for long-cycle agent tasks.
- **Modalities:** text and image in, text out (native visual input); AI programming, software engineering, professional knowledge work, finance; can directly call a camera, COM port, screenshots and simulated mouse input for device-side development/debugging with user authorisation. No verified audio/video input or non-text output.
- **Pricing (as of 2026-11-14):** no rate card in the retrieved page — no verified public price found. **Single-task cost reported as 1/8 of Claude Opus 5**; open weights enable free self-hosting.
- **Architecture:** Sparse MoE, **600B total / 27B active** parameters; "narrow and deep" **92-layer Transformer** with Sparse GQA; Block-wise Token Merging cuts Indexer + Top-k Selection cost by **8x**; ~**100 tokens/s** output (vs an average of 65). Open weights.

### Raw benchmarks found

Agent / tool use:

- Terminal-Bench 4.0: **33.3%**
- StepCodeBench (internal, 553 independent repositories / 9 task types / 20 domains / 33 languages): **49**
- FrontierFinance (financial investment research): **66.4**
- OpenRouter: **#1 Trending** and **#2 global daily ranking** on 2026-10-10
- Hardware case study: ran **3+ hours** autonomously, read developer docs and converted an IoT dev board into a Bluetooth-keyboard + voice-input keyboard
- APEX-Agents / FrontierFinance / DRACO long-horizon CLI tests participated, no absolute APEX/DRACO score published
- Tau3-Banking / Tau2-Bench / GDPval-AA / OSWorld / AutomationBench / Claw-Eval / MCP-Atlas: no verified public score found

Reasoning / knowledge:

- Artificial Analysis Intelligence Index: **44** — **top 3 globally among open models** (also reported as open-source #2 in launch coverage)
- Automated post-training raised Qwen3-30B-A3B AIME24 accuracy from **53.3% → 60%**
- GPQA Diamond / HLE / LCR / CritPt / Omniscience: no verified public score found

Coding:

- DeepSWE v1.1: **67.7%**
- Terminal-Bench 4.0 **33.3%** and StepCodeBench **49** as above
- GPU-kernel optimisation: from scratch on one NVIDIA H100 over ~**22 hours**, reached **508 TFLOPS** peak on an MLA kernel (Opus 5 493 TFLOPS in the same comparison)
- SWE-bench Verified / LiveCodeBench / SciCode / Vibe Code Bench / FrontierSWE: no verified public score found

Long context:

- 1M-token window with Long-horizon RL and Context Compaction; no MRCR / RULER / GraphWalks figure found — no verified public score found

### Normalized scores (1–100)

- **Tool use: 87/100.** #1 OpenRouter Trending, a 3+ hour autonomous hardware-modification run, StepCodeBench 49 across 553 repos and FrontierFinance 66.4; capped by a modest 33.3% Terminal-Bench 4.0 and no scored τ-bench/OSWorld figure.
- **Reasoning: 86/100.** AA index 44 in the global open top 3 from only 27B active params, plus a demonstrated 53.3%→60% AIME24 post-training result; capped by 44 being well below the 65-point closed frontier and no GPQA/HLE numbers.
- **Context window: 91/100.** A verified 1M-token window with purpose-built Long-horizon RL and Context Compaction, demonstrated on multi-hour tasks; capped by no published retrieval benchmark.
- **Multimodal: 83/100.** Native visual input plus direct device-side camera/screenshot/mouse tooling; capped by text-only output, no verified audio/video input, and no published multimodal benchmark.
- **Coding: 88/100.** DeepSWE v1.1 67.7%, StepCodeBench 49 and a 508 TFLOPS kernel optimisation that beat Opus 5's 493; capped by 33.3% Terminal-Bench 4.0 and no SWE-bench Verified figure.
- **Cost efficiency: 95/100.** 27B active params from 600B total, 8x lower indexer cost, 100 tok/s, 1/8 of Opus 5's per-task cost, and free open weights. Excluded from Overall.
- **Overall Score: 87/100.** Half-up mean of 87, 86, 91, 83, 88 = 87.0 → 87. Best fit: cost-sensitive long-horizon agentic coding, finance research and device-side automation with self-hosted open weights.

---

## Signature

- Provided by: **Hy4 (tencent/hy4)** — 2026-11-14 UTC
- Method: Fresh public-web research this pass, conducted independently (no peer findings files consulted). Primary evidence: the Baidu Baike Step 5 Preview article (600B/27B MoE, 92-layer architecture, 1M context, 100 tok/s, AA 44, Terminal-Bench 4.0 33.3%, DeepSWE 67.7%, StepCodeBench 49, FrontierFinance 66.4, 508 TFLOPS kernel case, open-source timeline). Figures belonging to Claude Opus 5 (493 TFLOPS) and Qwen3-30B-A3B are labelled by ID. Scores are normalized 1–100 interpretations, not official vendor scores.
- Reference URLs: only URLs actually fetched this pass.
  - [Step 5 Preview — 百度百科 (architecture, full benchmark table, open source, case studies)](https://baike.baidu.com/item/Step%205%20Preview/69102697)
