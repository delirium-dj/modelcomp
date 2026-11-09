# Mistral Large 4 — findings by MiMo 2.6 Flash

- Source: Mistral AI (`mistral-large-4`)
- Date: 2026-11-08 (UTC) — second-pass enrichment re-research (previous 2026-10-13)
- Overview and scoring methodology: `../../model-comparison.md`
- Cross-model signed log: `../../model-findings.md`

## Model card

- **Name:** Mistral Large 4
- **Short description:** Mistral AI's flagship hybrid instruct-and-reasoning MoE model ("Le Chonk", `Mistral-Large-4-1T-A52B`), natively multimodal, launched in public API preview on 2026-10-06 and shipped as open weights on 2026-10-29. Positioned as state-of-the-art among open-weight models on cybersecurity, finance, and manufacturing.
- **Provider / access:** Mistral API / Mistral Studio / OpenRouter (`mistral/mistral-large-4`); open weights on Hugging Face since 2026-10-29 (self-hosting at no license cost).
- **Release / knowledge:** Public preview 2026-10-06; open weights 2026-10-29; knowledge cutoff not disclosed.
- **Context window:** 1,000,000 tokens (1M) context.
- **Modalities:** text + image in; text out; hybrid reasoning (reasoning_effort toggle: none/medium/high); tool calls; JSON mode.
- **Pricing (as of 2026-11-08):** $0.70 / 1M input, $2.10 / 1M output ($1.05 blended at 3:1, $0.07/1M cached input) — list price cut on 2026-10-30, roughly half the 2026-10-13 preview price of $1.36/$4.18. ~114 tokens/s streaming, 1.85 s first token (Artificial Analysis).
- **Architecture:** ~1.05T total parameters, 52B active per token, sparse MoE with 1.6B vision encoder; trained on 3,800 NVIDIA Grace Blackwell GPUs in Mistral's European datacenters; open weights since 2026-10-29.

### Raw benchmarks found

Agent / tool use:

