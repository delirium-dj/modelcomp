# DeepSeek V4.1 Flash — findings by GLM 5.3

- Source: DeepSeek (`deepseek-v4.1-flash`)
- Date: 2026-10-12 (UTC) — second-pass re-research of the 2026-09-24 report
- Overview and scoring methodology: `../../model-comparison.md`
- Cross-model signed log: `../../model-findings.md`

## Model card

- **Name:** DeepSeek V4.1 Flash
- **Short description:** DeepSeek's open-weights V4.1-generation Flash reasoning model (released 2026-09-10) — elite terminal/coding-agentic scores and competitive-programming strength at very low cost; per the vendor table it beats GPT-5.6 Sol and Claude Opus 5.0 on DeepSWE, AutomationBench, Agents' Last Exam and CyberGym. Top use case: budget high-effort coding agents.
- **Provider / access:** OpenCode Zen `https://opencode.ai/zen/v1/chat/completions` (openai-compatible); Hugging Face `deepseek-ai/DeepSeek-V4.1-Flash` for self-hosting; **33+ providers on OpenRouter** with floor prices to $0.034-0.05/$0.60 (Open Inference, Relace, Morph) and throughputs to 262 tok/s (Baseten fp8). Composite trackers: BenchLeader **61.8, #87 of 760** at max effort (trend 45→65 rising steeply — still settling; last measured 9 Oct 2026), BenchLM **67.9 — the #1 DeepSeek model** on its live table, Epoch Capabilities Index 154.9 #31, AA II 39.5 #64, Vals Index 51.3 #23.
- **Release / knowledge:** 2026-09-10 (second-pass fact, correcting the vague "after V4 Flash 0731"); knowledge cutoff not publicly disclosed.
- **IDs:** `opencode/deepseek-v4.1-flash` (Zen; no Free ID — paid but very cheap); `deepseek-ai/DeepSeek-V4.1-Flash` (HF).
- **Context window:** 1M tokens total (BenchLM; all 33 providers serve 1.0M).
- **Modalities:** text/image in; text out; reasoning yes (none→max; max is where the scores live); tool calls; JSON mode.
- **Pricing (as of 2026-10-12):** Zen $0.30 in / $1.20 out per 1M (cached read $0.006); BenchLeader blended $0.525/M, **217 tok/s (fastest quarter)**, ~10 s first answers, $0.265 per Intelligence-Index run, chat reply ~$0.0005, agentic coding session ~$0.023.
- **Architecture:** open weights; **552B-parameter MoE** (flowtivity/launch coverage — second-pass fact resolving "parameter count not published"); effort ladder: no-reasoning 48.2 #418, high 53.2 #280, max 61.8 #87.

### Raw benchmarks found

Agent / tool use:

- Terminal-Bench 2.1: **90.6%** (vendor, elite) / **74.5% #18** (Vals, high); Terminal-Bench 3.0: 30%; Terminal-Bench 4.0: **26.8% #45** (AA, max) / 19.7% #19 (Vals); Terminal-Bench Science: **0.0% #29** (Vals — total miss)
- **LiveBench Agentic Coding: 77.3% #1** (max — the board's best); **SkillsBench: 69.8% #1** (Vals, high); CyberBench **73.7% #8** (high); ITBench SRE 46.9% #10
- GDPval-AA: **1600 Elo** vendor / **55.0% #30 normalized** (AA, max); AA-Briefcase 1422 #35; AutomationBench (AA) **68.9% #4** / plain 54.8%; Agents' Last Exam 31.8%; GDP.pdf 12.8% #41
- APEX-Agents 39.5% #40 (weak); Finance Agent 53.5% #28; Tax Agent 62.5% #25; Legal Research 41.4% #20; Harvey HLAB 6.7% #23; Harvey LAB 1.7% #13; SREBench **0.8% #13**; LMArena Agent 3.8 #16
- CyberGym **88.1%**; ExploitGym 15.3%; HLE w/ tools 63.9% (vendor)
- Claw-Eval / Tau3 / MCP-Atlas: no verified public score found (unchanged)

Reasoning / knowledge:

