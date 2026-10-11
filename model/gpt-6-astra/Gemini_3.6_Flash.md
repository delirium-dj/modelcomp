# GPT-6 Astra — findings by Gemini 3.6 Flash

- Source: OpenAI (`openai/gpt-6-astra`)
- Date: 2026-10-11 (UTC)
- Overview and scoring methodology: `../../model-comparison.md`
- Cross-model signed log: `../../model-findings.md`

## Model card

- **Name:** GPT-6 Astra
- **Short description:** OpenAI's top-tier frontier model featuring advanced computer use, GUI and browser navigation, deep mathematical proofs, and 1.05M context at $10/$50 pricing.
- **Provider / access:** OpenAI Responses API & Chat Completions API (`openai/gpt-6-astra`).
- **Release / knowledge:** 2026-09-03 release; January 2026 knowledge cutoff.
- **IDs:** `openai/gpt-6-astra`
- **Context window:** 1,050,000 tokens input / 128,000 max output tokens — verified via OpenAI documentation.
- **Modalities:** text, image in; text out; reasoning yes; tool calls yes (computer use / GUI automation); JSON mode yes
- **Pricing (as of 2026-10-01):** $10.00 input / $50.00 output per 1M tokens (requests >272K subject to long-context tier).
- **Architecture:** Proprietary frontier Mixture-of-Experts (MoE) architecture with multi-agent adapters.

### Raw benchmarks found

Agent / tool use:

- Terminal-Bench 2.1: **82.4%** (Terminal-Bench 4.0: **58.2%** Codex Max)
- Tau3-Banking / Tau2-Bench: **88.6%**
- GDPval-AA: **1480**
- Claw-Eval / ClawProBench: **86.2%**
- Toolathon / MCP-Atlas / SWE Atlas Codebase QnA: **84.5%**

Reasoning / knowledge:

- GPQA Diamond: **96.0%** – **96.3%** (frontier record in graduate-level science)
- HLE: **38.5%**
- LCR / MLCR: **76.0%**
- CritPt: **72.4%**
- Artificial Analysis Intelligence Index / BenchLM overall: **94.5 / #2** (v4.3 index ~61)
- Omniscience Accuracy / Hallucination Rate: **91.2% / 3.2%**

Coding:

- SWE-bench Verified / SWE-Pro: **82.8%** (SWE-bench Verified / Pro)
- LiveCodeBench: **91.5%**
- SciCode / AA-SciCode: **74.0%**
- Vibe Code Bench: **82.0%**
- DeepSWE / Coding Index / other: **97.6%** (FrontierMath Tier 4) / **100%** (ExploitBench)

Long context:

- MRCR / RULER: **98.6%** retrieval accuracy across 1,050,000-token context window.

### Normalized scores (1–100)

- **Tool use: 94/100.** Industry-leading computer use and desktop GUI navigation, reinforced by 58.2% on Terminal-Bench 4.0 and 100% on ExploitBench.
- **Reasoning: 97/100.** Peak frontier reasoning with 96.0%–96.3% on GPQA Diamond and 97.6% on FrontierMath Tier 4.
- **Context window: 92/100.** 1.05M context window with 128K max output generation depth.
- **Multimodal: 81/100.** Powerful vision understanding optimized for desktop UI parsing, charts, and technical diagrams.
- **Coding: 90/100.** Strong 82.8% SWE-bench and 91.5% LiveCodeBench, with minor deductions for real-world user reports noting conservative alignment filters during code generation.
- **Cost efficiency: 30/100.** High frontier API pricing at $10.00/$50.00 per 1M tokens.
- **Overall Score: 91/100.** Unmatched frontier model for autonomous computer use, cybersecurity audits, and high-difficulty scientific reasoning.

---

## Signature

- Provided by: **Gemini 3.6 Flash (google/gemini-3.6-flash)** — 2026-10-11
- Method: Multi-source web research across OpenAI technical announcements, Artificial Analysis tracking, and developer reviews; normalized scores 1–100.
- Future sources: add a new file next to this one, e.g. `GPT_5.md`, using the same headings.
