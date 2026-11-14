- Source: OpenAI/GPT-6 Sol
- Date: 2026-11-14 (UTC)
- Overview and scoring methodology: `../../model-comparison.md`
- Cross-model signed log: `../../model-findings.md`

## Model card

- **Name:** GPT-6 Sol
- **Short description:** OpenAI's cost-optimised GPT-6 tier released 2026-09-23 alongside GPT-6 Luna, using training methods derived from the GPT-6 Astra flagship. Focused on speed, cost and scale for complex workflows; Astra remains the best-performing flagship. A distinct model; GPT-6.1 Sol is its successor and GPT-6 Luna is a sibling.
- **Provider / access:** ChatGPT Work (Plus / Pro / Business / Enterprise / Edu, full rollout) and Codex, plus the developer API with model name `gpt-6-sol`.
- **Release / knowledge:** leaked/gray-tested from 2026-09-17, officially released 2026-09-23 (after Anthropic's Claude Opus 5.5); knowledge cutoff: no verified public score found.
- **IDs:** `gpt-6-sol`. No free Zen ID verified.
- **Context window:** no verified figure in the retrieved Baike article — no verified public score found. Improved prompt-cache hit rate with adjustable reasoning effort, tool toggles and cache breakpoints that do not break the cache; re-processed prompt tokens down **>50%**. Reasoning efforts include an extra `none` (fully off) beyond Astra, default `medium`.
- **Modalities:** text and image in, text out; complex code logic, long-horizon agentic workflows, computer use, coding and front-end generation; native tool use with search/file tools. No verified audio/video input or non-text output.
- **Pricing (as of 2026-11-14):** **$2 / 1M input, $10 / 1M output** — a 50% cut vs GPT-5.6 Sol's promotional $4/$20. AutomationBench xhigh single-task cost **$0.27**; DeepSWE v1.1 max effort ~**80% lower** cost per task than Claude Fable 5.
- **Architecture:** Proprietary, closed weights; parameter count not disclosed. Noam Brown described a "multiplier effect" between pretraining and chain-of-thought RL in the GPT-6 generation.

### Raw benchmarks found

Agent / tool use:

- AutomationBench (cross-app business workflows, xhigh): **33.2%**, at **$0.27 per task**
- OSWorld 2.0 (computer operation): **60.5%** — a regression from GPT-5.6 Sol's **65.7%**
- DeepSWE v1.1 (max effort): **68.8%**, close to Claude Fable 5's **69.9%**, at ~80% lower per-task cost
- Tau3-Banking / Tau2-Bench / GDPval-AA / Terminal-Bench / Claw-Eval / Toolathon / MCP-Atlas: no verified public score found

Reasoning / knowledge:

- Factual errors on real user-flagged ChatGPT conversations: ~**halved** vs GPT-5.6 Sol (sample deliberately biased toward error-prone conversations, explicitly not a general hallucination rate)
- Deceptive-code test: deception rate **10.4% → 1.3%**; search-tool-failure concealment **77.5% → 4.9%** (Luna 78.3% → 28.7%) — alignment, not capability
- GPQA Diamond / HLE / LCR / CritPt / AA Intelligence Index: no verified public score found

Coding:

- DeepSWE v1.1 **68.8%** (max) as above
- SWE-bench Verified / Terminal-Bench / LiveCodeBench / SciCode / Vibe Code Bench / FrontierSWE: no verified public score found

Long context:

- >50% fewer re-processed prompt tokens and durable cache breakpoints for long agentic workflows; no MRCR / RULER / GraphWalks figure found — no verified public score found

### Normalized scores (1–100)

- **Tool use: 88/100.** 33.2% AutomationBench at $0.27/task, 60.5% OSWorld 2.0 and strong long-horison agent ergonomics (adjustable effort, tool toggles, durable cache); capped by the OSWorld regression from 65.7% and no τ-bench/GDPval figure.
- **Reasoning: 88/100.** Astra-derived training, halved factual errors and sharply reduced deceptive behaviour; capped by no GPQA/HLE/AA index figure and by Astra being explicitly stronger.
- **Context window: 89/100.** A >50% reduction in re-processed prompt tokens with cache breakpoints that survive effort/tool changes — excellent long-workflow economics; capped by no verified token window and no retrieval benchmark.
- **Multimodal: 81/100.** Text/image input with computer use and front-end generation; capped by text-only output, no verified audio/video input, and no multimodal benchmark score.
- **Coding: 89/100.** DeepSWE v1.1 68.8% at ~80% lower cost than Claude Fable 5's 69.9%; capped by no SWE-bench Verified / Terminal-Bench figure.
- **Cost efficiency: 94/100.** $2/$10 per 1M (50% below GPT-5.6 Sol), $0.27 AutomationBench tasks and ~80% cheaper DeepSWE tasks; excluded from Overall.
- **Overall Score: 87/100.** Half-up mean of 88, 88, 89, 81, 89 = 87.0 → 87. Best fit: high-volume long-horizon agentic coding and business workflows where near-flagship results at a fraction of the cost dominate; note the computer-use regression.

---

## Signature

- Provided by: **Hy4 (tencent/hy4)** — 2026-11-14 UTC
- Method: Fresh public-web research this pass, conducted independently (no peer findings files consulted). Primary evidence: the Baidu Baike GPT-6 Sol article (release, pricing, AutomationBench 33.2%, DeepSWE 68.8%, OSWorld 2.0 60.5% regression, factual-error and alignment deltas, cache/effort design). Figures belonging to GPT-5.6 Sol, Claude Fable 5, GPT-6 Astra and GPT-6 Luna are labelled by their ID and never merged. GPT-6.1 Sol is a separate successor model. Scores are normalized 1–100 interpretations, not official vendor scores.
- Reference URLs: only URLs actually fetched this pass.
  - [GPT-6 Sol — 百度百科 (release, pricing, benchmarks, cache design, alignment)](https://baike.baidu.com/item/GPT-6%20Sol/69111919)
