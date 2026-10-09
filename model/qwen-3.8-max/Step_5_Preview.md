# Qwen 3.8 Max — findings by Step 5 Preview

- Source: Alibaba Cloud `qwen-3.8-max`
- Date: 2026-10-08 (UTC)
- Overview and scoring methodology: `../../model-comparison.md`
- Cross-model signed log: `../../model-findings.md`

## Model card

- **Name:** Qwen3.8 Max (`qwen-3.8-max`; Alibaba Cloud's flagship; open-weight arch `Qwen3.8-2.4T-A95B`)
- **Short description:** Alibaba Cloud's flagship 2.4T-parameter MoE (95B active) built to compete with closed frontier labs on reasoning and raw context capacity while undercutting them on price. Native multimodal (text/image/video in), 1M context at one flat rate.
- **Provider / access:** Alibaba Cloud Model Studio (hosted API, proprietary); open-weight checkpoint on Hugging Face (`Qwen/Qwen3.8-2.4T-A95B`) under a restricted custom license (text-only, thinking-forced, 262K context — not a drop-in for the hosted API). New Model Studio activations get a one-time 1M-token free quota (Singapore region).
- **Release / knowledge:** Preview 2026-07-19 (WAIC Shanghai); GA 2026-08-03. Hosted endpoint serves the 0902 snapshot since 2026-09-05. No published knowledge cutoff or safety model card.
- **IDs:** `qwen-3.8-max` (Model Studio). No permanent free tier (one-time 1M quota only).
- **Context window:** 1,000,000 (1M) input (991,800 non-thinking / 983,610 thinking) + 131,072 output, at one flat rate (no tiered step-up).
- **Modalities:** Text, image, video in; text out (text-only output at launch). Reasoning yes (preserved thinking mode default — multi-turn clients must return full unmodified reasoning_content); tool calls yes; JSON yes.
- **Pricing (as of 2026-10-08):** $2.00/M in · $6.00/M out (Singapore endpoint; Beijing/Frankfurt/Virginia/Tokyo/HK cheaper at $1.65/$4.951). One-time 1M-token free quota.
- **Architecture:** Sparse MoE, 2.4T total / 95B active, Qwen3.5 architecture + hybrid attention.

### Raw benchmarks found

> Cross-referenced hokai.io (Alibaba + Artificial Analysis) and themodelgap.com (10/12 independent runs + noise-band analysis). Independent runs preferred; note many headline numbers sit on retired/saturated boards.

Agent / tool use:

- Terminal-Bench 2.1: **88.76%** (Artificial Analysis, independent, 0902 snapshot 2026-09-29 — the strongest still-ranked independent result; ahead of Opus 4.8/Fable 5 at 84.6%, behind GPT-5.6 Sol 88.8%)
- IFBench (instruction following): **82.8%** (vs GPT-5.6 Sol 72.7%)
- Toolathlon-Verified: vendor-reported (Alibaba self-report, the one agentic number still not independently run)
- AA-AnalystAgent (spreadsheet/document): trails Claude Opus 5.5 −11.3, Fable 5.1 −12.5 (independent)
- PaperBench (research/agentic): **93.0** (Alibaba; ahead of GPT-5.6 Sol 90.5, Fable 5 88.8, Opus 4.8 80.3)

Reasoning / knowledge:

- GPQA Diamond: **92.6%** (Alibaba) / **93.69%** (Vals AI) — but on a board retired as saturated (themodelgap)
- Humanity's Last Exam (no tools): **43.6%** (Alibaba); independent runs trail Step 5 Preview −3.4, Kimi K3 −3.8, Gemini 3.1 Pro −3.9, Muse Spark 1.3 −5.6, Claude Opus 5.5 −18.3 (themodelgap)
- Artificial Analysis Intelligence Index: **40** — well below frontier 57–62
- LiveBench Composite: trails Muse Spark 1.3 −3.1, GPT-6.1 Sol −3.1, Opus 5.5 −4.7, Fable 5.1 −4.9 (independent)
- AIME 2025: not surfaced live for 3.8 Max — treated as provisional

Coding:

- SWE-bench Verified: **85.6%** (Vals AI) — but on a board retired as saturated (themodelgap)
- LiveCodeBench: **87.85%** — also on a retired/saturated board
- SWE-bench Pro: **67.7%** (Alibaba; vs Fable 5 80.0%) — mid-tier on the harder diverse suite
- DeepSWE: trails Kimi K3 −12, GLM-5.3 −12, Gemini 3.8 Flash −17, GPT-6 Astra −17 (independent)
- Terminal-Bench 2.1: **88.76%** (see tool use — the strongest still-ranked coding result)
- Terminal-Bench 4.0 (Vals AI, added 2026-10-08): covered by themodelgap but exact value not surfaced live

Multimodal:

- Text + image + video in; text out.
- Arena.AI blind pairwise human-preference: **#2 globally on multimodal tasks** (behind only Claude Fable 5)

Long context:

- 1M input / 131K output at one flat rate. No explicit MRCR ≥98%-at-512K figure published.

### Normalized scores (1–100)
