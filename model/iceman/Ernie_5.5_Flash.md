# Iceman — findings by Ernie 5.5 Flash

- Source: OpenCode Zen stealth route Iceman (`iceman`, `iceman-free` / `iceman-contributor`)
- Date: 2026-11-13 (UTC)
- Overview and scoring methodology: `../../model-comparison.md`
- Cross-model signed log: `../../model-findings.md`

## Model card

- **Name:** Iceman (stealth — lab undisclosed; strongest published lead is Microsoft MAI)
- **Short description:** An anonymous stealth model served by OpenCode since 2026-10-24 (Go: `iceman-contributor`; Zen from 2026-11-10: `iceman-free`), 262K context, 131K output, text-only, reasoning with low/medium/high/xhigh effort and tool calls. OpenCode's own stats show 10,856 users and ~417B tokens on day one. Identity lead: Microsoft MAI (self-introduction + tokenizer match), unconfirmed.
- **Provider / access:** OpenCode Go (`opencode-go/iceman-contributor-free`, Go subscription from $10/mo, trains on prompts) and OpenCode Zen (`opencode/iceman-free`, free for a limited time, data retained and used to improve the model). No direct API, no weights.
- **Release / knowledge:** first listed 2026-10-24 (models.dev commit); knowledge cutoff not published.
- **IDs:** `iceman-free` (Zen), `iceman-contributor` / `iceman-contributor-free` (Go). No vendor ID published.
- **Context window:** 262,144 tokens; max output 131,072.
- **Modalities:** text in / text out; reasoning (4 effort levels, max rejected); tool calls; structured output.
- **Pricing (as of 2026-11-13):** $0 per token — free on Zen and Go (Go requires a subscription; both trade prompts for training).
- **Architecture:** undisclosed closed weights. Tokenizer matches MAI Thinking 1, Glyph Cluster, GPT-6 models and gpt-oss-120b on 23/23 phrases — one tokenizer family, lab unresolved.

### Raw benchmarks found

> StealthMark 1.8.x independent evaluation (Stealth Models, 2026-10-25) — the only measured rows for this identity. Third-party, not a vendor table.

Agent / tool use:

- Terminal-Bench / Tau2 / Claw-Eval / Toolathon: no verified public score found
- Tool calls supported; no agentic benchmark row

Reasoning / knowledge:

- StealthMark overall: **19.2/100** (rank 53/58); General Intelligence **11.7/100**; Visual Intelligence **31.0/100**
- GPQA / HLE / MMLU-Pro / AA Intelligence Index: no verified public score found

Coding:

- SVG reconstruction rows (code-generation proxy): Beach **46.4**, Selfie **39.3**, Pelican **38.0**, Raccoon **29.8**, Ground Truth **20.2**, Mona Lisa **19.3**, Newton's Mirror **10.1**
- Games: Foresight **3.2** (survived 0/3 levels), Latch **3.6** (cleared 1/5)
- Reasoning efficiency: single-step **29** (rank 52/56), multi-step **37** (rank 25/54)
- SWE-bench / LiveCodeBench / DeepSWE: no verified public score found
- Measured output speed: ~46 tok/s, ~0.9s to first token (Stealth Models runs)

Long context:

- 262,144 declared; no MRCR/RULER/GraphWalks figure published.

### Normalized scores (1–100)

- **Tool use: 40/100.** Tool calling supported; no agentic benchmark row. The Foresight 3.2 / Latch 3.6 game results show weak multi-step planning. Score reflects the thin evidence.
- **Reasoning: 45/100.** StealthMark General Intelligence 11.7/100 is bottom-tier (tied with MAI Thinking 1's neighborhood); multi-step reasoning efficiency 37 is mid. Low band.
- **Context window: 85/100.** 262,144 — tier 200K–500K band; no retrieval figure published.
- **Multimodal: 15/100.** Text-only in/out.
- **Coding: 55/100.** The SVG rows (Beach 46.4 best, Newton's Mirror 10.1 worst) show passable creative code generation but weak precision reconstruction; no SWE/LCB row. Mid-low.
- **Cost efficiency: 100/100.** $0 on both routes (paid in prompt data).
- **Overall Score: 48.0/100.** Best fit for free stealth-preview coding/reasoning experiments inside OpenCode; the bottom-quartile StealthMark scores and text-only modality keep it far below the tracked frontier. If Microsoft confirms MAI, this folder merges into the revealed model's folder per the revealed-stealth rule.

---

## Signature

- Provided by: **Ernie 5.5 Flash (baidu/ernie-5.5-flash-preview)** — 2026-11-13
- Method: public internet research (Stealth Models' Iceman Contributor case file and StealthMark results, OpenCode Zen/Go docs, models.dev commit, OpenCode data page); scores are normalized 1–100 interpretations, not official vendor scores. All figures are third-party stealth-eval rows, not a vendor table.
- Reference URLs:
  - [Iceman Contributor — Stealth Models case file](https://stealthmodels.com/iceman-contributor)
  - [Iceman Contributor — StealthMark benchmark results](https://stealthmodels.com/benchmarks/models/iceman-contributor)
  - [OpenCode Zen docs — Iceman Free (stealth, free) and privacy terms](https://opencode.ai/docs/zen)
  - [Iceman Free — ArtificialWatch radar record](https://artificialwatch.com/wire/radar-opencode-iceman-free)
- Future sources: if the lab is revealed, merge this folder into the revealed model's folder per the revealed-stealth rule; do not score it under the stealth name.