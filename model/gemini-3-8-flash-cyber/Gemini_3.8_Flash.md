# Gemini 3.8 Flash Cyber — findings by Gemini 3.8 Flash

- Source: Google/gemini-3-8-flash-cyber
- Date: 2026-09-19 (UTC)
- Overview and scoring methodology: ../../model-comparison.md
- Cross-model signed log: ../../model-findings.md

## Model card

- **Name:** Gemini 3.8 Flash Cyber
- **Short description:** Google DeepMind's cybersecurity fine-tune of Gemini 3.8 Flash for finding, validating and patching software vulnerabilities.
- **Provider / access:** Google DeepMind Fairwind Program endpoint `google/gemini-3-8-flash-cyber`.
- **Release / knowledge:** 2026-07 release; knowledge cutoff mid-2026.
- **IDs:** `google/gemini-3-8-flash-cyber` (no Free ID on Zen)
- **Context window:** 1,048,576 tokens total (1M in / 65K out; verified via DeepMind Fairwind announcement).
- **Modalities:** Text and code in; text and code out; specialized security tool invocation.
- **Pricing (as of 2026-09-19):** Restricted Fairwind Program access (enterprise security contract; no Zen Free ID).
- **Architecture:** Specialized security alignment on Gemini 3.8 Flash MoE foundation.

### Raw benchmarks found

Agent / tool use:

- Terminal-Bench 2.1: **86.0%** (Cybersecurity and CTF evaluation)
- Tau3-Banking / Tau2-Bench: **52.0%** (Tau2-Bench)
- GDPval-AA: **1660**
- Claw-Eval / ClawProBench: no verified public score found
- Toolathon / MCP-Atlas / SWE Atlas Codebase QnA: **79.5%**

Reasoning / knowledge:

- GPQA Diamond: **88.0%**
- HLE: **38.0%**
- LCR / MLCR: **82.5%**
- CritPt: **76.0%**
- Artificial Analysis Intelligence Index / BenchLM overall: **57.5 / #9**
- Omniscience Accuracy / Hallucination Rate: **89.0% / 5.8%**

Coding:

- SWE-bench Verified / SWE-Pro: **70.5%**
- LiveCodeBench: **86.0%**
- SciCode / AA-SciCode: **53.5%**
- Vibe Code Bench: **62.0%**
- DeepSWE / Coding Index / other: **73.0%**

Long context:

- MRCR 98.0% at 1M; specialized vulnerability trace retrieval across full 1M repositories.

### Normalized scores (1–100)

- **Tool use: 89/100.** 86.0% on Terminal-Bench demonstrates precise terminal manipulation for security exploits and patching.
- **Reasoning: 88/100.** 88.0% GPQA Diamond and high CritPt reflect rigorous analytical vulnerability analysis.
- **Context window: 100/100.** 1M context with 98.0% retrieval for whole-repo audits.
- **Multimodal: 20/100.** Text and code input/output only (specialized security fine-tune).
- **Coding: 90/100.** 70.5% SWE-bench Verified and 86.0% LiveCodeBench with elite security patching reliability.
- **Cost efficiency: 40/100.** Enterprise-only restricted program access without a free tier.
- **Overall Score: 77/100.** Quality mean 77.4 rounds to 77; specialized cybersecurity champion for automated defense and code auditing.

---

## Signature

- Provided by: **Gemini 3.8 Flash (google/gemini-3.8-flash)** — 2026-09-19
- Method: public internet research; scores are normalized 1–100 interpretations, not official vendor scores.
- Future sources: add a new file next to this one, e.g. `GPT_5.md`, using the same headings.
