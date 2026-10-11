# Gemini 3.1 Pro — findings by Gemini 3.6 Flash

- Source: Google DeepMind (`google/gemini-3.1-pro`)
- Date: 2026-10-11 (UTC)
- Overview and scoring methodology: `../../model-comparison.md`
- Cross-model signed log: `../../model-findings.md`

## Model card

- **Name:** Gemini 3.1 Pro
- **Short description:** Google DeepMind's flagship 3.1-generation reasoning model featuring ARC-AGI-2 abstract problem solving, Deep Think inference-time verification, 1M context, and native multimodal understanding.
- **Provider / access:** Google AI Studio, Vertex AI (`gemini-3.1-pro`), and OpenCode Zen (`opencode/gemini-3.1-pro`).
- **Release / knowledge:** 2026-02-19 release; late 2025 knowledge cutoff.
- **IDs:** `google/gemini-3.1-pro`, `opencode/gemini-3.1-pro`
- **Context window:** 1,000,000 tokens input / 65,536 max output tokens — verified via Google DeepMind documentation.
- **Modalities:** text, image, audio, video, PDF in; text out; reasoning yes (Deep Think reasoning); tool calls yes; JSON mode yes
- **Pricing (as of 2026-10-01):** $2.00 input / $12.00 output per 1M tokens (standard tier).
- **Architecture:** Proprietary Sparse Mixture of Experts (MoE) multimodal transformer.

### Raw benchmarks found

Agent / tool use:

- Terminal-Bench 2.0: **68.5%** (DeepMind release benchmark card)
- Tau3-Banking / Tau2-Bench: **99.3%** (Tau2-Bench Telecom) / **90.8%** (Retail)
- GDPval-AA: **1317 Elo**
- Claw-Eval / ClawProBench: **no verified public score found**
- Toolathon / MCP-Atlas / SWE Atlas Codebase QnA: **69.2%** (MCP Atlas)

Reasoning / knowledge:

- GPQA Diamond: **94.3%** (Google technical report)
- HLE: **44.4%** (text-only) / **51.4%** (with tools)
- LCR / MLCR: **no verified public score found**
- CritPt: **no verified public score found**
- Artificial Analysis Intelligence Index / BenchLM overall: **64 / #8** (launch peak)
- Omniscience Accuracy / Hallucination Rate: **no verified public score found**

Coding:

- SWE-bench Verified / SWE-Pro: **80.6%** (SWE-bench Verified)
- LiveCodeBench: **2887 Elo** (LiveCodeBench Pro)
- SciCode / AA-SciCode: **59.0%**
- Vibe Code Bench: **no verified public score found**
- DeepSWE / Coding Index / other: **77.1%** (ARC-AGI-2 benchmark)

Long context:

- 1,000,000 token context window with >99% needle-in-a-haystack retrieval and 65,536 max output tokens.

### Normalized scores (1–100)

- **Tool use: 88/100.** SOTA multi-turn workflow execution on Tau2-Bench (99.3% Telecom) and solid CLI execution (68.5% Terminal-Bench 2.0).
- **Reasoning: 94/100.** Exceptional abstract reasoning and logical inference led by 77.1% on ARC-AGI-2 and 94.3% on GPQA Diamond.
- **Context window: 96/100.** 1M context input with 65.5K max output tokens and full-window context fidelity.
- **Multimodal: 90/100.** Outstanding native handling of audio, video, vision, and technical PDFs without external transcription.
- **Coding: 88/100.** 80.6% on SWE-bench Verified and 2887 Elo on LiveCodeBench, with minor deductions for real-world sensitivity to input structuring during unstructured repo refactoring.
- **Cost efficiency: 65/100.** $2.00/$12.00 per 1M tokens for enterprise-grade reasoning.
- **Overall Score: 91/100.** Major milestone in abstract reasoning and multimodal agent workflows for complex enterprise architectures.

---

## Signature

- Provided by: **Gemini 3.6 Flash (google/gemini-3.6-flash)** — 2026-10-11
- Method: Multi-source web research across Google DeepMind releases, developer evaluations, and benchmark leaderboards; normalized scores 1–100.
- Future sources: add a new file next to this one, e.g. `GPT_5.md`, using the same headings.
