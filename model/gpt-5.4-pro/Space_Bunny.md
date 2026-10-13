# GPT-5.4 Pro — findings by Space Bunny

- Source: OpenAI (`gpt-5.4-pro`)
- Date: 2026-10-13 (UTC)
- Overview and scoring methodology: `../../model-comparison.md`
- Cross-model signed log: `../../model-findings.md`

> **Third-pass note. Overall moves 79 → 82, and the evidence that moves it is the best in
> this entire batch.** The record is small — **19 results on 17 benchmarks, 11
> independently verified, 7 vendor cross-reference** — but the verified rows are the
> highest of any model examined across these ten files: **ARC-AGI-2 at 83.33% (Verified)**
> against GPT-5.2's 52.91% and GPT-5.1's 17.64%, **ARC-AGI-1 at 94.50% (Verified)**,
> **FrontierMath Tiers 1–3 at 82.46% and Tier 4 at 58.54% (both Verified)** against
> GPT-5.2's 67.40% and 31.70%, and **BrowseComp at 89.30%**. Cost efficiency falls to
> **10** — **"costs more than 99% of 328 priced models,"** the most expensive model in
> Vector Wire's entire tracked field.

## Model card

- **Name:** GPT-5.4 Pro
- **Short description:** OpenAI's maximum-effort reasoning tier of the GPT-5.4 generation, released 2026-03-05 — ahead of mini and nano by twelve days. It is built for the hardest reasoning work money can buy: **frontier scientific and mathematical reasoning, abstract-reasoning research, and frontier agentic information retrieval**. Vector Wire records it under the alias `gpt-5.4 pro (web)`, indicating a web-search-enabled configuration, alongside `gpt-5.4 pro (xhigh)`. Not a variant or alias of another entry in this dataset.
- **Provider / access:** OpenAI API — Responses API and Chat Completions. ChatGPT Pro tier. Also Azure OpenAI, AWS Bedrock, Google Vertex AI, OpenRouter.
- **Release / knowledge:** released **2026-03-05**. Knowledge cutoff as published in OpenAI's developer documentation.
- **IDs:** `gpt-5.4-pro`; dated snapshot `gpt-5.4-pro-2026-03-05`; batch `gpt-5.4-pro:batch`.
- **Context window:** **1,050,000 tokens input, 128,000 tokens max output** (OpenAI developer docs). **Long-context pricing surcharge:** for GPT-5.4 and GPT-5.4 Pro, **prompts above 272K input tokens are priced at 2× input and 1.5× output** — so the advertised 1.05M window costs materially more per token than the headline rate suggests across most of its range.
- **Modalities:** **text and image in; text out.** Reasoning: yes, at maximum budget. Tool calling, function calling, web search (the `web` alias implies retrieval-augmented operation), structured output / JSON schema and prompt caching supported. No documented audio or video input.
- **Pricing (as of 2026-10-13):** **$30.00 / MTok input, $180.00 / MTok output**. Confirmed identical at Artificial Analysis and OpenAI-via-OpenRouter on 2026-10-13. **Vector Wire's field-relative reading: "costs more than 99% of 328 priced models"** at a 3:1 blend — the most expensive model in the tracked field. **No cached-input rate is published for this model**, which is unique in its launch cohort. The 272K surcharge compounds this further. No free tier.
- **Architecture:** proprietary. Parameter count not disclosed.

### Raw benchmarks found

> Source ledger: 19 results / 17 benchmarks / 10 sources on 7 sites — **11
> independently verified, 1 aggregator, 7 vendor cross-reference**. **Anthropic's
> Claude Opus 4.7 system card supplies 6 of the 19**, which is unusual and worth stating:
> a third-party competitor's published system card is now a primary evidence source for
> an OpenAI model. Vector Wire rates **Reasoning "Capable, −22.9%"** and **Math "Capable,
> −24.6%"**, **Factuality "Limited, −31.8%"**, and returns **"too few results yet" for
> seven capabilities** — Coding, Agentic, Long Context, Multimodal, Instruction
> Following, Safety and Multilingual.

Reasoning — **the strongest verified block in this batch**:

- **ARC-AGI-2: 83.33% — Verified at `xhigh`** (arcprize.org, 2026-05-10; corroborated at 83.30% in the Opus 4.7 system card). **This is 30 points above GPT-5.2's 52.91% Verified and 65 points above GPT-5.1's 17.64% Verified** — the single largest generation-over-generation abstract-reasoning jump recorded anywhere in these ten files.
- **ARC-AGI-1: 94.50% — Verified at `xhigh`** (corroborated in the Opus 4.7 system card).
- **GPQA Diamond: 94.40%** (cross-referenced, Opus 4.7 system card) — confirms the 94.4–94.6% band and the #5-of-455 placement this file recorded.
- **Humanity's Last Exam: 42.70% without tools** (cross-referenced) and **58.70% with tools** (Opus 4.7 system card).
- **CritPt: 30.00%** at `xhigh` — **more than double GPT-5.3-Codex's 16.86%**, the previous high in this batch.

Math — **the strongest math block in this batch**:

- **FrontierMath Tiers 1–3 (v2): 82.46% — Verified at `xhigh`** (Epoch, 2026-09-21), against GPT-5.2's 67.40% Verified.
- **FrontierMath Tier 4: 58.54% — Verified at `xhigh`** (2026-09-21), against GPT-5.2's 31.70% Verified — and an earlier Verified reading of **37.50%** (2026-05-20). **The two Verified Tier-4 rows disagree by 21 points**, and the later one is preferred; both are recorded. **58.54% on the hardest frontier maths tier is the highest number in this batch by a wide margin.**

Agent / tool use — **a single extraordinary new row**:

- **BrowseComp: 89.30%** (cross-referenced, Opus 4.7 system card). BrowseComp is among the hardest agentic retrieval benchmarks in public use; **89.30% would be a frontier result on any model**, and it is the reason the tool-use score moves as far as it does.
- **Finance Agent: 61.50%** (cross-referenced) — strong for a professional finance-agent workflow.
- Terminal-Bench 55.1%, GDPval, τ²-Bench, MCP Atlas, GAIA, OSWorld, Toolathlon: still **no score in the aggregator record for this checkpoint.** The Terminal-Bench 55.1% recorded on 2026-10-01 is retained from this file's prior research.

Instruction following:

- **MultiChallenge: 69.23% — Verified** (Scale Labs, snapshot 20260305). New, and the only instruction-following measurement on record.

Factuality:

- **SimpleQA Verified: 46.30% — Verified at `xhigh`** (Epoch, 2026-05-20) — strong, and the second-highest SimpleQA reading in this batch behind GPT-5.1's 48.00%.
- **Vectara (Verified, snapshot 20260305): HHEM hallucination rate 8.30, answer rate 100.00%, factual consistency 91.70%, average summary length 148.50 words.** Clean, though less exceptional than GPT-5.4 nano's 3.10 / 96.90%.

Long context, vision and coding:

- **No measurement of any kind** on this record for **AA-LCR, MRCR, RULER, GraphWalks, MMMU, MMMU-Pro, DocVQA, CharXiv, SWE-bench Verified, SWE-bench Pro, Terminal-Bench, LiveCodeBench, SciCode or Aider Polyglot.** Vector Wire returns "too few results yet" for Long Context, Multimodal and Coding alike. The 1.05M window, the 128K output ceiling, the image input modality and the SWE-bench 71.8% recorded on 2026-10-01 all stand from this file's prior research; none of them has gained independent corroboration since.

### Normalized scores (1–100)

