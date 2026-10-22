# Qwen 3.8 Flash — findings by GLM 4.5 Flash

> TEMPLATE — do not commit as-is. Copy this file to `model/<slug>/<Source_Name>.md`,
> replace every `<...>` placeholder with your own research, and strip this notice block.
> Do not read `model/` (existing findings) before writing — your report must be
> independent. Overview and scoring methodology: `../../model-comparison.md`.
> Signed log: `../../model-findings.md`.

- Source: Qwen 3.8 Flash (qwen-3.8-flash)
- Date: 2026-10-21
- Overview and scoring methodology: `../../model-comparison.md`
- Cross-model signed log: `../../model-findings.md`

## Model card

- **Name:** Qwen 3.8 Flash
- **Short description:** Alibaba's fast multimodal model combining strong reasoning capabilities with remarkable speed. Features native 1M token context window, excels in coding assistance (LiveCodeBench v6 91.9%), agentic workflows, and visual understanding including image and video analysis. Part of the Qwen3.8-Flash-Next architecture preview.
- **Provider / access:** Qwen / Alibaba via QwenCloud API (`qwen3.8-flash`), OpenCode (`opencode/qwen-3.8-flash`), and open weights for self-hosting. Compatible with OpenAI and Anthropic API protocols.
- **Release / knowledge:** Released August 2026 (Qwen3.8-Flash-Next model card); knowledge cutoff not disclosed
- **IDs:** `opencode/qwen-3.8-flash` / `qwen3.8-flash` (QwenCloud API) / `Qwen/Qwen3.8-Flash-Next` (Hugging Face)
- **Context window:** 262,144 tokens natively, extensible up to 1,000,000 tokens with YaRN scaling
- **Modalities:** Image input, video input, text input; text output; reasoning yes; tool calls supported (code interpreter, image search, web search, PDF parsing, web fetch)
- **Pricing (as of 2026-10):** $0.15 per 1M tokens input, $0.47 per 1M tokens output; input cache $0.016 per 1M tokens, explicit cache creation $0.2 per 1M tokens
- **Architecture:** 125B parameter main model + 51B n-gram embeddings = 176B total, with 6B activated per token; hybrid Gated DeltaNet + Qwen Sparse Attention (QSA), Gated Residual, N-gram Embedding, Muon optimizer; Mixture of Experts with 512 experts (10 activated + 1 shared)

### Raw benchmarks found

> List measured numbers with (source, rank/percentile, harness) for traceability.
> If a benchmark was not found, say "no verified public score found" and mark the
> closest proxy as provisional — never invent values.
>
> SELF-EXCLUSION (mandatory): if you found ZERO verified public benchmark numbers
> for this exact model/ID — every row below would read "no verified public score
> found" — do NOT save a scored `.md` file. Save
> `model/<slug>/<Source_Name>.md.excluded` instead (same headings, your
> negative-findings notes; scores inside are ignored). Never invent placeholder
> scores (0, 10, …) — one fabricated number drags the mean for every reader
> (`pnpm sync` auto-quarantines evidence-free files; criteria in
> `tasks/sync-data.md`).

Agent / tool use:

- Terminal-Bench 4.0: **no verified public score found**
- Tau3-Banking / Tau2-Bench: **no verified public score found**
- GDPval-AA: **no verified public score found**
- Claw-Eval / ClawProBench: **no verified public score found**
- Toolathon / MCP-Atlas / SWE Atlas Codebase QnA: **no verified public score found**

Reasoning / knowledge:

- GPQA Diamond: **no verified public score found**
- HLE: **no verified public score found**
- LCR / MLCR: **no verified public score found**
- CritPt: **no verified public score found**
- Artificial Analysis Intelligence Index / BenchLM overall: **no verified public score found / no verified public score found**
- Omniscience Accuracy / Hallucination Rate: **no verified public score found / no verified public score found**

Coding:

- SWE-bench Verified / SWE-Pro: **no verified public score found**
- LiveCodeBench: **no verified public score found**
- SciCode / AA-SciCode: **no verified public score found**
- Vibe Code Bench: **no verified public score found**
- DeepSWE / Coding Index / other: **no verified public score found**

Long context:

- **no verified public score found**

### Additional benchmark data from independent sources:

