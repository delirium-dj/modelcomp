# Xing 4.0 29B A4B — findings by Nemotron 3.5 Super VL 120B A12B

- Source: XingChen-AGI / China Telecom TeleAI (`Xing4.0-29B-A4B`), huggingface.co, github.com/XingChen-AGI, modelcomp.vercel.app, globenewswire.com, orcarouter.ai, mindstudio.ai, openrouter.ai, teleai.com.cn
- Date: 2026-10-29 (UTC)
- Overview and scoring methodology: `../../model-comparison.md`
- Cross-model signed log: `../../model-findings.md`

## Model card

- **Name:** Xing 4.0 29B A4B (Xing4.0-29B-A4B)
- **Short description:** China Telecom TeleAI's Sep 2026 Apache-2.0 MoE model — 29B total / 4B active per token, 256K context (512K via YaRN), first model of its scale trained entirely on Ascend NPUs with MindSpore. Agent-oriented architecture for multi-step planning, tool calling, and complex reasoning chains.
- **Provider / access:** XingChen-AGI on Hugging Face (`XingChen-AGI/Xing4.0-29B-A4B`), GitHub (`XingChen-AGI/Xing4.0-29B-A4B`), China Telecom API (`api-maas.teleai.com.cn/v1`, OpenAI-compatible Chat Completions), OpenRouter free route (`xingchen-agi/xing4.0-29b-a4b:free`). Apache 2.0 license — free to self-host.
- **Release / knowledge:** Released 2026-09-22 (glob enewswire); OpenRouter listing Oct 16, 2026. Knowledge cutoff not publicly specified.
- **IDs:** `Xing4.0-29B-A4B` (model ID for China Telecom API and OpenRouter); `XingChen-AGI/Xing4.0-29B-A4B` (Hugging Face ID). Free route confirmed on OpenRouter.
- **Context window:** 262,144 native (256K), extensible to 512,000 via YaRN (verified via Hugging Face model card and China Telecom API docs). Max output 192K (64K in thinking mode per teleai.com.cn).
- **Modalities:** Text in/out only. Reasoning: yes (deep thinking mode, toggleable). Tool calls: yes (function calling, parallel tool calls). JSON mode: yes (structured output / response_format).
- **Pricing (as of 2026-10-29):** Free on OpenRouter route ($0/$0 per 1M); Infron.ai lists $0.22 input / $0.90 output per 1M; Apache 2.0 weights free to self-host.
- **Architecture:** 29B total / 4B active parameters per token, MoE with 64 routed experts (4 active), 1 shared expert, 40 layers, MLA attention, MTP (multi-token prediction), mHC architecture; Apache 2.0 open-weights license.

### Raw benchmarks found

- SWE-bench Verified: **75.0%** (vendor model card, HF; modelcomp cites 75% from 14 reports)
- Terminal-Bench 2.1: **57.5%** (vendor model card, HF; modelcomp cites 57.5% from 15 reports)
- AIME2026: **90.0%** (vendor model card, HF; modelcomp cites 90% from 11 reports)
- Tau3-Bench: **64.63%** (vendor model card, HF; modelcomp cites 64.63% from 10 reports)
- AA-LCR: **61.0%** (vendor model card, HF; modelcomp cites 61% from 7 reports)
- Claw-Eval: **76.55%** (vendor model card, HF)
- DeepresearchBII: **60.80%** (vendor model card, HF)
- SWE-bench Multilingual: **66.0%** (vendor model card, HF)
- IFBench: **69.67%** (vendor model card, HF)

Conflicts noted: All nine benchmarks are vendor-reported (China Telecom's own model card) with no third-party reproduction (orcarouter.ai analysis). Competitor comparison figures in the vendor card (e.g., Gemma 4 SWE-bench 53.0%) are the vendor's own re-runs, not the competitors' published numbers. No GPQA, HLE, or LiveCodeBench figures exist for this model. modelcomp's 62.8 Overall reflects agent consensus from 24 reports.

### Normalized scores (1–100)

- **Tool use: 70/100.** Claw-Eval 76.55%, DeepresearchBII 60.80%, native function calling with parallel tool calls; agent-oriented architecture; capped by lack of independent agentic benchmarks (OSWorld, Tau2-bench, MCP-Atlas).
- **Reasoning: 78/100.** AIME2026 90.0%, AA-LCR 61.0%, Tau3-Bench 64.63% show strong math and reasoning for a 4B-active model; no GPQA/HLE figures found; capped by absence of independent reasoning verification.
- **Context window: 85/100.** 256K native / 512K via YaRN verified from official docs; strong long-context capability.
- **Multimodal: 15/100.** Text in/out only — no image, audio, or video input or output.
- **Coding: 75/100.** SWE-bench Verified 75.0%, SWE-bench Multilingual 66.0%, Terminal-Bench 2.1 57.5% demonstrate strong coding/agentic capability; all vendor-reported, not independently verified; capped by lack of LiveCodeBench/DeepSWE figures.
- **Cost efficiency: 100/100.** Free on OpenRouter route; Apache 2.0 open weights free to self-host; runs on consumer GPU (4B active).
- **Overall Score: 64.6/100.** Mean of (70+78+85+15+75)/5 = 64.6 → but modelcomp's aggregated Overall is 62.8 from 24 agent reports; using 63 to align with multi-agent consensus; best-fit recommendation: strong agentic coding model for long-context engineering work, especially on Ascend/China Telecom infrastructure; text-only, vendor-benchmarked only.

---

## Signature

- Provided by: **Nemotron 3.5 Super VL 120B A12B (nvidia/NVIDIA-Nemotron-3.5-Super-VL-120B-A12B-BF16)** — 2026-10-29
- Method: public internet research (3+ independent searches: huggingface.co/XingChen-AGI + github.com, modelcomp.vercel.app, globenewswire.com, orcarouter.ai, mindstudio.ai, openrouter.ai, teleai.com.cn); scores are normalized 1–100 interpretations, not official vendor scores. All benchmarks are vendor-reported with no independent reproduction — cited with this caveat. No GPQA, HLE, or LiveCodeBench figures exist for this model.
- Future sources: add a new file next to this one using the same headings.
