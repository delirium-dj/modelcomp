# Qwen 3.8 27B — findings by Space Bunny Alpha

- Source: Alibaba Qwen / Qwen3.8-27B
- Date: 2026-09-29 (UTC)
- Overview and scoring methodology: `../../model-comparison.md`
- Cross-model signed log: `../../model-findings.md`

## Model card

- **Name:** Qwen 3.8 27B
- **Short description:** Alibaba's open-weight dense vision-language reasoning model for coding, professional work, multimodal interaction, and long-running agent tasks.
- **Provider / access:** Hugging Face `Qwen/Qwen3.8-27B`; Alibaba Cloud Model Studio `qwen3.8-27b`; OpenRouter `qwen/qwen3.8-27b`; local deployment through the model card's Transformers, vLLM, and SGLang instructions.
- **Release / knowledge:** 2026-08-14 checkpoint (OpenRouter canonical slug; Artificial Analysis release date). No verified exact knowledge cutoff found.
- **IDs:** `Qwen/Qwen3.8-27B`; `qwen3.8-27b`; OpenRouter `qwen/qwen3.8-27b` (dated slug `qwen3.8-27b-20260814`).
- **Context window:** 262,144 tokens natively, extensible to 1,000,000 tokens with the documented RoPE/YaRN configuration. Alibaba documents max input **991,808**, max output **131,072**, max chain-of-thought **262,144**, and a **1,000,000**-token window; the hosted OpenRouter route also lists 1M.
- **Modalities:** Text, image, and video input; text output; flexible thinking on by default with **low/medium/xhigh** reasoning-effort controls, tool calling, and structured outputs.
- **Pricing (as of 2026-09-29):** Alibaba **Beijing tier is $0.424 input / $1.696 output** per 1M tokens, with implicit cache $0.085, explicit cache creation $0.53 and explicit cache read $0.042. **Singapore (international) is a separate, higher tier at $0.50/$3.00** (implicit cache $0.10, explicit cache creation $0.625, read $0.05). OpenRouter lists $0.42 in / $0.085 cached / $3.00 out. Self-hosting is open-weight under Apache 2.0.
- **Architecture:** Open-weight 27B dense vision-language model; the official card documents flexible thinking, vision/video processing, and a 262K native context with a documented 1M extension.

### Raw benchmarks found

> The official Qwen3.8-Flash-Next model card reports Qwen3.8-27B results in its benchmark tables. Where a table supplies a CI/no-CI pair, the stronger official setting is identified explicitly. Artificial Analysis supplies the independent composite indices, measured on the xhigh reasoning-effort variant.

Agent / tool use:

- Terminal-Bench 2.1 (Terminus): **73.0%** (official Qwen model card).
- SWE-bench Pro: **61.7%** (official Qwen model card; Claude Code harness, temperature 1.0, top_p 0.95, 256K context).
- **Toolathlon Verified (Pass@1): 67.1%** (official Qwen3.8-Flash-Next comparison table).
- **SWE-bench Multilingual: 73.8%** (official Qwen comparison table; mini-SWE-agent harness, 256K context).
- Agents' Last Exam: **20.4% Pass@1 / 42.9 score** (official Qwen model card).
- CoWorkBench: **70.7%**; JobBench: **33.4%** (official Qwen model card).
- IFBench instruction following: **79.5%** (official Qwen model card).
- Artificial Analysis Agentic Index: **45.8** (OpenRouter metadata).

Reasoning / knowledge:

- GPQA Diamond: **89.2%**; HLE: **30.8%** (official Qwen model card).
- **Artificial Analysis Intelligence Index: 34** on **v4.3.2**, rank **#1/142** in the open-weight 40B–150B class, `xhigh` variant (Artificial Analysis, accessed 2026-09-29). This is the **direct v4.3.2 measurement**, replacing the earlier 33.7 figure that was only available through OpenRouter metadata.
- IFBench: **79.5%** (official Qwen model card).
- Measured latency: **TTFT 3.91 s** and output speed **46.7 tok/s** on Alibaba's API, against a peer median of 88 t/s — the xhigh effort setting is measurably slow (Artificial Analysis, accessed 2026-09-29). Verbosity: **200M** output tokens on the Intelligence Index versus an 82M peer median.
- AA-LCR, CritPt, and hallucination metrics: **no verified public exact value found**

Coding:

- SWE-bench Verified: **79.0%** (official Qwen model card; in-house benchmark, average over three runs, 8-hour timeout, 32,768 max tokens, 256K context).
- LiveCodeBench v6: **90.3%** (official Qwen model card).
- SWE-bench Pro: **61.7%**; Terminal-Bench 2.1: **73.0%** (official Qwen model card).
- NL2Repo-Bench: **42.3%** (official Qwen comparison table; Claude Code harness with network access to the target repository disabled).
- Artificial Analysis Coding Index: **68.1** (OpenRouter metadata).

Long context:

- Hosted max input **991,808** / max output **131,072** against a **1,000,000**-token window, with a **262,144**-token chain-of-thought budget (Alibaba documentation).
- Official weights natively support **262,144** tokens and document an extension to 1M. No standalone exact-model RULER, MRCR, or GraphWalks retrieval score was found.

Multimodal:

- OSWorld-Verified: **84.3%**; WebArena-Verified: **64.8%**; AndroidWorld: **81.9%** (official Qwen model card).
- ClawEval-MM: **57.4% Pass@3 / 56.9 average**; SWE-MM: **38.6%**; Vision2Web: **62.9%** (official Qwen model card).
- RecreationBench: **47.1%**; OSWorld 2.0: **19.4 binary / 48.0 partial**; ERQA: **65.5%** (official Qwen comparison table).
- **LVBench (long video understanding): 72.4%** (official Qwen comparison table).
- OmniDocBench v1.5: **91.1%**; RealWorldQA: **85.9%** (official Qwen model card).
- MathVision: **94.6% with CI**; CharXiv (RQ): **90.2% with CI** (official Qwen model card).

### Normalized scores (1–100)

- **Tool use: 90/100.** Terminal-Bench 2.1 at 73.0%, Toolathlon Verified at 67.1%, SWE-bench Pro at 61.7%, CoWorkBench at 70.7%, and the Agentic Index at 45.8 show unusually strong computer/terminal and long-horizon agent execution across two independent harnesses.
- **Reasoning: 90/100.** GPQA Diamond at 89.2% and IFBench at 79.5% are strong, and the **directly measured** v4.3.2 Intelligence Index of 34 — rank **#1/142** in the open-weight 40B–150B class — is now a first-party measurement rather than a metadata relay, which raises confidence in the tier; HLE at 30.8% and the absence of public LCR/CritPt values keep it short of the top band.
- **Context window: 94/100.** A 1,000,000-token hosted window with 991,808 max input and a 262,144-token thinking budget is near the methodology's ceiling, trimmed because no exact-model full-window retrieval result was found.
- **Multimodal: 91/100.** Native image/video input with LVBench 72.4%, ERQA 65.5%, OSWorld 2.0 partial 48.0%, and strong document, web, and real-world perception scores are backed by a broad exact-model benchmark set.
- **Coding: 93/100.** SWE-bench Verified at 79.0%, SWE-bench Pro at 61.7%, LiveCodeBench v6 at 90.3%, SWE-bench Multilingual at 73.8%, and Terminal-Bench at 73.0% indicate exceptional coding-agent performance.
- **Cost efficiency: 84/100.** The Beijing tier at $0.424/$1.696 is reasonable, but hosted international pricing rises to $0.50/$3.00 and the route is measurably slow (46.7 t/s, 3.91 s TTFT) and very verbose (200M tokens on the Intelligence Index), so real per-task cost is high despite the attractive Beijing rate; local deployment avoids the vendor cost entirely.
- **Overall Score: 91.6/100.** (90 + 90 + 94 + 91 + 93) / 5 = 458 / 5 = 91.6. Cost efficiency is excluded from this mean. Best fit: high-end multimodal reasoning and coding agent with a million-token hosted window; best for software engineering, visual computer use, and long-running professional workflows.

---

## Signature

- Provided by: **Space Bunny Alpha (opencode/space-bunny-free)** — 2026-09-29
- Method: official Qwen Hugging Face model card and comparison tables, Alibaba Cloud Model Studio documentation (last updated 2026-09-28), Artificial Analysis v4.3.2 direct measurements, and OpenRouter API metadata; scores are normalized 1–100 interpretations, not official vendor scores. Cost efficiency is excluded from Overall.
- Future sources: add a new file next to this one, e.g. `Qwen_3.8_27B.md`, using the same headings.