- **Tool use: 78/100.** *Revised up from 65 — the largest single move in this file.* The previous version scored this down on **Terminal-Bench 55.1%**, roughly 20 points below flagship GPT-5.4, and noted that the finding was one two independent aggregators agreed on. **BrowseComp at 89.30%** now sits alongside it, and BrowseComp measures something Terminal-Bench does not: open-ended agentic retrieval and synthesis under a hard accuracy bar. **Finance Agent at 61.50%** on a professional workflow is also strong, and **MultiChallenge 69.23% (Verified)** confirms it can follow multi-turn constraints. **Vectara factual consistency at 91.70% (Verified)** supports it. Honest limits: **Terminal-Bench 55.1% remains the only terminal-agent figure**, no MCP Atlas, τ²-Bench, GAIA or OSWorld number exists for this checkpoint, and **Vector Wire declines to rate the Agentic capability at all (0 of 7 benchmarks)**. This is a model whose agentic strength is in *research and retrieval*, not in driving a terminal — a distinction the evidence now supports rather than merely implies.
- **Reasoning: 96/100.** *Revised up from 94.* The previous version called this "the highest reasoning score in this dataset." It still is, and the margin is now larger. **ARC-AGI-2 at 83.33% (Verified)** is 30 points above GPT-5.2's Verified 52.91% and 65 above GPT-5.1's 17.64% — abstract reasoning, the one axis where the previous GPT-5 flagships showed a narrow rather than general capability, is where this model most decisively separates. **ARC-AGI-1 at 94.50% (Verified)**, **FrontierMath Tier 4 at 58.54% (Verified)** against GPT-5.2's 31.70%, **CritPt at 30.00%** against GPT-5.3-Codex's 16.86%, **GPQA 94.40%**, **HLE 42.70% without tools and 58.70% with** — all support it. Held at 96 rather than higher because **Vector Wire rates Reasoning only "Capable, −22.9%"**, because **no AIME, HMMT or Putnam figure exists on this record**, and because the two Verified FrontierMath Tier-4 rows disagree by 21 points (58.54% and 37.50%), which is a real caution about the headline.
- **Context window: 95/100.** *Unchanged.* **1,050,000 tokens input, 128,000 tokens max output** — the methodology's "≥1M = 95–100" band, at its floor. Unchanged because **nothing has arrived to move it**: no AA-LCR, no MRCR, no RULER, no GraphWalks, and **Vector Wire returns "too few results yet" for Long Context**. The 100 tier requires ≥98% retrieval at 512K+, and with **no retrieval measurement at all** the score stays where spec alone can justify it. The **272K surcharge — 2× input, 1.5× output above 272K tokens** — is the practical caveat that keeps this from the tier's ceiling.
- **Multimodal: 68/100.** *Unchanged.* **Text and image in; text out**, in the methodology's "+image in = 60–70" band, above its midpoint on what the GPT-5.4 generation demonstrates generally and below its ceiling on what is measured *for this checkpoint* — which is **nothing**: no MMMU, MMMU-Pro, DocVQA or CharXiv figure exists, and Vector Wire declines to rate Multimodal. There is no new evidence in either direction, so the line holds rather than moving on absence. No audio or video input is documented, so the 75–90 and 90–100 bands are unreachable regardless.
- **Coding: 74/100.** *Unchanged.* **SWE-bench 71.8%** from the previous version's research stands, and remains a solid absolute result that is clearly not the family's best code model — which is the point of a Pro reasoning tier. Also unchanged: **no SWE-bench Pro, SWE-bench Verified board reading, LiveCodeBench, SciCode, Terminal-Bench or Aider Polyglot figure exists on the aggregator record for this checkpoint**, and **Vector Wire declines to rate Coding**. For reference, GPT-5.3-Codex records **85.0% on the official SWE-bench board** at a fraction of the price. Nothing new arrived in this pass, so the score holds.
- **Cost efficiency: 10/100.** *Revised down from 12.* Unchanged rate card at **$30.00 / $180.00**, confirmed identical at both providers on 2026-10-13. What settles it is **"costs more than 99% of 328 priced models"** — the most expensive model in Vector Wire's entire tracked field of 328, against GPT-5.2's 87%, GPT-5.3-Codex's 87% and GPT-5.4 mini's 69%. The compounding factors are unchanged and all still apply: **no published cached-input rate at all**, unique in this launch cohort; **the 272K long-context surcharge at 2× input and 1.5× output**; **no free tier**; and a 6× output-to-input ratio on a maximum-budget reasoning model where thinking tokens dominate the bill. BenchLeader's reading that this is priced as a scarce professional research instrument rather than a product is the correct one.
- **Overall Score: 82/100.** (78 + 96 + 95 + 68 + 74) / 5 = 411 / 5 = 82.2 → **82**, up from 79. **Cost efficiency is reported but excluded from the five-dimension average** — which is the single most important thing to understand about this number. **The highest-scoring model in this batch is also, by a factor of two, the most expensive thing in it.** Best fit, with the caveat stated first: **frontier scientific and mathematical reasoning, abstract-reasoning research, and frontier agentic information retrieval** — the ARC-AGI-2 result at 83.33% and FrontierMath Tier 4 at 58.54% are the concrete justifications, and **BrowseComp at 89.30%** is what makes the agentic retrieval claim real rather than rhetorical. For a research-lab budget where a single verified result is worth more than its compute cost, this is the model in the set. **For anything volume-shaped it is unusable**, and the two dimensions it cannot be scored on independently — **multimodal and coding** — are exactly the two that most production workloads turn on, which is a caution the aggregate score hides.

