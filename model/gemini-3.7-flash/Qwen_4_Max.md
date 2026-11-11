# Gemini 3.7 Flash — findings by Qwen 4 Max

- Source: Google/gemini-3.7-flash
- Date: 2026-11-11 (UTC)
- Overview and scoring methodology: `../../model-comparison.md`
- Cross-model signed log: `../../model-findings.md`

## Model card

- **Name:** Gemini 3.7 Flash
- **Short description:** Google's "most intelligent workhorse" Flash model for coding and agents (Aug 13, 2026 — shipped just 3.5 weeks after 3.6 Flash at half its price). Gains came from algorithmic/post-training innovation, not a bigger model or longer context: DeepSWE v1.1 jumped 49.0→65.3%. Default model in Google Antigravity and the engine behind Gemini Spark. Superseded by 3.8 Flash (Sep 2) but remains fully supported for efficiency-first workloads.
- **Provider / access:** Gemini API via AI Studio (`gemini-3.7-flash`), Vertex AI, Android Studio, Google Antigravity (default), Gemini Enterprise Agent Platform + app; consumers via Gemini Spark (Google AI Pro/Ultra, 160+ countries). Also served by OpenRouter (Google AI Studio / Vertex providers, no markup).
- **Release / knowledge:** Released 2026-08-13 (GA). Knowledge cutoff: model card states training data extends into 2026 for most domains; no exact date published in the sources read.
- **IDs:** `gemini-3.7-flash` (OpenRouter `google/gemini-3.7-flash`, incl. `:batch` variant).
- **Context window:** 1M tokens input; 64K max output (unchanged from 3.6 Flash). New Interactions API keeps conversation state server-side (`previous_interaction_id`) instead of resending history — a real input-cost lever for agent loops.
- **Modalities:** Text, image, audio, video in; text out. `thinking_level` enum low/medium/high (default medium) replaces the deprecated `thinking_budget`; temperature/top_p/top_k deprecated for this model. Strong injection robustness: Gray Swan IPI ASR@15 **9.2%** (Google Gemini 4 Argon launch chart) — top tier, behind Opus 5 (4.8%) and 3.8 Flash (5.5%).
- **Pricing (as of 2026-11-11):** Introductory $0.75 in / $3.75 out per 1M through 2026-12-31; **standard $1.50 / $7.50 from 2027-01-01** (doubles — budget around the standard rate). Batch 50% off ($0.375/$1.875 via OpenRouter); OpenRouter also lists higher per-provider variants ($0.825/$4.125, $1.35/$6.75). Thinking tokens billed as output.
- **Architecture:** Proprietary Flash-tier; parameters undisclosed. Post-training/RL on agentic trajectories cited as the source of gains. Updated CBRN and cyber-offense misuse safeguards per the Frontier Safety Framework.

### Raw benchmarks found

Coding (Google launch blog, vendor-run; 3.6 Flash comparison in parentheses):

- DeepSWE v1.1 **65.3%** (49.0%) — contamination-resistant long-horizon SWE across 91 live repos; confirmed in Google's later 3.8 Flash six-model table
- FrontierCode 1.1 Main **43.6%** (34.4%) — terse maintainer-intent tasks (Cognition)
- WebDev Arena Elo **1588** (1538) — human-voted head-to-head web-app generation (Arena.ai)
- SWE-bench Pro **60.4%**; SWE-Atlas **48.0%** (Google 3.8 Flash developer guide)
- Terminal-bench 2.1 **85.8%**; Terminal-bench 4.0 **11.2%** — the hard-suite collapse shared with 3.8 Flash (19.1%), far behind Opus 5 (51.8%) and GPT-5.6 Sol (37.3%)

Agent / knowledge work (Google 3.8 Flash announcement table, 3.7 Flash column, vendor-run):

- Vals Finance Agent v2 **59.0%**; Harvey Legal Agent (all-pass) **8.8%**; τ³-bench Banking **30.9%**
- OSWorld 2.0 (partial) **50.6%**; GDPval-AA v2 **1,482 Elo** (vs Opus 5 1,824, Sol 1,710, 3.8 Flash 1,545)
- AutomationBench **30.4%** (17.0% for 3.6 Flash, launch blog); GDP.pdf expert document comprehension **34.0%** (22.0%)

Reasoning / multimodal / long context (same Google table):

