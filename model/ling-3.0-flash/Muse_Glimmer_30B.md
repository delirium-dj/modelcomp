# Ling 3.0 Flash — findings by Muse Glimmer 30B

- Source: InclusionAI / Ling 3.0 Flash
- Date: 2026-10-27 (UTC)
- Overview and scoring methodology: `../../model-comparison.md`
- Cross-model signed log: `../../model-findings.md`

## Model card

- **Name:** Ling 3.0 Flash
- **Short description:** Ant Group / InclusionAI open-weight 124B total / 5.1B active hybrid-linear MoE fast-tier reasoning model with 262K context, MIT licensed.
- **Provider / access:** Hugging Face `inclusionAI/Ling-3.0-flash`, OpenRouter `inclusionai/ling-3.0-flash`, Kilo Code free tier. Chat Completions.
- **Release / knowledge:** Released 2026-07-23 per Hugging Face card; knowledge cutoff not published.
- **IDs:** `inclusionAI/Ling-3.0-flash`
- **Context window:** 262,144 tokens serving, 256K training schedule.
- **Modalities:** Text in/out, reasoning mode explicit. Tool calling not verified public.
- **Pricing (as of 2026-10-27):** $0.07 / 1M input, $0.22 / 1M output per Artificial Analysis; free tier via OpenRouter/Kilo.
- **Architecture:** 124B total, 5.1B active MoE, hybrid linear + MLA attention, MIT open weights.

### Raw benchmarks found

> Sources: Artificial Analysis `ling-3-0-flash`, BenchLM `ling-3-0-flash`, Vals AI `ant_ling-3.0-flash-2607`, Hugging Face model card.

Agent / tool use:
- Terminal-Bench 2.1: **50.2%** (Vals AI)
- BFCL v4: **73.0%** (InclusionAI model card via BenchLM)
- Claw-Eval / Toolathon / MCP-Atlas / SWE Atlas Codebase QnA: no verified public score found

Reasoning / knowledge:
- GPQA Diamond: **84.85%** (Vals AI)
- HLE: no verified public score found
- Artificial Analysis Intelligence Index: **20** (Artificial Analysis page) — conflicting report of **38** in The Decoder / X post 2026-08-13 citing AA v4.1.1. Intelligence Index conflict noted.
- GDPval-AA: no verified public score found

Coding:
- LiveCodeBench: **83.99%** (Vals AI)
- SWE-bench Verified: no verified public score found
- SciCode / AA-SciCode: no verified public score found
- Vibe Code Bench: **2.91%** (Vals AI)

Long context:
- MRCR / RULER / GraphWalks: no long-context retrieval reported

### Normalized scores (1–100)

- **Tool use: 55/100.** Terminal-Bench 2.1 50.2% mid-low; BFCL v4 73% supports function calling. Caps due to lack of verified Tau/Claw scores.
- **Reasoning: 68/100.** GPQA Diamond 84.85% strong, Intelligence Index conflict 20 vs 38; conservative mid reasoning.
- **Context window: 85/100.** 262K verified serving context, competitive for open fast tier.
- **Multimodal: 15/100.** Text-only per card.
- **Coding: 74/100.** LiveCodeBench 83.99% strong, Vibe Code Bench 2.91% low; overall solid coding for size.
- **Cost efficiency: 78/100.** $0.07/$0.22 moderate pricing; free tier available.
- **Overall Score: 59.4/100.** Mean of (55+68+85+15+74)/5 = 59.4. Best-fit: fast open-weight coding/reasoning workhorse with large context, text-only.

---

## Signature

- Provided by: **Muse Glimmer 30B (meta/muse-glimmer-30b)** — 2026-10-27
- Method: public internet research; Hugging Face model card, Artificial Analysis, BenchLM, Vals AI; scores are normalized 1–100 interpretations, not official vendor scores.
- Future sources: add a new file next to this one, e.g. `GPT_5.md`, using same headings.
