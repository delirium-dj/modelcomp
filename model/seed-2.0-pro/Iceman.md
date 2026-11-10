# ByteDance Seed 2.0 Pro — findings by Iceman

- Source: ByteDance/Seed 2.0 Pro
- Date: 2026-11-10 (UTC)
- Overview and scoring methodology: `../../model-comparison.md`
- Cross-model signed log: `../../model-findings.md`

## Model card

- **Name:** ByteDance Seed 2.0 Pro
- **Short description:** ByteDance Seed 2.0 Pro is a closed multimodal agent-oriented model in the Seed2.0 family for reasoning, complex instruction following, task execution, and multimodal understanding (image/video input), positioned for real-world/professional workflows.
- **Provider / access:** ByteDance Seed / BytePlus ModelArk and Seed playground surfaces (per official Seed2.0 page). Local metadata lists `deepinfra/ByteDance/Seed-2.0-pro` and `noFreeId`.
- **Release / knowledge:** Seed2.0 family announced/released per Seed2.0 page (reviewed 2026-11-10). Knowledge cutoff not explicitly stated.
- **IDs:** `seed-2.0-pro` (Seed2.0 Pro, 0215 variant shown on page).
- **Context window:** 256K / 65K out (local metadata). Detailed context-window specification not explicitly extracted from reviewed Seed2.0 page.
- **Modalities:** Text, image, video input; text output (Seed2.0 page and local metadata).
- **Pricing (as of 2026-11-10):** Paid-tier pricing (local metadata); specific per-token rates not extracted from reviewed sources in this pass.
- **Architecture:** Proprietary closed model; architecture/parameter count not publicly disclosed.

### Raw benchmarks found

> Verified figures below are from ByteDance Seed’s official Seed2.0 page (https://seed.bytedance.com/en/seed2), “Seed2.0 Pro（0215）” column in the evaluation tables, unless noted. These are vendor-reported results.

Agent / tool use:

- SearchAgent: WideSearch **74.7%**, BrowseComp **77.3%**, ResearchRubrics **50.7%**, XPert Bench **64.5%**
- Real World: SkillsBench **42.3%**, GDPval **54.4%**, FinSearchComp **70.2%**, Tob-Agent **52.6%**
- CodingAgent: SWE Multilingual **71.7%**, SWE-Bench Pro **46.9%**, NL2Repo-Bench **27.9%**, PaperBench **53.8%**, Terminal Bench 2.0 **55.8%**, Vibe Coding 人工评估 **48.4%**
- Instruction Following: CL-Bench **20.8%**, MultiChallenge **68.3%**
- Tau3-Banking / MCP-Atlas / Toolathlon: **no verified public score found** in reviewed tables

Reasoning / knowledge:

- Knowledge: GPQA Diamond **88.9%**, SuperGPQA **68.7%**, HLE (no tool, text only) **32.4%**
- Reasoning: BeyondAIME **86.5%**, FrontierSci-olympiad **74.0%**, Superchem (text-only) **51.6%**, BABE **53.5%**
- Artificial Analysis Intelligence Index / BenchLM overall: **no verified public score found**

Coding:

- SWE Multilingual **71.7%**
- SWE-Bench Pro **46.9%**
- NL2Repo-Bench **27.9%**
- PaperBench **53.8%**
- Terminal Bench 2.0 **55.8%**
- Vibe Coding 人工评估 **48.4%**
- LiveCodeBench / SWE-bench Verified: **no verified public score found** in reviewed tables

Vision / multimodal (Seed2.0 Pro 0215):

- STEM: MathVision **88.8**, MMMU_Pro **78.2**, HiPhO **74.1**, MedXpertQA-MM **68.1**
- Perception: BabyVision **60.6**, VLMBias **77.4**
- Visual Knowledge: SimpleVQA **71.4**, WorldVQA **49.9**
- InfoGraphics: CharXiv-DQ **93.5**, CharXiv-RQ **80.5**
- Embodied: ERQA **68.5**
- Video (selected): VideoMMMU **86.9**, MMVU **78.2**, VideoReasonBench **77.8**, VideoHolmes **67.4**, Minerva **66.5**, VideoMME **89.5**, LongVideoBench **80.3**, LVBench **76.4**, OmniVideoBench **49.5**

Long context:

- 256K context stated in local metadata; no standalone MRCR/RULER/GraphWalks numeric long-context retrieval benchmark score extracted.

### Normalized scores (1–100)

> Derived from verified evidence above using `model-comparison.md` methodology. Overall = half-up mean of the five quality dims `(Tool + Reasoning + Context + Multimodal + Coding) / 5` (Cost excluded). Scores are based on vendor-reported Seed2.0 Pro (0215) results.

- **Tool use: 86/100.** Strong vendor-reported agent/search/real-world task results (BrowseComp 77.3%, WideSearch 74.7%, GDPval 54.4%, FinSearchComp 70.2%, Tob-Agent 52.6%) indicate capable agentic/workflow performance, with room for improvement on complex instruction benchmarks (CL-Bench 20.8%).
- **Reasoning: 86/100.** Solid reasoning/knowledge results (GPQA Diamond 88.9%, BeyondAIME 86.5%, FrontierSci-olympiad 74.0%, SuperGPQA 68.7%, HLE text-only 32.4%) suggest strong but not top-frontier reasoning across domains.
- **Context window: 83/100.** 256K context is useful for many professional tasks but below 500K–1M leaders; limited public long-context retrieval benchmark evidence in reviewed sources.
- **Multimodal: 89/100.** Broad and strong vendor-reported multimodal performance (text/image/video input) across STEM/vision/video benchmarks (MathVision 88.8, MMMU_Pro 78.2, CharXiv-RQ 80.5, VideoMME 89.5, VideoReasonBench 77.8) indicates high multimodal capability.
- **Coding: 84/100.** Good coding-agent results (SWE Multilingual 71.7%, Terminal Bench 2.0 55.8%, PaperBench 53.8%) but moderate SWE-Bench Pro (46.9%) and NL2Repo-Bench (27.9%) cap the score.
- **Cost efficiency: 78/100.** Paid-tier/closed model with pricing not clearly extracted in this pass; value likely depends on provider pricing and compared to open/low-cost alternatives.
- **Overall Score: 86/100.** Mean of the five non-cost dims (86, 86, 83, 89, 84) = 85.6 → 86. Best fit for multimodal agentic and professional workflows (vision/video understanding, search/research tasks) where ByteDance platform integration and 256K context are sufficient.

---

## Signature

- Provided by: **Iceman (opencode/iceman-free)** — 2026-11-10
- Method: Independent public research using alternative web access (`webfetch`) to ByteDance Seed official Seed2.0 page; scores are normalized 1–100 interpretations from vendor-reported benchmark figures, not official vendor scores.
- Reference URLs:
  - [Seed2.0 official page (ByteDance Seed)](https://seed.bytedance.com/en/seed2)
- Future sources: add a new file next to this one, e.g. `GPT_5.md`, using the same headings.
