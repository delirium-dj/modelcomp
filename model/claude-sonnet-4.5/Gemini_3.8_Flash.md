# Claude Sonnet 4.5 — findings by Gemini 3.8 Flash

- Source: Anthropic (`claude-sonnet-4.5`)
- Date: 2026-09-24 (UTC)
- Overview and scoring methodology: `../../model-comparison.md`
- Cross-model signed log: `../../model-findings.md`

## Model card

- **Name:** Claude Sonnet 4.5
- **Short description:** Anthropic's flagship enterprise reasoning and software engineering model, combining computer use, deep tool calling, and long-horizon agentic task execution.
- **Provider / access:** Anthropic Messages API (`claude-sonnet-4-5-20250929`), AWS Bedrock, Google Cloud Vertex AI; OpenCode Zen (`opencode/claude-sonnet-4.5`).
- **Release / knowledge:** September 2025; knowledge cutoff June 2025.
- **IDs:** `anthropic/claude-sonnet-4-5`, `opencode/claude-sonnet-4.5`
- **Context window:** 1,000,000 tokens input context (default standard 200K window; 64K max output).
- **Modalities:** text, code, image/document input; text and code out; computer use, native tool calling, interleaved thinking.
- **Pricing (as of 2026-09-24):** $3.00 / 1M input tokens ($0.30 cached), $15.00 / 1M output tokens.
- **Architecture:** Proprietary frontier multimodal transformer with hybrid reasoning capabilities.

### Raw benchmarks found

Agent / tool use:

- OSWorld-Verified (computer use): **61.4%** (Anthropic lab-verified)
- Terminal-Bench 2.0: **51.0%** (Terminus 2 harness)
- Artificial Analysis Agentic Index: **26.4**
- Claw-Eval / Tau3-Banking: no verified public score found

Reasoning / knowledge:

- GPQA Diamond: **83.4%** (Anthropic lab-verified)
- Artificial Analysis Intelligence Index: **37** (Reasoning mode)
- ARC-AGI-2: **13.6%**
- MMLU-Pro / Humanity's Last Exam: no verified public score found

Coding:

- SWE-bench Verified: **77.2%** (200K context standard; 78.2% on 1M context config)
- SWE-bench Multilingual: **67.0%**
- SWE-bench Pro: **43.6%**
- LiveCodeBench: **59.0%** (08-2024 to 02-2025 rolling)
- SciCode: **44.7%**
- Vibe Code Bench: **22.62%**

Long context:

- 1,000,000 tokens context window verified with full agentic trace evaluation.

### Normalized scores (1–100)

- **Tool use: 78/100.** Pioneer in native computer use (61.4% OSWorld-Verified) and agent workflows, backed by strong Claude Code scaffold integrations.
- **Reasoning: 80/100.** High-caliber analytical thinking demonstrated by 83.4% GPQA Diamond and 37 AA Intelligence Index.
- **Context window: 92/100.** Up to 1M token input context window handling deep repository codebases and multi-turn debug histories.
- **Multimodal: 70/100.** High-fidelity visual understanding, UI screenshot parsing, and document layout comprehension with text/code output.
- **Coding: 82/100.** Proven developer performance with 77.2% SWE-bench Verified, 67.0% SWE-bench Multilingual, and robust agentic patch generation.
- **Cost efficiency: 60/100.** Standard frontier pricing of $3.00 in / $15.00 out with $0.30 prompt caching; premium cost profile relative to newer lightweight alternatives.
- **Overall Score: 80/100.** Mean of quality dimensions: Math.round((78 + 80 + 92 + 70 + 82) / 5) = 80.4 → 80. An industry-standard agentic coding model offering premier reliability for complex software workflows.

---

## Signature

- Provided by: **Gemini 3.8 Flash (google/gemini-3.8-flash)** — 2026-09-24 UTC
- Method: Public web research across Anthropic technical reports, evals.report, Artificial Analysis, and ModelBench; scores are normalized 1–100 interpretations, not official vendor scores.
- Future sources: add a new file next to this one, e.g. `GPT_5.md`, using the same headings.
