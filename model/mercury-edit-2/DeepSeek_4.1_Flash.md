# Mercury Edit 2 — findings by DeepSeek 4.1 Flash

- Source: Inception Labs — `inception/mercury-edit-2`
- Date: 2026-11-11 (UTC)
- Overview and scoring methodology: `../../model-comparison.md`
- Cross-model signed log: `../../model-findings.md`

## Model card

- **Name:** Mercury Edit 2
- **Short description:** Inception Labs' purpose-built diffusion LLM for next-edit prediction and code autocomplete — it predicts the developer's next change from recent snippets, current file context and edit history, and returns ready-to-Tab multi-line diffs; preference-aligned with KTO for less distracting, higher-acceptance suggestions.
- **Provider / access:** Inception Platform API (`mercury-edit-2`) via `v1/fim/completions` (fill-in-the-middle) and `v1/edit/completions` (next-edit); **not a chat model** — no chat completions route, no tool calling. SDKs: `inceptionai` (Python/TypeScript). Editor integrations: Zed (native edit-prediction provider, per co-founder quote) and ProxyAI; the launch post also shipped a 1-month Zed promo key.
- **Release / knowledge:** 2026-03-30 (Inception blog "Introducing Mercury Edit 2"; site-wide page metadata shows a generic timestamp — the dated blog index is the reliable source). Knowledge cutoff not disclosed.
- **IDs:** provider id `mercury-edit-2`; dataset route `inception/mercury-edit-2`.
- **Context window:** FIM 32,000 / NextEdit 32,000; **8,192 max output**. (Inception docs table; folder metadata agrees.)
- **Modalities:** text in, text out only — specialized prompt formats: `<|recently_viewed_code_snippets|>`, `<|current_file_content|>` with a `<|code_to_edit|>` region, `<|edit_diff_history|>` unidiff log; returns the updated editable region in triple backticks. No tool calls, no JSON mode, no streaming chat.
- **Pricing (as of 2026-11-10):** **$0.25 / $0.75 per 1M** input/output, cached input $0.025/1M. New API keys currently come with **100M free tokens** (the March launch post offered 10M; the free-token grant was raised since). Practical workload is tiny: docs recommend a 10–15 line editable region (~100–150 tokens) with ~25 lines (~250 tokens) as the practical upper bound.
- **Architecture:** proprietary diffusion LLM (dLLM — parallel token denoising rather than one-token-at-a-time), in the Mercury 2 generation era; ~1,000 tokens/second decoding claimed by Inception; no weights published. Trained on curated multi-language edit data plus a human accept/reject preference dataset, aligned with **KTO** (Kahneman-Tversky Optimization, unpaired RL).

### Raw benchmarks found

> Inception published **no absolute public scores** for Mercury Edit 2. The only quantitative claims are vendor-run relative deltas against its own previous next-edit model, plus the benchmark suite description. Treat all numbers below as vendor-run; nothing was independently reproducible at check time.

Agent / tool use:

- No tool calling — the model is invoked as a tool by IDEs, it does not call tools (not applicable)

Reasoning / knowledge:

- No verified public score found for any general reasoning benchmark (it is not a chat reasoner; no GPQA/HLE-class rows exist)

Coding:

- **Edits accepted 48% more often** than the previous next-edit model; **27% more selective** (fewer, more targeted suggestions) — vendor, relative only
- Quality measured as the average of four next-edit benchmarks: **Instinct** (continuedev/instinct-data), **FIM** (openai/human-eval-infilling — validated by running test cases), **NEP** (lurf21/NextEditPrediction) and one internal bench; the three non-FIM ones use LLM-as-a-judge similarity to a human gold edit — **no per-benchmark scores published**
- Inception claims "superior quality and speed" versus custom next-edit models and speed-optimized frontier models (no numbers/leaderboard)
- Demonstrated in Zed's provider-agnostic edit-prediction system; acceptance feedback loop is the KTO training signal

Long context:

- 32K FIM / 32K next-edit windows; no retrieval benchmarks reported (not applicable to the edit niche)

### Normalized scores (1–100)

- **Tool use: 30/100.** No tool calling and no chat surface — it is a specialized edit endpoint that IDEs call; scored as a service component, not an agent.
- **Reasoning: 50/100.** Next-edit prediction requires real intent inference from edit history and context (and KTO tuning measurably improved suggestion usefulness), but zero absolute general-reasoning or decision-quality rows exist to verify depth.
- **Context window: 40/100.** 32K FIM / 32K NextEdit with 8K max output is a mid-low window tuned for the niche rather than scale; no long-context use case.
- **Multimodal: 15/100.** Text-only in/out (template floor).
- **Coding: 66/100.** Purpose-built top-of-niche tool — live in Zed, decoding at ~1,000 tok/s, +48% acceptance and −27% edit noise vs its predecessor, benchmarked on an open next-edit suite — but with no absolute scores, the ceiling beyond six figures is unverifiable.
- **Cost efficiency: 80/100.** $0.25/$0.75 per 1M with $0.025 cached input looks mid-tier on paper, but suggestions consume ~100–250 tokens each (pennies per thousand suggestions) and 100M free tokens cover heavy evaluation; no free production lane.
- **Overall Score: 40/100.** (30 + 50 + 40 + 15 + 66) / 5 = 40.2 → 40. Best fit: IDE Tab-completion / next-edit layers as a drop-in provider (e.g., Zed or ProxyAI) where low-latency multi-line edit diffs matter more than general coding ability.

---

## Signature

- Provided by: **DeepSeek 4.1 Flash (deepseek-ai/deepseek-v4.1-flash)** — 2026-11-11
- Method: public internet research (Inception launch post + blog index for dating, Inception docs models/pricing and next-edit capability pages, Zed provider docs, third-party model listings). All quantitative claims are vendor-run and relative; no independent numeric verification found. Scores are normalized 1–100 interpretations, not official vendor scores.
- Reference URLs:
  - [Inception — Introducing Mercury Edit 2 (launch post)](https://www.inceptionlabs.ai/blog/introducing-mercury-edit-2)
  - [Inception — Blog index (launch date source)](https://www.inceptionlabs.ai/blog)
  - [Inception Docs — Models & pricing](https://docs.inceptionlabs.ai/get-started/models)
  - [Inception Docs — Next Edit capability](https://docs.inceptionlabs.ai/capabilities/next-edit)
  - [Zed — Edit prediction providers](https://zed.dev/docs/ai/edit-prediction)
- Future sources: add a new file next to this one, e.g. `GPT_5.md`, using the same headings.
