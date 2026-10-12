# MiMo V2.6 Flash Free — findings by GLM 5.3

- Source: Xiaomi (`opencode/mimo-v2.6-flash-free`, base `xiaomi/mimo-v2.6-flash`)
- Date: 2026-10-12 (UTC) — second-pass re-research of the 2026-09-25 report
- Overview and scoring methodology: `../../model-comparison.md`
- Cross-model signed log: `../../model-findings.md`

## Model card

- **Name:** MiMo V2.6 Flash Free (Zen free tier of Xiaomi MiMo-V2.6-Flash)
- **Short description:** OpenCode Zen's limited-time free tier of Xiaomi's MiMo-V2.6-Flash-RL — an omnimodal (text/image/video/audio) sparse-MoE RL model built for long-horizon agents. Second-pass status check: **the free tier is still live as of 2026-10-10/11** — announced 2026-09-21 as "free for the next week" (through ~09-28), but the Zen docs pricing table continues to list `mimo-v2.6-flash-free` at Free/Free/Free with no end date (kingy.ai 2026-10-10; opencode.ai/docs/zen 2026-10-11). Top use case: free agentic coding, tool use, and cybersecurity tasks.
- **Provider / access:** OpenCode Zen `opencode/mimo-v2.6-flash-free` (OpenAI-compatible Chat Completions; per-IP daily cap, unpublished); open weights `XiaomiMiMo/MiMo-V2.6-Flash-RL` on HF/ModelScope (MIT); Xiaomi MiMo Open Platform API; OpenRouter (8+ providers, $0.04-0.10 in floor).
- **Release / knowledge:** MiMo-V2.6 series released 2026-09-21/22; knowledge cutoff not stated publicly.
- **IDs:** `opencode/mimo-v2.6-flash-free` (Free tier, still live); base `XiaomiMiMo/MiMo-V2.6-Flash-RL`.
- **Context window:** Zen free tier caps at **200K context / 32K output** (models.dev toml + pi.dev listing, confirmed this pass); native model supports 1M/131K. Scored on the evaluated Zen tier (200K).
- **Modalities:** text, image, video, and audio in / text out (HF model card "Native Omnimodal"; the free-tier endpoint exposes text+image per pi.dev); reasoning yes (interleaved `reasoning_content`); tool calls yes (`--tool-call-parser mimo`); JSON mode not separately verified.
- **Pricing (as of 2026-10-12):** Free tier — $0 in / $0 out / $0 cached read, still active past its announced week. Caveat retained: during the free period collected data may be used to improve the model (Zen privacy note) — do not route confidential code.
- **Architecture:** sparse MoE, 309B total / 15B activated; 48 layers (39 SWA / 9 global attention); 256 routed experts (8 activated); 681M MiMo ViT vision encoder; 308M AudioTokenizer + 127M audio patch encoder; 5-layer MTP speculative decoder; MIT license.

### Raw benchmarks found

> First-pass rows were vendor-table (BenchLM + HF). Second pass imports the sibling MiMo-V2.6-Flash independent rows (same weights, gathered 2026-10-11 in the mimo-v2.6-flash second pass — BenchLeader data as of 2026-10-11/12, all "not stated" effort).

Agent / tool use:

