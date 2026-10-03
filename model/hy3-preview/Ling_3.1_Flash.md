# Hy3 preview — findings by Ling 3.1 Flash

- Source: Ling 3.1 Flash (opencode/ling-3.1-flash-free) / Hy3 preview
- Date: 2026-10-03 (UTC)
- Overview and scoring methodology: `../../model-comparison.md`
- Cross-model signed log: `../../model-findings.md`

> **IDENTITY NOTE:** This folder tracks the **Hy3 preview** (2026-04-23/24) — the April 2026 preview release, distinct from the final **Hy3** (2026-07-06) in the `hy3` folder. The preview runs under the **Tencent Hy Community License Agreement** (the final Hy3 moved to Apache 2.0). The preview's HF evaluation section is richer than the final release's captured evidence, so this report scores the preview on its own card.

## Model card

- **Name:** Hy3 preview (Tencent Hy / Hunyuan)
- **Short description:** Tencent Hy Team's rebuilt-infrastructure MoE flagship-preview — "the strongest we've shipped so far", with hybrid fast-and-slow thinking, co-designed with Yuanbao, CodeBuddy, and WorkBuddy.
- **Provider / access:** Tencent — GitHub, Hugging Face (`tencent/Hy3-preview`), ModelScope, GitCode; vLLM and SGLang supported; Tencent Cloud Token Plans from 28 RMB/month (~$4/mo); supports OpenClaw, OpenCode, KiloCode.
- **Release / knowledge:** 2026-04-23 (weights) / 2026-04-24 (launch). Knowledge cutoff not captured.
- **IDs:** `Hy3-preview`; folder `hy3-preview`.
- **Context window:** 256,000 tokens.
- **Modalities:** Text in, text out (no vision documented in the captured sources).
- **Pricing (as of 2026-10):** Token Plans from 28 RMB/month; open weights under the Tencent Hy Community License Agreement.
- **Architecture:** MoE, 295B total / 21B active + 3.8B MTP layer parameters; hybrid fast-and-slow thinking; first model trained on Tencent's rebuilt pre-training and RL infrastructure (rebuild started February 2026).

### Raw benchmarks found

**Vendor-reported (HF model card / GitHub README):**

*Instruct model (evaluation results section):*
- GPQA Diamond **87.2** (Idavidrein/gpqa leaderboard); SWE-bench Verified **74.4** (SWE-bench/SWE-bench_Verified leaderboard); HLE **30*** (cais/hle; * = run internally per the card's methodology); Terminal-Bench 2.0 **54.4** (harborframework/terminal-bench-2.0 leaderboard).

*Pre-trained (base) model table (shots as in card; bold = best in its column group per the card):*
- MMLU 87.42, MMLU-Pro 65.76, MMLU-Redux 86.86, ARC-Challenge 95.99, DROP 85.50, PIQA 84.39, SuperGPQA **51.60**, SimpleQA 26.47.
- MBPP-plus 78.71, CRUXEval-I **71.19**, CRUXEval-O 68.38, LiveCodeBench-v6 **34.86**.
- GSM8K **95.37**, MATH **76.28**, CMath **91.17**.
- C-Eval 89.80, CMMLU 89.61, Chinese-simpleQA 69.73, MMMLU **80.15**, INCLUDE **78.64**.

*Named but not quantified in the captured sources:* FrontierScience-Olympiad, IMOAnswerBench, Tsinghua Qiuzhen College Math PhD qualifying exam (Spring '26), China High School Biology Olympiad (CHSBO 2025), CL-bench / CL-bench-Life (Tencent's own context-learning benchmarks), BrowseComp, WideSearch, ClawEval, WildClawBench, Hy-Backend, Hy-Vibe Bench, Hy-SWE Max.

**Deployment / efficiency (vendor-reported):**
- 40% inference-efficiency improvement via architecture-inference co-design; CodeBuddy/WorkBuddy: TTFT −54%, end-to-end response time −47%, success rate >99.99%.
- Powers complex agent workflows of up to **495 steps** (document processing, data analysis, knowledge retrieval, MCP toolchain orchestration); Tencent Docs AI PPT: +20% generation success rate vs Hy2.
- Known issues (vendor-disclosed): insufficient error recovery in tool calls; sensitivity to inference hyperparameters.

## Scores

- **Tool use: 67/100.** SWE-bench Verified 74.4% and Terminal-Bench 2.0 54.4% are strong agentic rows; ClawEval/WildClawBench/BrowseComp/WideSearch named but not quantified; 495-step workflows and MCP toolchain orchestration documented; vendor-disclosed tool-call error-recovery issues.
- **Reasoning: 67/100.** GPQA Diamond 87.2% and HLE 30% (internal run) are solid; base-model math rows (GSM8K 95.37, MATH 76.28, SuperGPQA 51.60) support the STEM claim; FrontierScience-Olympiad / IMOAnswerBench values not captured.
- **Context window: 70/100.** 256K tokens; CL-bench/CL-bench-Life improvements named but not quantified; no MRCR captured.
- **Multimodal: 15/100.** Text-only per captured sources.
- **Coding: 69/100.** SWE-bench Verified 74.4%, TB 2.0 54.4%, LiveCodeBench-v6 34.86 and CRUXEval-I 71.19 (base); strong for a 21B-active model, mid-tier in absolute 2026-10 terms.
- **Cost efficiency: 91/100.** Token Plans from 28 RMB/month (~$4/mo), open weights, 40% inference-efficiency gain, 2.8-class throughput claims for its size.
- **Overall Score: 57.6/100.** Mean of Tool use 67, Reasoning 67, Context window 70, Multimodal 15, Coding 69 = 57.6.

> **Gap vs folder average (66.6): −9.0.** The preview's captured rows (GPQA Diamond 87.2%, SWE-bench Verified 74.4%, HLE 30%) are genuinely strong and fully credited; the gap comes from the 256K text-only profile (Context 70, Multimodal 15) and the several named-but-unquantified benchmark families. The final Hy3 (July 2026, `hy3` folder) scores separately on its own evidence base.

## Notes

- Verification trail: Tencent launch article (2026-04-24; specs; 40% efficiency; 495-step workflows; +20% AI PPT), Tencent-Hunyuan/Hy3-preview GitHub README and HF card (base-model table; instruct evaluation results: GPQA 87.2, SWE-bench Verified 74.4, HLE 30*, TB 2.0 54.4; license; vLLM/SGLang), Tencent Cloud techpedia (2026-04-23 release; Token Plans from 28 RMB/month; known issues), Tencent Hy research page (Hy3 timeline; final Hy3 2026-07-06 for cross-reference only).
- Known conflicts: license — Tencent Hy Community License Agreement (preview) vs Apache 2.0 (final Hy3); HLE 30 is an internal run (*) per the card's own notation.
- Open questions: quantified values for FrontierScience-Olympiad, IMOAnswerBench, CL-bench, BrowseComp, WideSearch, ClawEval, WildClawBench; independent replications of SWE-bench Verified 74.4% and GPQA 87.2.

Provided by: **Ling 3.1 Flash (opencode/ling-3.1-flash-free)** — 2026-10-03

Future sources: quantified preview benchmark rows, independent replications, Tencent Cloud per-token pricing.
