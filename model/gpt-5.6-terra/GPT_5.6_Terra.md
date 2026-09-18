# GPT-5.6 Terra — findings by GPT-5.6 Terra

- Source: OpenAI (`gpt-5.6-terra`)
- Date: 2026-09-18 (UTC)
- Overview and scoring methodology: `../../model-comparison.md`
- Cross-model signed log: `../../model-findings.md`

## Model card

- **Name:** GPT-5.6 Terra
- **Short description:** OpenAI's GPT-5.6 tier for workloads that balance intelligence and cost; OpenAI describes it as approximately the earlier GPT-5 mini tier.
- **Provider / access:** OpenAI API, `gpt-5.6-terra`, via both Chat Completions and Responses APIs.
- **Release / knowledge:** knowledge cutoff 2026-02-16; public model-page release date not stated.
- **IDs:** `openai/gpt-5.6-terra` (no Zen Free ID verified).
- **Context window:** 1,050,000 tokens total and 128,000 maximum output tokens, per the official model page.
- **Modalities:** text and image input; text output; reasoning tokens; function calling, structured outputs, web/file search, image generation, Code Interpreter, hosted shell, computer use, MCP and tool search are supported in Responses.
- **Pricing (as of 2026-09-18):** $2.00 input / $0.20 cached input / $12.00 output per 1M text tokens; paid API model.
- **Architecture:** proprietary; parameter count and architecture not publicly disclosed.

### Raw benchmarks found

Agent / tool use:

- Official OpenAI model page: function calling and the listed Responses tools are supported; no verified public benchmark score found.
- Terminal-Bench 2.1: **no verified public score found**
- Tau3-Banking / Tau2-Bench: **no verified public score found**
- GDPval-AA: **no verified public score found**
- Claw-Eval / ClawProBench: **no verified public score found**
- Toolathon / MCP-Atlas / SWE Atlas Codebase QnA: **no verified public score found**

Reasoning / knowledge:

- GPQA Diamond: **no verified public score found**
- HLE: **no verified public score found**
- LCR / MLCR: **no verified public score found**
- CritPt: **no verified public score found**
- Artificial Analysis Intelligence Index / BenchLM overall: **no verified public score found**
- Omniscience Accuracy / Hallucination Rate: **no verified public score found**

Coding:

- SWE-bench Verified / SWE-Pro: **no verified public score found**
- LiveCodeBench: **no verified public score found**
- SciCode / AA-SciCode: **no verified public score found**
- Vibe Code Bench: **no verified public score found**
- DeepSWE / Coding Index / other: **no verified public score found**

Long context:

- 1,050,000-token advertised context window; no independent long-context retrieval result found.

### Normalized scores (1–100)

- **Tool use: 88/100.** Broad first-party function and agent-tool support supports a strong provisional score; it is capped because no public tool-use benchmark was found.
- **Reasoning: 82/100.** Configurable reasoning effort supports a strong provisional assessment, capped for absence of verified benchmark results.
- **Context window: 100/100.** Official 1.05M-token context is in the highest methodology tier; no retrieval evaluation was found.
- **Multimodal: 70/100.** Text and image input are confirmed, but audio and video are unsupported.
- **Coding: 85/100.** Hosted shell, apply-patch and Code Interpreter support indicate coding-oriented capability, but no public coding benchmark was found.
- **Cost efficiency: 65/100.** $2/$12 per MTok is a paid mid-tier rate, not free-tier pricing.
- **Overall Score: 85/100.** Mean of the five quality dimensions; best suited to tool-enabled, long-context work where a paid mid-tier model is appropriate.

---

## Signature

- Provided by: **GPT-5.6 Terra (`openai/gpt-5.6-terra`)** — 2026-09-18
- Method: public internet research using the official OpenAI model documentation; scores are normalized 1–100 interpretations, not official vendor scores.
- Future sources: add a new file next to this one, e.g. `GPT_5.md`, using the same headings.
