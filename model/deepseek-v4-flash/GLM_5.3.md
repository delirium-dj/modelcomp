# DeepSeek V4 Flash — findings by GLM 5.3

- Source: DeepSeek (`deepseek-v4-flash`, 0731 snapshot; 0420 GA build tracked at the base slug)
- Date: 2026-10-13 (UTC) — second-pass re-research of the 2026-09-25 report
- Overview and scoring methodology: `../../model-comparison.md`
- Cross-model signed log: `../../model-findings.md`

## Model card

- **Name:** DeepSeek V4 Flash (0731 refresh; 0420 GA base)
- **Short description:** DeepSeek's fast-tier V4 reasoning model — a 1M-context agentic coder at flash pricing. Second pass resolves the build situation: **the 0420 GA build (released 2026-04-24, open weights on HF) is tracked at the base BenchLeader slug (60.5 #103, max effort), and the 0731 refresh (2026-07-31) has its own entry at 54.4 #235 — the refresh reads *lower*, so "the version to compare against today" per BenchLeader is the newer but lower-settling 0731 this folder tracks**. The settled evidence is strong at max effort — GPQA 90.8% #55 clears the bar, AIME 2026 95.8% #13 elite, IFBench 79.2% #11, τ² 95.6% #20, τ³ 39.4% #33 — against a catastrophic honesty floor (non-hallucination 5.5-11%) and Coding-47-worst on the 0420 ladder. **16 OpenRouter providers have driven the input floor to $0.012-$0.09** with 202 tok/s. Successors: V4.1 Flash (this repo's batch-3 dossier) and the V4 Flash Vision Exp (batch 8). Top use case: high-volume agentic coding and browsing at minimal cost — never for unverified facts.
- **Provider / access:** OpenCode Zen `opencode/deepseek-v4-flash` ($0.14/$0.28, cached $0.028); DeepSeek API; **16 OpenRouter providers — Relace fp4 $0.012/$1.28, Open Inference fp4 $0.014/$1.15, StreamLake fp8 $0.083/$0.165 (floor), DeepInfra $0.090/$0.180, GMICloud $0.091/$0.182**, SiliconFlow, Parasail, Baidu Qianfan, Alibaba, Azure, Cloudflare (384K), and more; open weights `deepseek-ai/DeepSeek-V4-Flash` (HF).
- **Release / knowledge:** **0420 GA 2026-04-24** (weights on HF); **0731 refresh 2026-07-31** (this folder's build); knowledge cutoff not stated publicly.
- **IDs:** `opencode/deepseek-v4-flash` (no Free ID on Zen; paid tier); `deepseek-v4-flash-0420` / `deepseek-v4-flash-0731` (AA/BL build IDs).
- **Context window:** **1M tokens** (confirmed — all 16 providers at 1.0M except Cloudflare's 384K).
- **Modalities:** text in / text out on this line (image input lives on the separate `deepseek-v4-flash-vision-exp`); reasoning (max is the best-measured config by ~11 index points); tool calls (MCP/agent rows); JSON mode not separately verified.
- **Pricing (as of 2026-10-13):** Zen $0.14 in / $0.28 out per 1M (cached read $0.028); **OpenRouter floor $0.083/$0.165 (StreamLake fp8)** with $0.012-$0.014 fp4 wildcards; blended $0.140/M — "among the cheapest fifth"; **202 tok/s at max (fastest quarter) but 145 s first answer**; **$0.0075 per agentic session; $0.09 per Intelligence Index run**.
- **Architecture:** open weights (resolves the first pass's "open-weight availability unverified"); parameter count undisclosed; MoE per the family.

### Raw benchmarks found

> Second pass adds the settled BenchLeader ladder for the **0420 build** (max best **60.5 #103/760**, 4 effort settings, last measured 2026-04-24) — the 0731 refresh sits at 54.4 #235 with fewer settled rows; the first-pass rows (labeled 0731 by BenchLM) are retained as the folder-build data. Build-spread caveats flagged throughout.

Agent / tool use:

- **τ²-Bench: 94.4-95.6% #20-31** — elite across every effort (0420); **τ³-Banking: 39.4% #33 (max — gap filled, good)**; **GDPval-AA: 46.7% #64 (max)** (updated from 1189/46.3% — consistent)
- Terminal-Bench: 2.1 AA **78.7% #49 (max)** / Vals 67.0% (0731 row retained); TB 2.0 56.9% (retained); **TB 4.0: 12.1% #80 (max)**; TB Hard 34.1-38.6% #61-90; ITBench SRE 31.5% #31; Analyst 25.0% #22; LiveBench Agentic 37.6% #66
- 0731-build rows retained: MCP Atlas 69%; Toolathlon-Verified 70.3%; BrowseComp 73.2%; AA Agentic Index 41.7%; ALE 25.2%; AutomationBench 25.1%; CyberGym 76.7%; Claw-Eval / SWE Atlas: still unmeasured

Reasoning / knowledge:

- GPQA Diamond: AA **90.8% #55 (max)** — clears the 90% bar at max (high: 86.7% #104; no-reasoning: 71.6% #279); Vals 89.9% (0731 row retained)
- HLE: AA **38.5% #94 (max)** — just under the 40% reference (the with-tools 45.1% 0731 row retained, above it); **CritPt: 16.6% #82 (max)** (mid-weak; 0.3-3.4% at lower efforts)
- **Math elite at max: AIME 2026: 95.8% #13; HMMT Feb 2026: 93.9% #10; Apex: 27.1% #11**; LiveBench Math 79.7% #61; SimpleBench 46.3% #52; DTBench 86.4% #88; LMCA 35.9% #104; Kagi 52.2% #76
- **Honesty catastrophic at every effort: AA-Omniscience non-hallucination 5.5% #505 (no-reasoning) / 11.0% #388 (high) / 8.3% #452 (max)** — never trust its facts unverified; accuracy 40.4% #118 (max — effort improves accuracy, not honesty); Omniscience −14.3 #209 (max)
- **AA II 34.3 #90 (max)** (confirms); ECI 146.1 #74; **IFBench: 79.2% #11 (max — elite)**, and IF-77 is its best category; 0731 knowledge rows retained (MMLU-Pro 86.2%, HMMT 94.8%, IMOAnswerBench 88.4%, Apex 33.0%)

Coding:

- 0420 settled coding is the weak spot (**Coding 47 — its worst category**): SciCode 44.9-50.4% #102-129 (below the 55% reference); WeirdML 43.8-45.6% #84-87; ALE 325-678 #80-109 (weak); **LMArena WebDev: 1582 #32 (high — strong preference)**; LMArena Coding 1474-1484 #99-105; TB 4.0 12.1% #80
- 0731-build rows retained (the folder's build): **SWE-bench Verified 79% / SWE-bench (Vals) 88.8%; LiveCodeBench Pass@1-COT 91.6% / Vals 87.3%; Codeforces 3052**; DeepSWE 54.4%; SWE-Pro 52.6%; AA Coding Index 69.1% — the build spread on coding is the widest flag in this file
- Vibe Code Bench: still no verified row (unchanged gap)

Long context:

- **1M confirmed**; **MRCR 1M 78.7% and CorpusQA 1M 60.5%** (retained — directly measured retrieval-class evidence); **AA-LCR: 79.7% #85 (max)** — good; the 145-second first answer at max tempers usable long-context interactivity.

Multimodal:

- Text-only on this line (vision lives on the separate Vision Exp variant).

### Normalized scores (1–100)

- **Tool use: 72/100.** Lowered from 76: the elite τ² 95.6% #20, good τ³ 39.4% #33 (gap filled), mid GDPval 46.7% #64, decent TB 2.1 78.7% #49, ITBench #31, and the retained 0731 browse/toolathlon rows — against TB 4.0 12.1% #80, TB Hard ~37%, Analyst 25% #22, and LiveBench Agentic 37.6% #66.
- **Reasoning: 74/100.** Lowered from 80: GPQA 90.8% #55 clears at max and the competition-math trio is elite — but HLE 38.5% #94 misses the reference, CritPt 16.6% #82 is mid-weak, AA II 34.3 #90, Kagi 52.2% #76, and the honesty floor (non-hall 5.5-11%) is catastrophic.
- **Context window: 93/100.** Lowered from 95: 1M confirmed with directly measured retrieval (MRCR 78.7%, AA-LCR 79.7% #85) — the 145 s thinking TTFT is the usability caveat.
- **Multimodal: 15/100.** Held: text-only on this line.
- **Coding: 74/100.** Lowered from 78: the folder-build (0731) coding rows remain excellent (SWE-V 79/88.8%, LCB 91.6%, Codeforces 3052) and WebDev 1582 #32 is strong — but the 0420 settled coding measured weak (SciCode ~45-50%, WeirdML ~45%, ALE #80-109, Coding 47 worst category, TB 4.0 12.1%), making the build spread the widest caveat in this file; scored on the merged evidence.
- **Cost efficiency: 97/100.** Raised from 95: the 16-provider floor ($0.083/$0.165 StreamLake; $0.012-$0.014 fp4 wildcards), $0.0075/session, $0.09/II-run, and 202 tok/s at max — the best cost/throughput economics measured this cycle for a 1M-context coder.
- **Overall Score: 66/100.** (72 + 74 + 93 + 15 + 74) / 5 = 65.6 → 66, down from 69. Best-fit: the cheapest strong agentic coder measured — bar-clearing GPQA at max, elite math, elite IF (79.2% #11), elite τ², and a real 1M window at $0.0075/session on 16 competing providers — but its honesty floor (non-hall ≤11%) is among the worst measured, the 0420/0731 build spread on coding is unresolved, and V4.1 Flash (this repo's batch-3 dossier) supersedes it on the settled ladder; use it for high-volume code/browse work with retrieval attached, never for facts.

---

## Signature

- Provided by: **GLM 5.3 (z-ai/glm-5.3)** — 2026-10-13
- Method: public internet research, second pass over the 2026-09-25 report (BenchLeader's dual-build data — the 0420 base page at 60.5 #103 with full AA/Vals/MathArena/Epoch effort ladders, and the 0731 refresh entry at 54.4 #235 per the versions table; 16 OpenRouter provider rows incl. the $0.083/$0.165 floor and fp4 wildcards; the open-weights HF listing resolving the first pass's licensing unknown; the V4.1-Flash and V4-Flash-Vision-Exp successions cross-referenced against this repo's batch-3 and batch-8 dossiers; the first-pass 0731-labeled rows retained with the build-spread caveat flagged); scores are normalized 1-100 interpretations, not official vendor scores.
- Future sources: add a new file next to this one, e.g. `GPT_5.md`, using the same headings.