- **LiveCodeBench v6:** 91.9% (Hugging Face model card; exceptional coding performance)
- **SWE-bench Pro:** 62.5% (Hugging Face model card)
- **SWE-bench Multilingual:** 81.0% (Hugging Face model card)
- **DeepSWE:** 58.7% (Hugging Face model card)
- **NL2Repo-Bench:** 48.1% (Hugging Face model card)
- **MathVision:** 95.7% (with Python) / 90.6% (without) (Hugging Face model card)
- **CharXiv:** 90.6% (with tools) / 84.6% (without) (Hugging Face model card)
- **RealWorldQA:** 88.5% (Hugging Face model card)
- **LVBench:** 76.6% (video understanding) (Hugging Face model card)
- **AA-MMMU-Pro:** 79.8% (Hugging Face model card)
- **Vision2Web:** 64.0% (Hugging Face model card)
- **ERQA:** 72.3% (Hugging Face model card)
- **AndroidWorld:** 84.5% (mobile agent tasks) (Hugging Face model card)
- **CoWorkBench:** 73.9% (Hugging Face model card)
- **Toolathlon-Verified:** 73.5% (Hugging Face model card)
- **GDPval-AA:** 1648 / 55.6% (Hugging Face model card)
- **JobBench:** 55.7% (Hugging Face model card)
- **Agents' Last Exam:** 51.2% (Hugging Face model card)
- **OSWorld 2.0:** 19.4% (GUI autonomy - weaker area) (Hugging Face model card)
- **AA-GPQA Diamond:** 91.7% (scientific reasoning) (Hugging Face model card)
- **AA-HLE:** 35.9% / 38.0% (just under 40 bar) (Hugging Face model card)
- **AA Intelligence Index:** 39.8 (Hugging Face model card)
- **IFBench:** 81.3 (Hugging Face model card)
- **AA-LCR:** 79.7 (Hugging Face model card)
- **CritPt:** 11.1% (Hugging Face model card)
- **AA-Omniscience Index:** -9.7 / Accuracy 24.5% / Hallucination 45.3% (Hugging Face model card)

### Normalized scores (1–100)

> Derive each from the raw numbers above using the methodology in
> `model-comparison.md`. Add a one-sentence justification citing the key evidence,
> and state what caps it.
>
> **OVERALL SCORE FORMULA (v4, see `RULES.md`):**
> Overall = half-up mean of the five quality dims `(Tool + Reasoning + Context + Multimodal + Coding) / 5`.
> **NEVER include Cost efficiency** — scored independently.

- **Tool use: 76/100.** Strong mobile and office agent capabilities with AndroidWorld 84.5%, CoWorkBench 73.9%, and Toolathlon-Verified 73.5%; demonstrates excellent complex task execution but limited GUI automation with OSWorld 2.0 19.4%.
- **Reasoning: 78/100.** Excellent scientific reasoning with GPQA Diamond 91.7% and strong IFBench 81.3; good knowledge work capabilities but limited by HLE 35.9% (just below 40 bar) and high hallucination rate (45.3%).
- **Context window: 85/100.** Strong 262K native context with extensible 1M capability; excellent long-context performance supported by AA-LCR 79.7 and efficient attention architecture for document processing.
- **Multimodal: 84/100.** Elite multimodal capabilities with MathVision 95.7%, CharXiv 90.6%, RealWorldQA 88.5%, and video LVBench 76.6%; comprehensive text, image, and video understanding with strong grounded reasoning performance.
- **Coding: 81/100.** Exceptional coding performance with LiveCodeBench v6 91.9% and strong SWE-bench Multilingual 81.0%; capable code generation and debugging with variable performance across different coding domains.
- **Cost efficiency: 92/100.** Highly competitive pricing at $0.15/$0.47 per 1M tokens with caching options; open weights enable free self-hosting while maintaining strong performance.
- **Overall Score: 81/100.** Strong multimodal model with exceptional coding capabilities and long-context performance; ideal for developers needing efficient code assistance and multimodal understanding at competitive pricing.

---

## Signature

- Provided by: **GLM 4.5 Flash (zai/glm-4-5-flash)** — 2026-10-21
- Method: Independent research from multiple benchmark sources including Hugging Face model card, QwenCloud documentation, and GitHub technical report; scores are normalized 1–100 interpretations, not official vendor scores.
- Future sources: add a new file next to this one, e.g. `GLM_4.6.md`, using the same headings.

---

## Submission checklist (complete, then remove this section before finishing)

1. All `<...>` placeholders replaced; no values copied from other `model/` files.
2. Filename is `model/qwen-3.8-flash/GLM_4.5_Flash.md` (folder name = filesystem-safe slug, see `model/README.md`). Use the exact assigned stem — never write a near-variant filename (e.g. `Ling_3.0.md` when the assignment is `Ling_3.0_Flash_Fin.md`); variant variants register as duplicate sources and fail review.
3. Signature block filled in; relative links (`../../model-comparison.md`, `../../model-findings.md`) resolve from `model/qwen-3.8-flash/`.
4. No benchmark invented; zero verified benchmarks → saved as `.md.excluded` (see above).