# Glyph Cluster — findings by Ernie 5.5 Flash

- Source: anonymous stealth model `glyph-cluster` (identity lead: Microsoft MAI) (`glyph-cluster`)
- Date: 2026-11-13 (UTC)
- Overview and scoring methodology: `../../model-comparison.md`
- Cross-model signed log: `../../model-findings.md`

## Model card

- **Name:** Glyph Cluster (stealth; unrevealed — strongest published lead is Microsoft's MAI line)
- **Short description:** An anonymous stealth coding/long-context model served through Vercel AI Gateway since 2026-10-07, 256K context, text-only in, reasoning with low/medium/high/xhigh effort. Stealth Models' tokenizer analysis (24/24 phrase-count matches with MAI Thinking 1's `o200k_base`) and shared failure patterns point to Microsoft MAI as the developer.
- **Provider / access:** Vercel AI Gateway (`stealth/glyph-cluster`, free preview; Pro/Enterprise teams need purchased Gateway credits); Command Code Go plan ($1/mo, ~100 free requests/day). No direct API, no weights.
- **Release / knowledge:** first seen 2026-10-07 (stealth listing); knowledge cutoff not published.
- **IDs:** `stealth/glyph-cluster` (Vercel), `stealth-model/glyph-cluster` (HF card). No vendor ID published.
- **Context window:** 262,144 tokens (256K).
- **Modalities:** text in / text out; reasoning (xhigh available); function calling / tool use (per HF card tags); structured output.
- **Pricing (as of 2026-11-13):** $0 per token during the stealth preview (Vercel); Command Code Go $1/month with ~100 requests/day.
- **Architecture:** undisclosed. Tokenizer matches `o200k_base` exactly (24/24 test phrases), the same tokenizer Microsoft documents for MAI Thinking 1.

### Raw benchmarks found

> StealthMark 1.8.10 independent evaluation (Stealth Models, 2026-10-09/10) — the only measured rows for this identity. Not a vendor table; treat as third-party evidence.

Agent / tool use:

- Terminal-Bench / Tau2 / Claw-Eval / Toolathon: no verified public score found
- Tool use: function calling supported per HF card; no agentic benchmark row

Reasoning / knowledge:

- GPQA Diamond: **56.4%** (31/55 on Stealth Models' 55-question subset; 56.0% on the 50-question run) — vs GPT-6 Sol 95.45, GPT-5.5 93.6, MiniMax M3 92.9
- StealthMark overall: **18.9** (rank 52/56); General Intelligence **12.0**; Visual Intelligence **29.8**
- HLE / MMLU-Pro / AA Intelligence Index: no verified public score found

Coding:

- StealthMark coding-adjacent SVG reconstruction tasks: Beach **46.3**, Raccoon **35.7**, Selfie **32.4**, Ground Truth **19.9**, Newton's Mirror **12.8**, Mona Lisa **11.7**, Foresight **6.4**, Latch **3.6**
- SWE-bench / LiveCodeBench / DeepSWE: no verified public score found

Long context:

- 256K declared; no MRCR / RULER / GraphWalks figure published.

### Normalized scores (1–100)

- **Tool use: 45/100.** No agentic benchmark row; only documented function-calling support. Score reflects absence of evidence.
- **Reasoning: 50/100.** GPQA 56.4% is well below the 2026 frontier (89–93%); the StealthMark General Intelligence of 12.0/100 is bottom-tier. Mid-low band.
- **Context window: 85/100.** 256K — tier 200K–500K band; no retrieval figure published.
- **Multimodal: 15/100.** Text-only in/out (the SVG "visual" tasks are code-generation outputs, not image input).
- **Coding: 55/100.** The SVG reconstruction rows (Beach 46.3 best) show passable code generation but weak precision work (Newton's Mirror 12.8, Mona Lisa 11.7); no SWE/LCB row. Mid-low.
- **Cost efficiency: 100/100.** $0 during the stealth preview.
- **Overall Score: 50/100.** Best fit for free stealth-preview experiments on Vercel/Command Code; the bottom-tier StealthMark reasoning and text-only modality keep it far below the tracked frontier. Per the revealed-stealth rule, this folder should be merged into the revealed model's folder if Microsoft confirms MAI — never scored permanently under the stealth name.

---

## Signature

- Provided by: **Ernie 5.5 Flash (baidu/ernie-5.5-flash-preview)** — 2026-11-13
- Method: public internet research (Stealth Models' glyph-cluster case file and StealthMark results, Hugging Face stealth card, Vercel/Command Code access listings); scores are normalized 1–100 interpretations, not official vendor scores. All figures are third-party stealth-eval rows, not a vendor table.
- Reference URLs:
  - [Glyph Cluster — Stealth Models case file and StealthMark results](https://stealthmodels.com/glyph-cluster)
  - [stealth-model/glyph-cluster — Hugging Face card](https://huggingface.co/stealth-model/glyph-cluster)
  - [StealthMark leaderboard](https://huggingface.co/spaces/stealth-model/stealthmark)
  - [Glyph Cluster vs MAI Thinking 1 — Stealth Models comparison](https://stealthmodels.com/compare/glyph-cluster-vs-mai-thinking-1)
- Future sources: if the model is revealed, merge this folder into the revealed slug per the revealed-stealth rule; do not score it under the stealth name.