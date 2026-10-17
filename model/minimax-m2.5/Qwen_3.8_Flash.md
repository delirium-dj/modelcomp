# MiniMax M2.5 — findings by Qwen 3.8 Flash

- Source: MiniMax (`minimax/MiniMax-M2.5`), cross-checked against Vals AI, SemiAnalysis InferenceX, DeepInfra, Hacker News/Reddit
- Date: 2026-10-17 (UTC)
- Overview and scoring methodology: `../../model-comparison.md`
- Cross-model signed log: `../../model-findings.md`

## Model card

- **Name:** MiniMax M2.5
- **Short description:** MiniMax's open-weight 229–230B / ~10B-active MoE coding + agentic model (Feb 2026), RL-trained across hundreds of thousands of real environments; SOTA-class SWE-bench among open weights at exceptional speed and near "too cheap to meter" pricing. Text-only (vision is separate MiniMax lines).
- **Provider / access:** MiniMax API (`MiniMax-M2.5`, Anthropic-compatible endpoint `platform.minimax.io`), OpenRouter (`minimax/MiniMax-M2.5`), OpenCode, DeepInfra; Coding Plan subscription; MiniMax Agent product. Chat/Anthropic Messages style.
- **Release / knowledge:** 2026-02-12 release; knowledge cutoff not announced.
- **IDs:** `minimax/MiniMax-M2.5`; two served tiers — `M2.5` (50 tok/s) and `M2.5-Lightning` (100 tok/s), identical capability.
- **Context window:** ~192,000 tokens total (SemiAnalysis/DeepInfra); Vals ran with max output 196,608.
- **Modalities:** text in / text out; reasoning yes; tool calls yes (incl. parallel tool calling); JSON/office skills; **no image/audio/video input** on this route.
- **Pricing (as of 2026-10-17):** M2.5-Lightning $0.30 in / $2.40 out per 1M; standard M2.5 half that (~$0.15 / $1.20); caching supported. ~1/10–1/20 the output cost of Opus/Gemini 3 Pro/GPT-5; ~$1/hour continuous at 100 tok/s.
- **Architecture:** ~229–230B MoE, ~10B active, GQA, FP8 block quantization; CISPO RL; open weights.

### Raw benchmarks found

Agent / tool use:

- BrowseComp (with context management): **76.3%** (vendor; RISE/Wide Search also reported industry-leading)
- GDPval-MM office-agent avg win rate: **59.0%** vs mainstream models (vendor internal)
- Terminal-Bench 2.0: **2nd among open-weight models on the Vals split, behind GLM-5** (Vals AI independent)
- Speed: **completes SWE-bench Verified 37% faster than M2.1**, runtime ≈ Claude Opus 4.6 (22.8 vs 22.9 min/task) (vendor)

Reasoning / knowledge:

- GPQA Diamond / HLE: **no verified public score found** in vendor or aggregator copy reviewed
- Vals AI: **relative weakness on legal/financial tasks** (low "CorpFin" and "CaseLaw" scores) — independent negative signal
- AIME 25 / AA-LCR: referenced via AA-Index methodology but only charted, no transcribed number

Coding:

- SWE-bench Verified: **80.2%** (vendor; **1st among open-weight models on the Vals split**); cross-harness — Droid **79.7%** (> Opus 4.6 78.9), OpenCode **76.1%** (> Opus 4.6 75.9)
- Multi-SWE-Bench: **51.3%** (vendor)
- VIBE-Pro: **on par with Claude Opus 4.5** (vendor internal)

Long context:

- ~192K window; **no MRCR/RULER retrieval score published** (and trails the 1M-class tier).

### Normalized scores (1–100)

- **Tool use: 77/100.** Strong agentic search/tool profile — BrowseComp 76.3, parallel tool calling, GDPval-MM 59% win, Terminal-Bench 2nd-open — capped by the absence of a public Tau/BFCL absolute and Vals' office-domain caution.
- **Reasoning: 69/100.** Efficient task-decomposition "architect" reasoning is real, but there's no published GPQA/HLE and Vals measured clear legal/financial weakness — so pure-knowledge reasoning sits mid-band.
- **Context window: 60/100.** ~192K is a competent working window (with generous output budget) but a tier below the 1M-class leaders and unverified on long-context retrieval.
- **Multimodal: 15/100.** Text-only input/output on the M2.5 route (vision is a separate MiniMax product line) — the template's text-only floor.
- **Coding: 83/100.** Its headline: 80.2% SWE-bench Verified (top open-weight on the Vals split), strong cross-harness generalization, Multi-SWE 51.3, VIBE-Pro at Opus-4.5 level, 10+ languages full-lifecycle; held below 85 by Terminal-Bench trailing GLM-5 and vendor-harness caveats.
- **Cost efficiency: 97/100.** Among the cheapest frontier-adjacent options ($0.15–$0.30 in / $1.20–$2.40 out, caching, ~$1/hour continuous) at 2× the throughput of other frontier models.
- **Overall Score: 60.8/100.** Half-up mean of the five quality dims (77+69+60+15+83)/5 = 60.8. The text-only modality is the dominant drag; best fit is high-volume, cost-sensitive agentic coding and search where multimodal and deep legal/finance reasoning aren't required.

---

## Signature

- Provided by: **Qwen 3.8 Flash (qwen/qwen-3.8-flash)** — 2026-10-17
- Method: public internet research — MiniMax official M2.5 launch post, Vals AI independent benchmark notes, SemiAnalysis InferenceX + DeepInfra spec/latency pages, Hacker News/Reddit threads; scores are normalized 1–100 interpretations, not official vendor scores.
- Future sources: add a new file next to this one, e.g. `GPT_5.md`, using the same headings.
