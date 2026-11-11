# MiniMax M3.1 Flash — findings by Mimo v2.6 Flash

- Source: MiniMax/`MiniMax-M3.1-Flash` (formerly `MiniMax-M3.1-Flash-Preview`)
- Date: 2026-11-11 (UTC; original research 2026-10-02, re-researched 2026-10-17, second-pass enrichment 2026-11-11 — preview→GA transition)
- Overview and scoring methodology: `../../model-comparison.md`
- Cross-model signed log: `../../model-findings.md`

> **Second-pass enrichment — 2026-11-11** (user-approved). Previous Signature
> 2026-10-02 (file dated 2026-10-17, Overall 70, zero benchmark rows).
> **The model went GA on 2026-10-19** ("Today, we officially roll out
> MiniMax M3.1 Flash" — MiniMax launch post; Space Bunny 🐰, which
> processed 200T+ tokens anonymously, was an early version), and with it
> came the **first official benchmark table + Artificial Analysis
> independent runs + PAYG pricing** — every named gap is now filled.
> Fresh sources: **BenchLM GA page** (snapshot 2026-11-10, **60.06/100,
> #53/1020, 27/812 rows**; the Preview sibling page stays "not computed"),
> the **MiniMax launch post**, and the **Artificial Analysis model page**
> (checked 2026-11-11). Changes: **Tool use 60→70** — the "zero harness
> numbers" cap is gone: **GDPval-AA 47.9% (AA)** fills the named gap near
> the frontier ref, plus TB4.0 38.1, OSWorld 2.0 61.7, AutomationBench
> 62.2, BankerToolBench 76.2, ALE 29.6, MKA 33.5, LOCA-256K 60.3,
> CyberGym 82.2 (mostly vendor-run; AA rows noted); still no Tau row and
> TB4.0/ALE/MKA/SWE-Refactor 23.0 are weak. **Reasoning 55→74** — HLE
> clears the 40%+ frontier reference with independent corroboration
> (**vendor HLE w/o tools 43.4 / AA-HLE 48.0**), plus **AA Index 29**,
> **CritPt 22.3**, **AA-LCR 79.7**, first **AA-Omniscience net −6.4
> (accuracy 45.1 / hallucination 93.7%)**; capped by absent GPQA/MMLU-Pro
> breadth. **Multimodal 75→84** — the "no MMMU-style score" gap is filled
> strong: **AA-MMMU-Pro 79.1 (independent)**, vendor **CharXiv 82.5**,
> **BabyVision w/ Python 91.0**. **Coding 66→74** — **DeepSWE 73.7%**
> (near the 74+ frontier ref), **AA-SciCode 53.4** (near the 55 ref),
> NL2Repo 61.2 alongside the recorded KingBench 3 66.25; still no
> SWE-bench Verified/LCB row (AI×AI's circulating 73.8% SWE-V remains
> untraceable per ThreatFrontier — excluded). **Cost 72→90** — PAYG
> landed: **$0.15 in / $0.60 out / $0.015 cached** (launch post; AA
> "very competitive" vs class medians $0.43/$1.84, $0.49/Index-task, 90%
> cache discount); no free API tier. **Context held 95** (1M re-confirmed;
> AA-LCR 79.7 is reasoning, LOCA-256K 60.3 is not a ≥98%@512K retrieval
> row). **Overall 70→79** ((70+74+95+84+74)/5 = 397/5 = 79.4). Status
> updates: **weights now released** (AA lists open weights, HF, MiniMax
> Community License, 428B/23B confirmed — the launch post's "weights
> later" has landed); access now MiniMax API + M Plan + MiniMax Code;
> **modality conflict: official docs say text+image+video in, AA spec says
> text+image only** — both recorded.

## Model card

- **Name:** MiniMax M3.1 Flash (`MiniMax-M3.1-Flash`) — **GA since 2026-10-19** (formerly `MiniMax-M3.1-Flash-Preview`, launched quietly 2026-09-27)
- **Short description:** MiniMax's Flash-tier multimodal coding/agent model — positioned as a fast everyday coding model (bug fix → full feature) with always-on tunable thinking; the preview sat beside (did not replace) the MiniMax-M3 flagship, and the **2026-10-19 GA rollout** brought the first official benchmark table (DeepSWE 73.7, AutomationBench-AA top-tier, OSWorld V2 61.7, CyberGym 82%), flat PAYG pricing, and open weights. "Space Bunny 🐰" — which processed 200T+ tokens while operating anonymously — was an early version. MiniMax claims ~3× faster inference and 70% lower agentic usage cost vs its predecessor; a Pro tier "will arrive later."
- **Provider / access:** **MiniMax API (platform.minimax.io, PAYG), M Plan / Token Plan subscription, and MiniMax Code** (launch post 2026-10-19 — the preview's subscription-only restriction is superseded); AA lists **14 API providers** and the weights on Hugging Face. The preview-era unverified claim of platform.minimax.io PAYG endpoints at $0.10/$0.40 (AI×AI 2026-09-28) is now moot and superseded by the official $0.15/$0.60 rates.
- **Release / knowledge:** preview 2026-09-27 (@MiniMaxAgent); **GA 2026-10-19** (launch post; AA release date agrees). Knowledge cutoff not published.
- **IDs:** `MiniMax-M3.1-Flash` (official model ID, GA); preview ID `MiniMax-M3.1-Flash-Preview`; **no Zen Free ID**.
- **Context window:** 1,000,000 tokens (official docs; AA re-confirms 1M); max output 128,000 (official MiniMax Code test fixture, ai-on-mac 2026-09-27). No long-context retrieval measurement published.
- **Modalities:** **text, image, video in; text out** per official docs (ThreatFrontier re-confirms screenshots/diagrams/screen-recordings in-prompt); thinking always on with five effort levels `low / medium / high / xhigh / max` (default `max`) plus separate `reasoning_content` stream; tool calls + prompt caching supported. **Conflict: Artificial Analysis's spec table lists text + image input only** (no video) — both recorded side by side (checked 2026-11-11).
- **Pricing (as of 2026-11-11; GA rates live from 2026-10-19):** **flat PAYG $0.15 in / $0.60 out / $0.015 cached input per 1M** (launch post; AA independently confirms $0.15/$0.60 with 90% cache discount, "$0.49 per Index task", "very competitive" vs class medians $0.43/$1.84). M Plan subscription remains available (Go $22/mo, Explore $55, Build $132; credit packs). **No free API tier.**
- **Architecture:** MoE **428B total / 23B active** — the previously single-source agent-tools-guide figure is now **confirmed by Artificial Analysis** (428B/23B), sparse attention, native visual encoder; **weights released under the MiniMax Community License** (HF; AA: "commercial use allowed with restrictions") — the launch post's "model weights will be released later" has since landed.

### Raw benchmarks found

> Measured numbers with (source / rank / harness). **The preview era had no
> official benchmark table — the 2026-10-19 GA launch post published one,
> and Artificial Analysis now runs the model independently** (BenchLM
> snapshot 2026-11-10: 60.06 #53/1020, 27/812 rows, all under the GA
> entry; the Preview sibling page remains "not computed"). M3's numbers
> (SWE-bench Verified 80.5%, TB2.1 66.0%, MCP Atlas 74.2%) are a
> different checkpoint and are not transferred.

Agent / tool use:

- Terminal-Bench 4.0: **38.10%** (MiniMax launch post via BenchLM — **new**, first terminal-bench row for this model; mid-low)
- OSWorld 2.0: **61.7** (launch post — **new**; MiniMax claims #1 among Chinese models)
- AutomationBench: **62.2%** (launch post — **new**; "ranks among top performers" per MiniMax)
- BankerToolBench: **76.2%** (launch post — **new**)
- Agents' Last Exam: **29.6%** (launch post — **new**, weak; MiniMax claims #1 among Chinese models)
- LOCA-Bench 256K: **60.3** (launch post — **new**)
- SWE Refactor Bench: **23.0** (launch post — **new**, weak)
- CyberGym: **82.2%** (launch post — **new**)
- **GDPval-AA: 47.9%** (Artificial Analysis — **new; the named "GDPval-AA: no verified public score" gap is filled**, near the ~50 frontier reference)
- MKA: **33.5%** (AA leaderboard — **new**)
- Tau3 / Tau2-Bench: no verified public score found (re-checked 2026-11-11)
- The preview-era AI×AI claims (TB4.0 76.5%, CursorBench 4.0 81.2%) remain excluded — ThreatFrontier could not trace them to a primary source; the official TB4.0 figure is 38.10, far below the claim

Reasoning / knowledge:

- HLE (Humanity's Last Exam, no tools): **43.4%** (MiniMax launch post — **new**; clears the 40%+ frontier reference) — **AA-HLE 48.0%** independent run corroborates and is higher (new)
- Artificial Analysis Intelligence Index: **29** (AA, v5.0.1 — **new**; well above the comparable-class median 23 per AA)
- CritPt: **22.3%** (AA — **new**)
- AA-LCR (long-context reasoning): **79.7%** (AA — **new**)
- AA-Omniscience: net **−6.4**, accuracy **45.1%**, hallucination rate **93.7%** (AA — **new**, first measurement of this axis: mild net penalty, very high raw hallucination rate)
- GPQA Diamond / MMLU-Pro / SuperGPQA: no verified public score found (re-checked 2026-11-11)
- BenchLM overall: **60.06 (#53/1020)** snapshot 2026-11-10 (first overall; preview page unranked)

Coding:

- DeepSWE: **73.7%** (launch post — **new**; "alongside top models", just under the 74+ frontier reference)
- AA-SciCode: **53.4%** (Artificial Analysis — **new**, independent; near the 55 frontier reference)
- NL2Repo: **61.2%** (launch post — **new**)
- PostTrainBench v1.1: **39.3%** (launch post — **new**)
- **KingBench 3 (AICodeKing test): 53 / 80 points = 66.25%** across 8 project tasks (Volanea review 2026-09-28; ThreatFrontier 2026-10-02 corroborates the figure and task detail — 9/10 on 3D geometry, 3/10 elevator sim, 4/10 archery game) — **+35 points over MiniMax M3's 31.25% in the same comparison**; Claude Opus 5.5 led that run at 93.75%
- SWE-bench Verified / SWE-Pro / LiveCodeBench / Vibe Code Bench: **no verified public score found** (AI×AI's circulating 73.8% SWE-V / 92.4% HumanEval Pro / 88.6% MultiPL-E figures remain untraceable to a primary source per ThreatFrontier — excluded, re-checked 2026-11-11)
- Qualitative hands-on (MindStudio 2026-10-12, M-Code agent): found a boundary-date bug in a six-join legacy DB2 query "almost immediately"; drone-decision JSON task correct except missing a thin power line; full autonomous 3D-game build (Blender + Godot) produced a playable game with working movement/jump/lava but a broken camera angle — strong on precision/debugging, weaker on holistic creative polish

Long context:

- 1,000,000-token window documented (official docs; AA re-confirms 1M); **AA-LCR 79.7%** is long-context reasoning, not retrieval; **LOCA-Bench 256K 60.3** is a 256K agentic row; MRCR / RULER / Long-Context Recall: **no verified public score found** (re-checked 2026-11-11)

Multimodal:

- **AA-MMMU-Pro: 79.1%** (Artificial Analysis — **new, independent; the named "no MMMU-style score" gap is filled at a strong level**)
- **CharXiv: 82.5%** (launch post — **new**)
- **BabyVision w/ Python: 91.0%** (launch post — **new**)
- Text + image + video input supported (official docs; ThreatFrontier re-confirms screenshots/diagrams/screen-recordings in-prompt) — **conflict: AA spec lists text + image only** (checked 2026-11-11)
- MathVision / Video-MME: no verified public score found

### Normalized scores (1–100)

- **Tool use: 70/100.** The "zero harness numbers" cap is gone — the GA table plus AA fill it with ten agentic rows: **GDPval-AA 47.9% (AA, near the ~50 frontier ref)**, OSWorld 2.0 61.7, AutomationBench 62.2, BankerToolBench 76.2, CyberGym 82.2, LOCA-256K 60.3 alongside TB4.0 38.10 → 70 (was 60). Capped below higher bands by weak rows (TB4.0 below mid, ALE 29.6, MKA 33.5, SWE-Refactor 23.0), the absence of any Tau row, and most rows being vendor-run (AA independently measures only GDPval/MKA here).
- **Reasoning: 74/100.** HLE clears the 40%+ frontier reference with independent corroboration — **vendor 43.4 / AA 48.0** (both recorded) — plus **AA Index 29** (above class median 23), **CritPt 22.3**, **AA-LCR 79.7** → 74 (was 55, where "no GPQA/HLE/Index of any kind" was the cap). Held below the 80s by absent GPQA/MMLU-Pro/SuperGPQA breadth, the first Omniscience reading (**net −6.4 but hallucination rate 93.7%**), and an Index still in the high-20s vs 2026 frontier.
- **Context window: 95/100.** Official 1M (AA re-confirms) with 128K output sits in the top tier band (95–100); held at the floor of the band because no retrieval-quality evidence exists — AA-LCR 79.7 is reasoning, LOCA-256K 60.3 is a 256K agentic row, no MRCR/RULER (no change).
- **Multimodal: 84/100.** The "no MMMU-style score" gap is filled at strong levels — **AA-MMMU-Pro 79.1 (independent)**, vendor **CharXiv 82.5**, **BabyVision 91.0** — backing the documented text+image+video input → 84 (was 75, the floor of the video-in band "because no score"). No audio-in/non-text-out; AA's text+image-only spec conflicts with the video claim (recorded).
- **Coding: 74/100.** **DeepSWE 73.7%** (just under the 74+ frontier ref) and independent **AA-SciCode 53.4** (near the 55 ref) corroborate the recorded KingBench 3 66.25 and NL2Repo 61.2 → 74 (was 66, capped by "a single small custom benchmark"). Still no SWE-bench Verified/LCB row (AI×AI's 73.8% claim remains untraceable and excluded) and SWE-Refactor 23.0 is weak — keeps it below the fully-charted frontier stacks.
- **Cost efficiency: 90/100.** PAYG exists at last and it is cheap: **$0.15 in / $0.60 out / $0.015 cached** (launch post; AA independently confirms, "very competitive" vs class medians $0.43/$1.84, $0.49 per Index task, 90% cache discount) → 90 (was 72, subscription-gated with no rate card). No free API tier keeps it below the 95+ free-tier anchors; M Plan ($22+/mo) remains as an alternative.
- **Overall Score: 79/100.** (70 + 74 + 95 + 84 + 74) / 5 = 397/5 = 79.4 → 79 — best-fit: the GA turned a zero-data preview into a fully-measured cheap agentic coding workhorse — DeepSWE 73.7, GDPval 47.9, HLE 43.4/48.0 at $0.15/$0.60 — with 1M context and video input; still missing SWE-V/LCB/GPQA breadth and carrying a 93.7% raw hallucination rate.

---

## Signature

- Provided by: **Mimo v2.6 Flash (opencode/mimo-v2.6-flash-free)** — 2026-11-11 (original: 2026-10-02; re-researched 2026-10-17; user-approved second-pass enrichment 2026-11-11)
- Method: public internet research (Volanea/AICodeKing KingBench 3 review, SaaSCity spec guide, DataNorth, APIMaster live route check, ai-on-mac fact check, minimax-ai.chat official-docs table, MiniMax M Plan pricing pages); **enrichment pass 2026-11-11** re-checked the [MiniMax M3.1 Flash launch post](https://www.minimax.io/blog/minimax-m31f) (GA 2026-10-19, first official benchmark table, $0.15/$0.60/$0.015 PAYG, Space Bunny lineage, weights-later note), the [BenchLM GA page](https://benchlm.ai/models/minimax-m3-1-flash) (snapshot 2026-11-10: 60.06 #53/1020, 27/812 rows, per-row provenance split between the launch post and AA; Preview sibling "not computed"), and the [Artificial Analysis model page](https://artificialanalysis.ai/models/minimax-m3-1-flash) (Index 29, GDPval 47.9, HLE 48.0, CritPt 22.3, LCR 79.7, Omniscience −6.4/45.1/93.7, MMMU-Pro 79.1, SciCode 53.4, pricing/428B-23B/open-weights/license/14-providers confirmed; checked 2026-11-11). Scores are normalized 1–100 interpretations, not official vendor scores; vendor-run rows are attributed as such; the preview-era unverified AI×AI claims (TB4.0 76.5, CursorBench 81.2, SWE-V 73.8) remain excluded per ThreatFrontier; conflicts (video-in vs AA text+image spec) reported side by side. Previous Signature 2026-10-02 / file date 2026-10-17.
- Future sources: add a new file next to this one, e.g. `GPT_5.md`, using the same headings.
