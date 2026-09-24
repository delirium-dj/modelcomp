# Qwen3.8 Flash — findings by GLM 5.3

- Source: Alibaba/Qwen (`opencode/qwen3.8-flash`)
- Date: 2026-09-24 (UTC)
- Overview and scoring methodology: `../../model-comparison.md`
- Cross-model signed log: `../../model-findings.md`

## Model card

- **Name:** Qwen3.8 Flash
- **Short description:** Alibaba's fast, cheap Qwen3.8-generation Flash model served on Zen; toggleable thinking with low/medium/xhigh effort. Top use case: high-volume multimodal agentic work at the lowest per-token cost in the Qwen family.
- **Provider / access:** OpenCode Zen `https://opencode.ai/zen/v1/messages` (Anthropic Messages-compatible, `@ai-sdk/anthropic`); Aliyun Model Studio `alibaba/qwen3.8-flash`.
- **Release / knowledge:** Qwen3.8 generation, August 2026; knowledge cutoff not publicly disclosed.
- **IDs:** `opencode/qwen3.8-flash` (Zen; no Free ID — paid but very cheap)
- **Context window:** 262K tokens (verified via the Qwen3.8-Flash-Next model card, the open-weights sibling that carries this generation's Flash specs).
- **Modalities:** text/image/video in; text out; reasoning toggle + effort levels (low/medium/xhigh); tool calls; JSON mode.
- **Pricing (as of 2026-09-24):** Zen $0.15 in / $0.47 out per 1M (cached read $0.016; cache write $0.20) — cheapest tracked Qwen on Zen.
- **Architecture:** open-weights lineage (Qwen3.8-Flash-Next on HF is the experimental-preview sibling); parameter count not re-verified for the API SKU.

### Raw benchmarks found

> The API SKU `qwen3.8-flash` has no dedicated public leaderboard row found; benchmarks below are from BenchLM/HF for **Qwen3.8-Flash-Next**, the open-weights experimental-preview of the same generation — treat as the closest verified proxy (provisional).

Agent / tool use:

- GDPval-AA: **1648 Elo** (BenchLM; normalized 55.6%)
- CoWorkBench: **73.9%**; Toolathlon-Verified **73.5%**; AndroidWorld **84.5%**; Agents' Last Exam **51.2%**; JobBench **55.7%** (BenchLM)
- OSWorld 2.0: **19.4%** (BenchLM — weak on the newest release)
- Claw-Eval / Tau3 / MCP-Atlas: **no verified public score found**

Reasoning / knowledge:

- GPQA Diamond: **91.7%** (BenchLM; AA harness 92.3%)
- HLE: **35.9%** / AA-HLE **38.0%** (BenchLM — just under the 40% frontier bar)
- AA-LCR: **79.7%**; CritPt **11.1%** (BenchLM)
- Artificial Analysis Intelligence Index: **39.8** (BenchLM listing)
- Omniscience Accuracy / Hallucination Rate: **24.5% / 45.3%** (BenchLM — mediocre accuracy, decent honesty)
- IFBench: **81.3%** (BenchLM)

Coding:

- LiveCodeBench v6: **91.9%** (BenchLM — elite)
- SWE-bench Pro: **62.5%**; SWE Multilingual **81%**; DeepSWE **58.7%**; NL2Repo **48.1%** (BenchLM)
- SciCode / AA-SciCode: **50.6%**; AA Coding Index **73.0%** (BenchLM)
- SWE-bench Verified / Vibe Code Bench: **no verified public score found**

Long context:

- 262K window (Flash-Next model card); AA-LCR 79.7%; no MRCR/RULER retrieval number published.

Multimodal (grounding):

- MathVision **90.6%** / w/ Python **95.7%**; CharXiv **90.6%** (w/o tools 84.6%); RealWorldQA **88.5%**; LVBench **76.6%** (video); ERQA **72.3%**; Vision2Web **64.0%**; AA-MMMU-Pro **79.8%** (BenchLM).

### Normalized scores (1–100)

- **Tool use: 82/100.** GDPval 1648, CoWorkBench 73.9%, Toolathlon 73.5% and AndroidWorld 84.5% are strong for a Flash tier; OSWorld 2.0 19.4% is weak and Claw/Tau3 unpublished (proxy data caveat).
- **Reasoning: 82/100.** GPQA 91.7% clears the frontier bar and IFBench 81.3% is strong; HLE 35.9–38% misses the 40% bar, CritPt 11.1% and AA Index 39.8 are mid.
- **Context window: 72/100.** 262K total — mid of the 200K–500K band; no retrieval verification.
- **Multimodal: 88/100.** Text+image+video input with elite vision-math (MathVision 90.6%) and strong video (LVBench 76.6%); no audio modality verified.
- **Coding: 76/100.** LiveCodeBench v6 91.9% is elite; SWE-bench Pro 62.5%, DeepSWE 58.7% and SciCode 50.6% sit well below frontier refs; SWE-bench Verified unpublished.
- **Cost efficiency: 96/100.** $0.15/$0.47 per 1M on Zen with $0.016 cached reads — cheaper than the ~$0.60/$2.20 (≈92) anchor; exceptional value.
- **Overall Score: 80.0/100.** (82 + 82 + 72 + 88 + 76) / 5 = 80.0. Best-fit: the price-performance multimodal workhorse of the Qwen line; Max/27B for harder reasoning.

---

## Signature

- Provided by: **GLM 5.3 (z-ai/glm-5.3)** — 2026-09-24
- Method: public internet research (OpenCode Zen docs, models.dev registry, BenchLM, HF); scores are normalized 1–100 interpretations, not official vendor scores.
- Future sources: add a new file next to this one, e.g. `GPT_5.md`, using the same headings.
