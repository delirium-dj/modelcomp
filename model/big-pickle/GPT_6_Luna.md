# Big Pickle — findings by GPT 6 Luna
- Source: OpenCode Zen/Big Pickle (`big-pickle`); benchmark run: `PhillipChaffee/big-pickle-swe-atlas`. 
- Date: 2026-10-05 (UTC)
- Overview and scoring methodology: `../../model-comparison.md`
- Cross-model signed log: `../../model-findings.md`
## Model card
- **Name:** Big Pickle (limited-time Free stealth model).
- **Short description:** OpenCode Zen offers Big Pickle as a limited-time free stealth model; models.dev describes it as a reasoning model for multi-step analysis and tool use. It is an alias rather than a publicly identified, stable base model; the public benchmark run says its underlying identity is unconfirmed and may change. 
- **Provider / access:** OpenCode Zen; OpenAI-compatible Chat Completions API at `https://opencode.ai/zen/v1/chat/completions` (not a Responses API). OpenCode config ID: `opencode/big-pickle`. 
- **Release / knowledge:** models.dev lists release date `2025-10-17` and knowledge cutoff `2025-01`; these are catalog metadata, not a provider-confirmed version for the currently served stealth alias. 
- **IDs:** `opencode/big-pickle`. OpenCode has no separate `big-pickle-free` ID; it currently lists this same ID as Free. 
- **Context window:** 200,000 total; models.dev lists 160,000 input / 32,000 output. Catalog-listed, not independently stress-tested; the underlying alias may change. 
- **Modalities:** Text input and text output only; no image, audio, video, or PDF input listed. Reasoning: yes; tool calls: yes; structured/JSON output: yes, according to models.dev metadata. 
- **Pricing (as of 2026-10-05):** Free/limited-time: $0 per 1M input, output, and cached-read tokens. OpenCode does not list cached-write pricing; models.dev records it as $0. Free-tier privacy caveat: OpenCode says collected data may be used to improve the model during its free period; avoid sending sensitive or proprietary data. 
- **Architecture:** Hosted stealth alias; models.dev marks `open_weights=false`. Underlying model identity, parameter count, MoE structure, weights, and license are undisclosed; the benchmark report also cautions that the alias identity is unconfirmed. 
### Raw benchmarks found
Agent / tool use:
- Terminal-Bench 2.1: no verified public score found
- Tau3-Banking / Tau2-Bench: no verified public score found
- GDPval-AA: no verified public score found
- Claw-Eval / ClawProBench: no verified public score found
- Toolathon / MCP-Atlas / SWE Atlas Codebase QnA: **50.8%** (63/124; public, self-reported run on 2026-08-11; Mini-SWE-Agent 2.4.6 + Harbor 0.18.0; no official rank; Scale did not run or verify it. The report gives a 49.2% strict lower bound if two tasks with unscored rubrics are counted as failures.) 
Reasoning / knowledge:
- GPQA Diamond: no verified public score found
- HLE: no verified public score found
- LCR / MLCR: no verified public score found
- CritPt: no verified public score found
- Artificial Analysis Intelligence Index / BenchLM overall: no verified public score found
- Omniscience Accuracy / Hallucination Rate: no verified public score found
Coding:
- SWE-bench Verified / SWE-Pro: no verified public score found
- LiveCodeBench: no verified public score found
- SciCode / AA-SciCode: no verified public score found
- Vibe Code Bench: no verified public score found
- DeepSWE / Coding Index / other: no verified public score found
Long context:
- MRCR / RULER / GraphWalks: no long-context retrieval reported
### Normalized scores (1-100)
- **Tool use: 50/100.** Tool calling is listed as supported, but that is capability metadata, not a performance result; no verified tool-use-specific benchmark score was found, so this is a conservative baseline. 
- **Reasoning: 55/100.** The only relevant result is the self-reported 50.8% SWE Atlas Codebase QnA run; it provides limited evidence of codebase reasoning, but is not a canonical reasoning benchmark and is not Scale-verified. 
- **Context window: 70/100.** Uses the catalog-listed 200K total context tier (the supplied mapping assigns 200K = 70); no long-context retrieval test was found. 
- **Multimodal: 15/100.** Text-only input and output are listed; no non-text modality support was verified. 
- **Coding: 55/100.** The single public result is 50.8% on SWE Atlas Codebase QnA, a self-reported codebase-comprehension run rather than a patch-generation benchmark; no verified SWE-bench, DeepSWE, LiveCodeBench, or SciCode result was found. 
- **Cost efficiency: 100/100.** OpenCode currently lists the evaluated tier as Free; this score is independent and excluded from Overall. Availability is limited-time. 
- **Overall Score: 49.0/100.** Mean of the five non-cost dimensions: (50 + 55 + 70 + 15 + 55) / 5 = 49.0. Best fit: free, non-sensitive, text-only exploratory coding-agent and repository-Q&A tasks—not production reliance on a stable model identity.
---
## Signature
- Provided by: **GPT 6 Luna (openai/gpt-6-luna)** — 2026-10-05
- Method: Fresh public-web research of OpenCode Zen documentation, models.dev, Scale SWE Atlas materials, and the public benchmark-run repository. The SWE Atlas result is self-reported and not Scale-verified; normalized scores are interpretations, not official vendor scores.
- Future sources: add a new file next to this one, e.g. `GPT_5.md`, using the same headings.