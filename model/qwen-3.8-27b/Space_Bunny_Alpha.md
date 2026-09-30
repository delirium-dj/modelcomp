# Qwen 3.8 27B — findings by Space Bunny Alpha

- Source: Alibaba Qwen / Qwen3.8-27B
- Date: 2026-09-25 (UTC)
- Overview and scoring methodology: `../../model-comparison.md`
- Cross-model signed log: `../../model-findings.md`

## Model card

- **Name:** Qwen 3.8 27B
- **Short description:** Alibaba's open-weight dense vision-language reasoning model for coding, professional work, multimodal interaction, and long-running agent tasks.
- **Provider / access:** Hugging Face `Qwen/Qwen3.8-27B`; OpenRouter `qwen/qwen3.8-27b`; local deployment through the model card's Transformers, vLLM, and SGLang instructions.
- **Release / knowledge:** 2026-08-14 checkpoint (OpenRouter canonical slug); no verified exact knowledge cutoff found.
- **IDs:** `Qwen/Qwen3.8-27B`; OpenRouter `qwen/qwen3.8-27b` (dated slug `qwen3.8-27b-20260814`).
- **Context window:** 262,144 tokens natively, extensible to 1,000,000 tokens with the documented RoPE/YaRN configuration; the hosted route lists 1M context.
- **Modalities:** Text, image, and video input; text output; flexible thinking on by default with low/medium/xhigh reasoning controls, tool calling, and structured outputs.
- **Pricing (as of 2026-09-25):** OpenRouter lists $0.42 input / $0.085 cached input / $3.00 output per 1M tokens for the dated route; self-hosting is open-weight under Apache 2.0.
- **Architecture:** Open-weight 27B dense vision-language model; the official card documents flexible thinking, vision/video processing, and a 262K native context with a documented 1M extension.

### Raw benchmarks found

> The official Qwen model card reports Qwen3.8-27B results in its benchmark tables. Where a table supplies a CI/no-CI pair, the stronger official setting is identified explicitly. OpenRouter supplies the independent Artificial Analysis composite indices.

Agent / tool use:

- Terminal-Bench 2.1 (Terminus): **73.0%** (official Qwen model card).
- SWE-bench Pro: **61.7%** (official Qwen model card; Claude Code harness, temperature 1.0, top_p 0.95, 256K context).
- Agents' Last Exam: **20.4% Pass@1 / 42.9 score** (official Qwen model card).
- CoWorkBench: **70.7%**; JobBench: **33.4%** (official Qwen model card).
- IFBench instruction following: **79.5%** (official Qwen model card).
- Artificial Analysis Agentic Index: **45.8** (OpenRouter metadata).

Reasoning / knowledge:

- GPQA Diamond: **89.2%**; HLE: **30.8%** (official Qwen model card).
- IFBench: **79.5%** (official Qwen model card).
- Artificial Analysis Intelligence Index: **33.7** (OpenRouter metadata).

Coding:

- SWE-bench Verified: **79.0%** (official Qwen model card; in-house benchmark, average over three runs, 8-hour timeout, 32,768 max tokens, 256K context).
- LiveCodeBench v6: **90.3%** (official Qwen model card).
- SWE-bench Pro: **61.7%**; Terminal-Bench 2.1: **73.0%** (official Qwen model card).
- Artificial Analysis Coding Index: **68.1** (OpenRouter metadata).

Long context:

- The hosted route exposes a **1,000,000-token** context, while the official weights natively support **262,144** tokens and document an extension to 1M. No standalone exact-model RULER, MRCR, or GraphWalks retrieval score was found.

Multimodal:

- OSWorld-Verified: **84.3%**; WebArena-Verified: **64.8%**; AndroidWorld: **81.9%** (official Qwen model card).
- ClawEval-MM: **57.4% Pass@3 / 56.9 average**; SWE-MM: **38.6%**; Vision2Web: **62.9%** (official Qwen model card).
- OmniDocBench v1.5: **91.1%**; RealWorldQA: **85.9%**; ERQA: **65.5%** (official Qwen model card).
- MathVision: **94.6% with CI**; CharXiv (RQ): **90.2% with CI** (official Qwen model card).

### Normalized scores (1–100)

- **Tool use: 90/100.** Terminal-Bench 2.1 at 73.0%, SWE-bench Pro at 61.7%, CoWorkBench at 70.7%, and the Agentic Index at 45.8 show unusually strong computer/terminal and long-horizon agent execution.
- **Reasoning: 86/100.** GPQA Diamond at 89.2% and IFBench at 79.5% are strong, while HLE at 30.8% and the composite Intelligence Index at 33.7 prevent a top score.
- **Context window: 98/100.** A 1M hosted context and documented 1M extension are near the methodology's ceiling, although no exact-model full-window retrieval result was found.
- **Multimodal: 91/100.** Native image/video input and strong visual-agent, document, web, and real-world perception scores are backed by a broad exact-model benchmark set.
- **Coding: 93/100.** SWE-bench Verified at 79.0%, SWE-bench Pro at 61.7%, LiveCodeBench v6 at 90.3%, and Terminal-Bench at 73.0% indicate exceptional coding-agent performance.
- **Cost efficiency: 86/100.** At $0.42 input and $3.00 output per 1M tokens, hosted inference is reasonable but pricier than smaller open-weight alternatives; local deployment can reduce vendor cost.
- **Overall Score: 92/100.** A high-end multimodal reasoning and coding agent with a million-token hosted window; best for software engineering, visual computer use, and long-running professional workflows.

---

## Signature

- Provided by: **Space Bunny Alpha (space-bunny/alpha)** — 2026-09-25
- Method: official Qwen Hugging Face model card and local-deployment documentation, OpenRouter API metadata, and public benchmark tables; scores are normalized 1–100 interpretations, not official vendor scores.
- Future sources: add a new file next to this one, e.g. `Qwen_3.8_27B.md`, using the same headings.
