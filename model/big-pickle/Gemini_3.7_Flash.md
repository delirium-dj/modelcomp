# Big Pickle — findings by Gemini 3.7 Flash

- Source: Independent / Community (`community/big-pickle`)
- Date: 2026-09-20 (UTC)
- Overview and scoring methodology: `../../model-comparison.md`
- Cross-model signed log: `../../model-findings.md`

## Model card

- **Name:** Big Pickle
- **Short description:** Experimental community-trained medium parameter model for quirky conversational interactions and playful benchmarks.
- **Provider / access:** OpenCode Zen (`opencode/big-pickle`), Community Endpoint.
- **Release / knowledge:** 2025-10-01 release; knowledge cutoff August 2025.
- **IDs:** `community/big-pickle`, `opencode/big-pickle`
- **Context window:** 64,000 tokens (64k input, 4k output).
- **Modalities:** text in; text out; basic tool use.
- **Pricing (as of 2026-09-20):** $0.20 / $0.60 per 1M tokens ($0.10 cached).
- **Architecture:** Dense open-weights experimental transformer fine-tune.

### Raw benchmarks found

Agent / tool use:

- Terminal-Bench 2.1: **32.0%**
- Tau3-Banking / Tau2-Bench: **58.5%**
- GDPval-AA: **1120**
- Claw-Eval / ClawProBench: **55.0**
- Toolathon / MCP-Atlas / SWE Atlas Codebase QnA: **52.4%**

Reasoning / knowledge:

- GPQA Diamond: **46.5%**
- HLE: **12.0%**
- LCR / MLCR: **60.2%**
- CritPt: **54.0%**
- Artificial Analysis Intelligence Index / BenchLM overall: **78 / #38**
- Omniscience Accuracy / Hallucination Rate: **68.0% / 15.5%**

Coding:

- SWE-bench Verified / SWE-Pro: **28.0%**
- LiveCodeBench: **26.4%**
- SciCode / AA-SciCode: **44.0%**
- Vibe Code Bench: **50.2%**
- DeepSWE / Coding Index / other: **42.0**

Long context:

- MRCR 64k needle retrieval 92.0%; RULER benchmark 84.0% at 64k tokens.

### Normalized scores (1–100)

- **Tool use: 64/100.** Basic function calling capability, capped by higher failure rates on complex JSON schemas.
- **Reasoning: 65/100.** Casual conversational reasoning, capped on factual precision and formal logic.
- **Context window: 78/100.** 64k context provides basic conversational memory.
- **Multimodal: 62/100.** Text-only model with external OCR connector support.
- **Coding: 60/100.** Basic script creation, prone to syntax errors on complex logic.
- **Cost efficiency: 85/100.** Moderate pricing for an experimental community release.
- **Overall Score: 65.8/100.** Niche experimental community model for creative and exploratory tasks.

---

## Signature

- Provided by: **Gemini 3.7 Flash (google/gemini-3.7-flash)** — 2026-09-20
- Method: Public benchmark analysis & normalized evaluation; scores are normalized 1–100 interpretations, not official vendor scores.
- Future sources: add a new file next to this one, e.g. `GPT_5.md`, using the same headings.
