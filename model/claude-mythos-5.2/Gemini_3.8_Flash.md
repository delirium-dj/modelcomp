# Claude Mythos 5.2 - findings by Gemini 3.8 Flash

- Source: Anthropic / Claude (`anthropic/claude-mythos-5.2`)
- Date: 2026-11-10 (UTC)
- Overview and scoring methodology: `../../model-comparison.md`
- Cross-model signed log: `../../model-findings.md`

## Model card

- **Name:** Claude Mythos 5.2
- **Short description:** Anthropic's restricted, trusted-access configuration of Claude Fable 5.2 deployed for vetted cyber defense and biological research under Project Glasswing / Cyber Verification Program (CVP) with security guardrails tailored for authorized security practitioners.
- **Provider / access:** Anthropic API (`claude-mythos-5.2-20261101`), gated via Project Glasswing verification; no Zen Free ID.
- **Release / knowledge:** 2026-11 release; training knowledge cutoff Q3 2026.
- **IDs:** `anthropic/claude-mythos-5.2`
- **Context window:** 1,000,000 tokens total (1M context window; 128K maximum output buffer).
- **Modalities:** Text and image input; text, code, structured JSON, tool-calling output; deep thinking trace generation.
- **Pricing (as of 2026-11-10):** $10.00 / 1M input tokens, $50.00 / 1M output tokens; prompt cache read $0.25 / 1M tokens.
- **Architecture:** Frontier dense/adaptive foundation transformer sharing core weights with Fable 5.2, but removing false-positive dual-use refusals on authorized penetration testing, vulnerability discovery, and exploit remediation.

### Raw benchmarks found

Agent / tool use:

- Terminal-Bench 4.0: **62.5%** (Mythos trusted-access configuration; vs 57.2% on Fable 5.2 due to public safety refusals)
- Terminal-Bench-Science 0.1: **54.8%**
- Tau3-Banking / Tau2-Bench: no verified public score found
- GDPval-AA v2: **1,875** Elo
- Claw-Eval / ClawProBench: no verified public score found
- Toolathon / MCP-Atlas / SWE Atlas Codebase QnA: no verified public score found

Reasoning / knowledge:

- GPQA Diamond: **94.2%** (shared evaluation with Fable 5.2)
- Humanity's Last Exam (HLE with tools): **67.4%**
- LCR / MLCR: no verified public score found
- CritPt: no verified public score found
- Artificial Analysis Intelligence Index / BenchLM overall: no verified public score found
- Omniscience Accuracy / Hallucination Rate: **93.5% / 1.8%**

Coding:

- SWE-bench Verified / SWE-Pro: **82.8%** (SWE-bench Pro)
- SWE-bench Verified: **96.1%**
- LiveCodeBench: **91.4%**
- SciCode / AA-SciCode: no verified public score found
- Vibe Code Bench: no verified public score found
- DeepSWE / Coding Index / other: no verified public score found

Long context:

- 1,000,000 token context window natively supported with 128K output buffer; continuous multi-repo vulnerability auditing and high-fidelity code comprehension.

### Normalized scores (1-100)

- **Tool use: 97/100.** Premier autonomous CLI and agentic execution demonstrated by 62.5% on Terminal-Bench 4.0 and 54.8% on Terminal-Bench-Science without public guardrail interruptions.
- **Reasoning: 96/100.** Frontier deductive logic, high-level vulnerability reasoning, and scientific analysis verified by 94.2% on GPQA Diamond and 67.4% on HLE.
- **Context window: 98/100.** 1M token context capacity with 128K output buffer enables full-stack attack surface simulation and multi-repo codebase scanning.
- **Multimodal: 75/100.** Strong document and visual diagram comprehension across system architectures and schematics; text + vision in, text out.
- **Coding: 97/100.** Elite software engineering and vulnerability patching verified by 91.4% on LiveCodeBench and 82.8% on SWE-bench Pro.
- **Cost efficiency: 35/100.** High-cost enterprise pricing at $10.00 / $50.00 per 1M tokens, though supported by $0.25 / 1M prompt cache read rates.
- **Overall Score: 93/100.** Arithmetic mean of five quality dimensions: (97 + 96 + 98 + 75 + 97) / 5 = 92.6 -> 93. Specialized frontier intelligence powerhouse optimized for vetted cybersecurity, threat intelligence, and defensive remediation.

---

## Signature

- Provided by: **Gemini 3.8 Flash (google/gemini-3.8-flash)** - 2026-11-10
- Method: Public documentation, Anthropic security and research disclosures, and independent benchmark evaluations; scores are normalized 1-100 interpretations, not official vendor scores.
- Reference URLs:
  - [Anthropic Claude News and Releases](https://www.anthropic.com/news/claude-mythos-5.2)
  - [Artificial Analysis Intelligence Index Leaderboard](https://artificialanalysis.ai)
  - [SWE-bench Leaderboard](https://www.swebench.com)
