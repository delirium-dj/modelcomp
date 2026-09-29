# GLM-5.3-Flash — findings by Kimi K3

- Source: Z.AI / GLM-5.3-Flash (`glm-5.3-flash` / `glm-5.3-flashx`; open weights `zai-org/GLM-5.3-Flash`)
- Date: 2026-09-29 (UTC)
- Overview and scoring methodology: `../../model-comparison.md`
- Cross-model signed log: `../../model-findings.md`

## Model card

- **Name:** GLM-5.3-Flash / GLM-5.3-FlashX
- **Short description:** Z.AI's Flash-class MoE — first natively multimodal model in the GLM-5 series, and first open-source frontier model combining sparse + linear attention (IndexPool). 320B total / 18B active; approaches Claude Opus 4.8 on coding/agentic benchmarks at ~one-tenth the price; AA Intelligence Index v4.1.1 = 57 at $0.045/task (vendor). Served anonymously as "ox-alpha" on OpenCode/OpenRouter pre-release.
- **Provider / access:** Z.AI API (`glm-5.3-flash`, `glm-5.3-flashx`); OpenCode Zen `opencode/glm-5.3-flash` (free Zen tier available per catalog); open weights HF `zai-org/GLM-5.3-Flash`; GLM Coding Plan with 3× quota vs GLM-5.3.
- **Release / knowledge:** 2026-08-26 (z.ai/blog/glm-5.3-flash; llm-stats; aireleasetracker). Knowledge cutoff not verified. 30T-token multimodal pre-training corpus.
- **IDs:** `glm-5.3-flash` / `glm-5.3-flashx` (Z.AI API); `opencode/glm-5.3-flash` (Zen); `zai-org/GLM-5.3-Flash` (HF weights).
- **Context window:** **1M tokens native**, 128K max output (docs.z.ai model card). Zen deployment listed at 204K in repo catalog (deployment cap).
- **Modalities:** video / image / text / file in; text out (docs.z.ai). Native visual coding (observe → implement → render → refine loop), GUI/computer use (BUA/CUA), video understanding/editing. Thinking always on; tool calls; JSON mode; context caching.
- **Pricing (as of 2026-09-29):** $0.15 in / $0.50 out per 1M, $0.03 cached input (llm-stats); Coding-Plan quota 3× flagship. Open weights (license not independently verified this pass).
- **Architecture:** 320B total / 18B active MoE; hybrid sparse+linear attention, Manifold-Constrained Hyper-Connections (mHC), 45 layers; 3.0× less attention compute and 4.4× smaller KV cache than GLM-5.3; FlashX serving variant at ~200 tok/s.

### Raw benchmarks found

Agent / tool use:

- Terminal-Bench 2.1: **60.7** (+14.5pp vs GLM-5.2 in vendor's newer harness) (z.ai blog)
- τ³-Bench Telecom: **55.8** (#1 overall among compared) (z.ai blog)
- MCP-Universe: **50.3** (≈ Opus 4.8 53.0, Fable 5 52.7, GPT-5.6 50.9) (z.ai blog)
- CyberGym: **26.7**; CVE-Bench: **9.0**; SecCodePLT+: **40.5** (z.ai blog)
- DeepSWE v1.1: **63.4** vs GLM-5.2 46.2 (z.ai blog); AutomationBench: **48.8** vs GLM-5.2 26.2 (z.ai blog)
- Tau3-Banking / Claw-Eval / GDPval-AA: no verified public score found (prior benchlm.ai rows not reverified)

Reasoning / knowledge:

- Artificial Analysis Intelligence Index **v4.1.1: 57** at **$0.045 per task** (discounted) — vendor-cited Pareto frontier (docs.z.ai / z.ai blog)
- HLE w/ tools: **38.9** (vendor) (z.ai blog)
- BrowseComp-ZH: **68.5** (z.ai blog)
- GPQA / LCR / CritPt / Omniscience: no verified public score found

Coding:

- SWE-bench Pro: **47.9** (z.ai blog)
- Z.ai Code Bench v1.0 (Claude Code 2.1.207, max effort): **29.0** vs GLM-5.2 13.2, Opus 4.8 29.5 — near-parity with Opus at max effort (docs.z.ai)
- DeepSWE v1.1: **63.4**; AutomationBench **48.8** (z.ai blog)
- SWE-bench Verified / LiveCodeBench / SciCode: no verified public score found

Long context:

- 1M-token context with IndexPool-compressed sparse attention; vendor claims long-context quality preserved at 3–4.4× lower cost (docs.z.ai). MRCR/RULER: no verified public score found.

Multimodal:

- Native video/image/file input with visual-in-the-loop coding (frontend, Godot game prototypes, Blender 3D from descriptions, CAD reproduction via build123d, Office PPTX/DOCX/XLSX deliverables, long-video editing) (docs.z.ai best-practices). Numeric vision benchmarks (CharXiv/MMVU): no verified public score found in this pass.

### Normalized scores (1–100)

- **Tool use: 80/100.** τ³-Telecom 55.8 (#1), MCP-Universe 50.3 ≈ Opus-class, TB 2.1 60.7 (+14.5pp gen-over-gen); capped by CyberGym 26.7 and missing GDPval/Toolathlon rows.
- **Reasoning: 84/100.** AA Intelligence Index v4.1.1 = 57 — above the 45-anchor class; HLE w/ tools 38.9; capped by missing GPQA/LCR verification.
- **Context window: 95/100.** True 1M native + 128K output with cost-optimized long-context architecture; held at band floor by absent max-window retrieval measurements.
- **Multimodal: 75/100.** Native video+image+file input with GUI/computer-use closed loops — top of the image-in band; text-only output caps it.
- **Coding: 84/100.** SWE-bench Pro 47.9, DeepSWE 63.4, vendor Code Bench 29.0 ≈ Opus 4.8 (29.5) at max effort; SWE-bench Verified not published.
- **Cost efficiency: 96/100.** $0.15/$0.50 per 1M ($0.03 cached) and $0.045/AA-task — ~10× cheaper than flagship-class peers; free Zen tier available.
- **Overall Score: 84/100.** Mean of the five quality dims (80+84+95+75+84)/5 = 83.6 → 84. Best fit: multimodal agentic coding at Flash cost — the price/performance pick of the GLM-5.3 family.

---

## Signature

- Provided by: **Kimi K3 (moonshotai/kimi-k3)** — 2026-09-29
- Method: fresh public web research (z.ai/blog/glm-5.3-flash, docs.z.ai/guides/vlm/glm-5.3-flash, llm-stats pricing); scores are normalized 1–100 interpretations, not official vendor scores. Reverified 2026-09-29: rewrote around vendor-official numbers — AA Index corrected 41.8 → 57 (v4.1.1, vendor), TB 2.1 84.3 → 60.7 (vendor's newer harness), dropped unverifiable benchlm-only rows (GDPval 1773, Toolathlon 78.4, CharXiv 89.4, SWE-bench "Vals" 92.0); confirmed 1M/128K spec, native video/image/file modalities, 320B/18B architecture, $0.15/$0.50 pricing, 2026-08-26 release and "ox-alpha" stealth period; Cost 85 → 96, Multimodal 78 → 75 (band), Context 84 → 95; Overall 82 → 84.
- Future sources: add a new file next to this one using the same headings.
