# GPT-6 Sol — findings by GPT 6 Luna
- Source: OpenAI (`gpt-6-sol`). 
- Date: 2026-10-03 (UTC)
- Overview and scoring methodology: `../../model-comparison.md`
- Cross-model signed log: `../../model-findings.md`
## Model card
- **Name:** GPT-6 Sol — paid; no Free ID exists on OpenCode Zen.
- **Short description:** OpenAI’s proprietary GPT-6 model for complex coding and agentic workflows. This is the original GPT-6 Sol, not GPT-5.6 Sol; OpenAI identifies GPT-6.1 Sol as the newer Sol model. 
- **Provider / access:** OpenAI API model ID `gpt-6-sol`, supported on Responses and Chat Completions; use Responses for built-in tools and reasoning-enabled function calling. Chat Completions function calling is supported only with `reasoning_effort` set to `none`. Also listed on OpenCode Zen at `https://opencode.ai/zen/v1/responses`; available in ChatGPT Work and Codex per OpenAI’s release notes. 
- **Release / knowledge:** Released 2026-09-22; knowledge cutoff 2026-04-20. 
- **IDs:** OpenAI API: `openai/gpt-6-sol` (API request ID: `gpt-6-sol`); OpenCode Zen: `opencode/gpt-6-sol` (no Free ID exists on Zen). 
- **Context window:** 1,050,000 total; models.dev lists 922,000 input and 128,000 output. OpenAI’s model page verifies the total context and max output; these are documented limits, not independently retrieval-tested limits. 
- **Modalities:** Text and image input are listed in OpenAI’s model documentation; models.dev also lists PDF input. No audio or video input; text output; reasoning supported; function/tool calls and structured outputs supported. 
- **Pricing (as of 2026-10-03):** Paid. Per 1M tokens at standard short context (≤272K input): $2.00 input / $0.20 cached input / $2.50 cache write / $10.00 output. Prompts over 272K input tokens use $4.00 / $0.40 / $5.00 / $15.00 respectively. OpenAI API Free tier is unsupported; OpenCode Zen has no GPT-6 Sol Free ID, so a free-tier privacy caveat does not apply to this model. 
- **Architecture:** Proprietary, closed weights; parameter count undisclosed; no public weights or open-weights license found. 
### Raw benchmarks found
Agent / tool use:
- Terminal-Bench 2.1: **no verified public score found**
- Tau3-Banking / Tau2-Bench: **no verified public score found**
- GDPval-AA: **1509 Elo** (Artificial Analysis GDPval-AA v2.1; GPT-6 Sol Max; no benchmark-specific rank shown). 
- Claw-Eval / ClawProBench: **no verified public score found**
- Toolathon / MCP-Atlas / SWE Atlas Codebase QnA: **no verified public score found**
Reasoning / knowledge:
- GPQA Diamond: **no verified public score found**
- HLE: **48%** (Artificial Analysis, Humanity’s Last Exam; GPT-6 Sol Max; no benchmark-specific rank shown). 
- LCR / MLCR: **84%** (Artificial Analysis AA-LCR v1.1, GPT-6 Sol Max; no benchmark-specific rank shown) / **no verified public score found** (MLCR). 
- CritPt: **31%** (Artificial Analysis CritPt; GPT-6 Sol Max; no benchmark-specific rank shown). 
- Artificial Analysis Intelligence Index / BenchLM overall: **48 index points** (Artificial Analysis Intelligence Index v4.3.2, Max; its page displays “25 of 690 models” without explicitly labeling that as a rank) / **79.2/100, #7 of 212** (BenchLM overall estimate; the profile says its position is not verified). 
- Omniscience Accuracy / Hallucination Rate: **no verified public score found / no verified public score found**. Artificial Analysis reports an AA-Omniscience composite of **27 index points** for GPT-6 Sol Max, not the two requested percentages. 
Coding:
- SWE-bench Verified / SWE-Pro: **no verified public score found**
- LiveCodeBench: **no verified public score found**
- SciCode / AA-SciCode: **58%** (Artificial Analysis SciCode; GPT-6 Sol Max; no benchmark-specific rank shown) / **no verified public score found** (separate AA-SciCode score). 
- Vibe Code Bench: **no verified public score found**
- DeepSWE / Coding Index / other: **68.8%** (OpenAI, DeepSWE v1.1, max effort; no rank reported); BenchLM coding category **61.8/100, #15 of 144** (category score based on one verified benchmark, not a raw benchmark result). 
Long context:
- no long-context retrieval reported
### Normalized scores (1-100)
- **Tool use: 65/100.** OpenAI reports AutomationBench 1.0.6 **33.2%** at xhigh effort, Agents’ Last Exam v1 **56.4%** at max effort, and OSWorld 2.0 offline partial reward **60.5%** at xhigh effort. Artificial Analysis separately reports AutomationBench-AA **62%** and Terminal-Bench 4.0 **44%** for GPT-6 Sol Max; BenchLM’s agentic category is **59.1/100, #25 of 119**. The requested Terminal-Bench 2.1 and Tau3 results were not verified, and the available evidence is below the specified frontier anchors. 
- **Reasoning: 81/100.** HLE **48%** and AA-LCR v1.1 **84%** are strong results; CritPt is **31%** and the AA Intelligence Index is **48**, below the supplied 60+ frontier anchor. No verified GPQA Diamond score was found. 
- **Context window: 95/100.** At **1,050,000** documented context tokens, it enters the ≥1M tier. Scored at the tier floor because no verified MRCR/RULER/GraphWalks retrieval result at 512K+ was found. 
- **Multimodal: 75/100.** Text/image input is documented, and models.dev additionally lists PDF input; text output only, with no audio/video input or non-text output verified. The OpenAI API page itself lists text and image as input modalities. 
- **Coding: 82/100.** DeepSWE v1.1 is **68.8%** at max effort and AA SciCode is **58%**; SciCode reaches the supplied frontier marker, but DeepSWE is below 74%, Terminal-Bench 2.1 is unverified, and no SWE-bench Verified or LiveCodeBench score was found. 
- **Cost efficiency: 70/100.** Paid at **$2/$10** per 1M input/output tokens at standard short context, with higher rates above 272K input tokens; this is an interpretation of the supplied price anchors and is not counted in Overall. 
- **Overall Score: 79.6/100.** \((65 + 81 + 95 + 75 + 82) / 5 = 79.6\); cost efficiency excluded. Best fit: paid, long-context coding and agentic work with text/image or PDF inputs; compare against GPT-6.1 Sol if choosing the current Sol model. 
---
## Signature
- Provided by: **GPT 6 Luna (OpenAI/gpt-6-luna)** — 2026-10-03
- Method: Public internet research using OpenAI model/API documentation and announcement, Artificial Analysis, BenchLM, OpenCode Zen documentation, and models.dev; scores are normalized 1-100 interpretations, not official vendor scores.
- Future sources: add a new file next to this one, e.g. `GPT_5.md`, using the same headings.