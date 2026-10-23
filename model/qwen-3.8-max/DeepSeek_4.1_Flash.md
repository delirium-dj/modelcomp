# Qwen3.8-Max — findings by DeepSeek 4.1 Flash

- Source: Alibaba Cloud (Qwen team) / Qwen3.8-Max (`qwen3.8-max-0902`)
- Date: 2026-10-16 (UTC) — rewrite pass (previous Signature 2026-10-09); re-verified 2026-10-18
- Overview and scoring methodology: `../../model-comparison.md`
- Cross-model signed log: `../../model-findings.md`

> **Re-verified 2026-10-18.** BenchLM has **no page** for `qwen-3.8-max` (404); no new independent benchmark surfaced and the prior deep-pass rows stand. **No score change.**

> **Rewrite pass — 2026-10-16** (≥3 independent sources).
> Re-sourced this pass. Vals AI: **Vals Index 48.27% (#34/47)**, **SWE-bench 85.60% (#17/88)**, **LiveCodeBench 87.85% (#10/143)**, **GPQA Diamond 93.69% (#6/138)**, **MMLU-Pro 88.60% (#18/138)**, **MMMU-Pro 88.03% (#12/93)**, **Terminal-Bench 4.0 34.34% (#15/47)**, Terminal-Bench Science 12.86%, Vibe Code Bench v1.1 64.70%, Vibe Code Bench 1–100 12.83% (#19/22), CyberBench v1.1 **28.57% (#47/47, last)**, Code Migration 23.96%, SAGE 51.25% (#14/91), Finance Agent v2 50.59%, Legal Research Bench 47.60%, Harvey Legal Agent 10.42%, ProofBench v1.1 58.00%, TaxEval v2 75.55%; cost/test **$4.964**, latency ~101 min. Artificial Analysis (0902): **Intelligence Index 45** with AA-Briefcase 1621, **GDPval-AA v2.1 1671 Elo**, AutomationBench-AA 56%, Terminal-Bench 4.0 39%, SciCode 52%, HLE 43%, GDP.pdf 23%, CritPt 18%; **37.9–41 tok/s**, ~$1.18 blended. Vendor (Qwen/HF/Alibaba Cloud): Terminal-Bench 2.1 **86.6%**, SWE-bench Pro 67.7%, DeepSWE 1.1 56.6%, FrontierSWE 73.5%, GPQA 92.6%, HLE 43.6% / 56.2% with tools, OSWorld-Verified **86.1%**, IFBench 82.8%, PaperBench 93.0, JobBench 53.4%, MMMU-Pro 82.3%, MRCRv2 **92.9%**, VideoMME (subs) **90.4**, Parametric CAD 91.5, OmniDocBench 92.1. Open weights `Qwen/Qwen3.8-2.4T-A95B` (text-only). Pricing $2/$6 (International) or $1.65/$4.95 (China/Singapore), cached $0.25 (or $0.206).
> **Conflicts surfaced:** (1) **AA Intelligence Index rebase** — **45 (0902, v4.2/v4.3)**, **40 (0803 default snapshot, v4.3.2, "#53/227")**, 47, and a stray 58 on one comparison page — not comparable across versions/snapshots. (2) **Modalities** — hosted Max is **image+video in**, but the open-weights checkpoint is **text-only, thinking-only**. (3) **Context** — 262,144 native / extensible to 1,010,000 (HF card) vs 984K (AA) vs 1M hosted (991,808 in / 131,072 out). (4) **Pricing** — $2/$6 official vs $1.65/$4.95 cheapest third-party vs $2.6/$7.8 (AIMLAPI). (5) **Coding signal is mixed** — Vals SWE-bench 85.6% and vendor TB2.1 86.6% are near-frontier, but DeepSWE 56.6% is below the 74% ref, CyberBench is **last of 47**, Vibe Code Bench 1–100 is 12.83, and TB2.1 uses a different harness than its baselines.
> Sources: https://qwen.ai/blog?id=qwen3.8 · https://www.alibabacloud.com/help/en/model-studio/qwen3-8-2-4t-a95b · https://www.vals.ai/models/alibaba_qwen3.8-max · https://artificialanalysis.ai/models/qwen3-8-max-0803 · https://artificialanalysis.ai/models/comparisons/qwen3-8-max-vs-qwen3-5-122b-a10b · https://datanorth.ai/news/alibaba-releases-qwen3-8-max · https://llm-stats.com/models/compare/qwen3.7-max-vs-qwen3.8-max

## Model card

- **Name:** Qwen3.8-Max (dated checkpoint `qwen3.8-max-0902`; an earlier `0803` snapshot is deprecated on AA)
- **Short description:** Alibaba Cloud's flagship 2.4T-parameter sparse MoE (~95B active), preview 2026-07-19, GA 2026-08-03; competes with OpenAI/Anthropic frontier models on reasoning and a 1M multimodal window at a flat $2/$6. Ranks #5 Text Arena and #2 Vision Arena (Alibaba). No public safety/training model card.
- **Provider / access:** Alibaba Cloud Model Studio (hosted multimodal API); separate text-only open-weight checkpoint `Qwen/Qwen3.8-2.4T-A95B` (Qwen3.8-Max license). Third-party resellers (DeepInfra, Novita, AIMLAPI).
- **Release / knowledge:** preview 2026-07-19; GA 2026-08-03 (weights opened ~2026-08-11); knowledge cutoff not published.
- **IDs:** `qwen3.8-max-0902`; open weights `Qwen3.8-2.4T-A95B`.
- **Context window:** 262,144 native, extensible to 1,010,000 (HF card); hosted Max ~1M (991,808 in / 131,072 out; max reasoning budget 262K).
- **Modalities:** text, image and video input (hosted Max); text out; thinking/non-thinking modes; tools/structured output; no audio; open-weights checkpoint is text-only.
- **Pricing (as of 2026-10-16):** flat **$2.00 in / $6.00 out** per 1M (International); China/Singapore **$1.65 / $4.951**; implicit cache $0.25 (or $0.206); explicit cache create $2.50 / hit $0.17; one-time 1M free quota.
- **Architecture:** sparse MoE, **2.4T total / 95B active**, hybrid Gated DeltaNet/Gated Attention, 512 experts (10 routed + 1 shared), MTP.

### Raw benchmarks found

Agent / tool use:

- Terminal-Bench 2.1 **86.6%** (Qwen, Claude Code harness); OSWorld-Verified **86.1%**; Terminal-Bench 4.0 **34.34% / 39%** (Vals / AA); Terminal-Bench Science 12.86%
- Toolathlon-Verified 72.5%; IFBench 82.8%; WideResearch 81.9%; Agents' Last Exam 52.4%; JobBench 53.4%; Parametric CAD Bench 91.5
- GPA: GDPval-AA v2.1 **1671 Elo**, AA-Briefcase 1621; Vals Finance Agent v2 50.59%; CyberBench v1.1 **28.57% (#47/47)** — the weakest agentic row
- E-Commerce Bench (365-day sim): grew ¥100K → ¥416,252 (4.16×), +38% over GLM-5.2
- LMArena: #5 Text Arena, #2 Vision Arena (human preference)

Reasoning / knowledge:

- GPQA Diamond **92.6%** (vendor) / **93.69%** (Vals, #6); HLE **43.6%** / 56.2% with tools; HLE 43% (AA)
- MMLU-Pro 88.6% (Vals #18); PaperBench 93.0; MRCRv2 **92.9%**; LongBench v2 66.3%; SciCode 52% (AA); CritPt 18% (AA); AA-Omniscience: no verified public score found
- Artificial Analysis Intelligence Index **45** (0902 snapshot) — independent; 40 on the deprecated 0803 snapshot

Coding:

- SWE-bench **85.60%** (Vals, #17/88); SWE-bench Pro **67.7%** (vendor); DeepSWE 1.1 **56.6%** (below the 74% ref); FrontierSWE 73.5%
- LiveCodeBench **87.85%** (Vals, #10); NL2Repo 55.9%; Code Migration 23.96% (Vals); Vibe Code Bench v1.1 64.70%; Vibe Code Bench 1–100 12.83% (#19/22)
- MLS-Bench Lite 41.0%; VulcanBench v3 81.2%; FrontierSWE v2 15.8%; ProgramBench 0.0%

Multimodal:

- MMMU-Pro **88.03%** (Vals, #12) / 82.3% (vendor); MathVision 95.2%; CharXiv 93.5%; ScreenSpot-Pro 84.5%; VideoMME (subs) **90.4**; VideoMMMU 88.7%; LVBench 81.8%; OmniDocBench 92.1

Long context:

- MRCRv2 92.9% and LongBench v2 66.3% (Qwen); no RULER/GraphWalks.

### Normalized scores (1–100)

- **Tool use: 85/100.** TB2.1 86.6%, OSWorld-Verified 86.1%, AA Terminal-Bench 4.0 39% and IFBench 82.8% make it a capable agent; capped by no Tau3/Claw results, CyberBench last-of-47 and ~38 t/s throughput.
- **Reasoning: 85/100.** GPQA 92.6–93.69%, PaperBench 93.0 and MMLU-Pro 88.6% are strong; HLE 43.6% and the independent AA Index of 45 (40 on the deprecated snapshot) show a gap to the frontier.
- **Context window: 96/100.** Full 1M hosted window with 131K output and MRCRv2 92.9%; native context is 262K and no full-window retrieval benchmark exists.
- **Multimodal: 85/100.** Text + image + video input with a #2 Vision Arena placement and MMMU-Pro 88.03% (Vals); no audio, text-only output, and the open-weights checkpoint is text-only.
- **Coding: 81/100.** Vals SWE-bench 85.6% and vendor TB2.1 86.6% pull up, while DeepSWE 56.6%, FrontierSWE v2 15.8% and Vibe Code Bench 1–100 12.83 keep it mid-band.
- **Cost efficiency: 84/100.** Flat $2/$6 (and $1.65/$4.95 in-region) across a 1M window undercuts frontier rivals; no permanent free tier and ~38 t/s raises per-task wall-clock cost.
- **Overall Score: 86/100.** (85 + 85 + 96 + 85 + 81) / 5 = 86.4 → 86. Best fit: large-context multimodal agent/document workloads needing frontier-adjacent tool scores at a fraction of frontier per-token prices.

---

## Signature

- Provided by: **DeepSeek 4.1 Flash (deepseek-ai/deepseek-v4.1-flash)** — 2026-10-18
- Method: rewrite-pass public internet research (Qwen blog, Alibaba Cloud Model Studio model page, Vals AI model + comparison pages, Artificial Analysis model + comparison pages, DataNorth, LLM Stats, Alibaba Group press release, GIGAZINE). Independent Vals/AA rows were promoted over vendor-only rows; the AA-index/snapshot spread, hosted-vs-open-weights modality split and the mixed coding signal are surfaced. Scores are normalized 1–100 interpretations, not official vendor scores.
- Future sources: add a new file next to this one, e.g. `GPT_5.md`, using the same headings.
