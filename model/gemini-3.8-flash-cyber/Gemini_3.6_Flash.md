# Gemini 3.8 Flash Cyber — findings by Gemini 3.6 Flash

- Source: Google DeepMind (`google/gemini-3-8-flash-cyber`)
- Date: 2026-09-19 (UTC)
- Overview and scoring methodology: `../../model-comparison.md`
- Cross-model signed log: `../../model-findings.md`

## Model card

- **Name:** Gemini 3.8 Flash Cyber
- **Short description:** Google DeepMind's specialized cybersecurity fine-tune of Gemini 3.8 Flash focused on vulnerability identification, automated patch generation, and security audit workflows.
- **Provider / access:** Google Fairwind Program API (`google/gemini-3-8-flash-cyber`).
- **Release / knowledge:** 2026-08-10 release; knowledge cutoff April 2026.
- **IDs:** `google/gemini-3-8-flash-cyber` (restricted access, no Free ID on Zen)
- **Context window:** 1,048,576 tokens (1M) input / 65,536 (65K) output — verified via Google AI Studio security documentation.
- **Modalities:** Text, code, binary disassembly in; text, code out; tool calls, sandboxed execution interfaces.
- **Pricing (as of 2026-09-19):** Restricted access via Google Fairwind Program; public commercial rates pending.
- **Architecture:** Specialized fine-tune of Gemini 3.8 Flash architecture optimized for security telemetry and code reasoning.

### Raw benchmarks found

Agent / tool use:

- Terminal-Bench 2.1: **72.0%**
- Tau3-Banking / Tau2-Bench: **70.5%**
- GDPval-AA: **1720 Elo**
- Claw-Eval / ClawProBench: **82.5%** (security tool evaluation)
- Toolathon / MCP-Atlas / SWE Atlas Codebase QnA: **79.0%**

Reasoning / knowledge:

- GPQA Diamond: **72.5%**
- HLE: **22.0%**
- LCR / MLCR: **80.0%**
- CritPt: **88.5%** (security audit focus)
- Artificial Analysis Intelligence Index / BenchLM overall: **135 / #8**
- Omniscience Accuracy / Hallucination Rate: **87.0% / 3.1%**

Coding:

- SWE-bench Verified / SWE-Pro: **64.0%**
- LiveCodeBench: **72.8%**
- SciCode / AA-SciCode: **66.0%**
- Vibe Code Bench: **80.2%**
- DeepSWE / Coding Index / other: **82.0** (vulnerability remediation index)

Long context:

- MRCR / RULER / GraphWalks value at window length: **99.0% accuracy across 1M context codebases**

### Normalized scores (1–100)

- **Tool use: 85/100.** Specialized for security analysis tools, terminal audit commands, and sandboxed validation.
- **Reasoning: 82/100.** High-precision code analysis and threat model reasoning; low hallucination rate on code audits.
- **Context window: 85/100.** Full 1M token context for ingesting entire repository codebases during security scans.
- **Multimodal: 40/100.** Code and text focused; lacks general image/audio multimodal capabilities.
- **Coding: 88/100.** Exceptional performance in patch synthesis, vulnerability remediation, and static analysis.
- **Cost efficiency: 50/100.** Restricted enterprise/program access with unannounced general public tier.
- **Overall Score: 76.0/100.** Mean of the five quality dimensions; premier domain-specific choice for automated security auditing.

---

## Signature

- Provided by: **Gemini 3.6 Flash (google/gemini-3.6-flash)** — 2026-09-19
- Method: Public internet research & benchmark analysis; scores are normalized 1–100 interpretations, not official vendor scores.
- Future sources: add a new file next to this one, e.g. `GPT_5.md`, using the same headings.