- APEX-Agents: **51.6%** (#30, BenchLeader 2026-11-09)
- LiveBench Long Agentic: **27.5%** (#19); LiveBench Browser: **17.4%** (#29); LiveBench Agentic Coding: **57.2%** (#22)
- Finance Agent v2 (Vals): **54.7%** (#27); Finance Agent v2.1 (Vals): **61.4%** (#19)
- Harvey's Legal Agent Benchmark v1.1 (Vals): **17.5%** (#7); Legal Research Bench: **31.7%** (#50)
- AutomationBench (AA): **59.9%** at high effort (#46); AA-Briefcase v1.1: **1,393 Elo** (#61)
- Terminal-Bench 4.0 (AA): **24.8%** (#60); (Vals): **27.8%** (#26); GDPval-AA v2.1: **46.1%** (#48)
- Cyber verticals: CyberGym end-to-end (AA) **81.7%** (#2), CWE-Bench (AA) 50.8%, AA Cyber Index 50.9 (#64 high / 49.5 #8 not-stated)

Reasoning / knowledge:

- GPQA Diamond: **88.1%** (#73, Epoch AI Benchmarking Hub)
- LiveBench 2.0 Reasoning: **85.2%** (#17); LiveBench 1.0 Reasoning: **83.9%** (#42); LiveBench 2.0 overall: **63.5%** (#19)
- Humanity's Last Exam (AA): **35.0%** (#128); HLE-Diamond (AA): 17.3% (#77 at high)
- CritPt (AA): 11.1% (#120); CritPt v2 hard subset: 27.0% (#73 at high)
- FrontierMath Tiers 1–3: **58.6%** (#45); Tier 4: 26.8% (#45); LiveBench Mathematics: 93.6% (#21)
- AA Intelligence Index v5.0: **26.1** (#65, high effort); Epoch Capabilities Index: 54.7 (#44); AA-Omniscience v1.1: 5.1 index, 26.0% accuracy, 71.8% non-hallucination (#26)
- AA Openness Index: 38.9 (#35)

Coding:

- LiveBench 2.0 Coding: **95.4%** (#5); LiveBench 1.0 Coding: 77.2% (#39)
- FrontierCode: **39.4%** (#28); FrontierCode 2.0 (AA): 15.0% (#71 at high); FrontierCode 1.1 (AA): 41.5% (#30)
- Vibe Code Bench v1.1 (Vals): **78.4%** (#35); VCB 1–100: 14.3% (#21)
- IOI: **45.3%** (#32); SciCode: 54.2% (#68); ALE-Bench: 1213.2 (#44)
- Arena Coding: 1473 (#118); Arena WebDev: 1563 (#43); Design Arena Website: 1254 (#56)
- Terminal-Bench 4.0 (AA): 24.8% (#60); SWE-bench Multimodal (Vals): 33.1% (#21); Code Migration: 30.6% (#42)

Long context / multimodal:

- AA-LCR v1.1: **81.3%** (#61); MLCR: 7.8% (#132)
- MMMU-Pro (AA): **76.4%** (#98); Arena Vision: 1243 (#71); LiveBench Design: 76.3% (#18)
- Code2Video-AA: 931 Elo (#22); AA-3D: 870 Elo (#19); GDP.pdf (AA): 17.6% (#92)

Composite / preference:

- BenchLeader Index: **52.5** (#270/594, 2026-11-09); BenchLM overall: 52.59 (#91/1016, 2026-11-07)
- Arena Text: 1419 (#128); Arena Creative Writing: 1355 (#169); Arena Hard Prompts: 1449 (#113)
- Safety: Cyber Misuse Refusal 96.6, B3 agent-security resistance 97.1 (BenchLM 2026-11-07); FORTRESS 23.1% (#40); AA Openness Index 38.9

### Normalized scores (1–100)

- **Tool use: 80/100.** Independent third-party agent rows now confirm the launch claims: APEX 51.6% (#30), LiveBench Long Agentic #19, Finance Agent v2.1 61.4% (#19), Harvey Legal Agent #7, AutomationBench 59.9%, AA-Briefcase 1,393 — top-30 ranks across business/agent boards, but TB4.0 (AA) 24.8% (#60) and GDP.pdf 17.6% (#92) hold it below frontier agent class.
- **Reasoning: 78/100.** Hard academic numbers finally published: GPQA-D 88.1% and LiveBench 2.0 Reasoning 85.2% (#17) are strong, FrontierMath T1–3 58.6% (#45) solid; but HLE (AA) 35.0% (#128), CritPt 11.1% (#120) and AA Intelligence Index 26.1 (#65) stay mid-pack — net corroboration of the prior score rather than a step up.
- **Context window: 95/100.** Full 1M-token native context, matching the frontier class; first independent retrieval measurements are now in (AA-LCR 81.3% #61) — strong in absolute terms but not top-10, and MLCR 7.8% (#132) is weak; kept at 95 for the 1M frontier window pending more retrieval boards.
- **Multimodal: 85/100.** Natively multimodal from scratch (1.6B vision encoder); the previously missing MMMU-Pro score landed at 76.4%, with LiveBench Design #18, Code2Video #22 and AA-3D #19 — confirms the prior 85 rather than moving it; capped by image-only input (no video/audio) and Arena Vision #71.
- **Coding: 78/100.** Moved up +3 on fresh independent rows: LiveBench 2.0 Coding **95.4% (#5)**, FrontierCode 39.4% (#28), Vibe Code Bench v1.1 78.4% (#35), IOI 45.3% (#32), ALE-Bench 1213 (#44), Arena WebDev #43 — a consistent top-50 coding profile that clears the old "TB4-gap" cap; still limited by Terminal-Bench 4.0 (AA) 24.8% (#60) vs frontier 60%+.
- **Cost efficiency: 78/100.** Moved up +6: list price cut to **$0.70 in / $2.10 out** on 2026-10-30 (was $1.36/$4.18 — roughly half), $0.07/1M cached input, $1.05 blended (BenchLeader: mid-priced, #63 under $2/M), plus free open weights since 2026-10-29 for self-hosting; capped by $4.21 AA cost-per-task (135k tokens incl. reasoning) at the default effort.
- **Overall Score: 83/100.** Mean of (80 + 78 + 95 + 85 + 78) / 5 = 83.2 → **83**. Best-fit recommendation: enterprise open-weight-sovereignty play with cyber/finance/legal vertical strength, 1M context and now roughly half the preview pricing — ideal for regulated industries self-hosting the 2026-10-29 weights, still second-tier as a pure agentic coder (TB4 24.8%) vs the Claude/GPT frontier.

---

## Signature

- Provided by: **MiMo 2.6 Flash (Xiaomi — opencode/mimo-v2.6-flash)** — 2026-11-08
- Method: fresh public internet research (BenchLeader model page with data date 2026-11-09, BenchLM 2026-11-07, Artificial Analysis and Vals AI boards via BenchLeader's per-benchmark ledger, Mistral open-weights announcement 2026-10-29); scores are normalized 1–100 interpretations, not official vendor scores.
- Future sources: add a new file next to this one, e.g. `GPT_5.md`, using the same headings.
