# Grok 4.7 — findings by GPT-5.6 Luna

- Source: SpaceXAI/grok-4.7
- Date: 2026-09-25 (UTC)
- Overview and scoring methodology: `../../model-comparison.md`
- Cross-model signed log: `../../model-findings.md`

## Model card

- **Name:** Grok 4.7 (free consumer/Grok Build access; API is paid)
- **Short description:** Grok 4.7 is SpaceXAI's frontier proprietary reasoning model for coding, agentic tasks, and knowledge work. It is the successor-family model to Grok 4.6 and supports configurable reasoning effort from low through xhigh. ([Grok API Documentation][1])
- **Provider / access:** SpaceXAI xAI API `grok-4.7`; supports both Responses API and legacy Chat Completions. Also available through Cursor, Grok Build, model routers and cloud platforms. OpenCode Zen lists `grok-4.7`; no separate Free ID is listed on Zen. ([Grok API Documentation][1])
- **Release / knowledge:** 2026-09-21 release; knowledge cutoff May 2026. ([Grok API Documentation][1])
- **IDs:** `xai/grok-4.7`; OpenCode Zen `grok-4.7` (no separate Free ID listed on Zen); official xAI API ID `grok-4.7`. ([OpenCode][2])
- **Context window:** 500,000 tokens total; official xAI model documentation. Pricing changes above 200K prompt tokens. ([Grok API Documentation][3])
- **Modalities:** text + image input; text output; reasoning yes, with low/medium/high/xhigh effort; function calling, web search, X search and code execution; structured outputs supported. No audio/video input or non-text output documented for this model. ([Grok API Documentation][1])
- **Pricing (as of 2026-09-25):** $2.00 input / $6.00 output / $0.50 cached input per 1M tokens below 200K prompt tokens; $4.00 / $12.00 / $1.00 respectively at 200K+ prompt length. API is paid. Grok/Grok Build offers free consumer access, but this does not make the xAI API free. OpenCode Zen lists the model as paid, with no separate Free ID. ([Grok API Documentation][4])
- **Architecture:** proprietary/closed weights; parameter count and detailed architecture are not publicly disclosed by SpaceXAI. ([The Model Gap][5])

### Raw benchmarks found

Agent / tool use:

