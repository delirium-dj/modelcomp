# Claude Sonnet 5.5 — findings by Kimi K3

- Source: Anthropic/Claude Sonnet 5.5 (`claude-sonnet-5-5`)
- Date: 2026-10-09 (UTC) — deep second pass (first pass 2026-09-29; system-card PDF + independent leaderboards now fill first-pass gaps)
- Overview and scoring methodology: `../../model-comparison.md`
- Cross-model signed log: `../../model-findings.md`

## Model card

- **Name:** Claude Sonnet 5.5
- **Short description:** Second model in Anthropic's Claude 5.5 family, positioned as "the best combination of speed and intelligence" — strongest at well-scoped everyday agentic tasks, bug fixing, and polished documents/slides/spreadsheets; faster, lower-cost complement to Opus 5.5 (llm-stats.com).
- **Provider / access:** Anthropic Messages API (`claude-sonnet-5-5`), Amazon Bedrock (`anthropic.claude-sonnet-5-5`), Google Cloud Vertex AI / Microsoft Foundry / Claude Platform on AWS. llm-stats.com lists 1 tracked provider (Anthropic direct): TTFT p95 0.40s. Not listed on OpenCode Zen as of research date (Zen carries `claude-sonnet-5` only).
- **Release / knowledge:** Released 2026-09-28 (llm-stats.com official tracking); knowledge cutoff June 2026 (llm-stats.com license/spec section).
- **IDs:** `anthropic/claude-sonnet-5-5` (Claude API ID `claude-sonnet-5-5`). No Free ID on Zen — not on the Zen endpoint list.
- **Context window:** 1M tokens total; 128K max output synchronous (llm-stats.com provider table confirms 1.0M/128K), up to 300K output on Message Batches with the `output-300k-2026-03-24` beta header (Claude Platform models overview).
- **Modalities:** Text + image in, text out; vision and PDF support (Files API); adaptive thinking on by default (effort low→max; API default high); tool calls with `tool_choice: auto|none` only (forced tool use returns 400 on this model); structured outputs; Pokémon Red via screenshots only (Anthropic announcement).
- **Pricing (as of 2026-10-09):** $2/M input, $10/M output; cached input **$0.10/M per llm-stats.com** — CONFLICT with first-pass $0.20/M (0.1x convention); llm-stats' live provider row governs until Anthropic's pricing page is re-checked. Cache writes $2.50/M; Batch API 50% off; ~30% lower cost per task than Sonnet 5 via reduced tokens (Anthropic). Paid only; zero data retention available.
- **Architecture:** Proprietary (no public parameter count).

### Raw benchmarks found

Agent / tool use:

- Terminal-Bench 4.0: **70.6%** (Anthropic announcement; Sonnet 5: 10.3%, Opus 5.5: 66.4%) — independent AA measurement: **63.6%** (artificialanalysis.ai Terminal-Bench v4.0; conflict flagged, both kept)
- Terminal-Bench-Science 0.1: **59.9%** (system card PDF)
- GDPval-AA v2.1: **1844 Elo** (Anthropic/AA pre-release run; Opus 5.5: 1846) / normalized **67.0%** (artificialanalysis.ai)
- AA-Briefcase v1.1 (long-horizon knowledge work): **1811 Elo** (system card; Opus 5.5: 1822, Sonnet 5: 1359)
- OSWorld 2.1: **80.1%** partial (Anthropic; Sonnet 5: 57.0%, Opus 5.5: 81.8%)
- Toolathlon-Verified: **77.8%** (Pass@3 85.2%, Pass³-all 68.5%, avg 31.6 turns) (system card PDF — fills first-pass gap)
- DRACO: **87.0%**; AutomationBench (Zapier 1.0.6): **44.7%** (system card); AA AutomationBench: **71.8%** (artificialanalysis.ai)
- AA Harvey LAB v1.0: **93.1%** (artificialanalysis.ai; system card LAB all-pass 10.0% / criterion-pass 93.1%)
- AA-AnalystAgent: **57.5%**; GDP.pdf: **25.8%** (artificialanalysis.ai)
- Tau3-Banking / Claw-Eval / MCP-Atlas: no verified public score found

Reasoning / knowledge:

- Humanity's Last Exam: **64.5%** w/ tools (Anthropic; Opus 5.5: 67.7%); HLE no-tools: **56.9%** (system card); AA-HLE: **55.0%** (artificialanalysis.ai)
- Artificial Analysis Intelligence Index: **56** (artificialanalysis.ai — confirmed)
- AA-LCR: **82.7%**; CritPt: **31.4%**; MLCR-AA: **75.0%** (artificialanalysis.ai — fill first-pass gaps)
- ArXivMath Aug. 2026: **86.8%** no-tools / **95.2%** with tools (system card PDF)
- AA-Omniscience Accuracy / Hallucination: **54.0% / 47.0%**; Omniscience Index 32.3 (artificialanalysis.ai)
- HealthBench: 69.4% raw / 65.4% len-adj; HealthBench Professional 77.1% raw / 69.2% (system card); BioMysteryBench 89.2% solvable / 44.7% difficult; SpatialBench Verified 72.5%; protein-design/medicinal-chem/single-cell suite 51.0–82.3% (system card)
- Multilingual: GMMLU 92.1%, MILU 91.6% (system card)
- BenchLM overall: **83.82/100, #3 of 889** (benchlm.ai, 2026-10-09)

