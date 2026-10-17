# GPT-5.2 — findings by Beam

- Source: OpenAI/GPT-5.2, `openai/gpt-5.2`
- Date: 2026-10-17 (UTC)
- Overview and scoring methodology: `../../model-comparison.md`
- Cross-model signed log: `../../model-findings.md`

## Model card

- **Name:** GPT-5.2
- **Short description:** OpenAI's frontier model (Dec 2025) for professional work: state of the art on GDPval (70.9%), SWE-bench Pro 55.6%, OSWorld 47.3%, BrowseComp 65.8%, Toolathlon 46.3%. First model to cross 90% on ARC-AGI-1. Token-efficient reasoning.
- **Provider / access:** OpenAI API `gpt-5.2` (ChatGPT, API, Codex); Azure.
- **Release / knowledge:** Released 2025-12-11; knowledge cutoff not stated.
- **IDs:** `openai/gpt-5.2`
- **Context window:** 400,000 tokens; max output 128,000.
- **Modalities:** text, image in; text out; reasoning yes; tool calling yes; structured output yes.
- **Pricing (as of 2026-10-17):** $1.75 / 1M input, $0.175 / 1M cached, $14.00 / 1M output; paid.
- **Architecture:** proprietary; params undisclosed.

### Raw benchmarks found

Agent / tool use:

- Agentic public-lane (BenchLM): **44.4** (#58/128)
- GDPval (wins or ties): **70.9%**
- OSWorld-Verified: **47.3%**
- Toolathlon: **46.3%**
- BrowseComp: **65.8%**
- OSWorld 2.0: not reported

Reasoning / knowledge:

- Reasoning public-lane (BenchLM): **64.3** (unranked, 4 rows)
- GPQA Diamond: **92.4%** (Thinking) / 93.2% (Pro)
- ARC-AGI-1 (Verified): **86.2%** (Thinking) / 90%+ (Pro)
- ARC-AGI-2 (Verified): **52.9%**
- HLE: not reported
- MRCRv2 8-needle 4k-8k: **98.2%**
- MRCRv2 8-needle 64k-128k: **85.6%**
- MRCRv2 8-needle 128k-256k: **77.0%**
- OpenAI MRCRv2: new state of the art

Coding:

- Coding public-lane (BenchLM): **36.8** (#73/150)
- SWE-bench Verified: **80.0%**
- SWE-bench Pro: **55.6%**
- Vibe Code Bench: **53.50%**
- LiveCodeBench: not reported

Long context:

- 400K window; MRCRv2 8-needle up to 256K (77.0% at 128k-256k).

Multimodal:

- Multimodal public-lane (BenchLM): **75.9** (#22/54)
- MMMU: **86.7%**
- MMMU-Pro: **79.5%**
- RealWorldQA: **83.3%**
- OmniDocBench 1.5: **85.7%**

### Normalized scores (1–100)

- **Tool use: 74/100.** Agentic lane #58/128 (44.4), GDPval 70.9%, OSWorld 47.3%, Toolathlon 46.3%, BrowseComp 65.8%; caps at OSWorld-Verified 47.3%.
- **Reasoning: 78/100.** GPQA 92.4%, ARC-AGI-1 86.2%, ARC-AGI-2 52.9%, MRCRv2 8-needle 85.6% at 64k-128k; caps at ARC-AGI-2 52.9%.
- **Context window: 76/100.** 400K window; MRCRv2 8-needle up to 256K (77.0% at 128k-256k).
- **Multimodal: 84/100.** Text/image in; MMMU 86.7%, MMMU-Pro 79.5%, RealWorldQA 83.3%.
- **Coding: 72/100.** SWE-bench Verified 80.0%, SWE-bench Pro 55.6%, Vibe Code 53.50%, coding lane #73/150 (36.8).
- **Cost efficiency: 86/100.** Cheap $1.75/$14 per 1M.
- **Overall Score: 77/100.** Mean of five quality dims (BenchLM aggregate 59.85); best-fit for professional work at low cost.

---

## Signature

- Provided by: **Beam (Beam)** — 2026-10-17
- Method: public internet research (OpenAI announcement, BenchLM); scores are normalized 1–100 interpretations, not official vendor scores.
- Future sources: add a new file next to this one, e.g. `GPT_5.md`, using the same headings.