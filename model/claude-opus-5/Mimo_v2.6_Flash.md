# Claude Opus 5 — findings by Mimo v2.6 Flash

- Source: Anthropic/`anthropic/claude-opus-5`
- Date: 2026-09-22 (UTC)
- Overview and scoring methodology: `../../model-comparison.md`
- Cross-model signed log: `../../model-findings.md`

## Model card

- **Name:** Claude Opus 5
- **Short description:** Anthropic's 2026-07-24 Opus flagship — near-Fable-5 intelligence at **half Fable's token price** ($5/$25 vs $10/$50); SWE-Pro 79.2, SWE-V 96.0, Frontier-Bench 43.3 (beats Fable 33.7), ARC-AGI-3 30.2 (~3× next), GDPval-AA v2 **1861**; Fast mode 2.5× speed at 2× price.
- **Provider / access:** Claude API `claude-opus-5`; Claude apps (Pro/Max/Team/Enterprise); Claude Code; Bedrock/Vertex (partner paths vary); Fast mode first-party API only. **No Zen Free ID** (`noFreeId: true`).
- **Release / knowledge:** **2026-07-24** (anthropic.com research + news). Knowledge cutoff not published in extracts.
- **IDs:** `anthropic/claude-opus-5`.
- **Context window:** meta **1M / 128K out**.
- **Modalities:** **text, image, PDF in; text out** (meta — no native audio/video in on Claude stack).
- **Pricing (as of 2026-09-22):** **$5 / $25 per 1M**; cache write 5m $6.25 / 1h $10; cache hit **$0.50**; batch **$2.50 / $12.50**; Fast mode **$10 / $50** (~2.5× speed) first-party only. Same price as Opus 4.8; half of Fable 5.
- **Architecture:** proprietary (undisclosed); effort setting (low→max) gates intelligence vs tokens; Opus 4.8 fallback on safety refusals in Anthropic evals.

### Raw benchmarks found

> Measured numbers with (source, rank, harness). Anthropic system card / launch primary; AA/BenchLM/Vals/Meta tables as independent or cross-vendor checks.

Agent / tool use:

- Terminal-Bench 2.1: **86.7%** Meta harness Claude Code max (Meta table — vendor-vs-vendor); **AA independent 89.1%** (BenchLM aaTerminalBench21); **Vals Terminus-2 84.6% (#2)** behind GPT-5.6 Sol 85.77; **not on tbench.ai verified board** (top Anthropic verified row remains Opus 4.8 78.9% — Codersera note)
- Terminal-Bench 4.0: **49.0%** (AA/BenchLM); TB Hard not separately extracted
- GDPval-AA v2: **1861 Elo** (Datacamp/Codersera system-card table — **#1-class**, above Fable 5 1747, GPT-5.6 Sol 1736)
- MCP Atlas: **85.8%** (BenchLM; claim coverage 89.1)
- OSWorld 2.0: **70.6%** (Anthropic system card via SeaWork — beats Fable 5 peak 66.1 at ~1/3 budget per Anthropic)
- BrowseComp: **90.8%** (BenchLM; 10-agent prerelease 93.6)
- AutomationBench: **56.6%** (AA); AA Briefcase **1720**; Harvey LAB **93.5%**; EnterpriseOps **47.5%**; Tau3 Banking **42.1%** (BenchLM/AA)
- Zapier AutomationBench: **100%** full churn-prevention flow (Codersera/Anthropic qualitative claim)
- Frontier-Bench v0.1: **43.3%** (Anthropic — **beats Fable 33.7, doubles Opus 4.8 21.1**)

Reasoning / knowledge:

- ARC-AGI-3: **30.2%** (Anthropic — ~3× next-best GPT-5.6 Sol 7.8) (SeaWork/Codersera)
- HLE with tools: **64.7%** (BenchLM); DeepSearchQA **95.0%**; DRACO **88.6%**
- Artificial Analysis Intelligence Index: no standalone absolute for Opus 5 transcribed in this pass (AA Agentic Index **56.2**, Briefcase 1720 present) — do not invent; reasoning scored from ARC-AGI-3/HLE/GDPval rows
- GPQA Diamond / MMLU-Pro absolute for Opus 5: no verified public score found in this pass (system card emphasizes SWE/agentic/ARC rows)

Coding:

- SWE-bench Verified: **96.0%** (Anthropic system card prose via SeaWork — Fable 95.0, Mythos 95.5)
- SWE-bench Pro: **79.2%** (system card; Datacamp table; Fable 80.0–80.3, Mythos 80.3 slightly ahead)
- SWE-bench Multilingual: **89.5%** (system card — **beats Fable 86.6, Opus 4.8 84.4**)
- SWE-bench Multimodal: **59.4%** (system card — beats Fable 54.1)
- DeepSWE v1.1: **68.8%** (system card; Fable 69.7, GPT-5.6 Sol 72.7 ahead)
- FrontierCode 1.1 Main: **53.4%** (≈ Fable 53.5, > Sol 47.5); Extended 63.6 (BenchLM)
- CursorBench 3.2: within **0.5% of Fable 5 peak** at max effort, half cost/task (Anthropic)
- FrontierSWE v2: 52.0; ProgramBench 93.0; VulcanBench v3 87.0; LiveCodeBench (Vals) 89.0; SWE-bench (Vals) 97.0; AA Coding Index **78.0** (BenchLM)
- Bug Hunt Bench: 27 fixes (BenchLM qualitative count)

Long context:

- **1M / 128K out** (meta); MRCR/RULER absolute: no verified public score found in this pass (AA-LCR row not extracted for Opus 5)

Multimodal:

- **text, image, PDF in** (meta) — solid multimodal input; **no audio/video in** (unlike GPT-5.6/Muse/MiMo full stacks) → upper image/PDF band, not max

### Normalized scores (1–100)

- **Tool use: 93/100.** GDPval **1861 (#1-class)**, AA TB2.1 **89.1**, Vals TB **#2**, MCP Atlas 85.8, OSWorld 70.6, BrowseComp 90.8, Frontier-Bench 43.3 — elite across terminal, computer-use, and knowledge-work agents; only dents are unverified tbench.ai submission and Meta-harness 86.7 being vendor-vs-vendor.
- **Reasoning: 94/100.** **ARC-AGI-3 30.2 (~3× field)**, HLE w/tools 64.7, DRACO 88.6, misaligned-behavior audit 2.3 best-ever (Datacamp) — frontier novel reasoning; missing GPQA/MMLU/AA-Index absolute rows keeps a sliver of headroom vs a fully-instrumented Fable/GPT card.
- **Context window: 96/100.** Full **1M / 128K out** (meta) — top band; no retrieval curve in this pass.
- **Multimodal: 78/100.** Text+image+PDF in only (meta) — strong document/vision input but **no audio/video** → below full omnimodal peers (GPT-5.6 Terra, Muse 1.2, MiMo V2.6).
- **Coding: 94/100.** SWE-V **96.0**, SWE-Pro **79.2**, Multilingual **89.5 (#1 among compared)**, Multimodal 59.4, Frontier-Bench 43.3 over Fable — best-in-class open coding breadth; DeepSWE 68.8 slightly trails Sol/Fable.
- **Cost efficiency: 46/100.** **$5/$25** is half of Fable and same as Opus 4.8 (excellent **within** Anthropic frontier), but absolute price is still premium vs Terra $2/$12, free Zen tiers, and $0.10-class open models; Fast mode 2× price; no Free ID → methodology low-40s/46 band (peer avg cost was 46.2 — aligned).
- **Overall Score: 91/100.** Mean of five quality dims (93+94+96+78+94)/5 = 91.0. Peer `average.md` Overall **90.9** — near-identical. Best-fit: daily-driver frontier coding/knowledge agent when Fable-class capability must cost half as much; choose Fable 5 only when max multi-day autonomy is worth 2× tokens; choose GPT-5.6 Terra for cheaper near-Sol terminal work.

---

## Signature

- Provided by: **Mimo v2.6 Flash (xiaomi/mimo-v2.6-flash)** — 2026-09-22
- Method: public internet research (anthropic.com/research/claude-opus-5 + news launch, SeaWork system-card benchmark tables, Datacamp comparison grid, Codersera capability-per-dollar analysis, BenchLM scorecard, platform.claude.com pricing, Meta 2026-08-05 cross-vendor chart, Vals via AiCybr); scores are normalized 1–100 interpretations, not official vendor scores.
- Future sources: add a new file next to this one, e.g. `GPT_5.md`, using the same headings.
