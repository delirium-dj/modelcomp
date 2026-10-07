# Claude Fable 5 — findings by MiMo 2.6 Flash

- Source: Anthropic (`claude-fable-5`)
- Date: 2026-10-07 (UTC)
- Overview and scoring methodology: `../../model-comparison.md`
- Cross-model signed log: `../../model-findings.md`

## Model card

- **Name:** Claude Fable 5
- **Short description:** Anthropic's first **generally available Mythos-class model** (released 2026-06-09 with Claude Mythos 5 — same weights, Mythos keeps safeguards lifted for vetted Project Glasswing partners). "SOTA on nearly all tested benchmarks" at launch: SWE-Verified 95.0, SWE-Pro 80.3 (+11.1 over Opus 4.8), TB2.1 88.0, GDPval-AA 1932, HLE 59.0 no-tools. Built-in safeguard classifiers **fall back to Opus 4.8** (not refusals) on cyber/bio/chem/distillation prompts — <5% of sessions on average; on AWS those routed requests bill at Opus rates. Mandatory **30-day data retention**. Superseded by Fable 5.1 (same $10/$50, 75% cheaper cache reads). The launch window (free on Pro/Max/Team through 2026-06-22, then credit-metered) reflected capacity-first rollout.
- **Provider / access:** Claude API (`claude-fable-5`), Claude apps, Amazon Bedrock, Claude Platform on AWS, Google Vertex, Microsoft Foundry, GitHub Copilot, Databricks; partners like Harvey.
- **Release / knowledge:** released 2026-06-09; knowledge cutoff not surfaced in launch sources → not scored.
- **IDs:** `anthropic/claude-fable-5` (gateway routes) / `claude-fable-5` (native; restricted sibling `claude-mythos-5`).
- **Context window:** 1,000,000 tokens; max output 128,000; **no long-context surcharge** (full 1M at standard rates).
- **Modalities:** text + images in; text out; reasoning yes (adaptive thinking always on — no disable; `effort` parameter, `task-budgets` beta, `fallbacks` API for classifier switching); tool calls yes (incl. native memory tool).
- **Pricing (as of 2026-10-07):** **$10.00 in / $50.00 out** per 1M — exactly 2× Opus 4.8 and "less than half" the restricted Mythos Preview's $25/$125; Batch $5/$25; cache reads **$1.00/M** (0.1× input), 5m/1h writes $12.50/$20; US-only inference +1.1×. 30-day retention required. Fallback-routed traffic bills at Opus rates. Paid (subscription usage requires credits since 2026-06-23).
- **Architecture:** proprietary Mythos-class (parameters undisclosed).

### Raw benchmarks found

Agent / tool use (Anthropic-run unless noted):

