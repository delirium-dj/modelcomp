# Qwen3.8-Flash — findings by Step 5 Preview

- Source: Alibaba (`qwen3.8-flash`)
- Date: 2026-10-09 (UTC)
- Overview and scoring methodology: `../../model-comparison.md`
- Cross-model signed log: `../../model-findings.md`

## Model card

- **Name:** Qwen3.8-Flash
- **Short description:** Alibaba's efficiency tier of the Qwen 3.8 generation — the production (1M-context, built-in-tools) version of the open-weight **Qwen3.8-Flash-Next**, an early preview of the Qwen4 architecture. 125B-parameter ultra-sparse MoE + 51B N-gram embeddings with only 6B activated per token; trained at ~1/9 the cost of Qwen3.7-Plus yet surpassing Claude Opus 4.6 on Alibaba's coding/office evals. Natively multimodal (text, image, video), 1M context, $0.15/$0.47 pricing.
- **Provider / access:** QwenCloud / Alibaba Cloud Model Studio `qwen3.8-flash`; OpenRouter `qwen/qwen3.8-flash`; OpenCode Zen `opencode/qwen3.8-flash` ($0.15/$0.47, cache read $0.016, via the Anthropic-messages endpoint). Open weights as `Qwen/Qwen3.8-Flash-Next` on Hugging Face/ModelScope (Apache 2.0 per the QwenLM repo; hosted API proprietary). OpenAI- and Anthropic-API compatible.
- **Release / knowledge:** 2026-08-26 (Flash-Next open weights; production Qwen3.8-Flash same window). Knowledge cutoff not disclosed.
- **IDs:** `qwen3.8-flash` (Model Studio/Zen), `qwen/qwen3.8-flash` (OpenRouter), `Qwen/Qwen3.8-Flash-Next` (weights).
- **Context window:** 1,000,000 tokens production (991,808 max input; 983,616 in thinking mode; 131,072 max output; 262,144 max thinking chain). Open checkpoint: 262,144 native, extensible to 1M via YaRN.
- **Modalities:** Text, image and video in → text out. Thinking mode, function calling, structured output, context caching, web search, code interpreter, web extractor, t2i/i2i search.
- **Pricing (as of 2026-10-09):** $0.15 / MTok input, $0.47 output (international; Alibaba blog quotes $0.16/$0.47); China tier ¥0.8/¥2.7 (~$0.113/$0.382); implicit cache read $0.016; explicit cache creation $0.2 / read $0.016. 7.6x prefill speedup at 1M tokens (QSA kernel) and 8.6x prefill throughput vs Qwen3.7-Plus at 90% prefix-cache hit.
- **Architecture:** Ultra-sparse MoE, 125B total main model + 51B N-gram embedding params, 6B active/token; hybrid Gated DeltaNet + QSA attention; Gated Residual (4 parallel branches); Muon optimizer.

### Raw benchmarks found

Agent / tool use:

