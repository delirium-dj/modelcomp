# DeepSeek V3.2 — findings by Iceman

- Source: DeepSeek AI/DeepSeek-V3.2
- Date: 2026-11-14 (UTC), deep second-pass research
- Overview and scoring methodology: `../../model-comparison.md`
- Cross-model signed log: `../../model-findings.md`

## Model card

- **Name:** DeepSeek V3.2
- **Short description:** DeepSeek’s December 2025 open-weight hybrid-reasoning MoE model (685B total / 37B active) focused on efficient reasoning and agentic workflows, with “thinking in tool-use” support in thinking and non-thinking modes.
- **Provider / access:** Open weights on Hugging Face (`deepseek-ai/DeepSeek-V3.2`, MIT license) and hosted via multiple providers (e.g. DeepSeek API, OpenRouter, Azure/Bedrock/others per catalogs). Local metadata lists `deepseek/deepseek-v3.2`, `noFreeId`.
- **Release / knowledge:** Released December 1, 2025 (DeepSeek news/HF). Knowledge cutoff not explicitly stated in reviewed sources.
- **IDs:** `deepseek-v3.2`, `deepseek-ai/DeepSeek-V3.2`, `deepseek/deepseek-v3.2`.
- **Context window:** 128,000 tokens (commonly listed; some providers advertise 163,840). Max output commonly 64K depending on provider (local metadata notes 65,536).
- **Modalities:** Text input/output (text-only).
- **Pricing (as of 2026-11-14):** Open weights self-host $0 (MIT). Hosted pricing varies by provider (e.g. DeepSeek/OpenRouter listings around ~$0.28/$0.42 per 1M in/out with cache discounts; provider-specific rates differ).
- **Architecture:** Mixture-of-Experts transformer, 685B total parameters / 37B active per token, DeepSeek Sparse Attention (DSA), hybrid reasoning (thinking/non-thinking), tool-use support (HF/DeepSeek docs).

### Raw benchmarks found

> SECOND-PASS UPDATE (converted from excluded): I reviewed DeepSeek’s official release/news page, Hugging Face model card (including evaluation results shown on the model page), technical report/arXiv listing, Artificial Analysis, OpenRouter, models.dev, and local metadata/prior report. The HF model card page displays evaluation result entries for this exact model; some values are marked with `*` in the UI/source context and should be treated as reported results with possible harness-specific conditions. Local metadata cites additional figures (e.g. LiveCodeBench 83.3%, tau2 80.3%) that were **not independently verified** from accessible text sources in this pass and are **not used as scored inputs**. Scores below are provisional normalized estimates grounded in verified specs and attributable extracted evidence.

Agent / tool use:

- DeepSeek reports a large-scale agentic task synthesis pipeline and introduces “thinking in tool-use” (thinking integrated into tool-use scenarios; supports tool-use in thinking and non-thinking modes) per DeepSeek news/HF card.
- Terminal-Bench 2.1 / Tau2 / Tau3 / GDPval-AA / Toolathon / MCP-Atlas: **no directly extracted verified public score found** in this pass (HF/AA pages do not provide clearly attributable standardized numerics for these specific benchmarks in accessible text).

Reasoning / knowledge:

- **GPQA Diamond:** **82.4** (Hugging Face model page evaluation result for `deepseek-ai/DeepSeek-V3.2`).
- **MMLU-Pro:** **85** (Hugging Face model page evaluation result).
- **MathArena AIME 2026:** **94.17** (Hugging Face model page evaluation result).
- **MathArena HMMT Feb 2026:** **84.09** (Hugging Face model page evaluation result).
- HLE / AA Intelligence Index / LCR / CritPt: **no directly extracted verified public score found**.

Coding:

- **SWE-bench Verified (resolved):** **70\*** (Hugging Face model page evaluation result; asterisk shown in source/context).
- **SWE-bench Multilingual (resolved):** **70.2\*** (Hugging Face model page evaluation result; asterisk shown).
- LiveCodeBench / SWE-Pro / SciCode / Vibe Code Bench: **no directly extracted verified public score found** in this pass (local metadata LiveCodeBench claim unverified here).

Long context:

- **128K context** (with provider variants up to ~163K reported). No standalone long-context retrieval benchmark numeric extracted.

Multimodal:

- Text-only model (no image/audio/video input/output).

### Normalized scores (1–100)

> Derived from raw evidence above using the methodology in `model-comparison.md`. Scores are provisional normalized interpretations (not official vendor scores) due to incomplete coverage of required standardized benchmarks in independently extractable text.

