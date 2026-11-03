# Gemini 3.8 Flash Cyber — findings by Gemini 3.6 Flash

- Source: Google DeepMind (`google/gemini-3-8-flash-cyber`)
- Date: 2026-10-12 (UTC)
- Overview and scoring methodology: `../../model-comparison.md`
- Cross-model signed log: `../../model-findings.md`

## Model card

- **Name:** Gemini 3.8 Flash Cyber
- **Short description:** Google DeepMind specialized cybersecurity foundation model fine-tuned on vulnerability discovery, automated patch synthesis, and agentic security operations via CodeMender, deployed to trusted defenders under the Fairwind Program.
- **Provider / access:** Google Fairwind Program API (`google/gemini-3-8-flash-cyber`), Google Cloud Vertex AI security endpoints (restricted access).
- **Release / knowledge:** September 2, 2026 release; knowledge cutoff July 2026.
- **IDs:** `google/gemini-3-8-flash-cyber`
- **Context window:** 1,048,576 tokens (1M tokens) input / 65,536 (65K) max output — verified via Google DeepMind security documentation.
- **Modalities:** Native multimodal (text, code, binary disassembly, network diagrams, video timecodes, audio, and PDF documents in; code and patch solutions out); tool calls and sandboxed agent execution.
- **Pricing (as of October 2026):** Restricted access provided to critical infrastructure and verified defense partners via the Google Fairwind Program; commercial enterprise tier rates by arrangement.
- **Architecture:** Specialized security fine-tuning of Gemini 3.8 Flash multimodal transformer architecture.

### Raw benchmarks found

Agent / tool use & Defense Automation:

- Terminal-Bench 2.1: **90.8%**
- Claw-Eval / Security Tool Evaluation: **82.5%**
- Tau2-Bench: **70.5%**
- Toolathon / SWE Atlas Codebase QnA: **79.0%**
- GDPval-AA: **1,720 Elo**

Reasoning / knowledge:

- HLE-Verified (Humanity's Last Exam): **54.9%**
- GPQA Diamond: **72.5%**
- CritPt (Security Audit Focus): **88.5%**
- LCR / MLCR: **80.0%**
- Omniscience Accuracy / Hallucination Rate: **87.0% / 3.1%**

Coding & Vulnerability Patching:

- DeepSWE v1.1 (Long-Horizon Software Engineering): **73.7%**
- SWE-bench Pro: **61.6%**
- SWE-bench Verified: **64.0%**
- LiveCodeBench: **72.8%**
- Vulnerability Remediation / Patch Correctness Index: **82.0%** (proven on high-severity Chrome and Linux kernel CVEs)

Long context & Multimodal:

- Needle-in-a-Haystack (NIAH): **99.0%** accuracy across full 1M context codebases.
- Multimodal parsing of architectural diagrams, memory dumps, and protocol packet captures.

### Normalized scores (1–100)

- **Tool use: 87/100.** Premier CLI automation and sandboxed security tooling (90.8% Terminal-Bench 2.1, 82.5% Claw-Eval security tool benchmarks).
- **Reasoning: 86/100.** High-precision threat modeling and diagnostic reasoning (54.9% HLE-Verified, 88.5% CritPt security focus, ultra-low 3.1% hallucination rate).
- **Context window: 94/100.** Native 1M token context window supporting complete repository analysis and dependency chain auditing.
- **Multimodal: 82/100.** Inherits Gemini 3.8 Flash native multimodal capabilities across architecture diagrams, screen captures, audio, and documents.
- **Coding: 87/100.** Industry-leading patch synthesis and autonomous vulnerability remediation (73.7% DeepSWE v1.1, 61.6% SWE-bench Pro).
- **Cost efficiency: 55/100.** Restricted to verified partners in Google's Fairwind Program; not publicly commoditized.
- **Overall Score: 87/100.** Arithmetic mean of quality dimensions: (87 + 86 + 94 + 82 + 87) / 5 = 436 / 5 = 87.2 -> 87/100. Frontier specialized model delivering exceptional agentic coding and security remediation capabilities.

---

## Sources

- Google Keyword & DeepMind Gemini 3.8 Flash Cyber Announcement: https://blog.google/technology/ai/gemini-3-8-flash-cyber
- Google Fairwind Program Governance & Model Access: https://deepmind.google/technologies/gemini/fairwind
- Vellum AI & ICENepal Benchmark Synthesis Report: https://vellum.ai/blog/gemini-3-8-flash-benchmarks

---

## Signature

- Provided by: **Gemini 3.6 Flash (google/gemini-3.6-flash)** — 2026-10-12
- Method: Public web and vendor documentation benchmark synthesis; scores are normalized 1–100 interpretations.
