# MiniMax M2.5 — findings by LongCat 2.5 Preview

- Source: MiniMax/MiniMax-M2.5
- Date: 2026-10-21 (UTC)
- Overview and scoring methodology: `../../model-comparison.md`
- Cross-model signed log: `../../model-findings.md`

## Model card

- **Name:** MiniMax M2.5
- **Short description:** MiniMax's open-weight (Modified MIT) 228.7B total / 10B active MoE (Feb 2026), RL-trained across hundreds of thousands of real-world environments for agentic coding, tool use and search. Text-only; one generation behind M2.7.
- **Provider / access:** Open weights on Hugging Face `MiniMaxAI/MiniMax-M2.5`; hosted via OpenRouter `minimax/minimax-m2.5`, NVIDIA NIM, MiniMax platform. OpenAI-compatible Chat Completions. No OpenCode Zen Free ID.
- **Release / knowledge:** Released 2026-02-12; knowledge cutoff not published.
- **IDs:** `minimax/minimax-m2.5` (OpenRouter); `MiniMaxAI/MiniMax-M2.5` (Hugging Face).
- **Context window:** 196,608 (192K) native per `config.json` (`max_position_embeddings`); some trackers list 200K. Not 1M — the 1M figure on third-party index sites is unverified.
- **Modalities:** text in / text out only (no vision). Reasoning and tool calling.
- **Pricing (as of 2026-10-21):** M2.5 $0.15 in / $0.60 out per 1M; M2.5-Lightning $0.30/$2.40; some routes $0.30/$1.20. Open weights (Modified MIT) self-host free.
- **Architecture:** 228.7B total / ~10B active MoE with GQA, FP8 block-wise quantization, Multi-Token Prediction (speculative decoding); Modified MIT license.

### Raw benchmarks found

Agent / tool use:

- Terminal-Bench 2: **51.7%** (MiniMax model card, Claude Code 2.0.64 scaffold)
- BrowseComp: **76.3%** (with context management); BFCL_v3_MultiTurn: **76.8%**
- MEWC: **74.4%**; GDPval-MM: **59.0%** (vendor internal benchmarks)
- Wide Search / RISE: vendor-reported, no independent score
- Claw-Eval / ClawProBench / MCP-Atlas: no verified public score found

Reasoning / knowledge:

- GPQA Diamond: **85.2%** (MiniMax model card)
- HLE (w/o tools): **19.4%**; AIME25: **86.3%**
- SciCode: **44.4%**; AA-LCR: **69.5%**; IFBench: **70.0%**
- LLM Stats score: **36.9** (#72 overall); Artificial Analysis Intelligence Index not published

Coding:

- SWE-bench Verified: **80.2%** (vendor, Claude Code scaffold, 4-run avg); **74.2%** (Vals AI independent)
- SWE-bench Pro: **55.4%**; SWE-bench Multilingual: **74.1%**; Multi-SWE-bench: **51.3%**
- LiveCodeBench: **79.2%** (third-party)
- VIBE-Pro (AVG): **54.2%**

Multimodal:

- None — text-in / text-out model (no image, audio, or video input).

Long context:

- AA-LCR: **69.5%**; 192K native window, no RULER/MRCR retrieval figure reported.

### Normalized scores (1–100)

- **Tool use: 73/100.** Terminal-Bench 2 51.7% is mid-band, but BrowseComp 76.3%, BFCL-MultiTurn 76.8% and MEWC 74.4% are strong, and the model is explicitly tuned for agentic tool use; capped by GDPval-MM 59.0% and the absence of Claw-Eval/MCP-Atlas.
- **Reasoning: 71/100.** GPQA 85.2% and AIME25 86.3% are strong for a 10B-active MoE, but HLE 19.4% is low, SciCode 44.4% is mid, and no AA Intelligence Index is published.
- **Context window: 65/100.** 196,608 (192K) sits at the top of the 100K–200K band (50–64) — just under the 200K = 70 anchor; the widely-circulated "1M" figure is unverified and contradicted by `config.json`.
- **Multimodal: 15/100.** Text-only input and output — fixed at 15 per the methodology's text-only band (10–20).
- **Coding: 79/100.** SWE-bench Verified 80.2% (vendor) / 74.2% (Vals AI), SWE-bench Pro 55.4%, SWE-bench Multilingual 74.1% and LiveCodeBench 79.2% place it near the frontier coding anchors; capped by Multi-SWE-bench 51.3% and the vendor-vs-independent gap.
- **Cost efficiency: 94/100.** Open Modified-MIT weights (self-host $0) with a $0.15/$0.60 per 1M hosted route — between the methodology's ~$0.10/$0.20 (97–99) and ~$0.60/$2.20 (~92) anchors.
- **Overall Score: 61/100.** Half-up mean of Tool use (73), Reasoning (71), Context window (65), Multimodal (15), Coding (79) = 303/5 = 60.6 → 61. Best fit: a cheap open agentic-coding MoE; the text-only multimodal floor is the main drag on its Overall.

---

## Signature

- Provided by: **LongCat 2.5 Preview (meituan/longcat-2.5-preview)** — 2026-10-21
- Method: public internet research (MiniMax news/blog + GitHub model card, Hugging Face `MiniMaxAI/MiniMax-M2.5` card + `.eval_results` + config discussion, NVIDIA NIM reference, InferenceX/SemiAnalysis, Unsloth guide, LLM Stats); scores are normalized 1–100 interpretations, not official vendor scores.
- Future sources: add a new file next to this one, e.g. `GPT_5.md`, using the same headings.
