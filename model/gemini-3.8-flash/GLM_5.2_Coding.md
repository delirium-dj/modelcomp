# Gemini 3.8 Flash — findings by GLM 5.2 Coding

- Source: Google DeepMind (`gemini-3.8-flash`)
- Date: 2026-09-17 (UTC)
- Overview and scoring methodology: `../../model-comparison.md`
- Cross-model signed log: `../../model-findings.md`

## Model card

- **Name:** Gemini 3.8 Flash
- **Short description:** Google DeepMind's mid-tier "workhorse" Gemini 3-family model tuned for agentic coding, knowledge work, and multimodal understanding at scale; successor to Gemini 3.7 Flash. Not a variant of any other entry (distinct from sibling 3.8 Flash-Cyber hardening and 3.8 Live realtime voice variants).
- **Provider / access:** Google AI Studio / Gemini API (`https://generativelanguage.googleapis.com/v1beta/` — `gemini-3.8-flash`), Gemini App, Gemini Enterprise Agent Platform, Google Antigravity; also on OpenRouter. `generateContent` API with native function calling.
- **Release / knowledge:** GA, model card published 2 September 2026; knowledge cutoff March 2026 (some domains limited to January 2025 per Gemini 3 family).
- **IDs:** `google/gemini-3.8-flash`; no OpenCode Zen Free ID verified.
- **Context window:** 1,000,000 input tokens; 64,000 max output (verified: DeepMind model information page + model card, Sept 2026).
- **Modalities:** input text, image, video, audio, PDF; output text only; reasoning yes (customizable effort levels); tool use: function calling, search-as-a-tool, computer use.
- **Pricing (as of 2026-09-17):** $0.75/1M input (regular tier $1.50), $3.75/1M output (regular $7.50) — batch-tier pricing from Google model card; paid, not Free.
- **Architecture:** proprietary Google DeepMind transformer; based on Gemini 3.7 Flash (params/MoE not published).

### Raw benchmarks found

Agent / tool use:

- Terminal-Bench 2.1: **89.4%** (Google model card; vs Sonnet 5 80.4%, Opus 5 89.1%)
- Terminal-Bench 4.0: **19.1%** (model card, batch tool enabled; vs Opus 5 51.8%, GPT-5.6 Sol 37.3%)
- GDPval-AA v2: **1545 Elo** (model card knowledge-work; Opus 5 1824, Sol 1710)
- Vals Finance Agent v2: **61.4%** (vals.ai; best in comparison set)
- Harvey's Legal Agent Benchmark: **10.0%** all-pass (vals.ai; best in set)
- OSWorld-2.0: **59.0%** (computer use, partial score, batch tool; vs Opus 5 75.4%)
- Toolathon / MCP-Atlas: no verified public score found

Reasoning / knowledge:

- HLE-Verified: **54.9%** (model card; above Opus 5 54.4%)
- BioMysteryBench (Human Difficult): **56.5%** (3.7 Flash: 43.5%)
- LABBench2: **86.2%**
- GPQA Diamond: no verified public score found (absent from Sept 2026 model-card table)
- LCR / MLCR: no verified public score found (in AA Index v4.3.2; value not extractable from JS page)
- CritPt: no verified public score found (in AA Index v4.3.2; not extractable)
- Artificial Analysis Intelligence Index v4.3.2: page JS-rendered, value not extractable; rank unverified
- AA-Omniscience: no verified public score found

Coding:

- DeepSWE v1.1 (long-horizon SWE): **73.7%** (model card; vs Opus 5 74.0%, GPT-5.6 Sol 72.7%)
- SWE-bench Verified / SWE-Pro: no verified public score found
- LiveCodeBench: no verified public score found
- SciCode / AA-SciCode: no verified public score found (in AA Index v4.3.2; not extractable)
- Vibe Code Bench: no verified public score found

Long context:

- 1M context verified (DeepMind); MRCR / RULER / GraphWalks retrieval values not published for this checkpoint — no long-context retrieval score found

Multimodal (input-side):

- CharXiv Reasoning (charts, no tools): **86.2%** (best in card's comparison set)
- LVBench (long video): **87.8% agentic / 87.1% static**
- GDP.pdf (expert PDF comprehension): **35.0%** all-pass (vs Sol 40.0%)

### Normalized scores (1–100)

- **Tool use: 90/100.** Terminal-Bench 2.1 89.4% (frontier-level), Vals Finance Agent 61.4% and Harvey's Legal 10.0% all class-leading, GDPval-AA 1545 Elo strong; capped below elite agentic tier by Terminal-Bench 4.0 19.1% (long-horizon general agent) and OSWorld-2.0 59.0% vs Opus 5 75.4%.
- **Reasoning: 87/100.** HLE-Verified 54.9% tops the model-card comparison (incl. Opus 5 54.4%, GPT-5.6 Sol 54.5%); BioMysteryBench Human Difficult 56.5% is a big jump over 3.7 Flash; capped by missing GPQA/LCR/CritPt confirmations.
- **Context window: 95/100.** Verified 1M-token input with 64K output — top tier for public APIs; capped slightly by lack of published long-context retrieval (MRCR/RULER) evidence at full window.
- **Multimodal: 88/100.** Native text+image+video+audio+PDF input, text out; CharXiv Reasoning 86.2% and LVBench 87.8% agentic are best-in-set; capped by text-only output (no image/audio generation) and GDP.pdf 35.0% trailing Sol.
- **Coding: 88/100.** DeepSWE v1.1 73.7% within 0.3pt of Claude Opus 5 and ahead of GPT-5.6 Sol at a fraction of the price; Terminal-Bench 2.1 89.4% confirms terminal-coding strength; capped by absent SWE-bench Verified / LiveCodeBench public numbers.
- **Cost efficiency: 92/100.** $0.75/$3.75 per 1M (batch) or $1.50/$7.50 regular — near-frontier DeepSFE and Terminal-Bench results at roughly 1/3 to 1/7 of Opus 5 ($5/$25) pricing; excellent quality-per-dollar for agentic workloads.
- **Overall Score: 90/100.** Mean of the five quality dims (90+87+95+88+88)/5 = 89.6 → 90. Best-fit: high-volume agentic coding and knowledge-work pipelines that need frontier-adjacent capability at Flash-tier cost.

---

## Signature

- Provided by: **GLM 5.2 Coding (zai-org/glm-5.2-coding)** — 2026-09-17
- Method: public internet research (Google DeepMind model card + model information page, Sept 2026; vals.ai benchmark pages referenced by the card); scores are normalized 1–100 interpretations, not official vendor scores.
- Future sources: add a new file next to this one, e.g. `GPT_5.md`, using the same headings.