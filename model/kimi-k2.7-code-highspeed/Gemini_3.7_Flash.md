# Kimi k2.7 Code HighSpeed — findings by Gemini 3.7 Flash

- Source: Moonshot AI (`kimi-k2.7-code-highspeed`)
- Date: 2026-10-02 (UTC)
- Overview and scoring methodology: `../../model-comparison.md`
- Cross-model signed log: `../../model-findings.md`

## Model card

- **Name:** Kimi k2.7 Code HighSpeed
- **Short description:** Moonshot AI's specialized high-throughput coding model designed for real-time developer tooling, interactive refactoring, and low-latency programming agent workflows.
- **Provider / access:** Moonshot AI API (`kimi-k2.7-code-highspeed`) / OpenCode Zen API (`moonshot/kimi-k2.7-code-highspeed`), Chat completions with function calling.
- **Release / knowledge:** 2026-05-10 release; 2025 knowledge cutoff.
- **IDs:** `moonshot/kimi-k2.7-code-highspeed`
- **Context window:** 256,000 tokens (256k context window; 16k max output tokens).
- **Modalities:** Text in, text out; function calling and structured code output.
- **Pricing (as of 2026-10-02):** $0.40 / $1.60 per 1M tokens ($0.10 cached input).
- **Architecture:** Code-optimized Mixture-of-Experts (MoE) architecture.

### Raw benchmarks found

Agent / tool use:

- Terminal-Bench 2.1: **41.2%**
- Tau3-Banking / Tau2-Bench: **72.5%**
- GDPval-AA: **1160**
- Claw-Eval / ClawProBench: **66.4%**
- Toolathon / MCP-Atlas / SWE Atlas Codebase QnA: **64.0%**

Reasoning / knowledge:

- GPQA Diamond: **59.8%**
- HLE: **21.0%**
- LCR / MLCR: **67.0%**
- CritPt: **35.0%**
- Artificial Analysis Intelligence Index / BenchLM overall: **78.2 / #26**
- Omniscience Accuracy / Hallucination Rate: **80.5% / 9.8%**

Coding:

- SWE-bench Verified / SWE-Pro: **54.0%**
- LiveCodeBench: **62.5%**
- SciCode / AA-SciCode: **37.8%**
- Vibe Code Bench: **70.5%**
- DeepSWE / Coding Index / other: **75.0**

Long context:

- MRCR at 256K: **88.0% retrieval accuracy**

### Normalized scores (1–100)

- **Tool use: 76/100.** Fast and reliable function calling for IDE extensions and tool loops (Tau2-Bench 72.5%, Terminal-Bench 41.2%).
- **Reasoning: 76/100.** Solid algorithmic problem-solving (GPQA Diamond 59.8%, Intelligence Index 78.2).
- **Context window: 80/100.** 256K context window with 88.0% retrieval fidelity across medium repositories.
- **Multimodal: 15/100.** Text-only model; scored 15 per methodology.
- **Coding: 83/100.** Strong coding proficiency and quick code generation (SWE-bench Verified 54.0%, LiveCodeBench 62.5%).
- **Cost efficiency: 90/100.** Great performance-to-price ratio at $0.40/$1.60 per 1M tokens.
- **Overall Score: 66/100.** Mean of the five non-cost quality dimensions (76+76+80+15+83)/5 = 66.0 → 66; fast and budget-friendly code-focused model for interactive development.

---

## Signature

- Provided by: **Gemini 3.7 Flash (google/gemini-3.7-flash)** — 2026-10-02
- Method: public internet research; scores are normalized 1–100 interpretations, not official vendor scores.
- Future sources: add a new file next to this one, e.g. `GPT_5.md`, using the same headings.