- GPQA Diamond: **89.8% #48** (Epoch, max) / 90.9% (BenchLM vendor-era row)
- HLE (AA): **39.3% #87** (max; vendor 36.8%) — just under the 40% bar
- CritPt: **14.3% #91** (AA, max — weak); ARC-AGI-2: ladder 1.3% (no-reasoning) → **72.9% #48** (max); ARC-AGI-1: 94.5% #35 (max)
- **AA-LCR: 84.0% #11** (max — elite rank); MLCR-AA 22.8% #16 (weak)
- FrontierMath: Tiers 1-3 **67.4% #29**, Tier 4 26.8% #39 (Epoch, max); OTIS Mock AIME 98.3% #21; ProofBench 54.0% #25; Apex (math) 65.6%; LiveBench Mathematics 93.3% #22; LMArena Maths 1493 #23
- LiveBench: Reasoning 86.7% #30, global **81.1% #8**, Data Analysis 79.3% #16, Language 81.2% #27, IF 70.0% #29; LMArena: Hard Prompts 1499 #34, Text 1475 #39, Longer Queries 1482 #38
- MysteryMechanism 21.2% #17; Mystery Game Puzzles 43.0% #13; LMCA 47.0% #66; DTBench 89.9% #73
- LegalBench 83.3% #53; BioMysteryBench 67.8% #13; EMB 57.2% #35; MedCode 41.2% #53; MedScribe 85.5% #25; Public Benefits 64.3% #19
- **Omniscience (confirmed and worse than flagged): at max effort the index is NEGATIVE (−5.3 #157), accuracy 46.4% #79, non-hallucination 3.5% — #525 of ~535, dead last on the board** (the 2026-09-24 report's "96.5% hallucination rate" is verified: ~96.5% of the model's answers on AA's knowledge eval contain confabulation at max effort; the no-reasoning config is better at 46.0% non-hallucination but still poor)
- AA Intelligence Index v4.3.2: **39.5 #64** (max; 24.7 #164 no-reasoning); AA Openness Index 44.4 #27

Coding:

- DeepSWE: **74.2%** (vendor — at the 74% frontier ref; vs V4 Flash's 54.4%); Codeforces: **3471 Elo** (elite); NL2Repo 65.4%
- Vibe Code Bench v1.1: **84.7% #14** (Vals, high); Code Migration **45.6% #14** (high); VCB 1-100: 16.4% #12; IOI 40.3% #29 (high)
- LiveBench Coding **80.0% #21**; LMArena Coding 1528 #26; **LMArena WebDev 1619 #22**; ALE-Bench 1092.3 #45; Surface Evolver 46.3% #20
- SciCode **51.9% #80-84** (below the 55% reference); ProgramBench 20.3%
- SWE-bench Verified / LiveCodeBench: no verified public score found (unchanged)

Long context:

- 1M window; AA-LCR 84.0% **#11** (max) is the strongest long-context reasoning rank in this batch; MLCR 22.8% #16 weak; no MRCR/RULER retrieval number published.

Multimodal (grounding):

- AA-MMMU-Pro **77.0% #81** (mid); LMArena Vision 1277 #39; SAGE 47.9% #29; BabyVision w/ Python 89.6%; ZeroBench w/ Python 49.0%; Chartography (tools) 78.9% — image input present but modest; no audio/video.

### Normalized scores (1–100)

- **Tool use: 85/100.** Held: the second pass added two **#1 finishes** (LiveBench Agentic Coding 77.3%, SkillsBench 69.8%) plus CyberBench #8, ITBench #10, AutomationBench #4, TB2.1 90.6% vendor / 74.5% #18 Vals, GDPval 55.0% #30, CyberGym 88.1% — offset by APEX #40, SREBench 0.8%, TB Science 0.0%, Harvey LAB 1.7%, HLAB 6.7%, GDP.pdf 12.8%. A specialist coding/terminal agent, not a general professional agent.
- **Reasoning: 78/100.** Held: GPQA 89.8% #48 and HLE 39.3% #87 straddle their bars, AA-LCR 84.0% #11 and the math cluster (OTIS 98.3%, LiveBench Math 93.3%, FrontierMath T1-3 67.4%) lift, while CritPt 14.3% #91 and the **dead-last knowledge honesty (non-hallucination 3.5%, negative Omniscience index at max)** cap it hard — never use this model for ungrounded factual recall.
- **Context window: 95/100.** Held: 1M total with the batch's best AA-LCR rank (#11); no ≥512K retrieval bar met for 100.
- **Multimodal: 68/100.** Held: text+image only; MMMU-Pro 77.0% #81 and Vision #39 are mid.
- **Coding: 80/100.** Held: DeepSWE 74.2% (frontier ref), Codeforces 3471, TB2.1 90.6%, Vibe Code 84.7% #14, Code Migration #14, LiveBench Coding #21, WebDev #22 — capped by SciCode below the reference, IOI #29, ALE #45, and still no SWE-bench Verified/LiveCodeBench rows.
- **Cost efficiency: 94/100.** Held: $0.30/$1.20 at 217 tok/s across a 33-provider ecosystem with floor prices below $0.05 input — open-weights value at its best; $0.265 per full Intelligence-Index run.
- **Overall Score: 81.2/100.** (85 + 78 + 95 + 68 + 80) / 5 = 81.2 — unchanged from 2026-09-24: the second pass confirmed both halves of the first-pass verdict with harder evidence (two #1 agentic finishes and an elite AA-LCR rank on one side; dead-last honesty and a negative Omniscience index on the other). Best-fit: the best value coding-agent engine on Zen — pair with retrieval grounding and never trust its unaided factual claims.

---

## Signature

- Provided by: **GLM 5.3 (z-ai/glm-5.3)** — 2026-10-12
- Method: public internet research, second pass over the 2026-09-24 report (DeepSeek launch materials via BenchLM and launch coverage, Artificial Analysis model page and leaderboards, BenchLeader data as of 2026-10-12 with the effort ladder, Vals AI, LiveBench, LMArena, Epoch hub, ARC Prize, Scale SEAL, Mercor APEX, Harvey; two successful web searches plus one blocked by a bot challenge, alongside the aggregator fetches; independent reviews: deepinfra, flowtivity, regolo, glbgpt, buildfastwithai, techpillow, BenchLM's best-of-DeepSeek table); scores are normalized 1-100 interpretations, not official vendor scores.
- Future sources: add a new file next to this one, e.g. `GPT_5.md`, using the same headings.
