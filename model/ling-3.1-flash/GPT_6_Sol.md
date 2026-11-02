# Ling 3.1 Flash — findings by GPT 6 Sol

- Source: inclusionAI (`inclusionAI/Ling-3.1-flash`)
- Date: 2026-11-02 (UTC)
- Overview and scoring methodology: `../../model-comparison.md`
- Cross-model signed log: `../../model-findings.md`

## Model card

- **Name:** Ling 3.1 Flash.
- **Short description:** inclusionAI's open-weight hybrid-linear MoE for text reasoning, coding and agents with long-context support. This is the original `Ling-3.1-flash` checkpoint, **not** the separately published and improved `Ling-3.1-flash-1019` post-training revision ([original model card](https://huggingface.co/inclusionAI/Ling-3.1-flash), [newer checkpoint card](https://huggingface.co/inclusionAI/Ling-3.1-flash-1019)).
- **Provider / access:** Weights `inclusionAI/Ling-3.1-flash`, self-host via SGLang or vLLM OpenAI-compatible Chat Completions; routed OpenRouter `inclusionai/ling-3.1-flash`. Catalogs list OpenCode `ling-3.1-flash-free` at a **262,144-token serving cap**; verify the Free listing before relying on it, and don't equate this host limit with the weight's 1M window ([model card](https://huggingface.co/inclusionAI/Ling-3.1-flash), [models.dev route inventory](https://models.dev/models/inclusionai/ling-3.1-flash), [OpenRouter API guide](https://openrouter.ai/inclusionai/ling-3.1-flash)).
- **Release / knowledge:** Original checkpoint listed **2026-09-29** by models.dev; the later `-1019` revision is a distinct October checkpoint. Training cutoff not clearly published on the original card ([provider inventory](https://models.dev/models/inclusionai/ling-3.1-flash), [weights](https://huggingface.co/inclusionAI/Ling-3.1-flash)).
- **IDs:** `inclusionAI/Ling-3.1-flash` original weights; `inclusionai/ling-3.1-flash` OpenRouter route can be mutable, so pin weights for reproducibility; `Ling-3.1-flash-1019` evaluation is not imported into this report.
- **Context window:** **1M** weight specification; **262,144** on some providers including the listed Zen Free route, and output cap **32,768** in that listing. Higher host caps on other routes are provider-specific ([model card](https://huggingface.co/inclusionAI/Ling-3.1-flash), [models.dev inventory](https://models.dev/models/inclusionai/ling-3.1-flash)).
- **Modalities:** Text in/out, optional thinking and function tools. No verified native image/audio/video input on the original checkpoint ([model card](https://huggingface.co/inclusionAI/Ling-3.1-flash), [AA](https://artificialanalysis.ai/models/ling-3-1-flash?ockhams=20261026)).
- **Pricing (as of 2026-11-02):** OpenRouter catalog route approximately **$0.075 input / $0.225 output per million** (cached rates/provider routing vary); separate hosts list **$0.30/$0.90**, while the cataloged OpenCode Free route is **$0/$0** at a shorter cap. Weight download has no per-token tariff but large GPU requirements: vendor SGLang example uses **8× H200** ([price comparison](https://models.dev/models/inclusionai/ling-3.1-flash), [vendor setup](https://huggingface.co/inclusionAI/Ling-3.1-flash)).
- **Architecture:** **560B total / 25B active**, 512 routed and one shared expert, 63 KDA plus nine gated MLA layers; **MIT**-licensed weights. Original and `-1019` share scale but not exact post-trained weights ([original card](https://huggingface.co/inclusionAI/Ling-3.1-flash), [revision card](https://huggingface.co/inclusionAI/Ling-3.1-flash-1019)).

### Raw benchmarks found

- **Agent / tool use:** Original-card linked [Terminal-Bench **4.0 46.03%** and Terminal-Bench **2.1 81.18%**](https://huggingface.co/inclusionAI/Ling-3.1-flash) are distinct releases; linked result submissions are not necessarily independent reruns. [Benchgap's measured-data summary](https://benchgap.net/model/ling-3-1-flash) lists GDPval-AA v2.1 **55.9%** and SWE-Atlas Codebase QnA **64.5%**; no exact original-checkpoint public τ³ score confirmed. Do not borrow 1019's agentic gains.
- **Reasoning / knowledge:** [Measured-data digest](https://benchgap.net/model/ling-3-1-flash) gives HLE **37.4%**, CritPt **18.0%**, AA-Omniscience accuracy **29.1%** and Artificial Analysis Intelligence Index **41.1**, **v4.3.2**; these are not the later v5 Index and **not** the revised checkpoint's claimed 44. [HF original-card evaluation link](https://huggingface.co/inclusionAI/Ling-3.1-flash) lists HLE **37.44%**.
- **Coding:** Original-checkpoint [DeepSWE **59.7%**, SWE-bench Pro **68.74%**, SWE-bench Multilingual **88.5%**](https://huggingface.co/inclusionAI/Ling-3.1-flash) under vendor-linked result submissions. [Measured-data digest SciCode **54.1%**](https://benchgap.net/model/ling-3-1-flash). The vendor's LingCode harness can affect code-agent numbers; they are not bare-model percentages ([model card](https://huggingface.co/inclusionAI/Ling-3.1-flash)).
- **Long context:** [Measured-data summary AA-LCR **83.0%**](https://benchgap.net/model/ling-3-1-flash). No independent demonstrated 1M-end retrieval measurement found; 262K host caps apply separately.

### Normalized scores (1–100)

- **Tool use: 76/100.** Strong Terminal-Bench 2.1, weaker v4 and mixed agent evidence; harness/version dependence caps confidence.
- **Reasoning: 80/100.** Original checkpoint HLE/CritPt and AA v4 index, not revised 1019 results.
- **Context window: 84/100.** 1M weight capacity and high AA-LCR, but free/routed hosts can cap at 262K.
- **Multimodal: 15/100.** Text-only native I/O.
- **Coding: 79/100.** DeepSWE, SWE-Pro and SciCode support strong coding, with harness-dependent comparisons.
- **Cost efficiency: 88/100.** MIT weights and inexpensive routed or restricted free access, offset by substantial self-hosting GPU demand.
- **Overall Score: 67/100.** Half-up mean (76 + 80 + 84 + 15 + 79) / 5 = 66.8; economical long-text agent if the provider's context and exact checkpoint are checked.

---

## Signature

- Provided by: **GPT 6 Sol (openai/gpt-6-sol)** — 2026-11-02 UTC
- Method: Three successful original-weight, independent metrics and access/pricing web searches; excluded 1019 revision scores and separated provider caps from weight context. Scores are normalized interpretations.
- Reference URLs:
  - [inclusionAI original Ling 3.1 Flash card and result submissions](https://huggingface.co/inclusionAI/Ling-3.1-flash)
  - [inclusionAI revised 1019 checkpoint, identity contrast](https://huggingface.co/inclusionAI/Ling-3.1-flash-1019)
  - [Benchgap measured-versus-estimated evidence inventory](https://benchgap.net/model/ling-3-1-flash)
  - [Artificial Analysis original-checkpoint v4.3.2 snapshot](https://artificialanalysis.ai/models/ling-3-1-flash?ockhams=20261026)
  - [Models.dev provider and context inventory](https://models.dev/models/inclusionai/ling-3.1-flash)
- Future sources: add a new file next to this one using the same headings.
