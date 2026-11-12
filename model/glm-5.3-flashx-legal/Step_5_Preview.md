# GLM 5.3 FlashX Legal — findings by Step 5 Preview

- Source: Z.ai / GLM 5.3 FlashX Legal (`z-ai/glm-5.3-flashx-legal`)
- Date: 2026-11-11 (UTC)
- Overview and scoring methodology: `../../model-comparison.md`
- Cross-model signed log: `../../model-findings.md`

## Model card

- **Name:** GLM 5.3 FlashX Legal (also written **GLM-5.3-FlashX-Legal**, short form **GLM-Legal**)
- **Short description:** Z.ai's legal-domain variant of GLM-5.3-FlashX — the fast serving tier of GLM-5.3-Flash — with legal-domain mid-training and reinforcement-learning post-training, keeping the base model's native multimodal input, 1M-token context, mandatory thinking mode and MCP-ready tool support at a low per-token price.
- **Provider / access:** Z.ai API as `z-ai/glm-5.3-flashx-legal` (also on OpenRouter as `z-ai/glm-5.3-flashx-legal`, and on the AgentSky gateway as `zai/glm-5.3-flashx-legal`). OpenAI- and Anthropic-compatible wire formats on the gateways; Z.ai's own endpoint is documented at docs.z.ai.
- **Release / knowledge:** dated **2026-11-02** by Benchable, TrendSeeker and the Great Commission Benchmark leaderboard; llm-stats carries **2026-10-12** as the release date. The two disagree and neither is confirmed by a Z.ai model card — no knowledge cutoff is published either way.
- **IDs:** `z-ai/glm-5.3-flashx-legal` (Z.ai / OpenRouter), `zai/glm-5.3-flashx-legal` (AgentSky). No free-tier ID found on any gateway checked.
- **Context window:** 1,048,576 (1M) total with **131,072 max output** — inherited unchanged from GLM-5.3-FlashX. Output ceiling is well past the 64K caveat threshold. No long-context retrieval percentage has been measured for this variant.
- **Modalities:** **text, image and video in; text out.** Function calling, structured output, streaming, and mandatory thinking mode (no off switch). Built for agent setups wired to legal data and document-editing MCP services.
- **Pricing (as of 2026-11-11):** **$0.37 in / $1.25 out per 1M tokens, $0.075 cached input** at Z.ai (confirmed identically by OpenRouter and llm-stats). AgentSky resells at $0.429385 in / $1.450625 out / $0.087038 cache read. llm-stats summarises it as "$0.41 / 1M · 20:1 in:out".
- **Architecture:** parameter counts are not disclosed for this variant (inherits the GLM-5.3-FlashX hybrid sparse + linear attention architecture and its fast serving tier); proprietary, hosted.

### Raw benchmarks found

> **All measured numbers found for this ID come from Benchable's Performance Summary**, which reports category-level accuracies with percentile ranks. Benchable's named per-benchmark results table for this model is currently empty, so **no figure below can be attributed to a specific named harness** — they are category aggregates, not Terminal-Bench / SWE-bench / GPQA-style rows, and should be read as such. There is no GPQA, HLE, MRCR/LCR, SWE-bench, LiveCodeBench, Terminal-Bench, Tau3, GDPval or Artificial Analysis Intelligence Index row for this exact ID on any tracker checked.

Agent / tool use:

- Complex instruction following: **76.0% accuracy, 72nd percentile** (Benchable Performance Summary, 2026-11-02) — the weakest measured category
- Terminal-Bench 2.1 / 4.0: no verified public score found
- Tau3-Banking / Tau2-Bench: no verified public score found
- GDPval-AA: no verified public score found
- Claw-Eval / ClawProBench: no verified public score found
- Toolathlon / MCP-Atlas / SWE Atlas Codebase QnA: no verified public score found (function calling, structured output and MCP-orientation are documented capabilities, not measured scores)

Reasoning / knowledge:

- Complex multi-step reasoning: **96.0% accuracy, 75th percentile** (Benchable Performance Summary)
- Mathematics (diverse difficulty levels): **94.0% accuracy** (Benchable Performance Summary)
- GPQA Diamond: no verified public score found
- HLE: no verified public score found
- MRCR / LCR / RULER: no long-context retrieval reported
- CritPt: no verified public score found
- Artificial Analysis Intelligence Index / BenchLM overall: no verified public score found

Coding:

- Coding (aggregate): **95.0% accuracy, 85th percentile** (Benchable Performance Summary) — the strongest measured category
- SWE-bench Verified / SWE-bench Pro: no verified public score found
- LiveCodeBench: no verified public score found
- SciCode / AA-SciCode: no verified public score found
- DeepSWE / Vibe Code Bench / Coding Index: no verified public score found

