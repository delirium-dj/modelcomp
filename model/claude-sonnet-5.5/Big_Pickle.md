# Claude Sonnet 5.5 — findings by Big Pickle

- Source: Anthropic/Claude Sonnet 5.5 (`claude-sonnet-5-5`)
- Date: 2026-09-29 (UTC)
- Overview and scoring methodology: `../../model-comparison.md`
- Cross-model signed log: `../../model-findings.md`

## Model card

- **Name:** Claude Sonnet 5.5
- **Short description:** Anthropic's fast, well-scoped workhorse — second model in the Claude 5.5 family (released 2026-09-28, six days after Opus 5.5), pitched at bug fixing, everyday coding and polished documents/slides/spreadsheets rather than open-ended judgment. Not an alias: a distinct model ID with its own 148-page system card.
- **Provider / access:** Anthropic Messages API `claude-sonnet-5-5` (no date suffix); `global.anthropic.claude-sonnet-5-5` on Amazon Bedrock; same plain ID on Claude Platform on AWS, Google Cloud and Microsoft Foundry. Native Anthropic Messages endpoint, zero data retention available. No OpenCode Zen ID (paid Anthropic-direct only).
- **Release / knowledge:** 2026-09-28; knowledge cutoff June 2026. Retirement not sooner than 2027-09-28.
- **IDs:** `anthropic/claude-sonnet-5-5` (Anthropic); `anthropic.claude-sonnet-5-5` (Bedrock).
- **Context window:** 1M tokens, billed at the standard rate with no long-context premium; max output 128K (300K on the Batches API via the `output-300k-2026-03-24` beta). Verified from the Anthropic platform docs and launch page.
- **Modalities:** text + image in, text out; reasoning always on (adaptive thinking cannot be disabled — `between_tools` is the closest off switch); tool calls yes, but forced `tool_choice: any/tool` now returns HTTP 400 and strict tools are unavailable on Bedrock for this model; JSON mode via structured outputs.
- **Pricing (as of 2026-09-29):** $2 in / $10 out per 1M; cache read $0.20, cache write $2.50 (5 min) / $4 (1 h); batch $1 / $5; no fast mode. US-only inference adds a 1.1x multiplier; Google Cloud regional endpoint $2.20/$11. Anthropic's "up to 30% lower cost per task" comes purely from token efficiency, not a rate cut — Artificial Analysis measured the opposite at max effort ($7.60 per Index task, ~50% above Sonnet 5).
- **Architecture:** proprietary; parameter count not disclosed. Five effort levels (low, medium, high, xhigh, max); default high on the API, medium in Claude Code and the Claude apps.

### Raw benchmarks found

Agent / tool use:

- Terminal-Bench 4.0: **70.6%** (Anthropic launch table; Sonnet 5 = 10.3%, Opus 5.5 = 66.4% at xhigh). Independent Artificial Analysis run: **63.6%** (AA article headline 64%, pre-release build with a structured-output bug).
- Terminal-Bench-Science 0.1: **59.9%** (BenchLM); the AA article quotes **53%** — harness/version variance.
- GDPval-AA v2.1: **1844 Elo** (Anthropic / Artificial Analysis; Opus 5.5 1846, GPT-6 Sol 1487, Sonnet 5 1449). Normalized: **67.2%**.
- AA-Briefcase v1.1: **1811 Elo** (Opus 5.5 1822, Sonnet 5 1359).
- OSWorld 2.1: **80.1%** (partial-credit subset; Sonnet 5 57.0%, Opus 5.5 81.8%).
- AutomationBench (Zapier 1.0.6): **44.7%** system-card figure (vs Opus 5.5 42.5%); AA headline score 71%.
- Toolathlon Verified: **77.8%**; Pass@3 **85.2%**; all-pass (Pass³) 68.5%; 31.6 avg. turns (BenchLM).
- HARVEY LegalAgentBench (held-out): **93.1%** criterion-pass, 10.0% all-pass.
- DRACO: **87.0%**. GDP.pdf: **25.8%**.
- Tool-call batching (independent test, 9 headless Claude Code runs): **3 tool calls per run** vs 12–13 for Sonnet 5 — $0.057 / 12 s per run vs $0.157 / 48 s.
- Tau3-Banking / Tau2-Bench: **no verified public score found.**
- Claw-Eval / ClawProBench: **no verified public score found.**

Reasoning / knowledge:

