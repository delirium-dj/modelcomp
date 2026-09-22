# Xiaomi MiMo-V2.5-Pro — findings by Mimo v2.6 Flash

- Source: Xiaomi/`mimo-v2.5-pro`
- Date: 2026-09-22 (UTC)
- Overview and scoring methodology: `../../model-comparison.md`
- Cross-model signed log: `../../model-findings.md`

## Model card

- **Name:** Xiaomi MiMo-V2.5-Pro
- **Short description:** Xiaomi's flagship open-weights MoE (1.02T total / 42B active, MIT-class open release 2026-04-27) for demanding agentic and 1,000+ tool-call professional tasks with strong 1M coherence; text-focused Pro sibling of the omni MiMo-V2.5.
- **Provider / access:** Xiaomi MiMo API `mimo-v2.5-pro` (OpenAI/Anthropic-compatible); OpenRouter `xiaomi/mimo-v2.5-pro`; HF `XiaomiMiMo/MiMo-V2.5-Pro`; NanoGPT/DigitalOcean and other hosts. **No OpenCode Zen Free ID** (`noFreeId: true`).
- **Release / knowledge:** 2026-04-22 public launch; open-sourced 2026-04-27 (MIT, full V2.5 series). Knowledge cutoff not clearly restated (family ~late-2025 / early-2026 training data claims vary by source).
- **IDs:** `xiaomi/mimo-v2.5-pro` (repo/OpenRouter); `mimo-v2.5-pro` (Xiaomi API).
- **Context window:** **1M** tokens (Base sibling 256K); hybrid attention; designed for 1,000+ tool-call trajectories.
- **Modalities:** **text-only** (Pro — vision/audio live on non-Pro V2.5); deep thinking toggle; tool calls yes; structured outputs; streaming.
- **Pricing (as of 2026-09-22):** Xiaomi list **~$0.435 in / $0.87 out per 1M** (cache read ~$0.0028–$0.0036); OpenRouter effective ~$0.30/$0.61 on some discounts; DigitalOcean $0.40/$1.50. Meta: ~$0.44/$0.87.
- **Architecture:** Sparse MoE **1.02T total / 42B active**; hybrid attention; FP8 checkpoints; open weights (V2.5 series MIT).

### Raw benchmarks found

> Measured numbers with (source, rank, harness). Mix of Xiaomi launch claims, AA, BenchmarkList, llmboard, OpenRouter/AA panels.

Agent / tool use:

- Claw-Eval: **64.0% Pass^3** (Xiaomi/llmboard; ~70K tokens/trajectory — claimed 40–60% fewer tokens than Opus 4.6 / 3.1 Pro / GPT-5.4 at comparable capability; rank ~11/28 on BenchmarkList)
- ClawProBench: **63.3** (BenchmarkList; 93rd pct, rank 5/57)
- Tau2-Bench Telecom: **94.2%** (AA; 91st pct)
- Tau3-Bench: **72.9%** (BenchmarkList; 88th pct, rank 3/18) — but Tau3-Banking only **8.7%** (48th pct) — uneven across verticals
- Terminal-Bench Hard: **43.2%** (AA; 93rd pct, rank 25/327)
- Terminal-Bench 2.1: **65.2%** (BenchmarkList; 76th pct — well behind Sol ~89 / Opus ~85)
- GDPval-AA: **1265 Elo** (BenchmarkList; 84th pct, rank 51/316) — trails Sol 1748 / Opus 4.8 1600
- AutomationBench-AA: **16.9%** (AA; weak vs Sol 51.2)
- APEX-Agents-AA: **2.4%** (very low on that board)

Reasoning / knowledge:

- GPQA Diamond: **86.6%** (AA) / **82.6%** (BenchmarkList panel) / **87.0%** (SWEN) — cite 86.6 AA primary
- HLE: **35.7%** (AA) / 33.8 (BenchmarkList)
- MMLU Pro: **84.6%** (BenchmarkList)
- Artificial Analysis Intelligence Index: **42.24** (BenchmarkList) / OpenRouter shows 26.4 on one AA rollup / SWEN 42.9 — cite ~42 band with variance note; trails Sol 58.9 significantly
- CritPt: **4.0%** (AA — weak hard-science frontier)
- AA-LCR: **73.3–79.7%** (strong long-context recall class)

Coding:

- SWE-bench Verified: **74.0%** (BenchmarkList; 50th pct — trails Sol 96.2 / Opus much higher on that board's scale)
- LiveCodeBench: **81.4%** (BenchmarkList; near Sol 82.6)
- SciCode: **50.2–50.6%** (AA/BenchmarkList; near Opus 53.5)
- AA Coding Index: **60.2** (AA/OpenRouter/SWEN)
- Vibe Code Bench v1.1: **34.1%** (vs Sol 80.5 — large gap)
- SWE-bench Pro: claimed top-ranking in Xiaomi marketing; exact public % not re-extracted in this pass — treat as unverified here
- DeepSWE: no verified public score found for V2.5-Pro in this pass

Long context:

- 1M designed for 1,000+ tool-call runs; Context Arena: **36.2%** (BenchmarkList — weak vs Sol 85.5 on that board); AA-LCR strong mid-70s–80s — mixed long-context evidence
- MRCR absolute: no verified public score found

Multimodal:

- **Text-only** (Pro surface) — template: 15. (Non-Pro V2.5 sibling is omni-modal — do not transfer those scores here.)

### Normalized scores (1–100)

- **Tool use: 78/100.** Claw-Eval 64 with elite token efficiency, Tau2-Telecom 94.2, Tau3 72.9, TB Hard 43.2 — strong professional agent work; dragged by TB2.1 65.2, Tau3-Banking 8.7, AutomationBench/APEX weakness, GDPval 1265 mid-pack.
- **Reasoning: 78/100.** GPQA ~86.6 and HLE ~35.7 are solid; AA Intelligence Index ~42 and CritPt 4% show clear distance from frontier science reasoning (Sol ~59 Index).
- **Context window: 84/100.** True 1M window purpose-built for long tool trajectories with good AA-LCR, but Context Arena 36.2% and missing MRCR curve mean deep needle reliability is only partly proven.
- **Multimodal: 15/100.** Text-only Pro (template rule: 15).
- **Coding: 80/100.** LiveCodeBench 81.4 near Sol, SciCode ~50 near Opus, SWE-Verified 74 respectable, AA Coding Index 60 — strong open coding; Vibe Code Bench and TB2.1 gaps to closed frontier keep it out of the high-80s.
- **Cost efficiency: 94/100.** ~$0.44/$0.87 with 1M context and open weights is exceptional intelligence-per-dollar for agentic volume; not free (no Zen ID), and premium-tier framing on Benchable notes higher cost percentile vs nano models.
- **Overall Score: 71/100.** Mean of five quality dims (78+78+84+15+80)/5 = 71.0. Best-fit: private long-horizon **text** agent fleets (Claw-class tasks, 1,000+ tool calls) at open-weight economics — use non-Pro MiMo-V2.5 when you need vision/audio, or a closed frontier model when TB2.1/GDPval/SWE-Verified ceilings matter.

---

## Signature

- Provided by: **Mimo v2.6 Flash (xiaomi/mimo-v2.6-flash)** — 2026-09-22
- Method: public internet research (mimo.xiaomi.com V2.5-Pro release, HF card, BenchmarkList, llmboard, OpenRouter/AA scores, Benchable, SWEN); scores are normalized 1–100 interpretations, not official vendor scores.
- Future sources: add a new file next to this one, e.g. `GPT_5.md`, using the same headings.
