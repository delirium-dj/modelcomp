- Source: OpenAI/GPT-5.4 mini
- Date: 2026-11-14 (UTC)
- Overview and scoring methodology: `../../model-comparison.md`
- Cross-model signed log: `../../model-findings.md`

## Model card

- **Name:** GPT-5.4 mini
- **Short description:** OpenAI's 2026-03-17 small model for high-frequency, latency-sensitive tasks — fast-iterating code workflows and multimodal computer operation. Built via knowledge distillation and architectural compression from GPT-5.4. A distinct SKU; `gpt-5.4-nano`, `gpt-5.4` (already reported) and `gpt-5-mini` are separate.
- **Provider / access:** OpenAI API (and the GPT-5.4 tiered system); designed as the "limbs and outposts" executing concrete actions in agent architectures, working with nano; supports on-device / Edge AI deployment.
- **Release / knowledge:** 2026-03-17; knowledge cutoff: no verified public score found.
- **IDs:** `gpt-5.4-mini`. No free Zen ID verified.
- **Context window:** **400,000 tokens** per a third-party BenchGecko GPT-5.4 family table; no vendor-verified figure in the retrieved Baike excerpt — reported with provenance.
- **Modalities:** text and image in, text/code out; multimodal computer operation, code-workflow iteration, codebase retrieval, large-file review. No verified audio/video input or non-text output.
- **Pricing (as of 2026-11-14):** **$0.75 / 1M input, $4.50 / 1M output** (secondary 什么值得买 comparison); a third-party BenchGecko family table lists $0.75/$4.50 as well — both secondary/third-party, no vendor rate card fetched.
- **Architecture:** Proprietary, closed weights; distilled and architecturally compressed from GPT-5.4. Parameter count not disclosed.

### Raw benchmarks found

Agent / tool use:

- Terminal-Bench 2.0: **60.0%** (GPT-5 mini 38.2% in the same secondary comparison) — secondary 智源社区 launch coverage
- Designed as an execution sub-agent (codebase retrieval, large-file review) in dynamic-routing architectures (qualitative)
- Tau3-Banking / Tau2-Bench / GDPval-AA / OSWorld / AutomationBench / Claw-Eval / MCP-Atlas: no verified public score found

Reasoning / knowledge:

- SWE-bench Pro: referenced in a third-party "活力百科" summary (no exact score in the retrieved excerpt) — no verified public score found
- GPQA Diamond / HLE / LCR / CritPt / AA Intelligence Index / Omniscience: no verified public score found for this exact ID

Coding:

- Terminal-Bench 2.0 **60.0%** as above; SWE-bench Pro evaluated (no figure)
- SWE-bench Verified / LiveCodeBench / SciCode / Vibe Code Bench / DeepSWE / FrontierSWE: no verified public score found

Long context:

- 400K window (third-party) with large-file review use cases; no MRCR / RULER / GraphWalks figure found — no verified public score found

### Normalized scores (1–100)

- **Tool use: 85/100.** 60.0% Terminal-Bench 2.0 (vs 38.2% for GPT-5 mini), a deliberate execution-subagent role and dynamic-routing/Edge-AI support; capped by that figure being secondary and no scored τ-bench/OSWorld result.
- **Reasoning: 80/100.** Distilled GPT-5.4 lineage with SWE-bench Pro evaluation; capped by no published numeric reasoning benchmark for this exact ID.
- **Context window: 85/100.** 400K (third-party) with large-file/codebase review; capped by no vendor-verified figure and no retrieval benchmark.
- **Multimodal: 81/100.** Image input driving multimodal computer operation; capped by text/code-only output, no verified audio/video input, and no published multimodal benchmark.
- **Coding: 85/100.** 60.0% Terminal-Bench 2.0 and a fast-iterating code-workflow design; capped by no SWE-bench Verified / LiveCodeBench figure.
- **Cost efficiency: 92/100.** $0.75/$4.50 per 1M, on-device deployment and cheap sub-agent parallelism in dynamic routing. Excluded from Overall.
- **Overall Score: 83/100.** Half-up mean of 85, 80, 85, 81, 85 = 83.2 → 83. Best fit: high-frequency coding sub-agents, codebase retrieval and computer-operation steps paired with a larger planner model.

---

## Signature

- Provided by: **Hy4 (tencent/hy4)** — 2026-11-14 UTC
- Method: Fresh public-web research this pass, conducted independently (no peer findings files consulted). Primary evidence: the Baidu Baike GPT-5.4 mini article retrieved via public web search excerpt (release, distillation, sub-agent role, Edge AI, dynamic routing), plus secondary 智源社区 / 什么值得买 launch coverage for Terminal-Bench 2.0 60.0% and the $0.75/$4.50 rate card, and a third-party BenchGecko GPT-5.4 family table for the 400K context — all explicitly labelled secondary/third-party. GPT-5 mini's 38.2% is a comparison row under a different ID. GPT-5.4 / nano / Pro figures are never merged here. Rows without verified figures are marked "no verified public score found". Scores are normalized 1–100 interpretations, not official vendor scores.
- Reference URLs: only URLs actually retrieved/fetched this pass.
  - [GPT-5.4 mini — 百度百科 (retrieved via search excerpt; release, positioning, architecture)](https://baike.baidu.com/item/GPT-5.4%20mini/67499680)
  - [GPT-5.4 mini + nano 突袭 — 智源社区 (retrieved via search excerpt; Terminal-Bench 2.0 60.0%)](https://hub.baai.ac.cn/view/53234)
  - [GPT-5.4 mini 和 nano 价格差 — 什么值得买 (retrieved via search excerpt; pricing)](https://post.smzdm.com/p/aggx79nw/)
