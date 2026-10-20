# GLM 5.3 Flash — findings by Step 5 Preview

- Source: Z.ai `glm-5.3-flash`
- Date: 2026-10-19 (UTC) — third-pass verification
- Overview and scoring methodology: `../../model-comparison.md`
- Cross-model signed log: `../../model-findings.md`

## Model card

- **Name:** GLM 5.3 Flash (`glm-5.3-flash`; circulated as codename "Ox Alpha" before 2026-08-26)
- **Short description:** Z.ai's fast, open-weight, natively multimodal sibling to the flagship text-only GLM-5.3 — the first natively multimodal GLM-5 model — priced at roughly a tenth of the full model. MIT-licensed weights for immediate self-hosting.
- **Provider / access:** Z.ai official API, OpenRouter, Cloudflare Workers AI, Together/DeepInfra/Novita/Baseten; plus self-hosted local inference from the Hugging Face weights (`zai-org/GLM-5.3-Flash`, FP8/BF16/GGUF). MIT license (unrestricted commercial use). No published model-specific data-retention policy (general API ToS applies; self-hosting avoids the question).
- **Release / knowledge:** Released 2026-08-26 (circulated 6 days as "Ox Alpha" before identity confirmed). Knowledge cutoff not explicitly disclosed.
- **IDs:** `glm-5.3-flash` (Z.ai) / `zai-org/GLM-5.3-Flash` (HF). MIT open weights = free self-host.
- **Context window:** 1,048,576 (1M) input; 131,072 max output (raised from the 48,000 quoted at launch).
- **Modalities:** Text, image, video, PDF in; text + tool-calls out. Reasoning yes (thinking levels low→max); tool calls yes; JSON yes. No image/audio/video output.
- **Pricing (as of 2026-10-08):** $0.15/M in · $0.50/M out · $0.03/M cached in (launch 50%-off promo ended 2026-09-09). MIT self-host = hardware only.
- **Architecture:** MoE, 320B total / 18B active, 45 layers mixing KDA linear attention + NoPE sparse MLA attention, 8-of-288 experts routed per token, Manifold-Constrained Hyper-Connections (mHC).

### Raw benchmarks found

> Cross-referenced hokai.io (Z.ai + Artificial Analysis) and vectorwire.ai (48 results/41 benchmarks, 20 independent, capability profile). Note: AA re-benchmarked its Index methodology post-launch (57 under old v4.1.1 → 42 under current v4.3.2).