- Terminal-Bench 2.1: **76.03%** (Vals AI, xhigh; #14/67; reported 2026-09-21) ([Ridgebench][6])
- Tau3-Banking / Tau2-Bench: **no verified public score found**
- GDPval-AA: **1695 Elo** (Artificial Analysis, GDPval-AA v2.1; xhigh) ([Artificial Analysis][7])
- Claw-Eval / ClawProBench: **no verified public score found**
- Toolathon / MCP-Atlas / SWE Atlas Codebase QnA: **63%** (Artificial Analysis, SWE-Atlas-QnA; Grok Build/xhigh coding-agent evaluation) ([Artificial Analysis][8])
  Reasoning / knowledge:
- GPQA Diamond: **no verified public score found**
- HLE: **43.1%** (Artificial Analysis, Humanity's Last Exam text-only; xhigh) ([The Model Gap][5])
- LCR / MLCR: **77.0%** (Artificial Analysis, AA-LCR v1.1); **15.0%** (MLCR-AA) ([Benchmark Atlas][9])
- CritPt: **18.0%** (Artificial Analysis, CritPt avg@5) ([Benchmark Atlas][9])
- Artificial Analysis Intelligence Index / BenchLM overall: **46.4 / no verified BenchLM overall rank found** (Artificial Analysis Intelligence Index v4.3.2; Grok 4.7 xhigh; #16/655 on the cited board snapshot) ([Benchmark Atlas][9])
- Omniscience Accuracy / Hallucination Rate: **47.8% / 29.3%** (Artificial Analysis AA-Omniscience; xhigh) ([Benchmark Atlas][9])
  Coding:
- SWE-bench Verified / SWE-Pro: **no verified public score found**
- LiveCodeBench: **no verified public score found**
- SciCode / AA-SciCode: **57.8%** (Artificial Analysis, SciCode 1.0.1) ([Benchmark Atlas][9])
- Vibe Code Bench: **no verified public score found**
- DeepSWE / Coding Index / other: **71.0% DeepSWE v1.1** (SpaceXAI, high effort); **73% DeepSWE v1.1** (Artificial Analysis, Grok Build/xhigh Coding Agent evaluation); **46.3% CursorBench 4.0** (Cursor, xhigh/Extra High) ([t.co][10])
  Long context:
- **no long-context retrieval reported**; the verified advertised context limit is 500,000 tokens, but no verified MRCR/RULER/GraphWalks retrieval result at a specified window length was found. ([Grok API Documentation][3])

### Normalized scores (1-100)

- **Tool use: 82/100.** Terminal-Bench 2.1 at 76.03% provides verified evidence of strong agentic terminal performance, with GDPval-AA 1695 Elo providing additional practical-work evidence. The score is capped below the frontier 90-100 band because the supplied methodology places Terminal-Bench frontier performance around 88%+ and no verified Tau3 score was found. ([Ridgebench][6])
- **Reasoning: 90/100.** HLE at 43.1% reaches the specified frontier threshold of 40%+, while the Artificial Analysis Intelligence Index is 46.4 rather than the methodology's 60+ frontier-index reference. The latter prevents treating the model as unambiguously at the very top of the reasoning scale. ([The Model Gap][5])
- **Context window: 90/100.** 500K verified context places the model in the methodology's 500K-1M tier (85-94). No verified 512K+ retrieval result supports a 98-100 score. ([Grok API Documentation][3])
- **Multimodal: 65/100.** Verified text and image input with text output places it in the specified image-input tier; no verified audio/video input or non-text output is documented for Grok 4.7. ([Grok API Documentation][1])
- **Coding: 82/100.** Verified Terminal-Bench 2.1 at 76.03%, SciCode at 57.8%, CursorBench 4.0 at 46.3%, and DeepSWE results around 71-73% demonstrate strong coding performance. It remains below the methodology's highest coding band because Terminal-Bench 2.1 is below 85% and DeepSWE is below 74%; the vendor's 38.0% Terminal-Bench 4.0 result is not substituted for TB2.1 because it is a different benchmark version/harness. ([Ridgebench][6])
- **Cost efficiency: 75/100.** Paid API pricing is $2/$6 per 1M input/output tokens below 200K prompt length, with $4/$12 rates above 200K. This is materially above the methodology's ~$1.25/$4.25 reference point and well below the $3/$15 example, placing it approximately in the mid-to-upper paid-value range rather than the free/high-efficiency tier. ([Grok API Documentation][4])
- **Overall Score: 81.8/100.** Mean of Tool use 82, Reasoning 90, Context window 90, Multimodal 65, and Coding 82; cost efficiency is excluded from Overall as required. Best-fit use case: coding and agentic knowledge-work workloads that benefit from long context, tool use, and configurable high reasoning effort.

---

## Signature

- Provided by: **ChatGPT 5.6 Luna (openai/gpt-5.6-luna)** — 2026-09-25
- Method: public internet research using official SpaceXAI/xAI documentation and announcement material, Artificial Analysis, OpenCode Zen, Vals AI reporting, Cursor benchmark data, and benchmark aggregators for cross-checking; scores are normalized 1-100 interpretations, not official vendor scores.
- Future sources: add a new file next to this one, e.g. `Grok_4_7.md`, using the same headings.

[1]: https://docs.x.ai/developers/grok-4-7?utm_source=chatgpt.com "Grok 4.7 | SpaceXAI Docs"
[2]: https://opencode.ai/docs/en/zen/?utm_source=chatgpt.com "Zen | OpenCode"
[3]: https://docs.x.ai/developers/models/grok-4.7?utm_source=chatgpt.com "Grok 4.7 | SpaceXAI Docs"
[4]: https://docs.x.ai/developers/release-notes?utm_source=chatgpt.com "Release Notes | SpaceXAI Docs"
[5]: https://themodelgap.com/models/grok-4-7?utm_source=chatgpt.com "Grok 4.7 benchmarks & pricing · The Model Gap"
[6]: https://ridgebench.com/changelog?utm_source=chatgpt.com "Changelog — Ridge"
[7]: https://artificialanalysis.ai/models/comparisons/grok-4-7-vs-grok-4-6-xhigh?utm_source=chatgpt.com "Grok 4.7 (xhigh) vs Grok 4.6 (xhigh): Model Comparison | Artificial Analysis"
[8]: https://artificialanalysis.ai/ja/articles/benchmarking-grok-4-7?utm_source=chatgpt.com "Benchmarking Grok 4.7 | Artificial Analysis"
[9]: https://atlas.kevinhu.io/models/grok-4-7?utm_source=chatgpt.com "Grok 4.7 benchmark scores — Benchmark Atlas"
[10]: https://t.co/eTIw3v2Hii?utm_source=chatgpt.com "Introducing Grok 4.7 | SpaceXAI"
