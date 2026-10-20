# Claude Sonnet 3.5 — findings by MiniMax M3.1 Flash

- Source: Anthropic (Claude 3.5 Sonnet), `claude-3-5-sonnet-20241022`
- Date: 2026-10-20 (UTC)
- Overview and scoring methodology: `../../model-comparison.md`
- Cross-model signed log: `../../model-findings.md`

## Model card

- **Name:** Claude Sonnet 3.5 (Claude 3.5 Sonnet)
- **Short description:** Anthropic's June 2024 mid-tier model — the first Sonnet with a vision-strong model card, 99.7% needle-in-a-haystack recall at 200K, MMLU 88.7% and 92% HumanEval at $3/$15. It is **retired** (deprecated Aug 13 2025, retired Oct 28 2025) and kept as a historical reference.
- **Provider / access:** Anthropic Messages API (`claude-3-5-sonnet-20240620`, `claude-3-5-sonnet-20241022`) — sunset; a handful of third-party gateways still list it (models.dev: `anthropic/claude-sonnet-3.5` on Poe at $2.60/$13). **Not on OpenCode Zen** and never offered there.
- **Release / knowledge:** model card addendum **2024-06-20**, news post 2024-06-21; computer-use update 2024-10-22. Knowledge cutoff not published for this model.
- **IDs:** `claude-3-5-sonnet-20240620`, `claude-3-5-sonnet-20241022` (Anthropic), `anthropic/claude-sonnet-3.5` (third-party gateways).
- **Context window:** **200,000** tokens. Max output: no verified public figure found (the model is retired and no longer in Anthropic's model tables).
- **Modalities:** text and image input, text output; tool use and computer use (Oct 2024 update); multilingual; no extended thinking (that arrived with Sonnet 3.7).
- **Pricing (as of 2026-10-20):** **$3/M input, $15/M output** (launch post); gateway routes list $2.60/$13.
- **Architecture:** proprietary.

### Raw benchmarks found

> All first-party numbers come from the June 2024 model card addendum; SWE-bench comes from Anthropic's October 2024 computer-use release.

Reasoning / knowledge:

- MMLU: **88.7%** (5-shot) / **88.3%** (0-shot CoT) · GPQA Diamond: **59.4%** (0-shot CoT) / **67.2%** (Maj@32, 5-shot CoT)
- MATH: **71.1%** (0-shot CoT) · GSM8K: **96.4%** (0-shot CoT) · MGSM: **91.6%** (0-shot CoT) · BIG-Bench-Hard: **93.1%** (3-shot CoT) · DROP (F1): **87.1** (3-shot)
- HLE / AIME / FrontierMath / Artificial Analysis Intelligence Index: no verified public score found (HLE postdates the model; AA lists no page for it)

Multimodal:

- MMMU (validation): **68.3%** · MathVista (testmini): **67.7%** · AI2D (test): **94.7%** · ChartQA (test, relaxed): **90.8%** · DocVQA (test, ANLS): **95.2%**

Coding:

- HumanEval: **92.0%** (0-shot) · internal agentic coding: **64%** (Opus 38%, Sonnet 21%, Haiku 17%)
- SWE-bench Verified: **49%** (Anthropic, Oct 22 2024 computer-use release, via BenchLM) · MBPP / LiveCodeBench / DeepSWE: no verified public score found

Long context:

- Needle-in-a-Haystack: **99.7%** average recall (99.7% at 200K)

### Normalized scores (1–100)

- **Tool use: 40/100.** The model's own card puts internal agentic coding at 64% (Sonnet 21% of the total) and the only published SWE-bench figure is 49%; no Terminal-Bench, τ², GDPval or OSWorld measurement exists for the 2024-era release.
- **Reasoning: 52/100.** MMLU 88.7% and BBH 93.1% are strong knowledge results, but GPQA 59.4% and MATH 71.1% are mid-band by 2026 standards, and no HLE or composite index was ever published.
- **Context window: 75/100.** 200,000 tokens with **99.7% needle-in-a-haystack recall at 200K** is genuinely retrieval-strong — the 200K tier with excellent needle performance lifts it above the plain midpoint.
- **Multimodal: 65/100.** Text and image input with text output — DocVQA 95.2%, AI2D 94.7% and ChartQA 90.8% are excellent document/chart reads, but no audio or video input.
- **Coding: 58/100.** HumanEval 92.0% is a strong 2024 code-generation number, while SWE-bench Verified 49% shows the agentic-coding gap of the era.
- **Cost efficiency: 60/100.** $3/M in and $15/M out is the classic premium band (≈$3/$15 → ~60).
- **Overall Score: 58/100.** Mean of the five quality dims = (40 + 52 + 75 + 65 + 58) / 5 = 58.0 → **58**. Best fit: historical reference — Anthropic's own deprecation path leads to Sonnet 5.5, and third-party gateways still serving 3.5 should be treated as a fallback.

---

## Signature

- Provided by: **MiniMax M3.1 Flash (minimax/minimax-m3.1-flash)** — 2026-10-20
- Method: public internet research (Anthropic Claude 3 model card addendum, news posts, model-deprecation docs, BenchLM, models.dev, OpenCode Zen catalogue); scores are normalized 1–100 interpretations, not official vendor scores.
- Future sources: add a new file next to this one, e.g. `Claude_Sonnet_4.5.md`, using the same headings.
