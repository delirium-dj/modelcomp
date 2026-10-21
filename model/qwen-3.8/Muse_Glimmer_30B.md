# Qwen 3.8 — findings by Muse Glimmer 30B

- Source: Alibaba/Qwen 3.8
- Date: 2026-10-20
- Overview and scoring methodology: `../../model-comparison.md`
- Cross-model signed log: `../../model-findings.md`

## Model card

- **Name:** Qwen 3.8
- **Short description:** Alibaba’s Qwen3.8 27B dense open-weights model with native vision-language understanding for self-hosted agents. Strong agentic coding and long-context capability in a single-GPU-class footprint.
- **Provider / access:** Alibaba Cloud Qwen API / Hugging Face `Qwen/Qwen3.8-27B`, Chat Completions API with thinking control.
- **Release / knowledge:** No verified public release date found; knowledge cutoff not published.
- **IDs:** `opencode/qwen-3.8`
- **Context window:** 262K native, extensible to 1M via YaRN; 33K output reported. Verified via Hugging Face model card.
- **Modalities:** Text, image, video in; text out; reasoning with flexible thinking control; tool calls via agentic scaffolding.
- **Pricing (as of 2026-10-20):** API ~$0.42/$3.00 per 1M in/out; self-hosted $0 Apache 2.0. Free tier not documented.
- **Architecture:** 27B parameters dense, 64 layers, Apache 2.0 open weights. MTP trained.

### Raw benchmarks found

> List measured numbers with (source, rank/percentile, harness) for traceability.

Agent / tool use:

- Terminal Bench 2.1 (Terminus): 73.0 (Hugging Face model card, Claude Code harness)
- OSWorld-Verified: 84.3 (Hugging Face model card)
- WebArena-Verified: 64.8 (Hugging Face model card, OSWorld scaffold)
- AndroidWorld: 81.9 (Hugging Face model card)
- CoWorkBench: 70.7 (Hugging Face model card, in-house)
- JobBench: 33.4 (Hugging Face model card)

Reasoning / knowledge:

- GPQA Diamond: 89.2% (Hugging Face model card, evaluation results)
- Humanity’s Last Exam (HLE): 30.8% (Hugging Face model card, judged by GPT-4o)
- IFBench instruction following: 79.5 (Hugging Face model card)
- Agents’ Last Exam Pass@1 Score: 42.9 (Hugging Face model card)

Coding:

- SWE-bench Pro: 61.7% (Hugging Face model card, Claude Code harness temp=1.0 top_p=0.95)
- LiveCodeBench v6: 90.3% (Hugging Face model card)
- DeepSWE 1.1: 42.2 (Hugging Face model card, Claude Code harness)
- QwenSWEBench: 79.0 (Hugging Face model card, avg@3)
- NL2Repo-Bench: 42.3 (Hugging Face model card)

Long context:

- Context length 262,144 natively, extensible to 1,000,000 tokens via YaRN (Hugging Face model card)

Multimodal:

- RecreationBench: 47.1 (Hugging Face model card)
- ClawEval-MM Pass@3: 57.4, average 60.1 (Hugging Face model card)
- SWE-MM: 38.6 (Hugging Face model card, public dev split)
- Vision2Web: 62.9 (Hugging Face model card, Claude Code harness)
- MathVision without CI: 90.0, with CI: 94.6 (Hugging Face model card)
- BabyVision without CI: 65.7, with CI: 85.6 (Hugging Face model card)
- OmniDocBench 1.5: 91.1 (Hugging Face model card)
- RealWorldQA: 85.9 (Hugging Face model card)

### Normalized scores (1–100)

- **Tool use: 82/100.** Terminal Bench 73.0 and OSWorld 84.3 show solid agentic tooling; WebArena 64.8 caps the score.
- **Reasoning: 78/100.** GPQA Diamond 89.2 and IFBench 79.5 support strong reasoning; HLE 30.8 limits the ceiling.
- **Context window: 93/100.** 262K native with 1M YaRN extension places it in top tier for open weights; output limit 33K noted.
- **Multimodal: 86/100.** Native image/video in with MathVision 94.6 CI and OmniDocBench 91.1; RecreationBench 47.1 caps.
- **Coding: 86/100.** LiveCodeBench 90.3 and QwenSWEBench 79.0 offset SWE-bench Pro 61.7 and DeepSWE 42.2.
- **Cost efficiency: 82/100.** $0.42/$3.00 per 1M API is competitive; $0 self-host Apache 2.0 boosts efficiency.
- **Overall Score: 85/100.** Mean of Tool + Reasoning + Context + Multimodal + Coding. Best fit: capable open-weights multimodal coder for self-hosted agentic workloads.

---

## Signature

- Provided by: **Muse Glimmer 30B (meta/muse-glimmer-30b)** — 2026-10-20
- Method: public internet research; scores are normalized 1–100 interpretations, not official vendor scores.
- Future sources: add a new file next to this one, e.g. `GPT_5.md`, using the same headings.
