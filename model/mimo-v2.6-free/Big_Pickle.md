# Xiaomi MiMo V2.6 Free — findings by Big Pickle

- Source: Xiaomi (`opencode/mimo-v2.6-free`, weights of `mimo-v2.6-flash`)
- Date: 2026-09-23 (UTC)
- Overview and scoring methodology: `../../model-comparison.md`
- Cross-model signed log: `../../model-findings.md`

## Model card

- **Name:** Xiaomi MiMo V2.6 Free (free-tier offering of the open-weights MiMo-V2.6-Flash)
- **Short description:** Xiaomi's open-weights native-omnimodal reasoning model, the Flash variant of the Sept 2026 MiMo-V2.6 RL-trained family (309B total / 15B active MoE, MIT). Free at launch on OpenCode Zen for a limited promotional week; otherwise one of the cheapest frontier-tier APIs. Top use case: high-volume agentic + image/audio/video-in coding workloads at near-zero cost.
- **Provider / access:** OpenCode Zen `opencode/mimo-v2.6-free` (free week, per Zen announcement on X); Xiaomi MiMo Open Platform `mimo-v2.6-flash`; OpenRouter `xiaomi/mimo-v2.6-flash`; Vercel AI Gateway. Chat Completions-style API.
- **Release / knowledge:** Released 2026-09-21 (HF repos 15:39 UTC; OpenRouter 20:07 UTC); technical report public (44 pp).
- **IDs:** `opencode/mimo-v2.6-free` / `mimo-v2.6-flash` (open weights on Hugging Face, MIT — `XiaomiMiMo/MiMo-V2.6-Flash-RL`).
- **Context window:** 1,048,576 tokens total; max output 128K (both variants per OpenRouter + Xiaomi card).
- **Modalities:** native omnimodal text + image + speech + video in → text out (AA model page for Pro confirms the family's input coverage); GPT-4o-class tool calls; reasoning/effort modes on Xiaomi platform.
- **Pricing (as of 2026-09-23):** Free promo on Zen at launch; standard $0.14 in / $0.28 out per 1M; cache-hit $0.0028/1M ($0.0036 on Pro). Training spend disclosed: ~$850K (Flash RL run).
- **Architecture:** MiMo-V2.6-Flash — sparse MoE, ~309B total / 15B active (48 layers, 39 sliding-window + 9 full attention, 256 routed experts / 8 active), 681M vision transformer, 308M audio tokenizer + 127M audio patch encoder. MIT open weights.

### Raw benchmarks found

Agent / tool use (all vendor-run Xiaomi harness unless noted):

- Terminal-Bench 2.1: **87.6%** (Xiaomi model card; Opus 5 89.1, GPT-5.6 Sol 88.8)
- AutomationBench v1.0.6: **52.3%** (Flash 52.3, Pro 53.1 — above Claude Opus 5's 50.3)
- Toolathlon-Verified: **73.6%** (Opus 5 80.6)
- OSWorld-Verified: **80.8%** (Opus 5 83.4)
- JobBench: **61.2%** (Opus 5 65.7)
- Agents' Last Exam: **27.6%** (Pro 31.6; Opus 5 31.6)
- Terminal-Bench 4.0: **28.8%** (Pro 34.9; Opus 5 49.0, GPT-5.6 Sol 39.9) — the weak spot
- GDPval-AA 2.1: not reported for Flash (Pro 1673); no verified public score found for this variant

Reasoning / knowledge:

- **No independent Artificial Analysis Index exists for Flash** (AA publishes only Pro = 46; none for Flash) — no verified public reasoning index
- Cyber/security (partly reasoning-intensive): CyberGym **95.1%** (Flash beats Pro's 94.0), MiMo Cyber Bench **77.2%**, ExploitBench **25.3%**, ExploitGym **6.0%**, SEC Bench Pro **47.5%**
- General reasoning proxies: Agents' Last Exam 27.6% (above); no GPQA/HLE verified public scores found for the Flash checkpoint

Coding:

- DeepSWE v1.1: **67.9%** (Pro 71.9, Opus 5 74.0, GPT-5.6 Sol 73.0 — up from MiMo-V2.5-Pro's 19.0)
- Terminal-Bench 2.1: **87.6%** (above)
- MiMo Code Bench: **61.2%** (Xiaomi-built)
- ProgramBench: **26.0%** (Pro 26.5; Opus 5 37.0)
- MiMo Visual Coding: **71.5%** (image-in coding, Xiaomi-built)

Long context:

- 1M window with 128K output verified; **no long-context retrieval (MRCR / RULER / GraphWalks) value found** for V2.6 in this research.

### Normalized scores (1–100)

- **Tool use: 82/100.** TB2.1 87.6%, AutomationBench 52.3% (tops Opus 5), Toolathlon 73.6%, OSWorld 80.8% — near-frontier agent stack; capped by TB4.0 28.8% and vendor-only harnesses.
- **Reasoning: 68/100.** No independent index/GPQA/HLE for Flash; closest verified signals are agent/knowledge rows (Agents' Last Exam 27.6%, JobBench 61.2%); series Pro measured 46 on AA Index. Thin direct evidence caps the score.
- **Context window: 96/100.** Full 1M total (1,048,576) with 128K out; no measured 512K+ retrieval published, so not a perfect 100.
- **Multimodal: 92/100.** Native text/image/speech/video input with text output (audio input → 90–100 band per methodology); MiMo Visual Coding 71.5% demonstrates real image grounding.
- **Coding: 80/100.** DeepSWE 67.9% (near Opus 5's 74.0), TB2.1 87.6%, Visual Coding 71.5%; ProgramBench 26.0% and ExploitBench 25.3% are weak long-horizon rows that cap the score.
- **Cost efficiency: 100/100.** Free promo tier on Zen at launch; standard $0.14/$0.28 with a $0.0028 cache-hit is among the cheapest frontier-tier APIs if the promo expires.
- **Overall Score: 84/100.** (82 + 68 + 96 + 92 + 80) / 5 = 83.6 → **84**. Best-fit: high-volume multimodal + agentic workloads on a budget; verify its reasoning limits before trusting it with long autonomous sessions.

---

## Signature

- Provided by: **Big Pickle (opencode/big-pickle)** — 2026-09-23
- Method: public internet research (Xiaomi MiMo news + model card/HF README, SiliconANGLE, VentureBeat, TechNode, CellCog, OrcaRouter, Artificial Analysis); scores are normalized 1–100 interpretations, not official vendor scores.
- Future sources: add a new file next to this one, e.g. `GPT_5.md`, using the same headings.