Coding:

- SWE-bench Pro: **81.3%** (system card PDF — fills first-pass gap); SWE Multilingual: **90.3%**; SWE Multimodal: **54.3%** (system card)
- FrontierCode 1.1 Main: **46.2%** at Max effort (Anthropic footnote: Max scores lower than Xhigh here; Opus 5.5: 54.4%); Extended: **59.1%** (system card)
- CursorBench 4.0: **55.5%** (cursor.com/cursorbench; Opus 5.5: 57.8%)
- DeepSWE: **71.0%**; ProgramBench: **79.7%** (system card)
- FrontierSWE v2: **61.9%** (Proximal frontierswe.com); AA-SciCode: **61.0%** (artificialanalysis.ai); Bug Hunt Bench: **51.3 fixes** (bughunt.productcompass.pm — above GPT-6 Astra's 45.0)
- Terminal-Bench 4.0 70.6% (above); LiveCodeBench / SWE-bench Verified (native): no verified public score found

Long context:

- AA-LCR 82.7% at 1M (artificialanalysis.ai — first third-party long-context probe, resolves first-pass cap); no MRCR/RULER public score found.

Multimodal:

- Chartography: 61.6% no-tools / **90.2%** with tools (system card); BenchCAD Vision2Code: 0.747 / **0.963** with tools (≥ GPT-6 Astra's 0.959); OfficeQA: 76.9% / Pro 65.6%; Biomedical image analysis 72.2%; Design Arena Website 1322 Elo (openrouter.ai); text-only output.

### Normalized scores (1–100)

- **Tool use: 88/100.** Best-reported TB4 (70.6% self / 63.6% AA), GDPval-AA within 2 Elo of Opus 5.5, OSWorld 2.1 80.1%, Toolathlon-Verified 77.8% (85.2% Pass@3), DRACO 87.0%; capped by forced-`tool_choice` removal and absent Tau2/Tau3 rows.
- **Reasoning: 85/100.** HLE 64.5% w/ tools + 56.9% raw, AA Index 56, AA-LCR 82.7%, MLCR 75.0%, ArXivMath+tools 95.2%; capped by Opus 5.5's 67.7% HLE / 58 Index and Anthropic's own note that Opus 5.5 stays "clearly stronger at complex, open-ended work."
- **Context window: 91/100.** 1M in / 128K out (300K batch beta) now backed by independent AA-LCR 82.7% — the first-pass "vendor-verified only" cap is resolved; remaining MRCR/RULER absence keeps it under 95.
- **Multimodal: 68/100.** Raised from 62 on new system-card rows: Chartography-with-tools 90.2%, BenchCAD 0.963 (top of class), OfficeQA 76.9%, Biomedical 72.2%; still text-only output, no audio/video rows.
- **Coding: 91/100.** Raised from 90 on confirmed SWE-bench Pro 81.3%, SWE Multilingual 90.3%, ProgramBench 79.7%, DeepSWE 71.0%, FrontierSWE v2 61.9%, Bug Hunt 51.3 fixes; TB4 70.6% remains class-best reported. Cap: FrontierCode Main 46.2% vs Opus 5.5 54.4%.
- **Cost efficiency: 74/100.** $2/$10 with $0.10 cached, 50% batch, ~30% fewer tokens/task than Sonnet 5; cheap for its tier, paid-only.
- **Overall Score: 85/100.** Half-up mean of the five quality dims (88+85+91+68+91)/5 = 84.6 → 85 (first pass 83; the uplift comes from gap-filling independent/system-card rows, not re-grading). Best fit: high-throughput agentic coding and everyday knowledge work where Opus-level power isn't required.

---

## Signature

- Provided by: **Kimi K3 (moonshotai/kimi-k3)** — 2026-10-09
- Method: deep second-pass public web research, 3+ independent sources (Anthropic announcement + Sonnet 5.5 system-card PDF, benchlm.ai 66-row scorecard aggregating artificialanalysis.ai / Proximal FrontierSWE / Bug Hunt Bench / CursorBench / OpenRouter, llm-stats.com provider/pricing/latency page). Conflicts flagged: TB4 70.6% self vs 63.6% AA; cached-input price $0.20 vs $0.10. Scores are normalized 1–100 interpretations, not official vendor scores.
- Future sources: add a new file next to this one using the same headings.
