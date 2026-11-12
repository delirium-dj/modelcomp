# Claude Fable 5.2 — findings by MiniMax M3.1 Flash

- Source: Anthropic (Claude Fable 5.2, system card + platform docs + launch post)
- Date: 2026-11-12 (UTC)
- Overview and scoring methodology: `../../model-comparison.md`
- Cross-model signed log: `../../model-findings.md`

## Model card

- **Name:** Claude Fable 5.2
- **Short description:** Anthropic's generally available flagship from November 2026, built for demanding reasoning and long-horizon agentic work. It is the same underlying LLM as the restricted Claude Mythos 5.2, with cybersecurity and biology safeguards that fall back to smaller Claude models when triggered. Anthropic calls it state of the art on most evaluated capabilities.
- **Provider / access:** Claude API (model ID `claude-fable-5-2`), Amazon Bedrock (`global.anthropic.claude-fable-5-2`), Claude Platform on AWS, Google Cloud (Anthropic managed and Google managed), Microsoft Foundry. Messages API. OpenCode Zen exposes `opencode/claude-fable-5-2` at `https://opencode.ai/inference/anthropic/v1/messages` for $8 / $40 per 1M tokens.
- **Release / knowledge:** Released 2026-11-09; reliable and training data cutoff June 2026. Status Active (latest); retirement not sooner than 2027-11-09.
- **IDs:** `anthropic/claude-fable-5-2` (repo ID), API `claude-fable-5-2`, Zen `claude-fable-5-2`. No Free ID on Zen.
- **Context window:** 1M tokens total, 128K max output (synchronous Messages API). Anthropic docs note 1M tokens is roughly 555k words on the current tokenizer.
- **Modalities:** Text and images in, text out; provider catalogs also list PDF input. Adaptive thinking always on (default effort `high`, `max` available); tool calls supported. Forced `tool_choice` types `any` and `tool` return HTTP 400 on this model, and `temperature` / `top_p` / `top_k` must be omitted.
- **Pricing (as of 2026-11-12):** $8 / MTok input, $40 / MTok output, $0.20 / MTok cache read (2.5% of base input), $10 5-minute cache write, $16 1-hour cache write; Batch API 50% discount. Optional fast mode at $16 / $80 per 1M tokens. Anthropic requires 30-day data retention unless Enterprise Frontier Safeguards or an explicit exception is in place.
- **Architecture:** Proprietary; parameter count not disclosed. Same underlying model as Claude Mythos 5.2 (Anthropic: "Claude Fable and Claude Mythos are the same underlying model").

### Raw benchmarks found

Agent / tool use:

| Benchmark | Value | Who ran it | Source / harness |
|---|---|---|---|
| GDPval-AA | 1831 Elo | Anthropic | Fable 5.2 and Mythos 5.2 system card, 2026-11-09 |
| AA-Briefcase v1.1 | 1785 Elo / 66.1% rubric | Anthropic | system card |
| Terminal-Bench 4.0 | 67.60% | Anthropic | system card |
| Terminal-Bench 4.0 | 59.6% | Artificial Analysis | terminalbench-v4-0 leaderboard |
| Terminal-Bench 4.0 | 65.15% | Vals AI | Vals Terminal-Bench 4.0 mirror |
| Terminal-Bench-Science 0.1 | 74.6% | Anthropic | system card |
| AutomationBench | 51.4% | Anthropic | system card |
| AutomationBench-AA | 76.4% | Artificial Analysis | automationbench-aa leaderboard |
| OSWorld 2.1 (offline set, partial) | 89.3% | Anthropic | system card |
| WANDR (relaxed score, agentic search) | 82.1% | Anthropic | system card |
| Remote Labor Index (high effort) | 41.3% | Anthropic | system card |
| DRACO | 87.7% | Anthropic | system card |
| Real-World Finance v2 | 1637 Elo | Anthropic | system card |
| RoboDojo Sim | 64.9% | Anthropic (internal) | Fable 5.2 and Mythos 5.2 launch post |
| Harvey LAB-AA v1.1 | 7.2% | Anthropic | system card |
| FrontierSWE v2 | 69.9% | Proximal | frontierswe.com leaderboard |
| GDP.pdf | 24.2% | Artificial Analysis | gdp-pdf leaderboard |
| MKA | 56.6% | Artificial Analysis | mka leaderboard |
| Tau3-Banking / Tau2-Bench | no verified public score found for Fable 5.2 | — | — |
| Claw-Eval / ClawProBench | no verified public score found | — | — |

Reasoning / knowledge:

| Benchmark | Value | Who ran it | Source / harness |
|---|---|---|---|
| Humanity's Last Exam (with tools) | 74.2% | Anthropic | system card |
| HLE w/o tools | 73.2% | Anthropic | system card |
| HLE | 74.3% | Artificial Analysis | humanitys-last-exam leaderboard |
| Artificial Analysis Intelligence Index | 64.6 (rank #1 of 74 in its price class; BenchLM overall 91.41, #1 of 1026) | Artificial Analysis | AA model page / BenchLM |
| FrontierMath v2 Tiers 1–3 | 95.088% | Epoch AI | Epoch AI FrontierMath v2 leaderboard |
| FrontierMath v2 Tier 4 | 100.000% | Epoch AI | Epoch AI FrontierMath v2 leaderboard |
| ARC-AGI-3 | 65.7% | Anthropic | system card |
| ARC-AGI-3 Provider Adapter | 94.90% | Anthropic | system card |
| STEM Professor Bench | 61.8% | Anthropic | system card |
| GMMLU / MILU | 96.0% / 94.1% | Anthropic | system card |
| CritPt | 35.4% | Artificial Analysis | critpt leaderboard |
| AA-LCR | 83.3% | Artificial Analysis | AA long-context-reasoning leaderboard |
| MLCR-AA | 43.9% | Artificial Analysis | mlcr-aa leaderboard |
| AA-Omniscience Index / accuracy / hallucination rate | 66.8% / 79.1% / 59.3% | Artificial Analysis | omniscience leaderboard |
| PhysicianBench | 64.4% | Anthropic | system card |
| HealthBench (raw, length-adjusted) | 58.8% / 59.6% | Anthropic (AA eval) | system card |
| HealthBench Professional (raw, length-adjusted) | 71.1% / 67.7% | Anthropic (AA eval) | system card |
| GPQA Diamond | no verified public score found for Fable 5.2 | — | — |

Coding:

| Benchmark | Value | Who ran it | Source / harness |
|---|---|---|---|
| SWE-bench Pro | 93% | Anthropic | system card |
| SWE-bench Multilingual | 96.6% | Anthropic | system card |
| SWE-bench Multimodal | 74.1% | Anthropic | system card |
| DeepSWE | 74.3% | Anthropic | system card |
| ProgramBench | 85.6% | Anthropic | system card |
| FrontierCode 2.0 | 49.1% (xhigh effort) | Cognition | FrontierCode 2.0 |
| FrontierSWE v2 | 69.9% | Proximal | frontierswe.com leaderboard |
| AA-SciCode | 67.7% | Artificial Analysis | scicode leaderboard |
| CursorBench 4.0 | 60.0% | Cursor | CursorBench 4.0 |
| Bug Hunt Bench | 58.0 fixes | Bug Hunt Bench | Bug Hunt Bench public data |
| Terminal-Bench 4.0 | 67.60% | Anthropic | system card |

Long context:

| Benchmark | Value | Who ran it | Source / harness |
|---|---|---|---|
| AA-LCR v1.1 | 83.3% | Artificial Analysis | long-context reasoning, 10k–100k token documents |
| MLCR-AA (medical long-context reasoning) | 43.9% | Artificial Analysis | mlcr-aa leaderboard |
| GDP.pdf (long professional documents) | 24.2% | Artificial Analysis | gdp-pdf leaderboard |
| MRCR / RULER / GraphWalks at 512K–1M | no verified public score found for Fable 5.2 | — | — |

### Conflicting evidence (vendor vs independent) and how it was resolved

- **Terminal-Bench 4.0:** Anthropic reports 67.60%, Artificial Analysis reports 59.6%, Vals AI reports 65.15% — a spread of roughly 8 points across harnesses on the same model. Resolution: the vendor figure is quoted for the model ID while the independent runs are listed beside it; the tool-use score is anchored on the weaker independent number rather than the best one.
- **AutomationBench:** Anthropic's system card reports 51.4% for AutomationBench while Artificial Analysis's AutomationBench-AA reports 76.4%. These are the same named benchmark family with different scoring methods (objective pass rate vs share of objectives completed), so the gap is methodological, not contradictory. Resolution: both are listed with their source; the higher independent number is not used to inflate the tool-use score.
- **HLE:** Anthropic's 74.2% (with tools) and 73.2% (without tools) sit next to Artificial Analysis's 74.3%, so the with-tools figure is effectively replicated. Resolution: no haircut applied on HLE.
- **Index vs sub-scores:** Artificial Analysis's Intelligence Index of 64.6 is far above the model's weakest sub-scores (GDP.pdf 24.2%, Harvey LAB-AA 7.2%). Resolution: reasoning is scored on the strong sub-scores but capped because the weak document-and-legal rows show the composite flatters the model.
- **Vendor vs independent agentic cost:** Artificial Analysis measures $26.54 per Intelligence Index task — the most expensive in its comparison class — while Anthropic claims Fable 5.2 matches Opus 5.5's best FrontierCode score for roughly half the cost per task at high effort. Resolution: the AA per-task figure is used for the cost-efficiency discussion because it measures the same end-to-end task Anthropic describes.

### Notes on identity

- Claude Fable 5.2 and Claude Mythos 5.2 are one model with two safeguard configurations; every Mythos-specific number Anthropic publishes is a subset of the same weights, and the general-purpose scores are published under the Fable name.
- Fable 5.2 is the successor to Fable 5.1 ($10 / $50) at a 20% lower list price, and it supersedes Fable 5 (June 2026). Anthropic's launch table also contrasts Fable 5.2 with GPT-6 Astra and Gemini 4 Carbon.
- The repo's `meta.json` for this slug lists a $10 / $50 price, but Anthropic's platform model reference and the launch post both list $8 / $40 with $0.20 cache reads. Resolution: the official platform docs are used; the meta.json figure is stale.
- No OpenCode Zen Free ID exists for Fable 5.2; Zen lists the paid `claude-fable-5-2` route only, and Anthropic-hosted requests are retained for 30 days under Anthropic's data policy.

### Normalized scores (1–100)

- **Tool use: 90/100.** Frontier-class agentic work — GDPval-AA 1831 Elo (above the 1750 reference), AA-Briefcase 1785 Elo, OSWorld 2.1 89.3%, WANDR 82.1%, DRACO 87.7%, Remote Labor Index 41.3% — with Terminal-Bench 4.0 at 67.60% vendor / 59.6% AA / 65.15% Vals. It reaches the 90–100 band on GDPval and OSWorld but is held at 90 because no Claw-Eval or Tau3 score is published and the independent Terminal-Bench 4.0 run is under 60%.
- **Reasoning: 93/100.** HLE 74.2% (independently 74.3%), AA Intelligence Index 64.6 (above the 60+ frontier reference), FrontierMath v2 Tier 4 at 100% and Tiers 1–3 at 95.1%, ARC-AGI-3 65.7%, GMMLU 96.0% — capped below the very top because no GPQA Diamond figure is published for this ID and the composite hides weak GDP.pdf (24.2%) and Harvey LAB-AA (7.2%) rows.
- **Context window: 96/100.** Full 1M-token context with 128K max output puts it in the top tier, but no verified retrieval measurement at 512K+ is published for this model (AA-LCR 83.3% only spans 10k–100k token documents, MLCR-AA is 43.9%), so it stays below 100.
- **Multimodal: 82/100.** Image input plus PDF input (listed by Anthropic platform catalogs) with chart, document and diagram grounding — Chartography 73.4% without tools and 91.6% with tools, OfficeQA 83.4%, OfficeQA Pro 72.9%, BenchCAD 2.1 75.4% and 83.5% with tools, SWE-bench Multimodal 74.1% — placing it in the video/PDF-in band, but there is no native audio or video input.
- **Coding: 94/100.** DeepSWE 74.3% (above the 74% reference), AA-SciCode 67.7% (above 55%), SWE-bench Pro 93%, SWE Multilingual 96.6%, ProgramBench 85.6%, FrontierSWE v2 69.9% — capped only by CursorBench 4.0 at 60.0% and the absence of a published Terminal-Bench 2.1 figure for this ID.
- **Cost efficiency: 40/100.** $8 / $40 per 1M tokens with an unusually cheap $0.20 cache read sits between the $3 / $15 (~60) and $10 / $50 (~30) anchors on the rubric, but Artificial Analysis measures $26.54 per Intelligence Index task — the worst per-task cost in its class — and 30-day retention is mandatory.
- **Overall Score: 91/100.** Mean of Tool 90 + Reasoning 93 + Context 96 + Multimodal 82 + Coding 94 = 455 / 5 = 91. Best fit: the highest-capability generally available model for multi-hour agent sessions, deep research and large-codebase engineering, for buyers who can absorb frontier pricing.

---

## Signature

- Provided by: **MiniMax M3.1 Flash (minimax/minimax-m3.1-flash)** — 2026-11-12
- Method: Fresh public web research (Anthropic launch post and Claude Platform model reference, system-card landing pages, BenchLM benchmark ledger, Artificial Analysis model and evaluation leaderboards, Vals AI and Epoch AI mirrors, Cognition and Cursor leaderboards, OpenCode Zen model list). Scores are normalized 1–100 interpretations, not official vendor scores.
- Reference URLs:
  - [Introducing Claude Fable 5.2 and Mythos 5.2 — Anthropic (2026-11-09)](https://www.anthropic.com/claude-fable-and-mythos-5-2)
  - [Claude Fable 5.2 — Claude Platform model reference (specs, pricing, capabilities)](https://platform.claude.com/docs/en/models/fable-5-2/overview)
  - [Claude Fable 5.2 and Mythos 5.2 system card (PDF)](https://assets.claude.com/27d60918d218125e7504bc7354c4b4626ec56b11.pdf)
  - [BenchLM — Claude Fable 5.2 benchmark ledger](https://benchlm.ai/models/claude-fable-5-2)
  - [Artificial Analysis — Claude Fable 5.2 model page (Index, cost per task, pricing)](https://artificialanalysis.ai/models/claude-fable-5-2)
  - [OpenCode Zen model list and pricing (Zen route for claude-fable-5-2)](https://opencode.ai/docs/zen)
- Future sources: add a new file next to this one, e.g. `Muse_Spark_1.3.md`, using the same headings.
