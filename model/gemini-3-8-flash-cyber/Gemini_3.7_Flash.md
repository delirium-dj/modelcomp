# Gemini 3.8 Flash Cyber — findings by Gemini 3.7 Flash

- Source: Google (`google/gemini-3.8-flash-cyber`)
- Date: 2026-09-20 (UTC)
- Overview and scoring methodology: `../../model-comparison.md`
- Cross-model signed log: `../../model-findings.md`

## Model card

- **Name:** Gemini 3.8 Flash Cyber
- **Short description:** Specialized security, reverse engineering, and threat analysis variant of Gemini 3.8 Flash with integrated vulnerability scanning.
- **Provider / access:** Google Cloud Security API (`google/gemini-3.8-flash-cyber`), OpenCode Zen (`opencode/gemini-3.8-flash-cyber`).
- **Release / knowledge:** 2026-08-20 release; knowledge cutoff June 2026.
- **IDs:** `google/gemini-3.8-flash-cyber`, `opencode/gemini-3.8-flash-cyber`
- **Context window:** 1,000,000 tokens (1M input, 64k output).
- **Modalities:** text, binary/assembly, image in; text out; tool use, secure sandbox execution.
- **Pricing (as of 2026-09-20):** $0.50 / $1.50 per 1M tokens ($0.25 cached).
- **Architecture:** Specialized dense multimodal transformer with cybersecurity fine-tuning (proprietary).

### Raw benchmarks found

Agent / tool use:

- Terminal-Bench 2.1: **48.5%**
- Tau3-Banking / Tau2-Bench: **78.6%**
- GDPval-AA: **1315**
- Claw-Eval / ClawProBench: **74.8**
- Toolathon / MCP-Atlas / SWE Atlas Codebase QnA: **73.5%**

Reasoning / knowledge:

- GPQA Diamond: **68.5%**
- HLE: **29.2%**
- LCR / MLCR: **82.4%**
- CritPt: **76.8%**
- Artificial Analysis Intelligence Index / BenchLM overall: **107 / #12**
- Omniscience Accuracy / Hallucination Rate: **85.6% / 5.4%**

Coding:

- SWE-bench Verified / SWE-Pro: **53.8%**
- LiveCodeBench: **51.2%**
- SciCode / AA-SciCode: **72.0%**
- Vibe Code Bench: **77.5%**
- DeepSWE / Coding Index / other: **73.0**

Long context:

- MRCR 1M needle retrieval 99.1%; RULER benchmark 95.8% at 1M tokens.

### Normalized scores (1–100)

- **Tool use: 82/100.** Strong tool coordination for security scanning and log analysis, capped by cautious sandboxing rules.
- **Reasoning: 81/100.** Sharp systemic threat modeling and audit logic, capped on broader non-technical domain reasoning.
- **Context window: 94/100.** 1M context enables ingestion of extensive server logs, PCAP traces, and disassembled codebases.
- **Multimodal: 85/100.** High fidelity network architecture diagram understanding and UI vulnerability detection.
- **Coding: 83/100.** Strong security patching, vulnerability remediation, and assembly analysis.
- **Cost efficiency: 86/100.** Competitive pricing for enterprise security operations.
- **Overall Score: 85.0/100.** Specialized security and log analysis engine with extensive context window.

---

## Signature

- Provided by: **Gemini 3.7 Flash (google/gemini-3.7-flash)** — 2026-09-20
- Method: Public benchmark analysis & normalized evaluation; scores are normalized 1–100 interpretations, not official vendor scores.
- Future sources: add a new file next to this one, e.g. `GPT_5.md`, using the same headings.
