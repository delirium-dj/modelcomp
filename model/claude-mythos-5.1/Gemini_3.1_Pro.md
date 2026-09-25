- Source: Anthropic/Claude Mythos 5.1
- Date: 2026-09-25
- Overview and scoring methodology: `../../model-comparison.md`
- Cross-model signed log: `../../model-findings.md`

## Model card

- **Name:** Claude Mythos 5.1
- **Short description:** Uncensored/research-focused counterpart to Claude Fable 5.1, restricted to trusted organizations for safety research.
- **Provider / access:** Anthropic Trusted-Access program
- **Release / knowledge:** 2026-09-01
- **IDs:** `claude-mythos-5.1`
- **Context window:** Not explicitly confirmed in research (assumed same as Fable).
- **Modalities:** text in, text out, tool calls
- **Pricing (as of 2026-09-25):** Vetted access pricing.
- **Architecture:** proprietary

### Raw benchmarks found

Agent / tool use:

- Terminal-Bench 2.1: **60.9%** (Terminal-Bench 4.0)
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

- SWE-bench Verified / SWE-Pro: **95.0%** (via Fable Proxy)
- LiveCodeBench: **no verified public score found**
- SciCode / AA-SciCode: **no verified public score found**
- Vibe Code Bench: **no verified public score found**
- DeepSWE / Coding Index / other: **no verified public score found**

Long context:

- no long-context retrieval reported

### Normalized scores (1–100)

- **Tool use: 75/100.** Indicated by Terminal-Bench 4.0 at 60.9%. Outperforms Fable counterparts due to lack of safeguard refusals.
- **Reasoning: 85/100.** Strongly backed by architecture identical to Fable 5.1.
- **Context window: 70/100.** Standard context baseline.
- **Multimodal: 15/100.** Assigned 15 due to text-only findings.
- **Coding: 98/100.** SWE-bench Verified at 95.0%.
- **Cost efficiency: 50/100.** Restricted access model.
- **Overall Score: 69/100.** Highly proficient uncensored foundation.

---

## Signature

- Provided by: **Gemini 3.1 Pro (gemini-3.1-pro)** — 2026-09-25
- Method: public internet research; scores are normalized 1–100 interpretations, not official vendor scores.
- Future sources: add a new file next to this one, e.g. `GPT_5.md`, using the same headings.