- **Tool use: 74/100.** Strong official emphasis and product capability for “thinking in tool-use” and agentic training, but limited directly extracted standardized tool/agent benchmark numerics for required categories in this pass.
- **Reasoning: 84/100.** Strong verified signals from HF evaluation results (GPQA Diamond 82.4, MMLU-Pro 85, AIME 2026 94.17, HMMT Feb 2026 84.09); capped by missing/limited coverage on some repository-standard reasoning benchmarks (HLE/LCR/CritPt/AA index).
- **Context window: 68/100.** 128K context is solid but below current 256K–1M frontier tiers; adequate for many tasks but a limiting factor versus long-context leaders.
- **Multimodal: 15/100.** Text-only model (no multimodal input/output).
- **Coding: 76/100.** Verified HF evaluation results show strong software engineering performance (SWE-bench Verified 70*, SWE-bench Multilingual 70.2*), but other key coding benchmarks in this framework were not directly extracted in this pass.
- **Cost efficiency: 90/100.** MIT open weights enable $0 self-hosting and hosted pricing is competitive (around low-cost tiers on major providers), offering strong value for capability.
- **Overall Score: 63/100.** Mean of the five non-cost dimensions (Tool 74, Reasoning 84, Context 68, Multimodal 15, Coding 76) rounded to nearest integer; best fit for cost-efficient reasoning/coding and agentic text workflows where multimodality and very long context are not required.

> Caution: Scores are provisional estimates based on verified specs and attributable extracted evidence. HF evaluation results marked with `*` may depend on specific evaluation setups/harnesses; local metadata benchmark claims not independently verified in this pass were excluded from scored inputs.

### Source comparison / conflicts

- **Specs/pricing:** HF, DeepSeek news/docs, OpenRouter, models.dev, and AA broadly align on identity (Dec 2025 release, 685B/37B MoE, MIT, 128K context, text-only, hybrid reasoning/tool-use). Hosted pricing/context/output limits vary by provider.
- **Benchmarks:** HF model page provides directly visible evaluation results for this model (GPQA 82.4, MMLU-Pro 85, AIME 2026 94.17, HMMT Feb 2026 84.09, SWE-bench Verified 70*, SWE-bench Multilingual 70.2*). DeepSeek news/technical materials also reference broader benchmark comparisons (often image/table-based) and gold-medal olympiad claims for Speciale/related context; local metadata listed additional numerics (e.g. LiveCodeBench 83.3%, tau2 80.3%) not independently verified in this pass.
- **Prior Iceman file:** Prior excluded report noted benchmark numerics were not text-extractable from HF card; this pass uses HF page-displayed evaluation results and other accessible sources to convert to a provisional scored report.

---

## Signature

- Provided by: **Iceman (opencode/iceman-free)** — 2026-11-14
- Method: Deep second-pass independent research using alternative web access (`webfetch`, PowerShell `Invoke-WebRequest`) across DeepSeek release/news, Hugging Face model card/evaluation results, arXiv/technical report listing, Artificial Analysis, OpenRouter, models.dev, and local metadata/prior report review; compared specs/claims and noted extraction limits.
- Research performed (>=10 successful independent web fetch/search attempts): DeepSeek V3.2 news page, Hugging Face model card page, Hugging Face model page HTML/content fetch, DeepSeek API docs/news endpoint, OpenRouter model page, OpenRouter llms/docs content, Artificial Analysis model page, models.dev model page, arXiv abstract page, local `meta.json` and prior `Iceman.md.excluded` review.
- Reference URLs:
  - [DeepSeek-V3.2 Release (DeepSeek API Docs news)](https://api-docs.deepseek.com/news/news251201)
  - [DeepSeek-V3.2 model card (Hugging Face)](https://huggingface.co/deepseek-ai/DeepSeek-V3.2)
  - [DeepSeek-V3.2 Technical Report (arXiv)](https://arxiv.org/abs/2512.02556)
  - [DeepSeek V3.2 on Artificial Analysis](https://artificialanalysis.ai/models/deepseek-v3-2)
  - [DeepSeek V3.2 on OpenRouter](https://openrouter.ai/deepseek/deepseek-v3.2)
  - [DeepSeek V3.2 on models.dev](https://models.dev/models/deepseek/deepseek-v3.2)
  - Local repository metadata consulted: `model/deepseek-v3.2/meta.json`
- Future sources: add a new file next to this one, e.g. `GPT_5.md`, using the same headings.