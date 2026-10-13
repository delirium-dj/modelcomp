# GLM 5.2 — findings by GLM 5.3

- Source: Z.AI (`glm-5.2`)
- Date: 2026-10-13 (UTC) — second-pass re-research of the 2026-09-25 report
- Overview and scoring methodology: `../../model-comparison.md`
- Cross-model signed log: `../../model-findings.md`

## Model card

- **Name:** GLM 5.2
- **Short description:** Z.AI's open-weights flagship of the GLM-5 family (released **2026-06-13** — resolved), "built for the era of long-horizon tasks" with "truly usable 1M-token context… tested to handle project-scale engineering context" (docs.z.ai) and effort-level control balancing capability against speed/cost. Second pass replaces the BenchLM/Inkling mixed picture with the settled BenchLeader ladder (max **62.5 #75/760**, 9 effort settings, last measured 2026-10-08): **τ² 99.1% #1, SWE-bench Verified (Epoch) 78.7% #5, GPQA (Epoch) 91.9% #27, HLE 41.1% #75, FrontierMath 59.2% #37** — with the gaps filled (τ³ 34.6% #49, better than the Inkling table's 26.8%; DeepSWE 43.8% #54) and floors confirmed (SREBench 0.0%, HLAB 7.1% #22, TB 4.0 1.0%). Top use case: long-horizon agentic coding at flagship quality — now one post-train generation behind GLM 5.3 (same base).
- **Provider / access:** OpenCode Zen `opencode/glm-5.2` (OpenAI-compatible Chat Completions, $1.40/$4.40); Z.AI official API (docs.z.ai); open weights `zai-org/GLM-5.2` (MIT per lmstudio's listing; 753B total / ~40B active — with the 743/753 cross-source discrepancy flagged in the glm-5.3 and glm-5.2-coding folders).
- **Release / knowledge:** **2026-06-13** (BenchLeader; blog 2026-06-16); knowledge cutoff not stated.
- **IDs:** `opencode/glm-5.2` (no Free ID on Zen; paid tier).
- **Context window:** **1M tokens** (confirmed — "truly usable" engineering context per the vendor's own framing).
- **Modalities:** text in / text out (vision ships on the separate GLM-5V-Turbo line); reasoning with **9 effort settings measured — max is the best config and the recommended setting**; tool calls (MCP/agent-oriented); JSON mode not separately verified.
- **Pricing (as of 2026-10-13):** $1.40 in / $4.40 out per 1M (confirmed; cached read $0.26; blended $2.15/M); 86 tok/s at max, up to 160 tok/s at no-reasoning; open weights for self-host.
- **Architecture:** open weights, 753B/~40B-active MoE (lmstudio; the 743B variant figure is flagged); sparse-attention MoE; the shared base that GLM 5.3 post-trains on.

### Raw benchmarks found

> Second pass: the settled BenchLeader ladder (best = max **62.5 #75/760**, trend 44→66→67 stable, last measured 2026-10-08). Category scores (max): **Instruction following 72 (best)**, Reasoning 70, Composite 67, Human preference 67, Agents & tools 63, Long context 64, Coding 62, Maths 58, **Knowledge 54 (worst)**.

Agent / tool use:

- **τ²-Bench: 99.1% #1** — the elite row, confirmed settled; **TB Hard: 50.8% #22**; **MCP Atlas: 77.8% #15**; ITBench SRE 42.7% #14; **HiL-Bench: 43.7% #4**; APEX-Agents (AA) 33.7% #8; APEX (Mercor) 45.2% #34; **Vending-Bench 2: 8313.8 #10**; PostTrainBench 31.7% #7; Skills 45.1% #26; Finance 49.7% #38
- **τ³-Banking: 34.6% #49** — gap filled; better than the Inkling table's 26.8% but still mid-weak; **GDPval-AA: 43.6% #79** (consistent with the first pass's 1418-Elo/42.9%); **HLAB: 7.1% #22**; Legal Research 31.3% #36; **SREBench: 0.0% #15; GBAEval: 0.0% #21**; LMArena Agent 3.2 #19
- Terminal: TB 2.1 **77.9% #54 (AA) / 67.8% #32 (Vals)** (the vendor's 81-82.7% claims not fully reproduced — spread retained); TB 3.0 4.6% and **TB 4.0: 1.0% #121** — the newest suites are walls; Toolathlon 48.2% (BenchLM, retained; the Inkling 59.9% variant retained); Claw-Eval: still unmeasured

Reasoning / knowledge:

- GPQA Diamond: **Epoch 91.9% #27 (max)** — clears the bar / AA 89.5% #73 — just under (harness split, both retained); **HLE (AA): 41.1% #75 (max)** — clears the 40% reference; the with-tools 54.7% vendor row retained
- **CritPt: 20.9% #54** (mid-weak); SimpleBench 58.8% #32; ARC-AGI-1 77% #113; ARC-AGI-2 22.8% #125; **DTBench 93.6% #49**; Kagi 60-62.6% #44-50; LMCA 45.8% #70
- Math: **FrontierMath T1-3 59.2% #37 / T4 29.3% #36; AIME 2026: 90.0% #27; HMMT Feb 2026: 92.4% #13; LiveBench Math: 89.8% #37**; OTIS 86.4% #88; AIME26 99.2% / HMMT Nov 94.4% (vendor-era rows retained); ProofBench 35.0% #39; Apex 19.8% #15
- Honesty good: Omniscience index 4.4 #108 (max); accuracy 24.3% with hallucination ~26.3% (≈73.7% non-hallucination — honest, knows little); SimpleQA 34.2% #51
- **AA II 33.7** (retained); MMLU-Pro 86.7% #38; LegalBench 84.1% #38; **CorpFin 66.1% #21**; LiveBench Data Analysis 73.7% #41; Global-MMLU-Lite 89.2% (retained); **IFBench 73.3%** — IF-72 is its best category

Coding:

- **SWE-bench Verified: Epoch 78.7% #5 (elite) / Vals 82.8% #18** (the vendor's 80.0% self-report sits inside the spread); **LMArena WebDev: 1603 #26** (strong); LMArena Coding 1512 #50; WeirdML 70.1% #33; **Vibe Code v1.1: 64.0% #40** (gap filled — good); LiveBench Coding 79.7% #23; SWE-bench Pro 62.1% (confirmed); **SWE Atlas: Codebase QnA 48.1% #5 / Refactoring 42.4% #9 / Test Writing 41.5% #10**
- Caps: SciCode 50.5-51.2% #94-95 (below the 55% reference); Code Migration 37.9% #28; **ProgramBench 0.5% #13**; **DeepSWE v1.1: 43.8% #54** — gap filled, weak; ALE 1010-1047 #47-49; FrontierCode 24.5% #33; TB 4.0 1.0%; Design Arena 1302/1275 (retained)

Long context:

- 1M window confirmed with the vendor's "truly usable under engineering pressure" positioning; **AA-LCR 78.3%** — good; no MRCR/RULER table (unchanged).

Safety:

- FORTRESS Adversarial 71.3% / Benign 90.0%, StrongREJECT 98.5% (Inkling vendor table, retained).

Multimodal:

- Text in/out only (GLM-5 text line; vision lives on GLM-5V-Turbo).

### Normalized scores (1–100)

- **Tool use: 76/100.** Lowered from 84: the settled ladder holds the elite τ² 99.1% #1, good TB Hard #22 / MCP Atlas #15 / HiL #4 / Vending #10 — against τ³ 34.6% #49, GDPval 43.6% #79, HLAB 7.1% #22, SREBench 0.0%, GBAEval 0.0%, TB 4.0 1.0%, and LMArena Agent 3.2 #19.
- **Reasoning: 82/100.** Lowered from 87: GPQA clears on Epoch (91.9% #27) but sits at 89.5% on AA (harness split), HLE 41.1% clears at max, CritPt 20.9% and ARC-AGI-2 22.8% remain — offset by elite competition math (AIME 2026 90% #27, HMMT 92.4% #13, FrontierMath 59.2% #37), DTBench 93.6% #49, and good honesty.
- **Context window: 93/100.** Lowered from 96: 1M confirmed with strong vendor positioning and good AA-LCR 78.3% — but no MRCR/RULER verification.
- **Multimodal: 15/100.** Held: text-only by design.
- **Coding: 82/100.** Raised from 80: the settled SWE-V cluster (Epoch 78.7% #5 / Vals 82.8% #18) is elite, WebDev 1603 #26, WeirdML 70.1% #33, Vibe 64.0% #40 (gap filled), SWE-Pro 62.1%, and SWE-Atlas-QnA #5 — capped by SciCode below the reference, ProgramBench 0.5%, DeepSWE 43.8% #54 (the weak gap-fill), and TB 4.0 1.0%.
- **Cost efficiency: 88/100.** Held: $1.40/$4.40 at the ~88 anchor with $0.26 cached reads and MIT open weights; 86 tok/s at max (160 at no-reasoning) is mid-band.
- **Overall Score: 70/100.** (76 + 82 + 93 + 15 + 82) / 5 = 69.6 → 70, down from 72. Best-fit: the GLM-5 family's long-horizon workhorse — elite τ²/SWE-V-per-Epoch credentials, near-bar GPQA/HLE at max, a genuinely engineering-grade 1M window, and good honesty at $1.40/$4.40 with MIT self-host — but the 2026-suite floors (TB 4.0, SREBench, HLAB) are real, text-only I/O is the standing drag, and GLM 5.3 (same base, post-trained) now measures strictly better on the settled ladder; use 5.2 where the snapshot is pinned or the earlier training cutoff matters.

---

## Signature

- Provided by: **GLM 5.3 (z-ai/glm-5.3)** — 2026-10-13
- Method: public internet research, second pass over the 2026-09-25 report (the settled BenchLeader base-model ladder as of 2026-10-08 — the page fetched during this cycle's glm-5.2-coding sibling pass — aggregating Epoch AI Benchmarking Hub incl. SWE-bench Verified, Artificial Analysis, Vals AI, Scale AI SEAL incl. MCP Atlas/HiL/SWE-Atlas, LiveBench, LMArena, MathArena; the docs.z.ai and z.ai blog positioning quotes plus lmstudio's architecture listing from the same sibling pass; the first-pass BenchLM/Inkling vendor-table rows retained where not contradicted, with the τ³ 26.8%-vs-34.6% and TB 81%-vs-77.9% gaps flagged). Researched independently despite the shared vendor family — every number is third-party or officially published, not self-assessment.
- Future sources: add a new file next to this one, e.g. `GPT_5.md`, using the same headings.
