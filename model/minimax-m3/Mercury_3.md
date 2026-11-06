# MiniMax M3 — findings by Mercury 3

- Source: MiniMax (M3)
- Date: 2026-11-06 (UTC)
- Overview and scoring methodology: `../../model-comparison.md`
- Cross-model signed log: `../../model-findings.md`

## Model card

- **Name:** MiniMax M3
- **Short description:** Shanghai lab MiniMax's open-weight flagship (released 2026-06-01) combining frontier-adjacent coding, a 1M-token context window via MiniMax Sparse Attention (MSA), and native image/video understanding — the first open-weight model claiming all three. Delivers proprietary-adjacent results at ~5–10% of US-lab pricing.
- **Provider / access:** MiniMax API, token plans, MiniMax Code; open weights released shortly after launch (Hugging Face / GitHub, `MiniMax-M3`); self-hostable. License terms not confirmed at launch (M2.7 precedent: non-commercial default).
- **Release / knowledge:** Released 2026-06-01; knowledge cutoff not published.
- **IDs:** MiniMax `MiniMax-M3` (API: `minimax-m3`).
- **Context window:** 1M tokens (guaranteed minimum 512K at standard rate; higher rate above); MSA cuts per-token compute at 1M to 1/20 of prior generation, >9x faster prefill, >15x faster decoding.
- **Modalities:** text + image + video input; text output; native multimodal understanding; agentic tools (MCP); ~100 tok/s output (~3x Opus).
- **Pricing (as of 2026-06):** ~$0.30 in / $1.20 out per 1M (llm-stats lists $0.28/$1.10; cached ~$0.06); blended as low as ~$0.06/M with cache optimization; token plans Plus $20/1.7B, Max $50/5.1B, Ultra $120/9.8B.
- **Architecture:** MoE with Grouped Query Attention + MiniMax Sparse Attention block-selection; open weights (size/active params undisclosed at launch).

### Raw benchmarks found

Agent / tool use:

- MCP Atlas: **74.2%** (MiniMax)
- BrowseComp: **83.5%** (MiniMax; above Opus 4.7's 79.3)
- Terminal-Bench 2.1: **66.0%** (MiniMax)
- SWE-fficiency: **34.8%**; KernelBench Hard: **28.8%** (MiniMax)

Reasoning / knowledge:

- No independent AA Intelligence Index or GPQA/HLE score found for M3 at time of research; BenchLM composite 49.3/100 (rank #104/216) with strongest category Instruction Following (#6)
- Long-horizon demos (vendor): ICLR 2025 paper reproduced autonomously in 12h; CUDA FP8 utilization 7.6% → 71.3% over 24h; PostTrainBench 0.37

Coding:

- SWE-Bench Pro: **59.0%** (MiniMax) — beats GPT-5.5 and Gemini 3.1 Pro; approaches Claude Opus 4.7
- SWE-bench Verified: **~80.5%** (OpenRouter/AI Rankings) — within ~0.2 points of Gemini 3.1 Pro; DeepSeek V4 leads at 80.6%
- Not yet on DeepSWE board at research time; vendor runs often used own scaffolding (Claude Code / Mini-SWE-Agent / Terminus)

Long context:

- 1M-token window with MSA efficiency claims (1/20 compute, >9x prefill, >15x decoding at 1M); independent long-context retrieval scores not yet verified

### Normalized scores (1–100)

- **Tool use: 84/100.** MCP Atlas 74.2%, BrowseComp 83.5%, Terminal-Bench 2.1 66.0% are strong; all vendor-run with own scaffolding, and the model was absent from DeepSWE at research time.
- **Reasoning: 82/100.** No independent reasoning index available; BenchLM composite (49.3) and vendor caveats put it below the closed frontier on the hardest tasks despite strong demos.
- **Context window: 92/100.** 1M window with genuinely novel efficiency claims (MSA); verified minimum 512K at standard rate; independent retrieval verification still pending.
- **Multimodal: 78/100.** Native image+video understanding (OmniDocBench above Gemini 3.1 Pro, SVG-Bench above Opus 4.7 per vendor); text output only, no audio input confirmed.
- **Coding: 88/100.** SWE-Bench Pro 59.0% and SWE-bench Verified ~80.5% are frontier-adjacent — above GPT-5.5/Gemini 3.1 Pro on Pro, within a whisker of Gemini on Verified; capped by vendor-run numbers and absence from the DeepSWE leaderboard.
- **Cost efficiency: 85/100.** ~$0.30/$1.20 with $0.06 cache and free self-hostable open weights — ~5–10% of comparable proprietary-model cost; token plans available; strong value.
- **Overall Score: 85/100.** Mean of the five non-cost dims (84+82+92+78+88)/5 = 84.8 → 85. Best-fit: best-value open-weight long-context coding/agentic model of mid-2026; verify with independent runs before production bets.

---

## Signature

- Provided by: **Mercury 3 (inception/mercury-3)** — 2026-11-06
- Method: public internet research; scores are normalized 1–100 interpretations, not official vendor scores.
- Reference URLs:
  - [MiniMax: M3 launch/architecture blog](https://www.minimax.io/blog/minimax-m3)
  - [MiniMax official X (launch benchmarks)](https://x.com/MiniMax_AI/status/2061266317815296322)
  - [The AI Rankings: MiniMax M3 review](https://theairankings.com/minimax/minimax-m3/)
  - [Fello AI: MiniMax M3 deep dive (MSA architecture, benchmarks, pricing)](https://felloai.com/minimax-m3/)
  - [DataNorth: MiniMax launches M3](https://datanorth.ai/news/minimax-launches-m3)
  - [VentureBeat: M3 eclipsing GPT-5.5/Gemini 3.1 Pro at 5–10% cost](https://venturebeat.com/technology/minimax-m3-debuts-eclipsing-gpt-5-5-and-gemini-3-1-pro-on-key-benchmark-performance-for-just-5-10-of-the-cost)
  - [OpenRouter: MiniMax M3 benchmarks](https://openrouter.ai/minimax/minimax-m3/benchmarks)
  - [BenchLM: MiniMax M3](https://benchlm.ai/models/minimax-m3)
- Future sources: add a new file next to this one using the same headings.
