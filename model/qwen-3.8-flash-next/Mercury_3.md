# Qwen 3.8 Flash Next — findings by Mercury 3

- Source: Alibaba Qwen/Qwen3.8-Flash-Next
- Date: 2026-11-03 (UTC)
- Overview and scoring methodology: `../../model-comparison.md`
- Cross-model signed log: `../../model-findings.md`

## Model card

- **Name:** Qwen3.8-Flash-Next
- **Short description:** Alibaba Qwen's open-weight experimental preview of the Qwen4 architecture (released 2026-08-27): hybrid-attention MoE (125B total/6B active + 51B n-gram embedding) with Qwen Sparse Attention (QSA), Gated Residual, and a vision encoder — built for cost-efficient coding, agent tasks, and image/video understanding.
- **Provider / access:** Qwen Cloud (official `qwen3.8-flash` version), self-host (SGLang/vLLM/TokenSpeed); Qwen Community License 1.0 open weights on Hugging Face; 5 providers per models.dev.
- **Release / knowledge:** Released 2026-08-27; knowledge cutoff not published.
- **IDs:** `Qwen/Qwen3.8-Flash-Next` (HF; `qwen3.8-flash-next` API; thinking on by default, `reasoning_effort` xhigh/medium/low).
- **Context window:** 262,144 tokens native, extensible to ~1,000,000 (YaRN); max output 131,072.
- **Modalities:** text + image + video input, text output; reasoning (extended thinking with preserved thinking); tool calls; MTP.
- **Pricing (as of 2026-11-03):** open weights; hosted routes $0.10–$0.20 input / $0.20–$0.50 output (models.dev); Qwen Cloud production version pricing separate.
- **Architecture:** 125B total / 6B active MoE + 51B n-gram embedding + 4B MTP, 48 layers, 512 experts (10 routed + 1 shared), Gated DeltaNet + QSA hybrid attention; Qwen Community License 1.0, open weights.

### Raw benchmarks found

Agent / tool use (Qwen card):

- CoWorkBench: **73.9%**; JobBench: **55.7%**; Agents' Last Exam: Pass@1 24.3%, Score 51.2; Toolathlon Verified (Pass@1): **73.5%**; ClawEval-MM: Pass@3 64.4% / Avg 60.4%; RecreationBench: **49.9%**; AndroidWorld: **84.5%**; OSWorld 2.0: Binary 19.4% / Partial 52.3%; Vision2Web: **64.0%**

Reasoning / knowledge:

- GPQA Diamond: **91.7%**; HLE: 35.9%; IFBench: **81.3%**; LiveCodeBench v6: **91.9%**; Global-MMLU (family) not listed on this card

Coding:

- DeepSWE 1.1: **58.7%**; SWE-bench Pro: **62.5%**; SWE-bench Multilingual: **81.0%**; NL2Repo-Bench: 48.1%; LiveCodeBench v6 91.9%

Long context:

- 262K native (~1M extensible via YaRN); no MRCR/LCR figure verified in sources reviewed.

Multimodal:

- image/video in; LVBench: **76.6%**; RealWorldQA: **88.5%**; MathVision: 90.6% (95.7% with CI); CharXiv (RQ): 84.6% (90.6% with CI); ERQA: 72.3%.

### Normalized scores (1–100)

- **Tool use: 87/100.** CoWorkBench 73.9%, Toolathlon 73.5%, JobBench 55.7%, AndroidWorld 84.5% — excellent agentic profile; capped by OSWorld 2.0 binary 19.4% and Agents' Last Exam pass 24.3%.
- **Reasoning: 84/100.** GPQA 91.7% and IFBench 81.3% strong; capped by HLE 35.9% and no ARC/II figures.
- **Context window: 82/100.** 262K native (~1M extensible) with no verified retrieval figure at depth.
- **Multimodal: 90/100.** Image + video input with top visual scores (LVBench 76.6%, RealWorldQA 88.5%, MathVision 90.6%); text-only output caps it.
- **Coding: 84/100.** SWE Multilingual 81%, SWE Pro 62.5%, DeepSWE 58.7%, LiveCodeBench 91.9%; NL2Repo 48.1% drags.
- **Cost efficiency: 92/100.** Open weights + $0.10–$0.20/$0.20–$0.50 hosted routes — exceptional value for the capability class.
- **Overall Score: 85/100.** Mean of (87+84+82+90+84)/5 = 85.4 → 85. A high-value open architecture preview; sparse third-party verification flagged.

---

## Signature

- Provided by: **Mercury 3 (inception/mercury-3)** — 2026-11-03
- Method: public internet research (Qwen official model card, models.dev registry); scores are normalized 1–100 interpretations, not official vendor scores. Most benchmark rows are Qwen-published; AA/BenchLM do not list this model — flagged.
- Reference URLs:
  - [Qwen3.8-Flash-Next model card (Hugging Face)](https://huggingface.co/Qwen/Qwen3.8-Flash-Next)
  - [Qwen3.8-Flash-Next blog (Qwen)](https://qwen.ai/blog?id=qwen3.8-flash-next)
  - [Qwen3.8-Flash-Next — models.dev registry](https://models.dev/models/alibaba/qwen3.8-flash-next)
