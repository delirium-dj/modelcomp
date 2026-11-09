# MiniMax M3.1 Flash Preview — findings by Mimo v2.6 Flash

- Source: MiniMax/`MiniMax-M3.1-Flash-Preview`
- Date: 2026-10-17 (UTC; original research 2026-10-02, re-researched 2026-10-17)
- Overview and scoring methodology: `../../model-comparison.md`
- Cross-model signed log: `../../model-findings.md`

## Model card

- **Name:** MiniMax M3.1 Flash Preview (`MiniMax-M3.1-Flash-Preview`)
- **Short description:** MiniMax's preview-tier multimodal coding model launched quietly 2026-09-27 inside MiniMax Code and the Token/M Plan subscription — positioned as a fast everyday coding model (bug fix → full feature) with always-on tunable thinking; sits beside (does not replace) the MiniMax-M3 flagship.
- **Provider / access:** MiniMax Code CLI/IDE and M Plan / Token Plan **subscription only** (official docs blue-banner restriction; re-confirmed by MindStudio hands-on 2026-10-12: "in preview and only accessible through MiniMax's own coding plan... not yet available as open weights"). A 2026-09-28 AI×AI report claims platform.minimax.io PAYG endpoints at $0.10/$0.40 — **unverified and contradicted** by two later independent checks (ThreatFrontier 2026-10-02: no standalone PAYG API, no third-party routers; MindStudio 2026-10-12). MiniMax has indicated a planned Hugging Face open-weights release with no confirmed date (MindStudio).
- **Release / knowledge:** 2026-09-27 (@MiniMaxAgent launch post; MiniMax Code repo fixtures `MiniMax-M3.1` with 512K/1M context + 128K output). Knowledge cutoff not published.
- **IDs:** `MiniMax-M3.1-Flash-Preview` (official model ID); no public PAYG id; **no Zen Free ID**.
- **Context window:** 1,000,000 tokens (official docs) / 512K catalog default in code fixtures; max output 128,000 (official MiniMax Code test fixture, ai-on-mac 2026-09-27). No long-context retrieval measurement published.
- **Modalities:** text, image, video in; text out; thinking always on with five effort levels `low / medium / high / xhigh / max` (default `max`) plus separate `reasoning_content` stream; tool calls + prompt caching supported (MiniMax agent-tools guide).
- **Pricing (as of 2026-10-02):** **no per-token price** — access is subscription: M Plan Go **$22/mo** ($220/yr), Explore $55/mo, Build $132/mo (Token Plan Plus/Max/Ultra equivalents), credit packs $5/$25/$100 at 1,000 credits = $1 (overflow covers M3.1 per M Plan FAQ); MiniMax Code free quota + double check-in credits promo 2026-09-28 → 2026-10-07. Sibling M3's $0.30/$1.20 PAYG must NOT be applied to M3.1.
- **Architecture:** not officially disclosed — no model card, no parameter count, no weights. Agent-tools guide reports a MoE with ~428B total / ~23B active, sparse attention, native visual encoder (single-source, unconfirmed by MiniMax).

### Raw benchmarks found

> Measured numbers with (source / rank / harness). MiniMax has published **no official benchmark table** for M3.1 (re-confirmed 2026-10-17: minimax.io/news shows no M3.1 entry; model absent from Artificial Analysis and BenchLM leaderboards). M3's numbers (SWE-bench Verified 80.5%, TB2.1 66.0%, MCP Atlas 74.2%) are a different checkpoint and are not transferred.

Agent / tool use:

- Terminal-Bench 2.1 / 4.0 / Tau3 / GDPval-AA / Toolathon / MCP-Atlas / OSWorld: **no verified public score found** for M3.1. An AI×AI (2026-09-28) table claims Terminal-Bench 4.0 76.5% and CursorBench 4.0 81.2% — **unverified**: ThreatFrontier (2026-10-02) states "MiniMax has not published any of these, and we could not trace them to a primary source"; not used for scoring.

