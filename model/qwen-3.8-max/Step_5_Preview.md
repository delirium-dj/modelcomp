# Qwen 3.8 Max — findings by Step 5 Preview

- Source: Alibaba Cloud `qwen-3.8-max`
- Date: 2026-10-10 (UTC) — second-pass verification
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

- Terminal-Bench 2.1: **88.76%** (Artificial Analysis, independent, 0902 snapshot 2026-09-29) / **67.4%** (Vals AI Terminus-2, independent — reported 2026-09-28) — a large harness split; the strongest AA result vs a much lower Vals run
- Terminal-Bench 4.0: **34.3%** (Vals AI mini-swe-agent, independent — reported 2026-10-06)
- DeepSWE 1.1: **57.0%** (Datacurve, independent) / **56.6%** (Alibaba) / **53.1%** (Mercor mini-swe-agent, independent) — mid-tier, well below the 74% frontier ref
- APEX-Agents Original: **63.3%** (Mercor, independent — reported 2026-10-07)
- BrowseComp 130-q: **67.9%** (Mercor web-research agent, independent — reported 2026-10-07)
- Vibe Code Bench 1.1: **64.7%** (Vals AI, independent — reported 2026-10-06)
- IFBench (instruction following): **82.8%** (vs GPT-5.6 Sol 72.7%)
- CharXiv: **94.1%** (Mercor single-shot, independent)
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


- **Tool use: 82/100.** Terminal-Bench 2.1 88.76% (independent, the strongest still-ranked result) and IFBench 82.8% (well ahead of GPT-5.6 Sol) are strong. Capped by the vendor-only Toolathlon, AA-AnalystAgent trailing Opus 5.5/Fable 5.1, and no live OSWorld/Tau-bench exact row — agentic breadth is real but not uniformly frontier.
- **Reasoning: 84/100.** GPQA 92.6–93.69% is near-ceiling and HLE 43.6% clears the 40% bar. Capped hard by the AA Intelligence Index of 40 (well below frontier 57–62), the saturated-board status of the headline GPQA/SWE/LiveCode numbers, and independent HLE trailing most frontier peers (including Opus 5.5 by −18.3) — vendor claims outrun the independent picture.
- **Context window: 95/100.** 1M input / 131K output at one flat rate (no tiered step-up) — solidly in the ≥1M tier, and the 131K output is generous. Not a full 100 because no explicit MRCR ≥98%-at-512K retrieval figure was published.
- **Multimodal: 88/100.** Text + image + video in with Arena.AI #2 globally on multimodal human-preference (behind only Claude Fable 5) — hits the 90–100 input band; held to 88 by text-only output and no live MMMU row.
- **Coding: 82/100.** SWE-bench Verified 85.6% and LiveCodeBench 87.85% look frontier, but both sit on retired/saturated boards; the harder SWE-bench Pro is only 67.7%, independent DeepSWE is 53.1–57.0% (well below the 74% frontier ref), Vibe Code 64.7%, and TB4.0 34.3%. Terminal-Bench 2.1 is harness-split (88.76% AA vs 67.4% Vals). Vendor coding claims outrun the independent evidence.
- **Cost efficiency: 88/100.** $2/$6 per 1M (Singapore; cheaper elsewhere) at one flat rate across the full 1M window, plus a one-time 1M-token free quota. Under the rubric's ~$1.25/$4.25=88 anchor. No permanent free tier.
- **Overall Score: 86/100.** Mean of the five non-cost dims (82+84+95+88+82)/5 = 86.2. Best fit as a cheap, flat-priced, 1M-context multimodal model for large-context agentic workloads at frontier-undercutting prices; note the gap between Alibaba's headline numbers (many on saturated boards) and the more sobering independent results (TB2.1 67.4% Vals, DeepSWE ~55%, Vibe Code 64.7%).

---

## Signature

- Provided by: **Step 5 Preview (opencode/step-5-preview)** — 2026-10-10
- Method: public internet research; scores are normalized 1–100 interpretations, not official vendor scores. Second-pass verification (2026-10-10) cross-referenced benchmarkregistry.org (42 primary-source results, updated 2026-10-07 — independent TB2.1 67.4% Vals vs 88.76% AA, DeepSWE 53.1–57.0%, TB4.0 34.3%, Vibe Code 64.7%, APEX 63.3%, BrowseComp 67.9%), confirming the vendor-vs-independent gap; also corrected an Overall-arithmetic typo (Multimodal 88, mean 86.2). No score change warranted. Prior pass (2026-10-08) used Alibaba + Artificial Analysis (via hokai.io) and themodelgap.com.
- Future sources: add a new file next to this one, e.g. `GPT_5.md`, using the same headings.
