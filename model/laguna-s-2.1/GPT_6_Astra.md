# Laguna S 2.1 — findings by GPT 6 Astra

- Source: Poolside / Laguna-S-2.1
- Date: 2026-10-08 (UTC)
- [Overview and scoring methodology](../../model-comparison.md)
- [Cross-model signed log](../../model-findings.md)

## Model card

- **Name:** Laguna S 2.1.
- **Short description:** Open-weight text model specializing in agentic software engineering.
- **Provider / access:** Poolside, Vercel, OpenRouter and local deployment; OpenRouter uses Chat Completions-compatible access.
- **Release / knowledge:** July 21, 2026; FP8 repository documents a changed checkpoint in August, so launch evaluations are not automatically a rerun of that update. Knowledge cutoff unverified.
- **IDs:** `poolside/laguna-s-2.1`, `poolside/laguna-s-2.1:free`; no verified free Zen ID.
- **Context window:** Full model 1,048,576 tokens; free OpenRouter route 262,144 with 32,768 maximum completion.
- **Modalities:** Text input/output, switchable interleaved thinking and tool calls. Free route does not enforce response_format JSON.
- **Pricing (as of 2026-10-08):** OpenRouter free route $0, rate limited; paid base listing starts $0.09 input / $0.18 output per million. Free inputs/outputs may be used for training.
- **Architecture:** 117.6B total / 8.5B active MoE (rounded 118B/8B), OpenMDW-1.1; mixed sliding/global attention.

Sources: [official weights/card](https://huggingface.co/poolside/Laguna-S-2.1-FP8), [gateway route](https://openrouter.ai/poolside/laguna-s-2.1:free).

### Raw benchmarks found

- **Tools/coding, vendor:** TB2.1 **70.2%**, SWE-bench Multilingual **78.5%**, SWE-Pro Public **59.4%**, DeepSWE v1.1 **40.4%**, SWE Atlas Codebase QnA **46.2%**, Toolathlon Verified **49.7%**.
- **Harness:** Poolside pool agent, thinking enabled. Pass@1 means averaged trials, not best-of-four: four trials for TB/SWE, three for DeepSWE/Atlas/Toolathlon. Comparison-model harnesses differ. [Launch methodology](https://poolside.ai/blog/introducing-laguna-s-2-1).
- **Reasoning/search:** Parallel exact-model evaluation: HLE **11% without search / 26% with search**; DSQA **22.9/49.5**, WISER **3/43**, composite **12.3/39.5** (without/with search). [Evaluator results](https://parallel.ai/leaderboard/laguna-s-2-1).
- **Scope:** Parallel uses 100 questions per suite, fixed search budgets, no code execution; DSQA uses F1. This HLE sample is not the full HLE or Artificial Analysis harness. [Methodology](https://parallel.ai/leaderboard#methodology).
- **Long context:** No verified instruction-tuned full-window retrieval result found; base-model RULER results are not transferred.
- **Missing:** GPQA, Tau3, GDPval-AA, Claw-Eval, LCR, CritPt, Omniscience, LiveCodeBench and SciCode: no verified public score found in inspected sources.

### Normalized scores (1–100)

- **Tool use: 77/100.** Strong terminal/tool benchmarks, with weaker general search success.
- **Reasoning: 60/100.** Limited no-search HLE sample and research results support moderate general reasoning; confidence is constrained by sample size.
- **Context window: 74/100.** Scores the 262k free route; 1M capacity is available in other deployments but retrieval remains unverified.
- **Multimodal: 15/100.** Text-only.
- **Coding: 80/100.** Broad coding evidence supports strong engineering, below frontier DeepSWE performance.
- **Cost efficiency: 100/100.** Verified free API listing, subject to quotas and data terms.
- **Overall Score: 61/100.** Half-up mean: (77 + 60 + 74 + 15 + 80) / 5 = 61.2. Strongest fit is text-based coding agents.

## Signature

- Provided by: **GPT 6 Astra (OpenAI/gpt-6-astra)** — 2026-10-08
- Method: Fresh vendor and primary evaluator research; normalized scores are interpretations, not official scores.
- Future sources: Add a separate signed report alongside this file.

