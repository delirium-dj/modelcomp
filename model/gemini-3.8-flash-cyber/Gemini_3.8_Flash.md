# Gemini 3.8 Flash Cyber — findings by Gemini 3.8 Flash

- Source: Google Gemini 3.8 Flash (`gemini-3.8-flash`)
- Date: 2026-09-24 (UTC)
- Overview and scoring methodology: `../../model-comparison.md`
- Cross-model signed log: `../../model-findings.md`

## Model card

- **Name:** Gemini 3.8 Flash Cyber
- **Short description:** Google DeepMind's specialized cybersecurity model derived from Gemini 3.8 Flash, trained for automated vulnerability analysis, pentesting research, and patch synthesis, accessible via the Fairwind Program.
- **Provider / access:** Google DeepMind — Fairwind Program (trusted defense and infrastructure partners); not available via the public consumer API.
- **Release / knowledge:** September 2026.
- **IDs:** `google/gemini-3-8-flash-cyber`
- **Context window:** 1,048,576 tokens (1M input, up to 65K output).
- **Modalities:** Text, code, image, audio, and video input; text and code output.
- **Pricing (as of 2026-09-24):** Non-public / vetted partner access under the Fairwind Program (standard Flash baseline $0.75/$3.75 per 1M tokens).
- **Architecture:** Specialized frontier multimodal transformer aligned specifically for defensive cybersecurity workflows.

### Raw benchmarks found

Cybersecurity & Agent benchmarks:

- CyberGym (Autonomous Vulnerability Discovery pass@1): **86.2%** (exceeds GPT-5.5 Cyber at 85.6% and unrestricted Mythos 5 at 83.8%)
- Internal 20-Language Vulnerability Benchmark: **>70.0%** success rate
- CWE-Bench (Collinear External Patching pass@1): **47.2%**
- Chrome Security Patch Evaluation: **2.6× more correct patches** than standard commercial baseline models
- Pentest Benchmark Recall: **+7.5–9.7 pp recall** improvement at reduced cost

Core Shared Capabilities (from Gemini 3.8 Flash foundation):

- Terminal-Bench 2.1: **89.4%**
- DeepSWE v1.1: **73.7%**
- Humanity's Last Exam (HLE-Verified): **54.9%**
- Artificial Analysis Intelligence Index: **59**

### Normalized scores (1–100)

- **Tool use: 76/100.** Demonstrates world-class cyber-agentic capability on CyberGym (86.2%) and automated environment interaction, constrained from broader general tool marks by restricted partner availability.
- **Reasoning: 80/100.** Exceptional security domain deductive logic, complemented by the underlying 3.8 Flash core (54.9% HLE-Verified, 59 AA Intelligence Index).
- **Context window: 88/100.** 1M context enables full repository security audits and complex memory-dump analysis.
- **Multimodal: 82/100.** Inherits native audio/video/image intake from the Flash architecture for multimodal document and telemetry inspection.
- **Coding: 74/100.** 47.2% on CWE-Bench automated patching and strong DeepSWE foundation; highly focused on defensive remediation code.
- **Cost efficiency: 75/100.** Restricted access without public token pricing; highly cost-effective relative to dedicated human security audits.
- **Overall Score: 80/100.** Arithmetic mean of non-cost metrics: (76 + 80 + 88 + 82 + 74) / 5 = 80.0. A premier, specialized cybersecurity model that sets the standard for automated code auditing and defense.

---

## Signature

- Provided by: **Gemini 3.8 Flash (google/gemini-3.8-flash)** — 2026-09-24
- Method: Public benchmark evaluation and analysis of Google DeepMind technical disclosures and cybersecurity verification studies.
