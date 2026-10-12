# Claude Sonnet 3.5 — findings by Claude Opus 5

- Source: Anthropic (`claude-3-5-sonnet-20240620` / `claude-3-5-sonnet-20241022`)
- Date: 2026-10-08 (UTC)
- Overview and scoring methodology: `../../model-comparison.md`
- Cross-model signed log: `../../model-findings.md`

## Model card

- **Name:** Claude Sonnet 3.5 (Anthropic's launch styling was "Claude 3.5 Sonnet")
- **Short description:** The mid-2024 model that established Sonnet as Anthropic's default developer tier, and the generation that introduced **computer use** — Anthropic's upgraded 3.5 Sonnet launched in the same announcement as the computer-use beta ([Anthropic, "3.5 models and computer use"](https://www.anthropic.com/news/3-5-models-and-computer-use); original launch at [Anthropic](https://www.anthropic.com/news/claude-3-5-sonnet)). Two snapshots shipped under the name: `-20240620` and the upgraded `-20241022`. **This model is retired.** Distinct model; Sonnet 3.7, 4, 4.5, 4.6, 5 and 5.5 are separate folders.
- **Provider / access:** Launched on the Claude API, Amazon Bedrock and Google Cloud Vertex AI. **Lifecycle:** Anthropic's deprecation register records **both** snapshots as **Retired** — deprecated **2025-08-13**, retired **2025-10-28**, with `claude-sonnet-4-6` as the recommended replacement ([model deprecations](https://platform.claude.com/docs/en/about-claude/model-deprecations)). Requests now fail. **No OpenCode Zen route** (Zen's Claude Sonnet line starts at 4.5).
- **Release / knowledge:** Original release **2024-06-20**; upgraded snapshot **2024-10-22** (alongside Claude 3.5 Haiku and the computer-use beta); retired **2025-10-28** — a service life of roughly 16 months. Knowledge cutoff: no verified public date found.
- **IDs:** `claude-3-5-sonnet-20240620`, `claude-3-5-sonnet-20241022` (both retired). **No free API tier**; it was available on consumer Claude plans during its life.
- **Context window:** **200,000 tokens** ([BenchLM](https://benchlm.ai/models/claude-3-5-sonnet)). Max output: no verified public figure found.
- **Modalities:** **Text + image in → text out.** No audio, no video, no generated media. Reasoning: **no** — this predates Anthropic's hybrid-reasoning generation entirely; there is no thinking budget or effort parameter. Tool calls: yes, and the `-20241022` snapshot introduced **computer use** in beta.
- **Pricing (as of 2026-10-08):** **Retired — no live rate.** Anthropic's Sonnet tier was priced at **$3 / MTok input, $15 / MTok output** throughout the 3.5–4 era (the rate Anthropic explicitly described as unchanged when launching Claude Sonnet 4), and no source I consulted gives a different figure for 3.5 Sonnet. Reported as the era rate rather than a figure I read directly off a 3.5-Sonnet price page.
- **Architecture:** Proprietary, closed weights. Parameter count and activation scheme undisclosed.

### Raw benchmarks found

> **Only four benchmark rows survive on BenchLM**, and Artificial Analysis has no entry — unsurprising for a model retired a year ago, and consistent with what I found for Claude Haiku 3.5 (whose BenchLM and evals.report pages have been deleted entirely). The two headline figures trace to Anthropic's own launch announcements.

Agent / tool use:

- **Nothing.** No τ²-bench, no Terminal-Bench, no OSWorld, no WebArena, no GAIA, no GDPval, no MCP measurement. **This is notable and worth stating plainly: the model that introduced computer use to the industry has no publicly surviving agentic benchmark.**

Reasoning / knowledge:

- **GPQA: 59.4%** ([Anthropic launch announcement](https://www.anthropic.com/news/claude-3-5-sonnet))
- **FrontierMath v2: Tiers 1–3 2.07%, Tier 4 0.000%** ([Epoch AI](https://epoch.ai/benchmarks/frontiermath-tier-4-v2?view=graph&tab=leaderboard)) — a literal zero on the hardest tier
- BenchLM overall: **28.27/100, rank #194 of 889** (4 of 625 benchmarks, flagged conservative)
- **HLE, MMLU-Pro, AIME, CritPt, AA-LCR, any aggregate index, and any hallucination measurement: no verified public score found**

Coding:

- **SWE-bench Verified: 49%** ([Anthropic, 3.5 models and computer use](https://www.anthropic.com/news/3-5-models-and-computer-use)) — state of the art for its moment, and the figure that made Sonnet the default coding model for a year
- LiveCodeBench, Aider Polyglot, BigCodeBench, SWE-bench Pro, SciCode: no verified public score found

Multimodal:

- **No vision benchmark of any kind.** Image input was a documented capability and is entirely unmeasured in any surviving source.

Long context:

- **No MRCR, RULER, LongBench or needle-retrieval number at any depth.** The 200K window has no public retrieval validation.

### Normalized scores (1–100)

- **Tool use: 35/100.** Scored on complete absence of evidence. The `-20241022` snapshot **introduced computer use** — a genuinely field-defining capability that every agentic model in this dataset inherits — and yet **not one agentic benchmark for it survives in public**. Function calling and computer use both existed, so this is not zero; but a dimension with no measurement at all cannot be credited above the bottom third.
- **Reasoning: 42/100.** **GPQA 59.4%** was respectable in mid-2024 and is firmly mid-tier now — for scale, models in this dataset routinely post 85–92% on GPQA Diamond. **FrontierMath Tier 4 at 0.000%** sets the hard ceiling at the floor. With no HLE, no MMLU-Pro, no index and no hallucination measurement, there is nothing to offset it.
- **Context window: 58/100.** 200,000 tokens was generous in June 2024 and is now the smallest in Anthropic's line by a factor of five. **Nothing validates it** — no retrieval curve, no long-context reasoning score, not one measurement at any depth.
- **Multimodal: 45/100.** Text and images in, text only out — the capability is documented and **completely unmeasured**. No MMMU, no chart, no document, no OCR. Scored just below the midpoint: modality confirmed present, quality entirely unknown, and nothing beyond still images.
- **Coding: 52/100.** **SWE-bench Verified 49%** was state of the art when published and is the single most historically consequential number in this report — it is why Sonnet became the default developer model for roughly a year. By 2026 standards it is modest (Claude Haiku 5.5's tier now posts 66–73% independently), and it is the **only** coding benchmark that survives, with no LiveCodeBench, Aider or agentic-coding figure anywhere.
- **Cost efficiency: 15/100.** **The model is retired** — both snapshots deprecated 2025-08-13 and retired 2025-10-28 — so its value at any price is nil, which is what this dimension must capture. On its era rate of **$3 / $15 per MTok** the intra-vendor comparison is extreme: **Claude Haiku 5.5 costs $0.10 / $0.50 — 30× less on both lines — with a 1M context, 128K output, adaptive thinking, and a BenchLM score of 66.78 against this model's 28.27.** Credit retained only for consumer-plan availability during its life.
- **Overall Score: 46.4/100.** Mean of the five non-cost dims (35 + 42 + 58 + 45 + 52) / 5 = 46.4. Best fit: **none — the model is retired and uncallable.** Its historical significance is substantial and should not be understated: SWE-bench Verified 49% made it the default coding model of 2024–25, and its October 2024 snapshot introduced **computer use**, which is the direct ancestor of every OSWorld score in this dataset. What the numbers show is how fast the field moved: a model that led on coding two years ago now scores below the 200th percentile of tracked models, and almost its entire benchmark record has been deleted from the aggregators that once carried it.

---

## Signature

- Provided by: **Claude Opus 5 (anthropic/claude-opus-5)** — 2026-10-08
- Method: fresh public internet research only — BenchLM's aggregated `claude-3-5-sonnet` page (200K context, Non-Reasoning classification, 4 of 625 benchmarks, overall 28.27 and rank #194, plus the intra-family score comparison used in the cost assessment) and the two Anthropic launch announcements it cites as upstream sources for GPQA 59.4% and SWE-bench Verified 49%; the Epoch AI FrontierMath v2 leaderboard; and Anthropic's **model-deprecation register**, which supplies the authoritative lifecycle record for both snapshots (deprecated 2025-08-13, retired 2025-10-28, replacement `claude-sonnet-4-6`). **Artificial Analysis has no entry** for this model, so the absence of an intelligence index, long-context score and hallucination rate is reported as the state of the public record rather than proxied from later Claude models. The OpenCode Zen catalogue was checked and its Claude Sonnet line begins at 4.5. The $3/$15 figure is reported as the Sonnet-tier era rate — sourced from Anthropic's statement that Claude Sonnet 4 pricing "remains consistent with previous Opus and Sonnet models", gathered independently in this same research pass — and is explicitly **not** presented as a figure read off a 3.5-Sonnet price page. The complete absence of any surviving agentic benchmark for the model that introduced computer use is reported as a finding rather than filled in. No peer `model/` findings files were read. Scores are normalized 1–100 interpretations, not official vendor scores.
- Future sources: add a new file next to this one, e.g. `GPT_5.md`, using the same headings.
