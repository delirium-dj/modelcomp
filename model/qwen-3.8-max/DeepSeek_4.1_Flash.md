# Qwen3.8-Max — findings by DeepSeek 4.1 Flash

- Source: Alibaba Cloud (Qwen team) / Qwen3.8-Max (`qwen3.8-max-0902`)
- Date: 2026-10-16 (UTC) — rewrite; re-verified 2026-10-18; re-researched 2026-11-06
- Overview and scoring methodology: `../../model-comparison.md`
- Cross-model signed log: `../../model-findings.md`

> **Re-research pass — 2026-11-06** (second pass, user-requested). Fresh sources this pass: BenchLM (**new page** — `qwen3-8-max`, **67 rows**, **64.95/100, #33 of 1015**; no page existed on 2026-10-18), Qwen launch blog, Artificial Analysis, Vals AI, Epoch AI.
> **Newly captured rows:** **Terminal-Bench 2.1 (Vals) 67.4%** (vs the vendor's 86.6% — a large harness gap); OSWorld 2.0 **19.4%** (weak); WebArena-Verified 66.8%; **AndroidWorld 85.3%** / MobileWorld 77.8% (strong mobile-agent rows); CoWorkBench 74.8%; SkillsBench 70.2%; Hermes 36.2/70.5; MazeBench 0%; FrontierMath v2 **74.737% T1–3 / 46.341% Tier-4**; OpenHarmony 60.8%; QwenReactBench 1724; Bug Hunt 25.7 fixes.
> **Re-verified unchanged:** TB2.1 86.6% (vendor); TB4.0 34.34% / 39%; OSWorld-Verified 86.1%; Toolathlon 72.5%; IFBench 82.8%; GDPval-AA 1671 Elo; GPQA 92.6% / 93.7% (Vals); HLE 43.6% / 56.2% w/ tools; MMLU-Pro 88.6% (Vals); MMMU-Pro 88.03% (Vals) / 82.3%; MRCRv2 92.9%; SWE-bench 85.6% (Vals); LiveCodeBench 87.9%; DeepSWE 56.6%; pricing $2/$6.
> **No score change:** frontier-adjacent tooling at value pricing, with the harness-sensitive coding signal; scores held at 86.
> Sources this pass: https://benchlm.ai/models/qwen3-8-max · https://qwen.ai/blog?id=qwen3.8 · https://www.vals.ai/models/alibaba_qwen3.8-max · https://artificialanalysis.ai/models/qwen3-8-max-0803

> **Re-verified 2026-10-18.** BenchLM had **no page** for `qwen-3.8-max` (404) at that time; no new independent benchmark surfaced. **No score change.**

> **Rewrite pass — 2026-10-16** (≥3 independent sources). Re-sourced: Vals Index 48.27% (#34/47), SWE-bench 85.60% (#17/88), LiveCodeBench 87.85% (#10/143), GPQA 93.69% (#6/138), MMLU-Pro 88.60%, MMMU-Pro 88.03% (#12/93), TB4.0 34.34% (#15/47), TB-Science 12.86%, Vibe Code Bench v1.1 64.70%, CyberBench v1.1 28.57% (#47/47 — last), Code Migration 23.96%, SAGE 51.25%, Finance Agent v2 50.59%, Legal Research 47.60%, Harvey Legal 10.42%, ProofBench 58.00%, TaxEval v2 75.55%, $4.964/test. AA (0902): Index 45, AA-Briefcase 1621, GDPval-AA 1671, AutomationBench 56%, TB4.0 39%, SciCode 52%, HLE 43%, GDP.pdf 23%, CritPt 18%, 37.9–41 tok/s. Vendor: TB2.1 86.6% (Claude Code harness), SWE-bench Pro 67.7%, DeepSWE 56.6%, FrontierSWE 73.5%, GPQA 92.6%, HLE 43.6%/56.2% tools, OSWorld-Verified 86.1%, IFBench 82.8%, PaperBench 93.0, JobBench 53.4%, MMMU-Pro 82.3%, MRCRv2 92.9%, VideoMME (subs) 90.4, OmniDocBench 92.1. Open weights `Qwen/Qwen3.8-2.4T-A95B` (text-only). Pricing $2/$6 (Intl) or $1.65/$4.95 (CN/SG), cached $0.25. Conflicts surfaced: AA-index spread; hosted-vs-openweights modality split; context 262K native/1.01M ext vs 984K vs 1M hosted; pricing spread; mixed coding signal (CyberBench last-of-47, Vibe Code 1–100 12.83).

## Model card

- **Name:** Qwen3.8-Max (dated checkpoint `qwen3.8-max-0902`; earlier `0803` snapshot deprecated on AA)
- **Short description:** Alibaba Cloud's flagship 2.4T-parameter sparse MoE (~95B active), preview 2026-07-19, GA 2026-08-03; competes with OpenAI/Anthropic frontier models on reasoning and a 1M multimodal window at a flat $2/$6. Ranks #5 Text Arena and #2 Vision Arena (Alibaba). No public safety/training model card.
- **Provider / access:** Alibaba Cloud Model Studio (hosted multimodal API); separate text-only open-weight checkpoint `Qwen/Qwen3.8-2.4T-A95B`. Third-party resellers (DeepInfra, Novita, AIMLAPI).
- **Release / knowledge:** preview 2026-07-19; GA 2026-08-03 (weights ~2026-08-11); knowledge cutoff not published.
- **IDs:** `qwen3.8-max-0902`; open weights `Qwen3.8-2.4T-A95B`.
- **Context window:** 262,144 native, extensible to 1,010,000 (HF card); hosted Max ~1M (991,808 in / 131,072 out; max reasoning budget 262K).
- **Modalities:** text, image and video input (hosted Max); text out; thinking/non-thinking modes; tools/structured output; no audio; the open-weights checkpoint is text-only.
- **Pricing (as of 2026-11-06):** flat **$2.00 in / $6.00 out** per 1M (International); China/Singapore **$1.65 / $4.951**; implicit cache $0.25 (or $0.206); explicit cache create $2.50 / hit $0.17; one-time 1M free quota.
- **Architecture:** sparse MoE, **2.4T total / 95B active**, hybrid Gated DeltaNet/Gated Attention, 512 experts (10 routed + 1 shared), MTP.

### Raw benchmarks found

Agent / tool use:

- Terminal-Bench 2.1 **86.6%** (vendor, Claude Code harness) / **67.4% (Vals)** — large harness gap; OSWorld-Verified **86.1%** / OSWorld 2.0 **19.4%**; Terminal-Bench 4.0 **34.34% / 39%** (Vals / AA); TB-Science 12.86%
- Toolathlon-Verified 72.5%; IFBench 82.8%; WideResearch 81.9%; Agents' Last Exam 52.4%; JobBench 53.4%; CoWorkBench 74.8%; SkillsBench 70.2%; Parametric CAD 91.5
- **AndroidWorld 85.3% / MobileWorld 77.8%** (mobile agents); WebArena-Verified 66.8%; Hermes 36.2/70.5; MazeBench 0%
- GDPval-AA v2.1 **1671 Elo**; AA-Briefcase 1621; Finance Agent v2 50.59%; CyberBench v1.1 **28.57% (#47/47)** — the weakest agentic row
- E-Commerce Bench (365-day sim): grew ¥100K → ¥416,252 (4.16×); LMArena #5 Text / #2 Vision

Reasoning / knowledge:

- GPQA Diamond **92.6%** (vendor) / **93.69%** (Vals, #6); HLE **43.6%** / 56.2% with tools; MMLU-Pro 88.6% (Vals #18)
- PaperBench 93.0; MRCRv2 **92.9%**; LongBench v2 66.3%; FrontierMath v2 **74.737% T1–3 / 46.341% Tier-4**; SciCode 52% (AA); CritPt 18% (AA)
- AA Intelligence Index **45** (0902) / 40 (deprecated 0803); AA-Omniscience: no verified public score found

Coding:

- SWE-bench **85.60%** (Vals, #17/88); SWE-bench Pro **67.7%** (vendor); DeepSWE 1.1 **56.6%**; FrontierSWE 73.5% / FrontierSWE v2 15.8%
- LiveCodeBench **87.9%** (Vals); NL2Repo 55.9%; Code Migration 23.96% (Vals); Vibe Code Bench v1.1 64.70%; Vibe Code Bench 1–100 12.83% (#19/22)
- MLS-Bench Lite 41.0%; VulcanBench v3 81.2%; OpenHarmony 60.8%; ProgramBench 0.0%; QwenReactBench 1724; Bug Hunt 25.7 fixes

Multimodal / long context:

- MMMU-Pro **88.03%** (Vals) / 82.3%; MathVision 95.2% / 97.7% Python; CharXiv 93.5% (88.4% w/o tools); ScreenSpot-Pro 84.5%; VideoMME (subs) **90.4**; VideoMMMU 88.7%; LVBench 81.8%; OmniDocBench 92.1; Vision2Web 69.0; RealWorldQA 88.0
- MRCRv2 92.9%; LongBench v2 66.3%; no RULER/GraphWalks.

### Normalized scores (1–100)

- **Tool use: 85/100.** TB2.1 86.6% (vendor), OSWorld-Verified 86.1%, AA TB4.0 39% and the new AndroidWorld 85.3% / MobileWorld 77.8% mobile-agent rows make it a capable agent; capped by TB2.1-Vals 67.4%, OSWorld 2.0 19.4%, CyberBench last-of-47 and ~38 t/s throughput.
- **Reasoning: 85/100.** GPQA 92.6–93.69%, PaperBench 93.0 and MMLU-Pro 88.6% are strong; HLE 43.6%, FrontierMath T4 46.3% and the independent AA Index of 45 (40 on the deprecated snapshot) show a gap to the frontier.
- **Context window: 96/100.** Full 1M hosted window with 131K output and MRCRv2 92.9%; native context is 262K and no full-window retrieval benchmark exists.
- **Multimodal: 85/100.** Text + image + video input with a #2 Vision Arena placement and MMMU-Pro 88.03% (Vals); no audio, text-only output, and the open-weights checkpoint is text-only.
- **Coding: 81/100.** Vals SWE-bench 85.6% and vendor TB2.1 86.6% pull up, while DeepSWE 56.6%, FrontierSWE v2 15.8% and Vibe Code Bench 1–100 12.83 keep it mid-band.
- **Cost efficiency: 84/100.** Flat $2/$6 (and $1.65/$4.95 in-region) across a 1M window undercuts frontier rivals; no permanent free tier and ~38 t/s raises per-task wall-clock cost.
- **Overall Score: 86/100.** (85 + 85 + 96 + 85 + 81) / 5 = 86.4 → 86. Best fit: large-context multimodal agent/document workloads needing frontier-adjacent tool scores at a fraction of frontier per-token prices.

---

## Signature

- Provided by: **DeepSeek 4.1 Flash (deepseek-ai/deepseek-v4.1-flash)** — 2026-11-06
- Method: re-research pass (user-requested second pass) over public internet research (Qwen launch blog, BenchLM new model page 2026-11-05, Artificial Analysis, Vals AI, Epoch AI). Captured the Vals TB2.1 gap, OSWorld 2.0, mobile-agent and FrontierMath rows; scores held. Scores are normalized 1–100 interpretations, not official vendor scores.
- Reference URLs:
  - [Qwen — Qwen3.8-Max release](https://qwen.ai/blog?id=qwen3.8)
  - [BenchLM — Qwen3.8 Max benchmark scores](https://benchlm.ai/models/qwen3-8-max)
  - [Vals AI — Qwen3.8 Max](https://www.vals.ai/models/alibaba_qwen3.8-max)
  - [Artificial Analysis — Qwen3.8 Max (0803)](https://artificialanalysis.ai/models/qwen3-8-max-0803)
  - [Hugging Face — Qwen3.8-2.4T-A95B](https://huggingface.co/Qwen/Qwen3.8-2.4T-A95B)
- Future sources: add a new file next to this one, e.g. `GPT_5.md`, using the same headings.
