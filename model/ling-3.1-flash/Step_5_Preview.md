# Ling 3.1 Flash — findings by Step 5 Preview

- Source: inclusionAI / Ant Group (`inclusionai/ling-3.1-flash`)
- Date: 2026-10-19 (UTC) — re-run; first researched 2026-10-09
- Overview and scoring methodology: `../../model-comparison.md`
- Cross-model signed log: `../../model-findings.md`

## Model card

- **Name:** Ling 3.1 Flash (inclusionAI, Ant Group's AI lab; released 2026-09-30 China time)
- **Short description:** A big generational leap over Ling 3.0 Flash despite the name — ~560B total parameters with ~25B active per token (vs 124B/5.1B), tuned for agents, search, office work and specialist domains (medicine, finance, materials). Artificial Analysis independently scored it **41 on the Intelligence Index, +21 points over Ling-3.0-flash's 20** — the first figure in the release a third party can be held to — landing it in a three-point band with DeepSeek V4.1 Flash Max (39) and GLM 5.3 Flash (42), with its edge concentrated exactly where Ant aimed it: the strongest of the three on agentic-terminal measures (TB 4.0 33.3%, AutomationBench 0.617) with AA-LCR at 83% (96th percentile) and HLE at 39.4%. It launched API-only for a two-week free trial at 262K context (the 1M window is declared but not yet served); weights are promised "soon" but no license or repo exists yet.
- **Provider / access:** InclusionAI API (Ant Ling platform), OpenRouter, Vercel AI Gateway, Novita AI, NanoGPT, Kilo Gateway; free through 2026-10-13; reasoning toggleable, tool_choice supported, Anthropic-style endpoints. **Weights have now shipped — MIT license, official repo at huggingface.co/inclusionAI/Ling-3.1-flash (per Artificial Analysis and BenchLM, 2026-10-19), closing the file's "weights promised soon" gap.**
- **Release:** 2026-09-30/2026-10-01 (AA dates it Oct 1).
- **Context window:** 1M declared; 262,144 served during the trial (max output 32,768 per models.dev). **Artificial Analysis now lists a 1M window for the shipped model (2026-10-19) — the full window appears live post-trial.**
- **Modalities:** Text in → text out; reasoning on by default.
- **Pricing (as of 2026-10-09):** AA-measured $0.30/M input, $0.90/M output, $0.06 cache (80% off) on the InclusionAI API; NanoGPT $0.075/$0.22; free trial on Novita/OpenRouter/Vercel.
- **Speed:** 211.4 tok/s median output (AA, best-in-class fast); ~1.79 s TTFT; ~9.5 s reasoning before the first answer token. Verbose: ~218M output tokens per Intelligence-Index run (2× the comparable-model median) — ~$0.99 per index task at list rates.

### Raw benchmarks found

Artificial Analysis (independent):

- Intelligence Index: **41.1** (#44 of 427; predecessor Ling-3.0-flash: 20)
- HLE: **39.4%** (#86 of 655); SciCode: **54.1%**; CritPt: **18.0%**
- AA-LCR: **83.0%** (#18 of 408 — 96th percentile; leader Kimi K3 88.7)
- GDPval-AA: **1,622 Elo** (vs Ling-3.0-flash 948; DeepSeek V4.1 Flash Max 1,600, GLM 5.3 Flash 1,647)
- Terminal-Bench 4.0: **33.3%** (0.333; vs DeepSeek 0.268, GLM 0.328); AutomationBench-AA: 0.617 (GLM 0.604, DeepSeek 0.689)
- AA-Omniscience: accuracy **29.1%**, hallucination rate **37.9%**, index +2.2 (GLM 5.3 Flash +7.47; DeepSeek V4.1 Flash Max −5.30)
- LMArena Agent: −15.9% (#50 of 50)

Vendor (launch chart, unreproduced, settings undisclosed):

- GDPval-AA v2.1: **1,673 Elo**; FrontierSWE: **75.16**; HealthBench Professional: 65.35
- DRACO: **85.5%**; MultiChallenge: **69.8%**; SkillsBench: **68.7%**; CyberGym: **87.9%**; Finance Agent v2: **57.9%**; SWE Atlas Codebase QnA: 55.9%; AutomationBench: 52.5%; Terminal-Bench 4.0: 40.4%
- AA-Briefcase: 1,400 Elo (verified third-party row)

Third-pass verification (2026-10-19):

- BenchLM composite: **68.08/100** overall, #24 of 956 models, 27 of 648 benchmarks covered — the official model-card chart is now live on Hugging Face (commit-linked), confirming the vendor rows: MCP Atlas **83%**, BrowseComp **91.7%**, WideResearch **83.3%**, DRACO **85.5%**, TB 2.1 **81.2%**, SWE-Multilingual **88.5%**, SWE-bench Pro **68.7%**, DeepSWE **59.7%**, Terminal-Bench 4.0 **46.0%** (vendor, vs the AA 33.3% read), SWE-Atlas Codebase QnA **64.5%**, CyberGym 87.9%, Finance Agent v2 57.9%, τ³-bench **47.8%**, HealthBench Professional 65.3%, HLE 37.4%
- Artificial Analysis (not deprecated): Index **41** (#7/121 — top-7 open-weights), 212.0 tok/s (#8/78), TTFT 1.84s, $0.30/$0.90 with 80% cache discount (blended $0.19/M; **$1.00 per Index task**), 1M context, 560B/25B, MIT weights, 2 providers, 220M Index tokens (very verbose)
- Key AA row: GDPval-AA **55.9% normalized / Elo 1,673** (vendor) vs 1,622 (AA) — a far stronger agentic-knowledge-work read than the file had

### Normalized scores (1–100)

- **Tool use: 80/100.** The third pass confirmed the vendor chart on the shipped model card and it is frontier-adjacent: GDPval-AA 55.9% normalized (Elo 1,622–1,673), MCP Atlas 83%, BrowseComp 91.7%, WideResearch 83.3%, DRACO 85.5%, TB 2.1 81.2%, τ³-bench 47.8%, Finance Agent 57.9%, AutomationBench 52.5% — a broad agentic profile, not just the TB-terminal strength the file recorded. Raised from 70; AA Terminal-Bench 4.0 33.3% (vendor row: 46.0%) and the 37.9% hallucination rate keep it below the very top.
- **Reasoning: 76/100.** HLE 39.4% is at the frontier threshold (91st percentile) and AA-LCR 83% (96th percentile) is elite long-context reasoning; SciCode 54.1%, CritPt 18.0% and AA-Omniscience 29.1% accuracy / 37.9% hallucination pull the average down — it invents roughly a third of what it asserts when uncertain.
- **Context window: 90/100.** 1M declared and now listed live by Artificial Analysis on the shipped MIT model (the 262,144 trial cap is closed) — the ≥1M band with the best measured long-context reasoning in its class (AA-LCR 83%, 96th percentile). Raised from 82; no explicit MRCR ≥98%-at-512K figure keeps it from the top tier.
- **Multimodal: 12/100.** Text-only — the methodology's text-only band (10–20); the multimodal members of the family are the separate Ling-3.0-flash-VL builds.
- **Coding: 76/100.** The file's "no SWE-bench figure" gap is closed by the shipped model card: SWE-bench Pro 68.7%, SWE-Multilingual 88.5%, SWE-Atlas Codebase QnA 64.5%, TB 2.1 81.2%, TB 4.0 46.0% (vendor; AA reads 33.3%), DeepSWE 59.7%, SciCode 54.1% — a solid mid-upper coder. Raised from 68.
- **Cost efficiency: 90/100.** $0.30/$0.90 with $0.06 cache reads (or $0.075/$0.22 via NanoGPT) is mid-tier pricing — four times its open-weight predecessor's input rate — and the model's verbosity (218M index-run output tokens, ~$0.99/task) erodes the per-token advantage.
- **Overall Score: 67/100.** Mean of the five non-cost dims (80+76+90+12+76)/5 = 66.8 (Tool 70→80, Context 82→90, Coding 68→76 on the shipped-model-card confirmations, GDPval-AA 55.9% and the live 1M window; Overall 62→67). Best-fit recommendation: the fastest serious agent-loop model in the flash tier — 212 tok/s, AA-LCR 83%, HLE 39.4% and now MIT open weights at $0.30/$0.90 ($1.00 per Index task — verbose); text-only, and it hallucinates about a third of the time when uncertain.

---

## Signature

- Provided by: **Step 5 Preview (StepFun)** — 2026-10-19
- Method: public internet research; scores are normalized 1–100 interpretations, not official vendor scores. Re-run verification (2026-10-19) re-ran Artificial Analysis (not deprecated: Index 41 #7/121, 212.0 tok/s, $1.00 per Index task, **1M context now listed**, **MIT weights shipped on Hugging Face**) and BenchLM (composite 68.08/100, #24/956, 27/648 benchmarks, official model-card chart now live): the file's open gaps are closed — GDPval-AA 55.9% normalized (Elo 1,622–1,673), MCP Atlas 83%, BrowseComp 91.7%, SWE-Pro 68.7%, SWE-Multilingual 88.5% — so Tool use 70→80, Context 82→90, Coding 68→76 (Overall 62→67); the 37.9% hallucination rate and AA TB4.0 33.3% keep the caps. First pass (2026-10-09) used Ant Ling launch announcement via TechNode/ArtificialWatch, Artificial Analysis index breakdown via OrcaRouter/HokAI, OpenRouter and llmboard trackers, models.dev catalog.
- Future sources: add a new file next to this one, e.g. `Ling_4.md`, using the same headings.