- HLE (with tools): **64.5%** (Sonnet 5 54.9%, Opus 5.5 67.7%); HLE without tools 56.9%; AA-HLE 55.0%.
- AA-LCR (long-context reasoning): **82.7%**.
- CritPt: **31.4%**.
- GPQA Diamond: **no verified public score found.**
- Artificial Analysis Intelligence Index: **56** (max effort, #2 at launch behind Opus 5.5 at 58; +18 over Sonnet 5). BenchLM overall 80.49/100, **#5 of 512** (partial coverage, 61 of 486 benchmarks).
- AA-Omniscience Accuracy / Hallucination Rate: **54% / 47%** (Opus 5.5 = 66% / 59%); AA-Omniscience Index 32.3%.
- ArXivMath (Aug 2026): **86.8%** no tools / **95.2%** with tools. GMMLU 92.1%, MILU 91.6%.
- HealthBench Professional: **69.2%** (raw 77.1%). SpatialBench Verified 72.5%.
- MRCR: **no verified public score found** (AA-LCR 82.7% is the closest long-context proxy).

Coding:

- SWE-bench Pro: **81.3%** (system card; Sonnet 5 63.2%, Opus 5.5 89.9%).
- SWE-bench Multilingual: **90.3%**. SWE-bench Multimodal: **54.3%**.
- SWE-bench Verified: **no verified public score found.**
- DeepSWE: **71.0%**.
- AA-SciCode: **61.0%** (Anthropic quotes ~6 pts below Opus 5.5).
- FrontierCode 1.1 (Main): **46.2%** at max effort, **52.1%** at xhigh (Anthropic footnote: max scores lower because Claude Code's review skill over-edits); Extended 59.1%.
- CursorBench 4.0: **55.5%** at max effort; effort series 39.2% medium / 47.8% high / 53.1% xhigh / 55.5% max.
- FrontierSWE v2: **61.9%** (Opus 5.5 62.3%, GPT-6 Astra 65.5%).
- ProgramBench: **79.7%**.
- Vibe Code Bench: **no verified public score found.**

Long context:

- 1M-token window verified by Anthropic; AA-LCR **82.7%** is the only reported long-context retrieval number, so near-perfect retrieval at 512K+ is not demonstrated. No MRCR, RULER or GraphWalks figures published.

Multimodal / vision:

- Chartography: **61.6%** no tools, **90.2%** with tools. OfficeQA 76.9%, OfficeQA Pro 65.6%. BenchCAD Vision2Code 0.747 no tools / 0.963 with tools. Biomedical image analysis 72.2%.
- Anthropic: first Sonnet model to beat Pokémon Red working only from screenshots.

### Normalized scores (1–100)

- **Tool use: 93/100.** GDPval-AA 1844 and AA-Briefcase 1811 clear the 1750 frontier reference, OSWorld 2.1 at 80.1% and HARVEY LAB criterion-pass at 93.1% show frontier computer use, and Terminal-Bench 4.0 jumped 10.3% → 70.6% with 3-tool-call batching confirmed in an independent Claude Code run. Capped by the absence of any public Tau2/Tau3 or Claw-Eval number and by the independent AA Terminal-Bench run landing 7 pts lower (63.6%) than the vendor's 70.6%.
- **Reasoning: 88/100.** HLE 64.5% with tools and AA-LCR 82.7% are both above the 40%+ frontier marker, and the Intelligence Index of 56 puts it #2 at launch. Capped below 90 because AA-Omniscience factual accuracy is only 54% (Opus 5.5: 66%) and no GPQA Diamond figure has been published for this ID.
- **Context window: 96/100.** Verified 1M total with no long-context premium and a 128K max output puts it in the ≥1M tier. Held off 100 because the only published retrieval measure (AA-LCR 82.7%) is far short of the ~98% at 512K+ needed for the top mark, and no MRCR/RULER result exists.
- **Multimodal: 70/100.** Text + image input with no audio or video input and text-only output places it in the "+image in" band; strong verified vision work (Chartography 90.2% with tools, SWE Multimodal 54.3%) supports the upper end of that band but not the video/PDF tier.
- **Coding: 92/100.** SWE-bench Pro 81.3%, SWE Multilingual 90.3%, DeepSWE 71.0% and AA-SciCode 61.0% all sit at or above the DeepSWE 74% / SciCode 55% frontier markers, with CursorBench 55.5% within two points of Opus 5.5. Capped by FrontierCode 1.1 Main at only 46.2–52.1% and by max effort scoring below xhigh.
- **Cost efficiency: 82/100.** Paid tier at $2/$10 with a $0.20 cache read; cheaper per task than Opus 5.5 ($4/$20) but Artificial Analysis puts it off the Intelligence-vs-Cost Pareto frontier at $7.60 per Index task on max effort, ~7x GPT-6 Astra's token use.
- **Overall Score: 88/100.** (93 + 88 + 96 + 70 + 92) / 5 = 87.8 → 88. Best fit: the default high-value Sonnet for production agentic coding, terminal work and knowledge-work automation at 1M context — run it at medium effort for routine tasks and reserve max for evals, since max burns ~22x the tokens for identical results on independent testing.

---

## Signature

- Provided by: **Big Pickle (opencode/big-pickle)** — 2026-09-29
- Method: public internet research (Anthropic launch page + 148-page system card, Artificial Analysis launch article, BenchLM model page, independent hands-on review with live-API and Claude Code runs). Scores are normalized 1–100 interpretations, not official vendor scores. Vendor and third-party harnesses disagree on several values (Terminal-Bench 70.6% vs 63.6%, Terminal-Bench-Science 59.9% vs 53%); both figures are listed above rather than averaged.
- Future sources: add a new file next to this one, e.g. `Big_Pickle_Sonnet_5.5.md`, using the same headings.
