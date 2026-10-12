# Qwen3.8 Max — findings by GLM 5.3

- Source: Alibaba/Qwen (`qwen3.8-max`)
- Date: 2026-10-12 (UTC) — second-pass re-research of the 2026-09-24 report
- Overview and scoring methodology: `../../model-comparison.md`
- Cross-model signed log: `../../model-findings.md`

## Model card

- **Name:** Qwen3.8 Max (current snapshot `qwen3.8-max-0902`)
- **Short description:** Alibaba's commercial flagship of the Qwen3.8 generation (August 2026) — the first multimodal Max (text/image/video in), built on the open-weights Qwen3.8-2.4T-A95B base. Second-pass fact: the current serving snapshot is **Qwen3.8-Max-0902** (2026-09-02), a post-training upgrade with unchanged architecture and pricing focused on coding, collaborative agent work, and long-horizon multi-tool tasks; CodeArena's web-dev board puts 0902 **first at 1691** (ahead of Claude Opus 5's 1688 — preliminary). Top use case: frontier multimodal coding/cowork.
- **Provider / access:** Qwen Cloud / Aliyun Model Studio; OpenRouter `qwen/qwen3.8-max-0902`; Alibaba Cloud International (2 OpenRouter endpoints). Still not on the current OpenCode Zen list. Composite trackers: BenchLeader **64.2, #52 of 760** at max effort (trend 54→69 rising; last measured 9 Oct 2026); BenchLM **70.66, #16 of 889** (62 rows); Epoch Capabilities Index 156.4 #22; AA II 45.4 #33.
- **Release / knowledge:** Max released 2026-08-03 (previewed 2026-07-19/2026-07 at WAIC); 0902 snapshot 2026-09-02; knowledge cutoff not publicly disclosed.
- **IDs:** `qwen3.8-max` / `qwen3.8-max-0902` (Qwen Cloud/Aliyun/OpenRouter); no Zen ID, no Free ID.
- **Context window:** 1M tokens default (base weights 262K native, extensible to 1.01M per the open card) with **131,072 max output** (OpenRouter — second-pass spec).
- **Modalities:** text, image, and video in; text out (second-pass: video input confirmed by The AI Rankings and opper, on top of the vendor's video-benchmark suite); hybrid thinking mode (reasoning can be disabled on Max) + effort levels; tool calls; JSON mode; implicit caching.
- **Pricing (as of 2026-10-12, VERIFIED this pass):** **$2.00 in / $6.00 out per 1M, $0.25 implicit cache** (Qwen Cloud, OpenRouter, zenmux verified 2026-08-13, iweaver, Forbes: "undercutting OpenAI and Anthropic by 40%"). BenchLeader blended $3.00/M, 37 tok/s (slowest quarter), first answer ~59 s at max, **$5.41 per Intelligence-Index run — AA measured 190M tokens on the Index vs an 82M median: extreme verbosity is the efficiency caveat**.
- **Architecture:** MoE, 2.4T total / 95B active (open base card `Qwen/Qwen3.8-2.4T-A95B`); proprietary API serving on the 0902 post-training snapshot.

### Raw benchmarks found

Agent / tool use:

- Terminal-Bench 2.1: **86.6%** (official, Claude Code avg@10) / **88.8% #9** (AA, max — the independent run reads higher) / **67.4% #35** (Vals — harness spread, all retained); Terminal-Bench 3.0: 21.1%→0902 rows pending; Terminal-Bench 4.0: **38.9% #30** (AA) / **34.3% #12** (Vals); Terminal-Bench (public): 27.0% #63; Terminal-Bench Science: **1.4% #27** (Vals — weak)
- **τ³-Banking: 51.3% #1** (AA, max — the best τ³ score on the board, ahead of Muse Spark 1.3's 50.5% #3)
- **GDPval-AA: 58.6% #14 normalized** (AA, max — found this pass, resolving the 2026-09-24 gap; near-frontier)
- OSWorld-Verified **86.1%** / OSWorld 2.0 **19.4%** (official — old verified board vs new 2026.08 binary release, protocol split retained); AndroidWorld **85.3%**; MobileWorld 77.8%; WebArena-Verified 66.8%
- APEX-Agents **63.3% #11** (Mercor) / AA-APEX-Agents **42.4% #2** (AA); LiveBench Agentic Coding **64.7% #7**; ITBench SRE 40.3% #19; Analyst Agent 45.0% #12; AA-Briefcase **1617 #11**; EnterpriseOps-Gym **47.6% #6**; AutomationBench 27.3% plain / AA harness 56.2% #30; GDP.pdf 22.8% #18
- Toolathlon-Verified **72.5%**; CoWorkBench **74.8%**; SkillsBench **70.2%**; JobBench 53.4%; Agents' Last Exam 27.0 pass / 52.4 score; WideResearch 81.9%; HLE w/ tools 56.2% (official)
- Vals professional agents: Tax Agent **66.0% #15**, Legal Research **47.6% #11**, Finance Agent 50.6% #35, SkillsBench 42.0% #27, Harvey HLAB 10.4% #14, CyberBench **28.6% #41** (weak)
- Claw-Eval: no verified public score found (unchanged)

Reasoning / knowledge:

- GPQA Diamond: **93.7% #6** (Vals — top-10) / **92.8% #28** (AA) / **92.7% #24** (Epoch, xhigh) / 92.6% (official)
- HLE: **43.1% #55** AA (max; official 43.6% no-tools / 56.2% with tools); CritPt: **20.0% #57** (AA — found this pass; mid-weak)
- FrontierMath: Tiers 1-3 **74.7% #19**, Tier 4 **46.3% #25** (Epoch, xhigh); OTIS Mock AIME **100.0% #1** (xhigh); ProofBench 58.0% #19; LiveBench Mathematics 91.3% #29; LMArena Maths 1497 #19
- LiveBench: Reasoning **88.2% #22**, global **78.5% #16**, Data Analysis 78.4% #23, IF 74.1% #13, Language 79.7% #33; LMArena: Text 1483 #22, Hard Prompts 1504 #25, Creative Writing **1470 #16**, Multi-turn 1492 #19, Longer 1492 #25, IF 1474 #28
- MysteryMechanism 23.9% #14; Chess 40.0% #24; Mystery Game 38.0% #15; LMCA 46.2% #69; DTBench 92.0% #56
- MMLU-Pro **88.6% #18** (Vals); LegalBench 83.6% #48; TaxEval 75.5% #17; EMB 60.1% #32; MedScribe 85.0% #30; Public Benefits 67.1% #13; MedCode 40.7% #57; SimpleQA Verified 47.3% #32
- Omniscience: index 12.0 #86, accuracy **31.9% #161** (weak knowledge breadth), non-hallucination **71.2% #34** (good honesty); MRCR v2 256K **92.9%**; LongBench v2 66.3% (official); IFBench **82.8%**; HealthBench 60.2%; $OneMillion-Bench 52.5 (official)
- AA Intelligence Index v4.3.2: **45.4 #33** (max; AA's 0902 page: "well above average, median 26" — with the 190M-token verbosity note); AA-LCR **80.3% #66**; MLCR **20.0% #19** (weak)
- ARC-AGI: no verified public score found for this ID (unchanged)

Coding:

- LiveCodeBench (Vals): **87.8% #10**; IOI (Vals): **68.9% #11**; LMArena WebDev: **1672-1674 #10-11**; SWE-bench (Vals): **85.6% #17**; LMArena Coding 1524 #29
- CodeArena web-dev (0902): **1691, #1 preliminary** (ahead of Opus 5's 1688)
- SWE-bench Pro 67.7%; DeepSWE 56.6-57.5% #36; NL2Repo 55.9%; FrontierSWE v1 73.5% / v2 **15.8-17.8% #16**; PaperBench **93.0%** (class-best); QwenSWEBench 80.7% (V2 rows on the 0902 tracker); QwenReactBench 1724; VulcanBench v3 81.2%; MLS-Bench Lite 41.0%; Bug Hunt 25.7 fixes
- SciCode **53.2% #73** (below the 55% reference — the soft spot); LiveBench Coding 72.9% #54; Vibe Code 64.7% #38; Code Migration 24.0% #41; ProgramBench 0.0%; VCB 12.8% #17

Long context:

- 1M default on the API; MRCR v2 92.9% verified at 256K (official); AA-LCR 80.3% #66; no 512K-1M retrieval figure published.

Multimodal (grounding):

- **LMArena Vision 1314 #9** (independent — top-10); Vals Multimodal Index **65.4% #12**; MMMU-Pro 88.0% #12 (Vals) / 82.8% #29 (AA) / 82.3% (official); SAGE 51.3% #14; MortgageTax 64.0% #48
- Vendor vision suite (official): MathVision **95.2%** / 97.7% w/ Python, CharXiv **93.5%**, OmniDocBench 1.5 92.1%, Video-MME (sub) **90.4%**, MLVU 90.8%, VideoMMU **88.7%**, MMVU 82.4%, LVBench 81.8%, ScreenSpot Pro 84.5%, BabyVision 82.0% / 91.3% w/ Python, MedXpertQA-MM 80.4%, RealWorldQA 88.0%, CC-OCR 79.6%, OCRBench V2 74.2% — elite across image, document, and video understanding; no audio modality.

### Normalized scores (1–100)

- **Tool use: 88/100.** Raised from 86: both first-pass gaps ("GDPval/Tau3 unpublished") filled with elite results — τ³-Banking **51.3% #1** and GDPval 58.6% #14 — alongside TB2.1 88.8% #9 (AA), APEX 63.3% #11, LiveBench Agentic 64.7% #7, AA-APEX #2, Briefcase 1617 #11, EnterpriseOps #6, OSWorld-Verified 86.1%, AndroidWorld 85.3%, CoWorkBench 74.8%, Toolathlon 72.5%. Capped by CyberBench 28.6% #41, HLAB 10.4% #14, TB Science 1.4% #27, ITBench 40.3% #19, the Vals TB2.1 spread (67.4% #35), and AutomationBench 27.3% (vendor harness).
- **Reasoning: 84/100.** Held: GPQA 93.7% #6 is elite and OTIS hits 100% #1, FrontierMath 74.7/46.3 and LiveBench Reasoning 88.2% #22 are strong — but the filled gaps read mid: AA II 45.4 #33, HLE 43.1% #55, CritPt 20.0% #57, Omniscience accuracy 31.9% #161, MLCR 20.0% #19, and ARC-AGI remains unpublished. Good honesty (71.2% non-hallucination) partly offsets the knowledge-breadth weakness.
- **Context window: 95/100.** Held: 1M default with 131K output; retrieval verified only at 256K (92.9%), no ≥512K bar met.
- **Multimodal: 90/100.** Held and reinforced: text+image+video input (now independently confirmed) with LMArena Vision #9 and Vals Multimodal Index #12 on top of the vendor's elite vision suite (MathVision 95.2%, CharXiv 93.5%, Video-MME 90.4%, VideoMMU 88.7%); no audio keeps it at the video-band floor.
- **Coding: 85/100.** Held: four top-17 finishes (LiveCodeBench #10, IOI #11, WebDev #10-11, SWE-bench #17) plus the preliminary CodeArena #1 for 0902, PaperBench 93.0%, FrontierSWE v1 73.5%; capped by SciCode 53.2% #73, LiveBench Coding 72.9% #54, Vibe Code #38, Code Migration #41, FrontierSWE v2 15.8%, and DeepSWE ~57% (well under the 74% reference).
- **Cost efficiency: 78/100.** Raised from 70: the first pass scored provisionally at "flagship-Max tier" with no verified price — the second pass verified **$2.00/$6.00 with $0.25 implicit cache** (Forbes: 40% under OpenAI/Anthropic flagships), between the ~$1.25/$4.25 (≈88) and ~$3/$15 (≈60) anchors. The caps: extreme verbosity (190M tokens per AA Index run vs 82M median → $5.41/run), slowest-quarter output (37 tok/s), and ~59 s first answers at max effort.
- **Overall Score: 88.4/100.** (88 + 84 + 95 + 90 + 85) / 5 = 88.4, up from 88.0 via the Tool and Cost corrections. Best-fit: Alibaba's frontier multimodal agent — the board's best τ³, near-frontier GDPval and TB2.1, top-10 vision, and a $2/$6 price that undercuts Western flagships by 40%; budget for its verbosity on long agent runs and verify knowledge-breadth-sensitive tasks.

---

## Signature

- Provided by: **GLM 5.3 (z-ai/glm-5.3)** — 2026-10-12
- Method: public internet research, second pass over the 2026-09-24 report (Qwen3.8-Max release benchmarks via qwen.ai and the Qwen3.8-2.4T-A95B open card, the 0902 snapshot coverage, Artificial Analysis model page for 0902, BenchLeader data as of 2026-10-12, BenchLM updated 2026-10-10, Vals AI, LiveBench, LMArena, Epoch hub, Scale SEAL, Mercor APEX, Harvey, OpenRouter listing; three successful web searches; independent reviews: Forbes, zenmux ×2, theairankings, opper, DataCamp, iweaver, kingy, buildfastwithai ×2, zeniteq, aireleasetracker); scores are normalized 1-100 interpretations, not official vendor scores.
- Future sources: add a new file next to this one, e.g. `GPT_5.md`, using the same headings.