Reasoning / knowledge:

- GPQA Diamond / HLE / LCR / CritPt / AA Intelligence Index / BenchLM (compare page exists but 0 shared public rows): **no verified public score found**

Coding:

- **KingBench 3 (AICodeKing test): 53 / 80 points = 66.25%** across 8 project tasks (Volanea review 2026-09-28; ThreatFrontier 2026-10-02 corroborates the figure and task detail — 9/10 on 3D geometry, 3/10 elevator sim, 4/10 archery game) — **+35 points over MiniMax M3's 31.25% in the same comparison**; Claude Opus 5.5 led that run at 93.75%
- SWE-bench Verified / SWE-Pro / LiveCodeBench / SciCode / DeepSWE / Vibe Code Bench: **no verified public score found** (AI×AI's circulating 73.8% SWE-V / 92.4% HumanEval Pro / 88.6% MultiPL-E figures remain untraceable to a primary source per ThreatFrontier — excluded)
- Qualitative hands-on (MindStudio 2026-10-12, M-Code agent): found a boundary-date bug in a six-join legacy DB2 query "almost immediately"; drone-decision JSON task correct except missing a thin power line; full autonomous 3D-game build (Blender + Godot) produced a playable game with working movement/jump/lava but a broken camera angle — strong on precision/debugging, weaker on holistic creative polish

Long context:

- 1,000,000-token window documented (official docs; ThreatFrontier 2026-10-02; MindStudio 2026-10-12 both re-confirm 1M); MRCR / RULER / Long-Context Recall: **no verified public score found**

Multimodal:

- Text + image + video input supported (official docs; ThreatFrontier re-confirms screenshots/diagrams/screen-recordings in-prompt); MMMU / MathVision / CharXiv / Video-MME: **no verified public score found**

### Normalized scores (1–100)

- **Tool use: 60/100.** Tool calling and prompt caching are documented, and the model drives MiniMax Code agent sessions, but zero Terminal-Bench/Tau/GDPval-style harness numbers exist for M3.1 — capped in the low-mid band.
- **Reasoning: 55/100.** Always-on thinking with five effort levels shows deliberate reasoning design, yet no GPQA/HLE/Index measurement of any kind is published (BenchLM unranked) — scored at the low end of the mid band pending data.
- **Context window: 95/100.** Official 1M (1,000,000) input with 128K output sits in the top tier band (95–100); held at the floor of the band because no retrieval-quality evidence exists.
- **Multimodal: 75/100.** Documented text + image + **video** input puts it in the +video-in band (75–90); no audio-in/non-text-out and no MMMU-style score justify the lower end.
- **Coding: 66/100.** The one measured number — 66.25% (53/80) on the 8-task KingBench 3 test, sharply above M3 in the same harness — shows a real jump in workflow coding, but a single small custom benchmark without SWE-bench/LCB/SciCode corroboration caps it in the 65–75 mid band.
- **Cost efficiency: 72/100.** No PAYG rate card at all: access requires the $22/mo+ M Plan (or MiniMax Code free quota with time-limited double-credit promo) — affordable entry with credits available, but subscription-gated with no unlimited $0 API, well below free-tier 100s and below cheap paid anchors.
- **Overall Score: 70/100.** (60+55+95+75+66)/5 = 70.2 → 70 — best-fit: subscription-only multimodal coding preview for MiniMax Code users wanting 1M context and video input; not yet for metered production APIs or benchmark-driven selection.

---

## Signature

- Provided by: **Mimo v2.6 Flash (opencode/mimo-v2.6-flash-free)** — 2026-10-02
- Method: public internet research (Volanea/AICodeKing KingBench 3 review, SaaSCity spec guide, DataNorth, APIMaster live route check, ai-on-mac fact check, minimax-ai.chat official-docs table, MiniMax M Plan pricing pages); scores are normalized 1–100 interpretations, not official vendor scores.
- Future sources: add a new file next to this one, e.g. `GPT_5.md`, using the same headings.
