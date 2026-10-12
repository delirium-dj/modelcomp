# Qwen3.8-27B — findings by GLM 5.3

- Source: Alibaba Qwen (`Qwen/Qwen3.8-27B`)
- Date: 2026-10-12 (UTC) — second-pass re-research of the 2026-09-25 report
- Overview and scoring methodology: `../../model-comparison.md`
- Cross-model signed log: `../../model-findings.md`

## Model card

- **Name:** Qwen3.8-27B
- **Short description:** Alibaba's most capable compact open-weights generation — a 27B dense vision-language model (~17 GB BF16) with flexible thinking control, image/video understanding, and strong long-horizon agentic coding. Second-pass trackers: BenchLeader **58.5, #139 of 760 at xhigh** (effort ladder none→xhigh measured); BenchLM **58.27, #54 of 218**; an independent **#1 open-weight spot on Image-to-WebDev** within two weeks of release (orcarouter). Designed as "one consumer-GPU Opus-class" — full 262K window fits a 24 GB card at 22.2 GB with MTP/KV flags (sudoingX).
- **Provider / access:** Hugging Face `Qwen/Qwen3.8-27B` + official FP8 artifact (Apache 2.0 — **plain Apache, unlike the 2.4T's custom Max license**); vLLM/SGLang/llama.cpp/Ollama recipes; LM Studio listing; **hosted serving now live** (resolves "Qwen Cloud tier not yet live"): Alibaba Cloud Model Studio `qwen3.8-27b`, OpenRouter — **21 providers**, floor $0.04/$1.35-2.50 (Tenstorrent/NEAR/Wafer/DekaLLM), Cerebras $0.99/$1.49 (claimed ~1,500 tok/s), Qubrid $0.58/$3.45; effective price now $0.14/$1.40.
- **Release / knowledge:** **2026-08-14** (two days after the 2.4T; resolves the vague "August 2026"); knowledge cutoff not stated.
- **IDs:** `Qwen/Qwen3.8-27B` (+`-FP8`); no OpenCode Zen Free ID found.
- **Context window:** 262,144 tokens native, extensible to 1M via YaRN (HF config, unchanged).
- **Modalities:** text, image, video in; text out; thinking on by default (disable per request; reasoning_effort xhigh/medium/low); tool calls yes; strong structured extraction (ExtractBench 87.5-94.7 official).
- **Pricing (as of 2026-10-12):** open weights (Apache 2.0 — free download, deploy, and commercial use); hosted from $0.04-0.15/1M in; BenchLeader blended $1.13/M, 46-53 tok/s, ~48 s first answers at xhigh, $1.01/II run.
- **Architecture:** 27B dense causal LM with vision encoder ("a surprise vision encoder" per local-serving coverage); 64 layers, hybrid Gated DeltaNet + Gated Attention; MTP-trained (MTP flag required for full 262K on 24 GB cards); BF16.

### Raw benchmarks found

> First-pass rows were official HF-card tables. Second pass adds independent AA/Epoch/Vals/LMArena rows with rank reveals (BenchLeader data as of 2026-10-12; xhigh effort unless noted).

Agent / tool use:

- **τ³-Banking: 48.0% #6** (AA, xhigh — gap filled; top-10; 47.4% #7 at medium); GDPval-AA: **46.0% #67** (AA, xhigh — gap filled; mid); AA-Briefcase 1397 #36; AutomationBench 48.2% #37; GDP.pdf 16.6% #37; **EnterpriseOps-Gym 44.2% #10**; Analyst Agent 18.8% #25
- Terminal-Bench 2.1: **73.0%** official / **79.8% #46** (AA, xhigh) / **58.4% #40** (Vals — 15-pt harness spread retained); Terminal-Bench Hard: no row found; **Terminal-Bench 4.0: 5.6% #93** (AA); Terminal-Bench Science 1.4% #27
- OSWorld-Verified **84.3** (official original board; best in its table) vs OSWorld-Verified 2.0: 2.8% #14-12 (protocol split noted in family data); AndroidWorld **81.9**; WebArena-Verified 64.8; ClawEval-MM Pass@3 57.4 / Avg 56.9; CoWorkBench **70.7**; JobBench 33.4; Agents' Last Exam 20.4/42.9; RecreationBench 47.1; Vision2Web 62.9 (official)
- **LiveBench Agentic Coding 61.4% #12** (not-stated config); CyberBench 67.8% #24; Tax Agent 60.0% #31; Finance Agent 48.5% #41; SkillsBench 38.1% #30; **Harvey HLAB 11.3% #9**; Legal Research 36.1% #34; APEX-Agents 47.5% #30; **LMArena Agent −2 #36** (negative)
- MCP-Atlas / Toolathon / SWE Atlas QnA / Claw-Eval: no verified public score found (unchanged)

Reasoning / knowledge:

- GPQA Diamond: **89.2%** official / **90.5% #59** (AA, xhigh) / **88.9% #31** (Vals) — clears the 90% bar at mid rank
- HLE: **30.8%** official / **33.9% #120** (AA, xhigh — under the 40% bar); ARC-AGI-2: **42.4% #106** (xhigh); ARC-AGI-1: 87.5% #82
- **CritPt: 5.4% #141** (AA, xhigh — found; very weak); **AA Intelligence Index: 33.7 #97** (AA, xhigh — found; weak). CONFLICT: several launch-era guides (qubrid, codersera) cite "52 on AA" — a pre-settling or mislabeled figure; the settled AA ladder reads 20.1 (none) → 33.7 (xhigh); both retained, 52 flagged
- **AA-LCR: 82.0% #43** (xhigh — good); MLCR: **21.7% #17** (weak); IFBench **79.5** official; LiveBench Reasoning 80.0% #52; LMArena Hard Prompts 1462 #89; LMCA 41.4% #85; DTBench 88.0% #80
- MMLU-Pro 84.3% #62; LegalBench 82.4% #68; TaxEval 70.8% #82; MedScribe 83.8% #38; MedCode 28.7% #92; EMB 59.7% #33; LiveBench Data Analysis 76.6% #30; LiveBench IF **72.7% #18**; LiveBench Mathematics 86.2% #51; ProofBench 16.0% #54
- **Omniscience: accuracy 15.6% #393** (near-bottom breadth) with **negative index at every effort (−8 to −36)**; non-hallucination 69.7% #41 (xhigh) / **81.9% #11** (no-reasoning) — abstains rather than confabulates, but knows very little (Minimax-M3-style profile)

Coding:

- **SWE-bench (Vals): 86.0% #15** (xhigh — gap filled; strong); SWE-bench Pro **61.7%** official (Claude Code harness; leads Opus 4.6 Max 53.4); LiveCodeBench: **90.3%** official / **84.0% #41** (Vals); **LMArena WebDev: 1593 #27**; LMArena Coding 1499 #79; LiveBench Coding 75.7% #49
- **SciCode: 46.6% #123-127** (xhigh — found; below the 55% reference); IOI 39.1% #31; Code Migration 14.2% #48; Vibe Code 64.8% #37; ProgramBench 0.0%; Surface Evolver 45.0% #21
- DeepSWE 1.1 **42.2%** official (vs 3.6-27B's 13.3 — a 3.2x generation jump, still well under the 74% reference); QwenSWEBench 79.0; NL2Repo 42.3; SWE-MM 38.6
- SWE-bench Verified: still no verified public score found (unchanged)

Long context:

- 262K native / 1M via YaRN; AA-LCR 82.0% #43 (xhigh — good); MLCR 21.7% #17; no MRCR/RULER score (unchanged).

Multimodal (VL):

- MathVision **90.0 w/o CI / 94.6 w/ CI**; CharXiv 83.7/90.2; OmniDocBench 1.5 91.1; RealWorldQA 85.9; BabyVision 65.7/85.6; ERQA 65.5 (official)
- New independent: MMMU-Pro (Vals) **83.9% #28** / (AA) 76.3% #87; LMArena Vision 1271 #42; **SAGE 52.4% #7**; MortgageTax 64.9% #44; **Image-to-WebDev: #1 open-weight** (independent, orcarouter-era third-party result)

### Normalized scores (1–100)

- **Tool use: 87/100.** Adjusted from 88: the filled gaps landed elite — τ³-Banking **#6**, HLAB #9, EnterpriseOps #10, LiveBench Agentic #12, OSWorld 84.3 official — but the Vals TB2.1 harness gap (58.4% #40 vs 73.0% official), TB 4.0 5.6% #93, LMArena Agent −2, Analyst 18.8%, and the mid GDPval #67 offset. A genuinely strong compact agent with two weak terminal rows.
- **Reasoning: 78/100.** Lowered from 84: the first pass capped at 84 pending AA data ("no AA Index/LCR/CritPt found") — those gaps are now filled and they are weak: AA II 33.7 #97 (the "52" claim flagged as pre-settling), CritPt 5.4% #141, HLE 33.9% #120, ARC-AGI-2 42.4% #106, MLCR 21.7%, Omniscience accuracy 15.6% with a negative index. GPQA 90.5% #59, AA-LCR 82.0% #43, and elite honesty (non-hallucination #11-41) keep it from falling further.
- **Context window: 74/100.** Held: 262K native (200K-500K tier); AA-LCR #43 is good, MLCR #17 weak; 1M still YaRN-only.
- **Multimodal: 88/100.** Held: image+video input with elite official VL rows (MathVision 94.6 w/CI, OmniDocBench 91.1) and solid independent quality (MMMU-Pro Vals #28, SAGE #7, Image-to-WebDev #1 open-weight); text-only output caps below 90.
- **Coding: 84/100.** Adjusted from 86: SWE-bench (Vals) 86.0% #15 fills the biggest gap strongly, with LCB 84.0% #41, WebDev 1593 #27, and SWE-bench Pro 61.7% (official, Opus-beating in-class) — but SciCode 46.6% #123-127 (below the 55% reference), IOI 39.1% #31, Code Migration 14.2% #48, ProgramBench 0%, TB 4.0 5.6%, and DeepSWE 42.2% cap it.
- **Cost efficiency: 92/100.** Raised from 88: hosted serving is now live and cheap — 21 providers with input floors at $0.04-0.15 (effective $0.14/$1.40), Apache-2.0 commercial-use freedom, and one-GPU local serving; the caps are the paid (not free) hosted tier and slow 46-53 tok/s medians.
- **Overall Score: 82.2/100.** (87 + 78 + 74 + 88 + 84) / 5 = 82.2, down from 84.0 via the Reasoning correction (the filled AA gaps read weak). Best-fit: the best open compact agent — a genuine consumer-GPU "Opus-class" VL coder with elite τ³/GDPval-adjacent professional-agent ranks at $0.14/$1.40 hosted or free self-hosted — pair it with a frontier model for knowledge-heavy work (15.6% Omniscience accuracy) and verify long-horizon terminal tasks before production.

---

## Signature

- Provided by: **GLM 5.3 (z-ai/glm-5.3)** — 2026-10-12
- Method: public internet research, second pass over the 2026-09-25 report (Qwen's official 3.8-27B HF model card and FP8 artifact, Alibaba Cloud Model Studio page, Artificial Analysis model benchmarks with rank reveals — filling the AA II/CritPt/GDPval/τ³/SWE-bench-Vals gaps, BenchLeader data as of 2026-10-12 with the effort ladder, BenchLM composite, Vals AI, LiveBench, LMArena, ARC Prize, Epoch hub, Mercor APEX, the orcarouter independent-#1 note; three successful web searches; reviews: yottalabs, intuitionlabs, kubesimplify, sudoingX GitHub MTP guide, zhihu/cnblogs/csdn launch coverage, aipricing.guru, deepinfra provider blog, spheron, qubrid, kingy, aireleasetracker, lmstudio, codersera); scores are normalized 1-100 interpretations, not official vendor scores.
- Future sources: add a new file next to this one, e.g. `GPT_5.md`, using the same headings.