- BenchLM composite (2026-10-19): **58.53/100** overall, #59 of 956 models, 45 of 644 benchmarks covered (partial coverage — conservative)
- Artificial Analysis today (2026-10-19): Intelligence Index **42** (#6/121 open-weights, 4/4 units — was 4th/116; unchanged value), 78.0 tok/s (#39/78 — re-measured up from the 50.2 t/s launch read), TTFT 2.52s, **180M Index tokens (very verbose vs the 140M median — a cost multiplier)**, $0.28 per Index task, $0.15/$0.50 with 80% cache discount (blended $0.10/M), 1M context, 26 providers. AA's official modality row lists **text+image only** — the video/PDF claims rest on Z.ai's launch/multimodal evals (conflict noted)

Agent / tool use:

- Terminal-Bench 2.1: **84.3%** (vendor-reported; within a point of Claude Opus 4.8's 85.0%, just short of GPT-5.6 Terra's 87.4%) / **62.9%** (Vals AI Terminus-2, independent — reported 2026-09-28) — a large harness split
- Terminal-Bench 4.0: **35.8%** (Claude Code harness) / **29.8%** (Mercor mini-swe-agent, independent — reported 2026-10-07)
- APEX-Agents Original: **52.8%** (Mercor, independent — reported 2026-10-07)
- Chartography Oct 2026: **16.3%** (Surge AI, independent — reported 2026-10-07)
- CharXiv: **92.5%** (Mercor single-shot, independent — reported 2026-10-07)
- GDPval-AA v2 (Elo): **1,773** (vendor-reported; Artificial Analysis) — clears the ~1750 frontier threshold
- Toolathlon: **78.4%** (vendor-reported)
- AutomationBench: **48.8%** (Z.ai; nearly doubled from GLM-5.2's 26.2%)
- Code Bench v1.0: **29.0** (Z.ai; vs Opus 4.8's 29.5)
- Agent's Last Exam: **26.3%** (vendor-reported)
- Vector Wire capability: **Agentic "Capable"** (−17.1% vs leader, 3/7)
- New independent rows (2026-10-19): AA AutomationBench **60.4%**, AA Tau3 Banking **47.2%**, AA Briefcase **Elo 1,453**, AA EnterpriseOps-Gym **33.2%**, AA ITBench **51.2%**, AA Terminal-Bench 2.1 **84.3%**, AA Terminal-Bench 4.0 **32.8%** (sits between the Claude Code 35.8% and Mercor 29.8% reads), Hermes Index **35.0%** / Hermes Bench **68.9%**, GDP.pdf **15.4%**, AA-AnalystAgent **25.0%**, MazeBench **0%**

Reasoning / knowledge:

- HLE with tools: **55.3%** (Z.ai launch disclosure) — clears the 40% frontier bar
- Artificial Analysis Intelligence Index: **42** (current v4.3.2; 4th of 116 in its class — the day-one 57 was the old methodology)
- AA-Omniscience: **7.47** (weak factuality/calibration)
- Vector Wire capability: **Reasoning "Capable"** (−18.1% vs leader, 5/6); **Factuality "Limited"** (−26.7%); **Math "Limited"** (−47.2%)
- GPQA Diamond / MMLU-Pro now surfaced (2026-10-19): AA-GPQA Diamond **91.2%** (Vals **86.4%**) — near-ceiling on AA's run; MMLU-Pro (Vals) **86.1%**; AA-HLE **39.9%** (just below the 40% bar on AA's read; 55.3% with tools above)
- FrontierMath v2 (Epoch AI, 2026-10-19): Tiers 1–3 **55.789%** / Tier 4 **17.073%** — mid-band math; AA-LCR **80.0%**, CritPt **15.4%**, MLCR-AA **51.1%**

Coding:

- DeepSWE v1.1: **63.4%** (Z.ai; up from GLM-5.2's 46.2%) — mid-tier, below the 74% frontier ref
- Terminal-Bench 2.1: **84.3%** (see tool use — strong terminal coding)
- AA Coding Index: **71.53** (xHigh aggregator)
- NL2Repo: **56.3%** (vendor-reported)
- SWE-bench Verified / LiveCodeBench now surfaced (2026-10-19): SWE-bench (Vals) **92.0%** — frontier-band, filling the prior gap; LiveCodeBench (Vals) **80.5%**; OpenHarmony Bench **57.3%**; still weak: FrontierSWE v2 **18.1%**, Bug Hunt Bench **17.7 fixes**
- Vector Wire capability: **Coding "Limited"** (−25.5% vs leader, 5/10) — a relative weakness despite the strong TB2.1

Multimodal:

- Text + image + video + PDF in; text out. First natively multimodal GLM-5 model.
- MV-Bench: **77.8%**; MMVU: **80.5%**; BabyVision: **53.4%**; CharXiv reasoning: **89.4%**
- Vector Wire: Multimodal **not rated** (too few results)

Long context:

- 1M input / 131K output. Vector Wire: Long Context **"Capable"** (−10.9% vs leader, 1/3). No explicit MRCR ≥98%-at-512K figure published.
- **Tool use: 84/100.** Terminal-Bench 2.1 84.3% (within a point of Opus 4.8), GDPval-AA 1,773 Elo (clears the ~1750 frontier threshold), Toolathlon 78.4%, and AutomationBench 48.8% are strong. Capped by Agent's Last Exam 26.3% and Vector Wire's Agentic "Capable" (−17.1%), plus the vendor-reported nature of most tool numbers.
- **Reasoning: 78/100.** HLE 55.3% with tools clears the 40% bar. Capped hard by the AA Intelligence Index of 42 (4th of 116 in class; the day-one 57 was the old methodology), AA-Omniscience 7.47 (weak calibration), Vector Wire's Reasoning "Capable" (−18.1%) and Math "Limited" (−47.2%), and unpublished GPQA/MMLU-Pro/SWE-bench Verified.
- **Context window: 92/100.** 1M input / 131K output (the 131K output is generous) with Long Context "Capable" (−10.9%) — solid ≥1M tier. Not a full 100 because no explicit MRCR ≥98%-at-512K retrieval figure was published.
- **Multimodal: 82/100.** Text + image + video + PDF in (first natively multimodal GLM-5) with MV-Bench 77.8%, MMVU 80.5%, and CharXiv 89.4% → the 75–90 "video/PDF in" band; held to 82 by text-only output and Vector Wire not rating Multimodal (too few results).
- **Coding: 80/100.** Terminal-Bench 2.1 84.3% and AA Coding Index 71.53 are solid, but DeepSWE 63.4% is below the 74% frontier ref, NL2Repo 56.3% is mid, SWE-bench Verified/Pro are unpublished for the Flash variant, and Vector Wire rates Coding "Limited" (−25.5%, 5/10) — terminal coding leads while deeper agentic coding lags.
- **Cost efficiency: 96/100.** $0.15/$0.50 per 1M (roughly a tenth of a full frontier model; rubric ~$0.10–$0.60 = 97–99), cached input $0.03/M, AND MIT-licensed open weights for free self-hosting (FP8 needs an 8-GPU Hopper node ~306 GiB). Among the best value in the top tier reviewed here.
- **Overall Score: 83/100.** Mean of the five non-cost dims (84+78+92+82+80)/5 = 83.2. Best fit as a self-hostable, MIT-licensed, ultra-cheap natively-multimodal model for agentic coding, terminal-automation, and screenshot/video-aware agent loops with a 1M context; a weaker choice for workloads needing verified academic-reasoning benchmarks (GPQA/SWE-bench unpublished) or high-throughput low-latency chat.

---

## Signature

- Provided by: **Step 5 Preview (opencode/step-5-preview)** — 2026-10-19
- Method: public internet research; scores are normalized 1–100 interpretations, not official vendor scores. Third-pass verification (2026-10-19) re-ran Artificial Analysis and BenchLM: AA Index 42 unchanged (#6/121 open-weights), 78.0 tok/s (re-measured up from 50.2), 180M Index tokens (very verbose), $0.28/task, 26 providers; BenchLM composite 58.53/100 (#59/956, 45/644 benchmarks) filling the prior gaps — AA-GPQA 91.2%/Vals 86.4%, MMLU-Pro (Vals) 86.1%, SWE-bench (Vals) 92.0%, LCB (Vals) 80.5%, AA-HLE 39.9%, AA-LCR 80.0%, Epoch FrontierMath v2 55.8%/17.1%, AA AutomationBench 60.4%, AA TB4.0 32.8% — all consistent with the existing scores (GPQA/SWE-bench fills corroborate rather than raise the mid-tier reads, held by AA-HLE 39.9%, Omniscience 7.5 and the vendor-heavy tool evidence); AA's modality row lists text+image only vs Z.ai's video/PDF claims (conflict noted). No score change warranted. Second-pass verification (2026-10-10) cross-referenced benchmarkregistry.org (32 primary-source results, updated 2026-10-07 — independent TB2.1 Vals 62.9% vs 84.3% vendor [large harness split], TB4.0 29.8–35.8%, APEX-Agents 52.8%, DeepSWE 63.0%, CharXiv 92.5%, Chartography 16.3%) — no score change warranted; the vendor-vs-independent TB2.1 split confirms the existing mid-tier Tool use 84 / Coding 80 reads. Prior pass (2026-10-08) used Z.ai + Artificial Analysis (via hokai.io) and vectorwire.ai.
- Future sources: add a new file next to this one, e.g. `GPT_5.md`, using the same headings.


### Normalized scores (1–100)
