# MiniMax M2.7 — findings by Step 5 Preview

- Source: MiniMax (`MiniMax-M2.7`, weights `MiniMaxAI/MiniMax-M2.7`)
- Date: 2026-10-09 (UTC)
- Overview and scoring methodology: `../../model-comparison.md`
- Cross-model signed log: `../../model-findings.md`

## Model card

- **Name:** MiniMax M2.7 (2026-03-18; M2.7-highspeed is the same model tuned for latency)
- **Short description:** MiniMax's "self-evolving" agent model — a sparse MoE with 230B total but only 10B active per token (4.3% activation, 256 local experts, 8 per token, 62 layers) that MiniMax frames as its first model to actively participate in its own evolution (building and refining agent harnesses rather than just answering prompts). It is the strongest sub-300B open-weights agent of its moment: the highest GDPval-AA Elo among open-weight models (1,495, passing GPT-5.3), Toolathlon 46.3%, and 62.7% on the MM Claw end-to-end benchmark (close to Sonnet 4.6) with 97% skill compliance across 40+ skills. It ships in two API flavors with identical outputs — standard and highspeed (~100 tok/s at double price) — and its weights are open but under a **non-commercial license** (commercial use needs written authorization).
- **Provider / access:** Open weights on Hugging Face / ModelScope (1M+ monthly downloads); MiniMax API Platform; OpenRouter ($0.21/$0.84); NVIDIA NIM / build.nvidia.com; MiniMax Agent platform.
- **Release:** 2026-03-18.
- **Context window:** 200K input (205K); max output 131K.
- **Modalities:** Text in → text out.
- **Pricing (as of 2026-10-09):** $0.30/M input, $1.20/M output, $0.06 cache read (standard); $0.60/$2.40 highspeed; OpenRouter $0.21/$0.84/$0.042.
- **Architecture:** MoE 230B/10B, top-k expert routing, RoPE + QK-RMSNorm; native multi-agent ("Agent Teams").

### Raw benchmarks found

Vendor (GitHub README / MiniMax):

- GDPval-AA: **1,495 Elo** (highest among open-weight models; surpasses GPT-5.3); Toolathlon: **46.3%**; MM Claw end-to-end: **62.7%** (close to Sonnet 4.6); 97% skill compliance across 40+ skills
- SWE-bench Pro: **56.2%**; Terminal-Bench 2: **57.0%** (AI/TLDR tabulation)

Third-party (NVIDIA NGC benchmark table vs MiniMax-2.7 / GLM-5.1 / Kimi-K2.6 / Qwen-3.5 / DS-v4-Pro / DS-v4-Flash):

- SWE-bench Verified: **72.2**; SWE-bench Multilingual: **69.2**; SWE-bench Pro: **56.2**
- Terminal-Bench 2.1: **55.5**; GDPVal: 46.7; ProfBench (Search): 52.0
- PinchBench: **77.6**; TauBench V3 average: **66.1** (Airline 75.3, Retail 84.9, Telecom 89.6, Banking 14.6)
- BrowseComp: 54.1; Vals Financial Agent v2: 51.3 (with search 50.5)
- LiveCodeBench v6: **77.2**; IMOAnswerBench: 68.3; Apex-Shortlist: 28.9
- GPQA (no tools): **86.6**; SciCode (subtask): 38.3; HLE: **23.1**; CritPt: 0.6; MMLU-Pro: 81.9
- IFBench: **74.6**; Multi-Challenge: 42.5; AA-LCR: 69.8
- AA-Omniscience: 20.5% accuracy / 74.4% non-hallucination

Z.ai's comparison table (GLM-5.2 blog, M2.7 column): HLE 37.0, AIME 2026 94.6, HMMT Feb 84.4, GPQA-Diamond 93.0, SWE-Pro 59.0, NL2Repo 42.1, TB2.1 65.0, DeepSWE 20.0, MCP-Atlas 74.2.

### Normalized scores (1–100)

- **Tool use: 68/100.** A genuinely strong agentic profile for 10B active: PinchBench 77.6%, TauBench V3 average 66.1% (Telecom 89.6), MCP-Atlas 74.2%, Toolathlon 46.3% and the open-weights-best GDPval Elo 1,495; held mid-upper by BrowseComp 54.1%, Banking 14.6% and TB 2.1 55.5%.
- **Reasoning: 70/100.** GPQA Diamond 86.6–93.0%, LiveCodeBench 77.2%, IMOAnswerBench 68.3% and MMLU-Pro 81.9% are upper-mid-band — better than its 10B-active size suggests; HLE 23.1–37.0%, Apex-Shortlist 28.9% and CritPt 0.6% cap it below frontier.
- **Context window: 72/100.** 200K input (205K) is the 200K–500K band (65–84) with AA-LCR 69.8% — solid but a quarter of the 1M frontier norm.
- **Multimodal: 12/100.** Text-only — the methodology's text-only band (10–20).
- **Coding: 68/100.** SWE-bench Verified 72.2%, SWE-Pro 56.2–59.0%, TB 2.1 55.5–65.0% and LCB 77.2% are strong open-weights agentic coding (its MM Claw 62.7% ≈ Sonnet-4.6-level on that harness); SciCode 38.3%, DeepSWE 20.0% and Banking 14.6% show the remaining gaps.
- **Cost efficiency: 90/100.** $0.30/$1.20 with $0.06 cache reads (OpenRouter $0.21/$0.84) — the methodology's ~$0.6/$2.2 ≈ 92 range — with a 4.3% activation rate keeping serving cheap; docked because the weights are non-commercially licensed.
- **Overall Score: 58/100.** Best-fit recommendation: the best sub-300B open-weights agent — 10B-active economics with open-weights-best GDPval and Sonnet-adjacent MM Claw scores; text-only, 200K context, and the license blocks commercial self-hosting without authorization.

---

## Signature

- Provided by: **Step 5 Preview (StepFun)** — 2026-10-09
- Method: public internet research (MiniMax model page + GitHub README + news post, Hugging Face card, NVIDIA developer blog benchmark table, OpenRouter, AI/TLDR, Z.ai comparison tables); scores are normalized 1–100 interpretations, not official vendor scores.
- Future sources: add a new file next to this one, e.g. `MiniMax_M3_1.md`, using the same headings.
