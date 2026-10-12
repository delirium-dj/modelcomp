# GLM-5.1 (GLM Coding Plan) — findings by Ling 3.1 Flash

- Source: Ling 3.1 Flash (opencode/ling-3.1-flash-free) / GLM-5.1
- Date: 2026-10-03 (UTC)
- Overview and scoring methodology: `../../model-comparison.md`
- Cross-model signed log: `../../model-findings.md`

> **IDENTITY NOTE:** The `glm-5.1-coding` folder tracks the **GLM Coding Plan deployment of GLM-5.1** (Z.ai's coding-oriented subscription access to the same weights). Benchmarks below are GLM-5.1's (identical for the coding-plan deployment); the coding plan adds quota multipliers (3x peak hours 14:00-18:00 UTC+8, 2x off-peak, 1x promotional through end of April 2026) and plan pricing (Lite ~$10/mo, Pro ~$30/mo, Max ~$80/mo as of March 2026).

## Model card

- **Name:** GLM-5.1
- **Short description:** Z.ai's agentic-engineering flagship — "next-generation model for long-horizon tasks", positioned at launch as #1 on SWE-Bench Pro and NL2Repo, trained entirely on Huawei Ascend hardware.
- **Provider / access:** Z.ai (Zhipu AI) — Z.AI API, BigModel.cn, OpenRouter, Vercel AI Gateway; Claude Code and OpenClaw compatible; SGLang v0.5.10+ / vLLM v0.19.0+ with FP8; Lambda Cloud single-node HGX B200 ~1,345 tok/s.
- **Release / knowledge:** API 2026-03-27; weights 2026-04-07 (MIT, `zai-org/GLM-5.1`); blog "Towards Long-Horizon Tasks" 2026-04-07. Knowledge cutoff 2025-04.
- **IDs:** `glm-5.1`; folder `glm-5.1-coding`.
- **Context window:** 200,000 tokens.
- **Modalities:** Text in, text out (per GLM-5.1 vs Opus 4.6 comparison: "Multimodal - Text only").
- **Pricing (as of 2026-10):** $1.40 / $4.40 per 1M input/output; cached read $0.26 (Z.ai); OpenRouter $0.965 / $3.03; GLM Coding Plan from ~$10/mo.
- **Architecture:** MoE (parameter count not captured in the sources reviewed); trained on 100,000 Huawei Ascend 910B chips with zero NVIDIA hardware; MIT license.

### Raw benchmarks found

**Vendor-reported (Z.ai blog/model card, 2026-04-07; harnesses disclosed: SWE-Bench Pro via OpenHands, temp 1, top_p 0.95, max_new_tokens 32768, 200K ctx; TB 2.0 Terminus-2: 3h timeout, temp 1.0, top_p 1.0, max_new_tokens 8192, 200K ctx, 16 CPU/32GB RAM; TB 2.0 Claude Code: Claude Code 2.1.69 think mode, temp 1.0, top_p 0.95, max_new_tokens 131072 via transparent proxy bypassing the 64k CLI cap, no wall-clock limit, averaged over 5 runs):**
- SWE-Bench Pro **58.4%** (GLM-5 55.1; GPT-5.4 57.7; Claude Opus 4.6 54.2/57.3) — SOTA at launch, #1.
- SWE-bench Verified **77.8%** (Opus 4.6 80.8%).
- NL2Repo **42.7%** (GPT-5.4 41.3) — #1.
- Terminal-Bench 2.0 (Terminus-2) **63.5%** (Opus 4.6 68.5; GLM-5 56.2); best self-reported harness **69.0%** (Claude Code 2.1.69 think mode).
- CyberGym **68.7%** (Opus 4.6 66.6) — #1.
- BrowseComp **68.0%** (79.3% with context management; Opus 4.6 85.9%).
- MCP Atlas **71.8%** (Opus 4.6 69.2) — #1.
- Toolathlon **40.7%**.
- Vending Bench 2: **$5,634.41** (GLM-5 $4,432.12; GPT-5.4 $6,144.18; Opus 4.6 $8,017.59).
- AIME 2026 **95.3%** (GPT-5.4 98.7; Opus 4.6 98.2; GLM-5 95.4); HMMT Nov 2025 94.0%; HMMT Feb 2026 82.6%; IMO-AnswerBench 83.8%.
- GPQA Diamond **86.2%** (GPT-5.2 92.4; Opus 4.6 94.3; GLM-5 86.0).
- HLE base **31.0%** (Opus 4.6 45.0%); HLE with tools **52.3%**.
- LiveCodeBench **52.0%** (Qwen 3.5 83.6% — significant gap).
- Long-horizon claims: sustained optimization over 600+ iterations with 6,000+ tool calls; 21.5K QPS on VectorDBBench over 600+ iterations; 8-hour autonomous reasoning, 1,700 steps.
- Chatbot Arena: Text Overall 1472±5.0 (22,689 votes); Coding 1524±8.4; Hard Prompts 1504±7.8; Multi-turn 1486; Longer Query 1487; Math 1476; IF 1465; Creative Writing 1458.
- BenchLM: Mathematics #4 (64.5/100), Knowledge #9 (83.7), IF #18 (85.9), Coding #24 (75.7), Reasoning #35 (56.2), Agentic #40 (60.6), Overall Provider #31/79 (68/100).

## Scores

- **Tool use: 69/100.** MCP Atlas 71.8% (#1 at launch), BrowseComp 68.0%/79.3% with context management, Toolathlon 40.7%, Vending Bench 2 $5,634 — strong but behind Opus 4.6 on BrowseComp and Vending Bench.
- **Reasoning: 71/100.** GPQA Diamond 86.2%, AIME 2026 95.3%, HMMT 94.0/82.6%, IMO-AnswerBench 83.8%; HLE base 31.0% (52.3% with tools) is the weak row; GPQA trails Opus 4.6 (94.3) by ~8 points.
- **Context window: 70/100.** 200K tokens; no MRCR/long-retrieval benchmark captured.
- **Multimodal: 15/100.** Text-only per the vendor's own comparison table.
- **Coding: 73/100.** SWE-Bench Pro 58.4% (SOTA at launch), SWE-bench Verified 77.8%, NL2Repo 42.7%, TB 2.0 63.5%/69.0% (Claude Code harness), CyberGym 68.7%; LiveCodeBench 52.0% is a significant miss vs Qwen 3.5 (83.6%).
- **Cost efficiency: 89/100.** $1.40/$4.40 per 1M (OpenRouter $0.965/$3.03), MIT weights, cached read $0.26, Coding Plan from ~$10/mo.
- **Overall Score: 59.6/100.** Mean of Tool use 69, Reasoning 71, Context window 70, Multimodal 15, Coding 73 = 59.6.

> **Gap vs folder average (68.5): −8.9.** By 2026-10 the frontier has moved past GLM-5.1's April 2026 rows (SWE-Bench Pro 58.4% and TB 2.0 63.5% are now mid-tier; LiveCodeBench 52.0% is weak), and the 200K text-only profile caps Context at 70 and Multimodal at 15. The model's genuine #1-at-launch rows (SWE-Bench Pro, NL2Repo, MCP Atlas, CyberGym) are fully credited.

## Notes

- Verification trail: Z.ai blog "Towards Long-Horizon Tasks" (2026-04-07; full benchmark table with harness configs), GLM-5.1 model card (MIT, `zai-org/GLM-5.1`), GLM Coding Plan docs (quota multipliers; plan tiers), OpenRouter/Lambda pricing pages, Chatbot Arena snapshot, BenchLM provider ranking, Z.ai IPO coverage (2026-01-08; HKD 4.35B raise at ~$31.3B valuation — first publicly traded foundation-model company).
- Known conflicts: none material; the two TB 2.0 harnesses (Terminus-2 63.5% vs Claude Code 69.0%) are disclosed as different harnesses, not a conflict.
- Open questions: parameter count/architecture details, MRCR-style long-context measurement, independent replications of the SWE-Bench Pro 58.4% row.

Provided by: **Ling 3.1 Flash (opencode/ling-3.1-flash-free)** — 2026-10-03

Future sources: independent replications, GLM-5.1 architecture details, long-context benchmarks.
