# GLM-5.3-Flash — findings by Mimo v2.6 Flash

- Source: Zhipu AI (Z.ai)/`glm-5.3-flash`
- Date: 2026-09-22 (UTC)
- Overview and scoring methodology: `../../model-comparison.md`
- Cross-model signed log: `../../model-findings.md`

## Model card

- **Name:** GLM-5.3-Flash
- **Short description:** First natively multimodal GLM-5-series model (revealed 2026-08-26 after a week of anonymous "Ox Alpha" stealth testing): **320B total / 18B active MoE**, hybrid sparse+linear attention, **MIT open weights**, 1M checkpoint context. Beats larger GLM-5.2 across the board at ~1/10 the cost; approaches Opus 4.8 on coding/agentic (TB2.1 84.3 vs 85.0 vendor tables); AA Intelligence Index 57 at ~$0.09/task.
- **Provider / access:** Z.ai API `glm-5.3-flash` / `z-ai/glm-5.3-flash`; OpenRouter, Fireworks, Together, Qubrid, etc.; Hugging Face `zai-org/GLM-5.3-Flash` (MIT); SGLang/vLLM/TokenSpeed. GLM Coding Plan includes Flash (3× usable quota vs GLM-5.3). Free stealth period as Ox Alpha; paid API + open self-host now.
- **Release / knowledge:** stealth as Ox Alpha 2026-08-20; identified/released **2026-08-26** (HF date refs 2026-08-25); knowledge cutoff not isolated.
- **IDs:** `glm-5.3-flash` / `zai-org/GLM-5.3-Flash` / `z-ai/glm-5.3-flash`.
- **Context window:** checkpoint **1,048,576** (OpenRouter later lists **1.31M**); **AA lists 400K based on served deployments**; Z.ai footnotes DeepSWE @400K, NL2Repo @1M — treat 1M as checkpoint claim, 400K as practical served floor to verify.
- **Max output:** up to 128K.
- **Modalities:** **text + image + video + file in**; text out; thinking always on (cannot disable on direct API); tool calls yes; JSON mode yes.
- **Pricing (as of 2026-09-22):** Z.ai list **$0.15 in / $0.50 out per 1M**, cached $0.03; 50% launch promo ($0.075/$0.25) ran through 2026-09-09 (may still appear on some routes); OpenRouter observed $0.075–0.15 / $0.25–0.50 (volatile); Qubrid $0.0863/$0.29; AA blended ~$0.10/1M, **$0.09 per Intelligence-Index task**. MIT weights = free self-host (hardware only).
- **Architecture:** 320B MoE, 45 layers, 288 routed + 1 shared experts (top-8); 34 KDA linear + 11 DSA sparse layers (3:1); mHC; IndexPool; FP8 native; 30T multimodal pretrain; ~3× less attention compute / 4.4× smaller KV vs GLM-5.3.

### Raw benchmarks found

> Measured numbers with (source, rank, harness). Missing rows = no verified public score found. Z.ai rows are vendor-run (Claude Code / mini-swe-agent where noted); AA/LiveBench rows independent.

Agent / tool use:

- Terminal-Bench 2.1: **84.3%** (Z.ai/HF; near Opus 4.8 85.0, behind Terra 87.4 / GLM-5.3 88.2; AA independent also **84.27%**)
- Terminal-Bench 4.0: **32.8%** (AA independent)
- Toolathlon Verified: **78.4%** (Z.ai; > Opus 4.8 76.2, Terra 74.9)
- AutomationBench v1.0.6: **48.8%** (Z.ai; > Opus 4.8 41.0, margin over any rival in set)
- GDPval-AA v2: **1773 Elo** (Z.ai; leads their table > Opus 4.8 1582, Terra 1571, Gemini 3.7 Flash 1527)
- Agents' Last Exam: **26.3%** (Z.ai; trails Opus 4.8 27.3, Terra 27.0, Gemini 3.7 Flash 28.0)
- OSWorld 2.0: **59.1%** (Z.ai; > Opus 4.8 54.8 — vision-agent row)
- Vision2Web: **77.8%** (Z.ai)
- MCP Atlas / Tau3 / Claw-Eval / Finance Agent: no verified public score found

Reasoning / knowledge:

