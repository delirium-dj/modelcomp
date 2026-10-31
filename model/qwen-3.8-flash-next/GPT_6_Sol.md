# Qwen3.8-Flash-Next — findings by GPT 6 Sol

- Source: Alibaba Qwen (`Qwen/Qwen3.8-Flash-Next`)
- Date: 2026-10-31 (UTC)
- Overview and scoring methodology: `../../model-comparison.md`
- Cross-model signed log: `../../model-findings.md`

## Model card

- **Name:** Qwen3.8-Flash-Next
- **Short description:** Experimental, open-weight multimodal MoE checkpoint showcasing Qwen's sparse-attention architecture. Qwen calls production **Qwen3.8-Flash** an *official version based on* Flash-Next with added 1M context and built-in tools, not the same published experimental checkpoint ([Qwen's own card](https://huggingface.co/Qwen/Qwen3.8-Flash-Next)). Do not transfer production Flash's hosted specifications to Next.
- **Provider / access:** Open weights `Qwen/Qwen3.8-Flash-Next` on [Hugging Face](https://huggingface.co/Qwen/Qwen3.8-Flash-Next), self-hosted OpenAI-compatible Chat Completions via vLLM/SGLang; the [card's API example](https://huggingface.co/Qwen/Qwen3.8-Flash-Next) uses this exact ID and mentions Qwen Cloud, but the [currently linked Qwen Cloud catalog page for Next](https://www.qwencloud.com/models/qwen3.8-flash-next) is not available. Host availability and pricing require live confirmation.
- **Release / knowledge:** **August 26, 2026** on [Artificial Analysis's profile](https://artificialanalysis.ai/models/qwen3-8-flash-next) and the Qwen release collection; publicly dated training knowledge cutoff not verified.
- **IDs:** `Qwen/Qwen3.8-Flash-Next` for weights/self-hosting; not `qwen3.8-flash` (production) or a separate thinking-effort checkpoint. No verified OpenCode Zen Free ID for this exact preview.
- **Context window:** **262,144 natively**; 1,000,000 is possible only with **YaRN/RoPE scaling and host configuration** ([Qwen card](https://huggingface.co/Qwen/Qwen3.8-Flash-Next)). [Artificial Analysis](https://artificialanalysis.ai/models/qwen3-8-flash-next) lists the native 256K tier. Production Flash's default 1M must not be assumed here.
- **Modalities:** Text/image/video input, text output, tool-use templates and configurable thinking/non-thinking modes ([official usage examples](https://huggingface.co/Qwen/Qwen3.8-Flash-Next)). Video frame sampling varies by inference engine; no native audio or non-text generation verified.
- **Pricing (as of 2026-10-31):** Open weights with self-hosting costs. [Artificial Analysis](https://artificialanalysis.ai/models/qwen3-8-flash-next) records **$0.15 input / $0.47 output per million** on a measured Alibaba route and a cache discount, but no accessible current first-party *Next-specific* tariff was verified. [Qwen Cloud's $0.15/$0.47 production Flash listing](https://www.qwencloud.com/models/qwen3.8-flash) describes a different hosted version; it cannot validate a new Next quote. No stable free production API established.
- **Architecture:** Card specifies **125B language MoE with 6B active**, plus **51B n-gram embeddings and 4B MTP** (roughly 180B all-in); hybrid Gated DeltaNet and Qwen Sparse Attention, 512 experts. **Qwen Community License 1.0**, not Apache/MIT ([checkpoint](https://huggingface.co/Qwen/Qwen3.8-Flash-Next)).

### Raw benchmarks found

Agent / tool use:

- [Qwen's test table](https://huggingface.co/Qwen/Qwen3.8-Flash-Next) reports **Toolathlon Verified pass@1 73.5%**, **CoWorkBench 73.9%** (in-house), **JobBench 55.7%**, **Agents' Last Exam pass@1 24.3% / aggregate score 51.2%**, **ClawEval-MM pass@3 64.4% / mean 60.4%**, **AndroidWorld 84.5%** and **OSWorld 2.0 full reward 19.4% / partial 52.3%**. Different scoring conventions are kept separate. [BenchLM's source-linked digest](https://benchlm.ai/models/qwen3-8-flash-next) reproduces these card values; it is not an independent rerun.
- BenchLM attributes **Terminal-Bench 2.1 86.1%** and **Tau3-Banking 45.4%** to [Artificial Analysis's model/evaluation pages](https://artificialanalysis.ai/models/qwen3-8-flash-next), but AA's **current** profile has **N/A** rather than a maintained Intelligence Index and does not expose a current exact-model benchmark table. These historical secondary figures are provisional and do not override the card/harness caveats.

Reasoning / knowledge:

- [Vendor-run GPQA Diamond 91.7% and HLE 35.9%](https://huggingface.co/Qwen/Qwen3.8-Flash-Next), HLE graded by GPT-4o per the card; [BenchLM](https://benchlm.ai/models/qwen3-8-flash-next) links a historically recorded AA GPQA **92.3%** and AA HLE **38.0%**, broadly consistent but not a current AA v5 Intelligence Index. BenchLM's historical AA Omniscience accuracy **23.5%** / hallucination **46.8%** flags factual-reliability weakness, pending direct current-profile verification.

Coding:

- [Qwen card](https://huggingface.co/Qwen/Qwen3.8-Flash-Next): **SWE-bench Pro 62.5%**, **SWE-bench Multilingual 81.0%**, **DeepSWE 1.1 58.7%**, **NL2Repo 48.1%**, **LiveCodeBench v6 91.9%**. DeepSWE selects the *best* of two agent harnesses; SWE-bench Pro uses a corrected task set and Claude Code harness. These are vendor comparisons, not independently replicated with identical settings.
- The [BenchLM digest](https://benchlm.ai/models/qwen3-8-flash-next) additionally cites an older AA SciCode **50.6%**; its link goes to [AA's now-unpopulated current profile](https://artificialanalysis.ai/models/qwen3-8-flash-next), so treat as provisional historical data.

Long context / vision:

- [Vendor vision table](https://huggingface.co/Qwen/Qwen3.8-Flash-Next): **LVBench 76.6%**, **RealWorldQA 88.5%**, **MathVision 90.6% without computational intervention**, **Vision2Web 64.0%**; Qwen reports its own vision-task protocols. [BenchLM](https://benchlm.ai/models/qwen3-8-flash-next) cites a past AA MMMU-Pro **79.8%** but no maintained exact-model value appears on AA's current page. No verified MRCR/retrieval score at either 262K native or YaRN-scaled 1M was found.

### Normalized scores (1–100)

- **Tool use: 79/100.** Vendor Toolathlon 73.5 and CoWork 73.9, constrained by OSWorld 2.0 full success 19.4 and little current independent agent coverage.
- **Reasoning: 83/100.** Card GPQA 91.7/HLE 35.9, but AA index is unavailable and secondary hallucination data cautions against unwarranted confidence.
- **Context window: 75/100.** 262K native tier; 1M is a YaRN deployment extension, not a default or verified retrieval result.
- **Multimodal: 85/100.** Text/image/video input and good vendor vision results, but text-only output, engine-specific video sampling and no audio.
- **Coding: 83/100.** Vendor SWE-bench Pro 62.5 and multilingual 81, discounted for best-of-harness selection and limited independent replication.
- **Cost efficiency: 92/100.** Open weights and historical low measured inference price; present-day Next-specific managed-service availability is uncertain.
- **Overall Score: 81/100.** Half-up mean (79 + 83 + 75 + 85 + 83) / 5 = 81; appropriate for teams able to verify their own open-weight hosting and agent harness.

---

## Signature

- Provided by: **GPT 6 Sol (openai/gpt-6-sol)** — 2026-10-31
- Method: Exact-checkpoint research using the vendor's downloadable model card and methodology, Artificial Analysis's current model status/pricing, and BenchLM's explicitly attributed historical index; no production Flash scores silently transferred.
- Reference URLs:
  - [Qwen Flash-Next weights, architecture, protocols and benchmarks](https://huggingface.co/Qwen/Qwen3.8-Flash-Next)
  - [Artificial Analysis Flash-Next profile](https://artificialanalysis.ai/models/qwen3-8-flash-next)
  - [BenchLM Flash-Next source-linked index](https://benchlm.ai/models/qwen3-8-flash-next)
  - [Qwen Cloud production Flash page (different version)](https://www.qwencloud.com/models/qwen3.8-flash)
- Future sources: add a new file next to this one, e.g. `GPT_5.md`, using the same headings.
