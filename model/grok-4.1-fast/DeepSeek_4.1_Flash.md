# Grok 4.1 Fast — findings by DeepSeek 4.1 Flash

- Source: xAI (SpaceXAI) / Grok 4.1 Fast (`grok-4-1-fast`)
- Date: 2026-10-03 (UTC)
- Overview and scoring methodology: `../../model-comparison.md`
- Cross-model signed log: `../../model-findings.md`

## Model card

- **Name:** Grok 4.1 Fast
- **Short description:** xAI's ultra-low-latency Grok 4.1 API family (a reasoning and a non-reasoning variant), a 2M-context multimodal model positioned for speed over peak intelligence. Now **legacy/deprecated**: retired 2026-05-15 and requests redirect to Grok 4.3 at Grok 4.3 pricing.
- **Provider / access:** xAI Console and OpenRouter (`grok-4.1-fast`). API IDs: `grok-4-1-fast`, `grok-4-1-fast-reasoning`, `grok-4-1-fast-non-reasoning`. Chat Completions style.
- **Release / knowledge:** Released 2025-11-19. Knowledge cutoff not published.
- **IDs:** `grok-4-1-fast` (no OpenCode Zen ID).
- **Context window:** 2,000,000 tokens (LLM Reference). Max output not published.
- **Modalities:** Text and image (vision) in; text out. Reasoning (per variant), tool calls, structured outputs/JSON.
- **Pricing (as of 2026-10-03, legacy route):** $0.20 in / $0.50 out per 1M (OpenRouter).
- **Architecture:** Proprietary (weights not released).

### Raw benchmarks found

> Aggregator rows from Vector Wire (Artificial Analysis runs; all latest 2026-10-03). Where a model has distinct reasoning and non-reasoning variants, both are shown.

Agent / tool use:

- τ²-Bench Telecom (AA run): **93.27%** (reasoning) / **63.74%** (non-reasoning)
- AA Agentic Index: **32.95** (non-reasoning)
- GDPval (win rate): **14.07%** (non-reasoning)
- AA IT-Bench SRE: **17.89%** (non-reasoning)
- Terminal-Bench Hard: **24.24%** (reasoning) / **14.39%** (non-reasoning)

Reasoning / knowledge:

- Artificial Analysis Intelligence Index: **20.37** (reasoning) / **11.28** (non-reasoning)
- AA-Omniscience: **−29.92** (reasoning) / **−50.88** (non-reasoning)
- AIME 2026: **94.17%** (thinking)
- HMMT Feb 2026: **86.36%**; HMMT Nov 2025: **93.33%**
- MathArena visual math overall: **69.03**

Coding:

- SciCode: **44.21%** (reasoning) / **29.63%** (non-reasoning)
- Artificial Analysis Coding Index: **19.47**
- LMArena WebDev: **1239.95**

Long context:

- 2M-token window; Vector Wire rates it "capable in long context" (−19.8% vs the leader) with 1 of 3 long-context benchmarks measured; no AA-LCR value retrievable.

### Normalized scores (1–100)

- **Tool use: 62/100.** τ²-Bench Telecom 93.27% (reasoning) is strong, but GDPval win-rate 14.07%, AA IT-Bench SRE 17.89% and Terminal-Bench Hard 24.24% land well below the mid band; net agentic profile is mid.
- **Reasoning: 64/100.** AA Intelligence Index 20.37 (reasoning) is mid (mid band 20–35 → 55–65) and AA-Omniscience is negative, though AIME 2026 94.17% and HMMT ~86–93% show strong maths — the leader-gap is the cap.
- **Context window: 95/100.** 2M tokens is the ≥1M tier (95–100); scored at the lower end because no ≥98% retrieval evidence at 512K+ is published.
- **Multimodal: 62/100.** Text + image (vision) in → the 60–70 band; Vector Wire notes it sits behind the multimodal leaders.
- **Coding: 58/100.** SciCode 44.21% (reasoning) and AA Coding Index 19.47 are mid-low; Terminal-Bench Hard 24.24% caps it.
- **Cost efficiency: 95/100.** $0.20 in / $0.50 out per 1M is cheap (~$0.10/$0.20 = 97–99 band, adjusted down slightly for the output rate).
- **Overall Score: 68/100.** (62 + 64 + 95 + 62 + 58) / 5 = 68.2 → **68**. Best-fit: legacy low-latency, long-context multimodal calls — migrate to Grok 4.3 for new work.

---

## Signature

- Provided by: **DeepSeek 4.1 Flash (deepseek/deepseek-v4.1-flash)** — 2026-10-03
- Method: independent public internet research (Vector Wire Artificial Analysis aggregator rows, BenchLM, LLM Reference). Scores are normalized 1–100 interpretations, not official vendor scores.
- Future sources: add a new file next to this one, e.g. `GPT_5.md`, using the same headings.
