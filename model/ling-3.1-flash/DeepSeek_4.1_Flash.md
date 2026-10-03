# Ling 3.1 Flash — findings by DeepSeek 4.1 Flash

- Source: InclusionAI / Ant Group — Ling-3.1-flash (`opencode/ling-3.1-flash`)
- Date: 2026-10-03 (UTC)
- Overview and scoring methodology: `../../model-comparison.md`
- Cross-model signed log: `../../model-findings.md`

## Model card

- **Name:** Ling 3.1 Flash (Ling-3.1-flash)
- **Short description:** InclusionAI's (Ant Group) hybrid-reasoning Flash model announced 2026-09-30 — ~560B total / ~25B active MoE tuned for general agents, search, office work and software development, and Ant's strongest Flash-tier release to date.
- **Provider / access:** `opencode/ling-3.1-flash`; served free for two weeks via Novita (direct or through Vercel AI Gateway) and OpenRouter (`inclusionai/ling-3.1-flash`), $0 in / $0 out during the trial. Reasoning, tool use and implicit caching.
- **Release / knowledge:** 2026-09-30 (IT Home / TechNode launch coverage). Knowledge cutoff not published.
- **IDs:** `opencode/ling-3.1-flash`; upstream `inclusionai/ling-3.1-flash`.
- **Context window:** 1,000,000 tokens designed; **capped at 256K during the free trial**; max output 32,768.
- **Modalities:** Text in / text out (no image/audio/video documented). Hybrid reasoning (thinking) + tool calls.
- **Pricing (as of 2026-10-03):** **$0 input / $0 output** during the two-week trial; paid tier price not announced. The trial route does not opt prompts out of training — do not route confidential data through it.
- **Architecture:** Mixture-of-Experts, ~560B total / ~25B active per token. Proprietary (weights not released; Ant says it plans to open-source once the trial ends). Expert layout/attention design undisclosed.

### Raw benchmarks found

> All figures below are Ant Group's launch table (2026-09-30), which compares Ling-3.1-flash against DeepSeek-V4.1-Flash, GLM 5.3 Flash and others. None independently reproduced yet (Artificial Analysis / OpenRouter / Kilo had no listing at launch) — treat as vendor-reported.

Agent / tool use:

- Terminal-Bench 4.0: **40.40%** (Ant; vs DeepSeek-V4.1-Flash 31.20, GLM 5.3 Flash 32.80)
- Terminal-Bench 2.1: **81.18%** (Ant; vs DeepSeek-V4.1-Flash 90.60, GLM 5.3 Flash 84.30)
- MCP-Atlas: **83.00%** (Ant, via ThreatFrontier)
- BrowseComp: **91.67%** (Ant, via ThreatFrontier)
- MultiChallenge: **69.78%** (Ant; vs DeepSeek 72.12, GLM 5.3 Flash 62.60)

Reasoning / knowledge:

- HLE: **37.44%** (Ant; vs DeepSeek 39.20, GLM 5.3 Flash 39.90)
- HealthBench Professional: **65.35%** (Ant; vs DeepSeek 50.37, GLM 5.3 Flash 49.07)
- Draco: **85.49%** (Ant; vs DeepSeek 79.85, GLM 5.3 Flash 78.55)
- WideSearch: **83.32%** (Ant; vs DeepSeek 80.81, GLM 5.3 Flash 80.24)

Coding:

- SWE-Pro: **65.39%** (Ant; vs DeepSeek-V4.1-Flash 56.77, GLM 5.3 Flash 63.06)
- DeepSWE: **59.70%** (Ant; vs DeepSeek 74.20, GLM 5.3 Flash 63.40)
- CyberGym: **87.90%** (Ant; vs DeepSeek 88.10)

Long context:

- No RULER/MRCR retrieval curve published; context is catalogued at 1M designed / 256K trial cap.

### Normalized scores (1–100)

- **Tool use: 86/100.** TB2.1 81.18%, MCP-Atlas 83.00% and BrowseComp 91.67% are strong agentic marks, with TB4.0 40.40% leading both flash rivals — just under the frontier band.
- **Reasoning: 84/100.** HLE 37.44% sits just under the frontier 40%+ line; Draco 85.49% and HealthBench Professional 65.35% lead the flash peers.
- **Context window: 90/100.** 1M designed (≥1M tier = 95–100) but capped at 256K during the trial with no published retrieval curve, so scored at the lower end of the band.
- **Multimodal: 15/100.** Text in / text out only.
- **Coding: 87/100.** SWE-Pro 65.39% leads DeepSeek and GLM flash and CyberGym 87.90% is near-tied with DeepSeek, but DeepSWE 59.70% trails DeepSeek's 74.20%.
- **Cost efficiency: 100/100.** $0 in / $0 out during the two-week trial (training-data caveat).
- **Overall Score: 72/100.** (86 + 84 + 90 + 15 + 87) / 5 = 72.4 → **72**. Best-fit: free near-frontier agentic/coding flash model while the trial lasts; wait for paid-tier data terms before sensitive use.

---

## Signature

- Provided by: **DeepSeek 4.1 Flash (deepseek/deepseek-v4.1-flash)** — 2026-10-03
- Method: independent public internet research (ThreatFrontier launch analysis carrying Ant's benchmark table, LLM Reference, IT Home / TechNode summaries). Scores are normalized 1–100 interpretations, not official vendor scores.
- Future sources: add a new file next to this one, e.g. `GPT_5.md`, using the same headings.
