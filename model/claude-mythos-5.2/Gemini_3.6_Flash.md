# Claude Mythos 5.2 — findings by Gemini 3.6 Flash

- Source: Anthropic (`claude-mythos-5-2`)
- Date: 2026-11-13 (UTC)
- Overview and scoring methodology: `../../model-comparison.md`
- Cross-model signed log: `../../model-findings.md`

## Model card

- **Name:** Claude Mythos 5.2
- **Short description:** Vetted cyber and biomedical variant of Claude 5.2 base model for authorized frontier security engineering and scientific research.
- **Provider / access:** Anthropic Cyber & Life Sciences Verification Programs (`claude-mythos-5-2`).
- **Release / knowledge:** 2026-11-09
- **IDs:** `anthropic/claude-mythos-5-2`
- **Context window:** 1,000,000 tokens (1M input / up to 128k output)
- **Modalities:** text/image in; text out; reasoning yes; tool calls; JSON mode
- **Pricing (as of 2026-11-13):** $8.00 / $40.00 per 1M tokens (Standard); $16.00 / $80.00 per 1M tokens (Fast mode)
- **Architecture:** Proprietary frontier model

### Raw benchmarks found

Agent / tool use:

- CyScenarioBench: **76.3%**
- OSWorld 2.1: **89.3%**
- WANDR: **82.1%**

Reasoning / knowledge:

- Terminal-Bench-Science 0.1: **75.3%**
- CVE Rediscovery: **89.6%**
- De novo binder design (24 hr): **85.1**
- Humanity's Last Exam (HLE): **74.2%**
- Automated Behavioral Audit Misalignment Score: **2.67 / 10**

Coding:

- FrontierCode 2.0: **49.1%**
- FrontierSWE v2: **69.9%**

Long context:

- Tested on 1M token context window across complex cybersecurity and protein-folding tasks.

### Normalized scores (1–100)

- **Tool use: 95/100.** State-of-the-art agentic tool use and cybersecurity scenario execution (76.3% CyScenarioBench).
- **Reasoning: 95/100.** Top-tier performance in CVE vulnerability rediscovery (89.6%) and scientific benchmark analysis (75.3% Terminal-Bench-Science).
- **Context window: 90/100.** Verified 1M token native context window.
- **Multimodal: 80/100.** Excellent visual chart and technical diagram understanding; text output only.
- **Coding: 94/100.** Leading scores across FrontierCode 2.0 (49.1%) and software vulnerability patch generation.
- **Cost efficiency: 62/100.** $8.00 in / $40.00 out per 1M tokens for verified enterprise access.
- **Overall Score: 90.8/100.** Premier specialized frontier model for cybersecurity engineering, biological research, and high-complexity technical problem-solving.

---

## Signature

- Provided by: **Gemini 3.6 Flash (google/gemini-3.6-flash)** — 2026-11-13
- Method: Public internet research via direct fetch of official Anthropic release announcement and system card documentation.
- Reference URLs:
  - [Introducing Claude Fable 5.2 and Mythos 5.2](https://www.anthropic.com/claude-fable-and-mythos-5-2)
  - [Claude Fable 5.2 and Mythos 5.2 System Card](https://www.anthropic.com/document/claude-fable-5-2-mythos-5-2-system-card)
- Future sources: add a new file next to this one, e.g. `GPT_5.md`, using the same headings.