- HLE-Verified **53.6%** — near Opus 5 (54.4%) / Sol (54.5%) / 3.8 Flash (54.9%); BioMysteryBench human-difficult **43.5%**; LABBench2 **82.1%**; CharXiv Reasoning (no tools) **84.5%**
- LVBench long video **85.4%** (vs 3.8 Flash 87.8%, Opus 5 75.4%); 1M window, no MRCR/GraphWalks retrieval number published
- No GPQA / AA Intelligence Index figure published for this release in the sources read

### Normalized scores (1–100)

- **Tool use: 81/100.** Strong bounded agency — TB2.1 85.8%, Vals Finance 59.0%, Harvey Legal 8.8%, AutomationBench 30.4%, excellent injection robustness (9.2% ASR); capped hard by TB4.0 11.2%, OSWorld 50.6% and GDPval 1,482 on open-ended long-horizon work, all below 3.8 Flash.
- **Reasoning: 87/100.** HLE-Verified 53.6% within ~1 pt of Opus 5/Sol, CharXiv 84.5%, LABBench2 82.1%; capped by BioMystery-difficult 43.5% (13 pts behind 3.8 Flash) and no published GPQA/AA-index evidence.
- **Context window: 90/100.** 1M input with LVBench 85.4% long-video understanding and server-side interaction state cutting agent-loop input bills; capped by the 64K output ceiling and no published needle-retrieval evidence at full length.
- **Multimodal: 86/100.** Native text/image/audio/video input with strong LVBench/CharXiv results and screenshot/design-system-to-UI adherence; text-only output, no native media generation.
- **Coding: 86/100.** DeepSWE 65.3% (+16.3 over 3.6), FrontierCode 1.1 Main 43.6%, WebDev Arena 1588, SWE-bench Pro 60.4% — real production-ready gains; capped by TB4.0 11.2% and the ~8-pt DeepSWE gap to 3.8 Flash / Opus 5.
- **Cost efficiency: 95/100.** $0.75/$3.75 intro is the cheapest frontier-adjacent rate (half of 3.6 Flash at better scores), batch at $0.375/$1.875; capped by the Jan 1, 2027 doubling to $1.50/$7.50 and high-effort token spend.
- **Overall Score: 86.0/100.** Mean of the five quality dims (81+87+90+86+86)/5 = 86.0. Best-fit: high-volume coding/agent traffic, web-dev generation, document and finance/legal pipelines at minimal cost; route open-ended computer use and hardest terminal-agent work to Pro/Opus/Sol-class models or 3.8 Flash.

---

## Signature

- Provided by: **Qwen 4 Max (qwen4-max)** — 2026-11-11
- Method: public internet research (Google's official launch blog, DeepMind model-card specs via Miraflow's transcription — the model-card page itself returned a JS shell — plus OpenRouter's provider rate card and Google's own later 3.8 Flash six-model comparison table for the 3.7 Flash column); scores are normalized 1–100 interpretations, not official vendor scores. All comparison numbers are Google-run; independent replication pending. Launch-blog and 3.8-table figures agree where they overlap (DeepSWE 65.3, GDP.pdf 34.0). Pricing verified against two independent dated sources (intro through Dec 31, 2026; standard $1.50/$7.50 from Jan 1, 2027); Miraflow's GPT-5.6 Sol comparison row (Cerebras claim) is inconsistent with OpenAI's own pricing and was discarded. Gray Swan IPI 9.2% attributed to the Gemini 4 Argon launch chart.
- Reference URLs:
  - [Introducing Gemini 3.7 Flash — Google](https://blog.google/innovation-and-ai/models-and-research/gemini-models/introducing-gemini-3-7-flash/)
  - [Gemini 3.7 Flash Model Card — Google DeepMind](https://deepmind.google/models/model-cards/gemini-3-7-flash/)
  - [Gemini 3.7 Flash Explained — Miraflow](https://miraflow.ai/blog/gemini-3-7-flash-explained-coding-benchmarks-2026)
  - [Gemini 3.7 Flash — OpenRouter](https://openrouter.ai/google/gemini-3.7-flash)
  - [Gemini 3.8 Flash Model Card (six-model table incl. 3.7 Flash) — Google DeepMind](https://deepmind.google/models/model-cards/gemini-3-8-flash/)
  - [Gemini 4 Argon launch chart (Gray Swan IPI) — Google](https://blog.google/innovation-and-ai/models-and-research/gemini-models/gemini-4-argon/)
- Future sources: add a new file next to this one, e.g. `GPT_5.md`, using the same headings.