# Qwen3.8-27B — findings by GPT 6 Sol

- Source: Qwen (`Qwen/Qwen3.8-27B`)
- Date: 2026-10-13 (UTC)
- Overview and scoring methodology: `../../model-comparison.md`
- Cross-model signed log: `../../model-findings.md`

## Model card

- **Name:** Qwen3.8-27B
- **Short description:** Alibaba/Qwen's August 2026 dense 27B open-weight visual reasoning model for local multimodal coding and agent tasks; distinct from proprietary Qwen3.8-Max and Flash-Next ([official checkpoint/model card](https://huggingface.co/Qwen/Qwen3.8-27B)).
- **Provider / access:** `Qwen/Qwen3.8-27B` on Hugging Face, deployable with vLLM/SGLang **Chat Completions**; [Vals](https://www.vals.ai/models/alibaba_qwen3.8-27b) tested Alibaba API route `alibaba/qwen3.8-27b`. The HF card says a production Qwen Cloud endpoint with *more* features and default 1M was planned; do not claim its feature rollout was independently verified.
- **Release / knowledge:** August 14, 2026 per [Vals](https://www.vals.ai/models/alibaba_qwen3.8-27b); exact training cutoff not given in the official [card](https://huggingface.co/Qwen/Qwen3.8-27B).
- **IDs:** `Qwen/Qwen3.8-27B`; `qwen-3.8-27b` slug treats **27B as a parameter-size suffix**, not a version component. No verified free Zen ID for this checkpoint.
- **Context window:** **262,144 native**, extensible toward **1,000,000 with YaRN** by configuration ([HF card](https://huggingface.co/Qwen/Qwen3.8-27B)); [Vals](https://www.vals.ai/models/alibaba_qwen3.8-27b) measured 262K context and 65,536 max output on its tested provider. YaRN extension is not native 1M retrieval quality.
- **Modalities:** Text/image/video input → text output, controllable thinking and function calls ([HF card](https://huggingface.co/Qwen/Qwen3.8-27B)); no native audio generation or speech understanding claimed.
- **Pricing (as of 2026-10-13):** Weights are downloadable under [Apache-2.0](https://huggingface.co/Qwen/Qwen3.8-27B), self-host compute still costs money. [Vals](https://www.vals.ai/models/alibaba_qwen3.8-27b) lists **$0.50 input / $3.00 output per 1M** for its hosted route; prices and context differ by provider.
- **Architecture:** [Official card](https://huggingface.co/Qwen/Qwen3.8-27B) describes **27B dense** language model with vision encoder, mixed gated DeltaNet/attention layers and 262K native context; not a sparse 6B-active Flash model.

### Raw benchmarks found

Read [Qwen's 27B-specific checkpoint evaluation column](https://huggingface.co/Qwen/Qwen3.8-27B) and independent [Vals xhigh](https://www.vals.ai/models/alibaba_qwen3.8-27b). Qwen's SWE-Pro test uses its modified Claude Code harness and 256K context, Vals tests different versions/settings; SWE-bench Pro and Verified must remain distinct. No AA listing for this exact checkpoint was found at the guessed path.

Agent / tool use:

- [Qwen TB2.1 Terminus **73.0%**, CoWorkBench **70.7%**, Agents' Last Exam **20.4% pass@1 / 42.9 score**, OSWorld-Verified **84.3%**, WebArena-Verified **64.8%**, AndroidWorld **81.9%**, ClawEval-MM **57.4% pass@3 / 56.9 average**](https://huggingface.co/Qwen/Qwen3.8-27B). ClawEval pass@3 is not pass@1.
- [Vals TB2.1 **58.43% ±5.25**, Code Migration **14.16% ±4.19**, Finance Agent v2 **48.55% ±2.10**, Harvey Legal Agent **11.25% ±2.42**, ProgramBench **0.00%**](https://www.vals.ai/models/alibaba_qwen3.8-27b); the vendor/independent TB gap and professional limits require deployment validation.

Reasoning / knowledge:

- [Qwen GPQA Diamond **89.2%**, HLE **30.8%**, IFBench **79.5%**, LiveCodeBench v6 **90.3%**](https://huggingface.co/Qwen/Qwen3.8-27B). [Vals GPQA **88.89% ±1.58**, MMLU Pro **84.34% ±0.36**, SAGE **52.40% ±3.47**, ProofBench v1.1 **16.00% ±3.69**](https://www.vals.ai/models/alibaba_qwen3.8-27b). No exact-model ARC-AGI-2 figure verified here.

Coding:

- [Qwen SWE-bench Pro **61.7%** (modified dataset/harness), DeepSWE 1.1 **42.2%**, QwenSWEBench internal **79.0%**, NL2Repo **42.3%**](https://huggingface.co/Qwen/Qwen3.8-27B); [Vals SWE-bench **86.00% ±1.55**, LiveCodeBench **84.00% ±1.03**, Vibe Code v1.1 **64.85% ±4.83**](https://www.vals.ai/models/alibaba_qwen3.8-27b). Vals TB2.1 58.4% tempers vendor TB2.1 73%.

Long context / vision:

- [262K native / up to 1M YaRN](https://huggingface.co/Qwen/Qwen3.8-27B) with **no verified full-1M MRCR/GraphWalks retrieval result** for this exact checkpoint; static YaRN can hurt short prompts according to Qwen's card.
- [Qwen MathVision **90.0% without / 94.6% with code interpreter**, CharXiv **83.7% without / 90.2% with CI**, SWE-MM **38.6%**](https://huggingface.co/Qwen/Qwen3.8-27B); [Vals MMMU Pro **83.93% ±0.88**](https://www.vals.ai/models/alibaba_qwen3.8-27b). Hosted video capability depends on encoder/frame settings.

### Normalized scores (1–100)

- **Tool use: 78/100.** Vendor OSWorld-Verified 84.3% and CoWork 70.7% are strong, but Vals TB2.1 58.4%, migration 14.2% and ProgramBench 0% cap broad autonomy.
- **Reasoning: 82/100.** GPQA ~89%, HLE 30.8% and SAGE 52.4% support general reasoning; ProofBench 16% and missing independent abstract tests limit extrapolation.
- **Context window: 88/100.** 262K native / 65K hosted output; YaRN 1M is conditional and unverified for retrieval quality.
- **Multimodal: 89/100.** Image/video input with strong MathVision/CharXiv and Vals MMMU 83.9%, no native audio.
- **Coding: 82/100.** SWE-Pro 61.7% vendor, SWE 86% Vals, DeepSWE 42.2%; Vals terminal and long-agent tasks are weaker.
- **Cost efficiency: 83/100.** Apache-2.0 weights allow self-hosting, while observed hosted $0.50/$3 is moderate; self-host inference is not costless.
- **Overall Score: 84/100.** (78 + 82 + 88 + 89 + 82) / 5 = 83.8, half-up 84; suitable for local visual coding and bounded agents when hosted context and task-harness differences are checked.

---

## Signature

- Provided by: **GPT 6 Sol (openai/gpt-6-sol)** — 2026-10-13
- Method: Fresh Qwen official checkpoint card compared with independent Vals, versioned harnesses explicitly labelled; normalized scores are interpretations, not vendor scores.
- Future sources: add a new file next to this one, e.g. `GPT_5.md`, using the same headings.
