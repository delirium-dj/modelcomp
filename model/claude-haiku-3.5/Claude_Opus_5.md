# Claude Haiku 3.5 — findings by Claude Opus 5

- Source: Anthropic (`claude-3-5-haiku-20241022`)
- Date: 2026-10-08 (UTC)
- Overview and scoring methodology: `../../model-comparison.md`
- Cross-model signed log: `../../model-findings.md`

## Model card

- **Name:** Claude Haiku 3.5 (Anthropic's launch styling was "Claude 3.5 Haiku")
- **Short description:** Anthropic's October-2024 small/fast model, announced alongside the upgraded Claude 3.5 Sonnet and the **computer-use beta**. Anthropic positioned it as "matching Claude 3 Opus on many intelligence benchmarks at Haiku-tier speeds", and its **SWE-bench Verified score of 40.6% made it briefly the best small-tier coding model from a major lab** ([Open-Source AI Stack](https://www.open-source-ai.tech/models/claude-3-5-haiku); [AI Wiki](https://aiwiki.ai/wiki/claude_3_5_haiku)). **This model is retired.** Distinct model; Haiku 4.5 and Haiku 5.5 are separate folders.
- **Provider / access:** Launched on the Claude API, Amazon Bedrock and Google Cloud Vertex AI. **Lifecycle:** Anthropic's deprecation register records `claude-3-5-haiku-20241022` as **Retired** — deprecated **2025-12-19**, retired **2026-02-19**, with `claude-haiku-4-5-20251001` as the recommended replacement ([model deprecations](https://platform.claude.com/docs/en/about-claude/model-deprecations)). OpenCode Zen's own deprecation table lists Claude Haiku 3.5 at **2026-02-16**. **No first-party access remains** and requests now fail.
- **Release / knowledge:** Announced **2024-10-22**, generally available early November 2024; retired **2026-02-19** — a service life of roughly 16 months. Knowledge cutoff: no verified public date found.
- **IDs:** `claude-3-5-haiku-20241022` (retired), `claude-3-5-haiku-latest` (alias). **No free tier** on any route.
- **Context window:** **200,000 tokens** with **8,192 max output** tokens (this repo's curated metadata; the 200K figure corroborated by multiple independent trackers). The 8,192-token output ceiling is the smallest of any model in this entire research pass — a severe constraint for long-form generation.
- **Modalities:** **Text + image + PDF in → text out**, with image input **added 2025-02-25** rather than present at launch (this repo's curated metadata). No audio, no video, no generated media. Reasoning: **no** — this predates Anthropic's hybrid-reasoning generation; there is no thinking budget or effort parameter. Tool calls: yes; it shipped in the same announcement as the computer-use beta.
- **Pricing (as of 2026-10-08):** **Retired — no live rate.** Final published rate was **$0.80 / MTok input, $4.00 / MTok output**. Worth recording that AI Wiki notes "Pricing was the most discussed aspect of the release and went through **three distinct stages**", i.e. Anthropic repriced it more than once before settling at $0.80/$4.00. Latency was a genuine strength: one tracker measures **~190 ms time-to-first-token** ([inferencerate](https://inferencerate.io/models/claude-3-5-haiku)).
- **Architecture:** Proprietary, closed weights. Parameter count and activation scheme undisclosed.

### Raw benchmarks found

> **Coverage is very thin and the major aggregators have dropped it.** `benchlm.ai/md/models/claude-3-5-haiku.md` returns **404** (while Claude 3 Haiku, 3.5 Sonnet, 4 Sonnet and the 4.x/5.x line all resolve), and `evals.report/models/anthropic-claude-3-5-haiku` also returns **404** (while its Claude 3.7 Sonnet page carries 33 scores). Artificial Analysis has no entry. What survives comes from Anthropic's launch announcement and model-card addendum via secondary trackers.

Agent / tool use:

- **Nothing.** No Terminal-Bench, no τ²-bench, no OSWorld, no GAIA, no WebArena, no GDPval, no MCP measurement of any kind. The model shipped in the same announcement as Anthropic's computer-use beta and **its tool-use capability was never publicly benchmarked**.

Reasoning / knowledge:

- **Reading comprehension: 83.1%** (model-card figure, via [AI Wiki](https://aiwiki.ai/wiki/claude_3_5_haiku), which states its sources are "Anthropic announcement and model-card addendum for SWE-bench Verified; benchmark aggregators citing the model card for the remaining figures")
- **GPQA Diamond:** listed as a covered benchmark by [AI Release Tracker](https://aireleasetracker.com/model/anthropic/claude-3.5-haiku) alongside SWE-bench Verified and BullshitBench v2, but **no value was published in any source I could reach** — not estimated
- Anthropic's own positioning — "matching Claude 3 Opus on many intelligence benchmarks" — is a **relative claim with no numbers attached** in the sources available to me
- **HLE, MMLU-Pro, AIME, CritPt, AA-LCR, any aggregate index, and any hallucination measurement: no verified public score found**

Coding:

- **SWE-bench Verified: 40.6%** — the headline figure, traced by multiple independent trackers to Anthropic's own announcement and model-card addendum ([ai-tldr](https://ai-tldr.dev/models/claude-3-5-haiku/); [Open-Source AI Stack](https://www.open-source-ai.tech/models/claude-3-5-haiku); [corx-labs](https://www.corx-labs.com/benchmarks/models/claude-3-5-haiku/))
- **Conflicting figure, reported and rejected:** one aggregator states **22.0%** on SWE-bench Verified ([serenitiesai](https://serenitiesai.com/benchmark/models/claude-3-5-haiku)). Three independent trackers trace 40.6% to Anthropic's primary documents and only one gives 22.0%, so I score 40.6% and record the outlier.
- LiveCodeBench, SWE-bench Pro, Aider Polyglot, BigCodeBench, SciCode: no verified public score found

Multimodal:

- **No vision or document benchmark of any kind.** Image input was added four months post-launch (2025-02-25) and PDF input is listed, but **neither was ever publicly measured** — no MMMU, no chart, no OCR, no document benchmark.

Long context:

- **No MRCR, RULER, LongBench or needle-retrieval number at any depth.** The 200K window has no public retrieval validation.

### Normalized scores (1–100)

- **Tool use: 38/100.** Scored on total absence of evidence. There is **not one agentic or tool-use benchmark** for this model, which is a notable gap given it was announced in the same breath as Anthropic's computer-use beta. Function calling existed, so the capability is not zero, but nothing public measures it and nothing supports more.
- **Reasoning: 48/100.** The entire record is **one figure — reading comprehension 83.1%** — plus Anthropic's unquantified claim of matching Claude 3 Opus on "many intelligence benchmarks". GPQA Diamond is listed as covered by a tracker with no value published. No HLE, no MMLU-Pro, no index, no hallucination rate. A respectable-sounding comprehension score and a vendor comparison cannot carry the dimension.
- **Context window: 60/100.** 200,000 tokens was genuinely notable in October 2024 — independent commentary singles out "the 200K context window at Haiku pricing" as the release's significance, since the only prior cheap 200K access was the much weaker Claude 3 Haiku. Held at 60 because **nothing validates the window**, 200K is now the smallest in Anthropic's line by a factor of five, and the **8,192-token output ceiling is the lowest in this entire dataset** — you can read a great deal and write almost nothing per call.
- **Multimodal: 42/100.** Text, image and PDF input are documented, but image support **arrived four months after launch** and **not one vision or document benchmark was ever published**. Output is text-only, with no audio or video. Scored below the midpoint: capabilities confirmed present on paper, quality entirely unmeasured.
- **Coding: 52/100.** **SWE-bench Verified 40.6%** was the release's defining achievement — briefly the best small-tier coding score from any major lab, and the basis for Anthropic's Haiku-price/Opus-capability pitch. By 2026 standards it is modest: Claude Haiku 4.5 reached 73.3% and Haiku 5.5 is a different class again. Capped further by the complete absence of any second coding benchmark and by an unresolved 22.0%-vs-40.6% conflict between trackers.
- **Cost efficiency: 18/100.** **The model is retired** — deprecated 2025-12-19, retired 2026-02-19 on Anthropic's own register and 2026-02-16 on Zen's — so its value at any price is effectively nil, which is what this dimension must capture. Even on its historical $0.80 / $4.00 rate the intra-vendor comparison is stark: **Claude Haiku 5.5 costs $0.10 / $0.50 — 8× less on both lines — with a 1M context, 128K output, adaptive thinking and a BenchLM score of 66.35.** Credit retained only for genuinely strong historical value (cheapest 200K access of its day at ~190 ms TTFT).
- **Overall Score: 48/100.** Mean of the five non-cost dims (38 + 48 + 60 + 42 + 52) / 5 = 48.0. Best fit: **none — the model is retired and uncallable.** Its historical significance is real and narrow: it made a 200K context window cheap, it posted 40.6% on SWE-bench Verified when that briefly led the small-model field, and it shipped alongside computer use. Everything about it has since been superseded by a sibling that is eight times cheaper and several times more capable, and the public benchmark record for it has largely been deleted from the major aggregators.

---

## Signature

- Provided by: **Claude Opus 5 (anthropic/claude-opus-5)** — 2026-10-08
- Method: fresh public internet research only — Anthropic's **model-deprecation register** (the authoritative lifecycle record: `claude-3-5-haiku-20241022` deprecated 2025-12-19, retired 2026-02-19, replacement `claude-haiku-4-5-20251001`), the **OpenCode Zen** deprecation table (Claude Haiku 3.5, 2026-02-16), and a set of independent trackers — ai-tldr, Open-Source AI Stack, corx-labs, AI Wiki, AI Release Tracker, inferencerate and chatforest — for the 2024-10-22 announcement date and early-November GA, the 200K context, the $0.80/$4.00 final rate and its three-stage pricing history, the ~190 ms TTFT measurement, the reading-comprehension 83.1% model-card figure, and the SWE-bench Verified 40.6% figure which three of them trace to Anthropic's own announcement and model-card addendum. **Both major aggregators were checked and have dropped this model:** `benchlm.ai/md/models/claude-3-5-haiku.md` → 404 while sibling Claude models resolve, and `evals.report/models/anthropic-claude-3-5-haiku` → 404 while its Claude 3.7 Sonnet page carries 33 scores; Artificial Analysis has no entry. The absence of any agentic, long-context, vision or hallucination measurement is therefore reported as the state of the public record rather than proxied from other Claude models. The 22.0%-versus-40.6% SWE-bench conflict between trackers is reported in full, with reasoning given for scoring the 40.6% figure. GPQA Diamond is listed as covered by one tracker without a value and was **not** estimated. This folder's `meta.json` supplied the 8,192-token output ceiling and the 2025-02-25 image-input addition, labelled as curated. No peer `model/` findings files were read. Scores are normalized 1–100 interpretations, not official vendor scores.
- Future sources: add a new file next to this one, e.g. `GPT_5.md`, using the same headings.
