# MiniMax M3.1 Flash Preview — findings by Step 5 Preview

- Source: MiniMax (`MiniMax-M3.1-Flash-Preview`)
- Date: 2026-10-09 (UTC)
- Overview and scoring methodology: `../../model-comparison.md`
- Cross-model signed log: `../../model-findings.md`

## Model card

- **Name:** MiniMax M3.1 Flash Preview (first M3.1-family model, shipped 2026-09-27)
- **Short description:** MiniMax's faster, lighter M3-series coding model — released quietly inside MiniMax Code (where it became the default model) and the Token Plan, with no announcement, model card, benchmark table, parameter count or per-token price. First-party docs confirm: a 1M-token context window, text/image/video input → text output, prompt caching, and always-on adaptive thinking with a five-rung `effort` ladder (low/medium/high/xhigh/max, defaulting to `max`; disabling thinking returns HTTP 400 "requires adaptive thinking"). Community fingerprinting strongly links it to the Space Bunny Alpha stealth model (~85% confidence), and MiniMax announced M3.1-Flash-Preview in MiniMax Code on 2026-09-27 without ever confirming that link. It is not on pay-as-you-go and has no public weights.
- **Provider / access:** MiniMax Code + Token Plan only (Plus $20/mo, Max $50/mo, Ultra $120/mo, rolling 5-hour/weekly quotas); Anthropic-compatible and OpenAI-compatible endpoints; MiniMax API docs at agent.minimax.io.
- **Release:** 2026-09-27.
- **Context window:** 1,000,000 tokens (MiniMax Code test fixtures also carry 512K/128K-output configurations).
- **Modalities:** Text, image and video in → text out.
- **Pricing (as of 2026-10-09):** no standalone per-token price published — access is subscription-only. (Circulating figures of $0.10/$0.40 per M could not be traced to a primary source and conflict with the access docs; the M3 sibling lists $0.30/$1.20 with a 512K-input surcharge.)
- **Speed:** day-one community decode measurements ~90–110 tok/s; the MiniMax agent guide claims ~150 tok/s.

### Raw benchmarks found

Independent (the only published eval of this model):

- **KingBench 3 (AICodeKing channel, 2026-09-28): 53/80 = 66.25%** across eight build-it-scratch coding tasks (vs MiniMax M3's 31.25% in the same format, and Claude Opus 5.5's 93.75% in the same run)
  - Strongest: 3D geometry — folding table 9/10, contact-lens case 8/10; SVG panda 7/10; local fine-tuning pipeline (Gemma 2B 4-bit LoRA, 600 steps) completed end-to-end
  - Weakest: interactive/stateful builds — elevator simulation 3/10 (crash on load), archery game 4/10 (misplaced targets, paused timer)
- Decode speed ~90–110 tok/s (community measurements)

Not published by anyone: SWE-bench, Terminal-Bench, GPQA, HLE, MCP Atlas, τ-bench, GDPval, Artificial Analysis Index — **no verified public score found**. The widely circulated "73.8% SWE-bench Verified / 165 tps" table is untraceable to a primary source and is treated as unverified. MiniMax M3's vendor numbers (SWE-Pro 59.0, TB 2.1 66.0, BrowseComp 83.52, MCP-Atlas 74.2, OSWorld 70.06) belong to M3 and do not transfer.

### Normalized scores (1–100)

- **Tool use: 45/100.** Agentic reasoning and tool use are the documented design targets (it ships as the default model inside a coding agent), but no Terminal-Bench, τ³, MCP Atlas, Toolathlon or GDPval number exists for this checkpoint — a structural estimate with "no verified public score found" noted.
- **Reasoning: 45/100.** No GPQA/HLE/ARC-AGI/math eval has been run; the five-level thinking dial and the +35-point KingBench jump over M3 suggest real capability, but the reasoning dimension is unevidenced beyond the coding eval.
- **Context window: 88/100.** A 1M-token window is the ≥1M band (95–100), docked because MiniMax publishes no MRCR/RULER/needle curve and the code fixtures themselves carry mixed 512K/1M tiers — the window is documented, its retrieval quality is not.
- **Multimodal: 78/100.** Text + image + video in → text out is the 75–90 band; input modalities are first-party documented and the KingBench visual tasks (3D builds, SVG) scored highest — but no MMMU/OCRBench/Video-MME number exists.
- **Coding: 62/100.** KingBench 3 at 66.25% (more than double M3's 31.25%) is a real, independent improvement signal for build-from-scratch work; the failure pattern matters — it looks complete but breaks on interactive state (elevator 3/10, archery 4/10) — and there is no SWE-bench or Terminal-Bench score to check it against.
- **Cost efficiency: 85/100.** No per-token price exists (subscription-only: $20/$50/$120 per month for ~1.7B/5.1B/12.5B M3-class tokens), so cost is a plan-shape estimate: cheap for heavy users within quota, unbenchmarkable as an API — the methodology's ~$0.6/$2.2 ≈ 92 range discounted for the missing rate card.
- **Overall Score: 64/100.** Best-fit recommendation: a promising everyday-coding preview — KingBench 3 more than doubled its predecessor and visual/3D builds are genuinely good — but with no public benchmarks, no API price, no weights and a documented weakness on interactive stateful builds, keep it in a side-by-side trial rather than a production default.

---

## Signature

- Provided by: **Step 5 Preview (StepFun)** — 2026-10-09
- Method: public internet research (MiniMax agent docs + platform documentation, eesel/threatfrontier/AI-on-Mac fact-checks, AICodeKing KingBench 3 via elma.sh and buildfastwithai, LLMReference); scores are normalized 1–100 interpretations, not official vendor scores.
- Future sources: add a new file next to this one, e.g. `MiniMax_M4.md`, using the same headings.
