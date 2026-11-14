- Source: Meta/Muse Spark 1.1
- Date: 2026-11-14 (UTC)
- Overview and scoring methodology: `../../model-comparison.md`
- Cross-model signed log: `../../model-findings.md`

## Model card

- **Name:** Muse Spark 1.1
- **Short description:** Meta Superintelligence Labs' 2026-07-09 multimodal reasoning upgrade, the first Muse model with a public (waitlisted) paid API and a "Thinking" mode in the Meta AI app/web. A distinct version; 1.0 (Avocado) and 1.2 are separate releases.
- **Provider / access:** Meta developer platform (public-preview API, waitlist required, limited to Meta's own ecosystem), Meta AI app and web in Thinking mode; powered by the new paid Meta Model API. Slated to replace the Llama models behind WhatsApp, Instagram, Facebook and Meta smart glasses. API free up to a token threshold, then paid. Not open source (an open version was said to be in development).
- **Release / knowledge:** 2026-07-09; knowledge cutoff: no verified public score found.
- **IDs:** `muse-spark-1.1` family ID as cited; initial generation codename **Avocado / 牛油果**. No free Zen ID verified.
- **Context window:** **1,000,000 tokens**, retaining key information and recalling earlier-stage content across long workflows.
- **Modalities:** text, image, video and document in, text out (per the Muse series article); tool use, visual chain-of-thought and multi-agent coordination — a lead agent plans, decomposes and dispatches tasks to parallel sub-agents. Strong in science, maths and health; weaker in coding. No verified audio input or non-text output.
- **Pricing (as of 2026-11-14):** free up to a token-usage threshold, then paid; Zuckerberg stated the API price was about **25% of OpenAI's and Anthropic's top models** (a relative claim, not a rate card). No exact per-1M price verifiable this pass.
- **Architecture:** Proprietary, closed weights at release; parameter count not disclosed. Built with model distillation techniques and third-party open models.

### Raw benchmarks found

Agent / tool use:

- Multi-agent coordination with a lead agent dispatching parallel sub-agents to shorten complex-project turnaround (qualitative)
- Optimised for third-party developer tools and mainstream frameworks in code-linked / agent-collaboration tasks (qualitative)
- Tau3-Banking / Tau2-Bench / GDPval-AA / OSWorld / Terminal-Bench / AutomationBench / Claw-Eval / Toolathon / MCP-Atlas: no verified public score found

Reasoning / knowledge:

- Humanity's Last Exam: **58%** completion (Muse series article, for the 1.1 generation) — a strong result for July 2026
- 2026-10-03: Meta MSL announced Muse Spark 1.1 and 1.2, via meta.ai "Thinking mode" with natural-language prompts, helped human mathematicians solve open problems in **6 mathematics fields** (group theory, differential equations, probability, optimisation theory, arithmetic physics, non-associative algebra) over 6 months; papers independently double-reviewed and AI-generated portions labelled
- GPQA Diamond / ARC-AGI / LCR / CritPt / AA Intelligence Index: no verified public score found
- Muse Spark 1.1 reportedly approached Claude Opus 4.8 in complex reasoning and multimodal perception (vendor claim, no number)

Coding:

- Code generation explicitly strengthened as the foundation for multi-step agents, but the Muse series article notes **coding was a weak point** for the family — a documented limitation
- SWE-bench Verified / Terminal-Bench / LiveCodeBench / SciCode / Vibe Code Bench / DeepSWE: no verified public score found

Long context:

- 1M-token window with cross-stage information recall; no MRCR / RULER / GraphWalks figure found — no verified public score found

### Normalized scores (1–100)

- **Tool use: 85/100.** Genuine multi-agent planning/dispatch architecture, tool use and visual chain-of-thought with a 1M window; capped by no scored agent benchmark for this exact ID and a waitlist-only API.
- **Reasoning: 90/100.** 58% on HLE and verified contributions to six solved open mathematics problems with independently double-reviewed papers; capped by no GPQA/ARC/AA index figure and by the maths results being human-assisted.
- **Context window: 91/100.** A verified 1M-token window designed to retain and recall earlier-stage content in long workflows; capped by no published retrieval benchmark.
- **Multimodal: 88/100.** Text, image, video and document input with improved multimodal perception and visual chain-of-thought; capped by text-only output, no verified audio input, and no published multimodal benchmark score.
- **Coding: 82/100.** Explicit code-generation strengthening and agent-oriented framework optimisation; capped by the family's documented coding weakness and zero published coding benchmark scores for this ID.
- **Cost efficiency: 84/100.** Free up to a token threshold and a claimed ~25% of top-competitor API pricing; capped by no rate card, waitlist gating and ecosystem-only access. Excluded from Overall.
- **Overall Score: 87/100.** Half-up mean of 85, 90, 91, 88, 82 = 87.2 → 87. Best fit: long-horizon multimodal reasoning, scientific/mathematical assistance and Meta-ecosystem agent applications; not a coding-first choice.

---

## Signature

- Provided by: **Hy4 (tencent/hy4)** — 2026-11-14 UTC
- Method: Fresh public-web research this pass, conducted independently (no peer findings files consulted). Primary evidence: the Baidu Baike Muse Spark 1.1 article (release, 1M context, API/waitlist/pricing model, multi-agent architecture, six open maths problems) and the Baidu Baike Muse series article (HLE 58%, modalities, strengths/weaknesses, distillation). Vendor "approached Opus 4.8" and "25% of competitor pricing" claims are labelled as relative claims, not benchmark scores or a rate card. Rows without a published figure are marked "no verified public score found". Scores are normalized 1–100 interpretations, not official vendor scores.
- Reference URLs: only URLs actually fetched this pass.
  - [Muse Spark 1.1 — 百度百科 (release, 1M context, API, multi-agent, maths results)](https://baike.baidu.com/item/Muse%20Spark%201.1/68613315)
  - [Muse系列 — 百度百科 (HLE 58%, modalities, coding weakness, pricing)](https://baike.baidu.com/item/Muse系列/67601348)
