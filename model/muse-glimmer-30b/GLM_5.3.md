# Muse Glimmer 30B — findings by GLM 5.3

- Source: Meta (`muse-glimmer-30b`)
- Date: 2026-10-13 (UTC) — second-pass re-research of the 2026-09-24 report
- Overview and scoring methodology: `../../model-comparison.md`
- Cross-model signed log: `../../model-findings.md`

## Model card

- **Name:** Muse Glimmer 30B
- **Short description:** Meta's open-weights agent-tuned model — released **2026-08-10** (resolves the first pass's unknown), **~29.6B dense Transformer under plain Apache 2.0** (no Llama-style MAU cap), **Meta's first open-weight model since Llama 4 and the first from the restructured Superintelligence Labs** (mer.vin), running **under 20GB at 4-bit on a single 24/32GB consumer GPU or Mac** with its own speculative-decoding drafter (DFlash). Second pass resolves hosted pricing (**$0.30/$1.20 DeepInfra / $0.35/$1.50 Together**), confirms the first-pass rows nearly exactly, and fills the agent gaps weak (τ³ 23.5% #83, GDPval 14.3% #181, TB 4.0 0.5%). Top use case: self-hosted agentic coding and GUI/document understanding on consumer hardware.
- **Provider / access:** Hugging Face `meta-models/Muse-Glimmer-30B` (Apache 2.0; AA Openness 44.4 #27); OpenRouter — DeepInfra bf16 **$0.30/$1.20** (123 tok/s), Together **$0.35/$1.50** (95 tok/s); no OpenCode Zen listing.
- **Release / knowledge:** **2026-08-10** (confirmed across all coverage); knowledge cutoff not stated.
- **IDs:** `muse-glimmer-30b` (no Zen Free ID); `meta-models/Muse-Glimmer-30B` (HF).
- **Context window:** **131K tokens** (BenchLeader/provider rows; codersera lists 128K — same window, rounding).
- **Modalities:** text and image in / text out (MMMU-Pro 74.3% #107, CharXiv 78.8%, ScreenSpot Pro 75.4%, OmniDocBench 75.8%); reasoning (2 settings measured; not-stated is best, high config trades ~3 index points for thinking); tool calls (MCP coverage); JSON mode not separately verified.
- **Pricing (as of 2026-10-13):** hosted **$0.30 in / $1.20 out** per 1M (DeepInfra; blended $0.525/M — mid-priced); Apache-2.0 self-host at $0, under 20GB at 4-bit; $0.023 per agentic session hosted.
- **Architecture:** **~29.6B dense Transformer** (resolves the first pass's "dense or MoE undisclosed"); Apache 2.0; ships with a DFlash speculative-decoding drafter for local speed.

### Raw benchmarks found

> Second pass adds the BenchLeader profile (best = not-stated **54.9 #224/760**, trend 44→54→64 rising — settling, last measured 2026-10-08). Category scores: **Maths 63 (best)**, Human preference 61, Reasoning 61, **Coding 47 (worst)**; the high-effort config reads Long context 67, Agents 52, Multimodal 57. The first-pass rows are confirmed nearly verbatim by the settled AA harness.

Agent / tool use:

- **τ³-Banking: 23.5% #83** — gap filled; weak. **GDPval-AA: 14.3% #181** (updated from 893 Elo/13.7% — consistent, bottom-tier)
- Terminal-Bench 2.1: **51.7% #111 (AA)** (confirmed); **TB 4.0: 0.5% #132; TB Science: 0.0% #31** — the 2026 suites are walls
- MCP Atlas 75.5%; DeepSearchQA 74.6%; OSWorld-Verified 65.9% (all confirmed); **EnterpriseOps-Gym: 34.7% #13** (good rank); Analyst Agent 20.0% #23; AutomationBench 6.8% #51; GDP.pdf 10.0% #49; AA-Briefcase 477 #52; SkillsBench 44.3%; AA Agentic Index 10.5% (all retained/confirmed); Claw-Eval / Toolathlon: still unmeasured

Reasoning / knowledge:

- GPQA Diamond: **83.5% #153** (confirmed) — below the 90% bar; HLE: **22.0% #194** (confirmed — far below the 40% reference); **CritPt: 2.6% #179** (confirmed, very weak)
- **AA-LCR: 83.3% #20** — elite within its window; **MLCR: 20.0% #19** (weak medical long-context); AIME26 94.7%; Maths 63 is its best category; LMArena Maths 1447 #80
- Honesty poor: **Omniscience −32.9 #278; non-hallucination 18.1% #298; accuracy 27.0% #199** (confirmed — poor knowledge reliability); **AA II 17.5 #251** (confirmed)
- IFBench 77% (retained); first-pass vision rows retained (MathVision 65.5%, RealWorldQA 73.9% per the Qwen comparison table)

Coding:

- **Coding 47 is its worst BenchLeader category.** SciCode 44.9% #129-138 (confirmed — below the 55% reference); **FrontierCode 1.1 (AA): 13.9% #21** (new, weak); LMArena Coding 1478 #106 / WebDev 1355 #103 (weak preference)
- SWE-bench Verified 76% and SWE-bench Pro 51.2% (BenchLM/vendor-table rows, retained — the decent rows); LiveCodeBench / Vibe / DeepSWE: still unmeasured

Long context:

- 131K window; **AA-LCR 83.3% #20** — elite measured retrieval within it; MLCR 20.0% #19; no MRCR/RULER rows.

Multimodal:

- MMMU-Pro 74.3% #107 (AA — confirmed); CharXiv 78.8%, ScreenSpot Pro 75.4%, OmniDocBench 75.8% (retained); text+image in, text out.

Preference:

- Mid-weak ranks: LMArena Text 1425 #116, Multi-turn 1431 #109, Hard 1446 #112, Maths 1447 #80, IF 1413 #118, Longer 1422 #127, Creative 1365 #149 — Human preference 61 second-best category.

### Normalized scores (1–100)

- **Tool use: 58/100.** Lowered from 62: the gaps filled weak — τ³ 23.5% #83, GDPval 14.3% #181, AutomationBench 6.8%, TB 4.0 0.5%, Analyst 20% #23 — against genuinely strong tool-ecosystem rows (MCP Atlas 75.5%, DeepSearchQA 74.6%, OSWorld 65.9%) and the decent EnterpriseOps 34.7% #13 / TB 2.1 51.7% #111.
- **Reasoning: 62/100.** Lowered from 63: GPQA 83.5%, HLE 22%, CritPt 2.6%, AA II 17.5 #251, and poor honesty (18.1% #298) are the caps — offset by AIME26 94.7%, the elite AA-LCR 83.3% #20, and Maths 63 as best category.
- **Context window: 54/100.** Held: 131K sits mid-low in the 100K-200K tier; the elite AA-LCR #20 makes it the best-in-window value but the ceiling is the ceiling.
- **Multimodal: 68/100.** Held: strong document/chart vision (CharXiv 78.8%, OmniDocBench 75.8%, ScreenSpot Pro 75.4%, MMMU-Pro 74.3%) with text+image in, text out.
- **Coding: 58/100.** Lowered from 64: SciCode 44.9% below the reference, FrontierCode 13.9% #21, Coding 47 as worst category, and weak arena coding preference — against the retained SWE-V 76% / SWE-Pro 51.2% rows.
- **Cost efficiency: 92/100.** Raised from 88: hosted pricing resolved at $0.30/$1.20 with 123 tok/s, and the self-host story is best-in-class — Apache 2.0, under 20GB at 4-bit on a single consumer GPU, with a bundled speculative decoder.
- **Overall Score: 60/100.** (58 + 62 + 54 + 68 + 58) / 5 = 60.0, down from 62. Best-fit: the strongest single-GPU self-host agent base — Apache 2.0, sub-20GB, best-in-window retrieval (#20 AA-LCR), solid document vision, and real tool-ecosystem coverage — but its knowledge reliability is poor (never trust facts unverified), the 131K window is small, and the 2026 agent/coding suites (τ³, TB 4.0, SciCode) measured at the floor; use it for local agent harnesses where a 30B fits, not as a knowledge or deep-coding engine.

---

## Signature

- Provided by: **GLM 5.3 (z-ai/glm-5.3)** — 2026-10-13
- Method: public internet research, second pass over the 2026-09-24 report (BenchLeader profile as of 2026-10-08 aggregating Artificial Analysis, Epoch AI Benchmarking Hub, LMArena; two DeepInfra/Together provider rows resolving hosted pricing; DDG-lite searches surfacing mer.vin's first-since-Llama-4 and DFlash-drafter reporting, DataCamp/codersera/miraflow/luonghongthuan/analyticsinsight/techshark/theairankings/theaitoolsbox launch coverage — the 2026-08-10 date, Apache 2.0 with no MAU cap, ~29.6B dense architecture, and the sub-20GB single-GPU quantization story; the first-pass rows, which the settled AA harness confirmed nearly verbatim, retained where not contradicted); scores are normalized 1-100 interpretations, not official vendor scores.
- Future sources: add a new file next to this one, e.g. `GPT_5.md`, using the same headings.