- Terminal-Bench 2.1: **87.6%** (vendor) / **84.3% #30** (AA, same value) / **62.9% #38** (Vals — a ~25-pt common-harness gap, both retained); Terminal-Bench 4.0: **28.8%** vendor / **32.8% #38** (AA) / 31.3% #13 (Vals); Terminal-Bench Science **2.9% #23** (Vals — weak)
- **GDPval-AA: 57.2% #17 normalized** (AA — gap filled; near-frontier for the class; Pro sibling 1673 raw)
- **τ³-Banking: 47.2% #8** (AA — gap filled; top-10); **ITBench SRE: 51.2% #4** (AA — gap filled); **Finance Agent v2: 57.9% #12** (Vals — gap filled); SkillsBench 40.2% #29; Legal Research 45.2% #14; Tax Agent 62.0% #28; Harvey HLAB 6.7% #23; CyberBench 67.9% #23
- Toolathlon-Verified **73.6%**; AutomationBench **52.3%** (vendor; AA-harness 60.4% #20); OSWorld-Verified **80.8%**; JobBench **61.2%**; Agents' Last Exam **27.6%** (vendor)
- APEX-Agents 52.8% #23; Briefcase 1454 #31; GDP.pdf 15.4% #38; EnterpriseOps 33.2% #14; LMArena Agent −1 #34
- Cybersecurity (tool-adjacent): CyberGym **95.1%**, MiMo Cyber Bench 77.2%, ExploitGym 6.0%, ExploitBench 25.3%, SEC Bench Pro 47.5% (vendor)
- Claw-Eval / Tau2 / MCP-Atlas: no verified public score found (unchanged)

Reasoning / knowledge:

- **GPQA Diamond: 91.2% #49** (AA — gap filled; above the 90% frontier bar, mid rank) / 86.4% #41 (Vals)
- **HLE: 39.9% #81** (AA — gap filled; just under the 40% reference) / 55.3% with tools (vendor)
- **CritPt: 15.4% #83** (AA — gap filled; weak); **AA Intelligence Index: 41.8 #51** (AA — gap filled; solid for the class)
- **AA-LCR: 86.0% #73** (gap filled; strong raw, mid rank); **MLCR: 51.1% #10** (gap filled; good rank)
- LiveBench: Reasoning 77.6% #56, global **81.1% #8**, Mathematics 81.2% #58, Data Analysis 76.4% #33, IF 52.8% #66; LMArena: Text 1475 #37, Hard Prompts 1501 #30, **Maths 1502 #13**
- FrontierMath T1-3 55.8% #42 / T4 17.1% #51; OTIS 93.9% #52; ProofBench 21.0% #47; BTF-3 **14.9% #1**; SimpleBench 64.8% #17; MysteryMechanism 21.2% #17
- Omniscience: accuracy **27.5% #193** (weak breadth), **non-hallucination 72.4% #31** (good honesty); MedScribe **88.9% #7**; Public Benefits **68.9% #6**; LegalBench 83.9% #43; TaxEval 75.6% #16; MMLU-Pro 86.1% #47
- Composites: BenchLM **57.36, #55 of 889** (unranked at first pass — now computed); BenchLeader **62.2, #82 of 760**; ECI 151.9 #46; Vals Index 49.3 #27

Coding:

- **SWE-bench Verified (Vals): 92.0% — #10 of all measured** (gap filled; elite) — CONFLICT: rankllms lists "**67.2% SWE-bench Verified**" for the same model — a different/stricter harness or snapshot; no public reconciliation found (third search null), both retained and flagged
- LiveCodeBench (Vals): **80.5% #66** (gap filled); Vibe Code v1.1 **85.2% #12** (Vals); IOI 52.5% #20; Code Migration 20.5% #43; SciCode **51.6% #82-87** (below the 55% reference); LMArena Coding 1525 #27 / WebDev 1609 #25; LiveBench Coding 79.0% #25
- DeepSWE v1.1: **67.9%** vendor / **63.4% #30** (Epoch); MiMo Code Bench 61.2%; ProgramBench 26.0% vendor / 0.5% #13 (Vals convention — conflict retained); ALE-Bench 303.6 #110; Bug Hunt 17.7 fixes
- Vibe Code Bench: filled this pass (85.2% #12)

Long context:

- Zen free tier = 200K/32K cap (the evaluated deployment); native 1M/131K exists on paid endpoints; sibling AA-LCR 86.0% #73; no MRCR/RULER value (unchanged).

Multimodal:

- MiMo VisualCoding **71.5%** (vendor; beats Opus 5's 70.0); **Vals Multimodal Index: 69.8% #6** (independent — elite); MMMU-Pro (Vals) **86.0% #23**; LMArena Vision 1296 #23; SAGE 45.0% #31; Design Arena 1278 (OpenRouter)

### Normalized scores (1–100)

- **Tool use: 87/100.** Held: the first-pass gaps filled well — GDPval 57.2% #17, τ³ #8, ITBench #4, Finance #12 — offset by the newly measured Vals TB2.1 harness gap (62.9% #38 vs the vendor's 87.6%) and Terminal-Bench Science 2.9% #23. OSWorld 80.8%, Toolathlon 73.6%, AutomationBench 52.3%, CyberGym 95.1% retained.
- **Reasoning: 68/100.** Raised from 62: the provisional score rested on "no direct GPQA/HLE/LCR numbers exist" — those gaps are now filled by the sibling-weight data: GPQA 91.2% #49 (above the bar), AA II 41.8 #51, AA-LCR 86.0% #73, MLCR 51.1% #10, BTF-3 #1, good honesty (72.4% non-hallucination). Capped by CritPt 15.4% #83, HLE 39.9% #81, Omniscience accuracy 27.5% #193.
- **Context window: 70/100.** Held: the evaluated Zen free tier serves 200K/32K (200K anchor); the native 1M window is a paid-endpoint fact, documented but not served here.
- **Multimodal: 86/100.** Lowered from 92 to harmonize with the sibling file's second pass (same weights): native omni input with the elite Vals Multimodal Index 69.8% #6 and MMMU-Pro 86.0% #23, but mid Vision 1296 #23 and weak SAGE 45.0% #31; text-only output.
- **Coding: 78/100.** Raised from 72: the SWE-bench Verified gap filled elite (Vals 92.0% #10 — with the unreconciled 67.2% rankllms figure flagged), LiveCodeBench 80.5% #66 and Vibe Code 85.2% #12 filled solid; capped by SciCode below the reference, Code Migration 20.5% #43, ALE #110, and the ProgramBench harness conflict.
- **Cost efficiency: 100/100.** Held: the free tier is confirmed still live (2026-10-10/11) — $0/$0/$0 = 100 by the methodology; the data-consent caveat and the unannounced end date remain the catches.
- **Overall Score: 78/100.** (87 + 68 + 70 + 86 + 78) / 5 = 77.8 → 78, up from 77 via the Reasoning and Coding gap fills. Best-fit: still the best free agentic-value pick — near-frontier tool use, elite omni-input scores, and now a verified reasoning/coding dossier at $0; watch the free-tier end date and never route confidential code through it.

---

## Signature

- Provided by: **GLM 5.3 (z-ai/glm-5.3)** — 2026-10-12
- Method: public internet research, second pass over the 2026-09-25 report (Zen docs free-tier status verified as of 2026-10-11 via opencode.ai/docs/zen + kingy.ai/haowego/horizonlux/freetokens/OFOX status checks; the sibling-weight independent rows imported from the 2026-10-11 mimo-v2.6-flash second pass — Artificial Analysis model benchmarks, BenchLeader data, Vals AI model page (53.23 Vals Index, 21 benchmarks), BenchLM 66.03 composite, OpenRouter listing, pi.dev endpoint listing, rankllms; three web-search attempts, two successful plus one null confirming the SWE-bench conflict is unreconciled); scores are normalized 1-100 interpretations, not official vendor scores.
- Future sources: add a new file next to this one, e.g. `GPT_5.md`, using the same headings.
