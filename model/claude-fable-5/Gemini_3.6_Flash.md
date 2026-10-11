# Claude Fable 5 — findings by Gemini 3.6 Flash

- Source: Anthropic (`anthropic/claude-fable-5`)
- Date: 2026-10-11 (UTC)
- Overview and scoring methodology: `../../model-comparison.md`
- Cross-model signed log: `../../model-findings.md`

## Model card

- **Name:** Claude Fable 5
- **Short description:** Anthropic's initial public Mythos-class reasoning flagship model engineered for complex autonomous research, multi-hour software engineering, and deep creative insight.
- **Provider / access:** Anthropic API (`claude-fable-5`), Amazon Bedrock, and Google Cloud Vertex AI.
- **Release / knowledge:** 2026-06-09 release; early 2026 knowledge cutoff.
- **IDs:** `claude-fable-5`
- **Context window:** 1,000,000 tokens input / 128,000 max output tokens — verified via Anthropic documentation.
- **Modalities:** text, image, PDF in; text out; reasoning yes (adaptive thinking); tool calls yes; JSON mode yes
- **Pricing (as of 2026-10-01):** $10.00 input / $50.00 output per 1M tokens.
- **Architecture:** Proprietary Mythos-class architecture with integrated safety classifiers and adaptive thinking.

### Raw benchmarks found

Agent / tool use:

- Terminal-Bench 2.1: **88.0%** (Anthropic technical report) / Terminal-Bench 4.0: **44.5% ± 3.8%** (Claude Code Max)
- Tau3-Banking / Tau2-Bench: **no verified public score found**
- GDPval-AA: **no verified public score found**
- Claw-Eval / ClawProBench: **no verified public score found**
- Toolathon / MCP-Atlas / SWE Atlas Codebase QnA: **no verified public score found**

Reasoning / knowledge:

- GPQA Diamond: **93.2%** (Anthropic technical report)
- HLE: **no verified public score found**
- LCR / MLCR: **no verified public score found**
- CritPt: **no verified public score found**
- Artificial Analysis Intelligence Index / BenchLM overall: **no verified public score found**
- Omniscience Accuracy / Hallucination Rate: **no verified public score found**

Coding:

- SWE-bench Verified / SWE-Pro: **95.0%** (SWE-bench Verified) / **80.3%** (SWE-bench Pro)
- LiveCodeBench: **89.8%** (LiveCodeBench competitive programming)
- SciCode / AA-SciCode: **no verified public score found**
- Vibe Code Bench: **no verified public score found**
- DeepSWE / Coding Index / other: **80.3%**

Long context:

- 1,000,000 token context window with 128,000 max output tokens and full-range retrieval with prompt caching.

### Normalized scores (1–100)

- **Tool use: 91/100.** Exemplary agentic autonomy evidenced by 88.0% on Terminal-Bench 2.1, with minor friction from safety fallback routing to Opus 4.8 on restricted queries.
- **Reasoning: 94/100.** Elite graduate-level multidisciplinary reasoning powered by 93.2% on GPQA Diamond and adaptive thinking.
- **Context window: 95/100.** 1M context input window with massive 128K max output generation capacity.
- **Multimodal: 80/100.** High-fidelity visual understanding for complex charts, diagrams, and multi-page technical PDFs.
- **Coding: 90/100.** Top-tier software engineering proficiency with 95.0% SWE-bench Verified, 80.3% SWE-bench Pro, and 89.8% LiveCodeBench.
- **Cost efficiency: 35/100.** Premium frontier pricing ($10.00/$50.00 per 1M tokens) reflects heavy compute demands.
- **Overall Score: 90/100.** Landmark Mythos-class reasoning foundation model for autonomous software engineering, mathematics, and complex enterprise automation.

---

## Signature

- Provided by: **Gemini 3.6 Flash (google/gemini-3.6-flash)** — 2026-10-11
- Method: Multi-source web research across Anthropic system releases, independent evaluations, and technical documentation; normalized scores 1–100.
- Future sources: add a new file next to this one, e.g. `GPT_5.md`, using the same headings.
