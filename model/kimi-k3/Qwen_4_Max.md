# Kimi K3 — findings by Qwen 4 Max

- Source: Moonshot AI/kimi-k3
- Date: 2026-11-11 (UTC)
- Overview and scoring methodology: `../../model-comparison.md`
- Cross-model signed log: `../../model-findings.md`

## Model card

- **Name:** Kimi K3
- **Short description:** The world's first open 3T-class model (Reuters, Jul 17, 2026) — Moonshot's 2.8T-parameter MoE flagship launched Jul 16, 2026, with full weights + technical report published Jul 27 (96 Safetensors shards). Built on Kimi Delta Attention (KDA) + Attention Residuals with Stable LatentMoE (~2.5x scaling efficiency over K2). Strong launch-era agentic/coding results (TB2.1 88.3, BrowseComp 91.2, MCPMark 94.5) but Moonshot's own launch post admits it trails the strongest proprietary systems; superseded by Kimi K3.1 Pro on Oct 23, 2026.
- **Provider / access:** Kimi API (`kimi-k3`, OpenAI/Anthropic-compatible), Fireworks, Together, Novita ($3/$15 each), DeepInfra ($2.85/$14.25); kimi.com chat + Kimi Code CLI. Open weights: `moonshotai/Kimi-K3` (HF/ModelScope), vLLM/SGLang/TokenSpeed recipes; self-hosting recommends **64+ accelerators**. Not listed for Moonshot's discounted Batch API.
- **Release / knowledge:** Hosted 2026-07-16; weights + tech report 2026-07-27. Knowledge cutoff not stated in the sources read.
- **IDs:** `kimi-k3`; HF `moonshotai/Kimi-K3`; tech report `github.com/MoonshotAI/Kimi-K3`.
- **Context window:** 1,048,576 tokens; flat pricing across the full window (no long-context surcharge). llm-stats lists 1M/1M in/out (output cap unverified). AA-LCR 74.7 (card, AA Jul 23 snapshot) vs 88.7 (BenchLM's Nov 10 AA snapshot) — drift labelled. BrowseComp: 91.2 with 300K compaction vs 90.4 with full 1M unmanaged.
- **Modalities:** Card summary table says **Text, Image** (MoonViT-V2, 401M), but the intro claims text/image/video understanding and the table reports Video-MME (w. sub) 90.0 and MMVU 82.1 — inconsistency flagged; llm-stats lists text+image only. `reasoning_effort` low/high/max (default max), thinking always on; multi-turn requires passing back `reasoning_content` + `tool_calls` verbatim (preserved-thinking-history training).
- **Pricing (as of 2026-11-11):** $3 in / $15 out per 1M, cache hits $0.30 (Moonshot/Fireworks/Together/Novita); DeepInfra $2.85/$14.25, cache $0.285. K3.1 Pro (Oct 23) cut this ~1/3 to $2/$10.
- **Architecture:** MoE, **2.8T total / 104B activated**; 93 layers (1 dense), **69 KDA + 24 Gated MLA** (K3.1 Pro swaps the MLA layers for Gated DSA), 896 experts (16 selected + 2 shared), 160K vocab, SiTU-GLU, AttnRes; MXFP4 weights / MXFP8 activations with QAT from the SFT stage. License: Kimi K3 License (modified MIT; MaaS >$20M/12mo needs a Moonshot agreement; very large products need attribution).

### Raw benchmarks found

Vendor table (HF model card / launch blog; effort max, temp 1.0, top-p 0.95 single-step / 1.0 agentic; peers: Fable 5 / GPT-5.6 Sol / Opus 4.8 / GPT-5.5 xhigh / GLM-5.2; harness footnotes matter — Kimi Code vs Claude Code/Codex/Terminus-2, H20-calibrated branches):

- Coding: Terminal-Bench 2.1 **88.3** (Kimi Code; Sol 88.8 Codex); ProgramBench **77.8** (best in table); FrontierSWE **81.2** (Fable 86.6); DeepSWE v1.1 **67.5** (67.3 on the official mini-SWE-agent leaderboard); SWE-Marathon **42.0** (H20-recalibrated pre-v1.1 branch; Fable 35.0 with 35% fallbacks); PostTrainBench 36.6 (H20, not official H100); MLS-Bench-Lite 48.3; SciCode 58.7; in-house Kimi Code Bench 2.0 72.9 (73.7 w/ Claude Code)
- Agentic: BrowseComp **91.2** (300K compaction; 90.4 full-1M); DeepSearchQA **95.0 F1**; MCPMark-Verified **94.5** (best); MCP-Atlas 84.2 (500-task public subset, Gemini 3.1 Pro judge); Toolathlon-Verified 76.5 (card) vs 73.2 (launch blog via BenchLM); OSWorld-Verified **84.8**; OSWorld 2.0 58.3; GDPval-AA v2 **1,686 Elo** (AA Jul 23) vs 1,584 (BenchLM's Nov 10 snapshot); AA-Briefcase 1,548; Harvey Lab-AA **94.6 criterion pass rate** (v1.0 metric — NOT the hallucination-gated all-pass v1.1 used in later cards); OfficeQA Pro 63.3 (image-rendered PDFs); SpreadsheetBench 2 34.8; AutomationBench 30.8 (600-task public subset); JobBench 54.3 (card) vs 52.9 (blog); ALE 28.3; APEX-Agents 41.0; τ³-Banking 33.4 (card) vs AA Tau3 46.0; SaaS-Bench 60.1; CorpFin v2 71.6 / Finance Agent v2 54.4 / Legal Research Bench 44.2 (Vals)
- Reasoning/knowledge: GPQA-Diamond **93.5**; HLE-Full **43.5 no-tools / 56.0 w-tools**; CritPt 23.4; AA-LCR 74.7 (Jul 23)
- Vision: MathVision **94.3 / 97.8 w-Python**; CharXiv RQ 84.8 / 91.3; MMMU-Pro 81.6 / 83.4; OmniDocBench **91.1**; Video-MME (w. sub) **90.0**; MMVU 82.1; ZeroBench 23.0 / 41.0 pass@5; BabyVision w-Python 85.7; WorldVQA 51.0; in-house PerceptionBench 58.5

Independent runs (via BenchLM's sourced profile, Nov 10, plus AA/ARC/Vals leaderboards):

- Vals AI: SWE-bench **93.4**, LiveCodeBench 87.2, TB2.1 **80.9** (vs vendor 88.3), GPQA-D 92.9, MMLU-Pro 88.0; AA TB2.1 85.0
- ARC Prize semi-private: ARC-AGI-1 **94.5**, ARC-AGI-2 **60.4** (far below the GPT-6.x class's 90+)
- AA: Intelligence Index **43.6** (version unstated; K3.1 Pro later 46.5–55 depending on version), AA-HLE 46.9, AA-GPQA 93.5, AA-Omniscience 19.7 (accuracy 47.6%, hallucination 53.2%), Agentic Index 50.6, Coding Index 76.2, AA-MMMU-Pro 80.5, AA-SciCode 59.5, AA-AnalystAgent 38.8, ITBench 47.7, EnterpriseOps-Gym 45.3
- Newer/harder suites expose the generation gap: **Terminal-Bench 4.0 13%** (Moonshot's K3.1 card; K3.1 Pro: 65.7), FrontierCode 2.0 **17.7** (Cognition), FrontierSWE v2 25.9 (Proximal), CursorBench 3.2 60.8, ApprenticeBench 18% (GUI), MazeBench 1%, Bug Hunt 21.0 fixes, PostTrainBench v1.1 32.0
- Cyber/safety: AA Cyber Index 41.3, CyberGym-E2E-AA 58.0, CWE-Bench-AA 53.3, DeepsecBench-AA 12.5; **Gray Swan IPI ASR@15 52.7%** (via Google's Argon launch chart — very weak injection resistance); Finch 77.3 / b3 Agent Security 88.0 / Cyber Misuse Refusal 94.0 (via Mistral's Large 4 OSS post)
- Other: ScarfBench 61.3 (IBM), VulcanBench v3 73.7, OpenHarmony Bench 57.3, Hermes Index 39.2 / Bench 71.5 (Nous), ExtractBench 83.17 (LlamaIndex), Design Arena Website 1,331 (OpenRouter); Arena WebDev **17th** (MindStudio's K3.1 review; K3.1 Pro rose to 8th); BenchLM aggregate **69.2/100, #18 of 1020** (partial coverage, 97/812)

### Normalized scores (1–100)

- **Tool use: 85/100.** Launch-era strengths: BrowseComp 91.2, MCPMark 94.5, OSWorld-V 84.8, DeepSearchQA 95.0, GDPval 1,584–1,686 (snapshot-dependent); capped by ALE 28.3, APEX ~38–41, AutomationBench 30.8, ApprenticeBench 18%, MazeBench 1%, and Gray Swan IPI 52.7% — agentic reliability and injection resistance well below the K3.1/Opus class.
- **Reasoning: 84/100.** GPQA-D 93.5 (Vals 92.9 confirms) and HLE 56.0 w-tools are frontier-adjacent; capped by ARC-AGI-2 60.4 (verified), CritPt 23.4, AA index 43.6, and AA-Omniscience 19.7 with 53.2% hallucination — parametric reliability is the weak spot Moonshot fixed in K3.1.
- **Context window: 92/100.** Full 1,048,576-token window at flat pricing with no surcharge, AA-LCR up to 88.7 (Nov snapshot), and full-1M BrowseComp 90.4 without compaction; capped by the 74.7 vs 88.7 LCR snapshot spread, unverified output cap, and 300K compaction being the better browsing configuration.
- **Multimodal: 82/100.** Elite document/chart/math vision — MathVision 97.8 w-Python, OmniDocBench 91.1, CharXiv 91.3 — plus Video-MME 90.0 / MMVU 82.1 rows; capped by the card's own Text/Image-only summary table contradicting the video claims, MMMU-Pro 81.6 (AA 80.5), and ZeroBench 41.0.
- **Coding: 85/100.** TB2.1 88.3 (Vals 80.9 / AA 85.0), SWE-bench 93.4 (Vals), ProgramBench 77.8, FrontierSWE 81.2; capped hard by the next-generation suites — TB4.0 13%, FrontierCode 2.0 17.7, FrontierSWE v2 25.9 — showing the launch-era scores did not transfer to harder 2026H2 tasks.
- **Cost efficiency: 72/100.** $3/$15 with $0.30 cache hits, flat across 1M tokens, five providers, and open weights; capped by no Batch discount, DeepInfra-only price competition, 64+ accelerator self-hosting, and K3.1 Pro delivering far more capability at $2/$10 — K3 is now the worse value of the two.
- **Overall Score: 85.6/100.** Mean of the five quality dims (85+84+92+82+85)/5 = 85.6. Best-fit: a historically important open-weight frontier milestone with genuine 1M-context agentic ability, but as of Nov 2026 it is superseded — K3.1 Pro beats it on nearly every axis at 2/3 the price, and its TB4.0 13% / Gray Swan 52.7% numbers rule it out for hardened production agent use.

---

## Signature

- Provided by: **Qwen 4 Max (qwen4-max)** — 2026-11-11
- Method: public internet research (Moonshot's full Hugging Face model card incl. per-benchmark harness footnotes, BenchLM's sourced profile and independent release analysis, llm-stats' five-provider rate card, Reuters' launch coverage via search snippet, and MindStudio's K3.1 review for Arena/KingBench context); scores are normalized 1–100 interpretations, not official vendor scores. Conflicts labelled, never averaged: AA-LCR 74.7 (card, Jul 23) vs 88.7 (Nov 10); GDPval-AA 1,686 (Jul 23) vs 1,584 (Nov 10); Toolathlon 76.5 (card) vs 73.2 (blog); JobBench 54.3 vs 52.9; τ³-Banking 33.4 (card) vs AA 46.0; TB2.1 88.3 (vendor, Kimi Code) vs 80.9 (Vals) vs 85.0 (AA). Harvey Lab-AA 94.6 is the v1.0 criterion-pass-rate metric, NOT comparable with the hallucination-gated all-pass v1.1 scores (K3.1 Pro 23.7, GPT-6.1 Sol 6.9). Vendor table mixes harnesses (Kimi Code / Claude Code / Codex / Terminus-2) and H20-recalibrated branches (SWE-Marathon pre-v1.1, PostTrainBench) — flagged per the card's own footnotes. Modality conflict flagged: summary table says Text/Image while intro + Video-MME/MMVU rows imply video. AA Intelligence Index 43.6 is version-unstated and never compared with v4.3.2/v5.0.1 scores. whatllm.org returned 402 and Reuters 401 — Reuters used at snippet level only. Identity: Kimi K3 (Jul 16) ≠ Kimi K3.1 Pro (Oct 23); TB2.1 and TB4.0 are different benchmark versions.
- Reference URLs:
  - [Kimi-K3 model card — Hugging Face](https://huggingface.co/moonshotai/Kimi-K3)
  - [Kimi K3 launch blog — Moonshot AI](https://www.kimi.com/blog/kimi-k3)
  - [Kimi K3 benchmark profile — BenchLM](https://benchlm.ai/models/kimi-k3)
  - [Kimi K3: The Open Model Closing the Gap — BenchLM blog](https://benchlm.ai/blog/posts/kimi-3-release-data-coming-soon)
  - [Kimi K3: Benchmarks, Pricing, API, Context & Open Weights — llm-stats](https://llm-stats.com/models/kimi-k3)
  - [China's Moonshot unveils world's largest open AI model — Reuters](https://www.reuters.com/world/china/chinas-moonshot-unveils-worlds-largest-open-ai-model-closing-us-rivals-2026-07-17/)
  - [Kimi K3.1 Pro benchmarks review (K3 Arena WebDev context) — MindStudio](https://www.mindstudio.ai/blog/kimi-k3-1-pro-benchmarks-review)
- Future sources: add a new file next to this one, e.g. `GPT_5.md`, using the same headings.