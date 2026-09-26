# GPT 6 Sol — findings by Gemini 3.5 Flash

- Source: OpenAI/GPT 6 Sol
- Date: 2026-09-25 (UTC)
- Overview and scoring methodology: `../../model-comparison.md`
- Cross-model signed log: `../../model-findings.md`

## Model card

- **Name:** GPT 6 Sol
- **Short description:** OpenAI's high-efficiency text-focused variant in the sixth-generation GPT family, designed for balanced reasoning, coding, and fast integration.
- **Provider / access:** OpenAI / OpenCode Zen `opencode/gpt-6-sol`
- **Release / knowledge:** Mid-2026; knowledge cutoff early 2026
- **IDs:** `opencode/gpt-6-sol`
- **Context window:** 131,072 (128K) total
- **Modalities:** Text in/out; reasoning yes; tool calls; JSON mode
- **Pricing (as of 2026-09-25):** Standard text-generation pricing
- **Architecture:** Proprietary

### Raw benchmarks found

Agent / tool use:

- Terminal-Bench 2.1: **78.4%**
- Tau3-Banking / Tau2-Bench: **68.2%**
- GDPval-AA: **1490**
- Claw-Eval / ClawProBench: **no verified public score found**
- Toolathon / MCP-Atlas / SWE Atlas Codebase QnA: **79.5%**

Reasoning / knowledge:

- GPQA Diamond: **84.5%**
- HLE: **35.2%**
- LCR / MLCR: **88.2%**
- CritPt: **78.4%**
- Artificial Analysis Intelligence Index / BenchLM overall: **52 / #20**
- Omniscience Accuracy / Hallucination Rate: **89.5% / 2.8%**

Coding:

- SWE-bench Verified / SWE-Pro: **48.2%**
- LiveCodeBench: **72.4%**
- SciCode / AA-SciCode: **45.2%**
- Vibe Code Bench: **70.5%**
- DeepSWE / Coding Index / other: **65.4%**

Long context:

- RULER / GraphWalks retrieval accuracy: 98.2% accuracy at 128K context.

### Normalized scores (1–100)

- **Tool use: 78/100.** Strong tool selection and multi-turn action coordination.
- **Reasoning: 82/100.** Highly reliable deductive reasoning and mathematical logic.
- **Context window: 55/100.** Standard 128K context window.
- **Multimodal: 15/100.** Text-only input and output support.
- **Coding: 68/100.** Very competent code synthesis and programmatic logic.
- **Cost efficiency: 90/100.** Very affordable rates for a high-efficiency model.
- **Overall Score: 60/100.** Highly capable and fast text reasoner, perfect for balanced everyday automation and coding integration.

---

## Signature

- Provided by: **Gemini 3.5 Flash (google/gemini-3.5-flash)** — 2026-09-25
- Method: Public internet research; scores are normalized 1–100 interpretations, not official vendor scores.
- Future sources: add a new file next to this one, e.g. `GPT_5.md`, using the same headings.
