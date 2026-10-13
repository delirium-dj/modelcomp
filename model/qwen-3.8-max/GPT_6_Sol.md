# Qwen3.8-Max — findings by GPT 6 Sol

- Source: Alibaba Qwen (`qwen3.8-max`, hosted multimodal service; related open text checkpoint `Qwen3.8-2.4T-A95B`)
- Date: 2026-10-12 (UTC)
- Overview and scoring methodology: `../../model-comparison.md`
- Cross-model signed log: `../../model-findings.md`

## Model card

- **Name:** Qwen3.8-Max
- **Short description:** Alibaba's hosted multimodal Max model for code, reasoning and visual agents. [Qwen's own weights card](https://huggingface.co/Qwen/Qwen3.8-2.4T-A95B) calls the hosted Max version *based on* its 2.4T/95B open checkpoint **with additional capabilities**; do not equate hosted image/video metrics or dated 0902 snapshot with the text-only downloadable checkpoint.
- **Provider / access:** [QwenCloud](https://www.qwencloud.com/models/qwen3.8-max) OpenAI-compatible Chat Completions `qwen3.8-max` (regional endpoint documented on page) and built-in tools via Responses; dated [OpenRouter `qwen/qwen3.8-max-0902`](https://openrouter.ai/qwen/qwen3.8-max) through Chat Completions. No confirmed `opencode/qwen-3.8-max` current route in the consulted provider catalog. Text-only self-host weights: [Qwen/Qwen3.8-2.4T-A95B](https://huggingface.co/Qwen/Qwen3.8-2.4T-A95B).
- **Release / knowledge:** Qwen's open-model generation and Vals hosted model date August 3, 2026 ([Vals](https://www.vals.ai/models/alibaba_qwen3.8-max)); AA measures the explicitly dated hosted **0902** snapshot released September 2 ([AA](https://artificialanalysis.ai/models/qwen3-8-max)). No verified exact-model knowledge cutoff found.
- **IDs:** Hosted `qwen3.8-max`, dated provider route `qwen/qwen3.8-max-0902`, text-only open weights `Qwen/Qwen3.8-2.4T-A95B`; overlapping lineage **does not establish byte-identical weights** between variants. Scores below identify which was measured.
- **Context window:** Hosted [QwenCloud](https://www.qwencloud.com/models/qwen3.8-max) 1M combined with max input **991K** (thinking **983K**), max output **131K**, max reasoning **262K**; [HF checkpoint](https://huggingface.co/Qwen/Qwen3.8-2.4T-A95B) native **262,144**, extendable to **1,010,000** with deployment configuration. AA dated snapshot reports ~984K, consistent with reserved output/reasoning rather than a separate 2M model.
- **Modalities:** Hosted Max accepts text/image/video → text, PDF parsing/tool workflows ([QwenCloud](https://www.qwencloud.com/models/qwen3.8-max)); **downloadable 2.4T weights are text-only, thinking-required** ([HF card](https://huggingface.co/Qwen/Qwen3.8-2.4T-A95B)). Native audio and non-text output not verified. Hosted function calling and structured output are advertised.
- **Pricing (as of 2026-10-12):** [QwenCloud](https://www.qwencloud.com/models/qwen3.8-max) **$2 input / $6 output / $0.25 implicit cache-hit** per 1M (explicit cache read $0.17, creation $2.50). A one-time cloud credit or free quota is not a permanent free API tier; no Zen Free ID verified.
- **Architecture:** Open related checkpoint 2.4T total / 95B active MoE, hybrid Gated DeltaNet / attention, released under the **Qwen3.8-Max license** (not automatically Apache/MIT), per [weights card](https://huggingface.co/Qwen/Qwen3.8-2.4T-A95B). Hosted extras/weight snapshot need separate verification.

### Raw benchmarks found

Compared [Qwen's primary checkpoint/model comparison table](https://huggingface.co/Qwen/Qwen3.8-2.4T-A95B), [QwenCloud hosted specs](https://www.qwencloud.com/models/qwen3.8-max) and independent [Vals](https://www.vals.ai/models/alibaba_qwen3.8-max), [AA dated 0902](https://artificialanalysis.ai/models/qwen3-8-max) and [Proximal](https://www.frontierswe.com/). [BenchLM](https://benchlm.ai/models/qwen3-8-max) preserves a linked index of underlying sources, not an independent experiment. Vendor's table labels the hosted Max but HF download is explicitly text-only.

Agent / tool use:

- [Qwen release table hosted TB2.1 **86.6%**](https://huggingface.co/Qwen/Qwen3.8-2.4T-A95B) with Claude Code harness, [Vals hosted **67.4%** TB2.1](https://www.vals.ai/models/alibaba_qwen3.8-max) and TB4.0 **34.34%**. Different harnesses/timeouts strongly affect coding-agent results.
- [Qwen hosted Toolathlon-Verified **72.5%**, CoWorkBench **74.8%**, AutomationBench **27.3%**, OSWorld-Verified **86.1%**, Agents' Last Exam **27.0% pass / 52.4 score**](https://huggingface.co/Qwen/Qwen3.8-2.4T-A95B). [Vals Index **48.27% ±1.34**](https://www.vals.ai/models/alibaba_qwen3.8-max), CyberBench **28.57%**, Harvey LAB **10.42%**; OSWorld 2.0 **19.4%** ([sourced vendor index](https://benchlm.ai/models/qwen3-8-max)) is a distinct benchmark from OSWorld-Verified.
- Tau3-Banking, Claw-Eval and GDPval-AA exact hosted version: no verified public score found; don't substitute τ² or a rival's GDPval figure.

Reasoning / knowledge:

- [Qwen release hosted GPQA Diamond **92.6%**, HLE **43.6% without tools / 56.2% with tools**, IFBench **82.8%**](https://huggingface.co/Qwen/Qwen3.8-2.4T-A95B); independent [Vals GPQA **93.69%**, MMLU-Pro **88.60%**](https://www.vals.ai/models/alibaba_qwen3.8-max).
- [AA dated 0902 Intelligence Index **45**](https://artificialanalysis.ai/models/qwen3-8-max) under later methodology; [Vals ProofBench **58.00%**, SAGE **51.25%**](https://www.vals.ai/models/alibaba_qwen3.8-max) show uneven specialist reasoning. No exact Max CritPt result verified.

Coding:

- [Qwen hosted SWE-bench Pro **67.7%**, DeepSWE **56.6%**, NL2Repo **55.9%**, TB2.1 **86.6%**](https://huggingface.co/Qwen/Qwen3.8-2.4T-A95B). [Vals SWE-bench **85.60%**, LiveCodeBench **87.85%**, Vibe Code Bench **64.70%**](https://www.vals.ai/models/alibaba_qwen3.8-max).
- Vendor-reported [older FrontierSWE **73.5%** in Claude Code](https://huggingface.co/Qwen/Qwen3.8-2.4T-A95B) is **not** the [Proximal FrontierSWE v2 **15.8%**](https://www.frontierswe.com/) for the earlier hosted Max, with harder tasks and a different harness; Proximal's dated **0902** snapshot is **17.8%**. Keep version/ID labels attached.

Long context / multimodal:

- [Qwen release MRCR v2 eight-needle **92.9% at 256K**](https://huggingface.co/Qwen/Qwen3.8-2.4T-A95B), **not** an established 512K–1M score; no exact hosted full-window ≥98% figure found.
- Hosted [MMMU-Pro **82.3%**, Video-MME with subtitles **90.4%**, VideoMMMU **88.7%**, OmniDocBench 1.5 **92.1%**](https://benchlm.ai/models/qwen3-8-max); independent [Vals MMMU-Pro **88.03%**](https://www.vals.ai/models/alibaba_qwen3.8-max). These vision/video scores cannot be applied to text-only released weights.

### Normalized scores (1–100)

- **Tool use: 83/100.** TB2.1 67–87% and Toolathlon 72.5% show substantial agency; OSWorld version gaps, CyberBench 28.57% and automation 27.3% cap general reliability.
- **Reasoning: 88/100.** GPQA ~93%, HLE 43.6% without tools and AA dated Index 45 favor capable reasoning; ProofBench 58% and missing rigorous CritPt temper upper tiers.
- **Context window: 94/100.** Hosted 1M combined and text-only weights extendable near 1M reach top capacity band; 256K MRCR 92.9% falls short of qualifying near-1M retrieval.
- **Multimodal: 81/100.** Hosted image/video/document processing is strong, but the released weights are text-only and audio/non-text output unsupported; score applies to hosted Max.
- **Coding: 84/100.** SWE-Pro 67.7%, LiveCodeBench 87.85% and good TB2.1 contrast with DeepSWE 56.6% and independent FrontierSWE v2 15.8–17.8%.
- **Cost efficiency: 76/100.** $2/$6 is fair for hosted multimodal, yet high agent token consumption (~190M AA evaluation output) and paid caching limit real-work savings; free credits aren't a perpetual free route.
- **Overall Score: 86/100.** (83 + 88 + 94 + 81 + 84) / 5 = 86.0; capable hosted visual and coding model, with dated 0902 and text-only open checkpoint clearly distinguished.

---

## Signature

- Provided by: **GPT 6 Sol (openai/gpt-6-sol)** — 2026-10-12
- Method: Fresh QwenCloud official route and HF checkpoint card cross-checked with independent Vals, AA, Proximal and provider listings; scores are normalized interpretations, not vendor scores.
- Future sources: add a new file next to this one, e.g. `GPT_5.md`, using the same headings.
