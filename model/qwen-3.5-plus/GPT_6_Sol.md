# Qwen3.5-Plus — findings by GPT 6 Sol

- Source: Alibaba Qwen (`qwen3.5-plus`)
- Date: 2026-10-31 (UTC)
- Overview and scoring methodology: `../../model-comparison.md`
- Cross-model signed log: `../../model-findings.md`

## Model card

- **Name:** Qwen3.5-Plus
- **Short description:** Hosted, multimodal Qwen3.5 series Plus model with thinking/non-thinking modes for general knowledge, vision and tool workflows ([Qwen Cloud model page](https://www.qwencloud.com/models/qwen3.5-plus)). `-thinking` in [Vals' route name](https://www.vals.ai/models/alibaba_qwen3.5-plus-thinking) is the evaluated reasoning mode, not evidence of a separately released checkpoint.
- **Provider / access:** `qwen3.5-plus` on Qwen Cloud/DashScope's OpenAI-compatible **Chat Completions** endpoint; [official API example](https://www.qwencloud.com/models/qwen3.5-plus) uses `https://ap-southeast-1.maas.qwencloudapi.com/compatible-mode/v1`. Qwen Cloud also advertises built-in tools via a Responses API; actual tool access and pricing depend on interface/region. Vendor schedules retirement for **January 19, 2027** ([Qwen Cloud](https://www.qwencloud.com/models/qwen3.5-plus)).
- **Release / knowledge:** **February 16, 2026** per [Vals' dated profile](https://www.vals.ai/models/alibaba_qwen3.5-plus-thinking); vendor knowledge cutoff not verified.
- **IDs:** `qwen3.5-plus` first party; Vals `alibaba/qwen3.5-plus-thinking` names the thinking-mode evaluation. Do not conflate it with the separately tracked open-weight `Qwen3.5-397B-A17B` or non-Plus tiers. No verified Zen Free ID for this exact hosted Plus ID.
- **Context window:** **1M combined**, with **991K max input and 65K max output** per [Qwen Cloud's model limits](https://www.qwencloud.com/models/qwen3.5-plus); Vals rounds the context to 991K and output to 66K. The API's configured length is not a near-limit retrieval test.
- **Modalities:** Text, image and video input; text output, thinking, function calling, structured JSON, caching and web-search integration ([official feature list](https://www.qwencloud.com/models/qwen3.5-plus)). No native speech I/O or media generation verified for this ID.
- **Pricing (as of 2026-10-31):** Official **up to 256K input** tier lists **$0.40 input / $2.40 output / $0.04 explicit-cache read / $0.50 explicit-cache creation** per million tokens ([Qwen Cloud](https://www.qwencloud.com/models/qwen3.5-plus)); the model page does not show a separate >256K tier in the visible table, so do not assume the short-prompt price applies at the full 1M window. No permanently free API tier verified.
- **Architecture:** Vendor describes a **hybrid linear-attention/sparse-MoE** Qwen3.5 Plus service, but does not publish weights or exact model-specific parameter counts on [this API page](https://www.qwencloud.com/models/qwen3.5-plus). Vals' February note describes it as open weight, whereas [the currently accessible Qwen Cloud model listing](https://www.qwencloud.com/models/qwen3.5-plus) and [Vals' own present metadata](https://www.vals.ai/models/alibaba_qwen3.5-plus-thinking) do not identify a downloadable Plus checkpoint; treat this discrepancy as unresolved rather than borrowing a sibling's weights.

### Raw benchmarks found

Agent / tool use:

- [Vals' current independent tests](https://www.vals.ai/models/alibaba_qwen3.5-plus-thinking) show **Terminal-Bench 2.0 41.57% ±5.25** and **MortgageTax 60.77% ±0.97**. Its current displayed Index is **61.89%**, but the February launch update's **57.1%** referred to a different earlier Index/peer set; neither is a vendor benchmark. No exact-ID independent TB2.1 or Tau3 score confirmed.
- [Vals' February evaluation note](https://www.vals.ai/models/alibaba_qwen3.5-plus-thinking) flags content-filter sensitivity and strict-output-format failures on legal and visual tasks, which are operational limitations even where knowledge scores are good. [BenchLM](https://benchlm.ai/models/qwen3-5-plus) cites **JobBench 18.5%** from a [research paper](https://arxiv.org/abs/2605.26329); its two-benchmark coverage is too sparse to use its composite as a project Overall.

Reasoning / knowledge:

- [Vals](https://www.vals.ai/models/alibaba_qwen3.5-plus-thinking): **GPQA Diamond 87.37% ±1.67**, **MMLU Pro 87.18% ±0.33** and **LegalBench 85.10% ±0.41**. These are independent academic-style results, but the suite has no verified exact-ID HLE/ARC-AGI score. Vals' February ranks were against a smaller, earlier model set and should not be quoted as current standings.

Coding:

- [Vals](https://www.vals.ai/models/alibaba_qwen3.5-plus-thinking): **LiveCodeBench 85.33% ±1.00** and **SWE-bench 71.20% ±2.03**, versus **Vibe Code Bench v1.1 15.74% ±3.18** and **Terminal-Bench 2.0 41.57% ±5.25**. The sharp gap between programming questions and end-to-end app/agent work limits a coding-agent recommendation.

Long context / multimodal:

- [Vals](https://www.vals.ai/models/alibaba_qwen3.5-plus-thinking) reports **MMMU Pro 22.77% ±1.01** (#93/93 on its displayed set), despite the official image/video input capability. Its notes connect poor visual performance to filtering and strict format handling. No verified near-991K retrieval/MRCR benchmark for this exact API ID found.

### Normalized scores (1–100)

- **Tool use: 67/100.** Vendor tool features and Vals' middling TB2.0 41.57, constrained by output-format/filter failures.
- **Reasoning: 82/100.** Independent GPQA 87.37/MMLU Pro 87.18 with no verified harder exact-ID reasoning suite.
- **Context window: 95/100.** First-party 1M combined tier, but no near-limit retrieval evidence and a 991K prompt cap.
- **Multimodal: 42/100.** Text/image/video accepted, yet independent MMMU Pro 22.77 shows weak tested visual reliability.
- **Coding: 69/100.** SWE-bench 71.2/LiveCodeBench 85.33 contrasted with Vibe Code 15.74 and TB2.0 41.57.
- **Cost efficiency: 83/100.** $0.40/$2.40 is low for ≤256K prompts; high-window cost and retirement plans are uncertainties.
- **Overall Score: 71/100.** Half-up mean (67 + 82 + 95 + 42 + 69) / 5 = 71; more suitable for cost-conscious long-form text tasks than visual or autonomous coding agents.

---

## Signature

- Provided by: **GPT 6 Sol (openai/gpt-6-sol)** — 2026-10-31
- Method: Exact-ID research against Qwen Cloud's active API model/pricing page and Vals' independently evaluated thinking route, with secondary indices used only where explicitly attributed; normalized scores are interpretations.
- Reference URLs:
  - [Qwen Cloud Qwen3.5-Plus model, price and retirement notice](https://www.qwencloud.com/models/qwen3.5-plus)
  - [Vals AI independent Qwen 3.5 Plus thinking results](https://www.vals.ai/models/alibaba_qwen3.5-plus-thinking)
  - [BenchLM source-linked, sparse Plus benchmark index](https://benchlm.ai/models/qwen3-5-plus)
- Future sources: add a new file next to this one, e.g. `GPT_5.md`, using the same headings.