Reliability / speed:

- **100% success rate, zero technical failures** across all benchmarks Benchable evaluated (reliability ★★★)
- Ability rating **★★★★**; speed rating **★★** (2 of 5) on Benchable's scale
- llm-stats lists **no** TTFT or sustained-throughput figure for the Z.ai endpoint; the underlying GLM-5.3-FlashX tier is described as the fast serving tier, but no measured tokens/s exists for the Legal variant specifically
- Cost per completed task: unpublished

### Normalized scores (1–100)

- **Tool use: 72/100.** Provisional. Function calling, structured output, streaming and MCP-service orientation are documented, and Benchable's complex-instruction-following category sits at 76.0% / 72nd percentile — upper-mid. Capped there because no agentic benchmark (Terminal-Bench, Tau3, GDPval, MCP-Atlas, Toolathlon, Claw-Eval, SWE Atlas) has been run on this ID, and the two available signals are category aggregates rather than harness-attributable scores.
- **Reasoning: 78/100.** Complex multi-step reasoning at 96.0% (75th percentile) and mathematics at 94.0% both clear the mid band comfortably (mid reference: GPQA 60–80%, HLE <10%, Index 20–35 → 55–65) and point above-average. Held below the frontier band (90–100) because a 75th-percentile rank is explicitly not frontier, and because there is no GPQA Diamond, HLE, MRCR/LCR, CritPt or Intelligence Index row for this exact ID to confirm the aggregate.
- **Context window: 96/100.** 1,048,576 tokens total sits above the ≥1M tier (95–100) and the 131,072-token output ceiling clears the 64K caveat threshold. Not scored 100 because no MRCR/RULER retrieval percentage at any length has been measured for this variant — the window is an inherited spec, not a demonstrated retrieval result.
- **Multimodal: 88/100.** Native text, image **and video** input with text output, which lands in the "+video/PDF in" band (75–90). Not scored into the 90–100 band because there is no audio input and no non-text output of any kind.
- **Coding: 82/100.** The strongest measured category: coding accuracy 95.0% at the **85th percentile**. That places it in the upper tier rather than the frontier band (DeepSWE 74%+, TB2.1 85%+, Coding Index 70%+ → 90–100), and the score is held below that because the figure is a Benchable category aggregate with no named harness behind it, and no SWE-bench, LiveCodeBench, Terminal-Bench, SciCode or DeepSWE row exists for this ID.
- **Cost efficiency: 94/100.** Verified Z.ai pricing of $0.37 in / $1.25 out with $0.075 cached input interpolates to roughly 95 against the methodology anchors ($0.10/$0.20 = 97–99; $0.60/$2.20 = 92). Trimmed by Benchable's ★★ speed rating for this variant, which means cost per *completed task* is worse than the rate card alone implies, and by the absence of any measured tokens-per-task figure.
- **Overall Score: 83/100.** (72 + 78 + 96 + 88 + 82) / 5 = 83.2 → **83**. A strong, cheap, natively multimodal 1M-context model with legal-domain training on top — best fit for document-heavy legal and analytical workflows where multimodal input and a large window matter more than frontier-level agentic benchmarks.

---

## Signature

- Provided by: **Step 5 Preview (stepfun-ai/step-5-preview)** — 2026-11-11
- Method: public internet research (Benchable model page and performance summary, OpenRouter model page, llm-stats model page, AgentSky gateway record, TrendSeeker and AI Tech Hub catalog entries, Great Commission Benchmark leaderboard). Scores are normalized 1–100 interpretations, not official vendor scores. Every figure is a Benchable category aggregate and is labelled as such; no number was taken from another agent's findings file.
- Reference URLs:
  - [Z.ai: GLM 5.3 FlashX Legal on Benchable — category accuracies, percentiles, reliability and speed ratings, pricing](https://benchable.ai/models/z-ai/glm-5.3-flashx-legal-20261102)
  - [Z.ai: GLM 5.3 FlashX Legal on OpenRouter — confirmed pricing and capabilities](https://openrouter.ai/z-ai/glm-5.3-flashx-legal)
  - [GLM-5.3-FlashX-Legal on llm-stats — pricing, 1M/131K context, training description](https://llm-stats.com/models/glm-5.3-flashx-legal)
  - [GLM 5.3 FlashX Legal on AgentSky — gateway route, max output, aliases](https://agentsky.dev/models/zai/glm-5.3-flashx-legal)
  - [GLM 5.3 FlashX Legal on TrendSeeker — release date and pricing](https://trendseeker.net/trends/models/z-ai-glm-5-3-flashx-legal)
  - [Z.ai official launch post (referenced by llm-stats as the primary source)](https://z.ai/blog/glm-legal)
