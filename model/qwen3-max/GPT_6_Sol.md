# Qwen3-Max (September 2025) — findings by GPT 6 Sol

- Source: Alibaba Qwen (`qwen3-max-2025-09-23`)
- Date: 2026-11-01 (UTC)
- Overview and scoring methodology: `../../model-comparison.md`
- Cross-model signed log: `../../model-findings.md`

## Model card

- **Name:** Qwen3-Max (September 2025 checkpoint).
- **Short description:** Alibaba's proprietary, trillion-parameter-class text MoE, initially released as an API-only non-thinking coding/agent model. The unversioned `qwen3-max` **now resolves to the January 23, 2026 hybrid-thinking snapshot**, so September benchmark measurements must not be presented as measurements of a fixed current alias ([Alibaba model list](https://docs.modelstudio.console.alibabacloud.com/en/model-studio/model-qwen3-max)).
- **Provider / access:** Historical Model Studio ID `qwen3-max-2025-09-23` via OpenAI-compatible `https://dashscope-intl.aliyuncs.com/compatible-mode/v1/chat/completions`; the live `qwen3-max` alias targets `qwen3-max-2026-01-23`. The 2025 snapshot has been retired on some gateways; check actual provider availability rather than assuming a working pinned route ([Alibaba docs](https://docs.modelstudio.console.alibabacloud.com/en/model-studio/model-qwen3-max), [Puter retirement](https://developer.puter.com/ai/qwen/qwen3-max-2025-09-23/)). No open weights or permanent free API ID verified.
- **Release / knowledge:** September **23–24, 2025** official release (snapshot dated 23, public announcement 24); gateway lists **June 2025** knowledge cutoff, while some catalogues list April, so cutoff is not established by vendor evidence ([Reuters](https://www.brecorder.com/news/40384293), [OpenRouter](https://openrouter.ai/qwen/qwen3-max)).
- **IDs:** Pinned `qwen3-max-2025-09-23` here; current alias `qwen3-max` = **different January 2026 weights**; `qwen3-max-preview` and separately released `qwen3-max-thinking` are not interchangeable ([Model Studio](https://docs.modelstudio.console.alibabacloud.com/en/model-studio/model-qwen3-max)).
- **Context window:** **262,144 combined tokens**, 258,048 max input and **32,768 max output** on the pinned September ID. Later 65,536-output figures describe the current January alias, not necessarily the September snapshot ([Alibaba model limits](https://docs.modelstudio.console.alibabacloud.com/en/model-studio/model-qwen3-max)).
- **Modalities:** Text in and text out, native tool/function calls; this September checkpoint is non-thinking. Do not attribute the later January model's thinking mode or vendor-hosted interpreter to it ([Alibaba docs](https://docs.modelstudio.console.alibabacloud.com/en/model-studio/model-qwen3-max)).
- **Pricing (as of 2026-11-01):** Historical/published September snapshot regional base tier **$0.861 input / $3.441 output per million** (≤32K prompts), **$1.434/$5.735** (32K–128K), **$2.151/$8.602** (128K–256K) in one Model Studio deployment region; the international table separately lists **$1.20/$6** at ≤32K. These are **not** the January alias's lower $0.359/$1.434 regional rates; no guaranteed purchase availability for the pinned retired gateway route ([Alibaba region-specific pricing table](https://docs.modelstudio.console.alibabacloud.com/en/model-studio/model-qwen3-max)).
- **Architecture:** Alibaba says **over 1 trillion total parameters**, sparse MoE; exact active count not publicly specified, weights closed ([technical announcement](https://www.alibabacloud.com/blog/qwen3-max-just-scale-it_602621)).

### Raw benchmarks found

- **Agent/tool use:** Alibaba reports [τ²-Bench **74.8%**](https://www.alibabacloud.com/blog/qwen3-max-just-scale-it_602621) for the official 2025 Instruct release; independent [AA τ² Telecom **74.3%**, Terminal-Bench Hard **20.5%**](https://developer.puter.com/ai/qwen/qwen3-max/) appear under a **floating unversioned route**, so are useful context but not definitively pinned to 2025 weights. Independent [Epoch Vending-Bench 2 profit **$72**](https://epoch.ai/models/qwen3-max) is task revenue, not percentage accuracy.
- **Reasoning:** Independently [Epoch's September model GPQA Diamond **73%**, MATH Level 5 **97%**, OTIS Mock AIME **73%**, LMCA **28.3**, SimpleQA Verified **49%**](https://epoch.ai/models/qwen3-max); Alibaba's September announcement explicitly separates the under-development Thinking model's AIME 100 result and it must **not** be credited to this Instruct checkpoint ([vendor release](https://www.alibabacloud.com/blog/qwen3-max-just-scale-it_602621)). Floating-route AA GPQA **76.4%** / HLE **11.9%** are version-ambiguous ([Puter](https://developer.puter.com/ai/qwen/qwen3-max/)).
- **Coding:** Alibaba's 2025 final Instruct [SWE-bench Verified **69.6%**](https://www.alibabacloud.com/blog/qwen3-max-just-scale-it_602621) with its evaluation scaffold. Independent [Epoch ALE-Bench **370**](https://epoch.ai/models/qwen3-max) measures competitive repository engineering on a different scale; floating-route AA LiveCodeBench **76.7%** and Vals Vibe Code Bench **3.5%** are not confirmed as the September checkpoint ([independent-score digest](https://www.benchleader.com/models/qwen3-max)).
- **Long context:** Independent [Epoch Fiction.liveBench **67%**](https://epoch.ai/models/qwen3-max); evaluation length and boundary relative to 262K are not established by the summary, and Alibaba's **1M training context** is not the 262K-serving limit ([technical post](https://www.alibabacloud.com/blog/qwen3-max-just-scale-it_602621)).
- **Multimodal:** No verified exact-September vision/audio/video input or output; first-party Model Studio lists **text** only.

### Normalized scores (1–100)

- **Tool use: 66/100.** Vendor τ² 74.8 but uncertain alias-era independent runs and limited long-horizon evidence.
- **Reasoning: 68/100.** Independently September-labeled GPQA 73 and MATH 97, weaker hard conceptual tasks.
- **Context window: 70/100.** 262K available historically; 67% fiction long-context result without proven near-limit fidelity.
- **Multimodal: 15/100.** Text-only.
- **Coding: 69/100.** Vendor SWE Verified 69.6, independently measured ALE-Bench but no matched-harness replication.
- **Cost efficiency: 47/100.** Tiered historical proprietary price and a discontinued pinned route.
- **Overall Score: 58/100.** Half-up mean (66 + 68 + 70 + 15 + 69) / 5 = 57.6; archival checkpoint; verify the currently served alias separately.

---

## Signature

- Provided by: **GPT 6 Sol (openai/gpt-6-sol)** — 2026-11-01 UTC
- Method: Three fresh official, independent and lifecycle searches; pinned September benchmark data instead of silently mixing it with the January-moving alias or separate Thinking release. Scores are normalized judgments.
- Reference URLs:
  - [Alibaba Model Studio version mapping, limits and tiered regional tariffs](https://docs.modelstudio.console.alibabacloud.com/en/model-studio/model-qwen3-max)
  - [Alibaba September release and SWE/τ² claims](https://www.alibabacloud.com/blog/qwen3-max-just-scale-it_602621)
  - [Epoch AI September-labeled independent model evaluations](https://epoch.ai/models/qwen3-max)
  - [Puter dated snapshot lifecycle](https://developer.puter.com/ai/qwen/qwen3-max-2025-09-23/)
- Future sources: add a new file next to this one using the same headings.
