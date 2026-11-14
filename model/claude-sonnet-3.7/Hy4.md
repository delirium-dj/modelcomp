- Source: Anthropic/Claude 3.7 Sonnet
- Date: 2026-11-14 (UTC)
- Overview and scoring methodology: `../../model-comparison.md`
- Cross-model signed log: `../../model-findings.md`

## Model card

- **Name:** Claude 3.7 Sonnet
- **Short description:** Anthropic's February 2025 **first hybrid-reasoning model** (Shunyu Yao contributed), combining instant response and extended step-by-step thinking with an API `thinking_budget` of up to 128K tokens. A distinct, legacy model; Sonnet 4 / 4.5 / 5 are separate.
- **Provider / access:** Anthropic API, Claude Code (research preview, terminal code search/edit/test + GitHub integration); paid users can view the full chain of thought.
- **Release / knowledge:** 2025-02; knowledge cutoff: no verified public score found.
- **IDs:** `claude-3-7-sonnet`. No free Zen ID verified.
- **Context window:** **200,000 tokens**.
- **Modalities:** text and image in, text/code out; hybrid reasoning, agentic coding, terminal operations. No verified audio/video input or non-text output.
- **Pricing (as of 2026-11-14):** the Sonnet mid-tier rate is **$3 / 1M input, $15 / 1M output** (a C2 society article cites Claude 3.5 Sonnet at that price) — labelled generation-level, not a verified 3.7-specific rate card.
- **Architecture:** Proprietary, closed weights; parameter count not disclosed. First hybrid-reasoning Claude with a controllable thinking budget.

### Raw benchmarks found

Agent / tool use:

- TAU-bench: SOTA at launch (secondary CSDN, directional, no score)
- Claude Code completed 45+ minute development tasks in one run in testing (qualitative)
- Tau3-Banking / Tau2-Bench / GDPval-AA / OSWorld / Terminal-Bench / AutomationBench / Claw-Eval / MCP-Atlas: no verified public score found

Reasoning / knowledge:

- GPQA (extended thinking): **84.8%**; GPQA Diamond 84.8% per a secondary CSDN article (same figure, harness labelled)
- HumanEval Pass@1: **86%**
- HLE / LCR / CritPt / AA Intelligence Index / Omniscience: no verified public score found

Coding:

- SWE-bench Verified: **62.3%** base / **70.3%** with a custom scaffold
- HumanEval **86%** as above
- SWE-bench Pro / Terminal-Bench / LiveCodeBench / SciCode / Vibe Code Bench / DeepSWE: no verified public score found

Long context:

- 200K window with up to 128K thinking tokens; no MRCR / RULER / GraphWalks figure found — no verified public score found

### Normalized scores (1–100)

- **Tool use: 83/100.** TAU-bench SOTA, a controllable 128K thinking budget, and 45+ minute Claude Code sessions; capped by no scored agent harness figure beyond the directional TAU claim.
- **Reasoning: 86/100.** GPQA 84.8% with extended thinking and the first hybrid-reasoning design; capped by no HLE/ARC figure.
- **Context window: 82/100.** 200K window with a large thinking budget; capped by being 1/5 of the 1M class and no retrieval benchmark.
- **Multimodal: 79/100.** Image input with code/terminal workflows; capped by text/code-only output, no verified audio/video input, and no published multimodal benchmark.
- **Coding: 87/100.** SWE-bench Verified 62.3% / 70.3% (scaffolded) and HumanEval 86%, both strong for Feb 2025; capped by no Terminal-Bench/LiveCodeBench figure.
- **Cost efficiency: 82/100.** Sonnet-tier $3/$15 (generation-level) with a switchable instant mode to avoid paying for thinking on easy queries. Excluded from Overall.
- **Overall Score: 83/100.** Half-up mean of 83, 86, 82, 79, 87 = 83.4 → 83. Best fit: historical/legacy hybrid-reasoning agentic coding; superseded by Sonnet 4 → 5.5.

---

## Signature

- Provided by: **Hy4 (tencent/hy4)** — 2026-11-14 UTC
- Method: Fresh public-web research this pass, conducted independently (no peer findings files consulted). Primary evidence: the Baidu Baike Claude 3.7 Sonnet article retrieved via public web search excerpt (release, hybrid reasoning, 200K context, 128K thinking budget, SWE-bench Verified 62.3%/70.3%, HumanEval 86%, GPQA 84.8%, Claude Code), plus secondary CSDN / Baidu developer coverage for TAU-bench SOTA and the GPQA Diamond label — labelled secondary. Pricing is a generation-level Sonnet figure, explicitly not a verified 3.7-specific rate card. Sonnet 4/4.5/5 and Claude 3.5 Sonnet are separate models, never merged. Rows without verified figures are marked "no verified public score found". Scores are normalized 1–100 interpretations, not official vendor scores.
- Reference URLs: only URLs actually retrieved this pass.
  - [Claude 3.7 Sonnet — 百度百科 (retrieved via search excerpt; specs, benchmarks, hybrid reasoning)](https://baike.baidu.com/item/Claude%203.7%20Sonnet/65433422)
