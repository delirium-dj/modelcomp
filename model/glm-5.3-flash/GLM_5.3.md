# GLM 5.3 Flash — findings by GLM 5.3

- Source: Z.ai (`glm-5.3-flash`)
- Date: 2026-10-12 (UTC) — second-pass re-research of the 2026-09-24 report
- Overview and scoring methodology: `../../model-comparison.md`
- Cross-model signed log: `../../model-findings.md`

## Model card

- **Name:** GLM 5.3 Flash
- **Short description:** Z.ai's open-weights Flash tier of the GLM-5.3 generation — the first natively multimodal model in the GLM-5 series (text, image, video, file input), positioned as "outperforms GLM-5.2 at one-tenth the price, approaching Claude Opus 4.8 on coding and agentic benchmarks". Second-pass identity fact: it ran **anonymously as "Ox Alpha"** on OpenCode/OpenRouter before the 2026-08-26 reveal (stealth-launch playbook: free until Aug 27, then shipped as GLM-5.3-Flash with MIT weights; the dataset's separate `ox_alpha` entry tracks that anonymous phase). Top use case: budget agentic work with near-flagship tool use.
- **Provider / access:** OpenCode Zen `https://opencode.ai/zen/v1/chat/completions` (openai-compatible); Hugging Face `zai-org/GLM-5.3-Flash` (plus RedHatAI, Dell Enterprise Hub, NVIDIA NIM mirrors); a 30+-provider OpenRouter ecosystem with prices down to $0.04/$0.23 (StreamLake, Relace, Sail Research) and up to 270 tok/s (CoreWeave nvfp4). Composite trackers: BenchLeader **62.2, #82 of 760** (trend 49→69 still rising; last measured 9 Oct 2026), BenchLM **57.36, #55 of 889** (39 rows), Epoch Capabilities Index 151.9 #46, AA II 41.8 #51.
- **Release / knowledge:** 2026-08-26 (GLM-5.3 generation; the previous report's "2026-08-18 with the flagship" is corrected to the Flash reveal date); knowledge cutoff not publicly disclosed.
- **IDs:** `opencode/glm-5.3-flash` (Zen; no Free ID — paid but very cheap); `zai-org/GLM-5.3-Flash` (HF); formerly `ox-alpha` (stealth phase).
- **Context window:** 1M tokens total (1,048,576) with **131,072 max output** (docs.z.ai, llmreference — second-pass spec).
- **Modalities:** **text, image, video, and file input**; text out (docs.z.ai VLM guide, HF/NVIDIA model cards — upgrades the previous "text/image in" listing); reasoning yes; tool calls; JSON mode; prompt caching; "Native Multimodal Visual Coding" per the official docs. No audio input.
- **Pricing (as of 2026-10-12):** Zen $0.15 in / $0.50 out per 1M (cached read $0.03); BenchLeader blended **$0.238/M**, chat reply ~$0.0002, $0.253 per Intelligence-Index run, 53 tok/s (first answer ~41 s; third-party endpoints up to 270 tok/s). Launch promos ($0.075/$0.25 through Sept 9; free stealth tier through Aug 27) have ended.
- **Architecture:** open weights, MIT license; **320B total / 18B active MoE** (newly trained base — second-pass fact resolving the previous "parameters not published"); first open-source frontier model combining **hybrid sparse and linear attention**, cutting attention compute 3.01x and KV cache 4.44x versus GLM-5.3; 328 GB native-FP8 checkpoint (~194 GB at Q4_K_M, multi-GPU required for local serving).

### Raw benchmarks found

Agent / tool use:

- Terminal-Bench 2.1: **84.3%** (Z.AI launch post — matching AA's own run 84.3% #30) / Vals **62.9% #38** (harness spread, both retained); Terminal-Bench 4.0: **32.8% #38** (AA); Terminal-Bench (public): 35.8% #52; Terminal-Bench Science: **2.9% #23** (Vals — weak)
- GDPval-AA: **1773 Elo** raw / **57.2% #17 normalized** (AA — clears toward the frontier; the second-best normalized GDPval in this batch's open-weights class after none)
- Tau3-Banking: **47.2% #8** (AA — top-10); ITBench SRE: **51.2% #4** (AA); Finance Agent v2: **57.9% #12** (Vals); Tax Agent 62.0% #28; Legal Research 45.2% #14; CyberBench 67.9% #23; APEX-Agents 52.8% #23; SkillsBench 40.2% #29
- Toolathlon-Verified **78.4%**; AutomationBench **48.8%** plain / AA harness **60.4% #20**; Agents' Last Exam **26.3%**; HLE w/ tools **55.3%** (Z.AI launch post); AA Briefcase **1454 #31**; EnterpriseOps-Gym 33.2% #14; GDP.pdf 15.4% #38; Harvey LAB **0.8% #16**; Harvey HLAB 6.7% #23; LMArena Agent -1 #34; LiveBench Agentic Coding 56.8% #24
- Claw-Eval / MCP-Atlas: no verified public score found (unchanged)

Reasoning / knowledge:

- GPQA Diamond: **91.2% #49** (AA) / **90.2% #43** (Epoch, max) / **86.4% #41** (Vals — harness spread retained)
- HLE (AA): **39.9% #81** — found this pass; a hair under the 40% frontier reference
- CritPt: **15.4% #83** (AA — found this pass; weak)
- ARC-AGI-2: ladder 27.9% (low) → **65.8% #66** (max); ARC-AGI-1: 47.0% → 91.0% #61 (max)
- FrontierMath: Tiers 1-3 **55.8% #42**, Tier 4 **17.1% #51** (Epoch, max); OTIS Mock AIME 93.9% #52; ProofBench 21.0% #47; LiveBench Mathematics 81.2% #58; LMArena Maths **1502 #13**; BTF-3 **14.9% #1**
- AA Intelligence Index v4.3.2: **41.8 #51** — CONFLICT: oxalpha.run's own benchmarks page claims "Artificial Analysis Index of 57"; AA's leaderboards and both aggregators read 41.8; the 57 is retained as a flagged third-party claim, likely mislabeled or an early value
- LiveBench: Reasoning 77.6% #56, global 71.6% #52, Data Analysis 76.4% #33, Language 77.3% #41, IF 52.8% #66; LMArena: Hard Prompts 1501 #30, Text 1475 #37, Creative 1435 #64
- MMLU-Pro 86.1% #47; LegalBench 83.9% #43; TaxEval 75.6% #16; EMB 55.9% #41; MedScribe **88.9% #7**
- Omniscience: index **7.5 #94**, accuracy **27.5% #193** (very weak knowledge breadth), non-hallucination **72.4% #31** (good honesty — the AA pattern of cheap models refusing rather than confabulating)
- AA-LCR **80.0% #73**; MLCR-AA **51.1% #10** (good rank); AA Openness Index 44.4 #27

Coding:

- SWE-bench Verified (Vals): **92.0% — #10 of all measured** — elite for a Flash tier
- **DeepSWE controversy (resolved this pass):** the stealth-Ox-Alpha period circulated a viral **80%** DeepSWE figure; OxAlpha's own editorial correction (2026-08-23) and Z.ai's launch number both settle at **63.4% on full DeepSWE v1.1** (#30 Epoch) — the 80% was a subset artifact and is not used
- LiveCodeBench (Vals): 80.5% #66; LiveBench Coding **79.0% #25**; IOI 52.5% #20; SciCode **51.6% #82-87** (found this pass — below the 55% reference, the soft spot); AA Coding Index unpublished for this ID
- FrontierSWE v2 18.1% #15; Vibe Code Bench v1.1 **30.8% #62** (weak); Code Migration 20.5% #43; CursorBench ladder 26.9%→36.8% #34; FrontierCode 31.8% #27; ALE-Bench 303.6 #110; Surface Evolver 52.5% #17; Bug Hunt Bench 17.7 fixes; NL2Repo 56.3%; OpenHarmony Bench 57.3% (vendor)
- LMArena Coding 1525 #27; LMArena WebDev **1609 #25**

Long context:

- 1M window; AA-LCR 80.0% #73 and MLCR 51.1% #10 — the hybrid sparse+linear attention architecture claims 3.01x/4.44x compute/KV savings at long context; no MRCR/RULER retrieval number published.

Multimodal (grounding):

- **Video understanding enters the record:** MMVU **80.5%** (Z.AI launch post) plus the verified text+image+video+file input set; CharXiv **89.4%**; MMMU-Pro (Vals) **86.0% #23**; Chartography (tools) 78.0%; OfficeQA Pro 62.4%; LMArena Vision 1296 #23; BabyVision 53.4% (mid); Design Arena Website **1278** (revised from 1282)

### Normalized scores (1–100)

- **Tool use: 87/100.** Held: GDPval 1773 raw / 57.2% #17 normalized, τ³-Banking 47.2% #8, ITBench 51.2% #4, Finance Agent 57.9% #12, TB2.1 84.3% (vendor = AA's own run), Toolathlon 78.4% keep it at frontier-adjacent for the price class; Harvey LAB 0.8%, HLAB 6.7%, TB Science 2.9%, GDP.pdf 15.4%, EnterpriseOps 33.2%, and the Vals TB2.1 harness spread (62.9%) cap it below the 90s.
- **Reasoning: 82/100.** Held: the gaps the 2026-09-24 report flagged are now filled and they confirm the cap rather than lift it — HLE 39.9% sits just under the 40% reference, CritPt 15.4% #83 is weak, Omniscience accuracy 27.5% #193 is very poor (good honesty at 72.4% non-hallucination partly compensates). GPQA 91.2% #49, ARC-AGI-2 65.8% #66, MLCR 51.1% #10, LMArena Maths 1502 #13, and BTF-3 #1 keep it above the mid-field.
- **Context window: 95/100.** Held: 1M (1,048,576) with 131K output, plus the hybrid-attention efficiency claim; AA-LCR 80.0% #73 does not meet the ≥98%-at-512K+ bar.
- **Multimodal: 71/100.** Raised from 68: the 2026-09-24 report capped at "no audio/video verified" — the second pass verified **video and file input** across the official docs, HF/NVIDIA model cards, and multiple mirrors, with MMVU 80.5% (video understanding), CharXiv 89.4%, MMMU-Pro 86.0% #23, and LMArena Vision 1296 #23. No audio input, text-only output, and mid BabyVision 53.4% keep it below the Argon-tier video band (76).
- **Coding: 80/100.** Held: SWE-bench V 92.0% #10 remains elite; the newly found SciCode 51.6% (below the 55% reference), Vibe Code 30.8% #62, FrontierSWE 18.1%, and the resolved DeepSWE 63.4% (well under the 74% reference) offset IOI #20, LiveBench Coding #25, and WebDev #25.
- **Cost efficiency: 96/100.** Held: $0.15/$0.50 with $0.0002 chat replies and $0.253/II runs, now across a 30+-provider ecosystem with floor prices to $0.04/$0.23 — the cheapest capability-per-dollar profile in this dataset.
- **Overall Score: 83/100.** (87 + 82 + 95 + 71 + 80) / 5 = 83.0 → 83, up from 82.4 via the Multimodal correction. Best-fit: the value king of agentic work — frontier-tier GDPval, elite SWE-bench, and verified video/document input at Flash pricing; route around its weak knowledge breadth (Omniscience accuracy #193) with retrieval grounding.

---

## Signature

- Provided by: **GLM 5.3 (z-ai/glm-5.3)** — 2026-10-12
- Method: public internet research, second pass over the 2026-09-24 report (Z.AI launch blog and docs.z.ai VLM/overview guides, Hugging Face model card plus RedHatAI/Dell/NVIDIA NIM mirrors, Artificial Analysis model benchmarks, BenchLeader data as of 2026-10-12, BenchLM updated 2026-10-10, Vals AI, LiveBench, LMArena, Epoch hub, ARC Prize, Scale SEAL, Mercor APEX, Harvey; three successful web searches; independent reviews: OxAlpha's own DeepSWE correction and benchmarks page, explainx, codersera ×2, qcode, marktechpost, llmreference, llmconfigurator — researched independently despite the shared vendor family); scores are normalized 1-100 interpretations, not official vendor scores.
- Future sources: add a new file next to this one, e.g. `GPT_5.md`, using the same headings.
