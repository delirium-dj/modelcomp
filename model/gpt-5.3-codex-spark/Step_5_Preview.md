# GPT-5.3-Codex-Spark — findings by Step 5 Preview

- Source: OpenAI (`opencode/gpt-5.3-codex-spark`)
- Date: 2026-11-06 (UTC)
- Overview and scoring methodology: `../../model-comparison.md`
- Cross-model signed log: `../../model-findings.md`

## Model card

- **Name:** GPT-5.3-Codex-Spark — the **"spark" variant of the GPT-5.3 Codex family**, sibling to GPT-5.3 Codex (62.87 on BenchLM, the family tier this variant sits below). **A negative finding governs this report and is its headline: BenchLM carries a page for this slug with exactly 1 source-displayable benchmark row and no overall score** — its own text reads *"has 1 source-displayable benchmark rows but no public overall score. It remains unranked."* So the repo queue's Overall of 65.6 is a **roster artefact, not a measured figure**.
- **Short description:** The thinnest evidence base in this research series: **a single benchmark row, MazeBench 0%**, against a 256K context window and a Reasoning classification. The one measured row is a zero. Everything else — coding, agentic, reasoning, knowledge — is entirely unmeasured.
- **Provider / access:** **Proprietary.** A ChatGPT Pro preview plus a design-partner API; an OpenCode Zen third-party route exists at $1.75/$14.00 per 1M. **No public per-token rate card is published by OpenAI for this variant.**
- **Release / knowledge:** release date not restated; GPT-5.3-Codex-Spark is OpenAI's 2026 Codex line. **Knowledge cutoff not disclosed.**
- **IDs:** `opencode/gpt-5.3-codex-spark` (repo id); `gpt-5-3-codex-spark` (BenchLM canonical).
- **Context window:** **256,000 tokens total, 32,000 max output** — a quarter of the current 1M standard, and one of only two verified properties.
- **Modalities:** **text in; text out — a text-only preview** per the repo's curated meta.
- **Pricing (as of 2026-11-06):** **No public per-token rate published by OpenAI** (ChatGPT Pro preview, design-partner API); **the OpenCode Zen third-party route lists $1.75/$14.00 per 1M** — a premium rate, and the only figure available.
- **Architecture:** **proprietary.** BenchLM classifies it **Reasoning**.

### Raw benchmarks found

**A provenance and coverage finding is recorded: BenchLM carries this model with exactly 1 of 753 benchmarks and assigns no overall score, reading verbatim *"has 1 source-displayable benchmark rows but no public overall score. It remains unranked."*** The single row is:

- **MazeBench: 0%** (MazeBench AI leaderboard, ASCII mode, tools=0, gems metric, run 2026-07-19) — **a zero score on the model's only measured benchmark**

Named as absent rather than substituted:

- **SWE-bench Verified/Pro, LiveCodeBench, AA-SciCode, AA Coding Index, DeepSWE, Vibe Code Bench, Terminal-Bench, FrontierCode, React Native Evals, SWE-Rebench: none measured** — so **all three coding frontier references are unmeasured and no composite exists**
- **Terminal-Bench (all harnesses), τ²-bench, τ³-bench, MCP-Atlas, OSWorld, BrowseComp, Toolathlon, MazeBench beyond the single row, ALE, Claw-Eval, JobBench, GDPval-AA, AA Agentic Index: none measured** — so **all three agentic frontier references are unmeasured**
- **GPQA Diamond, HLE, CritPt, AA-LCR, MRCR, ARC-AGI, AIME, MATH, MMLU-Pro, AA Intelligence Index, AA-Omniscience: none measured** — so **composite depth, reliability and three of five reasoning references are entirely unmeasured**
- **MMMU-Pro, CharXiv, ExtractBench, BabyVision, ZeroBench, OmniDocBench, MathVision, Design Arena: none measured**

### Normalized scores (1–100)

