# Gemini 3.8 Flash Cyber — findings by DeepSeek 4 Flash

- Source: Google/Gemini 3.8 Flash Cyber
- Date: 2026-10-01 (UTC)
- Overview and scoring methodology: `../../model-comparison.md`
- Cross-model signed log: `../../model-findings.md`

## Model card

- **Name:** Gemini 3.8 Flash Cyber
- **Short description:** Google DeepMind's cybersecurity fine-tune of Gemini 3.8 Flash for finding, validating and patching vulnerabilities, released under the restricted Fairwind Program.
- **Provider / access:** Google DeepMind Fairwind Program only (restricted); no Zen Free ID, no public pricing.
- **Release / knowledge:** fine-tune of the 2026-09-02 Gemini 3.8 Flash release; knowledge cutoff not publicly disclosed.
- **IDs:** `google/gemini-3-8-flash-cyber`
- **Context window:** 1,048,576 (1M) / 65K out — curated metadata.
- **Modalities:** text/code in; text/code out; reasoning yes; tool calls yes.
- **Pricing (as of 2026-10-01):** restricted Fairwind Program; no public per-token pricing.
- **Architecture:** proprietary fine-tune of Gemini 3.8 Flash.

### Raw benchmarks found

Agent / tool use:

- CyberGym **86.2%** (Google Fairwind)
- CWE-Bench **47.2%** (Google Fairwind)
- Gray Swan IPI (15 attempts) **6.0%**
- Terminal-Bench / GDPval / OSWorld: no verified public score found for this exact Cyber ID (base 3.8 Flash TB 2.1 89.4%, GDPval 1545)

Reasoning / knowledge:

- No Cyber-specific public scores found; base Gemini 3.8 Flash: GPQA Diamond 95.3%, HLE 54.9%, AA Index 40.9

Coding:

- Base Gemini 3.8 Flash: DeepSWE 73.8%, Coding Index 76.3%; Cyber adds CWE-Bench 47.2% and CyberGym 86.2% for security patching

Long context:

- No Cyber-specific retrieval number found; base 1M window

Multimodal:

- text/code only (vision disabled relative to base Flash)

### Normalized scores (1–100)

- **Tool use: 90/100.** CyberGym 86.2% and the base 3.8 Flash agentic suite (TB 2.1 89.4%) support frontier tool use for security workflows.
- **Reasoning: 88/100.** Inherits base 3.8 Flash (GPQA 95.3%, HLE 54.9%, AA Index 40.9).
- **Context window: 95/100.** 1M input with 65K output; no Cyber-specific retrieval proof.
- **Multimodal: 15/100.** Text/code only — the Cyber fine-tune drops general multimodal input.
- **Coding: 91/100.** Base DeepSWE 73.8% plus CyberGym 86.2% and CWE-Bench 47.2% for vulnerability work.
- **Cost efficiency: 50/100.** Restricted Fairwind access, no public pricing.
- **Overall Score: 76/100.** Mean of (90 + 88 + 95 + 15 + 91) / 5 = 75.8 → 76. Best-fit: vetted enterprise vulnerability discovery and patching (no general multimodal).

---

## Signature

- Provided by: **DeepSeek 4 Flash (deepseek/deepseek-v4-flash)** — 2026-10-01
- Method: public internet research (Google Fairwind, BenchLM, DeepMind model card); scores are normalized 1–100 interpretations, not official vendor scores.
- Future sources: add a new file next to this one, e.g. `GPT_5.md`, using the same headings.
