# GLM 5.2 Coding — findings by GLM 5.3

- Source: Z.ai (`glm-5.2-coding`)
- Date: 2026-10-13 (UTC) — second-pass re-research of the 2026-09-24 report
- Overview and scoring methodology: `../../model-comparison.md`
- Cross-model signed log: `../../model-findings.md`

## Model card

- **Name:** GLM 5.2 Coding
- **Short description:** The coding SKU of Z.ai's GLM-5.2 generation — the open-weights reasoning MoE line **whose own positioning IS long-horizon coding**: "GLM-5.2 is Z.ai's flagship open-weight model for long-horizon coding and agentic work… strongest on extended, engineering-grade coding tasks that span multiple files and many steps" (lmstudio/anyapi); "capability roughly positioned between Claude Opus 4.7 and Claude Opus 4.8 under similar token budgets" (z.ai blog, 2026-06-16). Second pass confirms the exact `GLM-5.2-Coding` SKU still has **no separate public measurement** (BenchLeader 404; both DDG queries null/thin — disclosed) — but the base model's settled ladder (BenchLeader max **62.5 #75/760**) is now far richer than the first pass and includes the vendor's own coding-forward framing, narrowing the proxy gap. Top use case: long-horizon coding agents on the GLM stack at 1M context.
- **Provider / access:** Hugging Face `zai-org/GLM-5.2` (open weights, MIT; the gated `zai-org/GLM-5.2-Coding` card remains unmeasured externally); **not on the current OpenCode Zen list** (Zen carries base `glm-5.2` at $1.40/$4.40); Z.AI API (docs.z.ai).
- **Release / knowledge:** GLM-5.2 generation released **2026-06-13** (BenchLeader; blog 2026-06-16); knowledge cutoff not publicly disclosed.
- **IDs:** `opencode/glm-5.2-coding` (no verified Zen listing); `zai-org/GLM-5.2-Coding` (HF, gated).
- **Context window:** **1M tokens** — "truly usable… tested to handle project-scale engineering context" (docs.z.ai; "the 1M context actually feels lossless under real engineering pressure" — aiunpacker).
- **Modalities:** text in; text out; reasoning with effort control (9 settings measured — **max is the best config**; GLM-5.2 "introduces effort level control… balance capability against speed and cost"); tool calls; JSON mode. Text-only (vision is the separate GLM-5V line).
- **Pricing (as of 2026-10-13):** not published for the Coding SKU; family pricing $1.40 in / $4.40 out per 1M (Zen base; blended $2.15/M); open weights (MIT) for self-host at $0.
- **Architecture:** open weights — **753B total / ~40B active MoE per lmstudio** (note: a 743B figure circulates for the GLM-5.3-shared base — the 743/753 discrepancy is flagged in the glm-5.3 folder too; both retained); MIT license; sparse-attention MoE; GLM 5.3 reuses this base with all its gains from post-training.

### Raw benchmarks found

> The exact `glm-5.2-coding` ID remains publicly unmeasured; rows below are the **settled GLM-5.2 base ladder** (BenchLeader, max effort unless noted; last measured 2026-10-08) — a tighter proxy than the first pass had, since the base's own training was coding-forward ("months specifically on long-horizon coding-agent scenarios" — aiunpacker). Category scores (max): **Instruction following 72 (best)**, Reasoning 70, Composite 67, Human preference 67, Agents & tools 63, Coding 62, Long context 64, Maths 58, Knowledge 54.

Agent / tool use (base, max):

- **τ²-Bench: 99.1% #1** — the elite row, confirmed settled; **TB Hard: 50.8% #22**; **MCP Atlas: 77.8% #15**; ITBench SRE 42.7% #14; **HiL-Bench: 43.7% #4**; APEX-Agents (AA) 33.7% #8; APEX (Mercor) 45.2% #34; **Vending-Bench 2: 8313.8 #10**; PostTrainBench 31.7% #7
- **τ³-Banking: 34.6% #49** (mid-weak); GDPval-AA 43.6% #79 (mid); **HLAB 7.1% #22**; Legal Research 31.3% #36; Skills 45.1% #26; Finance 49.7% #38; SREBench 0.0% #15; GBAEval 0.0% #21; LMArena Agent 3.2 #19
- Terminal: TB 2.1 **77.9% #54 (AA) / 67.8% #32 (Vals)**; **TB 4.0: 1.0% #121** — the newest suite is a wall; Toolathlon 48.2% (retained); Claw-Eval / τ³-dedicated: filled above or still unmeasured

Reasoning / knowledge (base, max):

- GPQA Diamond: Epoch **91.9% #27 (max)** — clears the bar / AA 89.5% #73 — just under (harness spread retained); **HLE (AA): 41.1% #75 (max)** — clears the 40% reference at max; CritPt 20.9% #54 (mid-weak)
- Math: **FrontierMath T1-3 59.2% #37 / T4 29.3% #36; AIME 2026: 90.0% #27; HMMT Feb 2026: 92.4% #13; LiveBench Math: 89.8% #37**; OTIS 86.4% #88; ProofBench 35.0% #39; Apex 19.8% #15; SimpleBench 58.8% #32; **DTBench 93.6% #49**; ARC-AGI-1 77% #113 / ARC-AGI-2 22.8% #125; Kagi 60-62.6% #44-50
- Honesty good: Omniscience index 4.4 #108 (max); accuracy 24.3% with hallucination ~26.3% (retained — honest, knows little); SimpleQA 34.2% #51
- AA II 33.7 (retained); MMLU-Pro 86.7% #38; LegalBench 84.1% #38; **CorpFin 66.1% #21**; TaxEval —; LiveBench Data Analysis 73.7% #41

