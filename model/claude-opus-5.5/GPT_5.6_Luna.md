# Claude Opus 5.5 — findings by ChatGPT 5.6 Luna

- Source: Anthropic/Claude Opus 5.5
- Date: 2026-09-25 (UTC)
- Overview and scoring methodology: `../../model-comparison.md`
- Cross-model signed log: `../../model-findings.md`

## Model card

- **Name:** Claude Opus 5.5 — paid/proprietary model; no Free-tier model ID verified
- **Short description:** Anthropic's frontier Opus model for long-running coding, agentic workflows, computer use, and professional knowledge work. Released as the first model in the Claude 5.5 family; adaptive reasoning is always enabled. ([Claude][1])
- **Provider / access:** Anthropic Claude API `claude-opus-5-5`; Amazon Bedrock `anthropic.claude-opus-5-5`; Google Cloud `claude-opus-5-5`; Microsoft Foundry `claude-opus-5-5`; OpenCode Zen `claude-opus-5-5` via Anthropic Messages-compatible endpoint. OpenCode Zen lists the model but no Free-tier ID was verified. Anthropic uses its Messages API rather than OpenAI Chat Completions/Responses. ([Claude][1])
- **Release / knowledge:** 2026-09-22 release; June 2026 knowledge/training-data cutoff. ([Claude][1])
- **IDs:** `anthropic/claude-opus-5-5` (canonical provider/model notation); Anthropic API `claude-opus-5-5`; OpenCode Zen `claude-opus-5-5`. **No Free ID verified on Zen.** ([Claude][1])
- **Context window:** 1M tokens total; maximum output 128K tokens, verified in Anthropic's model documentation. No verified public MRCR/RULER retrieval percentage at 512K+ was found. ([Claude][1])
- **Modalities:** Text + image input → text output; adaptive reasoning/thinking always on; tool calls supported. No verified audio/video input or non-text output capability found in the official model specification. JSON/tool-use capabilities are supported through the API, but no separate benchmark-specific JSON score was found. ([Claude][1])
- **Pricing (as of 2026-09-25):** $4 / 1M input tokens; $20 / 1M output tokens; cached reads $0.20 / 1M; 5-minute cache writes $5 / 1M; 1-hour cache writes $8 / 1M. Batch API provides 50% input/output discount. Paid; no Free-tier access verified. ([Claude][1])
- **Architecture:** Proprietary, closed-weight model. Parameter count and active-parameter count are not publicly disclosed. ([Benchmark Atlas][2])

### Raw benchmarks found

Agent / tool use:

- Terminal-Bench 2.1: **no verified public score found**
- Tau3-Banking / Tau2-Bench: **no verified public score found**
- GDPval-AA: **1846 Elo** (Anthropic / Artificial Analysis GDPval-AA v2.1, max effort; Artificial Analysis reports rank-leading result on its evaluation) ([Anthropic][3])
- Claw-Eval / ClawProBench: **no verified public score found**
- Toolathon / MCP-Atlas / SWE Atlas Codebase QnA: **77.8%** (Toolathlon Verified, provider-published Anthropic system-card evaluation; max effort, 108 tasks, three trials; not an independent leaderboard result) ([UnifyBench][4])

Reasoning / knowledge:

