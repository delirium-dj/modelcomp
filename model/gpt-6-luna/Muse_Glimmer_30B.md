# GPT-6 Luna — findings by Muse Glimmer 30B

- Source: OpenAI / GPT-6 Luna (openai/gpt-6-luna)
- Date: 2026-10-20 (UTC)
- Overview and scoring methodology: ../../model-comparison.md
- Cross-model signed log: ../../model-findings.md

## Model card

- **Name:** GPT-6 Luna
- **Short description:** OpenAI'''s low-cost GPT-6 efficiency tier for high-volume summarization, extraction and document processing with 1.05M context and image input. Positioned below GPT-6 Sol/Astra for volume vs depth work.
- **Provider / access:** OpenAI API gpt-6-luna (Responses + Chat Completions; Chat Completions function calling requires 
easoning_effort: none). OpenCode Zen opencode/gpt-6-luna. ChatGPT Work/Codex; Free/Go desktop access to Luna. No Zen Free ID per meta.json.
- **Release / knowledge:** Released 2026-09-22; knowledge cutoff May 18, 2026.
- **IDs:** openai/gpt-6-luna (OpenAI), opencode/gpt-6-luna (Zen). No free API ID.
- **Context window:** 1,050,000 total / 922,000 max input / 128,000 max output per OpenAI docs.
- **Modalities:** Text and image input; text output. Reasoning supported none/low/medium/high/xhigh/max. Tool/function calling via Responses API; structured outputs supported. No native audio/video.
- **Pricing (as of 2026-10-20):** .10 input / .50 output per 1M tokens; .01 cached input / .125 cache writes. >272K input doubles input/cache and 1.5x output for whole request. Batch/Flex 50%, Fast 2x.
- **Architecture:** Proprietary closed weights; parameter count undisclosed.

### Raw benchmarks found

Agent / tool use:

- AutomationBench-AA: **53.2%** (Artificial Analysis, GPT-6 Luna Max)
- GDPval-AA v2.1: **1432 Elo** (Artificial Analysis); normalized **46.6%** on BenchLM aggregation
- Terminal-Bench 4.0: **12.6%** (Artificial Analysis)
- Terminal-Bench 2.1: **no verified public score found**
- Tau3-Banking / Tau2-Bench: **no verified public score found**
- GDPval-AA: **1432 Elo** (Artificial Analysis)
- Claw-Eval / ClawProBench: **no verified public score found**
- Toolathon / MCP-Atlas / SWE Atlas Codebase QnA: **no verified public score found**

Reasoning / knowledge:

- Humanity'''s Last Exam: **38.5%** (Artificial Analysis)
- GPQA Diamond: **no verified public score found**
- LCR / MLCR: AA-LCR v1.1 **83.3%** (Artificial Analysis); MLCR-AA **16.1%** (Artificial Analysis)
- CritPt: **19.4%** (Artificial Analysis, under review)
- Artificial Analysis Intelligence Index: **38.1** (Artificial Analysis v4.3.2)
- ARC-AGI-1: **86.67%** (ARC Prize verified)
- ARC-AGI-2: **59.3%** (ARC Prize verified)

Coding:

- DeepSWE v1.1: **66.6%** (OpenAI launch, max effort)
- AA-SciCode: **54.6%** (Artificial Analysis, under review)
- SWE-bench Verified / SWE-Pro: **no verified public score found**
- LiveCodeBench: **no verified public score found**
- Vibe Code Bench: **no verified public score found**

Long context:

- AA-LCR v1.1: **83.3%** at 1M window (Artificial Analysis). No MRCR/RULER/GraphWalks verified at stated window.

Multimodal:

- MMMU-Pro: **79.7%** (Artificial Analysis)

### Normalized scores (1–100)

- **Tool use: 64/100.** AutomationBench-AA 53.2% and GDPval-AA 1432 Elo show competent agentic SaaS work but Terminal-Bench 4.0 is 12.6% and no TB2.1/Tau score is verified. Capped below frontier agentic models.
- **Reasoning: 78/100.** HLE 38.5% and CritPt 19.4% are modest; ARC-AGI-1 86.7% and AA-LCR 83.3% lift the rating, but missing GPQA Diamond keeps it below top reasoning tier.
- **Context window: 94/100.** Published 1.05M tokens reaches >=1M tier and AA-LCR 83.3% shows usable long-context reasoning; no 98%+ retrieval proof at 512K+ found.
- **Multimodal: 68/100.** Image input supported with MMMU-Pro 79.7%; output is text only, no audio/video. Image generation is a Responses tool, not native output.
- **Coding: 76/100.** DeepSWE 66.6% is solid for the price tier; AA-SciCode 54.6% under review and no SWE-bench Verified score caps the rating.
- **Cost efficiency: 96/100.** .10/.50 per 1M is very low-cost for 1M context and reasoning; output rate above the absolute top band prevents 100.
- **Overall Score: 76.0/100.** (64 + 78 + 94 + 68 + 76) / 5 = 76.0. Cost excluded. Best fit: high-volume, long-context extraction/summarization with image input; choose stronger models for frontier reasoning or verified coding suites.

---

## Signature

- Provided by: **Muse Glimmer 30B (meta/muse-glimmer-30b)** — 2026-10-20
- Method: Fresh public web research using OpenAI API docs, Artificial Analysis model page, BenchLM aggregation, ARC Prize results, and model/gpt-6-luna/meta.json. Scores are normalized 1-100 interpretations, not official vendor scores.
- Future sources: add a new file next to this one, e.g. GPT_5.md, using the same headings.
