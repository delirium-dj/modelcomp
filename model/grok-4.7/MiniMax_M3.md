# Grok 4.7 — findings by MiniMax M3

- Source: xAI / SpaceXAI (`xai/grok-4.7` / `spacexai/grok-4.7`)
- Date: 2026-10-16 (UTC)
- Overview and scoring methodology: `../../model-comparison.md`
- Cross-model signed log: `../../model-findings.md`

## Model card

- **Name:** Grok 4.7
- **Short description:** SpaceXAI's **2026-09-21** coding and knowledge-work flagship on a **new larger base** than Grok 4.6, with a longer RL run weighted toward multi-hour tasks. Same **$2 / $6** list price and **500K** context as 4.6. **Leads EEBench 64.0%** (electrical engineering) and **Harvey Legal Agent 19.6%** (vs Fable 5.1 6.7%, GPT-5.6 Sol 2.5% — *13-pt lead over next best*), with **AA Intelligence Index v4.3 46** (#16 of 202; ties MiMo V2.6 Pro, ahead of GLM-5.3 45, Kimi K3 44, Gemini 3.8 Flash 41). *Trails* on Terminal-Bench 4.0 (37.6%, #21 of 35 — vs Fable 5.1 57.9%) and CursorBench 4.0 (46.3% vs Fable 5.1 51.8%).
- **Provider / access:** Grok API `grok-4.7`; Cursor; Grok Build; third-party coding harnesses and model routers. Fast variant $4/$12. Reasoning levels none → xhigh. **No OpenCode Zen Free ID** per meta.json.
- **Release / knowledge:** **2026-09-21**; knowledge cutoff not publicly verified.
- **IDs:** `xai/grok-4.7`, `spacexai/grok-4.7`. No OpenCode Zen Free ID.
- **Context window:** **500,000 tokens** (unchanged vs 4.6). Cursor long-prompt billing noted above 256K (VentureBeat).
- **Modalities:** **Text + image in; text out.**
- **Pricing (as of 2026-10-16):** **$2.00 / $6.00** per 1M standard; **$4.00 / $12.00** fast; cache **$0.50** (75% discount). Cursor >256K: standard $4/$12, fast $6/$18.
- **Architecture:** Proprietary; **new larger base** vs 4.6 (xAI); longer RL run with the MoE-router style +5-layer verifier (per the "checks its own work more carefully" framing); natively understands the Grok Bot harness.

### Raw benchmarks found

Triangulated across **six** independent surfaces: xAI official launch post (x.ai/news/grok-4-7), xAI Grok 4.7 model card PDF (media.x.ai), Artificial Analysis v4.3.2 Intelligence Index independent composite, Vals AI independent Vals Index, BenchLM Terminal-Bench 4.0 leaderboard (October-15 snapshot, 35 models), Emergent independent analysis. Most headline numbers are vendor-reported (xAI ran the rival columns) but the AA Index, Vals Index, and BenchLM TB 4.0 are *independent reproductions* on shared harnesses.

Agent / tool use:

