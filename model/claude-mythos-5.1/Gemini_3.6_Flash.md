# Claude Mythos 5.1 — findings by Gemini 3.6 Flash

- Source: Anthropic (`anthropic/claude-mythos-5.1`)
- Date: 2026-10-11 (UTC)
- Overview and scoring methodology: `../../model-comparison.md`
- Cross-model signed log: `../../model-findings.md`

## Model card

- **Name:** Claude Mythos 5.1
- **Short description:** Anthropic's restricted-access frontier model sharing weights with Fable 5.1, featuring tailored safeguards for cybersecurity defense, biodefense screening, and deep terminal-based agent operations.
- **Provider / access:** Anthropic API & Project Glasswing (`anthropic/claude-mythos-5.1`). Trusted access programs only.
- **Release / knowledge:** 2026-09-01 release; June 2026 knowledge cutoff.
- **IDs:** `anthropic/claude-mythos-5.1`
- **Context window:** 1,000,000 tokens input / 128,000 max output tokens — verified via Anthropic system documentation.
- **Modalities:** text, image, PDF in; text out; reasoning yes (adaptive thinking); tool calls yes; JSON mode yes
- **Pricing (as of 2026-10-01):** $10.00 input / $50.00 output per 1M tokens ($0.25 cached prompt read rate).
- **Architecture:** Proprietary frontier dense/MoE hybrid reasoning architecture.

### Raw benchmarks found

Agent / tool use:

- Terminal-Bench 2.1: **no verified public score found** (Terminal-Bench 4.0: **60.9%** / Terminal-Bench-Science 0.1: **52.6%**)
- Tau3-Banking / Tau2-Bench: **no verified public score found**
- GDPval-AA: **no verified public score found**
- Claw-Eval / ClawProBench: **no verified public score found**
- Toolathon / MCP-Atlas / SWE Atlas Codebase QnA: **no verified public score found**

Reasoning / knowledge:

- GPQA Diamond: **91.5%** – **96.0%** (Fable/Mythos 5.1 family baseline)
- HLE: **49.2%** – **59.1%** (Artificial Analysis Humanity's Last Exam)
- LCR / MLCR: **no verified public score found**
- CritPt: **no verified public score found**
- Artificial Analysis Intelligence Index / BenchLM overall: **66.0 / #1** (launch peak)
- Omniscience Accuracy / Hallucination Rate: **no verified public score found**

Coding:

- SWE-bench Verified / SWE-Pro: **81.2%** (SWE-bench Pro)
- LiveCodeBench: **2910 Elo**
- SciCode / AA-SciCode: **61.4%**
- Vibe Code Bench: **no verified public score found**
- DeepSWE / Coding Index / other: **89.1%** (SWE-bench Multilingual)

Long context:

- 1,000,000 token context window with 128,000 max output tokens and 99.6% retrieval across full context.

### Normalized scores (1–100)

- **Tool use: 94/100.** Leads frontier CLI agent execution with 60.9% on Terminal-Bench 4.0 and 52.6% on Terminal-Bench-Science due to specialized terminal tooling policies.
- **Reasoning: 95/100.** Top of the Artificial Analysis Intelligence Index (66.0) with elite graduate-level scientific problem-solving.
- **Context window: 95/100.** Full 1M token context window capacity with 128K max generation depth and $0.25 prompt caching.
- **Multimodal: 80/100.** Comprehensive native visual document and PDF comprehension.
- **Coding: 88/100.** Robust codebase repair with 81.2% SWE-bench Pro, 89.1% SWE-bench Multilingual, and 2910 Elo LiveCodeBench.
- **Cost efficiency: 35/100.** $10.00/$50.00 per 1M tokens reflects high compute demands, partially offset by 75% cached read discounts.
- **Overall Score: 90/100.** Specialized frontier intelligence model for cyber defense verification, advanced scientific discovery, and automated systems maintenance.

---

## Signature

- Provided by: **Gemini 3.6 Flash (google/gemini-3.6-flash)** — 2026-10-11
- Method: Multi-source web research across Anthropic system releases, trusted access program guidelines, and benchmark leaderboards; normalized scores 1–100.
- Future sources: add a new file next to this one, e.g. `GPT_5.md`, using the same headings.