- Terminal-Bench 2.1: **86.1%** (Artificial Analysis independent, 2026-08-28 — #17/194; Alibaba's card reports no TB figure; Fable 5.1 leads at 91.4%)
- Toolathlon-Verified: **73.5% pass@1** (vendor — still self-reported)
- CoWorkBench: **73.9%** (in-house long-horizon office benchmark)
- JobBench: **55.7%** (vendor — above GPT-5.6 Sol's 45.4 on the same table)
- AndroidWorld: **84.5%** (vendor, mobile computer-use)
- Agents' Last Exam: **24.3 pass@1 / 51.2 score** (vendor)
- GDPval-AA: **Elo 1743** (AskClash aggregate)
- Claw-Eval (multimodal): **64.4** (HF card eval-results link)
- Tau3-Banking / OSWorld: **no verified public score found**

Reasoning / knowledge:

- GPQA Diamond: **92.3%** (Artificial Analysis independent; vendor card 91.7%)
- HLE: **38.0% no tools** (Artificial Analysis independent, supersedes the vendor's 35.9% GPT-4o-judged run)
- LiveCodeBench v6: **91.9%** (vendor, #3/50)
- IFBench: **81.3%** (vendor, #9/170 percentile)
- LiveBench overall: **76.2** (independent, 2026-08-28)
- Artificial Analysis Intelligence Index: **no published index value found** (AA's component evals are listed above); LLMBoard composite 80.6 (22 families, 40% coverage)

Coding:

- SWE-bench Pro: **62.5%** (vendor, Claude Code harness, refined task set; #20/58 — vs Claude Opus 4.6 Max 53.4%)
- DeepSWE v1.1: **58.7%** (vendor, best of Claude Code / mini-SWE-agent; #31/52)
- SWE-bench Multilingual: **81.0%** (vendor, mini-SWE-agent, #8/49)
- NL2Repo-Bench: **48.1%** (vendor); Vision2Web 64.0%; MiMo-style visual coding n/a
- SWE-bench Verified / Vibe Code Bench: **no verified public score found**

Multimodal:

- MMMU-Pro: **79.8%** (AskClash aggregate); MathVision **95.7%**; CharXiv (RQ) **90.6%**; LVBench (long video) **76.6%** (vendor)

Long context:

- 1M-token production window; AA-LCR / MRCR / RULER: **no verified public score found**; LVBench 76.6% (long-video understanding) is the only long-input measure

### Normalized scores (1–100)

- **Tool use: 82/100.** Independent AA Terminal-Bench 2.1 86.1%, AndroidWorld 84.5%, Toolathlon 73.5% and GDPval-AA Elo 1743 place it solidly mid-frontier; capped by Agents' Last Exam 24.3 pass@1, Claw-Eval-MM 64.4, and Toolathlon/CoWorkBench/JobBench all resting on Alibaba's own harnesses.
- **Reasoning: 82/100.** GPQA 92.3% and HLE 38.0% are both independently measured by Artificial Analysis, with LiveCodeBench 91.9% and IFBench 81.3% backing breadth and LiveBench 76.2 overall; capped by HLE sitting ~15 points behind the Fable-5/GPT-6.1 tier and no CritPt/ARC-AGI numbers.
- **Context window: 92/100.** 1M-token production window (262K native on the open checkpoint, YaRN to 1M) with 131K output is the ≥1M tier, and the QSA attention kernel's 7.6x prefill speedup at 1M is real engineering evidence; the 100 tier's ≥98%-retrieval bar is unverifiable — no MRCR/RULER/AA-LCR published.
- **Multimodal: 84/100.** Native text + image + video in → text out is the 75–90 band, anchored by MathVision 95.7%, CharXiv 90.6% and MMMU-Pro 79.8%; no audio input or non-text output keeps it below 90.
- **Coding: 84/100.** SWE-bench Pro 62.5%, DeepSWE 58.7%, SWE-bench Multilingual 81.0% and AA-verified Terminal-Bench 86.1% are frontier-adjacent at 6B active parameters — surpassing Opus 4.6 Max's 53.4% on SWE-Pro in Alibaba's table; capped by DeepSWE's 15-point gap to the Opus-5.5 lead, NL2Repo 48.1%, and no vendor SWE-bench Verified.
- **Cost efficiency: 94/100.** $0.15/$0.47 per MTok with $0.016 cache reads sits just above the methodology's ~$0.10/$0.20 = 97–99 tier; the cheapest 1M-context omni-modal model here after MiMo-V2.6-Flash, with 50%-off batch and 8.6x prefill throughput at high cache-hit rates.
- **Overall Score: 85/100.** Best-fit recommendation: the default high-volume pick — Pro-adjacent agentic coding, office automation and multimodal understanding at $0.15/$0.47 with 1M context; the best capability-per-dollar in the Qwen 3.8 line.

---

## Signature

- Provided by: **Step 5 Preview (StepFun)** — 2026-10-09
- Method: public internet research (QwenCloud docs + Qwen3.8-Flash-Next HF model card/blog + Alibaba Cloud Model Studio pricing, Artificial Analysis via The Model Gap, BenchmarkList, AskClash, llmboard); scores are normalized 1–100 interpretations, not official vendor scores.
- Future sources: add a new file next to this one, e.g. `Grok_4.6.md`, using the same headings.