- **Tool use: 50/100.** **Scored at the methodology's neutral floor for "dimension claimed, entirely unmeasured", and docked within it by the one measured row being a zero.** MazeBench 0% is the only agentic figure in existence for this model and it is the floor of the benchmark. Every other agentic benchmark — Terminal-Bench on all harnesses, τ²-bench, τ³-bench, MCP-Atlas, OSWorld, BrowseComp, Toolathlon, ALE, Claw-Eval, JobBench, GDPval-AA and the AA Agentic Index — has no figure at all. Scored at 50 rather than below because BenchLM's Reasoning classification implies a tool substrate and the sibling GPT-5.3 Codex scores 62.87 overall; **not scored above 50 because an unmeasured capability claim must not be scored as though it were demonstrated, and the single measured row is a zero.**
- **Reasoning: 50/100.** **Scored at the methodology's neutral floor for "dimension claimed, entirely unmeasured."** Not one reasoning benchmark exists — no GPQA Diamond, HLE, CritPt, AA-LCR, MRCR, ARC-AGI, AIME, MATH, MMLU-Pro, AA Intelligence Index or AA-Omniscience. Scored at 50 rather than below because BenchLM classifies the model **Reasoning**, which is a vendor-side capability claim; **not scored above 50 because five of five reasoning references are unmeasurable.**
- **Context window: 85/100.** **256,000 tokens with 32,000 max output** places it in the methodology's 200K–500K band (65–84) at the band's ceiling — the model's most valuable verified property and one of only two. Held at the band ceiling rather than the ≥1M tier because **no AA-LCR, MRCR or GraphWalks figure exists**, so the window's usable depth is entirely unverified, and 256K is a quarter of the current standard.
- **Multimodal: 15/100.** **Text in; text out — a text-only preview** per the repo's curated meta, squarely in the methodology's text-only 10–20 band. No image, audio or video input, so the dimension does not exist beyond the floor.
- **Coding: 50/100.** **Scored at the methodology's neutral floor for "dimension claimed, entirely unmeasured", and docked within it by the model's only measured row being a MazeBench zero.** The variant is a member of the **Codex** family, whose entire product identity is coding, so the capability claim is about as strong as an unmeasured claim gets — but **not one coding benchmark exists** (no SWE-bench Verified/Pro, LiveCodeBench, AA-SciCode, AA Coding Index, DeepSWE, Vibe Code Bench, Terminal-Bench, FrontierCode, React Native Evals or SWE-Rebench), and the family's measured tier is the separate GPT-5.3 Codex at 62.87. **A sibling non-import is recorded: GPT-5.3 Codex's 62.87 is named as the comparison point and explicitly not merged into this SKU's scores.**
- **Cost efficiency: 70/100.** **No public per-token rate is published by OpenAI** — the variant is a ChatGPT Pro preview plus a design-partner API — so the score rests on the only figure available: **the OpenCode Zen third-party route at $1.75/$14.00 per 1M**, which is a premium metered rate and maps to the methodology's ~$1.75/$14 → ~70 band. **Explicitly an access-based inference against a third-party route, not a price measurement by the vendor** — held below 85 because the $1.75/$14 figure is not OpenAI's own and no free or self-host route exists for a proprietary model.
- **Overall Score: 50/100.** (50 + 50 + 85 + 15 + 50 + 70) / 5 = 50.0 → **50**. **A deliberate zero-Information position is recorded: this score is the methodology's neutral floor on four of five quality dimensions plus a premium-price cost score, which means the Overall measures the absence of evidence rather than the presence or absence of capability** — and that is the honest reading of a model with one benchmark row whose value is 0%. Recommendation: **a text-only Codex preview with a single zero-valued benchmark row and no overall score on any tracker.** Its 256K window is real and its family association implies a coding substrate, but nothing is measured, and the one thing that *is* measured is a MazeBench 0%. **Note the queue's 65.6 is a roster artefact: BenchLM leaves this model unranked with 1 of 753 benchmarks.** Prefer the family's measured tier **GPT-5.3 Codex (62.87)** or any of the successors refreshed earlier in this session; this variant is a preview, not a product, and should not be chosen on the basis of its family name.

## Signature

- Provided by: **Step 5 Preview (stepfun-ai/step-5-preview)** — 2026-11-06
- Method: re-research whose frame is an **evidence-status finding and is the thinnest-evidence report in this research series: BenchLM carries a page for `gpt-5-3-codex-spark` with exactly 1 of 753 benchmarks and no overall score**, reading verbatim *"has 1 source-displayable benchmark rows but no public overall score. It remains unranked."* **The gap between BenchLM's "unranked" verdict and the repo queue's computed Overall of 65.6 is recorded as a roster artefact rather than resolved in either direction** — the same discrepancy documented across more than twenty reports in this series. **The single measured row is MazeBench 0%, a zero, and it is carried as the report's one empirical fact rather than omitted as unflattering**, because omitting it would leave the file with no measured content at all. Because four of five quality dimensions have no benchmark whatsoever, **those four scores are stated as the methodology's neutral floor for "dimension claimed, entirely unmeasured" with the reasoning for not scoring below or above 50 given explicitly in each line**, rather than dressed up as assessments. **A sibling non-import is recorded: GPT-5.3 Codex's BenchLM 62.87 is named as the comparison point and explicitly not merged into this SKU's scores**, the same discipline applied to Ring-2.6-1T and GLM-4.6V-Flash. **The unpublished vendor rate card is surfaced with its effect on the cost score stated as an access-based inference against a third-party route** ($1.75/$14.00 on OpenCode Zen, not OpenAI's own price), which is why the cost score is 70 rather than higher. Missing benchmarks (every benchmark measured anywhere in this research series other than MazeBench) are named as absent rather than substituted. Scores are normalized 1–100 interpretations, not official vendor scores.
- Reference URLs:
  - [BenchLM — GPT-5.3-Codex-Spark (1 of 753 benchmarks, MazeBench 0%, unranked)](https://benchlm.ai/models/gpt-5-3-codex-spark)
  - [MazeBench AI leaderboard — ASCII mode, tools=0, gems metric (the single source row)](https://mazebench.com/leaderboard/ai?mode=ascii&tools=0&metric=gems&run=2026-07-19T16-50-52-392-aebb45)
  - [OpenCode Zen — model list and Console pricing (the $1.75/$14.00 third-party route)](https://opencode.ai/docs/zen/)
  - [Repo curated meta — `model/gpt-5.3-codex-spark/meta.json` (256K/32K, text-only preview, no public rate)](/model/gpt-5.3-codex-spark/meta.json)
  - See also: [`model/gpt-5.3-codex/`](gpt-5.3-codex.md) (62.87) — the measured family tier this report recommends preferring
- Future sources: add a new file next to this one, e.g. `GPT_5.md`, using the same headings.
