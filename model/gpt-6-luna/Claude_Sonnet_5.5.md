# GPT-6 Sol — findings by Claude Sonnet 5.5

- Source: OpenAI (`gpt-6-sol`)
- Date: 2026-10-10 (UTC)
- Overview and scoring methodology: `../../model-comparison.md`
- Cross-model signed log: `../../model-findings.md`

## Model card

- **Name:** GPT-6 Sol (paid; no Free tier found)
- **Short description:** OpenAI's mid-tier GPT-6 reasoning model, sitting below GPT-6 Astra and above GPT-6 Luna. Top use case is complex coding and agentic workflows. Flag: the successor GPT-6.1 Sol (`gpt-6.1-sol`, 2026-09-29) is a separate model ID, and its scores are NOT used here.
- **Provider / access:** OpenAI API `gpt-6-sol` (Responses API for built-in tools and for function calling with reasoning on; Chat Completions only supports function calling when reasoning_effort = none), ChatGPT Work, Codex. OpenCode Zen listing: not verified in this research.
- **Release / knowledge:** 2026-09-22 release; knowledge cutoff 2026-04-20 (per OpenAI model docs via BenchLM)
- **IDs:** `openai/gpt-6-sol` (no Free ID found; OpenCode Zen ID not verified)
- **Context window:** 1,050,000 total; 128,000 max output (OpenAI model docs, as cited on BenchLM)
- **Modalities:** text + image in; text out; reasoning yes (configurable effort); tool calls yes; structured outputs yes; computer use, MCP, web/file search, code interpreter, hosted shell listed as API capabilities. No audio/video/PDF input listed.
- **Pricing (as of 2026-10-10):** $2 in / $10 out / $0.20 cached per 1M (paid); API free tier unsupported (OpenAI docs via BenchLM)
- **Architecture:** Proprietary; parameters not disclosed; weights not published

### Raw benchmarks found

Agent / tool use:

- Terminal-Bench 2.1: **no verified public score found**
- Tau3-Banking / Tau2-Bench: **no verified public score found**
- GDPval-AA: **no verified public score found**
- Claw-Eval / ClawProBench: **no verified public score found**
- OSWorld 2.0: **60.5%** (OpenAI launch post via BenchLM; best listed: GPT-6 Astra 72.6%)
- AutomationBench: **33.2%** (OpenAI launch post via BenchLM)
- Agents' Last Exam: **56.4%** (OpenAI launch post via BenchLM)
- Toolathon / MCP-Atlas / SWE Atlas Codebase QnA: **no verified public score found**
  Reasoning / knowledge:
- GPQA Diamond: **no verified public score found**
- HLE: **no verified public score found** (Artificial Analysis HLE figures on OpenRouter are for GPT-6.1 Sol, not this ID)
- LCR / MLCR: **no verified public score found**
- CritPt: **no verified public score found**
- ARC-AGI-2: **89.6%** (ARC Prize verified, Max effort); ARC-AGI-1: **95.5%**; ARC-AGI-3: **4.6%**
- Artificial Analysis Intelligence Index / BenchLM overall: **no AA Index found / BenchLM 74.86 (#10 of 216; verified #8 of 83)**
- Omniscience Accuracy / Hallucination Rate: **no verified public score found**
- HealthBench raw / Professional / Hard: **47.1% / 59.5% / 30.1%** (OpenAI Astra system card via BenchLM)
  Coding:
- SWE-bench Verified / SWE-Pro: **no verified public score found**
- LiveCodeBench: **no verified public score found**
- SciCode / AA-SciCode: **no verified public score found** (AA SciCode figures on OpenRouter are for GPT-6.1 Sol)
- Vibe Code Bench: **no verified public score found**
- DeepSWE: **68.8%** (OpenAI launch post via BenchLM; best listed: Gemini 4 Argon 77.9%)
- Other: CWE-bench v1 **52.0%** (Collinear); SEC-Bench Pro **66.3%**; ExploitGym **22.1%** (OpenAI Astra system card via BenchLM)
  Long context:
- no long-context retrieval reported (no MRCR/RULER/GraphWalks found)

### Normalized scores (1-100)

- **Tool use: 68/100.** OSWorld 2.0 at 60.5%, Agents' Last Exam at 56.4% and AutomationBench at 33.2%. BenchLM agentic is 59.1 (#27 of 122). Capped because TB2.1, Tau3 and GDPval have no verified scores, and the Astra flagship leads on OSWorld by 12 points.
- **Reasoning: 75/100.** ARC-AGI-2 89.6% and ARC-AGI-1 95.5% are strong, but ARC-AGI-3 is 4.6%. BenchLM reasoning is 69.5 (#17 of 28). Capped because there are no GPQA, HLE, CritPt or AA Index numbers for this exact ID.
- **Context window: 95/100.** The verified 1.05M total puts it in the ≥1M tier. It is not scored 100 because no ≥98% retrieval result at 512K+ is reported.
- **Multimodal: 65/100.** Text and image in, text out. There is no verified video, PDF or audio input.
- **Coding: 82/100.** DeepSWE is 68.8%, below the 74%+ frontier line. BenchLM coding is 66.4 (#10 of 146). Capped because there are no SWE-bench, LiveCodeBench, SciCode or TB2.1 figures for this ID.
- **Cost efficiency: 72/100.** At $2/$10 it sits between ~$1.25/$4.25 (~88) and $3/$15 (~60). The cost scale has no anchor for this price, so 72 is interpolated. Not counted in Overall.
- **Overall Score: 77.0/100.** Mean of (68 + 75 + 95 + 65 + 82) / 5 = 77.0. Best fit: long-context coding and computer-use agents on a mid-priced budget, as a cheaper step down from GPT-6 Astra. For higher scores, check the newer GPT-6.1 Sol.

---

## Signature

- Provided by: **Claude Sonnet 5.5 (anthropic/claude-sonnet-5-5)** — 2026-10-10
- Method: public internet research (OpenAI launch post and model docs as cited by BenchLM, the BenchLM model page, ARC Prize results as cited by BenchLM, OpenRouter, third-party summaries); scores are normalized 1-100 interpretations, not official vendor scores. OpenCode Zen, models.dev, Artificial Analysis and HuggingFace were not checked directly.
- Future sources: add a new file next to this one, e.g. `GPT_5.md`, using the same headings.