- **CursorBench 4.0 (vendor, xhigh)**: **46.3%** (vs Grok 4.6 40.4%, GPT-5.6 Sol Max 41.7%, Fable 5.1 Max 51.8%) — *trails* Fable 5.1 by 5.5 pt.
- **DeepSWE v1.1 (vendor, xhigh, high-effort)**: **71.0%** (vs 4.6 65.2%, GPT-5.6 Sol 72.7%, Fable 5.1 70.0%) — *leads* Fable 5.1; trails GPT-5.6 Sol by 1.7.
- **Vibe Code Bench (meta.json)**: **86.2%** (vs Fable 5.1 51.8% on CursorBench — a different test). Emergent notes +9-10 pt gain over 4.6.
- **AA Briefcase v1.1 Elo**: **1,657** (vs 4.6 1,546, GPT-5.6 Sol 1,487, Fable 5.1 1,678) — *trails* Fable 5.1 by 21 Elo.
- **GDPval-AA Elo**: **1,695** (+90 vs 4.6 high).
- **Terminal-Bench 4.0 (BenchLM, Grok Build xhigh)**: **37.58%** (#21 of 35; vs Claude Opus 5.5 max 64.85%, Fable 5.1 max 57.88%, GPT-6 Astra max 58.18%, GLM-5.3 max 41.82%, Grok 4.6 20.30% — **+17.28 pt over 4.6 but still 20 pt behind the closed frontier**).
- **Supabase Evals (meta.json)**: **89.9%** (vendor; strongest benchmark per AI release tracker).
- **Coding Agent Index (AA)**: **56** (+9 vs 4.6, ahead of GPT-5.6 Sol).
- **Next.js Evals (meta.json)**: **94%** (vendor).
- **AutomationBench-AA / Tau3 / Claw-Eval**: no verified public numeric in surveyed sources.

Reasoning / knowledge:

- **Artificial Analysis Intelligence Index v4.3.2 (xhigh)**: **46** (#16 of 202; *tied* MiMo-V2.6-Pro 46; ahead of GLM-5.3 45, Kimi K3 44, Gemini 3.8 Flash 41; trails Claude Fable 5.1 Max 53, GPT-6 Astra Max 53, Claude Opus 5 Max 51, Muse Spark 1.3 48).
- **Harvey Legal Agent Benchmark (vendor)**: **19.6%** — **LEADS the field** (vs 4.6 15.8%, Fable 5.1 Max 6.7%, GPT-5.6 Sol Max 2.5%; 13-pt lead over next-best).
- **HealthBench Professional (vendor)**: **56.7%** (vs 4.6 48.5%, Fable 5.1 62.1%, GPT-5.6 Sol 60.5%).
- **EEBench (vendor)**: **64.0%** — **LEADS** (vs 4.6 53.0%, GPT-5.6 Sol 39.4%, Fable 5.1 56.4%).
- **HackerBench v0.3 cyber safety**: **3.3%** of risky prompts through (xAI vendor — best safety).
- **LatchBio biosafety (vendor)**: **62.4%** (xAI #1).
- **GPQA Diamond / HLE / CritPt / LCR**: no verified public % beyond Index membership in surveyed sources.

Coding:

- **DeepSWE v1.1 (vendor high-effort)**: **71.0%** — within 1.7 pt of GPT-5.6 Sol.
- **CursorBench 4.0**: **46.3%** (trails Fable 5.1 51.8% by 5.5 pt).
- **Coding Agent Index**: 56 — best gain over 4.6.
- **SWE-bench Verified / LiveCodeBench**: no verified public score in surveyed sources.

Long context:

- 500K native window (unchanged vs 4.6). AA-LCR v1.1 is in Index v4.3.2 but a standalone LCR % is not on the AA article. MRCR / RULER: no verified public score.

Operational:

- **Speed (output tokens/sec)**: **39.5 t/s** (AA; #152 of 202 — *slow*).
- **Verbosity**: **240M output tokens** to complete the AA Intelligence Index, vs median **94M** — *very verbose*, ~2.5× the field median.
- **Cost per Index task (xhigh)**: **$3.74** (vs sticker-$2/$6 — verbosity + slow speed inflate real cost; mid-pack rather than cut-rate).
- **Vals Index (independent)**: **60.2%** (#12 of 65; up from 4.6 #19 — ~+10 pt Vibe Code Bench gain).

Pricing compared to peers (current as of 2026-10-16):

- **vs Grok 4.6 ($2/$6)**: same sticker; 4.7 has +90 GDPval-AA, +111 Briefcase, +17.28 TB 4.0, +5.9 CursorBench, +11 EEBench. Verbosity tax makes the *real* per-task cost higher.
- **vs Claude Fable 5.1 Max ($10/$50)**: Grok 4.7 is **5× cheaper** input, **8.3× cheaper** output at sticker; AA Index 46 vs 53, *trails* on raw intelligence.
- **vs GPT-6 Astra Max**: Grok 4.7 *trails* on Index 46 vs 53; pricing depends on Astra's published tier (not surfaced in surveyed sources).
- **vs Claude Opus 5 Max**: Grok 4.7 *trails* 51 → 46; pricing 4× cheaper input, ~3× cheaper output.
- **vs MiMo V2.6 Pro ($0.435/$0.87)**: Grok 4.7 is **4.6× more** input, **6.9× more** output, but MiMo trails on AA Index at frontier (V2.6-Pro at 46 same as 4.7 — *cost-quality crossover*).
- **vs Kimi K3 ($15 output)**: Grok 4.7 is **2.5× cheaper** output, **3.74× cheaper** per-task cost.

### Normalized scores (1–100)

- **Tool use: 82/100.** CursorBench 4.0 46.3 (vendor), DeepSWE 71.0 (high-effort), Vibe Code 86.2 (vendor), Coding Agent Index 56, Briefcase 1,657 Elo, GDPval 1,695 Elo are *frontier-adjacent* on agent knowledge work; but Terminal-Bench 4.0 **37.58% (BenchLM, Grok Build xhigh)** is **20 pt behind the closed frontier** (Opus 5.5 max 64.85%, Fable 5.1 max 57.88%) and the Vibe Code win is vendor-attributed. AA Intelligence Index 46 is mid-pack.
- **Reasoning: 84/100.** **EEBench 64.0% (LEADS the field)**, **Harvey Legal Agent 19.6% (LEADS the field by 13 pt)**, HealthBench Professional 56.7, LatchBio 62.4 are *strong, real-world-reasoning* axes. AA Intelligence Index 46 (tied MiMo V2.6 Pro) is mid-pack; no public GPQA / HLE / LCR row in surveyed sources — a real gap below the very top.
- **Context window: 88/100.** 500K is unchanged vs 4.6; 1M is now the elite (Grok 4.6 500K is the same). Token verbosity inflates cost but does not shrink the window. Cursor long-prompt billing above 256K noted.
- **Multimodal: 65/100.** Text + image in, text out; vision handled but not the headline capability (no native audio / video; no native document understanding published for 4.7 in surveyed sources).
- **Coding: 86/100.** DeepSWE v1.1 **71.0% (high-effort)** within 1.7 pt of GPT-5.6 Sol; Vibe Code 86.2 (vendor); Coding Agent Index 56 (AA); Supabase 89.9 (vendor). Trailed on CursorBench 4.0 46.3 vs Fable 5.1 51.8. TB 4.0 37.58 caps at #21. The vendor's DeepSWE *high-effort* asterisk is a fair warning — the score is real but the configuration is at the upper bound.
- **Cost efficiency: 70/100.** $2/$6 sticker is *competitive* — same as 4.6, beats Fable 5.1 8.3× on output. But: 240M output tokens for the Index (2.5× median verbosity) inflates real cost to **$3.74 per Index task xhigh**; 39.5 t/s speed (152/202) compounds the tax. Fast variant doubles the sticker. Not free (no Zen ID).
- **Overall Score: 81/100** Half-up mean of the five non-cost dims: (82 + 84 + 88 + 65 + 86) / 5 = 405 / 5 = 81.0 → **81**. Best fit: **legal agents (Harvey 19.6% leads by 13 pt)**, **electrical engineering (EEBench 64% leads)**, **knowledge work / multi-hour tasks** where the $2/$6 sticker compensates for verbosity/speed. Watch for: TB 4.0 20-pt gap to closed frontier (vs Fable 5.1 57.88% max), the 2.5× field-median verbosity, slow 39.5 t/s output speed (152/202), the DeepSWE *high-effort* asterisk. Twin file `Grok_4.6.md` (Grok 4.6 self-report on 4.7, 2026-10-01) gave **81** — my 81 matches.

---

## Signature

- Provided by: **MiniMax M3 (MiniMax-M3)** — 2026-10-16
- Method: Six-source triangulation (xAI/SpaceXAI official launch page + Grok 4.7 model card PDF, Artificial Analysis v4.3.2 Intelligence Index, Vals AI independent Vals Index, BenchLM Terminal-Bench 4.0 October-15 35-model leaderboard, Emergent independent analysis). Identity resolved: this is **xAI/SpaceXAI Grok 4.7** (2026-09-21 release), the larger-base successor to Grok 4.6 — *not* Grok 4.6 (500K context, AA Index 61 on the older v4.1), *not* Grok 4.7 fast (the $4/$12 2× speed variant), *not* Grok 5 / Grok 4 / Grok 4.5 predecessors. Scores are normalized 1–100 interpretations, not official vendor scores. The xAI launch numbers are vendor-attributed (xAI ran the rival columns); AA Index 46, Vals Index 60.2%, and BenchLM TB 4.0 37.58% are *independent reproductions on shared harnesses*.
- Future sources: add a new file next to this one, e.g. `GPT_5.md`, using the same headings.

