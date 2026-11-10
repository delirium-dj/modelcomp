# Qwen3.8 Flash — findings by Fledge Alpha

- Source: Alibaba (`qwen-3.8-flash`)
- Date: 2026-10-02 (UTC)
- Overview and scoring methodology: `../../model-comparison.md`
- Cross-model signed log: `../../model-findings.md`

## Model card

- **Name:** Qwen3.8 Flash (production) / Qwen3.8-Flash-Next (open weights)
- **Short description:** Alibaba's Aug 26, 2026 small multimodal MoE — the first public look at the Qwen4-generation architecture (125B total, 6B active, 51B n-gram embeddings, 4B MTP layer, 262K native context extensible to 1M).
- **Provider / access:** QwenCloud/Qwen Token Plan (`qwen3.8-flash`), OpenRouter (`qwen/qwen3.8-flash`), Together, DeepInfra; open-weight `Qwen3.8-Flash-Next` on HF/ModelScope.
- **Release / knowledge:** 2026-08-26.
- **IDs:** `qwen/qwen3.8-flash`; HF `Qwen/Qwen3.8-Flash-Next`
- **Context window:** 1,000,000 tokens (production endpoint); 262,144 native on the open checkpoint, extensible via YaRN.
- **Modalities:** text, image, video, audio in; text out; desktop interaction/charts/doc analysis advertised.
- **Pricing (as of 2026-10-02):** $0.15–0.16/M in, $0.016/M cached, $0.47/M out.
- **Architecture:** hybrid MoE with Gated DeltaNet + full attention from the Qwen3.8 design, plus n-gram embedding table and multi-token prediction — described as an early preview of Qwen4.

### Raw benchmarks found

Agent / tool use:

- Terminal-Bench 2.1: **86.1%** (AA independent) / v4.0: 25.3%
- Toolathlon-Verified: **73.5%**; CoWorkBench: **73.9**; JobBench 55.7
- Agents' Last Exam: **51.2 score / 24.3 Pass@1**; Tool call-style toolathlon ≥ 73%

Reasoning / knowledge:

- GPQA Diamond: **91.7–92.3%** (AA)
- HLE: **35.9–38.0%** (AA); IFBench: **81.3%**
- AA Intelligence Index: **39.9**; LiveBench Reasoning: **87.4%**; MathVision: **90.6/95.7**

Coding:

- SWE-bench Pro: **62.5%**; DeepSWE 1.1: **58.7%**; NL2Repo-Bench: **48.1%**
- LiveCodeBench v6: **91.9%**; SWE-bench Multilingual: **81.0%**
- LiveBench Coding: **72.5%**; AA Coding Index: **73**

Multimodal:

- MMMU-Pro: **79.8%** (AA); RealWorldQA: **88.5%**; LVBench Video: top-of-class per Alibaba; ClawEval-MM: **60.4%**

### Normalized scores (1–100)

- **Tool use: 80/100.** Terminal-Bench 2.1 86.1% (AA-independent) and Toolathlon 73.5% are very strong for 6B active; v4.0 at 25.3% and Agents' Last Exam 24.3 Pass@1 show limits.
- **Reasoning: 78/100.** GPQA 92% and MathVision 90.6/95.7 for a 6B-active model; AA Index 39.9 puts it mid-pack.
- **Context window: 88/100.** 1M production context via YaRN extension of 262K native with a 131K output cap.
- **Multimodal: 88/100.** Full text/image/video/audio input; MMMU-Pro 79.8% and LVBench-class results.
- **Coding: 80/100.** SWE-bench Pro 62.5% and LCB v6 91.9% are remarkable at ~$0.16/$0.47 — DeepSWE 58.7% and NL2Repo 48.1% are middling.
- **Cost efficiency: 94/100.** $0.15/$0.47 is among the most aggressive flash-tier rates; open-weight release available.
- **Overall Score: 83/100.** Mean of the five quality dims; best fit for cheap high-throughput multimodal agent loops today, and a public preview of the Qwen4 architecture.

---

## Signature

- Provided by: **Fledge Alpha (opencode/fledge-alpha-free)** — 2026-10-02
- Method: public internet research (Alibaba Qwen blog/HF card, AA, LiveBench board, LLMStats/LLMBoard); scores are normalized 1–100 interpretations, not official vendor scores.
- Future sources: add a new file next to this one using the same headings.
