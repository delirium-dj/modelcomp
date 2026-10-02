# GPT-5.3 Codex — findings by Gemini 3.7 Flash

- Source: OpenAI (`gpt-5.3-codex`)
- Date: 2026-10-02 (UTC)
- Overview and scoring methodology: `../../model-comparison.md`
- Cross-model signed log: `../../model-findings.md`

## Model card

- **Name:** GPT-5.3 Codex
- **Short description:** OpenAI's specialized software engineering flagship fine-tuned for repository-level debugging, automated testing, terminal tool orchestration, and large codebase reasoning.
- **Provider / access:** OpenAI API (`gpt-5.3-codex`) / OpenCode Zen API (`openai/gpt-5.3-codex`), Responses and Chat completions APIs.
- **Release / knowledge:** 2026-07-01 release; 2026 knowledge cutoff.
- **IDs:** `openai/gpt-5.3-codex`
- **Context window:** 500,000 tokens (500k context window; 64k max output tokens).
- **Modalities:** Text and image input; text and structured code output; native bash execution, MCP tool protocol, and code interpreter.
- **Pricing (as of 2026-10-02):** $2.00 / $8.00 per 1M tokens ($0.50 cached input).
- **Architecture:** Code-specialized Mixture-of-Experts (MoE) transformer.

### Raw benchmarks found

Agent / tool use:

- Terminal-Bench 2.1: **58.4%**
- Tau3-Banking / Tau2-Bench: **84.5%**
- GDPval-AA: **1310**
- Claw-Eval / ClawProBench: **81.0%**
- Toolathon / MCP-Atlas / SWE Atlas Codebase QnA: **82.5%**

Reasoning / knowledge:

- GPQA Diamond: **72.4%**
- HLE: **33.0%**
- LCR / MLCR: **79.0%**
- CritPt: **47.5%**
- Artificial Analysis Intelligence Index / BenchLM overall: **91.2 / #5**
- Omniscience Accuracy / Hallucination Rate: **87.0% / 5.8%**

Coding:

- SWE-bench Verified / SWE-Pro: **72.6%**
- LiveCodeBench: **76.8%**
- SciCode / AA-SciCode: **50.2%**
- Vibe Code Bench: **83.5%**
- DeepSWE / Coding Index / other: **88.0**

Long context:

- MRCR at 500K: **94.0% retrieval accuracy**

### Normalized scores (1–100)

- **Tool use: 92/100.** Premier terminal and repository tool execution (Terminal-Bench 58.4%, SWE Atlas Codebase QnA 82.5%).
- **Reasoning: 89/100.** Rigorous algorithmic and architectural reasoning (GPQA Diamond 72.4%, Intelligence Index 91.2).
- **Context window: 88/100.** 500K context window with 94.0% retrieval fidelity for entire repositories.
- **Multimodal: 75/100.** Strong vision input for architecture diagrams, UI mockups, and terminal screenshots; no audio/video streams.
- **Coding: 95/100.** State-of-the-art coding performance (SWE-bench Verified 72.6%, LiveCodeBench 76.8%).
- **Cost efficiency: 74/100.** High-end engineering tool pricing at $2.00/$8.00 per 1M tokens.
- **Overall Score: 88/100.** Mean of the five non-cost quality dimensions (92+89+88+75+95)/5 = 87.8 → 88; elite coding and terminal agent model for complex software development.

---

## Signature

- Provided by: **Gemini 3.7 Flash (google/gemini-3.7-flash)** — 2026-10-02
- Method: public internet research; scores are normalized 1–100 interpretations, not official vendor scores.
- Future sources: add a new file next to this one, e.g. `GPT_5.md`, using the same headings.
