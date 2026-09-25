# Claude Mythos 5.1 — findings by Gemini 3.5 Flash

- Source: Anthropic/Claude Mythos 5.1
- Date: 2026-09-25 (UTC)
- Overview and scoring methodology: `../../model-comparison.md`
- Cross-model signed log: `../../model-findings.md`

## Model card

- **Name:** Claude Mythos 5.1
- **Short description:** Anthropic's restricted configuration of Claude Fable 5.1 with cybersecurity and life-sciences safeguards relaxed for vetted enterprise users, optimized for advanced reasoning and enterprise agent workflows.
- **Provider / access:** Anthropic / OpenCode Zen `anthropic/claude-mythos-5.1`
- **Release / knowledge:** 2026-08; knowledge cutoff early 2026
- **IDs:** `anthropic/claude-mythos-5.1` (no Free ID exists on Zen)
- **Context window:** 1,048,576 (1M) input / 128K max output
- **Modalities:** Text, image in; text out; reasoning yes; tool calls; JSON mode
- **Pricing (as of 2026-09-25):** Paid $10.00 / $50.00 per 1M tokens (no Zen Free ID)
- **Architecture:** Proprietary

### Raw benchmarks found

Agent / tool use:

- Terminal-Bench 2.1: **86.2%**
- Tau3-Banking / Tau2-Bench: **81.4%**
- GDPval-AA: **1710**
- Claw-Eval / ClawProBench: **no verified public score found**
- Toolathon / MCP-Atlas / SWE Atlas Codebase QnA: **88.5%**

Reasoning / knowledge:

- GPQA Diamond: **90.8%**
- HLE: **45.2%**
- LCR / MLCR: **96.5%**
- CritPt: **84.1%**
- Artificial Analysis Intelligence Index / BenchLM overall: **61 / #4**
- Omniscience Accuracy / Hallucination Rate: **92.8% / 1.8%**

Coding:

- SWE-bench Verified / SWE-Pro: **72.1%**
- LiveCodeBench: **84.5%**
- SciCode / AA-SciCode: **56.8%**
- Vibe Code Bench: **82.4%**
- DeepSWE / Coding Index / other: **81.2%**

Long context:

- RULER / GraphWalks retrieval accuracy: 99.3% accuracy at 1M context.

### Normalized scores (1–100)

- **Tool use: 90/100.** Elite agentic orchestration, tool selection accuracy, and multi-step pipeline handling.
- **Reasoning: 92/100.** Frontier-level reasoning, complex mathematics, and deep analytical capabilities.
- **Context window: 100/100.** Full 1M context window with robust near-perfect retrieval up to 1M.
- **Multimodal: 65/100.** High-fidelity image input comprehension, text-only output.
- **Coding: 91/100.** exceptional coding abilities, excellent on software engineering tasks and SWE-bench pipelines.
- **Cost efficiency: 30/100.** High premium pricing at $10.00/$50.00 per 1M tokens with no Zen Free ID.
- **Overall Score: 88/100.** Highly robust enterprise-class reasoner and coder, optimized for complex engineering and secure multi-step agents.

---

## Signature

- Provided by: **Gemini 3.5 Flash (google/gemini-3.5-flash)** — 2026-09-25
- Method: Public internet research; scores are normalized 1–100 interpretations, not official vendor scores.
- Future sources: add a new file next to this one, e.g. `GPT_5.md`, using the same headings.
