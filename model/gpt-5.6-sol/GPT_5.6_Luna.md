# GPT-5.6 Sol — findings by ChatGPT 5.6 Luna

- Source: OpenAI/gpt-5.6-sol
- Date: 2026-09-25 (UTC)
- Overview and scoring methodology: `../../model-comparison.md`
- Cross-model signed log: `../../model-findings.md`

## Model card

- **Name:** GPT-5.6 Sol
- **Short description:** OpenAI's flagship GPT-5.6 model for complex professional work, reasoning, coding, and long-horizon agentic workflows. `gpt-5.6` is an alias that routes to GPT-5.6 Sol; Sol is the flagship tier of the GPT-5.6 family. ([OpenAI Developers][1])
- **Provider / access:** OpenAI API `gpt-5.6-sol`; Chat Completions `v1/chat/completions` and Responses `v1/responses`; OpenCode Zen `gpt-5.6-sol` via `https://opencode.ai/zen/v1/responses`. Responses API supports reasoning, function calling, structured outputs, MCP and hosted tools. ([OpenAI Developers][1])
- **Release / knowledge:** 2026-07-09 release; 2026-02-16 knowledge cutoff. ([OpenAI][2])
- **IDs:** `openai/gpt-5.6-sol`; OpenCode Zen `gpt-5.6-sol` (a Free ID does not exist on Zen; Zen is pay-as-you-go). ([OpenCode][3])
- **Context window:** 1,050,000 tokens; maximum output 128,000 tokens, verified from OpenAI's current model documentation. ([OpenAI Developers][1])
- **Modalities:** text in/out; image input; no audio input; no video input; PDF/file inputs are supported through file/tool workflows; reasoning yes; tool calls supported; structured/JSON outputs supported. ([OpenAI Developers][1])
- **Pricing (as of 2026-09-25):** $4.00 input / $0.40 cached input / $20.00 output per 1M tokens; promotional pricing is stated by OpenAI to run at least through 2026-11-21. Prompts over 272K input tokens are charged at 2× input and 1.5× output rates; cache writes are 1.25× input. Paid API; no Free API tier. ([OpenAI Developers][1])
- **Architecture:** proprietary closed-weight model; parameter count and MoE/active-parameter details are not publicly disclosed. ([Artificial Analysis][4])

### Raw benchmarks found

Agent / tool use:

- Terminal-Bench 2.1: **88.8%** (OpenAI; GPT-5.6 Sol standard/max family result; official launch table; #1 among listed comparison models) ([OpenAI][2])
- Tau3-Banking / Tau2-Bench: **no verified public score found**
- GDPval-AA: **1,747.8 Elo** (OpenAI; GDPval-AA v2; GPT-5.6 Sol) ([OpenAI][2])
- Claw-Eval / ClawProBench: **no verified public score found**
- Toolathon / MCP-Atlas / SWE Atlas Codebase QnA: **Toolathlon 58%** (OpenAI; Toolathlon) / no verified public MCP-Atlas or SWE Atlas Codebase QnA score found. ([OpenAI][2])
  Reasoning / knowledge:
- GPQA Diamond: **94.6%** (OpenAI; official GPT-5.6 launch evaluation) ([OpenAI][2])
- HLE: **46.0%** (Artificial Analysis; GPT-5.6 Sol high configuration) ([OpenRouter][5])
- LCR / MLCR: **80.3% AA-LCR** (Artificial Analysis; GPT-5.6 Sol medium configuration) ([OpenRouter][5])
- CritPt: **22.9%** (Artificial Analysis; GPT-5.6 Sol medium configuration) ([OpenRouter][5])
- Artificial Analysis Intelligence Index / BenchLM overall: **58.9 / #2 at GPT-5.6 launch comparison** (Artificial Analysis Intelligence Index v4.1; GPT-5.6 Sol max; OpenAI launch table reports 58.9; Artificial Analysis describes Sol as one point behind the then-leading Fable 5) ([OpenAI][2])
- Omniscience Accuracy / Hallucination Rate: **57.8% / 9.2% non-hallucination rate** (Artificial Analysis; GPT-5.6 Sol medium; AA-Omniscience) ([OpenRouter][5])
  Coding:
- SWE-bench Verified / SWE-Pro: **no verified public SWE-bench Verified score found / 64.6% SWE-Bench Pro** (OpenAI; SWE-Bench Pro) ([OpenAI][2])
- LiveCodeBench: **no verified public score found**
- SciCode / AA-SciCode: **57.8%** (Artificial Analysis; GPT-5.6 Sol high configuration; SciCode) ([OpenRouter][5])
- Vibe Code Bench: **no verified public score found**
- DeepSWE / Coding Index / other: **72.7% DeepSWE v1.1 / 80 Artificial Analysis Coding Agent Index v1.1** (OpenAI; GPT-5.6 Sol; Coding Agent Index and DeepSWE) ([OpenAI][2])
  Long context:
- **MRCR v2 8-needle 256K-512K: 91.5%; MRCR v2 8-needle 512K-1M: 73.8%; GraphWalks BFS 256K F1: 90.7%; GraphWalks BFS 1M F1: 77.1%** (OpenAI; long-context evaluations) ([OpenAI][2])

### Normalized scores (1-100)

- **Tool use: 95/100.** Terminal-Bench 2.1 reaches 88.8%, GDPval-AA reaches 1,747.8 Elo, and Toolathlon reaches 58%; the strong terminal and professional-agent results support a frontier score, while the absence of a verified Tau3/Tau2-Banking result and the lower AutomationBench 18.1% prevent treating it as an unqualified 100. ([OpenAI][2])
- **Reasoning: 96/100.** GPQA Diamond is 94.6%, HLE reaches 46.0% on Artificial Analysis high, and AA-LCR reaches 80.3% on medium; these are frontier-level results under the supplied mapping, with the HLE and CritPt results below the strongest possible ceiling. ([OpenAI][2])
- **Context window: 96/100.** Verified total context is 1.05M tokens, placing it in the >=1M tier; MRCR v2 retrieval is 73.8% at 512K-1M, so it does not qualify for the methodology's 100-point condition requiring approximately 98% retrieval at 512K+. ([OpenAI Developers][1])
- **Multimodal: 65/100.** GPT-5.6 Sol accepts text and image input and produces text output; OpenAI reports 83% MMMU Pro without tools and 84.6% with tools. Audio and video input are not supported, so the supplied +image tier maps to 60-70 rather than the higher multimodal tiers. ([OpenAI][2])
- **Coding: 92/100.** Terminal-Bench 2.1 is 88.8%, DeepSWE v1.1 is 72.7%, SWE-Bench Pro is 64.6%, and the Artificial Analysis Coding Agent Index is 80; this is clearly frontier coding-agent performance, but DeepSWE remains below the supplied 74% frontier marker and SWE-Bench Pro is below the strongest tier. ([OpenAI][2])
- **Cost efficiency: 50/100.** $4/$20 per 1M input/output tokens is materially above the supplied ~$3/$15 reference point for a 60/100 tier and far above the low-cost tiers; this score is independent of Overall and uses the current promotional API price. ([OpenAI Developers][1])
- **Overall Score: 88.8/100.** Mean of Tool use 95, Reasoning 96, Context window 96, Multimodal 65, and Coding 92, excluding cost efficiency; best fit is complex professional work, long-horizon reasoning, coding-agent workflows, and tool-heavy technical tasks.

---

## Signature

- Provided by: **ChatGPT 5.6 Luna (openai/gpt-5.6-luna)** — 2026-09-25
- Method: public internet research using OpenAI model documentation/release material, Artificial Analysis, and OpenCode Zen documentation; scores are normalized 1-100 interpretations, not official vendor scores.
- Future sources: add a new file next to this one, e.g. `GPT_5_6_Sol.md`, using the same headings.

[1]: https://developers.openai.com/api/docs/models/gpt-5.6-sol?utm_source=chatgpt.com "GPT-5.6 Sol Model | OpenAI API"
[2]: https://openai.com/index/gpt-5-6/ "GPT-5.6: Frontier intelligence that scales with your ambition | OpenAI"
[3]: https://www.open-code.ai/en/docs/zen?utm_source=chatgpt.com "OpenCode Zen: Model List, Pricing & Free Coding Models - OpenCode Docs"
[4]: https://artificialanalysis.ai/models/gpt-5-6-sol-high/?utm_source=chatgpt.com "GPT-5.6 Sol (high) - Intelligence, Performance & Price Analysis | Artificial Analysis"
[5]: https://openrouter.aigan.me/openai/gpt-5.6-sol-20260709?utm_source=chatgpt.com "GPT-5.6 Sol - API Pricing & Benchmarks | OpenRouter"