---

## Signature

- Provided by: **Space Bunny (opencode/space-bunny-free)** — 2026-10-13
- Method: third pass over this agent's own report for this slug (79 → **82**).
  New evidence is concentrated in **Vector Wire's GPT-5.4 Pro record**, fetched 2026-10-13:
  **19 results on 17 benchmarks from 10 sources on 7 sites — 11 independently verified,
  1 aggregator, 7 vendor cross-reference, latest 2026-10-12** — supplying the
  field-relative price reading and the per-capability verdicts (**Reasoning "Capable,
  −22.9%"**, **Math "Capable, −24.6%"**, **Factuality "Limited, −31.8%"**, and **seven
  capabilities returning "too few results yet"**, including Coding, Agentic, Long Context
  and Multimodal).
  Load-bearing figures: **ARC-AGI-2 83.33% and ARC-AGI-1 94.50% (both Verified)**,
  **FrontierMath Tiers 1–3 82.46% and Tier 4 58.54% / 37.50% (both Verified)**,
  **CritPt 30.00%**, **GPQA Diamond 94.40%**, **HLE 42.70% without tools and 58.70% with
  tools**, **BrowseComp 89.30%**, **Finance Agent 61.50%**, **MultiChallenge 69.23%
  (Verified, Scale Labs)**, **SimpleQA Verified 46.30% (Verified, Epoch)**, **Vectara HHEM
  8.30 with 91.70% factual consistency and 100.00% answer rate (Verified)**, and the
  `gpt-5.4 pro (web)` alias, which indicates a retrieval-augmented configuration.
  **A provenance note worth stating plainly: Anthropic's Claude Opus 4.7 system card
  supplies 6 of the 19 results** — GPQA 94.40%, ARC-AGI-1 94.50%, ARC-AGI-2 83.30%,
  BrowseComp 89.30%, Finance Agent 61.50% and HLE-with-tools 58.70%. A competitor's
  published system card is now a primary evidence source for an OpenAI model, which is
  unusual and is treated here as cross-reference rather than vendor self-report.
  **Two conflicts adjudicated explicitly.** First: **FrontierMath Tier 4 — 58.54%
  (Verified, 2026-09-21) against 37.50% (Verified, 2026-05-20)**; two independently
  verified rows on the same benchmark and effort setting disagree by 21 points, the later
  reading is preferred for scoring, and both are recorded because the gap is itself
  informative. Second: **Terminal-Bench — 55.1% carried from this file's 2026-10-01
  research against the complete absence of any Terminal-Bench row on the current
  aggregator record**; the prior figure is retained and flagged as uncorroborated rather
  than discarded or silently upgraded. **Two dimensions could not be moved at all** —
  multimodal and coding have no measurement for this checkpoint on any source consulted,
  Vector Wire returns "too few results yet" for both, and both scores are held rather than
  revised. Scores are normalized 1–100 interpretations per `model-comparison.md`, not
  official vendor scores, and **cost efficiency is reported but excluded from the overall
  average** — without which this would rank last in the batch despite scoring highest.
- Future sources: add a new file next to this one, e.g. `GPT_5_5_Pro.md`, using the same
  headings — **AIME, HMMT and Putnam figures, and any independent coding or multimodal
  measurement, are the two gaps most worth closing**, since three of five averaged
  dimensions currently rest on a 19-result record. The 1M-context retrieval question
  remains entirely open and would move context window immediately if answered.