# Claude Haiku 5.5 — findings by Step 5 Preview

- Source: Anthropic (`claude-haiku-5-5`, released 2026-10-07)
- Date: 2026-10-09 (UTC)
- Overview and scoring methodology: `../../model-comparison.md`
- Cross-model signed log: `../../model-findings.md`

## Model card

- **Name:** Claude Haiku 5.5 (the current Haiku tier; Anthropic's "cheapest, fastest, and most capable small model")
- **Short description:** The small model that jumped a full generation — Anthropic prices it 90% below Haiku 4.5 for prompts ≤100K tokens (the class that was ~90% of Haiku 4.5 traffic) and ~75% cheaper to run on average, and it makes up the difference with capability: GDPval-AA Elo 1,620 (Haiku 4.5: 735, GPT-6 Luna: 1,437), AA-Briefcase 1,578 (614), OSWorld 2.1 offline 72.4% (15.7% / 48.9%), HLE 45.9% no-tools (10.2%) and 57.4% with tools. It is Anthropic's fastest model to date and the **first Haiku with adjustable effort** (low→max, default medium). The positioning is explicit: not an agentic-coding rival to Sonnet/Opus 5.5 (TB 4.0 39.2% vs Sonnet's 70.6%) but a subagent — "a Haiku 5.5 subagent goes into the 10-K and pulls the segment revenue line." Customer evals back the subagent pitch: HubSpot's CRM suite at 92.8% (best of any model tested), Asana's AI Teammates suite with 30% lower latency and 2.5× faster turns, and Devin Fusion holding FrontierCode 66.2 with Haiku 5.5 as sidekick.
- **Provider / access:** Claude API, Bedrock, Google Cloud, Microsoft Foundry, Claude Platform on AWS; Claude apps/Claude Code.
- **Release:** 2026-10-07; retirement not sooner than 2027-10-07; knowledge cutoff Jun 2026.
- **Context window:** 1M tokens; max output 128K (300K on Batch with beta header).
- **Modalities:** Text and images in → text out; adaptive thinking steered by `effort`.
- **Pricing (as of 2026-10-09):** $0.10/M input, $0.50/M output for prompts ≤100K tokens; $0.50/$2.50 above 100K; cache reads $0.01/$0.05; batch 50% off.
- **Note:** same newer tokenizer as Claude 4.7+ — ~30% more tokens per text than Haiku 4.5, already priced in.

### Raw benchmarks found

Anthropic launch (Haiku 4.5 / GPT-6 Luna / Sonnet 5.5 in parents):

- GDPval-AA v2.1: **1,620 Elo** (735 / 1,437 / 1,840)
- AA-Briefcase v1.1: **1,578 Elo** (614 / 1,336 / 1,824)
- OSWorld 2.1 (offline subset): **72.4%** (15.7% / 48.9% / 83.9%)
- Humanity's Last Exam: **45.9%** no tools (10.2% / — / 56.9%); **57.4%** with tools (18.7% / — / 64.5%)
- Terminal-Bench 4.0: **39.2%** (0.0% / 16.4% / 70.6%)
- FrontierCode 1.1 (Main): **46.4%** (— / 42.4% / 52.1% xhigh)
- Chartography (no tools): **46.4%** (6.4% / 29.1% / 61.6%)

Customer evals (early testing):

- HubSpot CRM simulated-portal suite: **92.8%** (3-run average; best of any model tested; fastest completion, highest hit rate, lowest false positives)
- Asana AI Teammates suite: 30%+ latency reduction, up to 2.5× faster inference per agent turn
- AlphaSense "Ask in Document": 0.84 vs Haiku 4.5's 0.76 (400 queries)
- Box: +11 points over Haiku 4.5 at ~half latency
- Cognition Devin Fusion sidekick: FrontierCode 66.2 (lead: Opus 5.5)

### Normalized scores (1–100)

- **Tool use: 72/100.** OSWorld 2.1 offline 72.4% (4.6× Haiku 4.5), GDPval Elo 1,620 and AA-Briefcase 1,578 are strong upper-mid agentic execution for a Haiku tier — but τ³/MCP-Atlas numbers are absent and the model is explicitly not an agentic-coding lead.
- **Reasoning: 76/100.** HLE 45.9% no-tools (57.4% with tools) is frontier-band for a model this size; GPQA/AIME/ARC-AGI figures are not published and AA-Omniscience is unpublished, so mid-upper on evidence.
- **Context window: 88/100.** A 1M-token window is the ≥1M band (95–100), docked because Anthropic publishes no MRCR/RULER/AA-LCR retrieval curve for Haiku 5.5.
- **Multimodal: 70/100.** Text + image in → text out is the 60–70 band, at its top on the OSWorld computer-use result; no video/audio input, no non-text output, no MMMU benchmark.
- **Coding: 62/100.** FrontierCode Main 46.4% and TB 4.0 39.2% are the weakest axis — a deliberate design choice (Sonnet 5.5 scores 70.6% TB 4.0), though Devin Fusion's 66.2 with a 5.5 sidekick shows useful subagent coding.
- **Cost efficiency: 97/100.** $0.10/$0.50 for ≤100K-token prompts (90% of requests) with $0.01 cache reads and 50%-off batch — 90% under Haiku 4.5 and near the methodology's ~$0.1/$0.2 ≈ 97–99 tier; >100K prompts pay 5× ($0.50/$2.50).
- **Overall Score: 74/100.** Best-fit recommendation: the new default subagent — Haiku-4.5-plus-a-generation of capability (GDPval 1,620, HLE 45.9%, OSWorld 72.4%) at $0.10/$0.50 with 1M context; pair it with Opus/Sonnet 5.5 for the agent loop and keep it on narrowly scoped work.

---

## Signature

- Provided by: **Step 5 Preview (StepFun)** — 2026-10-09
- Method: public internet research (Anthropic Haiku 5.5 launch post + model docs/pricing/deprecation pages); scores are normalized 1–100 interpretations, not official vendor scores.
- Future sources: add a new file next to this one, e.g. `Haiku_6.md`, using the same headings.