- GPQA Diamond: **no verified public score found**
- HLE: **61.4%** (Artificial Analysis Humanity's Last Exam, max effort; Intelligence Index evaluation) ([Artificial Analysis][5])
- LCR / MLCR: **84.7%** (Artificial Analysis AA-LCR v1.1; max effort) ([Benchmark Atlas][2])
- CritPt: **31.7%** (Artificial Analysis CritPt, avg@5; max effort) ([Benchmark Atlas][2])
- Artificial Analysis Intelligence Index / BenchLM overall: **57.6 / rank #1** (Artificial Analysis Intelligence Index v4.3.2, max effort; public reporting rounds this to 58) ([Benchmark Atlas][2])
- Omniscience Accuracy / Hallucination Rate: **66.2% / 58.6%** (Artificial Analysis Omniscience; max effort) ([Benchmark Atlas][2])

Coding:

- SWE-bench Verified / SWE-Pro: **no verified public score found**
- LiveCodeBench: **no verified public score found**
- SciCode / AA-SciCode: **66.9%** (Artificial Analysis SciCode 1.0.1; max effort; Intelligence Index evaluation) ([Artificial Analysis][5])
- Vibe Code Bench: **no verified public score found**
- DeepSWE / Coding Index / other: **74.2% DeepSWE v1.1** (provider-published benchmark result); **66.4% Terminal-Bench 4.0** (Anthropic, xhigh effort); **59.6% Terminal-Bench 4.0** (Artificial Analysis harness); **54.4% FrontierCode v1.1 Main** (Anthropic, max effort). The Terminal-Bench values use different harnesses/settings and are not directly interchangeable. ([Codersera][6])

Long context:

- **no long-context retrieval reported** (verified 1M-token context window, but no verified MRCR/RULER retrieval percentage at the required 512K+ threshold was found) ([Claude][1])

### Normalized scores (1-100)

- **Tool use: 78/100.** Verified GDPval-AA v2.1 1846 Elo, AutomationBench 40.0%, AutomationBench-AA 69.5%, and Toolathlon Verified 77.8% demonstrate strong agentic/tool performance. The score is capped below the highest tier because the specified Terminal-Bench 2.1 and Tau3 measures have no verified public score; available Terminal-Bench evidence is the newer 4.0 harness. ([Anthropic][3])
- **Reasoning: 94/100.** HLE 61.4%, AA-LCR 84.7%, AA-Omniscience 46.4 and Intelligence Index 57.6 place it in the frontier range of the supplied methodology, although no GPQA Diamond result was verified and the AA Index is below the methodology's stated 60+ frontier reference. ([Artificial Analysis][5])
- **Context window: 95/100.** Verified 1M-token context places it in the >=1M tier. It receives 95 rather than 100 because no verified >=98% retrieval result at 512K+ was found. ([Claude][1])
- **Multimodal: 65/100.** Verified image + text input and text output place it in the supplied image-input tier; no verified audio/video input or non-text output capability was found in the official model specification. ([Claude][1])
- **Coding: 92/100.** DeepSWE v1.1 is reported at 74.2%, while Anthropic reports 66.4% on Terminal-Bench 4.0 and 54.4% on FrontierCode v1.1 Main. This reaches the supplied frontier coding band, but the requested SWE-bench Verified, SWE-Pro and LiveCodeBench scores were not verified. ([Codersera][6])
- **Cost efficiency: 55/100.** Paid pricing is $4/$20 per 1M input/output tokens. Under the supplied cost-efficiency scale this is below the $3/$15 reference point and far above the $0.10/$0.20 high-efficiency tier; cached reads at $0.20/1M are substantially cheaper but do not change the base model price tier. ([Claude][1])
- **Overall Score: 84.8/100.** Mean of Tool use 78, Reasoning 94, Context window 95, Multimodal 65, and Coding 92; cost efficiency excluded as required. Best fit: long-context coding, autonomous software engineering, and complex agentic/professional workflows where high capability matters more than minimizing token cost.

---

## Signature

- Provided by: **ChatGPT 5.6 Luna (openai/gpt-5.6-luna)** — 2026-09-25
- Method: public internet research using official Anthropic documentation/announcement, Artificial Analysis, OpenCode Zen documentation, and public benchmark aggregations; scores are normalized 1-100 interpretations, not official vendor scores.
- Future sources: add a new file next to this one, e.g. `GPT_5.md`, using the same headings.

[1]: https://platform.claude.com/docs/en/models/opus-5-5/overview?utm_source=chatgpt.com "Claude Opus 5.5 - Claude Platform Docs"
[2]: https://atlas.kevinhu.io/models/claude-opus-5-5?utm_source=chatgpt.com "Claude Opus 5.5 benchmark scores — Benchmark Atlas"
[3]: https://www.anthropic.com/claude-opus-5-5?trk=public_post_comment-text&utm_source=chatgpt.com "Introducing Claude Opus 5.5 \\ Anthropic"
[4]: https://unifybench.ai/benchmarks/toolathlon-verified-june2026-percent?utm_source=chatgpt.com "Toolathlon · Verified June2026 · public scores"
[5]: https://artificialanalysis.ai/articles/claude-opus-5-5/?utm_source=chatgpt.com "Claude Opus 5.5 takes the top spot on the Artificial Analysis Intelligence Index | Artificial Analysis"
[6]: https://codersera.com/blog/claude-opus-5-5-complete-guide-2026/?utm_source=chatgpt.com "Claude Opus 5.5: Specs, Pricing & Benchmarks (2026)"
