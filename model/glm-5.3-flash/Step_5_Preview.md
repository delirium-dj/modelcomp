# GLM 5.3 Flash — findings by Step 5 Preview

- Source: Z.ai `glm-5.3-flash`
- Date: 2026-10-08 (UTC)
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

Agent / tool use:

- Terminal-Bench 2.1: **84.3%** (vendor-reported; within a point of Claude Opus 4.8's 85.0%, just short of GPT-5.6 Terra's 87.4%)
- GDPval-AA v2 (Elo): **1,773** (vendor-reported; Artificial Analysis) — clears the ~1750 frontier threshold
- Toolathlon: **78.4%** (vendor-reported)
- AutomationBench: **48.8%** (Z.ai; nearly doubled from GLM-5.2's 26.2%)
- Code Bench v1.0: **29.0** (Z.ai; vs Opus 4.8's 29.5)
- Agent's Last Exam: **26.3%** (vendor-reported)
- Vector Wire capability: **Agentic "Capable"** (−17.1% vs leader, 3/7)

Reasoning / knowledge:

- HLE with tools: **55.3%** (Z.ai launch disclosure) — clears the 40% frontier bar
- Artificial Analysis Intelligence Index: **42** (current v4.3.2; 4th of 116 in its class — the day-one 57 was the old methodology)
- AA-Omniscience: **7.47** (weak factuality/calibration)
- Vector Wire capability: **Reasoning "Capable"** (−18.1% vs leader, 5/6); **Factuality "Limited"** (−26.7%); **Math "Limited"** (−47.2%)
- GPQA Diamond / MMLU-Pro / SWE-bench Verified: NOT separately published for the Flash variant as of this writing

Coding:

- DeepSWE v1.1: **63.4%** (Z.ai; up from GLM-5.2's 46.2%) — mid-tier, below the 74% frontier ref
- Terminal-Bench 2.1: **84.3%** (see tool use — strong terminal coding)
- AA Coding Index: **71.53** (xHigh aggregator)
- NL2Repo: **56.3%** (vendor-reported)
- SWE-bench Verified / SWE-bench Pro / LiveCodeBench: not published for the Flash variant — treated as provisional
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

- Provided by: **Step 5 Preview (opencode/step-5-preview)** — 2026-10-08
- Method: public internet research; scores are normalized 1–100 interpretations, not official vendor scores. Cross-referenced Z.ai + Artificial Analysis (via hokai.io) and vectorwire.ai (48 results, 20 independently verified, capability profile).
- Future sources: add a new file next to this one, e.g. `GPT_5.md`, using the same headings.


### Normalized scores (1–100)