- Terminal-Bench 2.1: **88.0** — **clears the 88% frontier ref** (the load-bearing agentic row; WaveSpeed noted it was missing from the initial image-table transcription, later confirmed).
- GDPval-AA: **1932** Elo (vs Opus 4.8's 1890, GPT-5.5's 1769) — **clears the 1750+ ref by the widest margin in the batch**.
- **Safeguard interference caveat:** Anthropic's own Fable 5.1 page states Fable 5 scored **0 on OSWorld 2.0 and 0 on AutomationBench** on tasks where its safety classifiers intervened (cyber/bio fallbacks) — no usable OSWorld/AutomationBench capability figure survives for Fable 5; the platform numbers for those suites effectively route to Opus 4.8/Opus 5.
- Terminal-Bench Science 0.1: **21.4** (public leaderboard) / **24.7** (Anthropic's setup) vs Opus 5's 30.0/29.0 — behind on the new science-terminal harness. CursorBench 3.1 (max): 72.9. Hex analytical bench: >90 (customer-run, +10 over Opus).

Reasoning / knowledge (Anthropic-run unless noted):

- HLE (no tools): **59.0** — clears the 40%+ ref by a wide margin. MMLU-Pro: **91.5**. HealthBench Professional: 66.0 (Opus 4.8 56.9).
- GPQA Diamond / AIME / ARC-AGI-2: **not published at launch** (explicitly noted as absent from Anthropic's release).
- AA Intelligence Index: **60, #1 of the board** at launch (o-mega's compilation of AA rows — clears the 60+ ref on that era's scale; the re-based v4.3 board later lists Fable 5.1 at 53 #1).
- Factual-error/hallucination rows: no dedicated Omniscience row found; Anthropic frames Fable as its most accurate general model (vendor claim).

Coding (Anthropic-run):

- SWE-bench Verified: **95.0** (some transcriptions say 95.5 — tech-jack flags the Pro figure as contested across evaluators; Epoch's independent run was pending as of 2026-06). Highest published at launch.
- SWE-bench Pro: **80.3** (+11.1 vs Opus 4.8, +21.7 vs GPT-5.5) — **clears any reasonable frontier ref**; contested/self-reported per launch-week hub coverage.
- FrontierCode Diamond: **29.3** (vs Opus 4.8 13.4, GPT-5.5 5.7). Terminal-Bench 2.1: 88.0 as above.
- GDP.pdf (visual doc reasoning): 29.8 (vs GPT-5.5 24.9, Opus 4.8 22.5).

Long context:

- 1M window at flat pricing with memory tool; Anthropic claims focus across millions of tokens; **no needle/LCR/MRCR figure published** → capacity only.

### Normalized scores (1–100)

- **Tool use: 91/100.** TB2.1 88.0 clears the ref and GDPval-AA 1932 is the batch-leading knowledge-work Elo; held below 93 by the zeroed OSWorld/AutomationBench rows (safeguard interference), TB-Science behind Opus 5, and no MCP-Atlas/ALE rows.
- **Reasoning: 91/100.** HLE 59.0 (no tools) crushes the 40+ ref, MMLU-Pro 91.5, AA Index 60 (#1 at launch, clears 60+ on that scale); **no GPQA/ARC/AIME disclosure** is the gap keeping it below Opus-5-class reasoning scores.
- **Context window: 95/100.** 1M capacity, full-window flat billing (no surcharge), memory tool — but zero retrieval benchmarks → floor.
- **Multimodal: 67/100.** Text + image in, text out = image band (60–70); Anthropic claims vision SOTA and GDP.pdf 29.8 leads its table; no video/audio/PDF-native input or non-text output.
- **Coding: 95/100.** The strongest coding sheet in the batch: SWE-V 95.0, SWE-Pro 80.3, TB2.1 88.0 — **all three headline coding refs cleared** — plus FrontierCode Diamond 29.3 at 2.2× Opus 4.8; held at 95 (not 97) by self-report-only status, contested Pro figure, Epoch verification pending at coverage date, and the TB-Science lag.
- **Cost efficiency: 30/100.** $10/$50 lands exactly on the $10/$50 ≈ 30 anchor; Batch halves it and cache reads at 90%-off help agentic loops, but 30-day retention, Opus-rate fallback billing, and a 2×-Opus list price with no cheap tier keep it at 30.
- **Overall Score: 88/100.** (91+91+95+67+95)/5 = 87.8 → 88 — the capability ceiling of mid-2026 at premium-plus pricing: every coding ref cleared and the batch's best GDPval, offset by thin reasoning disclosure, safeguard-routed zeros on two flagship agent suites, and a cost profile aimed at the top 1% of workloads.

---

## Signature

- Provided by: **MiMo 2.6 Flash (Xiaomi — opencode/mimo-v2.6-flash)** — 2026-10-07
- Method: fresh public internet research (Anthropic launch post + Fable product page, DataNorth, Nerd Level Tech, WaveSpeed, Tech Jack, HokAI, W&B/llm-stats transcriptions); scores are normalized 1–100 interpretations, not official vendor scores.
- Future sources: add a new file next to this one, e.g. `MiMo_2.6_Flash.md`, using the same headings.
