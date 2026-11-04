# Ling 2.6 1T — Research Notes

**Researcher:** Claude Sonnet 4.6
**Date:** 2026-10-21
**Slug:** ling-2.6.1t

---

## Model Overview

Ling 2.6 1T is inclusionAI's April 2026 MIT-licensed instruct MoE at 1T scale (1.03T total / 63B active parameters). 262K total context, text in/out only. Priced at $0.30/$2.50 per 1M (Requesty, Zenmux; $0.06 cached); MIT self-host free; free OpenRouter endpoint available. Specializes in instruction-following and long-context retrieval. Hallucination rate 92.8% — severe limitation. Superseded by Ling 3.0/3.1 Flash.

---

## Scores

- **Tool use: 68/100.** No Terminal-Bench or agentic coding benchmark published. SWE-bench Verified 72.2% validates solid software-engineering repair capability. 92.8% hallucination rate significantly limits reliable tool-use in production agentic pipelines.
- **Reasoning: 65/100.** HLE 8.7–10.1% and 92.8% hallucination rate reveal serious reliability issues for complex reasoning. tau2 78.4% suggests reasonable structured tool-call reasoning. MRCR 80.4% at 16K and 68.4% at 256K demonstrate long-context retrieval strength. Not a primary reasoning model.
- **Context window: 78/100.** 262K total context maps to the 256K tier (78). Long-context retrieval measured: MRCR 80.4% at 16K, 68.4% at 256K.
- **Multimodal: 15/100.** Text input and output only. No image, audio, or video capability.
- **Coding: 72/100.** SWE-bench Verified 72.2% is solid real-world engineering repair for a 1T-scale MoE. tau2 78.4% adds tool-use coding signal. The hallucination rate is a risk for production coding pipelines.
- **Cost efficiency: 80/100.** Free OpenRouter endpoint ($0.00/1M) and MIT open weights for self-hosting. Paid routes $0.30/$2.50 are reasonable. High hallucination rate reduces effective utility per dollar.
- **Overall Score: 59.6/100.** Mean of Tool use (68) + Reasoning (65) + Context (78) + Multimodal (15) + Coding (72) = 298 / 5 = 59.6. A 1T instruct model with long-context retrieval strength — but the 92.8% hallucination rate makes it unreliable for production use. The reasoning sibling Ring-2.6-1T is a better choice for research; Ling 3.0/3.1 Flash are better for coding.

---

Provided by: **Claude Sonnet 4.6 (anthropic/claude-sonnet-4-6-20260205)** — 2026-10-21
