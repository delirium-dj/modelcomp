# Gemini 3.8 Flash Cyber — findings by Beam

- Source: Google/Gemini 3.8 Flash Cyber, `google/gemini-3.8-flash-cyber`
- Date: 2026-10-17 (UTC)
- Overview and scoring methodology: `../../model-comparison.md`
- Cross-model signed log: `../../model-findings.md`

## Model card

- **Name:** Gemini 3.8 Flash Cyber
- **Short description:** Google's security-focused variant of Gemini 3.8 Flash (Sep 2, 2026) for trusted defenders; frontier-level vulnerability discovery, autonomous vulnerability discovery across 20 languages, CWE-Bench Pass@1 47.2% (Pareto frontier with Fable 5 47.8%). More permissive cyber mitigations; gated to trusted defenders.
- **Provider / access:** Google DeepMind Fairwind Program (trusted defenders); Gemini API.
- **Release / knowledge:** Released 2026-09-02; knowledge cutoff not stated.
- **IDs:** `google/gemini-3.8-flash-cyber`
- **Context window:** 1,048,576 tokens; max output 65,536.
- **Modalities:** text, image, video, audio, PDF in; text out; reasoning yes; tool calling yes. Same as 3.8 Flash.
- **Pricing (as of 2026-10-17):** Same as 3.8 Flash ($0.75/$3.75 per 1M); paid.
- **Architecture:** Same as Gemini 3.8 Flash (proprietary).

### Raw benchmarks found

- CyberGym: frontier-level autonomous vulnerability discovery; surpasses 3.5 Flash Cyber and significantly larger frontier models.
- Internal comprehensive vulnerability benchmark (20 languages): success rate exceeding 70%.
- CWE-Bench Pass@1: **47.2%** (vs Fable 5 47.8%), on Pareto frontier with Fable 5 at significantly lower cost.
- Gray Swan IPI: significant leap in prompt injection robustness.
- Base 3.8 Flash benchmarks (inherited): Terminal-Bench 2.1 89.4%, GPQA 94.4%, DeepSWE 73.8%, etc.

### Normalized scores (1–100)

- **Tool use: 84/100.** Inherited from 3.8 Flash (agentic 65.9, Terminal-Bench 2.1 89.4%) plus cyber-specific gains.
- **Reasoning: 85/100.** Inherited from 3.8 Flash (GPQA 94.4%, ARC-AGI-2 89.2%).
- **Context window: 85/100.** Same as 3.8 Flash (1M).
- **Multimodal: 90/100.** Same as 3.8 Flash (CharXiv 86.2%, LVBench 87.1%).
- **Coding: 82/100.** Inherited from 3.8 Flash (DeepSWE 73.8%) plus cyber patching (CWE-Bench 47.2%).
- **Cost efficiency: 90/100.** Same as 3.8 Flash ($0.75/$3.75).
- **Overall Score: 85/100.** Mean of five quality dims; cyber-tuned variant of 3.8 Flash with stronger security capabilities.

---

## Signature

- Provided by: **Beam (Beam)** — 2026-10-17
- Method: public internet research (Google DeepMind cyber page, BenchLM Gemini 3.8 Flash); scores are normalized 1–100 interpretations, not official vendor scores. Cyber variant benchmarks inherited from 3.8 Flash base.
- Future sources: add a new file next to this one, e.g. `GPT_5.md`, using the same headings.