- HLE with tools: **55.3%** (Z.ai; vs Opus 4.8 57.9, GLM-5.2 54.7)
- GPQA Diamond: **91.2%** (AA independent)
- Humanity's Last Exam (AA independent): **39.9%** no-tools / **39.85%** (AI Atlas AA row)
- Artificial Analysis Intelligence Index: **57** (Z.ai + AA via Qubrid/CheapestInference at max; cost $0.09/task) — **note AI Atlas shows AA v4.3 row 41.9** (version skew; cite both)
- LiveBench Reasoning: **77.6%**; Mathematics **81.2%**; Global **71.6%** (LiveBench 2026-06-25 via AI Atlas)
- ARC-AGI / FrontierMath / CritPt: no verified public score found

Coding:

- DeepSWE v1.1: **63.4%** (Z.ai, mini-swe-agent @400K; vs GLM-5.2 46.2, Opus 4.8 58.0, Terra 69.6)
- Terminal-Bench 2.1: **84.3%** (see agent row)
- NL2Repo: **56.3%** (Z.ai; trails Opus 4.8 69.7)
- LiveBench Coding: **79.0%**; Agentic Coding **56.8%** (LiveBench)
- SciCode: **51.6%** (AA independent)
- Code Bench v1.0 (Z.ai internal): **29.0 vs Opus 4.8 29.5** max effort (vendor — hold loosely)
- SWE-bench Verified / LiveCodeBench post-train / SWE-Pro: no verified public score found for Flash

Long context:

- Checkpoint 1M (OpenRouter 1.31M); hybrid linear+sparse + IndexPool designed for cheap 1M serving; DeepSWE eval @400K, NL2Repo @1M (Z.ai footnotes)
- MRCR / GraphWalks / ∞Bench: no verified public score found

Multimodal:

- **Native text/image/video/file in** (first multimodal GLM-5)
- CharXiv Reasoning w/ Tools: **89.4%** (Z.ai; ~Opus 4.8 89.9)
- Chartography w/ Tools: **78.0%** (Z.ai; > Opus 4.8 75.0)
- BabyVision: **53.4%** (Z.ai; trails Gemini 3.7 Flash 70.9, Terra 61.6 — natural-image gap)
- MVbench: **77.8%**; MMVU: **80.5%** (Z.ai; video — note non-native-video models use 1fps frame extraction)
- OfficeQA Pro: **62.4%** (Z.ai; > Opus 4.8 48.9)

### Normalized scores (1–100)

- **Tool use: 88/100.** TB2.1 84.3 (independent AA agrees), Toolathlon 78.4, GDPval-AA 1773 (table-leading in Z.ai set), AutomationBench 48.8; capped by OSWorld 59.1 mid, ALE 26.3 slightly behind closed frontier, missing MCP/Tau3/Claw.
- **Reasoning: 86/100.** HLE-tools 55.3, GPQA 91.2, AA Index 57 (near GLM-5.3 60, ~3 behind top open); capped by HLE no-tools ~39.9 and AA version spread (41.9 on v4.3 snapshot).
- **Context window: 82/100.** Checkpoint claims 1M/1.31M but **served deployments list 400K (AA)** and no MRCR row — score for practical usable context with serving caveat → 82 (not 90+).
- **Multimodal: 92/100.** Native text+image+video+file in; CharXiv 89.4 ≈ Opus, Chartography 78 leads set, OfficeQA 62.4, MMVU 80.5; capped by BabyVision 53.4 natural-image gap and no audio/non-text out → 92 (video lifts above pure vision 65–90 band).
- **Coding: 88/100.** TB2.1 84.3 near-Opus, DeepSWE 63.4 > Opus, LiveBench Coding 79; capped by NL2Repo 56.3 behind Opus 69.7, TB4.0 32.8, missing SWE-V/Pro rows.
- **Cost efficiency: 99/100.** $0.15/$0.50 list (promo/hosting to ~$0.075–0.10 in), AA $0.09/task, MIT self-host free, 18B active — essentially best-in-class $/intelligence on the AA Pareto frontier.
- **Overall Score: 87/100.** Mean of five quality dims (88+86+82+92+88)/5 = 87.2 → 87. Best-fit: MIT multimodal agent fleets and vision-heavy workloads at near-zero cost; verify served context length (400K vs 1M) before long-doc pipelines; hardest single-pass science still → Fable/Opus/Sol.

---

## Signature

- Provided by: **Mimo v2.6 Flash (xiaomi/mimo-v2.6-flash)** — 2026-09-22
- Method: public internet research (Z.ai GLM-5.3-Flash blog, Benchgen, Qubrid, CheapestInference, AI Atlas, Lambda model card, AA via OpenRouter); scores are normalized 1–100 interpretations, not official vendor scores; Z.ai benchmark rows vendor-run unless marked AA/LiveBench.
- Future sources: add a new file next to this one, e.g. `GPT_5.md`, using the same headings.
