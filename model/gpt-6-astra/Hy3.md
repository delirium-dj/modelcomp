# GPT-6 Astra — findings by Hy3

- Source: OpenAI (`gpt-6-astra`)
- Date: 2026-11-14 (UTC)
- Overview and scoring methodology: `../../model-comparison.md`
- Cross-model signed log: `../../model-findings.md`

## Model card

- **Name:** GPT-6 Astra
- **Short description:** OpenAI's flagship model (released as "the smartest and best-aligned model yet"); built on the "Symphony" architecture with native unified multimodal processing, ~40% gain over prior generation.
- **Provider / access:** OpenAI API, Azure OpenAI, AWS. Chat Completions / Responses API.
- **Release / knowledge:** Released 2026-09-03.
- **IDs:** `openai/gpt-6-astra`
- **Context window:** 1,050,000 tokens (verified via Baike / Xinhua coverage).
- **Modalities:** native unified text/image/audio/video in; text out; reasoning; tool calls.
- **Pricing (as of 2026-11-14):** not disclosed this pass (flagship tier).
- **Architecture:** proprietary ("Symphony").

### Raw benchmarks found

Agent / tool use:

- No verified public Terminal-Bench / SWE-agent figure found this pass
- First OpenAI model to reach internal "critical-level" cybersecurity capability threshold (vendor claim, no numeric score)

Reasoning / knowledge:

- ARC-AGI-3: **99.9%** (vs GPT-5.6 Sol 7.8% — vendor claim)
- No verified public GPQA/HLE figure found this pass

Coding:

- No verified public SWE-bench / LiveCodeBench figure found this pass

Long context:

- 1,050,000-token window verified; MRCR/RULER retrieval score not found this pass.

### Normalized scores (1–100)

- **Tool use: 90/100.** Flagship agentic positioning and cybersecurity milestone imply strong tool use; capped by no public agentic benchmark number.
- **Reasoning: 92/100.** ARC-AGI-3 99.9% is an exceptional reasoning signal; held below 95 by absence of public GPQA/HLE figures.
- **Context window: 99/100.** 1,050,000-token context (top tier).
- **Multimodal: 90/100.** Native unified multimodal processing (text/image/audio/video) per architecture description.
- **Coding: 88/100.** Flagship coding expectation; no public SWE-bench/LiveCodeBench number found to push higher.
- **Cost efficiency: 60/100.** Flagship tier, pricing undisclosed; expected premium.
- **Overall Score: 92/100.** Mean of the five non-cost dims (90+92+99+90+88)/5 = 91.8 → 92. Best-fit: top reasoning flagship with record ARC-AGI-3, gated by limited public coding/agentic disclosure.

---

## Signature

- Provided by: **Hy3 (hy3-reporter)** — 2026-11-14
- Method: public internet research — Baidu Baike, Xinhua, The Paper; independent of peer `model/` findings.
- Reference URLs:
  - [GPT-6 — Baidu Baike](https://baike.baidu.com/item/GPT-6/66920449)
  - [OpenAI releases GPT-6 Astra (Xinhua)](http://www.xinhuanet.com/world/20260904/7f11b43604434f26964cc8d40099ef44/c.html)
  - [Three judgments on GPT-6 Astra (The Paper)](https://www.thepaper.cn/newsDetail_forward_34011655)
