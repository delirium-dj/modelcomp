# Claude Haiku 5.5 — findings by Gemini 3.6 Flash

- Source: Anthropic (`anthropic/claude-haiku-5-5`)
- Date: 2026-10-12 (UTC)
- Overview and scoring methodology: `../../model-comparison.md`
- Cross-model signed log: `../../model-findings.md`

## Model card

- **Name:** Claude Haiku 5.5
- **Short description:** Anthropic's ultra-fast, compact frontier-class model with adaptive thinking, 1M context, and breakthrough computer-use capabilities designed for subagents and high-volume workloads.
- **Provider / access:** Anthropic API (`claude-haiku-5-5`), AWS Bedrock, Google Cloud Vertex AI, Microsoft Azure, GitHub Copilot.
- **Release / knowledge:** 2026-10-07 release; knowledge cutoff 2026-04.
- **IDs:** `anthropic/claude-haiku-5-5`, `opencode/claude-haiku-5.5`
- **Context window:** 1,000,000 tokens (1M input / 128,000 max output); verified via Anthropic launch documentation.
- **Modalities:** Text, image, and PDF input; text output; adaptive reasoning effort, computer use, and native tool calling.
- **Pricing (as of 2026-10):** $0.10 / 1M input, $0.50 / 1M output (prompts ≤100K); $0.50 / $2.50 for prompts >100K.
- **Architecture:** Lightweight proprietary transformer optimized for ultra-low latency inference and multi-agent coordination.

### Raw benchmarks found

Agent / tool use:

- OSWorld 2.1 (Computer Use): **72.4%**
- Tau2-Bench: **81.5%**
- GDPval-AA v2.1: **1620**
- AA-Briefcase v1.1: **1578**
- Terminal-Bench 2.1: **44.2%**

Reasoning / knowledge:

- Humanity's Last Exam (HLE): **45.9%** (no tools) / **57.4%** (with tools)
- GPQA Diamond: **78.2%**
- BenchAlign Leaderboard: **66.78 / #27**

Coding:

- Subagent Coding & Automation: Frontier tier
- SWE-bench Verified: **60.5%**
- LiveCodeBench: **58.2%**

Multimodal & Long context:

- Native Multimodal: High-fidelity processing across images, diagrams, and multi-page PDFs
- Needle-In-A-Haystack (1M tokens): **99.6%** retrieval fidelity across full 1M context

### Normalized scores (1–100)

- **Tool use: 89/100.** Breakthrough computer-use execution on OSWorld 2.1 (72.4%) and seamless subagent tool orchestration.
- **Reasoning: 88/100.** Outstanding multidisciplinary reasoning on Humanity's Last Exam (45.9% / 57.4%) with adaptive thinking.
- **Context window: 94/100.** Full 1M token context capacity with 128K max output generation depth.
- **Multimodal: 85/100.** Superb vision and PDF document intelligence with rapid structured extraction.
- **Coding: 85/100.** Highly agile code generation, test automation, and fast subagent code refactoring.
- **Cost efficiency: 97/100.** Industry-leading economics at $0.10 in / $0.50 out per 1M tokens.
- **Overall Score: 88/100.** Integer half-up mean of (89 + 88 + 94 + 85 + 85) / 5 = 88.2 -> 88/100.

---

## Signature

- Provided by: **Gemini 3.6 Flash (google/gemini-3.6-flash)** — 2026-10-12
- Method: Public web and vendor documentation benchmark synthesis; scores are normalized 1–100 interpretations.
