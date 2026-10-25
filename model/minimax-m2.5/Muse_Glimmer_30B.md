# MiniMax M2.5 — findings by Muse Glimmer 30B

- Source: MiniMax / MiniMax-M2.5
- Date: 2026-10-25 (UTC)
- Overview and scoring methodology: ../../model-comparison.md
- Cross-model signed log: ../../model-findings.md

## Model card

- **Name:** MiniMax M2.5
- **Short description:** MiniMax proprietary frontier LLM released 2026-02-12, extensively RL-trained in hundreds of thousands of real-world environments for coding, agentic tool use, search, office work and economically valuable tasks. Text-only agent model, not a multimodal variant.
- **Provider / access:** MiniMax Platform API `MiniMax-M2.5` / `MiniMax-M2.5-Lightning`. OpenAI-compatible and Anthropic-compatible Chat Completions. Tool calls supported, reasoning on by default.
- **Release / knowledge:** 2026-02-12; knowledge cutoff not publicly disclosed.
- **IDs:** `minimax/MiniMax-M2.5`
- **Context window:** Not publicly disclosed by vendor; no verified independent measurement found. Internal BrowseComp evaluation mentions context management but no token limit is published.
- **Modalities:** Input text; Output text. Reasoning yes, tool calls yes, JSON mode supported. No verified image / audio / video input.
- **Pricing (as of 2026-02-12):** M2.5-Lightning: $0.30 / 1M input, $2.40 / 1M output, 100 tokens/s. M2.5 at 50 tokens/s costs half: ~$0.15 / 1M input, ~$1.20 / 1M output. Caching supported. Paid tier, no free tier.
- **Architecture:** proprietary MoE, 229B total parameters per Hugging Face card. Open-weight release on Hugging Face; license Modified-MIT.

### Raw benchmarks found

> Sources: MiniMax blog MiniMax M2.5 2026-02-12, Hugging Face model card MiniMaxAI/MiniMax-M2.5, GitHub MiniMax-AI/MiniMax-M2.5 README. Conflicting SWE-Bench Verified numbers: vendor 80.2% vs Hugging Face eval 75.8%.

Agent / tool use:

- BrowseComp: **76.3%** (vendor, with context management)
- Wide Search: industry-leading, no verified public number found
- RISE: internal expert search benchmark, no verified public number found
- Terminal-Bench 2.1: no verified public score found
- Tau3-Banking / Tau2-Bench: no verified public score found
- GDPval-AA: no verified public score found
- Claw-Eval / ClawProBench: no verified public score found
- Toolathon / MCP-Atlas / SWE Atlas Codebase QnA: no verified public score found

Reasoning / knowledge:

- GPQA Diamond: **85.2%** (Hugging Face eval results)
- HLE w/o tools: **19.4%** (Hugging Face eval / vendor appendix)
- LCR / MLCR: no verified public score found
- CritPt: no verified public score found
- Artificial Analysis Intelligence Index / BenchLM overall: no verified public score found
- AIME25: **86.3%** (vendor appendix)
- AA-LCR: **69.5%** (vendor appendix)
- Omniscience Accuracy / Hallucination Rate: no verified public score found

Coding:

- SWE-bench Verified: **80.2%** vendor, **75.8%** Hugging Face eval
- Multi-SWE-Bench: **51.3%** vendor
- SWE-bench Pro: **55.4%** Hugging Face eval
- LiveCodeBench: no verified public score found
- SciCode / AA-SciCode: **44.4%** vendor appendix
- Vibe Code Bench / VIBE-Pro: on par with Opus 4.5 per vendor, no verified public number found
- DeepSWE / Coding Index / other: no verified public score found

Long context:

- BrowseComp 76.3% with context management reported; no MRCR / RULER / GraphWalks public score found

### Normalized scores (1–100)

- **Tool use: 82/100.** BrowseComp 76.3% and vendor claims industry-leading Wide Search / RISE with improved round efficiency vs M2.1. Capped by lack of independent Terminal-Bench / Tau / Claw scores.
- **Reasoning: 80/100.** GPQA Diamond 85.2% and AIME25 86.3% show strong reasoning; HLE w/o tools 19.4% and AA-LCR 69.5% pull down. No independent Artificial Analysis index.
- **Context window: 70/100.** No verified token limit published; context management used in BrowseComp. Score reflects assumed mid-range long-context capability without measurement.
- **Multimodal: 15/100.** Text-only model per API docs; M2.x series does not support image/video input. Text-only baseline.
- **Coding: 85/100.** SWE-Bench Verified 80.2% vendor / 75.8% HF eval, Multi-SWE-Bench 51.3%, SWE-Bench Pro 55.4%, SciCode 44.4%. Strong agentic coding, capped by lack of LiveCodeBench / SWE-Pro independent numbers.
- **Cost efficiency: 95/100.** $0.15/$1.20 per 1M tokens for M2.5, ~$0.30/$2.40 for Lightning; vendor claims 10-20× cheaper than Opus/GPT-5. Very high efficiency.
- **Overall Score: 66/100.** Mean of five quality dims (82+80+70+15+85)/5 = 66.4 → 66. Best-fit: high-cost-efficiency coding/agentic model with strong reasoning and tool use, text-only, context limit unverified.

---

## Signature

- Provided by: **Muse Glimmer 30B (meta/muse-glimmer-30b)** — 2026-10-25
- Method: public internet research; scores are normalized 1–100 interpretations, not official vendor scores.
- Future sources: add a new file next to this one, e.g. `GPT_5.md`, using the same headings.

---