Coding (base, max):

- **SWE-bench Verified: Epoch 78.7% #5 (elite) / Vals 82.8% #18**; **LMArena WebDev: 1603 #26** (strong); LMArena Coding 1512 #50; WeirdML 70.1% #33; **Vibe Code v1.1: 64.0% #40**; LiveBench Coding 79.7% #23 (not stated); SWE-bench Pro 62.1%; **SWE Atlas: Codebase QnA 48.1% #5 / Refactoring 42.4% #9 / Test Writing 41.5% #10**; NL2Repo 48.9% (retained)
- Caps: SciCode 50.5-51.2% #94-95 (below the 55% reference); Code Migration 37.9% #28; **ProgramBench 0.5% #13**; DeepSWE 43.8% #54; ALE 1010-1047 #47-49; FrontierCode 24.5% #33; **TB 4.0 1.0% #121**; TB 2.1 67.8% Vals vs the vendor's 81.0% claim (spread retained)

Long context:

- 1M window, vendor-positioned as lossless under engineering load; AA-LCR 78.3% (retained, good); no MRCR/RULER table (unchanged).

Multimodal:

- Text-only by design (GLM-5 text line; vision ships separately in GLM-5V-Turbo).

### Normalized scores (1–100)

- **Tool use: 74/100.** Lowered from 78: the settled ladder holds the elite τ² 99.1% #1, good TB Hard #22 / MCP Atlas #15 / HiL #4 / Vending #10 — against τ³ 34.6% #49, GDPval 43.6% #79, HLAB 7.1% #22, SREBench 0.0%, GBAEval 0.0%, and TB 4.0 1.0% #121; a coding tune typically preserves this profile.
- **Reasoning: 80/100.** Lowered from 84: GPQA clears on Epoch (91.9% #27) but not AA (89.5%), HLE 41.1% clears only at max, and CritPt 20.9%/ARC-AGI-2 22.8% remain — offset by elite competition math (AIME 2026 90% #27, HMMT 92.4% #13, FrontierMath 59.2% #37), DTBench 93.6% #49, and good honesty.
- **Context window: 93/100.** Lowered from 95: 1M confirmed with strong vendor positioning ("lossless under engineering pressure") and good AA-LCR 78.3% — but no MRCR/RULER verification.
- **Multimodal: 15/100.** Held: text-only by design.
- **Coding: 82/100.** Raised from 78: the settled base IS the coding-forward model — SWE-V Epoch 78.7% #5 (elite), Vals 82.8% #18, WebDev 1603 #26, WeirdML 70.1% #33, Vibe 64.0% #40, SWE-Pro 62.1%, and SWE-Atlas-QnA #5 — the first pass's "coding tune expected to lift these" assumption is largely moot because the base was already coding-trained; capped by SciCode below the reference, ProgramBench 0.5%, DeepSWE 43.8%, and TB 4.0 1.0%.
- **Cost efficiency: 88/100.** Held: $1.40/$4.40 family pricing (≈88 anchor) with MIT open weights softening the self-host path; the Coding SKU's own price remains unpublished.
- **Overall Score: 69/100.** (74 + 80 + 93 + 15 + 82) / 5 = 68.8 → 69, essentially unchanged from 70. Best-fit: the GLM stack's long-horizon coding agent — elite τ²/SWE-V-per-Epoch credentials and a genuinely engineering-grade 1M window at MIT-license self-host economics — but the family's 2026-suite weaknesses (TB 4.0, SREBench, HLAB) and GLM 5.3's strictly-better post-train (same base, higher measured everything) make 5.3 the default; use this SKU only where the 5.2 snapshot is pinned.

---

## Signature

- Provided by: **GLM 5.3 (z-ai/glm-5.3)** — 2026-10-13
- Method: public internet research, second pass over the 2026-09-24 report (the settled GLM-5.2 base ladder from BenchLeader as of 2026-10-08 aggregating Epoch AI Benchmarking Hub incl. SWE-bench Verified, Artificial Analysis, Vals AI, Scale AI SEAL incl. MCP Atlas/HiL/SWE-Atlas, LiveBench, LMArena, MathArena, Mercor APEX, Andon Labs; the exact Coding SKU confirmed unmeasured — BenchLeader 404 and two null/thin DDG queries, disclosed; DDG-lite searches surfacing the z.ai GLM-5.2 blog's effort-control and Opus-4.7-4.8 positioning, docs.z.ai's project-scale-engineering framing, lmstudio's 753B/40B-active/MIT architecture listing, anyapi's SWE-Pro 62.1/TB2.1 81.0 corroboration, and aiunpacker's long-horizon-training note; first-pass rows retained where not contradicted). Researched independently despite the shared vendor family — all numbers are third-party or officially published, not self-assessment.
- Future sources: add a new file next to this one, e.g. `GPT_5.md`, using the same headings.
